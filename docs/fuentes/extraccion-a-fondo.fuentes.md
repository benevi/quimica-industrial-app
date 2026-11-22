# Fuentes de «Extracción líquido-líquido a fondo: fases, lavados y separación en el reactor» (`extraccion-a-fondo`)

Copias de trabajo en `scratchpad/lecciones/tmp-extraccion/` (descargas en `dl/`, cálculos en `calc/calc.py`).

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| NTP225 | INSST, NTP 225 «Electricidad estática en el trasvase de líquidos inflamables» (copia ya descargada en `lecciones/src_atex/dl/ntp225.txt`, releída entera en los apartados de formación de cargas, velocidad de flujo y tiempos de relajación) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-225-electricidad-estatica-en-el-trasvase-de-liquidos-inflamables |
| Q7 | ICH Q7, apartados 6.52, 8.20 y 14.4 (14.40 a 14.43) y glosario («Mother liquor») (copia ya descargada en `src_alcoa/q7.txt`) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| KUPH-GAUGE | T. Kuphaldt, *Lessons in Industrial Instrumentation*, «Level gauges (sightglasses)», apartado «Interface problems» | https://control.com/textbook/continuous-level-measurement/level-gauges-sightglasses/ |
| KUPH-ECHO | Ídem, «Echo» (radar de onda guiada para interfases líquido-líquido; dificultad con emulsiones) | https://control.com/textbook/continuous-level-measurement/echo/ |
| KUPH-IONS | Ídem, «Ions in liquid solutions» (el agua pura conduce muy poco; con sal disuelta conduce) | https://control.com/textbook/chemistry/ions-in-liquid-solutions/ |
| APP | Lecciones de la app: `nivel12-separacion.ts` (extracción corta), `nivel1-enlaces.ts`, `nivel2-equilibrio.ts`, `nivel1-acidos.ts`, `nivel3-disolventes.ts`, `nivel0-densidad.ts`, `fds.ts` (tolueno), `nivel0.ts`, `nivel15-atex.ts`, `nivel15-emergencias.ts`, `nivel12-inertizacion.ts`, `nivel12-centrifuga.ts`, `nivel13-instrumentos.ts`, `nivel5-muestreo.ts` | Repositorio, leído |

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Agua polar con puentes de hidrógeno, tolueno casi apolar; inmiscibles; «lo semejante disuelve a lo semejante»; sales y especies con carga prefieren el agua | APP, `nivel1-enlaces.ts` | Leído en la app (se resume y se remite) |
| Acetato de etilo «poco» miscible con agua | APP, `nivel3-disolventes.ts` (tabla) y `nivel1-enlaces.ts` | Leído en la app |
| Densidades: agua 1,00 (0,998 a 20 °C), tolueno 0,87, diclorometano 1,33 kg/L | APP: `nivel0-densidad.ts` (998,21 kg/m³ a 20 °C, IAPWS-IF97), `fds.ts` (tolueno 0,87), `nivel0.ts` y `nivel3-disolventes.ts` (diclorometano 1,33) | Leído en la app (las fuentes externas NIST y FISQ/ICSC no son accesibles desde la sesión) |
| Acetato de etilo menos denso que el agua (queda arriba), sin cifra | APP: `nivel12-separacion.ts` («el tolueno y el acetato de etilo pesan menos que el agua y flotan») y `nivel1-acidos.ts` | Leído en la app. Cifra 0,9 solo vista en fragmento del buscador (copia no oficial de la FISQ 0367): no usada |
| Queda arriba la fase menos densa; la fuerza que mueve la gota depende de la diferencia de densidades | Principio de Arquímedes (lección «Fluidos a fondo» de la app); KUPH-GAUGE («the denser water forms a separate layer beneath the lighter oil») | Leído / razonamiento físico sin cifras |
| Fórmula fracción que queda = (1/(1 + K·Vorg/Vac))ⁿ | Deducida del equilibrio de reparto de `nivel2-equilibrio.ts` (f = Vac/(Vac + K·Vorg)) aplicada n veces | Cálculo |
| Ejemplo 1 (K = 5, 600 L, 40 kg): 16,67 / 8,16 / 5,27 / 3,90 / 2,63 %; 6,67 / 3,27 / 2,11 / 1,56 / 1,05 kg; «casi 4,6 kg más» (6,67 − 2,11 = 4,56) | Valores de ejemplo declarados | Recalculado en `calc.py` |
| Ejemplo 2 (K = 0,5): 66,7 / 64,0 / 63,0 %; seis veces 61,9 % (quiz) | Valores de ejemplo declarados | Recalculado (61,86) |
| Ejemplo 3 lavado (K = 0,2, 500 L): 2 × 100 L deja 25 %; 1 × 200 L deja 33,3 % | Valores de ejemplo declarados | Recalculado |
| Amina en ácido pasa al agua; ácido carboxílico al revés | APP, `nivel1-acidos.ts` | Leído en la app |
| pKa del ácido acético 4,76; ecuación de Henderson-Hasselbalch | APP, `nivel1-acidos.ts` | Leído en la app |
| % ionizado a pH 2,76 / 4,76 / 6,76 / 7,76: 0,99 / 50 / 99,01 / 99,9 %; regla de dos unidades = 99 % | Cálculo con Henderson-Hasselbalch | Recalculado |
| La forma ionizada casi no pasa al orgánico | APP, `nivel1-enlaces.ts` y `nivel1-acidos.ts` (la sal va al agua) | Leído en la app (cualitativo) |
| Bicarbonato + ácido libera CO₂ y hace espuma | APP, `nivel1-acidos.ts` (cuenta 3) | Leído en la app |
| Neutralizar desprende calor; adición lenta y con frío | APP, `nivel1-acidos.ts` | Leído en la app |
| Agitar demasiado fuerte favorece emulsiones / gotas finas tardan en juntarse | Fragmentos de buscador (manual MIT de técnicas de laboratorio, Biotage, York) | Solo fragmento de buscador; cualitativo |
| Causas de emulsión: partículas finas, sustancias tipo jabón (tensioactivos) | Fragmentos de buscador (MIT OCW «Digital lab techniques manual», Biotage blog) | Solo fragmento de buscador; el texto lo dice expresamente |
| Remedios: esperar, salmuera, filtrar | Fragmentos de buscador (MIT, York «problems with extractions», chromatographyonline); salmuera también en `nivel12-separacion.ts` | Fragmento / app. En la lección solo «si la hoja lo prevé» |
| Conductividad: fase acuosa con iones conduce; tolueno apenas | KUPH-IONS; NTP225 (apolares y aromáticos > 10¹² Ω·cm) | Leído en el documento |
| Radar de onda guiada mide interfases líquido-líquido; dificultad con interfases no definidas como emulsiones | KUPH-ECHO («Liquid-liquid interfaces may also be measured … most commonly guided-wave radar»; «difficulty detecting non-distinct interfaces (such as emulsions)») | Leído en el documento |
| Visor externo solo muestra bien la interfase con las dos tomas sumergidas | KUPH-GAUGE («The only way to ensure proper two-part liquid interface level indication in a sightglass is to keep both ports (nozzles) submerged») | Leído en el documento |
| Separadoras centrífugas: la fase pesada va a la periferia, la ligera cerca del eje; modelos de discos y extractores centrífugos | Fragmentos de buscador (GEA, patente de extractor centrífugo) | Solo fragmento de buscador; sin cifras |
| Fuerza G de la centrífuga | APP, `nivel12-centrifuga.ts` | Remisión |
| Decantación de dos líquidos no miscibles, trasvase simultáneo de dos fases y agua en hidrocarburos generan cargas | NTP225, «Formación…» («La decantación de dos líquidos no miscibles», «La transferencia simultánea de dos fases») y factores causales de accidentes | Leído en el documento |
| Con agua o mezclas insolubles, trasvasar a menos de 1 m/s | NTP225, «Control de la velocidad de flujo…» | Leído en el documento |
| Tiempos de relajación: 30 s conductores, 1 min no conductores (> 10¹¹ Ω·cm) | NTP225, «Control de los tiempos de relajación» | Leído en el documento |
| Acetato de etilo 1,0 × 10⁹ Ω·cm; ha habido accidentes con él | NTP225 | Leído en el documento |
| Hueco al vaciar se llena con nitrógeno | APP, `nivel12-inertizacion.ts` | Leído en la app |
| Halogenados aparte de no halogenados; diclorometano es halogenado | APP, `nivel15-emergencias.ts` y `nivel3-disolventes.ts` (NTP 480, LER) | Leído en la app |
| Recuperación de materiales y disolventes admitida con procedimientos aprobados y documentada | Q7 14.40 a 14.43 | Leído en el documento |
| Cumplir los tiempos límite de la instrucción y documentar desviaciones | Q7 8.20 | Leído en el documento |
| Qué registra la hoja (fechas y horas, equipos, resultados reales de parámetros críticos, muestreos, IPC, firmas, desviaciones) | Q7 6.52 | Leído en el documento |
| «Cortar tarde»: 500 L, 40 kg, 20 L: 1,6 kg, 4 % | Valores de ejemplo | Recalculado |
| 300 L × 1,33 = 399 kg; 450 × 1,33 = 598,5 kg | Cálculo con densidad de la app | Recalculado |
| Quiz: K = 4, 400 L, 2 × 200 L: 11,11 % (una sola: 20 %); 30 kg en 600 L, 15 L: 0,75 kg (2,5 %) | Valores de ejemplo | Recalculado |
| Ejemplo de planta (R-310, R-312, T-55, CD-310, DX-44, bicarbonato al 5 %, 80 rpm, tiempos, pH 8,1, pesos) | Valores de ejemplo declarados, códigos ficticios | — |

## Lo que quería incluir y dejé fuera

- Densidad numérica del acetato de etilo (y del heptano) y densidades de disoluciones salinas o salmuera: NIST WebBook y las FISQ/ICSC (chemicalsafety.ilo.org) no se resuelven desde la sesión; INFOCARQUIM del INSST no trae densidad; la NTP 47 solo da densidades de materiales sólidos comunes. El 0,9 del acetato de etilo quedó como fragmento de buscador.
- Inversión de fases cuando las densidades se igualan (producto muy concentrado, salmuera densa): sin fuente leída; solo se dice que la hoja indica cuál es la fase de arriba y que la separación es más lenta.
- Efecto remolino o embudo al vaciar deprisa que arrastra la fase de arriba: sin fuente; se sustituyó por la indicación lógica de bajar despacio para ver llegar la interfase.
- Cifras de tiempos de decantación típicos, velocidades de agitación recomendadas o conductividades concretas de fases acuosas: sin fuente.
- Sensores ópticos de turbidez para detectar la interfase y cierre automático de válvulas por conductividad: sin fuente; se dejó «lo dice el procedimiento del equipo».
- Cifras de capacidad o fuerza G de separadoras de discos: solo material de fabricante (GEA) en el buscador.
- Fichas técnicas UKHSA (gov.uk) del tolueno: la página existe, pero el PDF está en assets.publishing.service.gov.uk, que no responde desde la sesión.
- Límites ICH Q3C del diclorometano y tolueno: ya están en «Disolventes a fondo»; no se repiten.
