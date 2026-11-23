# Fuentes: reacciones-en-api-a-fondo

Copias locales en `scratchpad/lecciones/tmp-reacciones/dl/` (q7.txt, q11.txt, q3d.txt, ntp1229.txt, ntp479.txt), `scratchpad/lecciones/src_termo/` (ntp527.body.txt, ntp528.body.txt, n529.body.txt) y `scratchpad/lecciones/tmp-fds/dl/clp_layout_full.txt` (Reglamento CLP, texto original de 2008, DOUE L 353). Cálculos en `tmp-reacciones/calc/c.py` y `s.py`.

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definición de *API starting material* (materia prima, intermedio o API incorporado como fragmento estructural importante; comprado o fabricado en casa; propiedades y estructura definidas) | ICH Q7, apartado 1.3 y glosario: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído en el documento (descargado de database.ich.org) |
| Definición de intermedio (sufre cambio molecular o purificación; aislado o no) y de materia prima (materiales de partida, reactivos y disolventes) | ICH Q7, glosario | Leído |
| La empresa designa y justifica el punto de inicio; en síntesis es la entrada del material de partida; la guía no se aplica antes; la exigencia GMP aumenta hacia las etapas finales, purificación y envasado | ICH Q7, 1.3 y tabla 1 | Leído |
| «Fragmento estructural importante» distingue materiales de partida de reactivos, disolventes y otras materias primas; productos corrientes para sales, ésteres o derivados sencillos son reactivos | ICH Q11, 5.1.1: https://database.ich.org/sites/default/files/Q11%20Guideline.pdf | Leído |
| Cambios al principio del proceso afectan menos; impurezas tempranas tienen más ocasiones de eliminarse; propiedades físicas se fijan en la cristalización final y operaciones posteriores (molienda) | ICH Q11, 5.1.1 | Leído |
| En un proceso convergente cada rama empieza con uno o más materiales de partida y Q7 se aplica a cada rama desde su primer uso | ICH Q11, 5.1.1 | Leído |
| Controles en proceso con criterios definidos, aprobados por calidad y documentados en la hoja | ICH Q7, 8.30 a 8.33 | Leído |
| Continuar una etapa tras un IPC incompleto es proceso normal, no reproceso; repetir una reacción con material sin reaccionar es reproceso salvo que esté en el proceso establecido, con evaluación previa | ICH Q7, 14.21 y 14.22 | Leído |
| Contenido de la hoja de lote en cada paso significativo (fechas y horas, equipo, lotes y pesos, parámetros críticos, muestreos, firmas, IPC, rendimiento, desviaciones) | ICH Q7, 6.52 | Leído |
| Cloruro de acetilo: H225, H314, EUH014; el CLP lo pone como ejemplo de EUH014 | CLP anexo VI (índice 607-011-00-5) y anexo II 1.1.3, texto de 2008, eur-lex | Leído en la copia local del texto de 2008 |
| Cloruro de tionilo: H314, EUH014, EUH029 (además H332, H302) | CLP anexo VI (016-015-00-0), texto de 2008 | Leído |
| Anhídrido acético: H226, H332, H302, H314 | CLP anexo VI (607-008-00-9), texto de 2008 | Leído |
| Cloruro de hidrógeno gas: H331, H314 | CLP anexo VI (017-002-00-2), texto de 2008 | Leído |
| Etano, isobutano (butano e isobutano) y 2-metilpropeno (isobuteno): gas inflamable categoría 1, H220 | CLP anexo VI (601-002-00-X, 601-004-00-0, 601-012-00-4), texto de 2008 | Leído |
| Litio, n-hexillitio e hidruro de sodio: H260 (litio y n-hexillitio además EUH014) | CLP anexo VI (003-001-00-4, 003-002-00-X, 001-003-00-X), texto de 2008 | Leído |
| Texto de EUH029 «En contacto con agua libera gases tóxicos» | CLP anexo II 1.2.1 | Leído |
| Anhídridos y halogenuros de ácido, alquilmetales e hidruros entre compuestos que reaccionan fuertemente con el agua | NTP 479 (INSST), tabla 1: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-479-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-ii- | Leído (ficha HTML) |
| Cloruro de tionilo: mutagénico, reacciona al instante y por completo con el agua | ICH M7(R2), opción 4 y caso 4 (copia `src_impur/m7.txt`) | Leído |
| Bromuro de etilmagnesio: muy sensible a la humedad, se comercializa en disolución, manipular en atmósfera inerte, da etano con agua; terc-butillitio da isobutano; reacciones con la humedad ambiental o del sudor | NTP 1229 (INSST, 2026): https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/39-serie-ntp-numeros-1229-y-ss-ano-2026/ntp-1229-reacciones-quimicas-peligrosas-con-el-agua-2026 | Leído (texto íntegro en la ficha HTML; el PDF no se pudo descargar) |
| Paladio clase 2B, PDE oral 100 µg/día; los 2B pueden excluirse de la evaluación salvo que se añadan intencionadamente | ICH Q3D(R2): https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf | Leído (tabla A.2.1 y apartado de clases) |
| Concentración = PDE / dosis diaria; con 2,5 g/día, Pd = 40 µg/g (quiz) | ICH Q3D(R2), opción 2a y tabla A.4.3 | Leído y recalculado (100 / 2,5 = 40) |
| Boc: al quitarlo con ácido salen CO₂ e isobuteno, 1 mol de cada por mol | Química de libro de texto; ajuste de la ecuación R–NH–CO–O–C(CH₃)₃ + H⁺ da R–NH₃⁺ + CO₂ + CH₂=C(CH₃)₂ comprobado contando átomos. Productos confirmados solo en fragmentos de buscador (guía ACS GCI Pharmaceutical Roundtable, presentación de Purdue P2SAC) | Fragmento de buscador más recuento de átomos |
| Calor de autocalentamiento exponencial con T, eliminación lineal | NTP 527 (copia `src_termo/ntp527.body.txt`, ficha INSST) | Leído |
| Gráfica de Semenov: temperatura uniforme (masa bien agitada), orden cero, puntos C (estable) y D (crítico, descontrol irreversible), temperatura sin retorno, tangencia, la pendiente cambia con el refrigerante y la agitación | NTP 527 | Leído |
| Tabla de Semenov (13,6; 20,0; 41,8; 83,7; 116,7; 161,3 kW), D ≈ 85,9 °C, fluido crítico ≈ 60,2 °C | Valores de ejemplo declarados (20 kW a 60 °C, U·A = 4 kW/K, fluido 55 °C, Ea = 70 kJ/mol, orden cero) | Recalculado con Arrhenius en `calc/s.py` (D = 85,85 °C; tangencia con fluido a 60,15 °C) |
| ΔTad = 350000 / (3000 × 1,8) = 64,8 °C; MTSR 99,4, 131,8 y 144,8 °C | Valores de ejemplo declarados | Recalculado en `calc/c.py` (64,81; con 64,8 redondeado: 99,44; 131,84; 144,8) |
| Ebullición del tolueno 111 °C | Ficha de seguridad de la app, ya usada en «Calor de reacción a fondo» | Tomado de la lección existente |
| Descomposición desde 150 °C | Valor de ejemplo declarado | — |
| Ensayos con calorímetros DTA, DSC, ARC, SEDEX; pruebas piloto; conocer el calor según temperatura y conversión; un pequeño error de cálculo puede ser grave | NTP 527 | Leído |
| Cambio de catalizador y trazas de hierro de otro acero | NTP 527 | Leído |
| 48 accidentes por pérdida de control (MARS); error humano de procedimiento 17 (35,4 %), impurezas 6 (12,5 %), entrada de agua 2 (4,2 %); causas no excluyentes | NTP 529, tabla 5 (copia `src_termo/n529.body.txt`) | Leído y recalculado (17/48, 6/48, 2/48) |
| Caso β-picolina (materias primas de antibióticos, agitación por aire, capa superior, evaporación, junta, deflagración, dos operarios muertos, causas) | NTP 529, accidentes tipo | Leído |
| Caso óxido de etileno y glicerol (115 a 125 °C, válvula cerrada, alarma desconectada, subió la consigna, tres toneladas, dos heridos graves, conclusión) | NTP 529, accidentes tipo | Leído |
| Determinar velocidad de desprendimiento de gases normal y anormal; medidas de protección (alivio, despresurización, inhibidor, vertido a diluyente frío) | NTP 527 | Leído |
| 1,6 kmol × 24,5 m³/kmol = 39,2 m³; 19,6 m³/h en 2 h | Valores de ejemplo declarados; volumen molar a 25 °C y 1 atm (24,46 m³/kmol, P·V = n·R·T) | Recalculado |
| Adiciones: reactivo erróneo, cantidad equivocada, momento equivocado; manuales más inseguras | NTP 527, apartado «Adiciones» | Leído |
| Pérdida de agitación: mezcla pobre, acumulación, capas que reaccionan al restablecer la agitación; interconexión que corta la adición | NTP 527, apartado «Agitación» | Leído |
| Grignard: retraso en el arranque y acumulación del haluro | Solo fragmentos de buscador (resumen de un artículo de Org. Process Res. Dev. de 1999 y nota de aplicación de un fabricante de calorímetros) | Fragmento de buscador; en el texto se dice que solo se vio en resúmenes y no se dan cifras |
| Quiz: 400 × 600 / (2400 × 2,0) = 50 °C; 70 + 64,8 × 0,80 = 121,84 °C; 4 × 25 = 100 kW; 1,0 × 24,5 = 24,5 m³ | Valores de ejemplo | Recalculado |

## Lo que se quería incluir y se dejó fuera

- **Accidente de T2 Laboratories (2007)**: www.csb.gov no es accesible desde esta sesión (error de red); solo se vieron fragmentos del buscador. No se cita.
- **Bhopal** (agua en el depósito de isocianato de metilo, NTP 529): verificado, pero se quitó al recortar el texto; ya aparece en «Alarmas, enclavamientos y sistemas de seguridad a fondo».
- **Sensibilidad al oxígeno de los catalizadores de paladio** en los acoplamientos: no se encontró en una fuente leída; en el texto solo se justifica la inertización por los disolventes inflamables.
- **Riesgos concretos de la desprotección Boc** (exotermia inicial, isobuteno que se queda disuelto y se libera después, lavadores ácidos): solo en fragmentos de buscador (guía ACS GCI, presentación de Purdue P2SAC); no se incluyen.
- **Criterios de criticidad de Stoessel, TMRad, MTT y la regla de margen de temperatura respecto al inicio del DSC**: no se pudieron leer en una fuente gratuita accesible. Se omiten; no se da ningún margen numérico.
- **Calor de reacción de acilaciones, Grignard o formación de sales concretas**: sin fuente leída; todos los números de calor son valores de ejemplo.
- **Productos de la hidrólisis del cloruro de tionilo** (SO₂ y HCl): no leídos en una fuente oficial; el texto solo dice que libera gases tóxicos (EUH029).
- **ICH Q7 8.20** (hidrogenación terminada por muestreo): verificado, pero se quitó al recortar porque ya está en «Velocidad de reacción a fondo».
- Las clasificaciones CLP son las del texto original de 2008; no se ha comprobado si alguna adaptación posterior las cambió.
