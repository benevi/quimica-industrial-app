"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { isAmbiguous, parseNum } from "@/lib/num";

/** «1.250» puede ser mil doscientos cincuenta o 1,25: no se calcula con un dato dudoso */
const toNum = (s: string) => (isAmbiguous(s) ? null : parseNum(s));
const fmt = (n: number | null, d = 4) =>
  n === null || !Number.isFinite(n) ? "—" : n.toLocaleString("es-ES", { maximumFractionDigits: d });

function Field({ label, value, onChange, unit }: { label: string; value: string; onChange: (v: string) => void; unit?: string }) {
  return (
    <label className="block text-sm">
      <span className="text-muted">{label}</span>
      <span className="mt-1 flex items-center gap-2">
        <input
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-line-strong bg-surface px-3 py-2 font-mono tabular-nums"
        />
        {unit && <span className="w-14 shrink-0 font-mono text-muted">{unit}</span>}
      </span>
      {isAmbiguous(value) && (
        <span className="mt-1 block text-xs text-bad" role="alert">
          «{value.trim()}» se puede leer de dos formas. Escribe los decimales con coma (1,25) y los miles sin punto (1250).
        </span>
      )}
    </label>
  );
}

function Card({ title, en, children }: { title: string; en: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface p-5">
      <h2 className="t-h3">
        {title}{" "}
        <span lang="en" className="text-sm font-normal text-muted">
          {en}
        </span>
      </h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

function Result({ children }: { children: React.ReactNode }) {
  return <p className="rounded-md bg-accent-soft px-3 py-2 text-sm tabular-nums" aria-live="polite">
      {children}
    </p>;
}

const units = {
  masa: { kg: 1, g: 1e-3, mg: 1e-6, t: 1000 },
  volumen: { L: 1, mL: 1e-3, "m³": 1000 },
  presion: { bar: 1, mbar: 1e-3, kPa: 0.01, atm: 1.01325, psi: 0.0689476, mmHg: 0.00133322 },
} as const;
type Mag = keyof typeof units;

function UnitConverter() {
  const [mag, setMag] = useState<Mag>("presion");
  const keys = Object.keys(units[mag]);
  const [from, setFrom] = useState("bar");
  const [val, setVal] = useState("1");
  const table = units[mag] as Record<string, number>;
  const f = keys.includes(from) ? from : keys[0];
  const v = toNum(val);
  return (
    <Card title="Conversión de unidades" en="Unit converter">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Magnitud">
        {(Object.keys(units) as Mag[]).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mag === m}
            onClick={() => { setMag(m); setFrom(Object.keys(units[m])[0]); }}
            className={`rounded-full border px-3 py-1 text-sm ${mag === m ? "border-accent bg-accent-soft font-medium text-accent" : "border-line bg-surface hover:border-accent"}`}
          >
            {m === "presion" ? "Presión" : m === "masa" ? "Masa" : "Volumen"}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1"><Field label="Valor" value={val} onChange={setVal} /></div>
        <label className="block text-sm">
          <span className="text-muted">Unidad</span>
          <select value={f} onChange={(e) => setFrom(e.target.value)} className="mt-1 block rounded-md border border-line-strong bg-surface px-3 py-2">
            {keys.map((k) => <option key={k}>{k}</option>)}
          </select>
        </label>
      </div>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {keys.filter((k) => k !== f).map((k) => (
          <li key={k} className="rounded-md bg-soft px-3 py-2 tabular-nums">
            {v === null ? "—" : fmt((v * table[f]) / table[k], 6)} <span className="text-muted">{k}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Temperature() {
  const [c, setC] = useState("25");
  const v = toNum(c);
  return (
    <Card title="Temperatura" en="Temperature">
      <Field label="Grados Celsius" value={c} onChange={setC} unit="°C" />
      <Result>
        {fmt(v === null ? null : v + 273.15, 2)} K · {fmt(v === null ? null : v * 1.8 + 32, 1)} °F
      </Result>
    </Card>
  );
}

function Density() {
  const [vol, setVol] = useState("100");
  const [d, setD] = useState("0,79");
  const [mass, setMass] = useState("300");
  const V = toNum(vol), D = toNum(d), M = toNum(mass);
  return (
    <Card title="Densidad: litros ↔ kilos" en="Density">
      <Field label="Densidad" value={d} onChange={setD} unit="kg/L" />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Field label="Volumen" value={vol} onChange={setVol} unit="L" />
          <Result>= {fmt(V !== null && D !== null ? V * D : null, 3)} kg</Result>
        </div>
        <div className="space-y-2">
          <Field label="Masa" value={mass} onChange={setMass} unit="kg" />
          <Result>= {fmt(M !== null && D ? M / D : null, 3)} L</Result>
        </div>
      </div>
      <p className="text-xs text-muted">Agua 1,00 · Metanol 0,79 · Acetona 0,79 · Tolueno 0,87 · Diclorometano 1,33 (kg/L, 20 °C)</p>
    </Card>
  );
}

function Moles() {
  const [mass, setMass] = useState("50");
  const [mw, setMw] = useState("151,2");
  const [eq, setEq] = useState("1,1");
  const [mw2, setMw2] = useState("40");
  const m = toNum(mass), M = toNum(mw), E = toNum(eq), M2 = toNum(mw2);
  const kmol = m !== null && M ? m / M : null;
  const kmol2 = kmol !== null && E !== null ? kmol * E : null;
  const m2 = kmol2 !== null && M2 !== null ? kmol2 * M2 : null;
  return (
    <Card title="Moles y equivalentes" en="Moles and equivalents">
      <p className="text-sm text-muted">Material de partida</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Masa" value={mass} onChange={setMass} unit="kg" />
        <Field label="Masa molar" value={mw} onChange={setMw} unit="g/mol" />
      </div>
      <Result>= {fmt(kmol, 4)} kmol</Result>
      <p className="text-sm text-muted">Reactivo a cargar</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Equivalentes" value={eq} onChange={setEq} unit="eq" />
        <Field label="Masa molar" value={mw2} onChange={setMw2} unit="g/mol" />
      </div>
      <Result>
        = {fmt(kmol2, 4)} kmol, es decir, <strong>{fmt(m2, 3)} kg</strong> de reactivo puro
      </Result>
      <p className="text-xs text-muted">Si el reactivo no es puro (p. ej. HCl 37 %), divide la masa entre su riqueza: {fmt(m2, 3)} kg / 0,37 = {fmt(m2 !== null ? m2 / 0.37 : null, 3)} kg.</p>
    </Card>
  );
}

function Dilution() {
  const [mode, setMode] = useState<"vol" | "mass">("vol");
  const [c1, setC1] = useState("10");
  const [c2, setC2] = useState("2");
  const [v2, setV2] = useState("100");
  const C1 = toNum(c1), C2 = toNum(c2), V2 = toNum(v2);
  const valid = C1 !== null && C2 !== null && V2 !== null && C1 > 0 && C2 > 0 && V2 > 0;
  const tooStrong = valid && C2 > C1;
  const x1 = valid && !tooStrong ? (C2 * V2) / C1 : null;
  const u = mode === "vol" ? "L" : "kg";
  return (
    <Card title={mode === "vol" ? "Diluciones por volumen (C₁·V₁ = C₂·V₂)" : "Diluciones por masa (C₁·m₁ = C₂·m₂)"} en="Dilutions">
      <fieldset className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <legend className="sr-only">Cómo está expresada la concentración</legend>
        <label className="flex items-center gap-2">
          <input type="radio" name="dil-mode" className="accent-[var(--accent)]" checked={mode === "vol"} onChange={() => setMode("vol")} />
          Por volumen: mol/L (M), g/L, % p/v
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="dil-mode" className="accent-[var(--accent)]" checked={mode === "mass"} onChange={() => setMode("mass")} />
          Por masa: % p/p (sosa 50 %, HCl 35 %…)
        </label>
      </fieldset>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Concentración inicial C₁" value={c1} onChange={setC1} />
        <Field label="Concentración final C₂" value={c2} onChange={setC2} />
        <Field label={mode === "vol" ? "Volumen final V₂" : "Masa final m₂"} value={v2} onChange={setV2} unit={u} />
      </div>
      {tooStrong ? (
        <Result>Diluyendo no se puede concentrar: la concentración final tiene que ser menor que la inicial.</Result>
      ) : (
        <Result>
          {mode === "vol" ? "Toma" : "Pesa"} <strong>{fmt(x1, 3)} {u}</strong> de la solución concentrada y completa hasta {fmt(valid ? V2 : null)} {u}
          {mode === "mass" && <> ({fmt(x1 !== null && V2 !== null ? V2 - x1 : null, 3)} kg de disolvente)</>}.
        </Result>
      )}
      <p className="text-xs text-muted">
        {mode === "vol"
          ? "C₁ y C₂ en la misma unidad. Esta fórmula con litros solo vale si la concentración es por volumen (mol/L, g/L, % p/v). Si la etiqueta dice % en peso (% p/p), usa el modo por masa: al diluir cambia la densidad y los litros dejan de cuadrar. Se completa hasta el volumen final; no se suma el disolvente por litros."
          : "C₁ y C₂ en % en peso. Las masas sí se suman: la masa final es la del concentrado más la del disolvente. Para pasar de kilos a litros necesitas la densidad de cada solución (ficha técnica o tabla del proveedor)."}{" "}
        Con ácidos: siempre el ácido sobre el agua, despacio.
      </p>
    </Card>
  );
}

function Yield() {
  const [teo, setTeo] = useState("120");
  const [real, setReal] = useState("102");
  const T = toNum(teo), R = toNum(real);
  return (
    <Card title="Rendimiento" en="Yield">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Esperado (teórico)" value={teo} onChange={setTeo} unit="kg" />
        <Field label="Obtenido (real)" value={real} onChange={setReal} unit="kg" />
      </div>
      <Result>Rendimiento = <strong>{fmt(T && R !== null ? (R / T) * 100 : null, 1)} %</strong></Result>
    </Card>
  );
}

export default function Calculadoras() {
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Calculadoras" }]}
        title="Calculadoras de planta"
        en="Calculators"
        icon="calc"
        lead="Para practicar. En planta, los cálculos oficiales son los de la hoja y se verifican por un segundo operador."
      />
      <div className="grid items-start gap-4 md:grid-cols-2">
        <UnitConverter />
        <Temperature />
        <Density />
        <Yield />
        <Moles />
        <Dilution />
      </div>
    </div>
  );
}
