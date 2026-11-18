"use client";

import Link from "next/link";
import * as E from "@/sim/engine";
import type { EventId, SectionId, Sim, ValveId } from "@/sim/engine";

type Task = { title: string; detail: string; valve?: ValveId };

const openV = (s: Sim, v: ValveId): Task => ({ title: `Abre la válvula ${v}`, detail: `${E.VALVES[v].name}. Pulsa «Abrir» en el panel de válvulas o haz clic en la válvula de la planta (se pone verde).`, valve: v });
const closeV = (s: Sim, v: ValveId, why = "La operación ha terminado: se cierra para que no pase nada por esa línea sin querer."): Task => ({ title: `Cierra la válvula ${v}`, detail: `${E.VALVES[v].name}. ${why}`, valve: v });
/** Primera válvula de la etapa que se ha quedado abierta, como tarea de cierre. */
function closeLeft(s: Sim, sec: SectionId): Task | null {
  const v = E.valvesOf(sec).find((x) => s.valves[x]);
  return v ? closeV(s, v) : null;
}

const LESSON: Record<SectionId, { slug: string; title: string }> = {
  previas: { slug: "buenas-practicas-documentacion", title: "Buenas prácticas de documentación" },
  dispensacion: { slug: "recepcion-y-cuarentena", title: "Recepción y cuarentena" },
  carga: { slug: "carga-e-inertizacion", title: "Carga e inertización" },
  reaccion: { slug: "calor-de-reaccion", title: "Calor de reacción" },
  filtracion: { slug: "filtros", title: "Filtros" },
  cristalizacion: { slug: "cristalizacion", title: "Cristalización" },
  centrifugacion: { slug: "centrifuga", title: "Centrífuga" },
  secado: { slug: "secaderos", title: "Secaderos" },
  envasado: { slug: "envasado-y-etiquetado", title: "Envasado y etiquetado" },
  cierre: { slug: "alcoa-plus", title: "ALCOA+" },
};

const EVENT_TEXT: Record<EventId, string> = {
  bascula: "La báscula B-05 no ha pasado la verificación con la pesa patrón.",
  frio: "La camisa del reactor ha dejado de enfriar (fallo del glicol).",
  filtro: "La presión diferencial del filtro ha subido por encima del límite.",
  vacio: "El vacío del secadero se ha perdido.",
};

/** Primera tarea de proceso pendiente en la etapa actual, o null si ya están hechas. */
function processTask(s: Sim): Task | null {
  const id = E.SECTIONS[s.section].id;
  const r = s.reactor;
  switch (id) {
    case "previas":
      if (!s.scaleUsed) return { title: "Verifica una báscula con la pesa patrón", detail: "Pulsa «Verificar y usar» en una báscula y mira la lectura con la pesa de 50,00 kg. Tolerancia ± 0,10 kg: si no cumple, no se usa." };
      return null;
    case "dispensacion":
      for (const m of Object.keys(E.MATERIALS) as E.MaterialId[]) {
        const mat = E.MATERIALS[m];
        if (s.verifications[m] != null) continue;
        if (!s.lotsUsed[m]) return { title: `Elige el lote de ${mat.name}`, detail: "Solo vale un lote con estado APROBADO y dentro de fecha. Mira la etiqueta de cada envase." };
        if (Math.abs(s.dosed[m] - mat.target) > mat.tol) return { title: `Pesa ${E.fmtNum(mat.target, mat.target < 1 ? 2 : 1)} kg de ${mat.name}`, detail: `Añade o quita producto con los botones hasta que la báscula marque ${E.fmtNum(mat.target - mat.tol, 2)}–${E.fmtNum(mat.target + mat.tol, 2)} kg.` };
        return { title: `Anota lote y peso de ${mat.name} y pide la verificación`, detail: "Escribe en la hoja exactamente lo que marca la báscula. Después, un compañero lo comprueba y firma." };
      }
      return null;
    case "carga":
      if (s.water < 295) {
        if (!s.valves["XV-101"]) return openV(s, "XV-101");
        return { title: "Carga 300 L de agua purificada en el R-101", detail: "Usa los botones de carga y mira el totalizador FQ-101." };
      }
      if (s.valves["XV-101"]) return closeV(s, "XV-101", "Ya tienes el agua: si la dejas abierta, puede seguir entrando agua al reactor.");
      if (!r.agit) return { title: "Arranca el agitador", detail: "Con agitación, el sólido se dispersa y la temperatura es uniforme." };
      if (s.o2 > 2) {
        if (s.inertStep !== "vacio") {
          if (s.valves["XV-102"]) return closeV(s, "XV-102", "Para hacer vacío, el nitrógeno tiene que estar cerrado.");
          if (!s.valves["XV-103"]) return { ...openV(s, "XV-103"), title: "Inertiza (1/2): abre el vacío XV-103" };
          return { title: "Haz vacío en el R-101", detail: `Pulsa «Hacer vacío». Ciclo ${s.inertCycles + 1}: repite vacío y N₂ hasta que el oxígeno (AI-101) baje de 2,0 %.` };
        }
        if (s.valves["XV-103"]) return closeV(s, "XV-103", "Antes de meter nitrógeno, cierra el vacío: si no, el N₂ se va directo a la bomba.");
        if (!s.valves["XV-102"]) return { ...openV(s, "XV-102"), title: "Inertiza (2/2): abre el nitrógeno XV-102" };
        return { title: "Rompe el vacío con nitrógeno", detail: "Pulsa «Romper con N₂». El oxígeno baja en cada ciclo." };
      }
      {
        const c = closeLeft(s, "carga");
        if (c) return c;
      }
      if (!s.afCharged) return { title: "Carga el 4-aminofenol", detail: "El reactor ya está inerte: ahora sí se puede cargar el sólido." };
      return null;
    case "reaccion":
      if (r.addEnd == null && !s.valves["XV-104"]) return { ...openV(s, "XV-104"), detail: "Es la válvula manual de salida del depósito D-101. La válvula automática FV-103 regula el caudal, pero sin la XV-104 abierta no pasa nada aunque el panel diga 2 L/min." };
      if (r.addStart == null) return { title: "Pon el reactor en marcha (▶) y abre la adición poco a poco", detail: "La reacción desprende calor. Empieza con 1–2 L/min y mira cómo sube la temperatura." };
      if (r.addEnd == null) return { title: "Añade el anhídrido sin pasar de 40 °C", detail: "Si la temperatura sube deprisa, baja la velocidad o cierra un momento. A 45 °C salta el enclavamiento y la válvula se cierra sola." };
      if (s.valves["XV-104"]) return closeV(s, "XV-104", "La adición ha terminado: se cierra la salida del depósito.");
      if (r.sp < 75) return { title: "Sube la consigna a 80 °C", detail: "Para terminar la reacción hace falta calor: 75–85 °C durante al menos 60 minutos." };
      if (r.inRange < 60) return { title: "Mantén 75–85 °C al menos 60 minutos", detail: `Llevas ${r.inRange} min en rango. Deja correr el tiempo con ▶ y vigila la gráfica.` };
      if (!s.ipc.some((i) => i.ready <= s.clock && i.value <= 0.5)) {
        const pending = s.ipc.some((i) => i.ready > s.clock);
        return pending
          ? { title: "Espera el resultado del IPC", detail: "El laboratorio tarda 20 minutos. Deja correr el reloj con ▶." }
          : { title: "Toma la muestra de IPC", detail: "Especificación: 4-aminofenol ≤ 0,50 %. Si no cumple, mantén 30 min más y repite." };
      }
      return null;
    case "filtracion":
      if (!s.filter.done) {
        const f = s.filter;
        const ev = s.events.filtro;
        if (ev.active && ev.resolved == null) {
          const c = closeLeft(s, "filtracion");
          if (c) return { ...c, detail: `${E.VALVES[c.valve!].name}. Para cambiar el cartucho, primero aísla el filtro cerrando la XV-105 y la XV-106.` };
          return { title: "Cambia el cartucho del filtro", detail: "Con el filtro aislado, pulsa «Parar y cambiar cartucho». Después abre de nuevo las válvulas y sigue." };
        }
        if (!s.valves["XV-105"]) return openV(s, "XV-105");
        if (!s.valves["XV-106"]) return openV(s, "XV-106");
        return { title: "Transfiere la solución por el filtro F-301 al R-102", detail: `Llevas ${f.progress} %. Vigila la presión diferencial: si pasa de 1,5 bar, para y avisa.` };
      }
      return closeLeft(s, "filtracion");
    case "cristalizacion":
      if (!s.cryst.done) return { title: "Programa y ejecuta la cristalización", detail: "Siembra a 58–62 °C y enfría despacio (≥ 120 min) hasta 0–5 °C. Enfriar rápido da cristales finos." };
      return null;
    case "centrifugacion": {
      const c = s.centri;
      if (!c.loaded) {
        if (!s.valves["XV-201"]) return openV(s, "XV-201");
        return { title: "Carga la suspensión en la centrífuga", detail: "Los cristales quedan en la cesta y el líquido sale como aguas madre." };
      }
      if (s.valves["XV-201"]) return closeV(s, "XV-201", "Ya está cargada: cierra la alimentación antes de centrifugar.");
      if (!c.spun) return { title: "Centrifuga y escurre", detail: "El líquido sale por la tela filtrante." };
      if (c.washes < 2) {
        if (!s.valves["XV-202"]) return openV(s, "XV-202");
        return { title: `Lava la torta con agua fría (${c.washes}/2)`, detail: "El lavado arrastra las impurezas que quedan pegadas a los cristales." };
      }
      if (s.valves["XV-202"]) return closeV(s, "XV-202", "Lavados terminados: cierra el agua antes de descargar.");
      if (!c.discharged) return { title: "Descarga la torta", detail: "Anota el peso de la torta húmeda en la hoja." };
      return null;
    }
    case "secado": {
      const d = s.dryer;
      if (!d.loaded) return { title: "Carga la torta en el secadero", detail: "Después cerrarás la tapa y harás vacío." };
      if (!d.samples.some((x) => x.value <= 0.5) && !s.valves["XV-301"]) return { ...openV(s, "XV-301"), detail: "Vacío del secadero. Con vacío, el agua se evapora a menos temperatura y el producto no se degrada." };
      if (d.Tj < 55 || d.Tj > 60) return { title: "Pon la camisa a 55–60 °C", detail: "Más temperatura seca antes, pero puede degradar el producto." };
      if (d.hours < 4) return { title: `Seca hasta las 4 h (${d.hours}/4)`, detail: "Vigila el vacío: debe estar por debajo de 100 mbar." };
      if (!d.samples.some((x) => x.value <= 0.5)) return { title: "Toma muestra de LOD", detail: "Especificación ≤ 0,5 %. Si no cumple, sigue secando y repite." };
      if (s.valves["XV-301"]) return closeV(s, "XV-301", "Producto seco: se cierra el vacío antes de abrir el secadero para descargar.");
      return null;
    }
    case "envasado":
      if (!s.pack.done) return { title: "Descarga y envasa el producto", detail: "Doble bolsa, bidón, peso y etiqueta. Luego calcula el rendimiento." };
      return null;
    case "cierre":
      return { title: "Repasa el registro y envíalo a QA", detail: "Datos completos, firmas en todas las etapas y una desviación por cada cosa que se salió de lo normal." };
  }
}

/** Primer dato de la etapa actual que falta en la hoja. */
export function nextFieldId(s: Sim): string | null {
  const id = E.SECTIONS[s.section].id;
  const f = E.FIELDS.find((x) => x.section === id && !s.entries[x.id]);
  return f ? f.id : null;
}

export function currentTask(s: Sim): Task & { kind: "proceso" | "hoja" | "firma" | "siguiente" } {
  const id = E.SECTIONS[s.section].id;
  const p = processTask(s);
  if (p && id !== "cierre") return { ...p, kind: "proceso" };
  const f = nextFieldId(s);
  if (f) {
    const def = E.FIELDS.find((x) => x.id === f)!;
    return { title: `Anota en la hoja: ${def.label}`, detail: "Está resaltado en amarillo. Escribe el valor que ves en el equipo o en el reloj de planta y pulsa «Registrar».", kind: "hoja" };
  }
  if (id === "cierre") return { ...p!, kind: "proceso" };
  if (s.signatures[id] == null) return { title: "Firma la etapa", detail: "Firmar es declarar que lo anotado es cierto y completo. Revisa antes de firmar.", kind: "firma" };
  return { title: "Pasa a la siguiente etapa", detail: "Pulsa «Siguiente etapa» debajo de la hoja.", kind: "siguiente" };
}

export function Coach({ s }: { s: Sim }) {
  const sec = E.SECTIONS[s.section];
  const lesson = LESSON[sec.id];
  if (s.closed) {
    return (
      <div className="rounded-xl bg-[#166534] p-4 text-white">
        <div className="text-xs font-semibold uppercase tracking-wide text-green-100">Lote cerrado</div>
        <div className="mt-1 text-lg font-bold">El registro está en QA</div>
        <p className="mt-1 text-sm text-green-50">Abre «10. Cierre y revisión de QA» para ver el informe.</p>
      </div>
    );
  }
  const ev = (Object.keys(s.events) as EventId[]).find((k) => {
    const e = s.events[k];
    return e.active && e.start != null && e.notified == null && e.resolved == null;
  });
  const t = currentTask(s);
  const pendInc = (s.incidents ?? []).filter((i) => i.notified == null && i.id !== s.halt);
  return (
    <div className="space-y-3">
      {pendInc.length > 0 && (
        <div className="rounded-xl border-2 border-[#dc2626] bg-[#fef2f2] p-4 text-[#7f1d1d]" role="alert">
          <div className="text-xs font-bold uppercase tracking-wide">⚠ Incidente sin comunicar</div>
          <div className="mt-1 font-semibold">{pendInc[0].title}</div>
          <p className="mt-1 text-sm">Avisa al supervisor y abre una desviación (abajo, «Comunicación e incidencias»). Aunque hayas rehecho la fase, el incidente ocurrió y tiene que quedar documentado.</p>
        </div>
      )}
      {ev && (
        <div className="rounded-xl border-2 border-[#dc2626] bg-[#fef2f2] p-4 text-[#7f1d1d]" role="alert">
          <div className="text-xs font-bold uppercase tracking-wide">⚠ Algo no va bien</div>
          <div className="mt-1 font-semibold">{EVENT_TEXT[ev]}</div>
          <p className="mt-1 text-sm">Primero, seguridad: para lo que estés haciendo si hace falta. Después avisa al supervisor (abajo, «Comunicación e incidencias») y registra una desviación.</p>
        </div>
      )}
      <div className="rounded-xl bg-[#1d4ed8] p-4 text-[#e0ecff]">
        <div className="text-xs font-semibold uppercase tracking-wide text-[#bfdbfe]">
          Paso {s.section + 1} de {E.SECTIONS.length} · {sec.title.replace(/^\d+\.\s*/, "")}
        </div>
        <div className="mt-1 text-lg font-bold leading-snug text-white">{t.title}</div>
        <p className="mt-1 text-sm leading-relaxed">{t.detail}</p>
        <Link href={`/leccion/${lesson.slug}`} target="_blank" className="mt-3 inline-block rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-[#1d4ed8] hover:bg-[#eff4ff]">
          📖 Repasar: {lesson.title}
        </Link>
      </div>
    </div>
  );
}
