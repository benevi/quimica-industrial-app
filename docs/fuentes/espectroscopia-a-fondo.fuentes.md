# Fuentes: espectroscopia-a-fondo

Documentos en `src_espectro/` (leídos con `pdftotext -layout` o como HTML):

- FDA, ORA Lab Manual Vol. IV, Section 3, *Drug Chemistry Analysis* (IV-03), MAN-000056 rev. 03, 07 oct 2022: https://www.fda.gov/media/73554/download?attachment (`drugchem.txt`). Apartados 8.1.1, 8.4.2 (UV-Vis), 8.4.3 (IR medio), ejercicios de disolución y respuestas 6.4.2.C y 6.4.3.C, anexo de muestras de formación.
- FDA, ORA Lab Manual Vol. II, ORA-LAB.5.5 *Equipment*, rev. 02, 06/06/2019: https://www.fda.gov/media/73935/download?attachment (`m73935.txt`). Tabla del anexo A.
- Índice del manual: https://www.fda.gov/science-research/field-science-and-laboratories/field-science-laboratory-manual (`ora.html`).
- WHO TRS 957 (2010), anexo 1, *Good practices for pharmaceutical quality control laboratories* (`who957.txt`, copia de la descarga ya hecha en `src_kf/`): 11.7, 12.11-12.12 con su nota, referencias 19-21 y tabla de equipos.
- ICH Q6A: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (`q6a.txt`): 3.3.1 b) y c) del principio activo, b) del producto, 3.3.1 c) polimorfos y d) quirales.
- ICH Q2(R2), versión final adoptada el 1 nov 2023 (`q2r2.txt`): 3.1 especificidad, 3.1.2.1 identificación, 3.2.2.1 respuesta lineal.
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`): 7.20, 7.30, 7.32, 7.44, 11.15, 12.74.
- RD 2032/2009, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (`boe2032.html`): definiciones del metro y del kilogramo; prefijo nano.
- Archivos de la app: `src/content/nivel7.ts` (lecciones `espectroscopia-uv-vis` y `espectroscopia-infrarrojo`, leídas enteras para no repetir), `src/content/nivel3-polimorfismo.ts` y `src/content/nivel3-quiralidad.ts` (para remitir).
- Cálculos: `src_espectro/calc.py` (python 3 con numpy).

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| c = 299 792 458 m/s, valor exacto | RD 2032/2009, definición del metro | Leído en el BOE |
| h = 6,626 070 15 × 10⁻³⁴ J·s, exacto | RD 2032/2009, definición del kilogramo | Leído en el BOE |
| 1 nm = 10⁻⁹ m (prefijo nano) | RD 2032/2009, tabla de prefijos | Leído |
| ν = c/λ, E = h·ν; onda corta, más energía | Física de libro de texto | Fórmulas estándar; aplicadas con python |
| 254 nm: 1,18 × 10¹⁵ Hz y 7,82 × 10⁻¹⁹ J | Cálculo | Recalculado: 1,180 × 10¹⁵; 7,821 × 10⁻¹⁹ |
| UV y visible mueven electrones; IR hace vibrar enlaces | Química de libro de texto | Idea general sin cifras |
| La espectrofotometría se hace en las tres zonas más accesibles: UV, visible e IR | FDA IV-03, 8.1.1 | Leído |
| Límites UV 200-400 nm, visible 400-780 nm, IR medio 2500-25 000 nm | Valores aproximados de libro de texto, declarados así en el texto; IR coherente con 4000-400 cm⁻¹ de la lección `espectroscopia-infrarrojo` | No leídos en fuente oficial; los 2500 y 25 000 nm recalculados desde 4000 y 400 cm⁻¹ |
| ṽ (cm⁻¹) = 10⁷ / λ (nm) | Definición (1 cm = 10⁷ nm) | Recalculado |
| 1700 cm⁻¹ = 5882 nm = 5,88 µm; 3000 nm = 3333 cm⁻¹ | Cálculo | Recalculado: 5882,4 y 3333,3 |
| Fotón de 1700 cm⁻¹: 3,38 × 10⁻²⁰ J; unas 23 veces menos que el de 254 nm | Cálculo | Recalculado: 3,377 × 10⁻²⁰; cociente 23,16 |
| A = log (1/T) = −log T | FDA IV-03, respuesta 6.4.2.C.1 (cita USP <857>) | Leído |
| T = 0,50 da A = 0,301; T = 0,10 da A = 1,000; A = 2 es 1 %; A = 0,500 da T = 31,6 % | Cálculo | Recalculado: 0,3010; 1,0000; 0,0100; 0,3162 |
| A = a·b·c; definiciones de absortividad y absortividad molar | FDA IV-03, 6.4.2.C.1 | Leído (la absortividad a secas se quitó del texto final por longitud) |
| Cubeta típica de 1 cm | FDA IV-03, 6.4.2.C.2 | Leído |
| Unos 10 µg/mL dan A de 0,2 a 0,8 en UV o visible para muchas sustancias | FDA IV-03, 6.4.2.C.2, que cita la USP <857> | Leído en el documento de la FDA (no en la USP) |
| Por qué es lineal; límites a concentración alta y con luz no monocromática | Química de libro de texto | Idea general sin cifras; el temario de la FDA (8.4.2 A.1) incluye «linearity» y «limitations» |
| ε = 15 000 L/(mol·cm), A = 0,450, M = 250 g/mol | Valores de ejemplo declarados | Resultado recalculado: 3,00 × 10⁻⁵ mol/L; 7,50 mg/L |
| Patrón 2,00 × 10⁻⁵ mol/L, A = 0,620: ε = 31 000 | Valor de ejemplo; cálculo | Recalculado |
| Linealidad: mínimo cinco concentraciones; mínimos cuadrados; gráfico, coeficiente de correlación o determinación, ordenada y pendiente; residuos | ICH Q2(R2), 3.2.2.1 | Leído |
| Extrapolar fuera del intervalo solo si se justifica | ICH Q2(R2), 3.2.1 («extrapolation ... should be justified») | Leído |
| Cinco patrones 2-10 mg/L con A 0,105 a 0,521 | Valores de ejemplo declarados | — |
| Medias 6,0 y 0,312; Sxy 2,072; Sxx 40,0; m = 0,0518; n = 0,0012; R² = 0,9998; residuo mayor −0,0036 | Cálculo (numpy.polyfit) | Recalculado: m 0,051800; n 0,001200; R² 0,999810; residuos 0,0002, −0,0004, 0,0020, −0,0036, 0,0018 |
| Muestra 35,0 mg en 100 mL, 2,00 a 100 mL: 7,00 mg/L; A = 0,362: 6,965 mg/L; riqueza 99,5 % | Valores de ejemplo; cálculo | Recalculado: 6,9653 mg/L; 99,50 % |
| Fuentes de deuterio y tungsteno-halógeno; monocromador; cubetas de sílice, vidrio y plástico; detector fotomultiplicador, diodo y matriz de diodos | FDA IV-03, 8.4.2 A.2 | Leído |
| Deuterio para el UV y tungsteno para el visible; vidrio y plástico absorben el UV, cuarzo no; huellas en la cubeta | Libro de texto (declarado en el texto); que el vidrio absorbe el UV también está en la lección `espectroscopia-uv-vis` | No leído en fuente oficial; sin cifras |
| Muestra y patrón medidos frente a su blanco, uno inmediatamente detrás del otro («concomitantly») | FDA IV-03, 6.4.2.C.4 (cita USP <857>) | Leído |
| Lista de equipos con espectrofotómetro UV-Vis de un haz y de doble haz, e IR con prensa de pastillas | WHO TRS 957 an. 1, tabla de equipos | Leído |
| Cómo funciona el doble haz | Libro de texto | Idea general |
| Equipo con resultados sospechosos o fuera de límites: retirar, etiquetar, no usar hasta reparar y recualificar; remisión a la Farmacopea Internacional y guías OMCL de UV-Vis e IR | WHO TRS 957 an. 1, 12.11, 12.12 y referencias 19-20 | Leído (las guías OMCL no se pudieron leer) |
| Filtro de óxido de holmio para longitud de onda; dicromato de potasio para absorbancia; linealidad de 0,1 a 2,0 AU | FDA IV-03, 8.4.2 B.1-3 | Leído |
| Lectura del blanco cada día de uso; longitud de onda en la instalación y una vez al año | FDA ORA-LAB.5.5, anexo A | Leído |
| Más de ±1 nm respecto a la longitud de onda de la monografía puede indicar recalibrar | FDA IV-03, 6.4.2.C.5 (cita USP <857>) | Leído |
| Luz parásita: qué es y que baja la absorbancia leída, sobre todo alta; las farmacopeas tienen un ensayo | Libro de texto; que la USP adaptó su ensayo de luz parásita solo se vio en un fragmento de buscador (libro blanco de un fabricante, mt.com) | Fragmento de buscador; sin cifras en el texto |
| Riqueza por UV como ejercicio; disolución de comprimidos con lectura UV | FDA IV-03, anexo de muestras (Assay - UV) y 8.4.x B.2 (Dissolution ... UV determination) | Leído |
| Limpieza: métodos validados con sensibilidad para detectar el residuo al límite | ICH Q7, 12.74 | Leído; que el UV sea una opción es idea general, declarada «como idea» |
| Enlaces como muelles; frecuencia según rigidez del enlace y masa de los átomos | Física de libro de texto (oscilador armónico) | Idea general sin cifras |
| Espectro IR: transmitancia frente a número de onda, 4000-400 cm⁻¹ | Libro de texto; el intervalo coincide con la lección `espectroscopia-infrarrojo` | No leído en fuente oficial |
| Tabla de bandas O–H 3200-3600, N–H 3300-3500, C–H 2850-3100, C≡N 2210-2260, C=O 1650-1750 cm⁻¹ | Valores aproximados de libro de texto, declarados así en el texto | No leídos en fuente oficial; las bandas del poliestireno de la FDA (3026,27 y 2849,9 cm⁻¹) caen dentro del intervalo C–H |
| Comprobación con película de poliestireno: 3026,27; 2849,9; 1601,0; 1027,7; 906,5 cm⁻¹, ±2 cm⁻¹ | FDA IV-03, 8.4.3 B.1, figura 1 | Leído |
| Región de la huella dactilar por debajo de unos 1500 cm⁻¹ | Lección `espectroscopia-infrarrojo` de la app; libro de texto | No leído en fuente oficial |
| FTIR: interferómetro en vez de monocromador, interferograma intensidad frente a tiempo, transformada de Fourier; más luz (sin rendijas), todas las longitudes de onda a la vez, más rápido | FDA IV-03, 6.4.3.C.1 y C.3 | Leído |
| ATR: muestra sólida sobre cristal de diamante u otro; pastilla de KBr con polvo seco molido y prensado | FDA IV-03, 6.4.3.C.4 | Leído |
| Cómo funciona el ATR (rebotes en el cristal que tocan la muestra) | Libro de texto | Idea general sin cifras |
| Uso de la sustancia de referencia como «infrared reference substance» | WHO TRS 957 an. 1, 11.7 | Leído (contexto, no citado literalmente) |
| Identificación: discriminar compuestos de estructura parecida; específica, «e.g., infrared spectroscopy»; un solo tiempo de retención no es específico; dos cromatografías distintas o HPLC/UV diodos, HPLC/MS, GC/MS generalmente aceptables | ICH Q6A, 3.3.1 b) | Leído |
| Validación de identificación: positivos comparables al material de referencia, negativos sin el analito y con materiales de estructura parecida | ICH Q2(R2), 3.1.2.1 | Leído |
| IR del sólido entre las técnicas para polimorfos | ICH Q6A, 3.3.1 c) | Leído |
| Enantiómeros: propiedades idénticas fuera de ambiente quiral | Lección `quiralidad-a-fondo` de la app (cita a EMA y FDA) | Tomado de la app; que sus espectros IR en disolución sean iguales es consecuencia de libro de texto |
| Un solo enantiómero: la identidad debe distinguir ambos enantiómeros y el racemato; puede hacer falta identificación específica o ensayo quiral | ICH Q6A, 3.3.1 b) y d) | Leído |
| Al menos un ensayo de identidad por lote de material que entra (excepciones 7.32); cuarentena hasta muestrear, analizar y liberar | ICH Q7, 7.30, 7.32, 7.20 | Leído |
| OOS se investiga; rechazados identificados y controlados en cuarentena | ICH Q7, 11.15 y 7.44 | Leído |
| Equipos, productos y códigos (RX-22, KT-40, R-207, IR-02) | Valores de ejemplo, ficticios | — |
| Quiz: 1650 cm⁻¹ = 6061 nm; 2900 nm = 3448 cm⁻¹; T 0,25 da A 0,602; A 0,700 da T 19,95 %; ε 12 500, A 0,600 da 48 µmol/L; recta con A 0,260 da 4,996 ≈ 5 mg/L | Cálculo | Recalculado con python |

## Lo que quedó fuera por no poder verificarlo
- Las tolerancias y longitudes de onda concretas del holmio, los valores del dicromato y el ensayo de luz parásita (cloruro de potasio, 198 nm, etc.): solo en farmacopeas de pago, guías OMCL (edqm.eu, no accesible) o fragmentos de fabricantes.
- La Farmacopea Internacional de la OMS (capítulos de espectrofotometría): no se encontró en un host accesible.
- Cifras de profundidad de penetración del ATR y del límite de transparencia del vidrio (unos 300-350 nm): sin fuente leída; en el texto solo se dice que el vidrio absorbe el UV.
- Criterios numéricos de concordancia de espectros IR (por ejemplo, índices de correlación de bibliotecas): dependen del método y no se encontró fuente gratuita.
- Diferencias de IR entre un racemato sólido y un enantiómero puro: no se incluyó por no tener fuente.
- Raman: no se repite, ya está en `espectroscopia-infrarrojo`.
