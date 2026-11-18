"use client";

import type { Point } from "@/sim/engine";

function heatColor(t: number) {
  // azul (frío) → rojo (caliente)
  const x = Math.max(0, Math.min(1, (t - 5) / 100));
  const r = Math.round(40 + 200 * x);
  const b = Math.round(220 - 180 * x);
  return `rgb(${r},90,${b})`;
}

export function Vessel({
  name, T, Tj, levelPct, agit, label,
}: { name: string; T: number; Tj: number; levelPct: number; agit: boolean; label?: string }) {
  const lvl = Math.max(0, Math.min(100, levelPct));
  const liquidTop = 150 - (lvl / 100) * 110;
  return (
    <svg viewBox="0 0 200 200" className="h-48 w-48 shrink-0" role="img" aria-label={`${name}: ${T.toFixed(1)} °C`}>
      <defs>
        <clipPath id={`clip-${name}`}>
          <path d="M50 30 h100 v110 q0 30 -50 30 q-50 0 -50 -30 z" />
        </clipPath>
      </defs>
      {/* camisa */}
      <path d="M40 40 h120 v100 q0 38 -60 38 q-60 0 -60 -38 z" fill={heatColor(Tj)} opacity="0.35" />
      {/* recipiente */}
      <path d="M50 30 h100 v110 q0 30 -50 30 q-50 0 -50 -30 z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="0" y={liquidTop} width="200" height="200" fill={heatColor(T)} opacity="0.55" clipPath={`url(#clip-${name})`} />
      {/* agitador */}
      <line x1="100" y1="8" x2="100" y2="140" stroke="var(--ink)" strokeWidth="3" />
      <g style={{ transformOrigin: "100px 140px", animation: agit ? "sim-spin 0.6s linear infinite" : undefined }}>
        <rect x="78" y="136" width="44" height="8" rx="2" fill="var(--ink)" />
      </g>
      <rect x="88" y="0" width="24" height="10" rx="2" fill="var(--muted)" />
      <text x="100" y="196" textAnchor="middle" fontSize="12" fill="var(--muted)">
        {label ?? name}
      </text>
    </svg>
  );
}

export function Trend({ points, limitHigh, band, height = 160 }: { points: Point[]; limitHigh?: number; band?: [number, number]; height?: number }) {
  const W = 600;
  const H = height;
  const pad = 28;
  if (points.length < 2) {
    return <div className="grid h-40 place-items-center rounded-lg border border-dashed border-line text-sm text-muted">La gráfica aparece al poner el reactor en marcha.</div>;
  }
  const t0 = points[0].t;
  const t1 = Math.max(points[points.length - 1].t, t0 + 30);
  const yMin = 0;
  const yMax = 100;
  const x = (t: number) => pad + ((t - t0) / (t1 - t0)) * (W - pad - 6);
  const y = (v: number) => H - 18 - ((v - yMin) / (yMax - yMin)) * (H - 26);
  const line = (k: "T" | "Tj") => points.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p[k]).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Tendencia de temperaturas">
      {band && <rect x={pad} y={y(band[1])} width={W - pad - 6} height={y(band[0]) - y(band[1])} fill="var(--ok-soft)" />}
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={pad} x2={W - 6} y1={y(v)} y2={y(v)} stroke="var(--line)" />
          <text x={pad - 4} y={y(v) + 4} fontSize="10" textAnchor="end" fill="var(--muted)">{v}</text>
        </g>
      ))}
      {limitHigh != null && <line x1={pad} x2={W - 6} y1={y(limitHigh)} y2={y(limitHigh)} stroke="var(--bad)" strokeDasharray="5 4" />}
      <path d={line("Tj")} fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={line("T")} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <text x={pad} y={H - 4} fontSize="10" fill="var(--muted)">{Math.round(t1 - t0)} min</text>
      <text x={W - 8} y={H - 4} fontSize="10" textAnchor="end" fill="var(--muted)">— producto (TI-101) · - - camisa (TI-102)</text>
    </svg>
  );
}
