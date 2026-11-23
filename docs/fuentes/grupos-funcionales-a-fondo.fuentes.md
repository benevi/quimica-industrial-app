# Fuentes de «Grupos funcionales a fondo: cómo se comporta cada familia de compuestos en planta» (`grupos-funcionales-a-fondo`)

Copias de trabajo en `src_grupos/dl/` (HTML y texto extraído). Cálculos en `src_grupos/calc.py`.

## Documentos leídos en esta sesión

- **NTP 478**: INSST, «Prevención del riesgo en el laboratorio químico: reactividad de los productos químicos (I)» (1998), ficha HTML con texto íntegro. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-478-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-i-
- **NTP 479**: INSST, «… reactividad de los productos químicos (II)» (1998), ficha HTML con texto íntegro. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-479-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-ii-
- **NTP 237**: INSST, «Reacciones químicas peligrosas con el agua» (1989/1990), ficha HTML con texto íntegro. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/7-serie-ntp-numeros-226-a-260-ano-1990/ntp-237-reacciones-quimicas-peligrosas-con-el-agua
- **NTP 725**: INSST, «Seguridad en el laboratorio: almacenamiento de productos químicos» (2006), ficha HTML. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/21-serie-ntp-numeros-716-a-750-ano-2006/ntp-725-seguridad-en-el-laboratorio-almacenamiento-de-productos-quimicos
- **NTP 1229**: INSST, «Reacciones químicas peligrosas con el agua» (2026), ficha HTML (texto; sus tablas son imágenes y no se leyeron). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/39-serie-ntp-numeros-1229-y-ss-ano-2026/ntp-1229-reacciones-quimicas-peligrosas-con-el-agua-2026 (el PDF directo devolvió HTML, no PDF).
- **CLP**: Reglamento (CE) 1272/2008, texto original en el DOUE L 353 publicado por el BOE, https://www.boe.es/doue/2008/353/L00001-01355.pdf. Texto extraído en una sesión anterior (copia completa de `src_redox/dl/clp.txt`, copiada a `src_grupos/dl/clp.txt`) y consultado en esta: anexo I tabla 2.6.1; anexo II 1.1.1–1.1.5 y 1.2.1–1.2.4; anexo III (textos de frases H); anexo VI tabla 3.1. Nota: la copia de `src_acidos/dl/clp.txt` está incompleta (no llega a la tabla 3.1); no se usó.
- **ICH Q3C(R8)** (Step 4, 22 de abril de 2021), copia de texto en `scratchpad/dl/q3c8.txt` descargada en una sesión anterior de database.ich.org; tablas 1–3 releídas en esta.
- **Repo**: `src/content/fds.ts` (fichas `metanol`, `tolueno`), `src/content/nivel3.ts` (`carbono-y-formulas`, `grupos-funcionales`, `disolventes-organicos`), `src/content/nivel2.ts` (`reacciones-en-api`), `src/content/nivel1-acidos.ts`, `src/content/nivel2-redox.ts`, `src/content/nivel1-enlaces.ts`, `src/content/nivel1-mol.ts`, `src/content/nivel15-emergencias.ts`, `src/content/nivel0.ts` (densidad del diclorometano).

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Criterios CLP de líquido inflamable: cat. 1 PI < 23 °C y PIE ≤ 35 °C; cat. 2 PI < 23 °C y PIE > 35 °C; cat. 3 PI 23–60 °C | CLP, anexo I, tabla 2.6.1 | Leído |
| Textos de H224, H225, H226, H302, H304, H312, H314, H319, H332, H335, H336, H341, H351, H360D | CLP, anexo III / anexo VI parte 1 | Leído |
| Textos de EUH001, EUH014 (con el cloruro de acetilo como ejemplo), EUH018 (cita los hidrocarburos halogenados), EUH019, EUH029, EUH032 (con la azida sódica como ejemplo), EUH066 | CLP, anexo II 1.1 y 1.2 | Leído |
| Polaridad, puentes de hidrógeno, puntos de ebullición de disolventes | Lección `enlaces-a-fondo` | Repo (remisión, sin repetir) |
| Tolueno 0,87 kg/L, poco conductor, se carga de estática; H304: no provocar vómito; H361d | `fds.ts`, ficha `tolueno`; CLP anexo VI 601-021-00-3 | Repo + leído |
| Heptano bp 98 °C, tolueno 111 °C, DCM 40, acetona 56, metanol 65, THF 66, acetato de etilo 77, etanol 78, IPA 82; puntos de inflamación (metanol 11, etanol 13, IPA 12, acetona −20, acetato de etilo −4, THF −14); miscibilidad con agua | Lección `disolventes-organicos` (tabla «valores de referencia redondeados») | Repo |
| Cuanto más larga la cadena, más alto hierve y peor se mezcla con agua | Lección `enlaces-a-fondo` | Repo (tendencia cualitativa) |
| Diclorometano 1,33 kg/L, fase inferior | `nivel0.ts`, `nivel1-enlaces.ts`, `nivel12-separacion.ts` | Repo |
| Alcanos poco reactivos; aromático estable por resonancia; enlaces dobles (π) más frágiles y reactivos | NTP 478 (resonancia, enlaces π); poca reactividad de alcanos: libro de texto | Leído / libro de texto |
| Estireno y otros monómeros pueden polimerizar rápidamente y romper frascos | NTP 479, «Reacciones de polimerización» | Leído |
| Hidrocarburos incompatibles con flúor, cloro, bromo, ácido crómico, peróxido sódico | NTP 479, tabla 4 | Leído |
| Heptano: H225, H304, H315, H336, H400, H410; hexano H225; benceno H350, H340 | CLP, anexo VI 601-008-00-2, 601-037-00-0, 601-020-00-8 | Leído |
| Benceno clase 1; hexano 290 ppm; heptano clase 3 | ICH Q3C(R8), tablas 1–3 | Leído |
| C–F > C–Cl > C–Br > C–I en solidez del enlace con el carbono | NTP 478 | Leído |
| Metales alcalinos y alcalinotérreos incompatibles con hidrocarburos clorados | NTP 479, tabla 4 | Leído |
| Diclorometano (2008): solo Carc. 2, H351; cloroformo: H351, H302, H373, H315; ninguno con frase de inflamable | CLP, anexo VI 602-004-00-3 y 602-006-00-4 | Leído (columnas desalineadas en el texto extraído; se tomaron las indicaciones de la columna de etiquetado) |
| DCM 600 ppm, cloroformo 60 ppm (clase 2) | ICH Q3C(R8), tabla 2 | Leído |
| Halogenados en contenedor aparte | Lección `emergencias-y-residuos-a-fondo` (LER 07 05 03*) | Repo |
| Alcoholes con metales alcalinos desprenden H₂ | `fds.ts`, ficha `metanol`, sección 10 | Repo |
| H₂O₂ incompatible con alcohol etílico y metílico y acetato de etilo; ácido crómico con alcoholes; permanganato con alcoholes y acetona | NTP 479, tabla 4 | Leído |
| Oxidación alcohol, aldehído, ácido | Lección `redox-a-fondo` | Repo (remisión) |
| Metanol H225, H301, H311, H331, H370; etanol H225; IPA H225, H319, H336 | `fds.ts`; CLP anexo VI 603-001-00-X, 603-002-00-5, 603-117-00-0 | Repo + leído |
| Metanol 3000 ppm clase 2; etanol y 2-propanol clase 3 | ICH Q3C(R8) | Leído |
| Éteres sin O–H no dan protones; disolvente de reactivos de Grignard | Libro de texto; Grignard en lección `reacciones-en-api` | Libro de texto |
| Éter dietílico H224 implica PIE ≤ 35 °C | Deducción a partir de CLP tabla 2.6.1 y anexo VI 603-022-00-4 | Razonamiento sobre texto leído |
| THF H225, H319, H335, EUH019; éter dietílico H224, H302, H336, EUH019, EUH066; MTBE H225, H315, sin EUH019 | CLP anexo VI 603-025-00-0, 603-022-00-4, 603-181-00-X | Leído |
| THF miscible con agua | Lección `enlaces-a-fondo` | Repo |
| Estabilizante eliminado por destilación o extracción; precaución con recipientes cerrados largo tiempo; éteres fácilmente peroxidables; N-alquilamidas peroxidables | NTP 479, «Formación de peróxidos», tabla 6 y «Reacciones de descomposición» | Leído |
| THF 720 ppm; MTBE y éter etílico clase 3 | ICH Q3C(R8) | Leído |
| Carbonilo; aldehído en extremo (-al), cetona interna (-ona); aldehídos se oxidan con facilidad a ácido | Libro de texto; lección `grupos-funcionales` | Libro de texto |
| Acetona usada para aclarar y ayudar a secar | Razonamiento a partir de miscibilidad y volatilidad leídas en el repo | Deducción propia; el uso concreto se remite al procedimiento validado |
| Acetona incompatible con ácido nítrico concentrado y mezclas con sulfúrico | NTP 479, tabla 4 | Leído |
| Acetona H225, H319, H336, EUH066; clase 3 | CLP anexo VI 606-001-00-8; ICH Q3C | Leído |
| Formaldehído (2008): H351, H331, H311, H301, H314, H317 | CLP anexo VI 605-001-00-5 | Leído |
| Ácido acético pKa 4,76; con carbonatos/bicarbonato desprende CO₂; ácido carboxílico va al agua como sal | Lección `acidos-bases-a-fondo` | Repo |
| Ácido acético incompatible con ácido crómico, nítrico, compuestos hidroxilo, etilenglicol, perclórico, peróxidos y permanganatos | NTP 479, tabla 4 | Leído |
| Ácido acético H226, H314; Skin Corr. 1A para C ≥ 90 %; clase 3 | CLP anexo VI 607-002-00-6; ICH Q3C | Leído |
| El acético es el ácido del vinagre; ésteres de olor afrutado; aminas olor a pescado | Libro de texto | Conocimiento general, no leído en fuente oficial |
| Hidrólisis ácida en equilibrio; saponificación completa porque el ácido queda como sal | Libro de texto; lección `equilibrio-quimico` | Libro de texto |
| Saponificación ajustada (4 C, 9 H, 3 O, 1 Na a cada lado) | Cálculo | Recalculado |
| Masas 88, 40, 82, 46, 78,5, 60, 36,5, 18 g/mol con masas redondeadas (C 12, H 1, O 16, Na 23, Cl 35,5) | Cálculo; masas estándar IUPAC no leídas en esta sesión | Recalculado (con IUPAC: acetato de etilo 88,106; cloruro de acetilo 78,495) |
| 440 kg: 5 kmol, 200 kg NaOH, 400 kg al 50 %, 410 kg acetato de sodio, 230 kg etanol, balance 640 = 640 | Cálculo, valor de ejemplo declarado | Recalculado |
| Acetato de etilo H225, H319, H336, EUH066; clase 3 | CLP anexo VI 607-022-00-5; ICH Q3C | Leído |
| Lavado básico de acetato de etilo consume sosa, más en caliente y con tiempo | Deducción de la saponificación (libro de texto) | Razonamiento, sin cifra |
| Aminas básicas; clorhidratos; neutralización con calor; TEA atrapa HCl como sólido | Lecciones `grupos-funcionales` y `acidos-bases-a-fondo` | Repo |
| Anilina incompatible con ácido nítrico y H₂O₂; nitritos incompatibles con aminas | NTP 479, tabla 4 | Leído |
| Trietilamina H225, H332, H312, H302, H314 (Skin Corr. 1A); clase 3 | CLP anexo VI 612-004-00-5; ICH Q3C | Leído |
| Anilina H351, H341, H331, H311, H301, H372, H318, H317, H400 | CLP anexo VI 612-008-00-7 | Leído |
| Enlace amida muy estable, hidrólisis con ácido o base fuerte y calor | Libro de texto | Libro de texto |
| Paracetamol C₈H₉NO₂, 151 g/mol | Lección `mol-a-fondo`; recalculado | Repo + cálculo |
| Paracetamol = N-(4-hidroxifenil)acetamida; fenol + amida; ruta clásica por acetilación del 4-aminofenol con anhídrido acético | Libro de texto | No leído en fuente oficial; declarado en el texto como «ruta clásica de libro de texto» |
| DMF Repr. 1B H360D, H332, H312, H319; sin EUH019 (2008); 880 ppm clase 2 | CLP anexo VI 616-001-00-X; ICH Q3C | Leído |
| Acetonitrilo H225, H332, H312, H302, H319; 410 ppm | CLP anexo VI 608-001-00-3; ICH Q3C | Leído |
| «Puede dar una idea bastante aproximada de su reactividad»; lista de grupos inestables (nitrados, polinitrados, nitrosados, N-nitrosados, azido, diazo, diazonio, peróxidos, perácidos, epóxidos, acetilénicos); balance de oxígeno; golpes y rozaduras; cristalizadas más sensibles que en solución | NTP 478, tabla 3 y apartados correspondientes | Leído |
| Sales de diazonio se descomponen en almacenamiento prolongado; azidas incompatibles con ácidos | NTP 479 | Leído |
| Nitrometano H226, H302 | CLP anexo VI 609-036-00-7 | Leído (en la tabla resumen solo como ejemplo de grupo nitro) |
| Haluros de ácido y anhídridos reaccionan fuertemente con agua | NTP 479, tabla 1 | Leído |
| CH₃COCl + H₂O da HCl + CH₃COOH | NTP 237, «Haluros» | Leído |
| (CH₃CO)₂O + H₂O da 2 CH₃COOH | Libro de texto | Ajuste comprobado |
| Reacciones con humedad ambiental y la del cuerpo (sudor) | NTP 1229, apartado de peligros | Leído |
| 157 kg cloruro de acetilo: 2 kmol, 73 kg HCl, 120 kg ácido acético, 36 kg agua, balance 193 | Cálculo, valor de ejemplo | Recalculado |
| Cloruro de acetilo H225, H314, EUH014; anhídrido acético H226, H332, H302, H314 | CLP anexo VI 607-011-00-5, 607-008-00-9 | Leído |
| Anhídrido acético incompatible con H₂O₂ y ácido perclórico | NTP 479, tabla 4 | Leído |
| Cloruro de tionilo EUH014 y EUH029; con poca agua libera SO₂ | CLP anexo VI 016-015-00-0; NTP 237 | Leído |
| Cloruro de tionilo se usa para fabricar cloruros de ácido | Libro de texto | No leído en fuente oficial |
| Incompatibles se almacenan separadamente | NTP 479, «Incompatibilidad» | Leído |
| Agrupar por riesgo respetando incompatibilidades; tabla 4: explosivos aparte de todo, comburentes no con inflamables | NTP 725, «Criterios generales» y tabla 4 | Leído |
| NTP 725 basada en RD 379/2001; hoy RD 656/2017 | NTP 725 (normativa citada); RD 656/2017 citado en NTP 1229 y en la lección `emergencias-y-residuos-a-fondo` | Leído / repo |
| Ácidos fuertes con bases fuertes | NTP 479, tabla 3 | Leído |
| Lo que reacciona con agua, separado de inflamables (por el agua de extinción) | NTP 237, introducción | Leído |
| Clases ICH Q3C y límite general de clase 3 (5000 ppm) | ICH Q3C(R8); lección `disolventes-organicos` | Leído / repo |
| Nomenclatura (-ano, -eno, -ol, -al, -ona, ácido -oico, -ato de -ilo, -amina, -amida, -nitrilo, cloruro de -ilo) | Libro de texto (nomenclatura IUPAC) | No leído en esta sesión (IUPAC no accesible) |
| Plant y quiz: R-308, R-310, GF-21 | Ficticios | Valor de ejemplo declarado |
| Quiz: 264/88 = 3 kmol, × 82 = 246 kg; 176/88 = 2 kmol, × 40 = 80 kg; 235,5/78,5 = 3 kmol | Cálculo | Recalculado |

## Solo en fragmentos de buscador
- Nada se usó como dato. La búsqueda sirvió solo para localizar las URL de NTP 478, 237, 725 y 1229, que después se leyeron.

## Dejado fuera por no poder verificarlo
- Puntos de ebullición de una serie de alcanos (hexano, octano) y de la trietilamina, DMF, MTBE, éter dietílico, anhídrido acético y cloruro de acetilo: no están en la app ni en una fuente accesible; se dan tendencias cualitativas.
- Miscibilidad del MTBE con agua (no leída en fuente accesible; se quitó del texto).
- Densidad del cloroformo y valores de solubilidad en agua concretos.
- Clasificaciones CLP posteriores a 2008 (adaptaciones al progreso técnico): por ejemplo, posibles cambios en diclorometano, cloroformo o formaldehído. El texto avisa de que la tabla de 2008 se ha actualizado y manda la FDS.
- Datos sobre nitrosaminas como impurezas mutagénicas (ICH M7): no se leyó la guía en esta sesión.
- Límites de inflamabilidad y temperaturas de autoignición de los disolventes.
- Tiempos de almacenamiento o frecuencias de ensayo de peróxidos.
