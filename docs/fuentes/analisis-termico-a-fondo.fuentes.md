# Fuentes: «Punto de fusión y análisis térmico a fondo» (analisis-termico-a-fondo)

Documentos descargados con curl y pasados a texto (copias en `scratchpad/src_termico/`):

- **ICH Q6A**, *Specifications: Test Procedures and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical Substances*: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (`q6a.txt`).
- **FDA, *ANDAs: Pharmaceutical Solid Polymorphism. Chemistry, Manufacturing, and Controls Information*** (julio de 2007): https://www.fda.gov/media/71375/download (`fdapoly.txt`).
- **ICH Q7**, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`).
- **WHO TRS 957, anexo 1**, *WHO good practices for pharmaceutical quality control laboratories* (2010) (`who957.txt`, copia de la descarga hecha para la lección de patrones).
- **FDA, *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*** (mayo de 2022, rev. 1) (`fdaoos.txt`, copia de la descarga hecha para la lección de Karl Fischer).
- **INSST, NTP 527** *Reacciones químicas exotérmicas (I): factores de riesgo y prevención* (`ntp527.txt`, copia de la descarga previa de www.insst.es).
- **INSST, NTP 302** *Reactividad e inestabilidad química: análisis termodinámico preliminar*: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/9-serie-ntp-numeros-296-a-330-ano-1994/ntp-302-reactividad-e-inestabilidad-quimica-analisis-termodinamico-preliminar (`ntp302.html` y `ntp302.txt`).
- Lecciones de la app leídas para no repetirlas y para enlazarlas: `src/content/nivel8.ts` («Punto de fusión y DSC»), `nivel3-polimorfismo.ts`, `nivel6-kf.ts` (partes de LOD y KF), `nivel12-secado.ts` (partes de LOD), `nivel2-termoquimica.ts` (aumento adiabático y calorimetría), `nivel1-materia.ts` (meseta y calor latente).

## Tabla de datos y afirmaciones

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Fundir: la vibración vence al orden del cristal; mientras funde la temperatura no sube (meseta); calor latente | Descripción de libro de texto, ya en «La materia a fondo» (`nivel1-materia.ts`, líneas 100-102) | Leído en la lección de la app; sin documento externo leído |
| Sólido puro funde en intervalo estrecho; impurezas bajan el inicio y ensanchan el intervalo; disolvente retenido actúa igual | Ya en «Punto de fusión y DSC» (`nivel8.ts`); fragmentos de buscador (artículo sobre pureza por DSC, PMC7520392) | Explicación cualitativa razonada; no se ha leído un documento oficial que lo explique. Sin cifras |
| Analogía de la sal en el hielo | Conocimiento general | Sin fuente leída; es una analogía, no un dato |
| Intervalo con inicio (primer líquido) y final (sin sólido) | Fragmento de buscador de USP 741 en drugfuture.com | Solo fragmento de buscador; se usa como definición general, sin cifras |
| Otra forma cristalina puede tener otro punto de fusión | FDA polimorfismo 2007, apartado III.A: «Polymorphic forms ... can have different chemical and physical properties, including melting point ...» | Leído en el documento |
| Q6A 3.3.1 a): punto/intervalo de fusión entre las propiedades fisicoquímicas; ejemplo «capillary melting point» | ICH Q6A, 3.3.1 a) | Leído |
| El punto de fusión no dice qué impureza ni cuánta | Razonamiento | Sin fuente; consecuencia de que es una sola medida física |
| Pasos del método del capilar (seca y molida, capilar cerrado, compactar, bloque o baño, rápido y luego lento, anotar inicio y final) | Descripción general; Q6A solo cita el capilar | Sin texto de farmacopea leído; no se dan cifras de velocidad ni de altura |
| Calentar rápido hace leer más alto (retraso térmico) | Razonamiento físico; un fragmento de buscador de Mettler Toledo dice lo mismo | Razonado; fragmento de buscador como apoyo; sin cifras |
| Aparatos automáticos detectan por transmisión de luz | Fabricantes, solo fragmentos de buscador (mt.com) | Fragmento de buscador; en el texto se atribuye «según los fabricantes» |
| Cuenta 1: 11,8 + 10 = 21,8, «unos 22 minutos» | Cálculo con valores de ejemplo declarados | Recalculado con python (`calc.py`) |
| WHO 957: materiales de referencia para calibrar o cualificar (11.2); verificación a intervalos (12.4); termómetros de temperaturas de fusión según la Farmacopea Internacional (nota 12.12); trazabilidad a MRC y SI (13.2); definición de material de referencia certificado | WHO TRS 957 anexo 1 | Leído |
| Q7 5.30, 5.34, 5.35 (calibrar, no usar si no cumple, investigar impacto desde la última calibración) | ICH Q7 | Leído |
| Cuenta 2: 135,6 − 135,0 = 0,6 °C con tolerancia ± 0,5 °C | Valores de ejemplo declarados; cálculo | Recalculado |
| DSC: crisol de muestra y de referencia, mide la diferencia de calor; línea base; pico de fusión | Descripción general de la técnica; NTP 527 solo dice que los calorímetros (DTA, DSC, ARC) dan la actividad exotérmica frente a la temperatura | Descripción no leída en un documento accesible; sin cifras |
| Endotérmico = fusión, desolvatación; exotérmico = cristalización, cambio a forma estable, descomposición | Descomposición exotérmica: NTP 527 y 302. Resto: conocimiento general, coherente con «Polimorfismo a fondo» | Parcialmente leído (descomposición); el resto, sin fuente leída |
| Convenio de dibujo endo/exo varía según el equipo | Conocimiento general | Sin fuente; se da como consejo de comprobar el eje |
| Temperatura de inicio extrapolada (tangente); en fusión limpia suele tomarse como temperatura de fusión | Fragmento de buscador (texto tipo norma sobre DSC) | Solo fragmento de buscador |
| Área = energía; mJ/mg = J/g | Análisis de unidades | Comprobado por cálculo |
| Cuenta 3: 420 / 3,50 = 120 J/g; quiz 287,0 / 2,80 = 102,5 J/g | Valores de ejemplo; cálculo | Recalculado |
| Indio como material de calibración del DSC; valores «unos 156,6 °C y 28,5 J/g» | Solo fragmentos de buscador: resumen de NIST SRM 1745 (punto de congelación del indio 156,5985 °C, punto fijo de la EIT-90), certificados NIST SRM 2232 y 2232a (entalpía 28,51 y 28,58 J/g), nota de aplicación de Mettler Toledo (28,45 J/g) | No leídos (nist.gov, tsapps.nist.gov, bipm.org y mt.com no responden desde esta sesión). En el texto se declaran como **valores de ejemplo** cercanos a los publicados, que no deben copiarse |
| Cuenta 4: 157,1 − 156,6 = 0,5 °C; 28,5 / 27,9 = 1,0215; 120 × 1,0215 = 122,6 J/g | Valores de ejemplo; cálculo | Recalculado |
| TGA: balanza en horno, masa frente a temperatura | Q6A y FDA citan la TGA entre las técnicas de análisis térmico; la descripción del equipo es general | Nombre de la técnica leído; descripción sin fuente leída |
| Solvato e hidrato: cantidad estequiométrica o no; hidrato si el disolvente es agua | FDA polimorfismo 2007, apartado II | Leído (en el texto final se usa en el sentido de «dentro de la red», ya explicado en la lección de polimorfismo) |
| Forma de la curva de TGA (bajada suave superficie, escalón red, caída alta descomposición) | Razonamiento coherente con «Polimorfismo a fondo» (disolvente de la torta frente al del solvato) | Sin fuente externa leída |
| Cuenta 5: (10,000 − 9,550) / 10,000 × 100 = 4,50 %; quiz (8,240 − 7,869) / 8,240 × 100 = 4,50 % (4,502) | Cálculo | Recalculado |
| Masas atómicas C 12,011, H 1,008, O 15,999; etanol 46,069 g/mol | Mismos valores redondeados que usa la app en «Polimorfismo a fondo» | Recalculado |
| Cuenta 6: 46,069 / 446,069 = 10,33 %; quiz 46,069 / 366,069 = 12,58 % | Cálculo con masas molares de producto ficticias | Recalculado |
| Fundir no cambia la masa | Conservación de la masa | Razonamiento |
| Tabla LOD frente a TGA; ninguna dice qué se va; KF preferido para agua | LOD: «El agua en la muestra a fondo» y «El secado a fondo» de la app; Q6A (ya citado en la app) | Leído en la app; tabla razonada |
| Un solvato puede pasar la LOD con su disolvente dentro | Razonamiento a partir de «Polimorfismo a fondo» (el disolvente del solvato solo sale al romperse la red) | Sin fuente externa |
| Q6A 3.3.1 c): técnicas para formas (punto de fusión con hot-stage, IR sólido, XRPD, DSC, TGA, DTA, Raman, microscopía, RMN sólido) | ICH Q6A | Leído |
| FDA: XRPD puede dar prueba inequívoca de polimorfismo; análisis térmico (DSC, TGA, hot-stage) ayuda a caracterizar | FDA polimorfismo 2007, III.B | Leído |
| Dos fusiones o fusión más exotérmico como pista de varias formas | Conocimiento general | Sin fuente leída; presentado como «pista» que interpreta el laboratorio |
| NTP 527: DSC entre los calorímetros; objetivo, límite de temperatura seguro; margen entre temperatura de descontrol y de operación; medio calefactor por debajo de la temperatura de descomposición | NTP 527 | Leído |
| NTP 302: la medida calorimétrica no es tan fácil y la extrapolación puede ser compleja | NTP 302 | Leído |
| Los límites llegan a la hoja como temperatura máxima de camisa o de producto | Razonamiento; formulado como posibilidad en la hoja de producción («puede venir») | Sin fuente específica |
| Cuenta 7: 400 / 1,7 = 235 °C; quiz 540 / 1,8 = 300 °C (ΔTad = calor / cp, por gramo) | Fórmula ya en «Calor de reacción a fondo»; valores de ejemplo | Recalculado |
| Q7 11.15 (investigar OOS según procedimiento); 8.41 (no mezclar lotes OOS para cumplir); 14.10 (cuarentena); 14.20 (reprocesar); 14.21 (continuar tras IPC incompleto no es reprocesar); 14.30 (investigar antes de retrabajar) | ICH Q7 | Leído |
| FDA OOS: fase I evaluación del laboratorio; fase II investigación completa con revisión de producción y muestreo | FDA OOS 2022, secciones III y IV | Leído |
| Ejemplo de planta (KT-77, C-701, SP-702), especificación 151–154 °C y resultados | Valores de ejemplo declarados | Inventados y declarados |

## Lo que quise incluir y dejé fuera

- Velocidad de calentamiento, altura de la columna de polvo y temperatura de inicio del tramo lento del método del capilar de la Ph. Eur. 2.2.14, la USP 741 o la Farmacopea Internacional: textos no accesibles (de pago o en hosts que no responden). Solo se vio en el buscador «1 °C/min» y «3 mm» de una edición antigua de la USP.
- Lista de sustancias de referencia de punto de fusión y sus valores (por ejemplo las de las farmacopeas o las que usan los fabricantes): solo fragmentos de buscador.
- Valores certificados del indio (temperatura y entalpía) y su incertidumbre: solo fragmentos; se usan valores de ejemplo declarados.
- Ecuación de Van't Hoff para la pureza por DSC y sus límites de aplicación: solo fragmento de buscador; además el brief pedía no complicar con fórmulas.
- Transición vítrea de los amorfos (escalón en la línea base del DSC): sin fuente leída; se quitó la fila de la tabla.
- Reglas empíricas de margen de seguridad entre el inicio de la exotermia del DSC y la temperatura de proceso (por ejemplo «regla de los 100 K»): no verificadas, no se mencionan.
- Detalles de la Farmacopea Argentina (capítulo de análisis térmico, en argentina.gob.ar), que podría haber dado métodos gratuitos: el host no responde desde esta sesión.
- Atmósfera de la TGA (nitrógeno): sin fuente leída, se quitó.
