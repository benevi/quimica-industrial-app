/**
 * Modo auditoría: hojas de lote ya rellenas (producto ficticio FX-101) con errores escondidos.
 * El alumno revisa como lo haría QA, marca las líneas sospechosas y dice qué tipo de fallo es.
 * Todos los lotes, iniciales y códigos son inventados.
 */

export type AuditCategory = "spec" | "registro" | "calculo" | "firma" | "hora" | "material";

export const AUDIT_CATEGORIES: Record<AuditCategory, { label: string; hint: string }> = {
  spec: { label: "Fuera de especificación sin desviación", hint: "El valor no cumple el rango de la hoja y nadie lo ha tratado." },
  registro: { label: "Registro mal hecho (ALCOA+)", hint: "Corrección sin motivo, dato ilegible, «OK» en vez del valor, casilla vacía…" },
  calculo: { label: "Cálculo o conciliación mal", hint: "La cuenta no sale: rendimiento, etiquetas, sumas." },
  firma: { label: "Firma o verificación incorrecta", hint: "Sin firma, o la misma persona hace y verifica." },
  hora: { label: "Hora imposible o fuera de orden", hint: "Algo registrado antes de que pudiera pasar." },
  material: { label: "Material o lote no permitido", hint: "Lote caducado, en cuarentena o que no es el de la hoja." },
};

export type AuditLine = {
  id: string;
  stage: string;
  label: string;
  spec?: string;
  value: string;
  who: string;
  when: string;
  verif?: string;
  /** Valores tachados antes del actual (corrección según buenas prácticas, o no). */
  struck?: { value: string; reason?: string; who?: string; when?: string }[];
  /** Nota o referencia escrita al lado (desviación, comentario). */
  note?: string;
  /** Si la línea es correcta pero parece sospechosa: por qué está bien. */
  okWhy?: string;
};

export type AuditError = {
  line: string;
  cat: AuditCategory;
  sev: "crítico" | "mayor" | "menor";
  title: string;
  why: string;
  /** Principio ALCOA+ o norma GMP afectada. */
  rule: string;
};

export type AuditCase = {
  id: string;
  title: string;
  level: "Básico" | "Medio" | "Avanzado";
  intro: string;
  /** Datos que el auditor tiene a mano para comprobar (etiquetas, ERP, LIMS…). */
  refs: string[];
  lines: AuditLine[];
  errors: AuditError[];
};

export const AUDIT_CASES: AuditCase[] = [
  {
    id: "a1",
    title: "Lote 26-0151",
    level: "Básico",
    intro: "Primera revisión: dispensación, carga y reacción. Hay 5 errores. Fíjate en los rangos, los lotes y quién firma.",
    refs: [
      "Estado de lotes en el ERP: AF-24115 aprobado · AA-0921 aprobado · AA-0877 caducado (31/10/2026) · SE-0098 aprobado.",
      "La hoja exige que cada pesada la verifique una segunda persona distinta del operador.",
      "Una corrección se hace tachando con una raya (que se siga leyendo), con el valor nuevo, iniciales, fecha y motivo.",
    ],
    lines: [
      { id: "lote_af", stage: "Dispensación", label: "4-aminofenol: lote utilizado", value: "AF-24115", who: "OP1", when: "18/11 08:40", verif: "OP2" },
      { id: "peso_af", stage: "Dispensación", label: "4-aminofenol: peso", spec: "99,5 – 100,5 kg", value: "100,1 kg", who: "OP1", when: "18/11 08:44", verif: "OP2" },
      { id: "lote_aa", stage: "Dispensación", label: "Anhídrido acético: lote utilizado", value: "AA-0877", who: "OP1", when: "18/11 08:52", verif: "OP2" },
      { id: "peso_aa", stage: "Dispensación", label: "Anhídrido acético: peso", spec: "102,4 – 103,4 kg", value: "103,8 kg", who: "OP1", when: "18/11 08:57", verif: "OP2" },
      { id: "lote_se", stage: "Dispensación", label: "Semilla FX-101: lote utilizado", value: "SE-0098", who: "OP1", when: "18/11 09:03", verif: "OP1" },
      { id: "peso_se", stage: "Dispensación", label: "Semilla FX-101: peso", spec: "0,48 – 0,52 kg", value: "0,50 kg", who: "OP1", when: "18/11 09:05", verif: "OP2" },
      {
        id: "agua_l", stage: "Carga", label: "Agua purificada cargada (FQ-101)", spec: "295 – 305 L", value: "301 L", who: "OP1", when: "18/11 09:31",
        struck: [{ value: "310", reason: "Error de transcripción: el totalizador marca 301", who: "OP1", when: "18/11 09:32" }],
        okWhy: "Corrección bien hecha: el valor anterior se lee, y hay motivo, iniciales y hora.",
      },
      { id: "o2", stage: "Carga", label: "Oxígeno tras inertizar (AI-101)", spec: "≤ 2,0 %", value: "1,6 %", who: "OP1", when: "18/11 09:58" },
      { id: "ini_adicion", stage: "Reacción", label: "Hora de inicio de la adición", value: "18/11 10:20", who: "OP1", when: "18/11 10:20" },
      { id: "fin_adicion", stage: "Reacción", label: "Hora de fin de la adición", spec: "adición en ≥ 30 min", value: "18/11 10:42", who: "OP1", when: "18/11 10:42" },
      { id: "tmax_adicion", stage: "Reacción", label: "T máxima durante la adición (TI-101)", spec: "≤ 40 °C", value: "38,2 °C", who: "OP1", when: "18/11 10:43" },
      {
        id: "ipc_af", stage: "Reacción", label: "IPC: 4-aminofenol residual (HPLC)", spec: "≤ 0,50 % área", value: "0,31 % área", who: "OP1", when: "18/11 13:05",
        struck: [{ value: "0,62" }],
      },
    ],
    errors: [
      { line: "lote_aa", cat: "material", sev: "crítico", title: "Se usó un lote caducado de anhídrido acético", why: "El AA-0877 caducó el 31/10/2026. No puede entrar en fabricación: el lote queda bloqueado hasta que Calidad lo evalúe.", rule: "GMP: solo se usan materiales aprobados y en fecha (ICH Q7, cap. 7)." },
      { line: "peso_aa", cat: "spec", sev: "mayor", title: "Peso de anhídrido fuera de rango", why: "103,8 kg está por encima de 102,4–103,4 kg y no hay desviación anotada. Había que ajustar la pesada o abrir una desviación antes de cargar.", rule: "Todo resultado fuera de especificación se documenta y se investiga." },
      { line: "lote_se", cat: "firma", sev: "mayor", title: "La misma persona pesa y verifica", why: "OP1 pesó y OP1 firmó como verificador. La verificación tiene que hacerla una segunda persona, si no, no sirve de control.", rule: "Principio de los cuatro ojos en operaciones críticas (ALCOA: Atribuible)." },
      { line: "ipc_af", cat: "registro", sev: "mayor", title: "Corrección sin motivo ni firma", why: "Se tachó 0,62 y se escribió 0,31 sin iniciales, fecha ni motivo. Además 0,62 no cumple: parece que se ha cambiado un resultado malo por uno bueno. Hay que preguntar al laboratorio y abrir investigación.", rule: "ALCOA+: Original y Atribuible. Nunca se corrige sin justificar." },
      { line: "fin_adicion", cat: "spec", sev: "mayor", title: "Adición demasiado rápida para la hoja", why: "De 10:20 a 10:42 son 22 min. La hoja pide añadir el anhídrido en ≥ 30 min para que el calor de la reacción no se acumule. No hay desviación.", rule: "Parámetro de proceso fuera de lo que manda la hoja." },
    ],
  },
  {
    id: "a2",
    title: "Lote 26-0158",
    level: "Medio",
    intro: "Revisión de la segunda mitad del lote: filtración, cristalización, secado y envasado. Hay 6 errores. Saca la calculadora.",
    refs: [
      "Rendimiento = peso neto ÷ teórico × 100. Teórico del FX-101: 138,5 kg.",
      "Conciliación de etiquetas: emitidas = usadas + destruidas + devueltas.",
      "LIMS: la muestra de LOD se pidió el 19/11 a las 03:40; el resultado salió a las 04:00.",
    ],
    lines: [
      { id: "dp_filtro", stage: "Filtración", label: "ΔP máxima en F-301 (PDI-301)", spec: "≤ 1,5 bar", value: "0,9 bar", who: "OP3", when: "18/11 13:50" },
      { id: "cartucho", stage: "Filtración", label: "Lote del cartucho de 1 µm usado", value: "", who: "", when: "" },
      { id: "t_siembra", stage: "Cristalización", label: "Temperatura de siembra", spec: "58 – 62 °C", value: "60 °C", who: "OP3", when: "18/11 14:30" },
      { id: "min_rampa", stage: "Cristalización", label: "Duración del enfriamiento hasta 0–5 °C", spec: "≥ 120 min", value: "95 min", who: "OP3", when: "18/11 16:05" },
      { id: "t_final", stage: "Cristalización", label: "Temperatura final", spec: "0 – 5 °C", value: "3 °C", who: "OP3", when: "18/11 16:06" },
      { id: "lavados", stage: "Centrifugación", label: "Lavados con agua fría (nº × 50 L)", spec: "2", value: "2", who: "OP3", when: "18/11 18:10" },
      { id: "t_secado", stage: "Secado", label: "T de camisa del secadero (máxima)", spec: "55 – 60 °C", value: "58 °C", who: "OP4", when: "19/11 02:00" },
      { id: "vacio", stage: "Secado", label: "Vacío durante el secado (peor lectura)", spec: "≤ 100 mbar", value: "OK", who: "OP4", when: "19/11 02:00" },
      { id: "lod", stage: "Secado", label: "IPC: pérdida por secado (LOD)", spec: "≤ 0,5 %", value: "0,32 %", who: "OP4", when: "19/11 03:45" },
      { id: "neto", stage: "Envasado", label: "Peso neto total de producto seco", value: "117,9 kg", who: "OP4", when: "19/11 05:30", verif: "OP3" },
      { id: "rendimiento", stage: "Envasado", label: "Rendimiento (calculado)", spec: "80 – 95 %", value: "91,2 %", who: "OP4", when: "19/11 05:35", verif: "OP3" },
      { id: "etq_emitidas", stage: "Envasado", label: "Etiquetas emitidas", value: "7", who: "OP4", when: "19/11 05:40" },
      { id: "etq_usadas", stage: "Envasado", label: "Etiquetas usadas", value: "5", who: "OP4", when: "19/11 05:40" },
      { id: "etq_destruidas", stage: "Envasado", label: "Etiquetas destruidas", value: "1", who: "OP4", when: "19/11 05:40" },
      { id: "etq_devueltas", stage: "Envasado", label: "Etiquetas devueltas", value: "0", who: "OP4", when: "19/11 05:41" },
    ],
    errors: [
      { line: "cartucho", cat: "registro", sev: "mayor", title: "Casilla en blanco", why: "Falta el lote del cartucho filtrante. Sin él no se puede rastrear qué filtro se usó si aparecen partículas. Una casilla que no aplica se tacha con «N/A», firma y fecha; nunca se deja vacía.", rule: "ALCOA+: Completo." },
      { line: "min_rampa", cat: "spec", sev: "mayor", title: "Enfriamiento demasiado rápido", why: "95 min es menos que los ≥ 120 min de la hoja. Enfriar rápido da cristales finos que filtran mal y retienen impurezas. No hay desviación.", rule: "Parámetro crítico de proceso fuera de rango sin desviación." },
      { line: "vacio", cat: "registro", sev: "menor", title: "«OK» en lugar del valor", why: "La hoja pide la peor lectura del vacío en mbar. Escribir «OK» no deja comprobar nada: hay que anotar el número que marcó el PI-301.", rule: "ALCOA+: Exacto. Se registra el dato, no una opinión." },
      { line: "lod", cat: "hora", sev: "crítico", title: "Resultado anotado antes de que existiera", why: "El LOD está registrado a las 03:45, pero el LIMS dice que el resultado salió a las 04:00. O se copió de otro sitio o se anotó de memoria: hay que investigar la integridad del dato.", rule: "ALCOA+: Contemporáneo y Original. Sospecha de falsificación." },
      { line: "rendimiento", cat: "calculo", sev: "mayor", title: "Rendimiento mal calculado", why: "117,9 ÷ 138,5 × 100 = 85,1 %, no 91,2 %. Además lo verificó OP3 sin darse cuenta: la verificación no se hizo de verdad.", rule: "ALCOA+: Exacto. Los cálculos se verifican rehaciéndolos." },
      { line: "etq_devueltas", cat: "calculo", sev: "mayor", title: "Falta una etiqueta en la conciliación", why: "5 usadas + 1 destruida + 0 devueltas = 6, pero se emitieron 7. Una etiqueta perdida puede acabar en otro bidón: es motivo de investigación antes de liberar.", rule: "GMP: conciliación de material impreso (ICH Q7, 9.3)." },
    ],
  },
  {
    id: "a3",
    title: "Lote 26-0163",
    level: "Avanzado",
    intro: "Hoja completa con errores sutiles y alguna línea que parece mal pero está bien. Hay 6 errores. Cuidado con marcar de más: los falsos positivos restan.",
    refs: [
      "Etiqueta del R-101: LIMPIO · limpieza terminada 14/11 14:00 · tiempo limpio máximo 72 h. El lote empezó el 18/11 a las 08:00.",
      "Verificación de báscula: pesa patrón 50,00 kg, tolerancia ±0,10 kg.",
      "Registro de desviaciones: DV-26-044 (ΔP alta en F-301 el 18/11, cartucho cambiado y producto refiltrado). No hay más desviaciones abiertas para este lote.",
      "El IPC de HPLC tarda unos 20 min desde que se toma la muestra.",
    ],
    lines: [
      { id: "r101_estado", stage: "Previas", label: "Estado del R-101 según su etiqueta", spec: "Limpio y dentro de tiempo", value: "Limpio y dentro de tiempo", who: "OP1", when: "18/11 08:05" },
      { id: "bascula_verif", stage: "Previas", label: "Verificación de B-06 con pesa de 50,00 kg", spec: "49,90 – 50,10 kg", value: "50,14 kg", who: "OP1", when: "18/11 08:10" },
      { id: "peso_af", stage: "Dispensación", label: "4-aminofenol: peso (B-06)", spec: "99,5 – 100,5 kg", value: "100,0 kg", who: "OP1", when: "18/11 08:40", verif: "OP2" },
      { id: "o2", stage: "Carga", label: "Oxígeno tras inertizar (AI-101)", spec: "≤ 2,0 %", value: "1,8 % (escrito encima de otra cifra, no se lee la original)", who: "OP1", when: "18/11 09:50" },
      { id: "tmax_adicion", stage: "Reacción", label: "T máxima durante la adición (TI-101)", spec: "≤ 40 °C", value: "39,6 °C", who: "OP1", when: "18/11 11:20", okWhy: "39,6 °C está cerca del límite pero lo cumple. Estar cerca no es un error." },
      { id: "ipc_af", stage: "Reacción", label: "IPC: 4-aminofenol residual (HPLC)", spec: "≤ 0,50 % área", value: "0,22 % área", who: "—", when: "18/11 13:10" },
      { id: "dp_filtro", stage: "Filtración", label: "ΔP máxima en F-301 (PDI-301)", spec: "≤ 1,5 bar", value: "2,0 bar", who: "OP2", when: "18/11 14:20", note: "Ver DV-26-044", okWhy: "Fuera de rango, pero está tratado: tiene desviación abierta y referenciada en la hoja. Eso es lo correcto." },
      {
        id: "t_final", stage: "Cristalización", label: "Temperatura final", spec: "0 – 5 °C", value: "4 °C", who: "OP2", when: "18/11 17:30",
        struck: [{ value: "40", reason: "Error de escritura, falta la coma: el TI-102 marca 4,0", who: "OP2", when: "18/11 17:31" }],
        okWhy: "Corrección legible, con motivo, iniciales y hora.",
      },
      { id: "t_secado", stage: "Secado", label: "T de camisa del secadero (máxima)", spec: "55 – 60 °C", value: "62 °C", who: "OP3", when: "19/11 01:00" },
      { id: "lod", stage: "Secado", label: "IPC: pérdida por secado (LOD)", spec: "≤ 0,5 %", value: "0,41 %", who: "OP3", when: "19/11 05:10" },
      { id: "firma_secado", stage: "Secado", label: "Firma de fin de etapa de secado", value: "OP3", who: "OP3", when: "19/11 04:30" },
      { id: "rendimiento", stage: "Envasado", label: "Rendimiento (calculado)", spec: "80 – 95 %", value: "86,7 % (120,1 ÷ 138,5)", who: "OP3", when: "19/11 06:00", verif: "OP4", okWhy: "120,1 ÷ 138,5 × 100 = 86,7 %. Correcto y verificado por otra persona." },
    ],
    errors: [
      { line: "r101_estado", cat: "spec", sev: "crítico", title: "El reactor estaba caducado de limpieza", why: "Del 14/11 14:00 al 18/11 08:00 pasan 90 h, más que las 72 h permitidas. Había que relimpiar antes de usarlo, y se registró «dentro de tiempo» sin comprobarlo.", rule: "Estado de limpieza del equipo (ICH Q7, 5.2). Riesgo de contaminación cruzada." },
      { line: "bascula_verif", cat: "spec", sev: "mayor", title: "Báscula fuera de tolerancia y se usó igual", why: "50,14 kg se sale de 49,90–50,10. La báscula no se podía usar: todas las pesadas hechas con ella quedan en duda.", rule: "Equipos de medida verificados antes de usar." },
      { line: "o2", cat: "registro", sev: "mayor", title: "Dato escrito encima: ilegible", why: "No se puede saber qué ponía antes. Se tacha con una raya, se escribe al lado y se justifica. Escribir encima tapa el dato original.", rule: "ALCOA+: Legible y Original." },
      { line: "ipc_af", cat: "firma", sev: "mayor", title: "Dato sin firma", why: "Nadie ha firmado el resultado del IPC. Sin iniciales no se sabe quién lo anotó ni de dónde salió.", rule: "ALCOA+: Atribuible." },
      { line: "t_secado", cat: "spec", sev: "mayor", title: "Secado por encima del rango sin desviación", why: "62 °C supera 55–60 °C. El FX-101 se degrada con calor; hay que abrir desviación y analizar impurezas.", rule: "Parámetro de proceso fuera de rango sin tratar." },
      { line: "firma_secado", cat: "hora", sev: "mayor", title: "Etapa firmada antes de terminar", why: "Se firmó el fin del secado a las 04:30, pero el LOD que confirma el final se registró a las 05:10. No se puede dar por terminada una etapa antes de tener el resultado.", rule: "ALCOA+: Contemporáneo. La firma da fe de lo ya hecho." },
    ],
  },
];

export type AuditMark = { line: string; cat: AuditCategory };

export type AuditResult = {
  score: number;
  max: number;
  found: { err: AuditError; catOk: boolean }[];
  missed: AuditError[];
  wrong: { line: AuditLine; mark: AuditMark }[];
};

/** Puntuación: 2 por error encontrado con el tipo bien, 1 si solo aciertas la línea, −1 por falso positivo. */
export function gradeAudit(c: AuditCase, marks: AuditMark[]): AuditResult {
  const found: AuditResult["found"] = [];
  const missed: AuditError[] = [];
  for (const err of c.errors) {
    const m = marks.find((x) => x.line === err.line);
    if (m) found.push({ err, catOk: m.cat === err.cat });
    else missed.push(err);
  }
  const wrong = marks
    .filter((m) => !c.errors.some((e) => e.line === m.line))
    .map((mark) => ({ line: c.lines.find((l) => l.id === mark.line)!, mark }))
    .filter((x) => x.line);
  const raw = found.reduce((a, f) => a + (f.catOk ? 2 : 1), 0) - wrong.length;
  return { score: Math.max(0, raw), max: c.errors.length * 2, found, missed, wrong };
}
