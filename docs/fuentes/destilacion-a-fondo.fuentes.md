# Fuentes de «Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor» (`destilacion-a-fondo`)

Aviso de método. Desde esta sesión **no se pudo abrir webbook.nist.gov** (el proxy rechaza la conexión con curl y WebFetch no resuelve el host), ni en.wikipedia.org, chem.libretexts.org ni www.csb.gov. Por eso las constantes de Antoine **no están leídas en NIST WebBook**, como pedía el encargo. Se usaron las constantes de libro de texto (las del tolueno son las que ya usa el simulador, `docs/simulador-reactor.md`) y **se comprobó cada temperatura que salen con CoolProp 8.0.0** (biblioteca libre de propiedades, instalada con pip, que usa ecuaciones de estado de referencia para el agua y el tolueno). Las diferencias son de 0,1 °C como mucho entre 50 y 1063 mbar. Todos los cálculos están en `src_destil/calc.py`.

Documentos leídos de verdad: el capítulo «Elementary thermodynamics» del libro de Kuphaldt (https://control.com/textbook/physics/elementary-thermodynamics/), la NTP 464 del INSST (https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-464-prevencion-del-riesgo-en-el-laboratorio-quimico-operaciones-basicas, texto íntegro de la ficha HTML) y la guía ICH Q7 (https://database.ich.org/sites/default/files/Q7%20Guideline.pdf, copia ya descargada en `src_materia/dl/q7.txt`).

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Vaso de papel con agua al fuego: el agua se queda en su punto de ebullición y el vaso no arde salvo el borde | Kuphaldt, «Elementary thermodynamics» | Leído |
| Calor latente: se gasta en cambiar de fase sin subir la temperatura; el vapor lo devuelve al condensar; Q = mL | Kuphaldt, mismo capítulo | Leído |
| Calor latente de vaporización del agua: 539,1 cal/g a presión atmosférica | Kuphaldt | Leído |
| «Unas siete veces más» que calentar de 24 a 100 °C | Kuphaldt: 37734 cal frente a 5320 cal para 70 g («over seven times») | Leído y recalculado (37734 / 5320 = 7,09) |
| El punto de ebullición depende de la presión: montaña y olla exprés | Kuphaldt | Leído |
| Columnas con bandejas, vapor que sube y líquido que baja, calderín y condensador | Kuphaldt, mismo capítulo (apartado de intercambiadores en destilación) | Leído. Que en farmacia se use cuello o columna corta: conocimiento general, coherente con «El reactor a fondo» (línea de vapores y condensador) |
| Ecuación de Antoine log P = A − B/(C+T); despeje T = B/(A − log P) − C | Forma estándar; la misma que usa `src/sim/reactor/model.ts` | Libro de texto + recalculado |
| Constantes del tolueno 6,95464; 1344,8; 219,482 (mmHg, °C) | `docs/simulador-reactor.md` (constantes de libro de texto) | Comprobado con CoolProp (tolueno): 110,6 / 61,9 / 45,3 °C a 1013 / 200 / 100 mbar, iguales a Antoine |
| Constantes del agua 8,07131; 1730,63; 233,426 (mmHg, °C), entre 1 y 100 °C | Constantes de libro de texto (no leídas en una fuente accesible) | Comprobado con CoolProp (agua, IAPWS-95): 100,0 / 60,1 / 45,8 °C frente a 100,0 / 60,1 / 45,9 de Antoine. En la tabla se da el de Antoine; coincide en 0,1 °C |
| Agua a 200 mbar 60 °C y a 100 mbar 46 °C | Coincide con «La materia a fondo» y «Destilación y concentración» (app) | Recalculado |
| 1 mmHg = 133,322 Pa | Real decreto de unidades, citado en «Nitrógeno, aire comprimido y vacío a fondo» (app) | App |
| Paso a paso a 200 mbar: 150,0 mmHg; log 2,1761; 4,7785; 281,4; 61,9 °C. A 760 mmHg: 110,6 °C | Cálculo | Recalculado con python |
| A 1063 mbar abs (0,05 bar g) el tolueno puro hierve a 112,3 °C | Cálculo con Antoine y CoolProp | Recalculado |
| Reflujo del R-204 a unos 115 °C con producto disuelto y 0,05 bar g | `docs/simulador-reactor.md` | Leído en el repo |
| Un soluto no volátil sube algo el punto de ebullición | Lección «Disoluciones y solubilidad a fondo» (app) | App, cualitativo |
| Reflujo: el condensado vuelve; destilación: se desvía | «El reactor a fondo» (app) | App |
| La NTP 464 recomienda trampa refrigerada para que los vapores no deterioren la bomba de vacío | NTP 464, «Evaporación al vacío» | Leído |
| Bomba de anillo líquido y vacío como servicio | «Bombas a fondo» y «Nitrógeno, aire comprimido y vacío a fondo» (app) | App (solo se remite) |
| Destilar a vacío para proteger el producto del calor | «Destilación y concentración» (app) y física de la ecuación de Antoine | App + cálculo |
| Un kilo de vapor de tolueno: 0,34 m³ a 1013 mbar y 110,6 °C; 2,87 m³ a 100 mbar y 45,3 °C | Ley de los gases ideales, masa molar 92,14 g/mol (`docs/simulador-reactor.md`) | Recalculado (2,87 / 0,34 = 8,4: «más de ocho veces») |
| Condensador U·A 1670 W/K, agua a 15 °C | `src/sim/reactor/model.ts` (valores de ejemplo del simulador) | Leído en el repo |
| 160 kW con vapor a 110,6 °C; 50,6 kW a 45,3 °C | Cálculo simplificado Q = U·A·(T vapor − T agua), el mismo que usa el simulador | Recalculado (159,7 y 50,6 kW) |
| Las fugas a vacío meten aire | «Inertización a fondo» (app) | App |
| Calor de vaporización del tolueno 360 kJ/kg | `docs/simulador-reactor.md` | Comprobado con CoolProp: 360,7 kJ/kg a 1013 mbar. A 200 mbar CoolProp da 391 kJ/kg; la lección usa 360 kJ/kg como el simulador y no da la cifra a vacío |
| Densidad del tolueno 0,87 kg/L | «El reactor a fondo» (app) | App; CoolProp da 0,867 a 20 °C |
| 870 × 360 = 313200 kJ; 6264 s; 104,4 min; 500 kg/h; 575 L/h a 50 kW | Cálculo; 50 kW es valor de ejemplo de «El reactor a fondo» | Recalculado |
| Concentrar de 3000 a 1000 L multiplica la concentración por 3 | Cálculo | Recalculado |
| No concentrar a sequedad si pueden formarse productos inestables (peróxidos); el peróxido poco volátil se concentra y explota cuando queda casi solo él | NTP 464, «Evaporación al vacío» y «Riesgos en la destilación de éteres» | Leído |
| Cambio de disolvente por tandas: factor V mín / V máx por tanda en el caso peor (vapor igual que el líquido); 40; 16; 6,4; 2,56 % | Razonamiento de balance de materia, declarado como caso peor; volúmenes de ejemplo; se suponen volúmenes aditivos | Recalculado |
| Destilación a volumen constante: factor e^(−V añadido / V) en el caso peor; 0,37 por volumen; 5,0 % con 1200 L sobre 400 L | Balance de mezcla perfecta (misma matemática que el barrido de «Inertización a fondo») | Recalculado (e^−3 = 0,0498) |
| El vapor va más cargado del disolvente que hierve antes, así que la realidad mejora el caso peor | Conocimiento de libro de texto (cualitativo, sin cifras) | Sin cifras. Ojo: no vale si hay azeótropo, y se dice |
| Tolueno y agua casi no se mezclan; el tolueno es más ligero (0,87 frente a 1 kg/L) | Densidades de la app; miscibilidad en «Disolventes a fondo» (tabla «¿Miscible con agua?») | App |
| Dos líquidos inmiscibles hierven cuando la suma de sus presiones de vapor iguala la de encima | Ley de Dalton aplicada a líquidos inmiscibles (libro de texto) | Cálculo con la suposición declarada en el texto |
| Azeótropo tolueno-agua calculado: 84,4 °C a 1013 mbar (agua 563 mbar, tolueno 450 mbar), vapor con cerca del 20 % de agua en masa (19,6 %); 45,6 °C a 200 mbar | Cálculo con Antoine suponiendo inmiscibilidad total | Recalculado. **No es un valor medido**; el texto lo dice. La lección corta da «~85 °C» |
| Secado azeotrópico: separador, agua al fondo, tolueno vuelve; la temperatura de vapor sube cuando se acaba el agua | Consecuencia del cálculo anterior (al faltar agua, el vapor es tolueno, 110,6 °C) | Razonamiento + cálculo. Uso del separador: conocimiento general de proceso |
| Riesgos de la destilación según la NTP 464: paro de la refrigeración con emisión de vapores y atmósfera inflamable; ebullición irregular con proyecciones | NTP 464, «Destilación» | Leído |
| Regularizar la ebullición con trocitos de porcelana porosa (laboratorio) o capilar con gas (vacío) | NTP 464 | Leído. Que en el reactor ese papel lo haga el agitador: razonamiento, coherente con «El reactor a fondo» |
| La calefacción no debe empezar hasta establecer el vacío, para evitar el desencadenamiento espontáneo de la ebullición | NTP 464, «Destilación al vacío» | Leído |
| Bajar la presión por escalones; no subir el calor para ir más rápido; mirilla | Práctica general de operación, coherente con la NTP 464 (ebullición irregular) | Sin fuente específica leída; sin cifras. Los escalones del ejemplo son valores de ejemplo |
| A 70 °C el tolueno tiene unos 272 mbar de presión de vapor; a 63 °C, unos 208 mbar | Cálculo con Antoine | Recalculado (271,6 y 208,4 mbar) |
| Si falla el agua del condensador: vapores al venteo, pérdida de disolvente, subida de presión; cortar calefacción y avisar | «Intercambio de calor y frío a fondo» (NTP 528) y «El reactor a fondo» (app); guía de la avería «condensador» en `src/sim/reactor/guia.ts` (no cerrar el venteo) | App |
| Avería del simulador con alarmas CCL (sin agua en el condensador) y EMI (vapor por el venteo), durante el reflujo | `src/sim/reactor/model.ts` | Leído en el repo |
| Enfriar antes de romper el vacío (aire en balón caliente puede inflamar o explotar el residuo); paso lento a presión normal | NTP 464, «Destilación al vacío» | Leído |
| Romper el vacío con nitrógeno, nunca con aire | «Nitrógeno, aire comprimido y vacío a fondo» (app) | App |
| ICH Q7 8.30: procedimientos para seguir los pasos que causan variabilidad; IPC con criterios de aceptación | ICH Q7 | Leído |
| ICH Q7 8.33: IPC por producción y ajustes dentro de límites aprobados por calidad, todo documentado en la hoja | ICH Q7 | Leído |
| IPC: Karl Fischer para agua, cromatografía de gases para disolvente residual | Lecciones «El agua en la muestra a fondo» y «Cromatografía de gases a fondo» (app) | App |
| Límites del ejemplo de planta (KF ≤ 0,05 %, T vapor ≥ 109 °C, 200 mbar, ≤ 75 °C, 3000 a 1000 L) y resultado 0,03 % | Valores de ejemplo declarados | Declarado en el texto |
| Equipos E-204, S-204, D-205; intermedio AX-22 | Ficticios (R-204 y AX-22 son los del simulador) | — |
| 1990 + 1010 = 3000 L | Cálculo | Recalculado |

## Lo que quería incluir y dejé fuera

- Constantes de Antoine **leídas en NIST WebBook** (con sus intervalos y referencias): el host no es accesible desde esta sesión. Si se abre webbook.nist.gov, conviene contrastar las del agua (8,07131; 1730,63; 233,426) y las del tolueno, aunque CoolProp ya confirma las temperaturas que salen.
- Composición y temperatura **medidas** del azeótropo tolueno-agua (tablas de azeótropos tipo CRC): no hay fuente gratuita leída; solo se da el cálculo ideal y se avisa.
- Azeótropos de otras parejas habituales (metanol-tolueno, isopropanol-agua…): sin fuente leída; solo se dice que si hay azeótropo la cuenta del cambio de disolvente deja de valer.
- Uso de antiespumantes y cifras de velocidad de bajada de presión: sin fuente leída.
- Calor de vaporización del tolueno a vacío (CoolProp da 391 kJ/kg a 200 mbar): se omitió para que los números cuadren con el simulador, que usa 360 kJ/kg fijo.
- Informes del Chemical Safety Board sobre fallos de condensador en destilaciones: www.csb.gov no accesible.
- Límites reales de disolventes residuales en IPC: dependen de cada proceso; la guía ICH Q3C ya está en «Disolventes a fondo».
