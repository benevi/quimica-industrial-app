import type { Lesson } from "./types";

export const nivel20Alcoa: Lesson[] = [
  {
    slug: "alcoa-plus",
    level: 20,
    order: 1,
    title: "ALCOA+: datos en los que se puede confiar",
    titleEn: "ALCOA+ data integrity",
    minutes: 15,
    summary: "Los nueve principios de integridad de datos, con ejemplos de lo que se hace bien y mal en planta.",
    body: `
En GMP, **lo que no está escrito no se ha hecho**. Y lo escrito tiene que ser fiable. ALCOA+ es la lista de comprobación de un buen dato (*data integrity*).

| Principio | En inglés | Pregunta que responde |
|---|---|---|
| **A**tribuible | *Attributable* | ¿Quién lo hizo y cuándo? |
| **L**egible | *Legible* | ¿Se puede leer, hoy y dentro de 10 años? |
| **C**ontemporáneo | *Contemporaneous* | ¿Se registró en el momento? |
| **O**riginal | *Original* | ¿Es el primer registro, no una copia? |
| Ex**a**cto | *Accurate* | ¿Refleja exactamente lo que pasó? |
| **C**ompleto | *Complete* | ¿Está todo, sin huecos? |
| **C**onsistente | *Consistent* | ¿Fechas y horas siguen un orden lógico? |
| **D**uradero | *Enduring* | ¿Se conservará? |
| **D**isponible | *Available* | ¿Se puede consultar cuando haga falta? |

Las cinco primeras son "ALCOA"; las cuatro últimas son el "+". La sigla sale de las iniciales **en inglés** (*Attributable, Legible, Contemporaneous, Original, Accurate*); en español la última A es **exacto**.
`,
    plant: `
**Bien hecho**: lees 23,4 °C en el panel, lo anotas en ese momento en la hoja con bolígrafo indeleble, pones la hora del reloj de planta y tus iniciales.

**Mal hecho** (y por qué):
- Apuntarlo en el guante y pasarlo después: no es **original** ni **contemporáneo**.
- Escribir 23 °C "porque es lo mismo": no es **exacto**.
- Dejar la casilla de hora vacía: no es **completo**.
- Que firme un compañero por ti: no es **atribuible**, y es una falta grave.
`,
    batchRecord: `
- Cada casilla con dato, hora, iniciales o firma.
- Casillas no aplicables tachadas con "N/A", iniciales y fecha.
- Correcciones con una sola raya, dato original legible, valor nuevo, iniciales, fecha y motivo.
- Nunca típex, lápiz, tachones que oculten el dato ni hojas sueltas.
`,
    terms: [
      { es: "Integridad de datos", en: "Data integrity", def: "Grado en que los datos son completos, coherentes y exactos durante toda su vida." },
      { es: "Buenas prácticas de documentación", en: "Good Documentation Practices (GDP)", def: "Reglas para registrar y corregir datos en documentos GMP." },
      { es: "Registro de auditoría", en: "Audit trail", def: "Historial automático de quién creó o cambió un dato electrónico, cuándo y por qué." },
      { es: "Desviación", en: "Deviation", def: "Cualquier diferencia respecto a lo aprobado (procedimiento, parámetro, especificación)." },
      { es: "No aplica", en: "Not applicable (N/A)", def: "Indicación para una casilla que no corresponde rellenar." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Rellenas todas las temperaturas de la noche al final del turno, de memoria. ¿Qué principio incumples sobre todo?",
        options: ["Legible", "Contemporáneo", "Duradero", "Disponible"],
        answer: 1,
        explain: "Los datos deben registrarse en el momento en que se generan.",
      },
      {
        kind: "choice",
        q: "Te equivocas al escribir un peso. ¿Cómo lo corriges?",
        options: [
          "Con típex y escribo encima",
          "Lo tacho hasta que no se lea y escribo al lado",
          "Una raya que deje leer el dato, valor correcto, iniciales, fecha y motivo",
          "Arranco la hoja y la hago de nuevo",
        ],
        answer: 2,
        explain: "El dato original debe seguir siendo legible y la corrección atribuible y justificada.",
      },
      {
        kind: "choice",
        q: "Un compañero se ha ido y falta su firma en un paso que hizo él. ¿Qué haces?",
        options: [
          "Firmo yo con sus iniciales",
          "Lo dejo y lo comunico para que lo firme él o se gestione",
          "Pongo N/A",
          "Firmo yo con mis iniciales",
        ],
        answer: 1,
        explain: "Solo puede firmar quien hizo la tarea. Firmar por otro es falsificar un registro.",
      },
    ],
  },
];
