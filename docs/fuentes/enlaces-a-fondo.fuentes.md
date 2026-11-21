# Fuentes de la lección `enlaces-a-fondo`

Cómo leer la columna «Comprobación»:

- **Libro de texto, comprobado por cálculo**: química general universal (regla del octeto, tipos de enlace, Lewis, electronegatividad, fuerzas intermoleculares). No se ha leído en esta sesión una fuente externa que lo diga; las cuentas se rehicieron con python (`src_enlaces/calc.py`).
- **Leído en la app**: dato que ya está en una lección o ficha del repositorio (verificada antes, según el brief). Se cita el archivo.
- **Valor de ejemplo declarado**: número inventado; el texto lo dice.
- **Razonamiento**: consecuencia directa de lo anterior, sin cifra propia.

No se ha leído ninguna fuente externa nueva para esta lección. Se intentó la ficha internacional de seguridad química del metano (ICSC 0291) para comparar su punto de ebullición con el del agua: el listado de FISQ del INSST (https://www.insst.es/documentacion/colecciones-tecnicas/fisq) enlaza a chemicalsafety.ilo.org, que da 403 desde esta sesión. Por eso la comparación se hizo con el nitrógeno, cuyo punto de ebullición ya está en la app.

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Electrones de valencia; los átomos se unen porque unidos quedan en un estado de menor energía | Química general | Libro de texto |
| Regla del octeto; el hidrógeno se completa con 2; tiene excepciones | Química general | Libro de texto |
| Na cede su único electrón de valencia; al Cl (7) le falta 1; quedan Na⁺ y Cl⁻ | Química general | Libro de texto |
| Red cristalina iónica; no hay moléculas de NaCl | Química general | Libro de texto |
| Sales: sólidas, punto de fusión alto, conducen disueltas y no en sólido | Química general | Libro de texto. No se da cifra de fusión del NaCl (no leída); solo «no se funde en una sartén» |
| Neutralizar HCl con NaOH da NaCl, que va a la fase acuosa | Química general | Libro de texto |
| Salmuera para romper emulsiones | `src/content/nivel12-separacion.ts` («Extracción líquido-líquido…») | Leído en la app |
| Clorhidrato = sal de base orgánica con HCl; para solubilidad, estabilidad o cristalización | `src/content/nivel3.ts` («Polimorfismo, sales y solvatos») | Leído en la app |
| Amina en agua ácida pasa al agua como sal (lavado ácido) | `src/content/nivel12-separacion.ts` | Leído en la app |
| Enlace simple, doble y triple = 1, 2 y 3 pares = 2, 4 y 6 electrones; N₂ con enlace triple; CO₂ y acetona con C=O | Química general | Libro de texto; cuenta trivial |
| Lewis del H₂O: 8 electrones de valencia, 2 pares compartidos, 2 pares solitarios | Química general | Libro de texto, recalculado (6 + 1 + 1 = 8; 8 − 4 = 4 electrones = 2 pares) |
| Lewis del CH₄: 8 electrones, 4 pares compartidos, sin pares solitarios | Química general | Libro de texto, recalculado |
| Lewis del CO₂: 16 electrones, 8 en enlaces, 4 pares solitarios (2 por oxígeno) | Química general | Libro de texto, recalculado (4 + 6 + 6 = 16; 16 − 8 = 8 = 4 pares) |
| Quiz 1: dos dobles enlaces = 8 electrones compartidos; quiz 2: 4 pares solitarios | Cálculo | Recalculado |
| Enlace metálico: mar de electrones, conducción de electricidad y calor, ductilidad | Química general | Libro de texto |
| La pinza de tierra descarga la electricidad estática por el metal | Lecciones de la app sobre inertización y ATEX (pinza de tierra en `nivel12-inertizacion.ts`, plant) | Leído en la app (la pinza); el porqué es libro de texto |
| Orden de electronegatividad: F > O > Cl, N; C ≈ H, mucho menor que O; Na muy baja | Escala de Pauling (F 3,98; O 3,44; Cl 3,16; N 3,04; C 2,55; H 2,20; Na 0,93) | Valores de libro de texto, no leídos en esta sesión; en el texto solo se da el orden cualitativo |
| C–H casi apolar; O–H, C=O, C–Cl polares; gran diferencia = iónico | Química general | Libro de texto |
| Cargas parciales δ⁺/δ⁻; dipolo | Química general | Libro de texto |
| CO₂ lineal y apolar con enlaces polares; agua en V y polar por los pares solitarios; metano simétrico y apolar; hidrocarburos apolares | Química general (geometría por repulsión de pares de electrones) | Libro de texto. No se da el ángulo del agua (no leído) |
| Enlace (dentro) frente a fuerza intermolecular (entre moléculas, mucho más débil); hervir no rompe la molécula | Química general | Libro de texto |
| Dispersión, dipolo-dipolo, puentes de hidrógeno, en ese orden para tamaños parecidos; dispersión crece con el tamaño; puente de hidrógeno con H unido a O, N o F | Química general | Libro de texto. Sin cifras de energía (no leídas) |
| Ion-dipolo al disolver sales en agua | Química general | Libro de texto |
| Puntos de ebullición: diclorometano 40, acetona 56, metanol 65, heptano 98, tolueno 111 °C | `src/content/nivel3.ts` («Disolventes orgánicos…», tabla) | Leído en la app |
| Agua hierve a 100 °C a presión atmosférica; presión de vapor del agua a 20 °C 2,34 kPa | `src/content/nivel11-bombas.ts` | Leído en la app |
| Nitrógeno hierve a −196 °C | `src/content/fds.ts` (ficha de nitrógeno, −196 °C) y `nivel11-calor.ts` (−195,8 °C) | Leído en la app |
| Masas molares redondeadas: agua 18, N₂ 28, metanol 32, acetona 58, diclorometano 85, tolueno 92, heptano 100 g/mol | Masas atómicas estándar IUPAC (H 1,008; C 12,011; N 14,007; O 15,999; Cl 35,45) | Valores estándar de la IUPAC, no leídos en esta sesión; recalculado con python (18,02; 28,01; 32,04; 58,08; 84,93; 92,14; 100,2) |
| «El nitrógeno hierve unos 300 grados más abajo que el agua» | Cálculo | 100 − (−196) = 296 |
| Metanol pesa casi el doble que el agua | Cálculo | 32,04 / 18,02 = 1,78 |
| Presión de vapor del metanol 12,9 kPa a 20 °C | `src/content/fds.ts` (ficha ficticia de metanol, ya verificada) | Leído en la app |
| Metanol emite unas 5,5 veces más vapor que el agua a 20 °C | Cálculo | 12,9 / 2,34 = 5,51 |
| Acetona con vapores inflamables; diclorometano no inflamable en ensayo estándar (este último no se dice ya en el texto final) | `src/content/nivel3.ts` (tabla: acetona −20 °C de inflamación) | Leído en la app |
| Densidades: agua 1,00, tolueno 0,87, diclorometano 1,33 kg/L | `src/content/nivel0.ts`, `nivel1.ts` | Leído en la app |
| Miscibilidad con agua: metanol, etanol, isopropanol, acetona y THF sí; acetato de etilo poco; diclorometano, tolueno y heptano no | `src/content/nivel3.ts` (tabla) | Leído en la app |
| La sosa al 50 % es un líquido viscoso | `src/content/fds.ts` (ficha de hidróxido de sodio) | Leído en la app |
| Viscosidad mayor con más atracción entre moléculas; casi todos los líquidos más viscosos en frío | Química y física general | Libro de texto (cualitativo, sin cifras) |
| Tensión superficial, gotas, jabones y espuma | Química general | Libro de texto (solo la idea) |
| Ordenación cualitativa de polaridad por grupos (agua; alcoholes con metanol > etanol > isopropanol; acetona; THF, acetato de etilo y diclorometano sin orden entre sí; tolueno; heptano) | Química general | Libro de texto y razonamiento. No se usan índices ni constantes dieléctricas (no leídos). Dentro del grupo intermedio no se ordena porque las escalas habituales no coinciden entre sí para acetato de etilo y diclorometano |
| Alcoholes de cadena larga poco solubles en agua | Química general | Libro de texto (sin cifras) |
| Antidisolvente: definición y métodos de cristalización; heptano o agua como antidisolvente | `src/content/nivel12-separacion.ts` («Cristalización») | Leído en la app; la explicación con fuerzas es razonamiento |
| Isopropanol y heptano mezclables (ejemplo del antidisolvente) | Química general | Conocimiento general, no leído en esta sesión. Se eligió isopropanol en lugar de metanol porque el metanol y el heptano no son totalmente miscibles a temperatura ambiente (también conocimiento general, no leído) |
| Disolvente ocluido en cristales que crecen deprisa | `src/content/nivel12-separacion.ts` (enfriar de golpe da cristales que atrapan impurezas) | Leído en la app; aplicarlo al disolvente es razonamiento |
| Solvatos e hidratos; secar fuerte puede pasar el hidrato a anhidro | `src/content/nivel3.ts` («Polimorfismo, sales y solvatos») | Leído en la app |
| Pre-lavado con el disolvente del proceso; limpieza validada | `src/content/nivel12-separacion.ts` («Limpieza de equipos…») | Leído en la app |
| Equipos R-214, C-305, S-402, intermedio TQ-38; 400 L de agua, heptano en 2 h a 40 °C | Inventado | Valor de ejemplo declarado (códigos ficticios) |

## Lo que quería incluir y dejé fuera

- Punto de fusión del cloruro de sodio (unos 800 °C): no leído en fuente accesible; se deja en «no se funde en una sartén».
- Punto de ebullición del metano (unos −161 °C) y del sulfuro de hidrógeno, para comparar con el agua: la ficha ICSC está en chemicalsafety.ilo.org, bloqueado (403). Se usó el nitrógeno.
- Valores numéricos de electronegatividad de Pauling y ángulo H–O–H del agua (104,5°): solo de memoria; en el texto queda el orden y la forma en V.
- Energías típicas de enlace covalente y de puente de hidrógeno (kJ/mol): no leídas.
- Índice de polaridad o constante dieléctrica de cada disolvente para la tabla: no leídos y las escalas no coinciden; tabla cualitativa por grupos.
- Presión de vapor de acetona y diclorometano: no están en la app ni en fuente leída.
- Solubilidad del cloruro de sodio en agua (g/L) y densidad del heptano: no leídas; no se afirma qué capa forma el heptano.
- Tensión superficial del agua en cifras: no leída.
