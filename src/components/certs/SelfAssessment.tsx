"use client";

import Link from "next/link";
import { scale, type CompetencyUnit } from "@/certs/autoevaluacion";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Bar, Card, btn } from "@/components/ui";

export function SelfAssessment({ unit, levelTitles }: { unit: CompetencyUnit; levelTitles: Record<number, string> }) {
  const { state, rate } = useCertState();
  const mine = state.self[unit.id] ?? {};
  const answered = unit.items.filter((it) => mine[it.rp]).length;
  const ready = unit.items.filter((it) => (mine[it.rp] ?? 0) >= 3).length;
  const weak = unit.items.filter((it) => mine[it.rp] && mine[it.rp] < 3);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="tabular-nums">
          {answered}/{unit.items.length} respondidas
        </span>
        <Bar pct={Math.round((answered / unit.items.length) * 100)} className="flex-1" label="Autoevaluación respondida" />
      </div>

      <ol className="space-y-3">
        {unit.items.map((it) => (
          <li key={it.rp}>
            <Card className="p-4">
              <fieldset>
                <legend className="font-medium">
                  <span className="t-tag mr-2 text-muted">{it.rp}</span>
                  {it.text}
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-4">
                  {scale.map((sc) => (
                    <label
                      key={sc.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${mine[it.rp] === sc.value ? "border-accent bg-accent-soft" : "border-line hover:border-accent"}`}
                    >
                      <input type="radio" name={it.rp} className="accent-[var(--accent)]" checked={mine[it.rp] === sc.value} onChange={() => rate(unit.id, it.rp, sc.value)} />
                      <span>
                        <strong className="font-semibold tabular-nums">{sc.value}</strong> · {sc.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <p className="mt-2 text-xs text-muted">Se estudia en: {it.levels.map((n) => `nivel ${n} (${levelTitles[n]})`).join(", ")}</p>
            </Card>
          </li>
        ))}
      </ol>

      <Card as="section" className="p-5">
        <h2 className="t-h2">Tu resultado</h2>
        <p className="mt-1 text-sm">
          {answered}/{unit.items.length} respondidas · {ready} con 3 o 4 (lo haces sin ayuda).
        </p>
        {answered === unit.items.length && ready === unit.items.length ? (
          <p className="mt-3 max-w-[68ch] border-l-2 border-ok pl-3 text-sm">
            Te ves preparado en toda la unidad. Si además cumples el requisito de experiencia (3 años y 2.000 h) o de formación (300 h), puedes pedir la acreditación
            de {unit.code}. Ten a mano ejemplos concretos de tu trabajo para cada punto: en la evaluación te los preguntarán.
          </p>
        ) : weak.length > 0 ? (
          <div className="mt-3 max-w-[68ch] rounded-md bg-warn-soft px-3 py-2 text-sm">
            <p className="font-medium">Refuerza antes de presentarte:</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              {weak.map((it) => (
                <li key={it.rp}>
                  <span className="t-tag">{it.rp}</span>: {it.text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <p className="mt-4 max-w-[68ch] text-xs text-muted">
          La escala imita el cuestionario de autoevaluación del procedimiento oficial de acreditación, que pide valorar cada realización profesional. El
          cuestionario oficial lo da la unidad de acreditación de tu comunidad.
        </p>
        <Link href="/certificaciones" className={`${btn.quiet} -ml-2 mt-3`}>
          <Icon name="back" className="h-4 w-4" />
          Volver a certificaciones
        </Link>
      </Card>
    </div>
  );
}
