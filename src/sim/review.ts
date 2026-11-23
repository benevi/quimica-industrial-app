import {
  FIELDS, MATERIALS, SECTIONS, THEORETICAL_KG, finalImpurities, fmtNum, fmtTime, parseNum, scaleDisplay,
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
  limpieza: { slug: "limpieza-de-equipos", title: "Limpieza de equipos" },
  reactor: { slug: "reactor-a-fondo", title: "El reactor a fondo" },
  solidos: { slug: "solidos-a-fondo", title: "Manejo de sólidos a fondo" },
  inertFondo: { slug: "inertizacion-a-fondo", title: "Inertización a fondo" },
  centriFondo: { slug: "centrifuga-a-fondo", title: "La centrífuga a fondo" },
  secadoFondo: { slug: "secado-a-fondo", title: "Secado a fondo" },
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

  // --- Incidentes
  for (const inc of s.incidents ?? []) {
    const area = inc.kind === "lavado_caliente" || inc.kind === "aguas_madres_caliente" || inc.kind === "degradacion_secado" || inc.kind === "rotura_cartucho" ? "Calidad del producto" : "Seguridad";
    F.push({
      sev: inc.sev,
      area,
      title: `Incidente ${inc.id}: ${inc.title}`,
      detail: `${inc.cause}${inc.redone != null ? " Se rehízo la fase: en planta eso es un reproceso y solo se hace con una desviación aprobada por Calidad." : inc.acknowledged != null ? " Se siguió adelante asumiendo las consecuencias." : ""}`,
      lesson: L.desv,
    });
    if (inc.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: `No se avisó al supervisor del incidente ${inc.id}`, detail: "Todo incidente se comunica en el momento, aunque parezca resuelto.", lesson: L.desv });
    if (!s.deviations.some((d) => d.time >= inc.time)) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Sin desviación para el incidente ${inc.id}`, detail: "Cada incidente se documenta en una desviación: qué pasó, cuándo, qué se hizo y qué se ve.", lesson: L.desv });
  }

  // --- Exacto: lo anotado tiene que ser un dato de verdad y coincidir con lo que pasó
  for (const f of FIELDS) {
    const raw = v(f.id);
    if (raw == null || f.kind !== "number") continue;
    if (parseNum(raw) == null) {
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Dato no numérico en «${f.label}»: «${raw}»`, detail: "Exacto: se anota el valor leído, con su número. «OK», «bien» o «cumple» no son un dato.", lesson: L.alcoa });
    }
  }
  /** [campo, valor real, margen, qué se compara] */
  const real: [string, number | null, number, string][] = [
    ["o2", s.o2, 0.05, "el analizador AI-101"],
    ["min_reaccion", s.reactor.inRange, 5, "el histórico de temperatura"],
    ["t_siembra", s.cryst.done && s.cryst.seeded ? s.cryst.seedT : null, 0.5, "la temperatura real de siembra"],
    ["min_rampa", s.cryst.done ? s.cryst.ramp : null, 1, "la rampa aplicada"],
    ["t_final", s.cryst.done ? s.cryst.finalT : null, 0.5, "la temperatura final real"],
    ["lavados", s.centri.washes, 0, "los lavados realizados"],
    ["t_secado", s.dryer.loaded ? s.dryer.maxTj : null, 0.5, "la temperatura máxima de camisa"],
    ["vacio", s.dryer.loaded && s.dryer.hours > 0 ? s.dryer.worstVac : null, 1, "la peor lectura de vacío"],
  ];
  for (const [id, actual, tol, what] of real) {
    const rec = n(id);
    if (rec == null || actual == null) continue;
    // tiempo de reacción y vacío: solo es falso declarar más tiempo o mejor vacío del real
    const off = id === "min_reaccion" ? rec - actual > tol : id === "vacio" ? actual - rec > tol : Math.abs(rec - actual) > tol + 1e-9;
    if (off) {
      const f = FIELDS.find((x) => x.id === id)!;
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `«${f.label}»: lo registrado no coincide con lo que pasó`, detail: `Registro: ${v(id)}${f.unit ? " " + f.unit : ""} · ${what}: ${fmtNum(actual, 1)}${f.unit ? " " + f.unit : ""}. Exacto: se anota lo que marca el instrumento, no lo que debería marcar.`, lesson: L.alcoa });
    }
  }
  if (v("bascula_id") && s.scaleUsed && v("bascula_id") !== s.scaleUsed) {
    F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "La báscula registrada no es la que se usó", detail: `Registro: ${v("bascula_id")} · se pesó en la ${s.scaleUsed}. El equipo usado forma parte del registro del lote.`, lesson: L.alcoa });
  }
  if (v("servicios") === "No") {
    F.push({ sev: "mayor", area: "Proceso", title: "Se registró que faltaban servicios y aun así se empezó", detail: "Sin glicol, vapor, nitrógeno o vacío no se arranca el lote: se avisa y se espera.", lesson: L.bpd });
  }
  const timeChecks: [string, number | undefined][] = [["ini_adicion", s.reactor.addStart], ["fin_adicion", s.reactor.addEnd]];
  for (const [id, t] of timeChecks) {
    if (v(id) == null || t == null) continue;
    // se admite anotar la hora hasta 10 min después del hecho
    const near = Array.from({ length: 11 }, (_, i) => fmtTime(t + i));
    if (!near.includes(v(id)!.trim())) {
      const f = FIELDS.find((x) => x.id === id)!;
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `«${f.label}»: la hora registrada no es la real`, detail: `Registro: ${v(id)} · reloj de planta: ${fmtTime(t)}. Contemporáneo y exacto: la hora se anota en el momento, mirando el reloj.`, lesson: L.bpd });
    }
  }
  // Un valor fuera de la especificación de la hoja no se deja pasar: se abre desviación
  const yaRevisados = new Set(["tmax_adicion", "ipc_af", "lod", "rendimiento", "dp_filtro", "peso_af", "peso_aa", "peso_se", "bascula_verif", "agua_l", "o2", "lavados"]);
  for (const f of FIELDS) {
    if (f.kind !== "number" || yaRevisados.has(f.id)) continue;
    const rec = n(f.id);
    if (rec == null) continue;
    const out = (f.min != null && rec < f.min - 1e-9) || (f.max != null && rec > f.max + 1e-9);
    if (out && s.deviations.length === 0) {
      F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: `Valor fuera de especificación sin desviación: ${f.label}`, detail: `Registro: ${v(f.id)}${f.unit ? " " + f.unit : ""} · especificación: ${f.spec}. Un dato fuera de rango se registra tal cual y se comunica: Calidad decide con una desviación.`, lesson: L.desv });
    }
  }

  // --- Limpieza al terminar: los equipos vaciados se identifican como sucios y se pide su limpieza
  for (const [id, eq] of [["estado_r101_fin", "el R-101"], ["estado_c201_fin", "la centrífuga C-201"]] as const) {
    if (v(id) && v(id) !== "Sucio")
      F.push({ sev: "mayor", area: "Calidad del producto", title: `Equipo vaciado identificado como «${v(id)}»: ${eq}`, detail: "Un equipo vaciado no está limpio. La etiqueta «Sucio» evita que otro turno lo use sin limpiar y arrastre restos de este producto al siguiente.", lesson: L.limpieza });
  }
  if (v("limpieza_pedida") === "No")
    F.push({ sev: "menor", area: "Proceso", title: "No se pidió la limpieza de los equipos", detail: "Al terminar se pide la limpieza: el tiempo que un equipo puede estar sucio antes de limpiarlo también está limitado.", lesson: L.limpieza });

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

  if (s.events.bascula.active && s.events.bascula.notified == null) {
    F.push({ sev: "menor", area: "Proceso", title: "No se avisó de la báscula fuera de tolerancia", detail: "Una báscula que no pasa la verificación diaria se comunica y se identifica como fuera de uso, para que nadie pese en ella.", lesson: L.desv });
  }

  const etq = s.events.etiqueta;
  if (etq.active) {
    if (etq.notified == null) F.push({ sev: "mayor", area: "Proceso", title: "No se avisó de las etiquetas cruzadas del bidón de 4-aminofenol", detail: "Si la identidad de una materia prima está en duda, el envase se aparta y se avisa: no se pesa ni se carga.", lesson: L.recep });
    if (!hasDeviation(s, "etiqueta", "bidón", "bidon", "af-24113", "identidad")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la etiqueta que no coincidía con la orden", detail: "Una discrepancia en la identificación de una materia prima se documenta para que calidad investigue de dónde viene (recepción, almacén o proveedor).", lesson: L.desv });
  }

  // --- Carga e inertización
  if (!s.afCharged && s.maxSection > SECTIONS.findIndex((x) => x.id === "carga")) {
    F.push({ sev: "crítico", area: "Proceso", title: "No se cargó el 4-aminofenol en el reactor", detail: "Se pasó de etapa sin cargar la materia prima pesada. Sin ella no hay reacción ni producto: el lote no siguió la hoja." });
  }
  const w = s.water;
  if (w < 295 || w > 305) F.push({ sev: "mayor", area: "Proceso", title: "Volumen de agua fuera de rango", detail: `Se cargaron ${w} L (rango 295–305 L).` });
  if (n("agua_l") != null && Math.abs(n("agua_l")! - w) > 0.5) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El volumen de agua registrado no coincide con el totalizador", detail: `Registro ${v("agua_l")} L · totalizador ${w} L.`, lesson: L.alcoa });
  if (s.o2 > 2) F.push({ sev: "mayor", area: "Seguridad", title: "Se continuó sin alcanzar O₂ ≤ 2,0 %", detail: `El O₂ final fue ${fmtNum(s.o2)} %. Con disolvente o polvo y oxígeno hay riesgo de incendio, y el producto se oxida.`, lesson: L.inert });
  const ox = s.events.oxigeno;
  if (ox.active) {
    if (ox.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó de la fuga de vacío del R-101", detail: "Si el vacío no aguanta, entra aire por una junta: por muchos ciclos que hagas, el oxígeno no baja. Se avisa a mantenimiento antes de seguir.", lesson: L.inertFondo });
    if (!hasDeviation(s, "oxígeno", "oxigeno", "o₂", "o2", "fuga", "junta", "inertiz")) F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: "Sin desviación por la fuga del R-101", detail: "Una avería del equipo durante el lote, aunque se repare a tiempo, queda registrada.", lesson: L.desv });
  }
  const tierra = s.events.tierra;
  if (tierra.active) {
    if ((tierra.tries ?? 0) > 0) F.push({ sev: "crítico", area: "Seguridad", title: "Se cargó el polvo sin continuidad en la puesta a tierra", detail: "El polvo que cae se carga de electricidad estática. Sin tierra comprobada, una chispa puede inflamar el polvo o los vapores. Sin continuidad no se carga: se avisa y se repara.", lesson: L.solidos });
    else if (tierra.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó de la pinza de tierra sin continuidad", detail: "Una protección contra la electricidad estática que no funciona se comunica para que se repare.", lesson: L.solidos });
    if (!hasDeviation(s, "tierra", "continuidad", "pinza", "estática", "estatica")) F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: "Sin desviación por la puesta a tierra sin continuidad", detail: "La avería y la espera hasta repararla se registran con su hora.", lesson: L.desv });
  }
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
  const ag = s.events.agitador;
  if (ag.active) {
    if (ag.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó de la parada del agitador", detail: "La pérdida de agitación con un reactivo en adición es una situación peligrosa: se para la adición y se avisa de inmediato.", lesson: L.reactor });
    if ((ag.addedStopped ?? 0) > 0) F.push({ sev: "mayor", area: "Seguridad", title: `Se siguió añadiendo anhídrido con el agitador parado (${fmtNum(ag.addedStopped!)} L)`, detail: "Sin agitación el reactivo no se mezcla, se acumula y puede reaccionar de golpe cuando vuelva a girar. La adición se para en cuanto se pierde la agitación.", lesson: L.reactor });
    if ((ag.tries ?? 0) > 0) F.push({ sev: "menor", area: "Seguridad", title: "Se intentó rearrancar el agitador con la protección disparada", detail: "Una protección que salta indica un problema. El equipo lo revisa mantenimiento antes de volver a arrancarlo.", lesson: L.alarmas });
    if (!hasDeviation(s, "agitador", "agitación", "agitacion", "motor")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la parada del agitador", detail: "La adición se interrumpió por una avería: se documenta con la hora, lo añadido y lo que se hizo.", lesson: L.desv });
  }
  const sonda = s.events.sonda;
  if (sonda.active) {
    if (sonda.notified == null) F.push({ sev: "mayor", area: "Proceso", title: "No se actuó ante la discrepancia de las sondas de temperatura", detail: `La TI-101 leía de menos y el lazo calentó la masa hasta ${fmtNum(r.maxTreact)} °C reales. Si dos medidas de lo mismo no coinciden, no se elige la que gusta: se avisa a instrumentación.`, lesson: L.medidas });
    if (!hasDeviation(s, "sonda", "ti-101", "ti-103", "discrepancia", "temperatura")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por el fallo de la sonda TI-101", detail: "Durante un tiempo la temperatura registrada no era la real: calidad tiene que evaluar el impacto en el lote.", lesson: L.desv });
  }
  // Repetir el IPC sin prolongar la reacción es buscar un resultado que cumpla («testing into compliance»)
  const ipcs = s.ipc;
  for (let i = 1; i < ipcs.length; i++) {
    const prev = ipcs[i - 1];
    if (prev.value > 0.5 && prev.ready <= ipcs[i].requested && prev.min != null && ipcs[i].min != null && ipcs[i].min! - prev.min < 30) {
      F.push({ sev: "mayor", area: "Calidad del producto", title: "Se repitió el IPC sin prolongar la reacción 30 minutos", detail: `El IPC dio ${fmtNum(prev.value, 2)} % y la siguiente muestra se tomó con solo ${ipcs[i].min! - prev.min} min más a 75–85 °C. Un resultado que no cumple no se «arregla» repitiendo la muestra: se hace lo que dice la hoja.`, lesson: L.oos });
      break;
    }
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
  if (s.filter.maxDpRun > 1.5 && !hasDeviation(s, "filtro", "δp", "dp", "presión diferencial", "presion diferencial", "cartucho")) {
    F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la presión diferencial alta del filtro", detail: `El ΔP llegó a ${fmtNum(s.filter.maxDpRun, 1)} bar (límite 1,5 bar). Aunque se cambie el cartucho, superar un límite de la hoja se documenta en una desviación.`, lesson: L.desv });
  }
  if (s.events.filtro.active && s.events.filtro.notified == null) F.push({ sev: "menor", area: "Proceso", title: "No se avisó del ΔP alto del filtro", detail: "Las incidencias de equipo se comunican al supervisor.", lesson: L.filtros });
  if (n("dp_filtro") != null && n("dp_filtro")! + 0.05 < s.filter.maxDpRun) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El ΔP máximo registrado es menor que el real", detail: `Registro ${v("dp_filtro")} bar · real ${fmtNum(s.filter.maxDpRun)} bar.`, lesson: L.alcoa });

  // --- Cristalización
  const c = s.cryst;
  if (!c.seeded) F.push({ sev: "mayor", area: "Proceso", title: "Cristalización sin siembra", detail: "Sin semilla la forma cristalina y el tamaño no están controlados.", lesson: L.crist });
  if (c.ramp < 120) F.push({ sev: "mayor", area: "Proceso", title: `Enfriamiento demasiado rápido (${c.ramp} min)`, detail: "Da cristales finos: filtran peor, retienen más agua e impurezas.", lesson: L.crist });
  if (c.seeded && (c.seedT < 58 || c.seedT > 62)) F.push({ sev: "mayor", area: "Proceso", title: `Siembra fuera de rango (${c.seedT} °C)`, detail: "La hoja pide sembrar a 58–62 °C.", lesson: L.crist });
  if (c.done && c.hold < 60) F.push({ sev: "menor", area: "Proceso", title: `Mantenimiento a temperatura final demasiado corto (${c.hold} min)`, detail: "Al llegar a 0–5 °C se mantiene al menos 60 min para que termine de cristalizar; si no, parte del producto se queda disuelto y baja el rendimiento.", lesson: L.crist });
  if (c.finalT > 5 || c.finalT < 0) F.push({ sev: "mayor", area: "Proceso", title: `Temperatura final fuera de rango (${c.finalT} °C)`, detail: "Más temperatura deja más producto disuelto en las aguas madre." });

  // --- Centrifugación
  if (s.centri.washes !== 2) F.push({ sev: "mayor", area: "Proceso", title: `Lavados de la torta: ${s.centri.washes} (la hoja pide 2)`, detail: "El lavado elimina las aguas madre, que contienen las impurezas.", lesson: L.centri });
  if (n("torta") != null && Math.abs(n("torta")! - s.centri.wetCake) > 0.15) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "El peso de torta registrado no coincide con la báscula", detail: `Registro ${v("torta")} kg · báscula ${fmtNum(s.centri.wetCake)} kg.`, lesson: L.alcoa });

  const junta = s.events.junta;
  if (junta.active) {
    if (junta.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó de la fuga en la junta del filtro", detail: "Una fuga de solución caliente con ácido es un riesgo para las personas y una pérdida de producto: se para, se aísla y se avisa.", lesson: L.filtros });
    if ((junta.tries ?? 0) > 0) F.push({ sev: "mayor", area: "Seguridad", title: "Se siguió transfiriendo con la junta goteando", detail: `Se transfirió ${junta.tries} veces más con la fuga: se perdió producto y el charco de solución caliente siguió creciendo.`, lesson: L.filtros });
    if (!hasDeviation(s, "junta", "fuga", "gotea", "brida", "derrame")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la fuga del filtro", detail: "Hubo pérdida de producto y una reparación en mitad de la transferencia: se registra.", lesson: L.desv });
  }
  const vib = s.events.vibracion;
  if (vib.active) {
    if (vib.notified == null) F.push({ sev: "mayor", area: "Seguridad", title: "No se avisó del disparo por vibración de la centrífuga", detail: "Una centrífuga que vibra puede romperse a alta velocidad. Se deja parar, no se rearranca y se avisa.", lesson: L.centriFondo });
    if ((vib.tries ?? 0) > 0) F.push({ sev: "mayor", area: "Seguridad", title: "Se rearrancó la centrífuga tras el disparo por vibración", detail: "El enclavamiento de vibración es una protección: se rearranca solo cuando se ha revisado la causa (normalmente, la torta mal repartida).", lesson: L.centriFondo });
    if (!hasDeviation(s, "vibra", "centrífuga", "centrifuga", "c-201")) F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: "Sin desviación por la parada de la centrífuga", detail: "La parada y la redistribución de la torta no están en la hoja: se registran con hora, fase y velocidad.", lesson: L.desv });
  }

  // --- Secado
  const d = s.dryer;
  if (d.maxTj > 60) F.push({ sev: d.maxTj > 65 ? "mayor" : "menor", area: "Proceso", title: `Temperatura de secado por encima de 60 °C (${d.maxTj} °C)`, detail: "Por encima del rango validado el producto puede degradarse.", lesson: L.secado });
  if (d.loaded && d.hours > 0 && d.maxTj < 55) F.push({ sev: "mayor", area: "Proceso", title: `Secado por debajo de la temperatura de la hoja (${d.maxTj} °C)`, detail: "La hoja pide 55–60 °C de camisa. Un parámetro fuera de rango, también por abajo, se comunica y se documenta.", lesson: L.secado });
  if (s.reactor.alarms.some((a) => a.text.startsWith("Arranque del agitador con"))) F.push({ sev: "crítico", area: "Seguridad", title: "Se arrancó el agitador con anhídrido acumulado", detail: "Es el desencadenante típico de una reacción fuera de control. Con reactivo acumulado se para la adición, se avisa y decide el responsable.", lesson: L.desv });
  if (s.events.vacio.active) {
    if (s.events.vacio.notified == null) F.push({ sev: "mayor", area: "Proceso", title: "No se avisó de la pérdida de vacío del secadero", detail: "Un fallo de equipo se comunica para que mantenimiento actúe.", lesson: L.secado });
    if (!hasDeviation(s, "vacío", "vacio", "secad")) F.push({ sev: "mayor", area: "Documentación (ALCOA+)", title: "Sin desviación por la pérdida de vacío", detail: "El vacío estuvo fuera de rango (≤ 100 mbar) durante el secado.", lesson: L.desv });
  }
  const lodEv = s.events.lod;
  if (lodEv.active) {
    if (lodEv.notified == null) F.push({ sev: "mayor", area: "Proceso", title: "No se avisó de que el LOD no bajaba", detail: "Si la torta tiene grumos, secar más horas no basta: se avisa y se desterrona según el procedimiento.", lesson: L.secadoFondo });
    if (!hasDeviation(s, "lod", "grumo", "humedad", "desterr", "pérdida por secado")) F.push({ sev: "menor", area: "Documentación (ALCOA+)", title: "Sin desviación por los grumos del secado", detail: "Abrir el secadero y desterronar es una intervención fuera de la hoja: se registra.", lesson: L.desv });
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
  const appearanceOk = imp <= 0.3 && !s.degraded;
  const results = [
    { test: "Aspecto", spec: "Polvo cristalino blanco", value: appearanceOk ? "Polvo cristalino blanco" : s.degraded ? "Polvo amarillento" : "Polvo ligeramente coloreado", ok: appearanceOk },
    { test: "Partículas visibles", spec: "Ausencia", value: s.contam ? "Presencia de partículas" : "Ausencia", ok: !s.contam },
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
