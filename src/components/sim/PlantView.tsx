"use client";

import { ValveGlyph } from "./Valves";
import { useEffect, useState, type ReactNode } from "react";
import * as E from "@/sim/engine";
import type { SectionId, Sim, ValveId } from "@/sim/engine";
import { currentTask } from "./Coach";

/*
 * Vista de planta ilustrada: equipos de vidrio sobre estructura tubular, condensador aislado,
 * líneas de vacío y lavador de gases, panel de servicios con código de colores.
 * Equipos y nombres ficticios. El dibujo es una "foto" de planta: usa colores propios y no
 * cambia con el tema claro/oscuro de la app.
 */

type EqId = "bascula" | "r101" | "f301" | "r102" | "c201" | "sd301" | "envasado";

const EQ_SECTION: Record<EqId, SectionId> = {
  bascula: "dispensacion",
  r101: "reaccion",
  f301: "filtracion",
  r102: "cristalizacion",
  c201: "centrifugacion",
  sd301: "secado",
  envasado: "envasado",
};

const SECTION_EQ: Partial<Record<SectionId, EqId[]>> = {
  previas: ["r101", "bascula"],
  dispensacion: ["bascula"],
  carga: ["r101"],
  reaccion: ["r101"],
  filtracion: ["f301"],
  cristalizacion: ["r102"],
  centrifugacion: ["c201"],
  secado: ["sd301"],
  envasado: ["envasado"],
};

const EQ_INFO: Record<EqId, { name: string; what: string }> = {
  bascula: { name: "Báscula B-06 y materias primas", what: "Pesada de los materiales de la orden." },
  r101: { name: "R-101 · Reactor de vidrio", what: "Aquí reaccionan el 4-aminofenol y el anhídrido acético." },
  f301: { name: "F-301 · Filtro de cartucho", what: "Quita partículas de la solución caliente antes de cristalizar." },
  r102: { name: "R-102 · Cristalizador", what: "Al enfriar, el producto sale de la solución en forma de cristales." },
  c201: { name: "C-201 · Centrífuga", what: "Separa los cristales (torta) del líquido (aguas madre)." },
  sd301: { name: "SD-301 · Secadero de vacío", what: "Evapora el agua de la torta a baja presión." },
  envasado: { name: "Envasado", what: "Doble bolsa en bidón, peso y etiqueta." },
};

/** Color del líquido según la temperatura: ámbar claro en frío, naranja intenso en caliente. */
function liquidColor(T: number) {
  const x = Math.max(0, Math.min(1, (T - 15) / 75));
  const r = Math.round(243 - 10 * x);
  const g = Math.round(214 - 100 * x);
  const b = Math.round(110 - 80 * x);
  return `rgb(${r},${g},${b})`;
}

function status(s: Sim, eq: EqId): "done" | "now" | "idle" {
  const cur = E.SECTIONS[s.section].id;
  if (!s.closed && SECTION_EQ[cur]?.includes(eq)) return "now";
  const sec = EQ_SECTION[eq];
  const idx = E.SECTIONS.findIndex((x) => x.id === sec);
  if (s.signatures[sec] != null || idx < s.section || s.closed) return "done";
  return "idle";
}

function Tag({ x, y, children }: { x: number; y: number; children: string }) {
  const w = children.length * 7.4 + 12;
  return (
    <g>
      <rect x={x - w / 2} y={y - 13} width={w} height={18} rx={2} fill="#facc15" stroke="#a38200" />
      <text x={x} y={y} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#1b1b1b" fontFamily="Arial, sans-serif">
        {children}
      </text>
    </g>
  );
}

function Chip({ x, y, label, value, tone = "dark", w = 112 }: { x: number; y: number; label: string; value: string; tone?: "dark" | "hot" | "bad" | "ok"; w?: number }) {
  const fill = tone === "hot" ? "#b45309" : tone === "bad" ? "#b91c1c" : tone === "ok" ? "#166534" : "#0f172a";
  return (
    <g>
      <rect x={x} y={y} width={w} height={38} rx={7} fill={fill} opacity={0.93} />
      <text x={x + 9} y={y + 14} fontSize={10} fill="#bfdbfe">{label}</text>
      <text x={x + 9} y={y + 31} fontSize={15} fontWeight={800} fill="#fff" fontFamily="ui-monospace, Consolas, monospace">{value}</text>
    </g>
  );
}

function Grad({ x, y1, y2, step = 13 }: { x: number; y1: number; y2: number; step?: number }) {
  const out: ReactNode[] = [];
  for (let i = 0, y = y1; y < y2; i++, y += step) {
    out.push(<line key={i} x1={x} y1={y} x2={x + (i % 2 ? 5 : 10)} y2={y} stroke="#2b5d8a" strokeWidth={1.2} opacity={0.65} />);
  }
  return <>{out}</>;
}

/** Recipiente esférico de vidrio con brida, abrazaderas, agitador y líquido. */
function GlassSphere({
  id, cx, cy, r, level, color, agit, crystals,
}: { id: string; cx: number; cy: number; r: number; level: number; color: string; agit: boolean; crystals?: boolean }) {
  const lvl = Math.max(0, Math.min(1, level));
  const top = cy + r - 2 * r * lvl;
  const neck = r * 0.42;
  return (
    <g>
      {/* motor y eje */}
      <rect x={cx - 12} y={cy - r - 70} width={24} height={50} fill="#47505a" />
      <rect x={cx - 28} y={cy - r - 86} width={56} height={22} rx={5} fill="#2f363d" />
      <text x={cx} y={cy - r - 71} textAnchor="middle" fontSize={9} fill="#cbd5e1">M</text>
      {/* tapa con muelles */}
      <rect x={cx - neck - 12} y={cy - r - 22} width={2 * neck + 24} height={18} rx={4} fill="#1f2328" />
      {[-0.8, -0.4, 0.4, 0.8].map((k) => (
        <path key={k} d={`M${cx + k * neck} ${cy - r - 22} v-12`} stroke="#b08d57" strokeWidth={4} />
      ))}
      <path
        d={`M${cx - neck} ${cy - r - 4} V${cy - r * 0.92} A${r} ${r} 0 1 0 ${cx + neck} ${cy - r * 0.92} V${cy - r - 4} Z`}
        fill="url(#pv-glass)"
        stroke="#86a9bf"
        strokeWidth={2.5}
      />
      <clipPath id={`pv-clip-${id}`}>
        <circle cx={cx} cy={cy} r={r - 3} />
      </clipPath>
      {lvl > 0.01 && (
        <g clipPath={`url(#pv-clip-${id})`}>
          <path d={`M${cx - r} ${top} Q${cx - r / 2} ${top - 5} ${cx} ${top} T${cx + r} ${top} V${cy + r} H${cx - r} Z`} fill={color} opacity={0.85}>
            {agit && (
              <animate
                attributeName="d"
                dur="1.6s"
                repeatCount="indefinite"
                values={`M${cx - r} ${top} Q${cx - r / 2} ${top - 5} ${cx} ${top} T${cx + r} ${top} V${cy + r} H${cx - r} Z;M${cx - r} ${top} Q${cx - r / 2} ${top + 5} ${cx} ${top} T${cx + r} ${top} V${cy + r} H${cx - r} Z;M${cx - r} ${top} Q${cx - r / 2} ${top - 5} ${cx} ${top} T${cx + r} ${top} V${cy + r} H${cx - r} Z`}
              />
            )}
          </path>
          {crystals &&
            Array.from({ length: 46 }).map((_, i) => {
              const a = (i * 137.5 * Math.PI) / 180;
              const d = Math.sqrt(i / 46) * (r - 10);
              const px = cx + Math.cos(a) * d;
              const py = Math.max(top + 6, cy + Math.sin(a) * d * 0.9 + r * 0.25);
              return <rect key={i} x={px} y={py} width={4} height={4} fill="#fff" opacity={0.85} transform={`rotate(45 ${px} ${py})`} />;
            })}
        </g>
      )}
      <ellipse cx={cx - r * 0.45} cy={cy - r * 0.4} rx={r * 0.14} ry={r * 0.36} fill="#fff" opacity={0.5} transform={`rotate(25 ${cx - r * 0.45} ${cy - r * 0.4})`} />
      <Grad x={cx + r * 0.5} y1={cy - r * 0.6} y2={cy + r * 0.8} />
      {/* eje y palas */}
      <line x1={cx} y1={cy - r - 22} x2={cx} y2={cy + r * 0.72} stroke="#e5e7eb" strokeWidth={5} />
      <line x1={cx} y1={cy - r - 22} x2={cx} y2={cy + r * 0.72} stroke="#9ca3af" strokeWidth={1.5} />
      <rect x={cx - r * 0.35} y={cy + r * 0.7} width={r * 0.7} height={7} rx={3.5} fill="#e5e7eb" stroke="#9ca3af">
        {agit && (
          <animateTransform attributeName="transform" type="scale" values="1 1;0.15 1;1 1" dur="0.7s" repeatCount="indefinite" additive="sum" />
        )}
      </rect>
      {/* válvula de fondo */}
      <rect x={cx - 9} y={cy + r - 2} width={18} height={18} fill="#1f2328" />
    </g>
  );
}

/** Ámbar de señal («tu siguiente paso»), fijo porque el dibujo no cambia con el tema. */
const SIGNAL = "#e8a317";

/** true si el sistema pide reducir el movimiento: entonces las marcas de «siguiente paso» no se animan. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduced;
}

export function PlantView({ s, onSelect, onValve }: { s: Sim; onSelect: (sectionIndex: number) => void; onValve?: (v: ValveId) => void }) {
  const reduced = useReducedMotion();
  const r = s.reactor;
  const cur = E.SECTIONS[s.section].id;
  const st = (eq: EqId) => status(s, eq);

  // niveles (fracción de la esfera)
  const charged = s.water + (s.afCharged ? 80 : 0) + r.added;
  const r101Level = (charged / 520) * (1 - s.filter.progress / 100);
  const r102Level = s.centri.loaded ? 0 : (s.filter.progress / 100) * 0.62;
  const r102T = s.cryst.done ? s.cryst.finalT : s.filter.progress > 0 ? 80 : 20;
  const addFlow = r.rate > 0 && !r.interlock && s.valves["XV-104"] && cur === "reaccion" && r.addEnd == null;
  const target = s.closed || s.halt ? undefined : currentTask(s).valve;
  const vacProblem = s.dryer.loaded && s.valves["XV-301"] && s.dryer.vacuum > 100;

  const selectable = (eq: EqId) => {
    const idx = E.SECTIONS.findIndex((x) => x.id === EQ_SECTION[eq]);
    return idx <= s.maxSection ? idx : -1;
  };

  const hit = ({ eq, x, y, w, h }: { eq: EqId; x: number; y: number; w: number; h: number }) => {
    const idx = selectable(eq);
    const now = st(eq) === "now";
    return (
      <g
        role={idx >= 0 ? "button" : undefined}
        tabIndex={idx >= 0 ? 0 : undefined}
        aria-label={`${EQ_INFO[eq].name}. ${EQ_INFO[eq].what}`}
        onClick={() => idx >= 0 && onSelect(idx)}
        onKeyDown={(e) => {
          if (idx >= 0 && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onSelect(idx);
          }
        }}
        style={{ cursor: idx >= 0 ? "pointer" : "default" }}
        className="pv-hit"
      >
        <title>{`${EQ_INFO[eq].name}\n${EQ_INFO[eq].what}${idx >= 0 ? "\nClic: ver esta etapa" : ""}`}</title>
        <rect x={x} y={y} width={w} height={h} rx={14} fill="transparent" stroke={now ? SIGNAL : "transparent"} strokeWidth={3} strokeDasharray={now ? "9 6" : undefined}>
          {now && !reduced && <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1.2s" repeatCount="indefinite" />}
        </rect>
        {st(eq) === "done" && (
          <g>
            <circle cx={x + w - 12} cy={y + 12} r={11} fill="#16a34a" />
            <path d={`M${x + w - 17} ${y + 12} l4 4 l7 -8`} stroke="#fff" strokeWidth={2.5} fill="none" />
          </g>
        )}
      </g>
    );
  };

  // posición del rótulo «Estás aquí»
  const here: Partial<Record<EqId, [number, number]>> = {
    bascula: [205, 452],
    r101: [330, 132],
    f301: [508, 352],
    r102: [640, 150],
    c201: [762, 410],
    sd301: [890, 300],
    envasado: [968, 452],
  };
  const nowEq = (SECTION_EQ[cur] ?? []).find((e) => st(e) === "now");

  return (
    <div className="overflow-x-auto rounded-[var(--radius)] border border-line bg-[#f4f6f8]">
      {/* En pantallas estrechas el dibujo no se encoge hasta ser ilegible: se desplaza con el dedo */}
      <svg viewBox="0 0 1040 640" className="block w-full min-w-[960px] md:min-w-0" role="group" aria-label="Vista de planta del lote FX-101: los equipos y las válvulas se pueden usar con el teclado">
        <defs>
          <linearGradient id="pv-glass" x1="0" x2="1">
            <stop offset="0" stopColor="#cfe3ee" stopOpacity={0.55} />
            <stop offset="0.25" stopColor="#ffffff" stopOpacity={0.85} />
            <stop offset="0.6" stopColor="#dcebf3" stopOpacity={0.35} />
            <stop offset="1" stopColor="#b9d3e2" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="pv-galv" x1="0" x2="1">
            <stop offset="0" stopColor="#8e979f" />
            <stop offset="0.45" stopColor="#d7dde2" />
            <stop offset="1" stopColor="#7d868e" />
          </linearGradient>
          <linearGradient id="pv-galvh" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#8e979f" />
            <stop offset="0.45" stopColor="#d7dde2" />
            <stop offset="1" stopColor="#7d868e" />
          </linearGradient>
          <linearGradient id="pv-insul" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7b838c" />
            <stop offset="0.4" stopColor="#5b636b" />
            <stop offset="1" stopColor="#3c434a" />
          </linearGradient>
          <linearGradient id="pv-pp" x1="0" x2="1">
            <stop offset="0" stopColor="#cfc8b4" />
            <stop offset="0.5" stopColor="#f1ecdf" />
            <stop offset="1" stopColor="#c6bfaa" />
          </linearGradient>
          <linearGradient id="pv-ss" x1="0" x2="1">
            <stop offset="0" stopColor="#9aa3ab" />
            <stop offset="0.35" stopColor="#eef1f3" />
            <stop offset="0.7" stopColor="#b8c0c6" />
            <stop offset="1" stopColor="#8a939b" />
          </linearGradient>
          <linearGradient id="pv-blue" x1="0" x2="1">
            <stop offset="0" stopColor="#174a9e" />
            <stop offset="0.4" stopColor="#2f6fd6" />
            <stop offset="1" stopColor="#143f88" />
          </linearGradient>
          <pattern id="pv-plate" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#aeb6be" />
            <path d="M3 5 l4 -2 M10 13 l4 -2" stroke="#c9cfd5" strokeWidth={2} />
          </pattern>
        </defs>

        {/* sala */}
        <rect width="1040" height="640" fill="#f4f6f8" />
        <rect y="566" width="1040" height="74" fill="url(#pv-plate)" />
        <rect y="556" width="1040" height="11" fill="#1f4fa3" />

        {/* panel de servicios */}
        <text x="78" y="40" textAnchor="middle" fontSize={11.5} fill="#475569" fontWeight={600}>Servicios</text>
        {[
          ["Aire", "#60a5fa"],
          ["N₂", "#d4a017"],
          ["Agua", "#16a34a"],
          ["Agua cal.", "#16a34a"],
          ["Vapor", "#dc2626"],
          ["Glicol", "#0891b2"],
        ].map(([n, c], i) => {
          const x = 24 + i * 20;
          return (
            <g key={n}>
              <rect x={x} y={50} width={11} height={500} fill="url(#pv-ss)" />
              <rect x={x - 1} y={250} width={13} height={88} rx={2} fill={c} />
              <text transform={`translate(${x + 8.5},332) rotate(-90)`} fontSize={8.5} fontWeight={700} fill="#fff">{n}</text>
              <circle cx={x + 5.5} cy={470} r={5} fill="#2563eb" />
            </g>
          );
        })}

        {/* estructura tubular */}
        {[160, 450, 690, 975].map((x) => (
          <rect key={x} x={x - 4.5} y={36} width={9} height={520} fill="url(#pv-galv)" />
        ))}
        {[150, 290, 440].map((y) => (
          <rect key={y} x={150} y={y - 4.5} width={835} height={9} fill="url(#pv-galvh)" />
        ))}
        {[160, 450, 690, 975].flatMap((x) => [150, 290, 440].map((y) => <rect key={`${x}-${y}`} x={x - 7} y={y - 7} width={14} height={14} rx={3} fill="#9aa2a9" stroke="#6b737a" />))}

        {/* condensador aislado */}
        <rect x="250" y="58" width="420" height="52" rx="26" fill="url(#pv-insul)" />
        <ellipse cx="250" cy="84" rx="20" ry="36" fill="#555d65" />
        <ellipse cx="670" cy="84" rx="20" ry="36" fill="#4a5259" />
        <rect x="430" y="50" width="62" height="22" rx="2" fill="url(#pv-ss)" stroke="#8a939b" />
        <text x="460" y="40" textAnchor="middle" fontSize={11.5} fill="#334155" fontWeight={600}>E-101 Condensador</text>
        <path d="M670 84 H1000" stroke="url(#pv-pp)" strokeWidth={13} />

        {/* vacío y lavador de gases (PP) */}
        {[
          [1000, "Vacío"],
          [1024, "Lavador de gases"],
        ].map(([x, t]) => (
          <g key={t as string}>
            <rect x={(x as number) - 8} y={36} width={16} height={520} fill="url(#pv-pp)" />
            <rect x={(x as number) - 10} y={130} width={20} height={9} fill="#c9c1aa" />
            <rect x={(x as number) - 10} y={330} width={20} height={9} fill="#c9c1aa" />
            <text transform={`translate(${(x as number) + 3.5},260) rotate(-90)`} fontSize={8.5} fontWeight={700} fill="#5b5444" textAnchor="middle">{t}</text>
          </g>
        ))}

        {/* agua purificada al reactor */}
        <path d="M69.5 104 H284 V204" stroke="#16a34a" strokeWidth={3.5} fill="none" />
        {/* agua de lavado a la centrífuga */}
        <path d="M880 448 H790 V462" stroke="#16a34a" strokeWidth={3} fill="none" />
        {/* N2 al reactor */}
        <path d="M45 128 H300 V196" stroke="#d4a017" strokeWidth={3.5} fill="none" />
        <text x="292" y="190" textAnchor="end" fontSize={10} fill="#92400e" fontWeight={700}>N₂</text>

        {/* D-101 depósito de adición */}
        <rect x="186" y="172" width="58" height="160" rx="15" fill="url(#pv-glass)" stroke="#8fb1c6" strokeWidth={2} />
        {(() => {
          const total = E.aaTotalL(s) || 95;
          const left = Math.max(0, 1 - r.added / total);
          const h = 150 * (cur === "previas" || cur === "dispensacion" || cur === "carga" ? 0 : left);
          return h > 1 ? <rect x="189" y={329 - h} width="52" height={h} rx="10" fill="#d6d0bb" opacity={0.75} /> : null;
        })()}
        <Grad x={193} y1={188} y2={326} />
        <rect x="190" y="166" width="50" height="9" rx="3" fill="#1f2328" />
        <rect x="190" y="330" width="50" height="9" rx="3" fill="#1f2328" />
        <Tag x={215} y={358}>D-101</Tag>
        <text x="215" y="376" textAnchor="middle" fontSize={10.5} fill="#334155">Anhídrido acético</text>
        {/* línea de adición con válvula automática */}
        <path d="M244 300 H262 V214 H300" stroke="#dfe8ee" strokeWidth={9} fill="none" />
        <path d="M244 300 H262 V214 H300" stroke={addFlow ? "#60a5fa" : "#9fb7c6"} strokeWidth={2} fill="none" strokeDasharray={addFlow ? "9 6" : undefined}>
          {addFlow && <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.8s" repeatCount="indefinite" />}
        </path>
        <rect x="248" y="240" width="28" height="22" rx="5" fill="#f97316" stroke={addFlow ? "#16a34a" : "#9a3412"} strokeWidth={2} />
        <rect x="254" y="228" width="16" height="12" rx="2" fill="#e2e8f0" stroke="#94a3b8" />

        {/* R-101 */}
        <GlassSphere id="r101" cx={330} cy={330} r={95} level={Math.min(0.85, r101Level)} color={liquidColor(r.T)} agit={r.agit && cur !== "filtracion"} />
        <path d="M352 210 V122 H420 V110" stroke="#dfe8ee" strokeWidth={10} fill="none" />
        <path d="M352 210 V122 H420 V110" stroke="#9fb4c3" strokeWidth={1.5} fill="none" />
        <Tag x={392} y={470}>R-101</Tag>
        {hit({ eq: "r101", x: 226, y: 150, w: 210, h: 300 })}

        {/* R-101 → F-301 → R-102 */}
        <path d="M330 442 V500 H488 V470" stroke="#cfd8df" strokeWidth={8} fill="none" />
        <path d="M508 380 V300 H545" stroke="#cfd8df" strokeWidth={8} fill="none" />
        {/* F-301 */}
        <rect x="474" y="382" width="48" height="88" rx="10" fill="url(#pv-ss)" stroke="#7d868e" />
        <rect x="470" y="380" width="56" height="9" rx="2" fill="#b8c0c6" />
        <circle cx="498" cy="372" r="9" fill="#fff" stroke="#475569" />
        <path d={`M498 372 L${498 + 7 * Math.cos(Math.PI * (1.25 - Math.min(1, s.filter.dp / 2)))} ${372 - 7 * Math.sin(Math.PI * (1.25 - Math.min(1, s.filter.dp / 2)))}`} stroke={s.filter.dp > 1.5 ? "#dc2626" : "#111"} strokeWidth={1.6} />
        <Tag x={498} y={496}>F-301</Tag>
        <text x="498" y="514" textAnchor="middle" fontSize={10.5} fill="#334155">Filtro</text>
        {hit({ eq: "f301", x: 464, y: 350, w: 70, h: 130 })}

        {/* R-102 cristalizador */}
        <GlassSphere id="r102" cx={600} cy={318} r={78} level={r102Level} color={liquidColor(r102T)} agit={cur === "cristalizacion" || (s.filter.progress > 0 && !s.centri.loaded)} crystals={s.cryst.done && !s.centri.loaded} />
        <path d="M618 222 V128 H600 V110" stroke="#dfe8ee" strokeWidth={9} fill="none" />
        <Tag x={600} y={438}>R-102</Tag>
        <text x="600" y="456" textAnchor="middle" fontSize={10.5} fill="#334155">Cristalizador</text>
        {hit({ eq: "r102", x: 515, y: 170, w: 170, h: 295 })}

        {/* R-102 → C-201 */}
        <path d="M600 414 V420 H700 V478 H722" stroke="#cfd8df" strokeWidth={8} fill="none" />
        {/* C-201 centrífuga */}
        <rect x="716" y="470" width="96" height="70" rx="8" fill="url(#pv-ss)" stroke="#7d868e" />
        <ellipse cx="764" cy="470" rx="48" ry="11" fill="#cfd5da" stroke="#7d868e" />
        <ellipse cx="764" cy="470" rx="24" ry="5" fill="#9aa3ab">
          {s.centri.loaded && !s.centri.discharged && cur === "centrifugacion" && (
            <animate attributeName="rx" values="24;6;24" dur="0.5s" repeatCount="indefinite" />
          )}
        </ellipse>
        {s.centri.spun && !s.centri.discharged && <rect x="726" y="486" width="76" height="10" rx="3" fill="#fff7e0" stroke="#d6cfb8" />}
        <rect x="720" y="540" width="8" height="16" fill="#6b737a" />
        <rect x="800" y="540" width="8" height="16" fill="#6b737a" />
        <Tag x={764} y={586}>C-201</Tag>
        <text x="764" y="604" textAnchor="middle" fontSize={10.5} fill="#334155">Centrífuga</text>
        {hit({ eq: "c201", x: 706, y: 440, w: 116, h: 118 })}

        {/* C-201 → SD-301 (torta, traslado manual) */}
        <path d="M812 500 C850 500 850 420 868 420" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
        {/* SD-301 secadero de vacío (azul) */}
        <path d="M842 330 h96 v74 q0 30 -48 30 q-48 0 -48 -30 z" fill="url(#pv-blue)" />
        <ellipse cx="890" cy="330" rx="48" ry="12" fill="#2f6fd6" stroke="#174a9e" />
        <rect x="880" y="292" width="20" height="30" fill="#4b5563" />
        <rect x="870" y="280" width="40" height="15" rx="3" fill="#374151" />
        <circle cx="858" cy="350" r="8" fill="#fff" stroke="#475569" />
        <path d={`M858 350 l${vacProblem ? 5 : -5} -4`} stroke={vacProblem ? "#dc2626" : "#111"} strokeWidth={1.6} />
        {s.dryer.loaded && !s.pack.done && <path d="M852 404 q38 14 76 0 v8 q-38 14 -76 0 z" fill="#fff7e0" />}
        <path d="M938 350 H992" stroke="#9ca3af" strokeWidth={4} strokeDasharray="6 4" />
        <Tag x={890} y={462}>SD-301</Tag>
        <text x="890" y="480" textAnchor="middle" fontSize={10.5} fill="#334155">Secadero</text>
        {hit({ eq: "sd301", x: 832, y: 270, w: 116, h: 172 })}

        {/* envasado */}
        <path d="M926 422 V490 H943 V500" stroke="#cfd8df" strokeWidth={6} fill="none" />
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x={932 + i * 26} y={500} width={22} height={52} rx={3} fill={s.pack.done ? "#3b5f8f" : "#8b6b4a"} stroke="#5b4630" />
            <rect x={935 + i * 26} y={520} width={16} height={12} fill="#fff" opacity={s.pack.done ? 1 : 0.4} />
          </g>
        ))}
        {hit({ eq: "envasado", x: 926, y: 492, w: 60, h: 66 })}

        {/* báscula y materias primas */}
        <rect x="176" y="530" width="110" height="20" rx="4" fill="#64748b" />
        <rect x="186" y="484" width="34" height="46" rx="4" fill="#475569" />
        <rect x="226" y="494" width="30" height="36" rx="4" fill="#5b6b7f" />
        <rect x="260" y="508" width="20" height="22" rx="3" fill="#7c8da3" />
        <rect x="186" y="498" width="34" height="12" fill="#fff" opacity={0.8} />
        <Tag x={231} y={586}>B-06</Tag>
        <text x="231" y="604" textAnchor="middle" fontSize={10.5} fill="#334155">Báscula</text>
        {hit({ eq: "bascula", x: 168, y: 470, w: 126, h: 90 })}

        {/* válvulas manuales (clic para abrir/cerrar en su etapa) */}
        {(
          [
            ["XV-101", 200, 104, false, "up"],
            ["XV-102", 236, 128, false, "down"],
            ["XV-103", 760, 84, false, "up"],
            ["XV-104", 262, 284, true, "right"],
            ["XV-105", 330, 488, true, "right"],
            ["XV-106", 528, 300, false, "down"],
            ["XV-201", 652, 420, false, "up"],
            ["XV-202", 820, 448, false, "up"],
            ["XV-301", 962, 350, false, "up"],
          ] as [ValveId, number, number, boolean, "up" | "down" | "right"][]
        ).map(([v, x, y, vert, lab]) => {
          const [lx, ly] = lab === "right" ? [29, 0] : lab === "down" ? [0, 17] : [0, -21];
          const open = s.valves[v];
          const can = !!onValve && !s.closed && !s.halt && E.VALVES[v].section === cur;
          const isTarget = target === v;
          return (
            <g
              key={v}
              transform={`translate(${x} ${y})`}
              role={can ? "button" : undefined}
              tabIndex={can ? 0 : undefined}
              aria-label={`${v} ${E.VALVES[v].name}: ${open ? "abierta" : "cerrada"}`}
              onClick={() => can && onValve!(v)}
              onKeyDown={(e) => {
                if (can && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onValve!(v);
                }
              }}
              style={{ cursor: can ? "pointer" : "default" }}
            >
              <title>{`${v} · ${E.VALVES[v].name}\n${open ? "abierta" : "cerrada"}${can ? "\nClic: " + (open ? "cerrar" : "abrir") : ""}`}</title>
              {isTarget && (
                <circle r={17} fill="#fdf3dc" stroke={SIGNAL} strokeWidth={2.5}>
                  {!reduced && <animate attributeName="r" values="14;19;14" dur="1.2s" repeatCount="indefinite" />}
                </circle>
              )}
              <g transform={vert ? "rotate(90)" : undefined}>
                <path d="M-11 -7 L0 0 L-11 7 Z M11 -7 L0 0 L11 7 Z" fill={open ? "#ffffff" : "#dc2626"} stroke={open ? "#16a34a" : "#1f2937"} strokeWidth={open ? 2.2 : 1.3} strokeLinejoin="round" />
              </g>
              <path d="M0 0 V-11 M-5 -11 H5" stroke="#1f2937" strokeWidth={1.8} />
              <rect x={lx - 20} y={ly - 6.5} width={40} height={13} rx={3} fill={open ? "#dcfce7" : "#fff"} stroke={open ? "#16a34a" : "#94a3b8"} />
              <text x={lx} y={ly + 3.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1f2937">{v}</text>
            </g>
          );
        })}

        {/* datos en vivo */}
        {(cur === "carga" || cur === "reaccion" || cur === "previas") && (
          <g>
            <Chip x={440} y={170} label="TI-101 masa" value={`${E.fmtNum(E.tiMasa(s), 1)} °C`} tone={cur === "reaccion" && r.addEnd == null && E.tiMasa(s) > 40 ? "bad" : "hot"} />
            <Chip x={440} y={214} label="Agitador" value={r.agit ? "Marcha" : "Paro"} tone={r.agit ? "ok" : "dark"} />
            {cur === "carga" && <Chip x={440} y={258} label="AI-101 O₂" value={`${E.fmtNum(s.o2, 1)} %`} tone={s.o2 > 2 ? "bad" : "ok"} />}
            {cur === "reaccion" && <Chip x={440} y={258} label="Adición" value={r.interlock ? "Bloqueada" : `${r.rate} L/min`} tone={r.interlock ? "bad" : "dark"} />}
          </g>
        )}
        {cur === "filtracion" && <Chip x={530} y={470} label="PDI-301 ΔP" value={`${E.fmtNum(s.filter.dp, 1)} bar`} tone={s.filter.dp > 1.5 ? "bad" : "dark"} />}
        {cur === "cristalizacion" && <Chip x={690} y={190} label="TI-102 R-102" value={`${E.fmtNum(r102T, 0)} °C`} tone="hot" />}
        {cur === "secado" && (
          <g>
            <Chip x={710} y={290} label="PI-301 vacío" value={`${s.dryer.loaded && s.valves["XV-301"] ? s.dryer.vacuum : 1013} mbar`} tone={vacProblem ? "bad" : "dark"} w={124} />
            <Chip x={710} y={334} label="T camisa" value={`${s.dryer.Tj} °C`} tone="hot" w={124} />
          </g>
        )}

        {/* incidente en curso */}
        {(() => {
          const inc = E.currentIncident(s);
          if (!inc) return null;
          const box: Record<E.IncidentEq, [number, number, number, number]> = {
            r101: [226, 150, 210, 300],
            f301: [464, 350, 70, 130],
            r102: [515, 170, 170, 295],
            c201: [706, 440, 116, 118],
            sd301: [832, 270, 116, 172],
          };
          const [x, y, w, h] = box[inc.eq];
          const cx = x + w / 2;
          return (
            <g pointerEvents="none">
              <rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx={16} fill="#dc2626" opacity={0.12} stroke="#dc2626" strokeWidth={4}>
                <animate attributeName="opacity" values="0.05;0.3;0.05" dur="0.9s" repeatCount="indefinite" />
              </rect>
              {(inc.kind === "desborde_r101" || inc.kind === "fuga_impulsion" || inc.kind === "choque_termico_r102") && (
                <ellipse cx={cx} cy={inc.eq === "f301" ? 520 : 545} rx={inc.eq === "f301" ? 60 : 110} ry={10} fill={inc.kind === "desborde_r101" ? "#7dd3fc" : "#fbbf24"} opacity={0.75} />
              )}
              {(inc.kind === "disco_n2" || inc.kind === "disco_ebullicion") && (
                <g>
                  {[-30, -10, 10, 30].map((d) => (
                    <path key={d} d={`M${352 + d * 0.3} 118 l${d} -40`} stroke={inc.kind === "disco_n2" ? "#d4a017" : "#e5e7eb"} strokeWidth={5} strokeLinecap="round" opacity={0.85}>
                      <animate attributeName="opacity" values="0.2;0.9;0.2" dur="0.6s" repeatCount="indefinite" />
                    </path>
                  ))}
                  <rect x={300} y={62} width={104} height={20} rx={4} fill="#b91c1c" />
                  <text x={352} y={76} textAnchor="middle" fontSize={12} fontWeight={800} fill="#fff">PSE-101 roto</text>
                </g>
              )}
              {inc.kind === "choque_termico_r102" && <path d="M560 260 l18 22 l-10 14 l22 26 l-8 18" stroke="#111" strokeWidth={2.5} fill="none" />}
              <rect x={cx - 70} y={y - 34} width={140} height={24} rx={12} fill="#dc2626" />
              <text x={cx} y={y - 17} textAnchor="middle" fill="#fff" fontSize={11.5} fontWeight={800}>⚠ INCIDENTE {inc.id}</text>
            </g>
          );
        })()}

        {/* Estás aquí */}
        {nowEq && here[nowEq] && !s.halt && (
          <g>
            <rect x={here[nowEq]![0] - 62} y={here[nowEq]![1] - 18} width={124} height={24} rx={12} fill={SIGNAL} />
            <text x={here[nowEq]![0]} y={here[nowEq]![1] - 1} textAnchor="middle" fill="#1b2030" fontSize={12} fontWeight={600}>▼ Estás aquí</text>
          </g>
        )}
      </svg>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line bg-surface px-3 py-2 text-xs text-muted">
        <span><span className="text-[#16a34a]">■</span> Agua</span>
        <span><span className="text-[#60a5fa]">■</span> Aire</span>
        <span><span className="text-[#d4a017]">■</span> Nitrógeno</span>
        <span><span className="text-[#dc2626]">■</span> Vapor</span>
        <span><span className="text-[#0891b2]">■</span> Glicol (frío)</span>
        <span><span className="text-[#b8ae8f]">■</span> Vacío y gases al lavador</span>
        <span className="inline-flex items-center gap-1"><ValveGlyph open size={18} /> Válvula abierta (hueca)</span>
        <span className="inline-flex items-center gap-1"><ValveGlyph open={false} size={18} /> Válvula cerrada (rellena)</span>
        <span className="ml-auto text-ink">Pulsa un equipo para ver su etapa, o una válvula para abrirla o cerrarla</span>
      </div>
    </div>
  );
}
