import { hStatements, pStatements, type Sds } from "@/content/fds";
import { GhsPictogram } from "@/components/GhsPictogram";

/** Etiqueta CLP del producto, como la verías en el bidón */
export function SdsLabel({ sds }: { sds: Sds }) {
  return (
    <div className="rounded-xl border-2 border-ink bg-white p-4 text-[#111] shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-lg font-bold leading-tight">{sds.product}</p>
          <p className="text-sm">{sds.substance}</p>
        </div>
        <p className={`rounded px-2 py-0.5 text-lg font-extrabold uppercase tracking-wide ${sds.signal === "Peligro" ? "bg-[#d00] text-white" : "border-2 border-[#111]"}`}>
          {sds.signal}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {sds.pictograms.map((c) => (
          <GhsPictogram key={c} code={c} size={72} />
        ))}
      </div>
      <ul className="mt-3 space-y-0.5 text-sm">
        {sds.h.map((h) => (
          <li key={h}>
            <strong>{h}</strong> {hStatements[h]}
          </li>
        ))}
      </ul>
      <ul className="mt-2 space-y-0.5 text-xs">
        {sds.p.map((p) => (
          <li key={p}>
            <strong>{p}</strong> {pStatements[p]}
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-[#ccc] pt-2 text-[11px] text-[#555]">Proveedor ficticio · etiqueta de formación, no usar en planta</p>
    </div>
  );
}
