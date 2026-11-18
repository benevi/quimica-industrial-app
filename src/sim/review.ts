import {
  FIELDS, MATERIALS, SECTIONS, THEORETICAL_KG, finalImpurities, fmtNum, parseNum, scaleDisplay,
  type MaterialId, type Sim,
} from "./engine";

export type Severity = "crítico" | "mayor" | "menor";
export type Finding = {
  sev: Severity;
  area: "Seguridad" | "Proceso" | "Documentación (ALCOA+)" | "Calidad del producto";
  title: string;
  detail: string;
  lesson?: { slug: string; title: string };
};

export type Review = {
  findings: Finding[];
  results: { test: string; spec: string; value: string; ok: boolean }[];
  decision: "Liberable" | "Pendiente de desviaciones" | "Rechazado / en investigación";
  score: number;
};

const L = {
  alcoa: { slug: "alcoa-plus", title: "ALCOA+" },
  bpd: { slug: "buenas-practicas-documentacion", title: "Buenas prácticas de documentación" },
  desv: { slug: "desviaciones", title: "Desviaciones" },
  medidas: { slug: "medidas-de-proceso", title: "Medidas de proceso y calibración" },
  recep: { slug: "recepcion-y-cuarentena", title: "Recepción y estados de calidad" },
  frio: { slug: "frio-y-refrigeracion", title: "Frío y refrigeración" },
  alarmas: { slug: "alarmas-y-enclavamientos", title: "Alarmas y enclavamientos" },
  inert: { slug: "carga-e-inertizacion", title: "Carga e inertización" },
  crist: { slug: "cristalizacion", title: "Cristalización" },
  centri: { slug: "centrifuga", title: "Centrífuga" },
  secado: { slug: "secaderos", title: "Secaderos" },
  filtros: { slug: "filtros", title: "Filtros" },
  envas: { slug: "envasado-y-etiquetado", title: "Envasado y etiquetado" },
  oos: { slug: "oos-y-oot", title: "OOS y OOT" },
  valvulas: { slug: "tuberias-y-valvulas", title: "Tuberías y válvulas" },
};

function hasDeviation(s: Sim, ...words: string[]) {
  return s.deviations.some((d) => {
    const t = (d.what + " " + d.action).toLowerCase();
    return words.some((w) => t.includes(w));
  });
}

export function reviewBatch(s: Sim): Review {
  const F: Finding[] = [];
  const v = (id: string) => s.entries[id]?.value;
  const n = (id: string) => parseNum(v(id));

  // --- Completo y atribuible
  const missing = FIELDS.filter((f) => !s.entries[f.id]);
  for (const f of missing) {
    F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: `Dato sin registrar: ${f.label}`, detail: "Completo: todos los campos de la hoja deben estar rellenos o anulados con justificación.", lesson: L.alcoa });
  }
  for (const sec of SECTIONS) {
    if (sec.id === "cierre") continue;
    if (s.signatures[sec.id] == null) {
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Sección sin firmar: ${sec.title}`, detail: "Atribuible: cada etapa debe llevar la firma de quien la realizó.", lesson: L.alcoa });
    }
  }
  // --- Contemporáneo
  for (const [id, e] of Object.entries(s.entries)) {
    if (e.late) {
      const f = FIELDS.find((x) => x.id === id)!;
      F.push({
        sev: e.late === "(sin motivo)" ? "mayor" : "menor",
        area: "Documentación (ALCOA+)",
        title: `Registro no contemporáneo: ${f.label}`,
        detail: e.late === "(sin motivo)" ? "Se registró después de terminar la etapa y sin explicar por qué." : `Registro tardío justificado («${e.late}»). Es aceptable de forma puntual, pero lo correcto es anotar en el momento.`,
        lesson: L.bpd,
      });
    }
  }
  const corrections = Object.values(s.entries).reduce((a, e) => a + e.history.length, 0);

  // --- Válvulas
  for (const vf of s.valveFindings ?? []) {
    F.push({ sev: vf.sev, area: "Seguridad", title: vf.text, detail: "Cada operación empieza abriendo solo las válvulas necesarias y termina cerrándolas. Una válvula olvidada puede mezclar líneas, dejar pasar producto o servicios donde no toca.", lesson: L.valvulas });
  }

  // --- Verificaciones previas
  if (v("r101_estado") && v("r101_estado") !== "Limpio y dentro de tiempo") {
    F.push({ sev: "mayor", area: "Proceso", title: "Se registró el reactor como no apto y aun así se usó", detail: "Si el estado no es «limpio y dentro de tiempo», no se empieza: se avisa y se limpia.", lesson: L.bpd });
  }
  if (s.scaleUsed === "B-05" && s.events.bascula.active) {
    F.push({ sev: "crítico", area: "Calidad del producto", title: "Pesadas con una báscula que no pasó la verificación diaria", detail: `La B-05 marcó ${fmtNum(s.scaleReading["B-05"], 2)} kg con la pesa de 50,00 kg (tolerancia ±0,10). Todas las cargas pesadas con ella son dudosas.`, lesson: L.medidas });
  }
  const verif = n("bascula_verif");
  if (s.scaleUsed && verif != null && Math.abs(verif - s.scaleReading[s.scaleUsed]) > 0.005) {
    F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "La lectura de verificación registrada no coincide con la báscula", detail: `Registraste ${fmtNum(verif, 2)} kg y la báscula ${s.scaleUsed} marcaba ${fmtNum(s.scaleReading[s.scaleUsed], 2)} kg. Exacto: se anota lo que da el instrumento.`, lesson: L.alcoa });
  }

  // --- Dispensación
  (Object.keys(MATERIALS) as MaterialId[]).forEach((m) => {
    const mat = MATERIALS[m];
    const lot = s.lotsUsed[m];
    const info = mat.lots.find((l) => l.lot === lot);
    if (info && info.status !== "Aprobado") {
      F.push({ sev: "crítico", area: "Calidad del producto", title: `Se usó ${mat.name} del lote ${lot} (${info.status})`, detail: "Solo se pueden usar materiales aprobados y dentro de fecha.", lesson: L.recep });
    }
    if (s.verifications[m] == null) {
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Pesada de ${mat.name} sin verificación por segunda persona`, detail: "Las pesadas críticas las comprueba otra persona antes de cargar.", lesson: L.bpd });
    }
    const shown = scaleDisplay(s, m);
    const rec = n(`peso_${m}`);
    if (rec != null && Math.abs(rec - shown) > 0.005) {
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Peso de ${mat.name} registrado distinto del que marcó la báscula`, detail: `Registro: ${fmtNum(rec, 2)} kg · báscula: ${fmtNum(shown, 2)} kg.`, lesson: L.alcoa });
    }
    if (Math.abs(s.dosed[m] - mat.target) > mat.tol + 1e-9) {
      F.push({ sev: "mayor", area: "Proceso", title: `Cantidad real de ${mat.name} fuera de tolerancia`, detail: `Objetivo ${fmtNum(mat.target, 2)} ± ${fmtNum(mat.tol, 2)} kg; cargado realmente ${fmtNum(s.dosed[m], 2)} kg.`, lesson: L.bpd });
    }
  });

  // --- Carga e inertización
  const w = s.water;
  if (w < 295 || w > 305) F.push({ sev: "mayor", area: "Proceso", title: "Volumen de agua fuera de rango", detail: `Se cargaron ${w} L (rango 295–305 L).` });
  if (n("agua_l") != null && Math.abs(n("agua_l")! - w) > 0.5) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El volumen de agua registrado no coincide con el totalizador", detail: `Registro ${v("agua_l")} L · totalizador ${w} L.`, lesson: L.alcoa });
  if (s.o2 > 2) F.push({ sev: "mayor", area: "Seguridad", title: "Se continuó sin alcanzar O₂ ≤ 2,0 %", detail: `El O₂ final fue ${fmtNum(s.o2)} %. Con disolvente o polvo y oxígeno hay riesgo de incendio, y el producto se oxida.`, lesson: L.inert });
  if (s.reactor.alarms.some((a) => a.text.startsWith("Carga de sólido sin inertizar"))) F.push({ sev: "mayor", area: "Seguridad", title: "Carga del sólido antes de inertizar", detail: "Primero se inertiza el reactor y después se carga el polvo.", lesson: L.inert });

  // --- Reacción
  const r = s.reactor;
  if (r.addStart != null && r.addEnd != null) {
    const dur = r.addEnd - r.addStart;
    if (dur < 30) F.push({ sev: "mayor", area: "Proceso", title: `Adición demasiado rápida (${dur} min)`, detail: "La hoja pide ≥ 30 min para que la camisa pueda quitar el calor de la reacción.", lesson: L.frio });
  } else {
    F.push({ sev: "crítico", area: "Proceso", title: "La adición de anhídrido no se completó", detail: "El lote no siguió la hoja de fabricación." });
  }
  if (r.maxTadd > 40) {
    const dev = hasDeviation(s, "temperatura", "frío", "frio", "glicol", "refrigera", "40");
    F.push({ sev: dev ? "menor" : "mayor", area: "Proceso", title: `Temperatura máxima en la adición: ${fmtNum(r.maxTadd)} °C (límite 40 °C)`, detail: dev ? "Excursión documentada en una desviación: QA evaluará su impacto." : "Excursión de un parámetro crítico sin desviación abierta.", lesson: L.desv });
  }
  if (r.interlock || r.alarms.some((a) => a.text.startsWith("TSHH"))) {
    F.push({ sev: "mayor", area: "Seguridad", title: "Actuó el enclavamiento de temperatura TSHH-101", detail: "La última protección instrumentada tuvo que parar la adición. Ante un fallo de frío, lo correcto es parar tú la adición en cuanto lo detectas.", lesson: L.alarmas });
  }
  const frio = s.events.frio;
  if (frio.active) {
    if (frio.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó al supervisor del fallo de refrigeración", detail: "Ante un fallo de un servicio crítico se avisa de inmediato.", lesson: L.frio });
    if (!hasDeviation(s, "frío", "frio", "glicol", "refrigera", "temperatura")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por el fallo de refrigeración", detail: "Cualquier incidencia que afecte a un parámetro crítico se documenta como desviación.", lesson: L.desv });
  }
  if (r.maxTreact > 90) F.push({ sev: "mayor", area: "Proceso", title: `Sobrecalentamiento en la reacción (${fmtNum(r.maxTreact)} °C)`, detail: "El rango es 75–85 °C. Más temperatura genera impurezas." });
  if (r.inRange < 60) F.push({ sev: "mayor", area: "Proceso", title: `Solo ${r.inRange} min a 75–85 °C (mínimo 60)`, detail: "El tiempo de reacción a temperatura es un parámetro de la hoja." });
  const lastIpc = s.ipc.filter((i) => i.ready <= (s.sectionEnd[3] ?? s.clock)).at(-1);
  if (!lastIpc) F.push({ sev: "crítico", area: "Calidad del producto", title: "No hay resultado de IPC de fin de reacción", detail: "No se puede pasar de etapa sin el IPC conforme." });
  else if (lastIpc.value > 0.5) F.push({ sev: "crítico", area: "Calidad del producto", title: `Se continuó con IPC fuera de límite (${fmtNum(lastIpc.value, 2)} %)`, detail: "La hoja dice mantener 30 min más y repetir el IPC.", lesson: L.oos });
  if (lastIpc && n("ipc_af") != null && Math.abs(n("ipc_af")! - lastIpc.value) > 0.005) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El IPC registrado no coincide con el resultado del laboratorio", detail: `Registro ${v("ipc_af")} · laboratorio ${fmtNum(lastIpc.value, 2)} % área.`, lesson: L.alcoa });
  const tmaxRec = n("tmax_adicion");
  if (tmaxRec != null && tmaxRec + 0.6 < r.maxTadd) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "La T máxima registrada es menor que la real", detail: `Registro ${fmtNum(tmaxRec)} °C · historial del DCS ${fmtNum(r.maxTadd)} °C. Exacto y original: el dato debe coincidir con el registro del sistema.`, lesson: L.alcoa });

  // --- Filtración
  if (s.filter.maxDpRun > 1.5 && s.filter.changes === 0) F.push({ sev: "mayor", area: "Proceso", title: "Se filtró con la presión diferencial por encima de 1,5 bar", detail: "Un ΔP alto puede romper el cartucho y dejar pasar partículas.", lesson: L.filtros });
  if (s.events.filtro.active && s.events.filtro.notified == null) F.push({ sev: "menor", area: "Proceso", title: "No se avisó del ΔP alto del filtro", detail: "Las incidencias de equipo se comunican al supervisor.", lesson: L.filtros });
  if (n("dp_filtro") != null && n("dp_filtro")! + 0.05 < s.filter.maxDpRun) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El ΔP máximo registrado es menor que el real", detail: `Registro ${v("dp_filtro")} bar · real ${fmtNum(s.filter.maxDpRun)} bar.`, lesson: L.alcoa });

  // --- Cristalización
  const c = s.cryst;
  if (!c.seeded) F.push({ sev: "mayor", area: "Proceso", title: "Cristalización sin siembra", detail: "Sin semilla la forma cristalina y el tamaño no están controlados.", lesson: L.crist });
  if (c.ramp < 120) F.push({ sev: "mayor", area: "Proceso", title: `Enfriamiento demasiado rápido (${c.ramp} min)`, detail: "Da cristales finos: filtran peor, retienen más agua e impurezas.", lesson: L.crist });
  if (c.seeded && (c.seedT < 58 || c.seedT > 62)) F.push({ sev: "mayor", area: "Proceso", title: `Siembra fuera de rango (${c.seedT} °C)`, detail: "La hoja pide sembrar a 58–62 °C.", lesson: L.crist });
  if (c.finalT > 5 || c.finalT < 0) F.push({ sev: "mayor", area: "Proceso", title: `Temperatura final fuera de rango (${c.finalT} °C)`, detail: "Más temperatura deja más producto disuelto en las aguas madre." });

  // --- Centrifugación
  if (s.centri.washes !== 2) F.push({ sev: "mayor", area: "Proceso", title: `Lavados de la torta: ${s.centri.washes} (la hoja pide 2)`, detail: "El lavado elimina las aguas madre, que contienen las impurezas.", lesson: L.centri });
  if (n("torta") != null && Math.abs(n("torta")! - s.centri.wetCake) > 0.15) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El peso de torta registrado no coincide con la báscula", detail: `Registro ${v("torta")} kg · báscula ${fmtNum(s.centri.wetCake)} kg.`, lesson: L.alcoa });

  // --- Secado
  const d = s.dryer;
  if (d.maxTj > 60) F.push({ sev: d.maxTj > 65 ? "mayor" : "menor", area: "Proceso", title: `Temperatura de secado por encima de 60 °C (${d.maxTj} °C)`, detail: "Por encima del rango validado el producto puede degradarse.", lesson: L.secado });
  if (s.events.vacio.active) {
    if (s.events.vacio.notified == null) F.push({ sev: "mayor", area: "Proceso", title: "No se avisó de la pérdida de vacío del secadero", detail: "Un fallo de equipo se comunica para que mantenimiento actúe.", lesson: L.secado });
    if (!hasDeviation(s, "vacío", "vacio", "secad")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la pérdida de vacío", detail: "El vacío estuvo fuera de rango (≤ 100 mbar) durante el secado.", lesson: L.desv });
  }
  const lastLod = d.samples.at(-1);
  if (!lastLod) F.push({ sev: "crítico", area: "Calidad del producto", title: "No hay IPC de secado", detail: "No se puede descargar sin demostrar LOD ≤ 0,5 %.", lesson: L.secado });
  else if (lastLod.value > 0.5) F.push({ sev: "crítico", area: "Calidad del producto", title: `Se descargó con LOD ${fmtNum(lastLod.value, 2)} % (límite 0,5 %)`, detail: "Hay que seguir secando y repetir el IPC.", lesson: L.secado });
  if (lastLod && n("lod") != null && Math.abs(n("lod")! - lastLod.value) > 0.005) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El LOD registrado no coincide con el último resultado", detail: `Registro ${v("lod")} % · resultado ${fmtNum(lastLod.value, 2)} %.`, lesson: L.alcoa });

  // --- Envasado
  const p = s.pack;
  const yieldReal = (p.netKg / THEORETICAL_KG) * 100;
  const yRec = n("rendimiento");
  if (yRec != null && Math.abs(yRec - yieldReal) > 0.3) F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: "Rendimiento mal calculado", detail: `Registraste ${fmtNum(yRec)} %; con ${fmtNum(p.netKg)} kg sobre ${fmtNum(THEORETICAL_KG)} kg teóricos es ${fmtNum(yieldReal)} %.` });
  if (p.done && (yieldReal < 80 || yieldReal > 95) && !hasDeviation(s, "rendimiento")) F.push({ sev: "mayor", area: "Proceso", title: `Rendimiento fuera de rango (${fmtNum(yieldReal)} %) sin desviación`, detail: "El rango esperado es 80–95 %." });
  if (n("neto") != null && Math.abs(n("neto")! - p.netKg) > 0.15) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Peso neto registrado distinto del real", detail: `Registro ${v("neto")} kg · báscula ${fmtNum(p.netKg)} kg.` });
  const em = n("etq_emitidas"), us = n("etq_usadas"), de = n("etq_destruidas"), dv = n("etq_devueltas");
  if (p.done) {
    const realReturned = p.labelsIssued - p.labelsUsed - p.labelsDestroyed;
    const ok = em === p.labelsIssued && us === p.labelsUsed && de === p.labelsDestroyed && dv === realReturned;
    if (!ok) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "La conciliación de etiquetas no cuadra", detail: `Debe ser: emitidas ${p.labelsIssued} = usadas ${p.labelsUsed} + destruidas ${p.labelsDestroyed} + devueltas ${realReturned}.`, lesson: L.envas });
  } else {
    F.push({ sev: "crítico", area: "Proceso", title: "El lote no se envasó", detail: "Falta la etapa de envasado." });
  }

  // --- Resultados analíticos del producto
  const imp = finalImpurities(s);
  const lodFinal = d.lod;
  const assay = Math.round((99.8 - imp) * 10) / 10;
  const appearanceOk = imp <= 0.3;
  const results = [
    { test: "Aspecto", spec: "Polvo cristalino blanco", value: appearanceOk ? "Polvo cristalino blanco" : "Polvo ligeramente coloreado", ok: appearanceOk },
    { test: "Pérdida por secado", spec: "≤ 0,5 %", value: `${fmtNum(lodFinal, 2)} %`, ok: lodFinal <= 0.5 },
    { test: "Impurezas totales (HPLC)", spec: "≤ 0,30 %", value: `${fmtNum(imp, 2)} %`, ok: imp <= 0.3 },
    { test: "Valoración (sobre seco)", spec: "98,0 – 102,0 %", value: `${fmtNum(assay)} %`, ok: assay >= 98 && assay <= 102 },
    { test: "Forma cristalina (XRPD)", spec: "Forma I", value: c.quality === "buena" ? "Forma I" : "Forma I con fracción fina", ok: true },
  ];
  for (const rr of results) {
    if (!rr.ok) F.push({ sev: "crítico", area: "Calidad del producto", title: `Resultado fuera de especificación: ${rr.test} = ${rr.value}`, detail: "Un resultado OOS impide liberar el lote hasta completar la investigación.", lesson: L.oos });
  }

  const order: Severity[] = ["crítico", "mayor", "menor"];
  F.sort((a, b) => order.indexOf(a.sev) - order.indexOf(b.sev));
  const crit = F.filter((f) => f.sev === "crítico").length;
  const major = F.filter((f) => f.sev === "mayor").length;
  const minor = F.filter((f) => f.sev === "menor").length;
  const decision = crit > 0 ? "Rechazado / en investigación" : major > 0 || s.deviations.length > 0 ? "Pendiente de desviaciones" : "Liberable";
  const score = Math.max(0, 100 - crit * 25 - major * 8 - minor * 2);
  void corrections;
  return { findings: F, results, decision, score };
}
