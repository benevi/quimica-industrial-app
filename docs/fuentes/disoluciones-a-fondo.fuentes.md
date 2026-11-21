# Fuentes de la lección «Disoluciones y solubilidad a fondo» (disoluciones-a-fondo)

Sesión de verificación: 21 de noviembre de 2026. Los cálculos se rehicieron con Python (`src_disol/calc.py`). Las NTP se descargaron de www.insst.es y se leyó su texto.

## Afirmaciones y cifras

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Soluto, disolvente, disolución; disolución transparente frente a suspensión | Conocimiento de libro de texto; coherente con la lección `disoluciones` de la app | Conocimiento de libro de texto |
| Al disolver, el disolvente rodea y separa las moléculas o iones del soluto (solvatación) | Conocimiento de libro de texto | Conocimiento de libro de texto |
| «Lo semejante disuelve a lo semejante», polaridad | Lección `enlaces-y-polaridad` de la app (nivel1.ts) | Leído en el repo |
| Agitar y moler aceleran la disolución sin cambiar la solubilidad; calentar suele aumentarla | Conocimiento de libro de texto | Conocimiento de libro de texto |
| Definición de solubilidad; insaturada, saturada, sobresaturada | Conocimiento de libro de texto; coherente con `cristalizacion` (nivel12-separacion.ts) | Conocimiento de libro de texto |
| La solubilidad de casi todos los sólidos sube con la temperatura, con excepciones | Conocimiento de libro de texto; `cristalizacion` dice «normalmente sube» | Conocimiento de libro de texto |
| Curva de PX-12 en etanol: 2,0 / 2,5 / 5,0 / 11,0 / 22,0 g por 100 g a 0 / 5 / 20 / 40 / 60 °C | Valor de ejemplo declarado (producto ficticio) | Declarado en el texto |
| Lote: 400 kg de etanol, 80,0 kg de bruto al 97,5 % (78,0 kg de producto y 2,0 kg de impurezas) | Valor de ejemplo declarado | Recalculado (80 × 0,975 = 78) |
| Caben 88,0 kg a 60 °C | Cálculo: 22,0 × 4 | Recalculado |
| 19,5 g por 100 g; inicio de sobresaturación hacia 55 °C por interpolación lineal | Cálculo: 78/400 × 100; 40 + 20 × (19,5 − 11)/(22 − 11) = 55,45 | Recalculado; declarado como estimación |
| Disueltos a 5 °C: 10,0 kg; cristalizan 68,0 kg; rendimiento 87,2 %; pérdida 12,8 % | Cálculo | Recalculado (87,18; 12,82) |
| A 0 °C quedarían 8,0 kg disueltos | Cálculo: 2,0 × 4 | Recalculado |
| Impureza: solubilidad 4,0 g por 100 g a 5 °C (cabrían 16,0 kg) | Valor de ejemplo declarado; cálculo | Recalculado |
| Torta con 20 kg de aguas madres; aguas madres 412 kg; 0,097 kg de impureza; 0,14 % sobre 68,0 kg | Valor de ejemplo declarado (20 kg); cálculo | Recalculado (0,0971; 0,143) |
| Las impurezas quedan en las aguas madres porque no saturan; el cristal crece ordenado y rechaza moléculas distintas | Conocimiento de libro de texto; `cristalizacion` y `centrifuga-a-fondo` de la app | Conocimiento de libro de texto |
| Lavado de 60 kg en el peor caso saturado: 1,5 / 3,0 / 6,6 kg a 5 / 20 / 40 °C | Cálculo con la curva de ejemplo | Recalculado |
| Lavado con disolvente frío | `cristalizacion` (nivel 12) de la app | Leído en el repo |
| Sobresaturación, nucleación, zona metaestable, siembra; enfriar despacio da cristales grandes y puros, de golpe da finos que atrapan impurezas | Conocimiento de libro de texto; `cristalizacion` (nivel 12) dice lo mismo de forma cualitativa | Conocimiento de libro de texto; sin cifras |
| Agua sobreenfriada que se congela al golpearla o al añadir hielo | Conocimiento de libro de texto (sobrefusión) | Conocimiento de libro de texto; sin cifras |
| Solubilidades de PX-12 a 20 °C: acetona 25; metanol 4; acetona-heptano 1:1 en peso 2; heptano 0,1 g por 100 g | Valor de ejemplo declarado | Declarado en el texto |
| Antidisolvente: 20 g por 100 g; caben 10 kg; cristalizan 40 kg; 80 % | Cálculo | Recalculado |
| Evaporación: 32 kg caben en 800 kg; cristalizan 8 kg (20 %); tras destilar a 200 kg caben 8 kg y cristalizan 32 kg (80 %) | Cálculo | Recalculado |
| La solubilidad de los gases baja al calentar y sube con la presión del gas | Conocimiento de libro de texto (ley de Henry, cualitativo) | Conocimiento de libro de texto; sin cifras |
| Un disolvente al aire lleva oxígeno disuelto; burbujear nitrógeno si la hoja lo pide | Conocimiento de libro de texto; la lección `inertizacion-a-fondo` menciona el oxígeno disuelto en el disolvente del bidón | Conocimiento de libro de texto; sin cifras |
| C1·V1 = C2·V2; con % p/p se usa C1·m1 = C2·m2 | Lección `disoluciones` de la app | Leído en el repo |
| Sosa al 50 % de densidad 1,52 kg/L | Ficha ficticia CAUSTIL 50, `src/content/fds.ts` (ya verificada en la app) | Leído en el repo |
| Ácido clorhídrico al 35 % de densidad 1,17 kg/L | Ficha ficticia CLORAC 35, `src/content/fds.ts` | Leído en el repo |
| Ejemplo 1: 40 kg de sosa al 50 % (26,3 L) y 460 kg de agua | Cálculo | Recalculado (26,32) |
| Ejemplo 2: 42,9 kg de HCl 35 % (36,6 L) y 257,1 kg de agua | Cálculo | Recalculado (42,857; 36,63; 257,14) |
| Ejemplo 3: 20 L de NaOH 2 mol/L para 80 L de 0,5 mol/L | Cálculo | Recalculado |
| Siempre el ácido sobre el agua, en pequeñas proporciones y agitando, para que el agua absorba el calor; si no, el agua puede convertirse en vapor y esparcir el ácido caliente | INSST, NTP 97 «Baterías de arranque. Riesgos de accidentes durante su manejo», apartado sobre el ácido sulfúrico. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/3-serie-ntp-numeros-086-a-120-ano-1984/ntp-97-baterias-de-arranque.-riesgos-de-accidentes-durante-su-manejo | Leído en la ficha HTML (texto íntegro) |
| La preparación de diluciones de ácidos o de bases y las neutralizaciones en medio acuoso son exotérmicas y calientan productos y recipiente | INSST, NTP 1229 «Reacciones químicas peligrosas con el agua» (2026). https://www.insst.es/es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/39-serie-ntp-numeros-1229-y-ss-ano-2026/ntp-1229-reacciones-quimicas-peligrosas-con-el-agua-2026 | Leído en la ficha HTML |
| Al diluir, añadir la sosa al agua poco a poco y con agitación, nunca al revés | Ficha ficticia CAUSTIL 50, `src/content/fds.ts`, sección 7 | Leído en el repo |
| % v/v; 140 L de etanol en 200 L al 70 % v/v | Definición y cálculo | Recalculado |
| Al mezclar etanol y agua el volumen final es algo menor que la suma | Conocimiento de libro de texto (contracción de volumen) | Conocimiento de libro de texto; sin cifra |
| Sales, ácidos y bases disueltos dan iones y conducen (electrolitos); azúcar y etanol no | Conocimiento de libro de texto | Conocimiento de libro de texto |
| La conductividad mide los iones; el agua pura casi no conduce; se vigila en línea en el agua farmacéutica | Lección `agua-a-fondo` (nivel14-agua.ts) de la app | Leído en el repo |
| Presión de vapor; un líquido hierve cuando iguala la presión de encima | Lección `bombas-a-fondo` (nivel11-bombas.ts) de la app | Leído en el repo |
| Un soluto no volátil baja la presión de vapor y sube algo el punto de ebullición | Conocimiento de libro de texto (propiedades coligativas, cualitativo) | Conocimiento de libro de texto; sin cifras |
| Preguntas: 33 kg; 6,25 y 43,75 kg; 87,5 %; 2 kg; 40 kg (sosa 8 %, 250 kg); 30 kg (HCl 7 %, 150 kg) | Cálculo con valores de ejemplo | Recalculado |
| Equipos y productos R-310, R-311, C-320, T-330, PX-12; 0,4 kg de semilla; siembra a 50 °C; rampa de 6 h; 60 kg de lavado a 5 °C | Valores de ejemplo declarados | Declarados en el texto |

## Lo que se dejó fuera por no poder verificarlo

- Solubilidades reales de sustancias (por ejemplo, la sal común o el paracetamol en agua o en etanol): no se leyeron en una fuente gratuita accesible; se usó un producto ficticio con valores declarados.
- Valores de oxígeno disuelto en agua o en disolventes a distintas temperaturas y la constante de Henry: no leídos; los párrafos de gases son cualitativos.
- Anchuras típicas de la zona metaestable y velocidades de enfriamiento habituales: dependen de cada producto; no se dan números.
- El aumento de ebullición del agua salada en grados (constante ebulloscópica): no se dio cifra.
- La contracción de volumen del etanol con agua en porcentaje: se cita solo de forma cualitativa.
- No se encontró una NTP dedicada en exclusiva a la manipulación de ácidos; se usaron la NTP 97 (ácido sulfúrico en baterías) y la NTP 1229.
