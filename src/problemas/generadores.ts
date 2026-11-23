import { cient, decSig, n, red, type Azar, type Generador, type Problema } from "./tipos";

// Masas atómicas: las de la tabla de «El mol a fondo» (valores estándar). Siempre se dan en el enunciado.
const MA = { H: 1.008, C: 12.011, N: 14.007, O: 15.999, Na: 22.99, S: 32.06, Cl: 35.45 } as const;
type El = keyof typeof MA;

type Sustancia = { nombre: string; formula: string; atomos: Partial<Record<El, number>> };
const masaMolar = (s: Sustancia) => Object.entries(s.atomos).reduce((t, [e, k]) => t + MA[e as El] * (k ?? 0), 0);
const datosMA = (ss: Sustancia[]) => {
  const els = [...new Set(ss.flatMap((s) => Object.keys(s.atomos)))] as El[];
  return els.map((e) => `${e} = ${n(MA[e], e === "Cl" || e === "S" ? 2 : 3)}`).join("; ") + " g/mol";
};
const desglose = (s: Sustancia) =>
  Object.entries(s.atomos)
    .map(([e, k]) => `${k} × ${n(MA[e as El], e === "Cl" || e === "S" ? 2 : 3)}`)
    .join(" + ");

const S = {
  agua: { nombre: "agua", formula: "H₂O", atomos: { H: 2, O: 1 } },
  nacl: { nombre: "cloruro de sodio", formula: "NaCl", atomos: { Na: 1, Cl: 1 } },
  naoh: { nombre: "hidróxido de sodio", formula: "NaOH", atomos: { Na: 1, O: 1, H: 1 } },
  hcl: { nombre: "cloruro de hidrógeno", formula: "HCl", atomos: { H: 1, Cl: 1 } },
  h2so4: { nombre: "ácido sulfúrico", formula: "H₂SO₄", atomos: { H: 2, S: 1, O: 4 } },
  na2so4: { nombre: "sulfato de sodio", formula: "Na₂SO₄", atomos: { Na: 2, S: 1, O: 4 } },
  acetico: { nombre: "ácido acético", formula: "CH₃COOH", atomos: { C: 2, H: 4, O: 2 } },
  etanol: { nombre: "etanol", formula: "C₂H₅OH", atomos: { C: 2, H: 6, O: 1 } },
  acetato: { nombre: "acetato de etilo", formula: "CH₃COOC₂H₅", atomos: { C: 4, H: 8, O: 2 } },
  metano: { nombre: "metano", formula: "CH₄", atomos: { C: 1, H: 4 } },
  o2: { nombre: "oxígeno", formula: "O₂", atomos: { O: 2 } },
  co2: { nombre: "dióxido de carbono", formula: "CO₂", atomos: { C: 1, O: 2 } },
  amoniaco: { nombre: "amoniaco", formula: "NH₃", atomos: { N: 1, H: 3 } },
  urea: { nombre: "urea", formula: "CH₄N₂O", atomos: { C: 1, H: 4, N: 2, O: 1 } },
  glucosa: { nombre: "glucosa", formula: "C₆H₁₂O₆", atomos: { C: 6, H: 12, O: 6 } },
  sulfato: { nombre: "sulfato de sodio", formula: "Na₂SO₄", atomos: { Na: 2, S: 1, O: 4 } },
} satisfies Record<string, Sustancia>;

/** Reacciones ajustadas: coeficientes de reactivos y productos. */
type Reaccion = { texto: string; reactivos: [Sustancia, number][]; productos: [Sustancia, number][] };
const REACCIONES: Reaccion[] = [
  { texto: "NaOH + HCl da NaCl + H₂O", reactivos: [[S.naoh, 1], [S.hcl, 1]], productos: [[S.nacl, 1], [S.agua, 1]] },
  { texto: "H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O", reactivos: [[S.h2so4, 1], [S.naoh, 2]], productos: [[S.na2so4, 1], [S.agua, 2]] },
  {
    texto: "CH₃COOH + C₂H₅OH da CH₃COOC₂H₅ + H₂O",
    reactivos: [[S.acetico, 1], [S.etanol, 1]],
    productos: [[S.acetato, 1], [S.agua, 1]],
  },
  { texto: "CH₄ + 2 O₂ da CO₂ + 2 H₂O", reactivos: [[S.metano, 1], [S.o2, 2]], productos: [[S.co2, 1], [S.agua, 2]] },
];

const R_GAS = 0.08314; // L·bar/(mol·K), la de «El mol a fondo» (8,314 J/(mol·K))
const K = (t: number) => t + 273.15;

const p = (x: Omit<Problema, "decimales"> & { decimales?: number }): Problema => ({ decimales: 2, ...x });

// ——— Nivel 0: cuentas y unidades ———

const notacion: Generador = {
  id: "notacion-cientifica",
  titulo: "Notación científica",
  nivel: 0,
  leccion: "matematicas-utiles",
  dificultad: 1,
  generar(r) {
    const e = r.elige([-6, -5, -4, -3, 3, 4, 5, 6]);
    const m = r.num(1.1, 9.9, 2);
    const x = m * 10 ** e;
    const escrito = e < 0 ? n(x, -e + 2) : String(Math.round(x));
    return p({
      enunciado: `Escribe **${escrito}** en notación científica, como a × 10${cient(x).split("× 10")[1]}. ¿Cuánto vale a?`,
      respuesta: m,
      unidad: "",
      pasos: [
        e < 0
          ? `Para que quede un número entre 1 y 10, la coma se mueve ${-e} lugares a la derecha: el exponente es −${-e}.`
          : `Para que quede un número entre 1 y 10, la coma se mueve ${e} lugares a la izquierda: el exponente es ${e}.`,
        `${escrito} = **${n(m)}** × 10${cient(x).split("× 10")[1]}`,
      ],
    });
  },
};

const conversion: Generador = {
  id: "conversion-unidades",
  titulo: "Cambiar de unidades",
  nivel: 0,
  leccion: "unidades-y-conversiones",
  dificultad: 1,
  generar(r) {
    const caso = r.elige(["mbar-bar", "kPa-bar", "m3-L", "g-kg", "mL-L", "t-kg"] as const);
    const T = {
      "mbar-bar": { v: r.int(50, 990), de: "mbar", a: "bar", f: 1 / 1000, regla: "1 bar = 1000 mbar, así que se divide entre 1000", dec: 3 },
      "kPa-bar": { v: r.num(20, 600, 1), de: "kPa", a: "bar", f: 1 / 100, regla: "1 bar = 100 kPa, así que se divide entre 100", dec: 3 },
      "m3-L": { v: r.num(0.5, 12, 2), de: "m³", a: "L", f: 1000, regla: "1 m³ = 1000 L, así que se multiplica por 1000", dec: 0 },
      "g-kg": { v: r.int(120, 9800), de: "g", a: "kg", f: 1 / 1000, regla: "1 kg = 1000 g, así que se divide entre 1000", dec: 3 },
      "mL-L": { v: r.int(5, 950), de: "mL", a: "L", f: 1 / 1000, regla: "1 L = 1000 mL, así que se divide entre 1000", dec: 3 },
      "t-kg": { v: r.num(0.2, 9.5, 2), de: "t", a: "kg", f: 1000, regla: "1 t = 1000 kg, así que se multiplica por 1000", dec: 0 },
    }[caso];
    const res = T.v * T.f;
    const dv = caso === "kPa-bar" ? 1 : caso === "m3-L" || caso === "t-kg" ? 2 : 0;
    return p({
      enunciado: `Pasa **${n(T.v, dv)} ${T.de}** a ${T.a}.`,
      respuesta: res,
      unidad: T.a,
      decimales: T.dec,
      pasos: [T.regla + ".", `${n(T.v, dv)} ${T.de} = **${n(res, T.dec)} ${T.a}**`],
    });
  },
};

const temperatura: Generador = {
  id: "kelvin",
  titulo: "Grados Celsius y kelvin",
  nivel: 0,
  leccion: "unidades-y-conversiones",
  dificultad: 1,
  generar(r) {
    const t = r.int(-20, 140);
    return p({
      enunciado: `Un reactor está a **${t} °C**. ¿Cuál es su temperatura en kelvin?`,
      respuesta: K(t),
      unidad: "K",
      pasos: ["T (K) = t (°C) + 273,15", `T = ${t} + 273,15 = **${n(K(t))} K**`],
    });
  },
};

const densidad: Generador = {
  id: "densidad-masa",
  titulo: "Densidad: de litros a kilos",
  nivel: 0,
  leccion: "densidad",
  dificultad: 1,
  generar(r) {
    const rho = r.num(0.7, 1.6, 3);
    const v = r.int(80, 2500);
    const inv = r.int(0, 1) === 1;
    const m = rho * v;
    if (inv)
      return p({
        enunciado: `Hay que cargar **${n(m, 1)} kg** de un disolvente de densidad **${n(rho, 3)} kg/L** (valor de la etiqueta, valor de ejemplo). ¿Cuántos litros son?`,
        respuesta: v,
        unidad: "L",
        decimales: 0,
        pasos: ["V = m / ρ", `V = ${n(m, 1)} / ${n(rho, 3)} = **${n(v, 0)} L**`],
      });
    return p({
      enunciado: `Se cargan **${v} L** de un disolvente de densidad **${n(rho, 3)} kg/L** (valor de ejemplo). ¿Cuántos kilos son?`,
      respuesta: m,
      unidad: "kg",
      decimales: 1,
      pasos: ["m = ρ × V", `m = ${n(rho, 3)} × ${v} = **${n(m, 1)} kg**`],
    });
  },
};

const receta: Generador = {
  id: "escalar-receta",
  titulo: "Escalar una carga (regla de tres)",
  nivel: 0,
  leccion: "matematicas-utiles",
  dificultad: 1,
  generar(r) {
    const base = r.elige([100, 250, 500]);
    const q = r.num(3, 80, 1);
    const lote = r.int(120, 900);
    const res = (q * lote) / base;
    return p({
      enunciado: `La receta de un producto ficticio pide **${n(q, 1)} kg** de un reactivo por cada **${base} kg** de producto. ¿Cuánto reactivo hace falta para un lote de **${lote} kg**?`,
      respuesta: res,
      unidad: "kg",
      pasos: [`Regla de tres: ${n(q, 1)} kg / ${base} kg = x / ${lote} kg`, `x = ${n(q, 1)} × ${lote} / ${base} = **${n(res)} kg**`],
    });
  },
};

const porcentaje: Generador = {
  id: "porcentaje-riqueza",
  titulo: "Porcentajes: cuánto hay de verdad",
  nivel: 0,
  leccion: "matematicas-utiles",
  dificultad: 1,
  generar(r) {
    const total = r.int(25, 400);
    const pct = r.num(80, 99.5, 1);
    const res = (total * pct) / 100;
    return p({
      enunciado: `Un saco de **${total} kg** de una materia prima tiene una riqueza del **${n(pct, 1)} %**. ¿Cuántos kilos de sustancia pura contiene?`,
      respuesta: res,
      unidad: "kg",
      pasos: [`Puro = total × riqueza / 100`, `Puro = ${total} × ${n(pct, 1)} / 100 = **${n(res)} kg**`],
    });
  },
};

// ——— Nivel 1: mol, disoluciones, pH, logaritmos, calor ———

const masaMolarGen: Generador = {
  id: "masa-molar",
  titulo: "Masa molar de una sustancia",
  nivel: 1,
  leccion: "el-mol",
  dificultad: 1,
  generar(r) {
    const s = r.elige([S.agua, S.nacl, S.naoh, S.h2so4, S.acetico, S.etanol, S.co2, S.amoniaco, S.urea, S.glucosa, S.sulfato]);
    const M = masaMolar(s);
    return p({
      enunciado: `Calcula la masa molar del **${s.nombre} (${s.formula})**. Masas atómicas: ${datosMA([s])}.`,
      respuesta: M,
      unidad: "g/mol",
      pasos: ["Se suma la masa de cada átomo tantas veces como aparece en la fórmula.", `M = ${desglose(s)} = **${n(M)} g/mol**`],
    });
  },
};

const molesMasa: Generador = {
  id: "moles-masa",
  titulo: "De masa a moles y al revés",
  nivel: 1,
  leccion: "el-mol",
  dificultad: 2,
  generar(r) {
    const s = r.elige([S.naoh, S.h2so4, S.acetico, S.etanol, S.nacl, S.urea, S.glucosa]);
    const M = masaMolar(s);
    if (r.int(0, 1)) {
      const kg = r.num(2, 150, 1);
      const mol = (kg * 1000) / M;
      return p({
        enunciado: `¿Cuántos moles hay en **${n(kg, 1)} kg** de **${s.nombre} (${s.formula})**? Masas atómicas: ${datosMA([s])}.`,
        respuesta: mol,
        unidad: "mol",
        decimales: 1,
        pasos: [`M = ${desglose(s)} = ${n(M)} g/mol`, `${n(kg, 1)} kg = ${n(kg * 1000, 0)} g`, `n = m / M = ${n(kg * 1000, 0)} / ${n(M)} = **${n(mol, 1)} mol**`],
      });
    }
    const mol = r.num(5, 900, 1);
    const kg = (mol * M) / 1000;
    return p({
      enunciado: `¿Cuántos kilos pesan **${n(mol, 1)} mol** de **${s.nombre} (${s.formula})**? Masas atómicas: ${datosMA([s])}.`,
      respuesta: kg,
      unidad: "kg",
      decimales: 3,
      pasos: [`M = ${desglose(s)} = ${n(M)} g/mol`, `m = n × M = ${n(mol, 1)} × ${n(M)} = ${n(mol * M, 1)} g`, `m = **${n(kg, 3)} kg**`],
    });
  },
};

const molaridad: Generador = {
  id: "molaridad",
  titulo: "Preparar una disolución molar",
  nivel: 1,
  leccion: "disoluciones",
  dificultad: 2,
  generar(r) {
    const s = r.elige([S.naoh, S.nacl, S.sulfato, S.urea, S.glucosa]);
    const M = masaMolar(s);
    const c = r.elige([0.05, 0.1, 0.2, 0.25, 0.5, 1, 2]);
    const v = r.elige([100, 250, 500, 1000, 2000]);
    const g = c * (v / 1000) * M;
    return p({
      enunciado: `¿Cuántos gramos de **${s.nombre} (${s.formula})** hay que pesar para preparar **${v} mL** de disolución **${n(c, 2)} mol/L**? Masas atómicas: ${datosMA([s])}.`,
      respuesta: g,
      unidad: "g",
      decimales: 2,
      pasos: [
        `M = ${desglose(s)} = ${n(M)} g/mol`,
        `n = c × V = ${n(c, 2)} mol/L × ${n(v / 1000, 3)} L = ${n(c * (v / 1000), 4)} mol`,
        `m = n × M = ${n(c * (v / 1000), 4)} × ${n(M)} = **${n(g)} g**`,
      ],
    });
  },
};

const dilucion: Generador = {
  id: "dilucion",
  titulo: "Diluir: C₁ · V₁ = C₂ · V₂",
  nivel: 1,
  leccion: "disoluciones",
  dificultad: 1,
  generar(r) {
    const c1 = r.elige([1, 2, 5, 6, 10, 12]);
    const c2 = r.elige([0.05, 0.1, 0.2, 0.5].filter((x) => x < c1));
    const v2 = r.elige([100, 250, 500, 1000]);
    const v1 = (c2 * v2) / c1;
    return p({
      enunciado: `Tienes una disolución madre de **${n(c1, 0)} mol/L**. ¿Qué volumen de ella hay que llevar a **${v2} mL** para obtener una disolución de **${n(c2, 2)} mol/L**?`,
      respuesta: v1,
      unidad: "mL",
      decimales: 2,
      pasos: ["Los moles no cambian al diluir: C₁ · V₁ = C₂ · V₂", `V₁ = C₂ · V₂ / C₁ = ${n(c2, 2)} × ${v2} / ${n(c1, 0)} = **${n(v1)} mL**`],
    });
  },
};

const pctMasa: Generador = {
  id: "porcentaje-en-masa",
  titulo: "Porcentaje en masa de una disolución",
  nivel: 1,
  leccion: "disoluciones",
  dificultad: 1,
  generar(r) {
    const soluto = r.num(2, 60, 1);
    const disolvente = r.int(80, 900);
    const pct = (soluto / (soluto + disolvente)) * 100;
    return p({
      enunciado: `Se disuelven **${n(soluto, 1)} kg** de sal en **${disolvente} kg** de agua. ¿Cuál es el porcentaje en masa de sal?`,
      respuesta: pct,
      unidad: "%",
      pasos: [
        `Masa de disolución = ${n(soluto, 1)} + ${disolvente} = ${n(soluto + disolvente, 1)} kg`,
        `% = soluto / disolución × 100 = ${n(soluto, 1)} / ${n(soluto + disolvente, 1)} × 100 = **${n(pct)} %**`,
      ],
    });
  },
};

const phFuerte: Generador = {
  id: "ph-acido-fuerte",
  titulo: "pH de un ácido o una base fuerte",
  nivel: 1,
  leccion: "acidos-bases-ph",
  dificultad: 2,
  generar(r) {
    const c = r.num(1.1, 9.9, 1) * 10 ** -r.int(1, 4);
    if (r.int(0, 1)) {
      const ph = -Math.log10(c);
      return p({
        enunciado: `Una disolución de ácido clorhídrico (un ácido fuerte: se disocia entero) tiene **${cient(c, 2)} mol/L**. ¿Cuál es su pH?`,
        respuesta: ph,
        unidad: "",
        tolAbs: 0.02,
        pasos: ["Ácido fuerte: [H⁺] = concentración del ácido", `pH = −log [H⁺] = −log (${cient(c, 2)}) = **${n(ph)}**`],
      });
    }
    const poh = -Math.log10(c);
    const ph = 14 - poh;
    return p({
      enunciado: `Una disolución de hidróxido de sodio (una base fuerte) tiene **${cient(c, 2)} mol/L**. ¿Cuál es su pH a 25 °C?`,
      respuesta: ph,
      unidad: "",
      tolAbs: 0.02,
      pasos: ["Base fuerte: [OH⁻] = concentración de la base", `pOH = −log (${cient(c, 2)}) = ${n(poh)}`, `pH = 14 − pOH = 14 − ${n(poh)} = **${n(ph)}**`],
    });
  },
};

const phInverso: Generador = {
  id: "ph-a-concentracion",
  titulo: "Del pH a la concentración de H⁺",
  nivel: 1,
  leccion: "logaritmos-y-exponenciales",
  dificultad: 2,
  generar(r) {
    const ph = r.num(1.2, 6.8, 2);
    const h = 10 ** -ph;
    const e = Math.floor(Math.log10(h));
    const m = h / 10 ** e;
    return p({
      enunciado: `Una muestra tiene **pH ${n(ph)}**. Escribe [H⁺] como a × 10${cient(h).split("× 10")[1]} mol/L. ¿Cuánto vale a?`,
      respuesta: m,
      unidad: "",
      tolerancia: 0.02,
      pasos: ["[H⁺] = 10^(−pH), con la tecla 10ˣ", `[H⁺] = 10^(−${n(ph)}) = **${cient(h)}** mol/L, así que a = ${n(m)}`],
    });
  },
};

const logaritmo: Generador = {
  id: "logaritmo",
  titulo: "Logaritmos con la calculadora",
  nivel: 1,
  leccion: "logaritmos-y-exponenciales",
  dificultad: 1,
  generar(r) {
    const x = r.num(1.1, 9.9, 1) * 10 ** r.int(-4, 3);
    const l = Math.log10(x);
    const xs = Math.abs(Math.log10(x)) >= 3 ? cient(x, 2) : n(x, Math.max(0, 3 - Math.floor(Math.log10(x))));
    return p({
      enunciado: `¿Cuánto vale **log ${xs}**? (logaritmo decimal)`,
      respuesta: l,
      unidad: "",
      tolAbs: 0.002,
      pasos: ["El logaritmo decimal dice a qué potencia hay que elevar 10 para obtener el número. Tecla log.", `log ${xs} = **${n(l, 3)}**`],
      decimales: 3,
    });
  },
};

const calorSensible: Generador = {
  id: "calor-sensible",
  titulo: "Calor para calentar: Q = m · cp · ΔT",
  nivel: 1,
  leccion: "energia-y-calor",
  dificultad: 2,
  generar(r) {
    const liq = r.elige([
      { nombre: "agua", cp: 4.18 },
      { nombre: "tolueno", cp: 1.7 },
    ]);
    const m = r.int(100, 3000);
    const t1 = r.int(15, 30);
    const t2 = t1 + r.int(10, 60);
    const q = m * liq.cp * (t2 - t1);
    return p({
      enunciado: `¿Cuánto calor hace falta para calentar **${m} kg** de **${liq.nombre}** de **${t1} °C** a **${t2} °C**? Calor específico: ${n(liq.cp, 2)} kJ/(kg·K).`,
      respuesta: q,
      unidad: "kJ",
      decimales: 0,
      pasos: [`ΔT = ${t2} − ${t1} = ${t2 - t1} K`, `Q = m · cp · ΔT = ${m} × ${n(liq.cp, 2)} × ${t2 - t1} = **${n(q, 0)} kJ**`],
    });
  },
};

// ——— Nivel 2: reacciones ———

function reaccionDatos(r: Azar) {
  const rx = r.elige(REACCIONES);
  return { rx, todos: [...rx.reactivos, ...rx.productos].map(([s]) => s) };
}

const estequiometria: Generador = {
  id: "estequiometria-masa",
  titulo: "Estequiometría: cuánto producto sale",
  nivel: 2,
  leccion: "ecuaciones-y-estequiometria",
  dificultad: 2,
  generar(r) {
    const { rx, todos } = reaccionDatos(r);
    const [a, ca] = rx.reactivos[r.int(0, rx.reactivos.length - 1)];
    const [b, cb] = rx.productos[0];
    const kgA = r.num(5, 200, 1);
    const molA = (kgA * 1000) / masaMolar(a);
    const molB = (molA * cb) / ca;
    const kgB = (molB * masaMolar(b)) / 1000;
    return p({
      enunciado: `Reacción ajustada: **${rx.texto}**. Si reaccionan por completo **${n(kgA, 1)} kg** de ${a.nombre} (${a.formula}) con exceso del otro reactivo, ¿cuántos kilos de ${b.nombre} (${b.formula}) se forman? Masas atómicas: ${datosMA(todos)}.`,
      respuesta: kgB,
      unidad: "kg",
      pasos: [
        `M(${a.formula}) = ${n(masaMolar(a))} g/mol; M(${b.formula}) = ${n(masaMolar(b))} g/mol`,
        `n(${a.formula}) = ${n(kgA * 1000, 0)} g / ${n(masaMolar(a))} = ${n(molA, 1)} mol`,
        `Por la ecuación, ${ca} mol de ${a.formula} ${ca === 1 ? "da" : "dan"} ${cb} mol de ${b.formula}: n(${b.formula}) = ${n(molA, 1)} × ${cb} / ${ca} = ${n(molB, 1)} mol`,
        `m = ${n(molB, 1)} × ${n(masaMolar(b))} / 1000 = **${n(kgB)} kg**`,
      ],
    });
  },
};

const limitante: Generador = {
  id: "reactivo-limitante",
  titulo: "Reactivo limitante",
  nivel: 2,
  leccion: "reactivo-limitante",
  dificultad: 3,
  generar(r) {
    const { rx, todos } = reaccionDatos(r);
    const [[a, ca], [b, cb]] = rx.reactivos;
    const [prod, cp] = rx.productos[0];
    const kgA = r.num(10, 120, 1);
    const kgB = r.num(10, 120, 1);
    const molA = (kgA * 1000) / masaMolar(a);
    const molB = (kgB * 1000) / masaMolar(b);
    const vecesA = molA / ca;
    const vecesB = molB / cb;
    const lim = vecesA <= vecesB ? { s: a, c: ca, mol: molA } : { s: b, c: cb, mol: molB };
    const molP = (lim.mol * cp) / lim.c;
    const kgP = (molP * masaMolar(prod)) / 1000;
    return p({
      enunciado: `Reacción ajustada: **${rx.texto}**. Se mezclan **${n(kgA, 1)} kg** de ${a.formula} y **${n(kgB, 1)} kg** de ${b.formula}. ¿Cuántos kilos de ${prod.formula} se forman como máximo? Masas atómicas: ${datosMA(todos)}.`,
      respuesta: kgP,
      unidad: "kg",
      pasos: [
        `n(${a.formula}) = ${n(kgA * 1000, 0)} / ${n(masaMolar(a))} = ${n(molA, 1)} mol; n(${b.formula}) = ${n(kgB * 1000, 0)} / ${n(masaMolar(b))} = ${n(molB, 1)} mol`,
        `Se divide cada uno entre su coeficiente: ${a.formula} ${n(vecesA, 1)}; ${b.formula} ${n(vecesB, 1)}. El menor es el limitante: **${lim.s.formula}**.`,
        `n(${prod.formula}) = ${n(lim.mol, 1)} × ${cp} / ${lim.c} = ${n(molP, 1)} mol`,
        `m = ${n(molP, 1)} × ${n(masaMolar(prod))} / 1000 = **${n(kgP)} kg**`,
      ],
    });
  },
};

const rendimiento: Generador = {
  id: "rendimiento",
  titulo: "Rendimiento de un lote",
  nivel: 2,
  leccion: "rendimiento-y-balance",
  dificultad: 1,
  generar(r) {
    const teo = r.num(40, 400, 1);
    const real = teo * r.num(0.6, 0.97, 3);
    return p({
      enunciado: `Por estequiometría, un lote debería dar **${n(teo, 1)} kg** de producto (producto teórico). Se han obtenido **${n(real, 1)} kg** secos. ¿Cuál es el rendimiento?`,
      respuesta: (red(real, 1) / teo) * 100,
      unidad: "%",
      decimales: 1,
      pasos: [`Rendimiento = real / teórico × 100`, `Rendimiento = ${n(real, 1)} / ${n(teo, 1)} × 100 = **${n((red(real, 1) / teo) * 100, 1)} %**`],
      tolerancia: 0.005,
    });
  },
};

const gasIdeal: Generador = {
  id: "gas-ideal",
  titulo: "Gases: P · V = n · R · T",
  nivel: 2,
  leccion: "gases-a-fondo",
  dificultad: 2,
  generar(r) {
    const v = r.int(500, 8000); // L
    const pBar = r.num(1.1, 6, 1);
    const t = r.int(10, 60);
    const mol = (pBar * v) / (R_GAS * K(t));
    return p({
      enunciado: `El espacio de cabeza de un reactor tiene **${v} L** de nitrógeno a **${n(pBar, 1)} bar** absolutos y **${t} °C**. ¿Cuántos moles de nitrógeno hay? Usa R = 0,08314 L·bar/(mol·K) y trata el gas como ideal.`,
      respuesta: mol,
      unidad: "mol",
      decimales: 1,
      pasos: [`T = ${t} + 273,15 = ${n(K(t))} K`, `n = P · V / (R · T) = ${n(pBar, 1)} × ${v} / (0,08314 × ${n(K(t))}) = **${n(mol, 1)} mol**`],
    });
  },
};

const inertizacion: Generador = {
  id: "ciclos-inertizacion",
  titulo: "Oxígeno tras ciclos de presión con nitrógeno",
  nivel: 2,
  leccion: "gases-a-fondo",
  dificultad: 3,
  generar(r) {
    const pAlta = r.elige([3, 4, 5, 6]);
    const ciclos = r.int(1, 4);
    const o2 = 21 * (1 / pAlta) ** ciclos;
    return p({
      enunciado: `Un reactor con aire (21 % de O₂) a 1 bar absoluto se presuriza con nitrógeno puro hasta **${pAlta} bar** absolutos y se ventea hasta 1 bar. Se hacen **${ciclos} ciclos**. Si el gas se mezcla bien en cada ciclo, ¿qué porcentaje de oxígeno queda?`,
      respuesta: o2,
      unidad: "%",
      decimales: decSig(o2),
      tolerancia: 0.01,
      pasos: [
        `Cada ciclo multiplica la fracción de O₂ por P baja / P alta = 1 / ${pAlta}.`,
        `O₂ = 21 × (1/${pAlta})^${ciclos} = **${n(o2, decSig(o2))} %**`,
      ],
    });
  },
};

const vidaMedia: Generador = {
  id: "primer-orden",
  titulo: "Reacción de primer orden: cuánto queda",
  nivel: 2,
  leccion: "ley-de-velocidad-a-fondo",
  dificultad: 3,
  generar(r) {
    const k = r.elige([0.05, 0.08, 0.1, 0.15, 0.2]);
    const c0 = r.num(1, 10, 1);
    const t = r.int(5, 40);
    const c = c0 * Math.exp(-k * t);
    if (r.int(0, 1)) {
      const th = Math.log(2) / k;
      return p({
        enunciado: `Una reacción de primer orden tiene **k = ${n(k, 2)} min⁻¹**. ¿Cuál es su vida media?`,
        respuesta: th,
        unidad: "min",
        pasos: ["Vida media de primer orden: t½ = ln 2 / k", `t½ = 0,6931 / ${n(k, 2)} = **${n(th)} min**`],
      });
    }
    return p({
      enunciado: `Un reactivo empieza al **${n(c0, 1)} %** y se gasta con una cinética de primer orden, **k = ${n(k, 2)} min⁻¹**. ¿Qué porcentaje queda a los **${t} min**?`,
      respuesta: c,
      unidad: "%",
      decimales: decSig(c),
      pasos: ["Primer orden: C = C₀ · e^(−k·t)", `C = ${n(c0, 1)} × e^(−${n(k, 2)} × ${t}) = ${n(c0, 1)} × ${n(Math.exp(-k * t), decSig(Math.exp(-k * t), 4))} = **${n(c, decSig(c))} %**`],
    });
  },
};

const arrhenius: Generador = {
  id: "arrhenius",
  titulo: "Arrhenius: cuánto se acelera al calentar",
  nivel: 2,
  leccion: "cinetica-a-fondo",
  dificultad: 3,
  generar(r) {
    const ea = r.elige([50, 60, 70, 80, 90, 100]);
    const t1 = r.int(20, 60);
    const t2 = t1 + r.elige([5, 10, 15, 20]);
    const f = Math.exp(((ea * 1000) / 8.314) * (1 / K(t1) - 1 / K(t2)));
    return p({
      enunciado: `Una reacción tiene una energía de activación de **${ea} kJ/mol**. ¿Por cuánto se multiplica su velocidad al pasar de **${t1} °C** a **${t2} °C**? R = 8,314 J/(mol·K).`,
      respuesta: f,
      unidad: "veces",
      pasos: [
        "k₂ / k₁ = e^[(Ea / R) · (1/T₁ − 1/T₂)]",
        `T₁ = ${n(K(t1))} K; T₂ = ${n(K(t2))} K`,
        `k₂ / k₁ = e^[(${ea * 1000} / 8,314) × (1/${n(K(t1))} − 1/${n(K(t2))})] = **${n(f)} veces**`,
      ],
    });
  },
};

// ——— Nivel 6: laboratorio ———

const valoracion: Generador = {
  id: "valoracion-acido-base",
  titulo: "Valoración ácido-base: concentración",
  nivel: 6,
  leccion: "volumetrias-acido-base",
  dificultad: 2,
  generar(r) {
    const diprotico = r.int(0, 1) === 1;
    const cNaOH = r.elige([0.1, 0.1, 0.2, 0.5]);
    const vMuestra = r.elige([10, 20, 25]);
    const vGasto = r.num(8, 24, 2);
    const molNaOH = (cNaOH * vGasto) / 1000;
    const molAc = diprotico ? molNaOH / 2 : molNaOH;
    const c = molAc / (vMuestra / 1000);
    const acido = diprotico ? "ácido sulfúrico (H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O)" : "ácido clorhídrico (HCl + NaOH da NaCl + H₂O)";
    return p({
      enunciado: `Se valoran **${vMuestra} mL** de una disolución de ${acido} con NaOH **${n(cNaOH, 1)} mol/L**. El punto final llega con **${n(vGasto)} mL**. ¿Cuál es la concentración del ácido?`,
      respuesta: c,
      unidad: "mol/L",
      decimales: 4,
      pasos: [
        `n(NaOH) = ${n(cNaOH, 1)} × ${n(vGasto / 1000, 5)} L = ${n(molNaOH, 6)} mol`,
        diprotico ? `Cada H₂SO₄ gasta 2 NaOH: n(H₂SO₄) = ${n(molNaOH, 6)} / 2 = ${n(molAc, 6)} mol` : `1 a 1: n(HCl) = ${n(molAc, 6)} mol`,
        `c = n / V = ${n(molAc, 6)} / ${n(vMuestra / 1000, 3)} L = **${n(c, 4)} mol/L**`,
      ],
    });
  },
};

const riqueza: Generador = {
  id: "riqueza-valoracion",
  titulo: "Riqueza de una materia prima por valoración",
  nivel: 6,
  leccion: "valoraciones-a-fondo",
  dificultad: 3,
  generar(r) {
    const pesada = r.num(0.12, 0.18, 4); // g de NaOH sólido: con HCl 0,1 mol/L el gasto queda por debajo de 50 mL
    const pureza = r.num(95, 99.5, 1);
    const c = 0.1;
    const mol = ((pesada * pureza) / 100) / masaMolar(S.naoh);
    const v = red((mol / c) * 1000, 2);
    const pur = ((v / 1000) * c * masaMolar(S.naoh) * 100) / pesada;
    return p({
      enunciado: `Se pesan **${n(pesada, 4)} g** de hidróxido de sodio comercial, se disuelven y se valoran con HCl **0,1000 mol/L**: se gastan **${n(v)} mL** (NaOH + HCl da NaCl + H₂O). ¿Cuál es la riqueza en NaOH? Masas atómicas: ${datosMA([S.naoh])}.`,
      respuesta: pur,
      unidad: "%",
      decimales: 1,
      tolerancia: 0.003,
      pasos: [
        `n(HCl) = 0,1000 × ${n(v / 1000, 5)} = ${n((v / 1000) * c, 6)} mol = n(NaOH)`,
        `m(NaOH) = ${n((v / 1000) * c, 6)} × ${n(masaMolar(S.naoh))} = ${n((v / 1000) * c * masaMolar(S.naoh), 4)} g`,
        `Riqueza = ${n((v / 1000) * c * masaMolar(S.naoh), 4)} / ${n(pesada, 4)} × 100 = **${n(pur, 1)} %**`,
      ],
    });
  },
};

const estadistica: Generador = {
  id: "media-desviacion",
  titulo: "Media, desviación típica y DER",
  nivel: 6,
  leccion: "estadistica-laboratorio-a-fondo",
  dificultad: 2,
  generar(r) {
    const base = r.num(97, 101, 1);
    const xs = Array.from({ length: 5 }, () => red(base + r.num(-0.8, 0.8, 2), 2));
    const media = xs.reduce((a, b) => a + b, 0) / xs.length;
    const s = Math.sqrt(xs.reduce((a, x) => a + (x - media) ** 2, 0) / (xs.length - 1));
    const der = (s / media) * 100;
    const pideDer = r.int(0, 1) === 1;
    return p({
      enunciado: `Cinco valoraciones de la riqueza de un lote dan (%): **${xs.map((x) => n(x)).join("; ")}**. ¿Cuál es ${pideDer ? "la desviación estándar relativa (DER, en %)" : "la desviación típica de la muestra, s (con n − 1)"}?`,
      respuesta: pideDer ? der : s,
      unidad: "%",
      decimales: 3,
      tolerancia: 0.02,
      pasos: [
        `Media = (${xs.map((x) => n(x)).join(" + ")}) / 5 = ${n(media, 3)}`,
        `s = √[Σ(x − media)² / (n − 1)] = ${n(s, 3)} (DESVEST.M en la hoja de cálculo)`,
        pideDer ? `DER = s / media × 100 = ${n(s, 3)} / ${n(media, 3)} × 100 = **${n(der, 3)} %**` : `s = **${n(s, 3)} %**`,
      ],
    });
  },
};

const perdidaSecado: Generador = {
  id: "perdida-por-secado",
  titulo: "Pérdida por secado (LOD)",
  nivel: 6,
  leccion: "calculo-y-expresion-de-resultados",
  dificultad: 1,
  generar(r) {
    const antes = r.num(1.5, 3, 4);
    const lod = r.num(0.1, 4, 2);
    const despues = red(antes * (1 - lod / 100), 4);
    const res = ((antes - despues) / antes) * 100;
    return p({
      enunciado: `Una muestra pesa **${n(antes, 4)} g** antes de la estufa y **${n(despues, 4)} g** después. ¿Cuál es la pérdida por secado (LOD, *loss on drying*)?`,
      respuesta: res,
      unidad: "%",
      tolAbs: 0.01,
      pasos: [`LOD = (antes − después) / antes × 100`, `LOD = (${n(antes, 4)} − ${n(despues, 4)}) / ${n(antes, 4)} × 100 = **${n(res)} %**`],
    });
  },
};

// ——— Nivel 12: operaciones de planta ———

const balanceSecado: Generador = {
  id: "balance-secado",
  titulo: "Balance del secadero: cuánta agua se va",
  nivel: 12,
  leccion: "secaderos",
  dificultad: 2,
  generar(r) {
    const humeda = r.int(150, 900);
    const h1 = r.num(15, 40, 1);
    const h2 = r.num(0.2, 1, 1);
    const seco = humeda * (1 - h1 / 100);
    const final = seco / (1 - h2 / 100);
    const evapora = humeda - final;
    return p({
      enunciado: `Entran al secadero **${humeda} kg** de torta húmeda con un **${n(h1, 1)} %** de disolvente. Se seca hasta un **${n(h2, 1)} %**. ¿Cuántos kilos de producto salen? (El sólido seco no se pierde.)`,
      respuesta: final,
      unidad: "kg",
      decimales: 1,
      pasos: [
        `Sólido seco = ${humeda} × (1 − ${n(h1, 1)}/100) = ${n(seco, 1)} kg`,
        `A la salida ese sólido es el ${n(100 - h2, 1)} % del producto: ${n(seco, 1)} / (1 − ${n(h2, 1)}/100) = **${n(final, 1)} kg**`,
        `(Se evaporan ${n(evapora, 1)} kg de disolvente.)`,
      ],
    });
  },
};

const dosificacion: Generador = {
  id: "tiempo-dosificacion",
  titulo: "Tiempo de una adición dosificada",
  nivel: 12,
  leccion: "reactor-y-servicios",
  dificultad: 1,
  generar(r) {
    const masa = r.int(40, 600);
    const caudal = r.num(0.5, 8, 1);
    const t = masa / caudal;
    return p({
      enunciado: `Hay que añadir **${masa} kg** de un reactivo a **${n(caudal, 1)} kg/min**. ¿Cuántos minutos dura la adición?`,
      respuesta: t,
      unidad: "min",
      decimales: 1,
      pasos: ["t = masa / caudal", `t = ${masa} / ${n(caudal, 1)} = **${n(t, 1)} min**`],
    });
  },
};

export const GENERADORES: Generador[] = [
  notacion,
  conversion,
  temperatura,
  densidad,
  receta,
  porcentaje,
  masaMolarGen,
  molesMasa,
  molaridad,
  dilucion,
  pctMasa,
  logaritmo,
  phFuerte,
  phInverso,
  calorSensible,
  estequiometria,
  limitante,
  rendimiento,
  gasIdeal,
  inertizacion,
  vidaMedia,
  arrhenius,
  valoracion,
  riqueza,
  estadistica,
  perdidaSecado,
  balanceSecado,
  dosificacion,
];

export const generador = (id: string) => GENERADORES.find((g) => g.id === id);
