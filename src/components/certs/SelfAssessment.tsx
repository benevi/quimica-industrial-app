"use client";

import Link from "next/link";
import { scale, type CompetencyUnit } from "@/certs/autoevaluacion";
import { useCertState } from "@/certs/useCertState";

export function SelfAssessment({ unit, levelTitles }: { unit: CompetencyUnit; levelTitles: Record<number, string> }) {
  const { state, rate } = useCertState();
  const mine = state.self[unit.id] ?? {};
  const answered = unit.items.filter((it) => mine[it.rp]).length;
  const ready = unit.items.filter((it) => (mine[it.rp] ?? 0) >= 3).length;
  const weak = unit.items.filter((it) => mine[it.rp] && mine[it.rp] < 3);

  return (
    <div className="space-y-5">
      <ol className="space-y-4">
        {unit.items.map((it) => (
          <li key={it.rp} className="rounded-xl border border-line bg-surface p-4">
            <p className="font-medium"><span className="text-accent">{it.rp}</span> · {it.text}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-4">
              {scale.map((sc) => (
                <label
                  key={sc.value}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${mine[it.rp] === sc.value ? "border-accent bg-accent-soft" : "border-line hover:border-accent"}`}
                >
                  <input type="radio" name={it.rp} className="accent-[var(--accent)]" checked={mine[it.rp] === sc.value} onChange={() => rate(unit.id, it.rp, sc.value)} />
                  <span><strong>{sc.value}</strong> · {sc.label}</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted">
              Se estudia en: {it.levels.map((n) => `nivel ${n} (${levelTitles[n]})`).join(", ")}
            </p>
          </li>
        ))}
      </ol>

      <section className="rounded-2xl border border-line bg-surface p-5">
        <h2 className="text-lg font-semibold">Tu resultado</h2>
        <p className="mt-1 text-sm">
          {answered}/{unit.items.length} respondidas · {ready} con 3 o 4 (lo haces sin ayuda).
        </p>
        {answered === unit.items.length && ready === unit.items.length ? (
          <p className="mt-2 rounded-lg bg-ok-soft px-3 py-2 text-sm">
            Te ves preparado en toda la unidad. Si además cumples el requisito de experiencia (3 años y 2.000 h) o de formación (300 h), puedes
            pedir la acreditación de {unit.code}. Ten a mano ejemplos concretos de tu trabajo para cada punto: en la evaluación te los preguntarán.
          </p>
        ) : weak.length > 0 ? (
          <div className="mt-2 rounded-lg bg-warn-soft px-3 py-2 text-sm">
            <p>Refuerza antes de presentarte:</p>
            <ul className="mt-1 list-disc pl-5">
              {weak.map((it) => <li key={it.rp}>{it.rp}: {it.text}</li>)}
            </ul>
          </div>
        ) : null}
        <p className="mt-3 text-xs text-muted">
          La escala imita el cuestionario de autoevaluación del procedimiento oficial de acreditación, que pide valorar cada
          realización profesional. El cuestionario oficial lo da la unidad de acreditación de tu comunidad.
        </p>
        <Link href="/certificaciones" className="mt-3 inline-block text-sm text-muted underline hover:text-ink">Volver a certificaciones</Link>
      </section>
    </div>
  );
}
