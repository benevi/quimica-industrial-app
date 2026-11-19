"use client";

import type { Point } from "@/sim/engine";

/** Color del líquido según la temperatura: ámbar claro en frío, naranja intenso en caliente. */
function liquidColor(t: number) {
  const x = Math.max(0, Math.min(1, (t - 5) / 85));
  const r = Math.round(243 - 10 * x);
  const g = Math.round(214 - 110 * x);
  const b = Math.round(110 - 85 * x);
  return `rgb(${r},${g},${b})`;
}

/** Reactor esférico de vidrio, como los de una planta de API: brida, abrazaderas, agitador y escala graduada. */
export function Vessel({
  name, T, Tj, levelPct, agit, label,
}: { name: string; T: number; Tj: number; levelPct: number; agit: boolean; label?: string }) {
  const lvl = Math.max(0, Math.min(92, levelPct)) / 100;
  const cx = 130;
  const cy = 170;
  const R = 92;
  const top = cy + R - 2 * R * lvl;
  const cold = Tj < T - 3;
  const hot = Tj > T + 3;
  const id = name.replace(/[^a-z0-9]/gi, "");
  return (
    <svg viewBox="0 0 260 300" className="h-72 w-64 shrink-0" role="img" aria-label={`${name}: ${T.toFixed(1)} °C`}>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#cfe3ee" stopOpacity={0.55} />
          <stop offset="0.25" stopColor="#ffffff" stopOpacity={0.9} />
          <stop offset="0.6" stopColor="#dcebf3" stopOpacity={0.4} />
          <stop offset="1" stopColor="#b9d3e2" stopOpacity={0.65} />
        </linearGradient>
        <clipPath id={`c-${id}`}>
          <circle cx={cx} cy={cy} r={R - 3} />
        </clipPath>
      </defs>
      <rect width="260" height="300" rx="12" fill="#eef2f5" />
      {/* baño / camisa: halo de color según calienta o enfría */}
      <circle cx={cx} cy={cy} r={R + 9} fill="none" stroke={cold ? "#0891b2" : hot ? "#dc2626" : "#cbd5e1"} strokeWidth={6} opacity={0.55} />
      {/* motor */}
      <rect x={cx - 11} y={18} width={22} height={34} fill="#47505a" />
      <rect x={cx - 26} y={6} width={52} height={18} rx={4} fill="#2f363d" />
      {/* tapa */}
      <rect x={cx - 52} y={58} width={104} height={16} rx={4} fill="#1f2328" />
      {[-34, -14, 14, 34].map((d) => (
        <path key={d} d={`M${cx + d} 58 v-10`} stroke="#b08d57" strokeWidth={4} />
      ))}
      <path d={`M${cx - 38} 74 V${cy - R * 0.92} A${R} ${R} 0 1 0 ${cx + 38} ${cy - R * 0.92} V74 Z`} fill={`url(#g-${id})`} stroke="#86a9bf" strokeWidth={2.5} />
      {lvl > 0.01 && (
        <g clipPath={`url(#c-${id})`}>
          <path d={`M${cx - R} ${top} Q${cx - R / 2} ${top - 4} ${cx} ${top} T${cx + R} ${top} V${cy + R} H${cx - R} Z`} fill={liquidColor(T)} opacity={0.85}>
            {agit && (
              <animate
                attributeName="d"
                dur="1.5s"
                repeatCount="indefinite"
                values={`M${cx - R} ${top} Q${cx - R / 2} ${top - 4} ${cx} ${top} T${cx + R} ${top} V${cy + R} H${cx - R} Z;M${cx - R} ${top} Q${cx - R / 2} ${top + 4} ${cx} ${top} T${cx + R} ${top} V${cy + R} H${cx - R} Z;M${cx - R} ${top} Q${cx - R / 2} ${top - 4} ${cx} ${top} T${cx + R} ${top} V${cy + R} H${cx - R} Z`}
              />
            )}
          </path>
        </g>
      )}
      <ellipse cx={cx - 40} cy={cy - 38} rx={12} ry={32} fill="#fff" opacity={0.55} transform={`rotate(25 ${cx - 40} ${cy - 38})`} />
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1={cx + 48} y1={cy - 50 + i * 12} x2={cx + 48 + (i % 2 ? 5 : 10)} y2={cy - 50 + i * 12} stroke="#2b5d8a" strokeWidth={1.2} opacity={0.7} />
      ))}
      {/* sonda de temperatura */}
      <line x1={cx - 26} y1={70} x2={cx - 26} y2={cy + 40} stroke="#64748b" strokeWidth={4} />
      {/* eje y palas */}
      <line x1={cx} y1={50} x2={cx} y2={cy + 64} stroke="#e5e7eb" strokeWidth={5} />
      <line x1={cx} y1={50} x2={cx} y2={cy + 64} stroke="#9ca3af" strokeWidth={1.5} />
      <rect x={cx - 30} y={cy + 62} width={60} height={7} rx={3.5} fill="#e5e7eb" stroke="#9ca3af">
        {agit && <animateTransform attributeName="transform" type="scale" values="1 1;0.15 1;1 1" dur="0.7s" repeatCount="indefinite" additive="sum" />}
      </rect>
      <rect x={cx - 8} y={cy + R - 2} width={16} height={16} fill="#1f2328" />
      {/* lectura TI */}
      <rect x={cx - 46} y={cy - 22} width={92} height={40} rx={7} fill="#0f172a" opacity={0.9} />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize={10} fill="#fbbf24">TI masa</text>
      <text x={cx} y={cy + 11} textAnchor="middle" fontSize={17} fontWeight={800} fill="#fff" fontFamily="ui-monospace, Consolas, monospace">
        {T.toFixed(1).replace(".", ",")} °C
      </text>
      <rect x={cx - 26} y={276} width={52} height={18} rx={2} fill="#facc15" stroke="#a38200" />
      <text x={cx} y={289} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#1b1b1b" fontFamily="Arial, sans-serif">
        {label ?? name}
      </text>
    </svg>
  );
}

/** Gráfica de tendencia tipo sala de control: franja roja por encima del límite y banda verde de trabajo. */
export function Trend({ points, limitHigh, band, height = 190 }: { points: Point[]; limitHigh?: number; band?: [number, number]; height?: number }) {
  const W = 600;
  const H = height;
  const pad = 30;
  if (points.length < 2) {
    return (
      <div className="grid h-44 place-items-center rounded-md border border-dashed border-[#2e3a35] bg-[#1b2030] text-sm text-[#8fa199]">
        La gráfica empieza al poner el reactor en marcha (▶).
      </div>
    );
  }
  const t0 = points[0].t;
  const t1 = Math.max(points[points.length - 1].t, t0 + 30);
  const yMax = 100;
  const x = (t: number) => pad + ((t - t0) / (t1 - t0)) * (W - pad - 10);
  const y = (v: number) => H - 20 - (Math.max(0, Math.min(yMax, v)) / yMax) * (H - 30);
  const line = (k: "T" | "Tj") => points.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p[k]).toFixed(1)}`).join(" ");
  const last = points[points.length - 1];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-md bg-[#1b2030]" role="img" aria-label="Tendencia de temperaturas">
      {limitHigh != null && <rect x={pad} y={y(100)} width={W - pad - 10} height={y(limitHigh) - y(100)} fill="#7f1d1d" opacity={0.22} />}
      {band && <rect x={pad} y={y(band[1])} width={W - pad - 10} height={y(band[0]) - y(band[1])} fill="#166534" opacity={0.35} />}
      {[0, 20, 40, 60, 80, 100].map((v) => (
        <g key={v}>
          <line x1={pad} x2={W - 10} y1={y(v)} y2={y(v)} stroke="#2f3648" />
          <text x={pad - 5} y={y(v) + 4} fontSize="10" textAnchor="end" fill="#8fa199">{v}</text>
        </g>
      ))}
      {limitHigh != null && <line x1={pad} x2={W - 10} y1={y(limitHigh)} y2={y(limitHigh)} stroke="#ef4444" strokeDasharray="6 4" strokeWidth={2} />}
      <path d={line("Tj")} fill="none" stroke="#22d3ee" strokeWidth="2" />
      <path d={line("T")} fill="none" stroke="#f97316" strokeWidth="3" />
      <circle cx={x(last.t)} cy={y(last.T)} r={5} fill="#f97316" stroke="#fff" strokeWidth={1.5} />
      <text x={pad} y={H - 5} fontSize="10" fill="#8fa199">{Math.round(t1 - t0)} min</text>
      <text x={W - 12} y={H - 5} fontSize="10.5" textAnchor="end" fill="#cbd5e1">
        <tspan fill="#f97316">━ masa (TI-101)</tspan>
        <tspan dx="10" fill="#22d3ee">━ camisa (TI-102)</tspan>
        {limitHigh != null && <tspan dx="10" fill="#ef4444">┅ límite {limitHigh} °C</tspan>}
        {band && <tspan dx="10" fill="#4ade80">■ rango {band[0]}–{band[1]} °C</tspan>}
      </text>
    </svg>
  );
}
