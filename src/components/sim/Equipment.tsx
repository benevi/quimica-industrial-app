"use client";

import type { TrendPt } from "@/sim/engine";

/* Dibujos de equipos y gráfica genérica para los paneles tipo sala de control.
   Todos los equipos y códigos son ficticios. */

const SS = "#c3ccd3"; // acero inoxidable
const SS_DARK = "#7d868e";

export function Plate({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <g>
      <rect x={x - 28} y={y - 13} width={56} height={18} rx={2} fill="#facc15" stroke="#a38200" />
      <text x={x} y={y} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#1b1b1b" fontFamily="Arial, sans-serif">{children}</text>
    </g>
  );
}

export function Lcd({ x, y, w = 92, label, value, alert }: { x: number; y: number; w?: number; label: string; value: string; alert?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={38} rx={6} fill={alert ? "#450a0a" : "#0f172a"} stroke={alert ? "#ef4444" : "#1f2d47"} />
      <text x={x + w / 2} y={y + 13} textAnchor="middle" fontSize={9.5} fill={alert ? "#fecaca" : "#fbbf24"}>{label}</text>
      <text x={x + w / 2} y={y + 31} textAnchor="middle" fontSize={15} fontWeight={800} fill="#fff" fontFamily="ui-monospace, Consolas, monospace">{value}</text>
    </g>
  );
}

/** Manómetro de esfera con zona roja. */
export function Gauge({ cx, cy, r, value, max, red, label }: { cx: number; cy: number; r: number; value: number; max: number; red?: number; label: string }) {
  const ang = (v: number) => Math.PI * (1.25 - 1.5 * Math.max(0, Math.min(1, v / max)));
  const pt = (v: number, rr: number) => [cx + rr * Math.cos(ang(v)), cy - rr * Math.sin(ang(v))];
  const [ax, ay] = pt(red ?? max, r - 4);
  const [bx, by] = pt(max, r - 4);
  const [nx, ny] = pt(value, r - 7);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke="#475569" strokeWidth={2.5} />
      {red != null && <path d={`M${ax} ${ay} A${r - 4} ${r - 4} 0 0 1 ${bx} ${by}`} stroke="#dc2626" strokeWidth={5} fill="none" />}
      {Array.from({ length: 6 }).map((_, i) => {
        const v = (max * i) / 5;
        const [x1, y1] = pt(v, r - 2);
        const [x2, y2] = pt(v, r - 9);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth={1.4} />;
      })}
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={red != null && value > red ? "#dc2626" : "#111"} strokeWidth={2.5} strokeLinecap="round" style={{ transition: "all .6s" }} />
      <circle cx={cx} cy={cy} r={3} fill="#111" />
      <text x={cx} y={cy + r * 0.55} textAnchor="middle" fontSize={8.5} fill="#334155">{label}</text>
    </g>
  );
}

/** Tubería con flujo animado (rayas que avanzan) cuando hay caudal. */
export function Pipe({ d, flow, color = "#f2c96b" }: { d: string; flow: boolean; color?: string }) {
  return (
    <g>
      <path d={d} stroke="#cfd8df" strokeWidth={9} fill="none" />
      {flow && (
        <path d={d} stroke={color} strokeWidth={4} fill="none" strokeDasharray="8 8">
          <animate attributeName="stroke-dashoffset" from="32" to="0" dur="0.8s" repeatCount="indefinite" />
        </path>
      )}
    </g>
  );
}

export function Valve({ x, y, open, label, vertical }: { x: number; y: number; open: boolean; label: string; vertical?: boolean }) {
  // Además del color, la forma: abierta hueca, cerrada rellena (como una válvula cerrada en un P&ID)
  const fill = open ? "#ffffff" : "#dc2626";
  return (
    <g transform={`translate(${x} ${y})${vertical ? " rotate(90)" : ""}`}>
      <path d="M-11 -7 L0 0 L-11 7 Z M11 -7 L0 0 L11 7 Z" fill={fill} stroke={open ? "#16a34a" : "#1f2937"} strokeWidth={open ? 2.2 : 1.2} />
      <text x={0} y={vertical ? -12 : 19} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1f2937" fontFamily="ui-monospace, Consolas, monospace" transform={vertical ? "rotate(-90)" : undefined}>{label}</text>
    </g>
  );
}

/** Nivel de un depósito como barra vertical. */
export function Level({ x, y, h, pct, label, color }: { x: number; y: number; h: number; pct: number; label: string; color: string }) {
  const p = Math.max(0, Math.min(100, pct)) / 100;
  return (
    <g>
      <rect x={x} y={y} width={22} height={h} rx={4} fill="#e2e8f0" stroke="#94a3b8" />
      <rect x={x + 2} y={y + h - 2 - (h - 4) * p} width={18} height={(h - 4) * p} rx={2} fill={color} style={{ transition: "all .6s" }} />
      <text x={x + 11} y={y + h + 13} textAnchor="middle" fontSize={9.5} fill="#334155">{label}</text>
    </g>
  );
}

// ---------------- Filtro de cartucho F-301 ----------------

export function FilterSvg({ dp, progress, running, v105, v106, broken, done }: { dp: number; progress: number; running: boolean; v105: boolean; v106: boolean; broken: boolean; done: boolean }) {
  const flow = running && v105 && v106 && !done;
  // El cartucho se oscurece a medida que se ensucia (sube la ΔP)
  const dirt = Math.max(0, Math.min(1, (dp - 0.3) / 1.8));
  const cart = `rgb(${Math.round(245 - 90 * dirt)},${Math.round(240 - 120 * dirt)},${Math.round(225 - 150 * dirt)})`;
  return (
    <svg viewBox="0 0 340 280" className="h-auto w-full max-w-[340px] shrink-0" role="img" aria-label={`Filtro F-301: ΔP ${dp.toFixed(1)} bar`}>
      <rect width="340" height="280" rx="12" fill="#eef2f5" />
      <Level x={14} y={60} h={150} pct={100 - progress} label="R-101" color="#f2b35b" />
      <Level x={304} y={60} h={150} pct={progress} label="R-102" color="#f2c96b" />
      {/* entrada: R-101 → XV-105 → bomba → carcasa */}
      <Pipe d="M36 200 H70 V232 H130 V196 H142" flow={flow} />
      <Valve x={70} y={232} open={v105} label="XV-105" />
      <circle cx={104} cy={232} r={11} fill="#475569" stroke="#1f2937" />
      <path d="M98 232 L110 226 L110 238 Z" fill="#e2e8f0">
        {flow && <animateTransform attributeName="transform" type="rotate" from="0 104 232" to="360 104 232" dur="0.6s" repeatCount="indefinite" />}
      </path>
      {/* salida: carcasa → XV-106 → R-102 */}
      <Pipe d="M198 120 H250 V200 H304" flow={flow && !broken} color={broken ? "#a16207" : "#f2c96b"} />
      <Valve x={250} y={170} open={v106} label="XV-106" vertical />
      {/* carcasa */}
      <rect x={140} y={86} width={60} height={152} rx={14} fill={SS} stroke={SS_DARK} strokeWidth={2} />
      <rect x={134} y={82} width={72} height={12} rx={3} fill="#aab3ba" stroke={SS_DARK} />
      {[146, 162, 178, 194].map((x) => <rect key={x} x={x - 2} y={76} width={4} height={8} fill="#8b949b" />)}
      {/* ventana de corte para ver el cartucho */}
      <rect x={150} y={104} width={40} height={120} rx={6} fill="#f8fafc" stroke="#94a3b8" />
      <rect x={158} y={110} width={24} height={108} rx={3} fill={cart} stroke="#a8a29e" style={{ transition: "fill .6s" }} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={158} x2={182} y1={116 + i * 12} y2={116 + i * 12} stroke="#a8a29e" strokeWidth={1} />
      ))}
      {broken && <path d="M162 140 l8 10 l-6 8 l10 12 l-4 10" stroke="#b91c1c" strokeWidth={2.5} fill="none" />}
      {flow && (
        <g fill="#f2b35b" opacity={0.8}>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={154} r={2.2}>
              <animate attributeName="cy" from="220" to="110" dur="1.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      )}
      {/* manómetro diferencial */}
      <path d="M170 76 V60" stroke="#475569" strokeWidth={3} />
      <Gauge cx={170} cy={36} r={26} value={dp} max={2.5} red={1.5} label="bar" />
      <Lcd x={222} y={14} w={96} label="PDI-301 ΔP" value={`${dp.toFixed(1).replace(".", ",")} bar`} alert={dp > 1.5} />
      <Plate x={170} y={268}>F-301</Plate>
    </svg>
  );
}

// ---------------- Centrífuga C-201 ----------------

export function CentrifugeSvg({ rpm, loaded, spun, discharged, washes, v201, v202, ml }: { rpm: number; loaded: boolean; spun: boolean; discharged: boolean; washes: number; v201: boolean; v202: boolean; ml: number }) {
  const spinning = rpm > 0;
  const dur = rpm >= 1000 ? "0.25s" : rpm >= 300 ? "0.6s" : "1.4s";
  const cakeW = spun && !discharged ? 16 : 0;
  const slurry = loaded && !spun;
  const state = discharged ? "Descargada" : spun ? "Centrifugando" : loaded ? "Cargando" : "Parada";
  return (
    <svg viewBox="0 0 340 280" className="h-auto w-full max-w-[340px] shrink-0" role="img" aria-label={`Centrífuga C-201: ${rpm} rpm, ${state}`}>
      <rect width="340" height="280" rx="12" fill="#eef2f5" />
      {/* alimentación desde R-102 y agua de lavado */}
      <Pipe d="M20 40 H120 V96" flow={v201 && !spun} />
      <Valve x={70} y={40} open={v201} label="XV-201" />
      <Pipe d="M20 72 H96 V100" flow={v202 && spun && !discharged} color="#7dd3fc" />
      <Valve x={56} y={72} open={v202} label="XV-202" />
      {/* carcasa */}
      <rect x={70} y={96} width={170} height={130} rx={12} fill={SS} stroke={SS_DARK} strokeWidth={2} />
      <ellipse cx={155} cy={96} rx={85} ry={12} fill="#d5dbe0" stroke={SS_DARK} />
      {/* cesto con malla, en corte */}
      <rect x={92} y={112} width={126} height={100} rx={6} fill="#f8fafc" stroke="#64748b" strokeWidth={2} />
      <g clipPath="url(#c201-basket)">
        <clipPath id="c201-basket"><rect x={94} y={114} width={122} height={96} rx={5} /></clipPath>
        {/* rayas del cesto que giran */}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={94 + i * 24} y={114} width={4} height={96} fill="#94a3b8" opacity={0.6}>
            {spinning && <animate attributeName="x" from={94 + i * 24 - 24} to={94 + i * 24} dur={dur} repeatCount="indefinite" />}
          </rect>
        ))}
        {/* suspensión al cargar */}
        {slurry && <rect x={94} y={150} width={122} height={60} fill="#fde7b0" opacity={0.85} />}
        {/* torta pegada a la pared del cesto */}
        {cakeW > 0 && (
          <>
            <rect x={94} y={114} width={cakeW} height={96} fill="#fff7e0" stroke="#d6cfb8" />
            <rect x={216 - cakeW} y={114} width={cakeW} height={96} fill="#fff7e0" stroke="#d6cfb8" />
          </>
        )}
      </g>
      {/* eje y motor */}
      <rect x={150} y={212} width={10} height={24} fill="#6b737a" />
      <rect x={130} y={234} width={50} height={20} rx={4} fill="#374151" />
      {/* aguas madres hacia el tanque */}
      <Pipe d="M226 220 V246 H300" flow={spinning && spun && !discharged} color="#fcd34d" />
      <text x={300} y={238} textAnchor="end" fontSize={9.5} fill="#334155">aguas madres</text>
      {/* tacómetro y estado */}
      <Lcd x={238} y={14} w={86} label="SI-201 velocidad" value={`${rpm} rpm`} />
      <Lcd x={238} y={58} w={86} label="FQ-201 filtrado" value={`${ml} L`} />
      <text x={155} y={168} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e293b">{state}</text>
      {washes > 0 && !discharged && <text x={155} y={184} textAnchor="middle" fontSize={9.5} fill="#0369a1">lavados: {washes}</text>}
      <Plate x={155} y={272}>C-201</Plate>
    </svg>
  );
}

// ---------------- Secadero de vacío SD-301 ----------------

export function DryerSvg({ loaded, Tj, vacuum, v301, lod, running, packed }: { loaded: boolean; Tj: number; vacuum: number; v301: boolean; lod: number; running: boolean; packed: boolean }) {
  const pi = loaded && v301 ? vacuum : 1013;
  const jacket = Tj > 60 ? "#dc2626" : Tj >= 55 ? "#f97316" : "#fbbf24";
  // La torta pasa de crema húmeda a blanca seca
  const wet = Math.max(0, Math.min(1, lod / 25));
  const cake = `rgb(${Math.round(255 - 10 * wet)},${Math.round(253 - 30 * wet)},${Math.round(245 - 80 * wet)})`;
  return (
    <svg viewBox="0 0 340 280" className="h-auto w-full max-w-[340px] shrink-0" role="img" aria-label={`Secadero SD-301: ${pi} mbar`}>
      <rect width="340" height="280" rx="12" fill="#eef2f5" />
      <defs>
        <linearGradient id="sd-blue" x1="0" x2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="0.45" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      {/* línea de vacío → condensador → bomba */}
      <Pipe d="M190 66 V40 H262 V60" flow={loaded && v301 && running} color="#a5b4fc" />
      <Valve x={226} y={40} open={v301} label="XV-301" />
      <rect x={250} y={60} width={24} height={44} rx={6} fill={SS} stroke={SS_DARK} />
      <text x={262} y={118} textAnchor="middle" fontSize={9} fill="#334155">condensador</text>
      <circle cx={300} cy={84} r={13} fill="#475569" stroke="#1f2937" />
      <path d="M274 84 H287" stroke="#cfd8df" strokeWidth={6} />
      <text x={300} y={112} textAnchor="middle" fontSize={9} fill="#334155">bomba</text>
      {/* camisa (halo de color según la temperatura) */}
      <path d="M58 92 h180 v104 q0 48 -90 48 q-90 0 -90 -48 z" fill="none" stroke={jacket} strokeWidth={8} opacity={loaded ? 0.6 : 0.25} />
      {/* cuerpo azul */}
      <path d="M62 96 h172 v100 q0 44 -86 44 q-86 0 -86 -44 z" fill="url(#sd-blue)" stroke="#172554" strokeWidth={2} />
      <ellipse cx={148} cy={96} rx={86} ry={14} fill="#2f6fd6" stroke="#172554" />
      {/* ventana de corte */}
      <path d="M80 150 h136 v40 q0 34 -68 34 q-68 0 -68 -34 z" fill="#e0e7ff" stroke="#172554" />
      {loaded && !packed && <path d="M82 180 q66 18 132 0 v12 q0 30 -66 30 q-66 0 -66 -30 z" fill={cake} stroke="#d6cfb8" style={{ transition: "fill .8s" }} />}
      {/* vapor saliendo de la torta cuando seca */}
      {loaded && running && v301 && lod > 0.6 && (
        <g fill="none" stroke="#94a3b8" strokeWidth={1.5} opacity={0.8}>
          {[110, 148, 186].map((x, i) => (
            <path key={x} d={`M${x} 176 q-5 -8 0 -16 q5 -8 0 -16`}>
              <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </path>
          ))}
        </g>
      )}
      {/* agitador */}
      <rect x={140} y={56} width={16} height={30} fill="#4b5563" />
      <rect x={130} y={44} width={36} height={14} rx={3} fill="#374151" />
      <line x1={148} y1={86} x2={148} y2={206} stroke="#cbd5e1" strokeWidth={4} />
      <path d="M108 206 L188 206" stroke="#cbd5e1" strokeWidth={5} strokeLinecap="round">
        {loaded && running && <animateTransform attributeName="transform" type="scale" values="1 1;0.2 1;1 1" dur="2s" repeatCount="indefinite" additive="sum" />}
      </path>
      <Gauge cx={42} cy={58} r={24} value={1013 - pi} max={1013} label="vacío" />
      <Lcd x={8} y={92} w={70} label="PI-301" value={`${pi}`} alert={loaded && v301 && pi > 100} />
      <Lcd x={8} y={136} w={70} label="TI-302 cam." value={`${Tj} °C`} alert={Tj > 60} />
      <Plate x={148} y={268}>SD-301</Plate>
    </svg>
  );
}

// ---------------- Tendencia genérica ----------------

export type Series = { key: string; label: string; color: string; max: number; unit: string; fmt?: (v: number) => string; width?: number };

/**
 * Tendencia tipo sala de control con varias variables. Cada serie tiene su propia escala (0–max);
 * el eje izquierdo muestra la escala de la primera serie. Límite opcional (línea roja) sobre la primera serie.
 */
export function MiniTrend({ points, series, limit, band, empty }: { points: TrendPt[]; series: Series[]; limit?: number; band?: [number, number]; empty: string }) {
  const W = 600;
  const H = 180;
  const pad = 36;
  if (points.length < 2) {
    return <div className="grid h-40 place-items-center rounded-md border border-dashed border-[#2e3a35] bg-[#1b2030] px-4 text-center text-sm text-[#8fa199]">{empty}</div>;
  }
  const t0 = points[0].t;
  const t1 = Math.max(points[points.length - 1].t, t0 + 30);
  const x = (t: number) => pad + ((t - t0) / (t1 - t0)) * (W - pad - 12);
  const y = (v: number, max: number) => H - 22 - (Math.max(0, Math.min(max, v)) / max) * (H - 34);
  const s0 = series[0];
  const last = points[points.length - 1];
  return (
    <div className="rounded-md bg-[#1b2030]">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Tendencia: ${series.map((s) => s.label).join(", ")}`}>
        {band && <rect x={pad} y={y(band[1], s0.max)} width={W - pad - 12} height={y(band[0], s0.max) - y(band[1], s0.max)} fill="#166534" opacity={0.35} />}
        {limit != null && <rect x={pad} y={y(s0.max, s0.max)} width={W - pad - 12} height={y(limit, s0.max) - y(s0.max, s0.max)} fill="#7f1d1d" opacity={0.22} />}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={pad} x2={W - 12} y1={y(f * s0.max, s0.max)} y2={y(f * s0.max, s0.max)} stroke="#2f3648" />
            <text x={pad - 5} y={y(f * s0.max, s0.max) + 4} fontSize="10" textAnchor="end" fill={s0.color}>{(s0.fmt ?? String)(f * s0.max)}</text>
          </g>
        ))}
        {limit != null && <line x1={pad} x2={W - 12} y1={y(limit, s0.max)} y2={y(limit, s0.max)} stroke="#ef4444" strokeDasharray="6 4" strokeWidth={2} />}
        {series.map((s) => (
          <g key={s.key}>
            <path d={points.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p[s.key] ?? 0, s.max).toFixed(1)}`).join(" ")} fill="none" stroke={s.color} strokeWidth={s.width ?? 2.5} strokeLinejoin="round" />
            <circle cx={x(last.t)} cy={y(last[s.key] ?? 0, s.max)} r={4} fill={s.color} stroke="#fff" strokeWidth={1.2} />
          </g>
        ))}
        <text x={pad} y={H - 6} fontSize="10" fill="#8fa199">{Math.round(t1 - t0)} min</text>
      </svg>
      <div className="flex flex-wrap gap-x-4 gap-y-1 px-3 pb-2 text-xs text-[#cbd5e1]">
        {series.map((s) => (
          <span key={s.key} style={{ color: s.color }}>━ {s.label} ({s.unit}, 0–{(s.fmt ?? String)(s.max)})</span>
        ))}
        {limit != null && <span className="text-[#ef4444]">┅ límite {(s0.fmt ?? String)(limit)}</span>}
        {band && <span className="text-[#4ade80]">■ rango {band[0]}–{band[1]}</span>}
      </div>
    </div>
  );
}
