# Fuentes de la lección `atex-a-fondo`

Fecha de consulta: 20 de noviembre de 2026. Todos los documentos se descargaron con `curl` y se leyeron en texto (`pdftotext` o HTML limpio). Dos imágenes (la señal del anexo III y el hexágono Ex) se comprobaron mirando la imagen.

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| RD681 | Real Decreto 681/2003, de 12 de junio (texto consolidado BOE-A-2003-12099): artículos 1 a 8, anexos I, II y III | https://www.boe.es/buscar/act.php?id=BOE-A-2003-12099 |
| RD681-img | Imagen de la señal del anexo III del RD 681/2003 | https://www.boe.es/datos/imagenes/disp/2003/145/12099_001.png |
| RD144 | Real Decreto 144/2016, de 8 de abril (texto consolidado BOE-A-2016-3539): anexo I (categorías del grupo II) y anexo II, punto 1.0.5 (marcado) | https://www.boe.es/buscar/act.php?id=BOE-A-2016-3539 |
| CLP | Reglamento (CE) n.º 1272/2008, DOUE L 353 de 31.12.2008: anexo I, sección 2.6 (tablas 2.6.1 y 2.6.2) y anexo VI, tabla 3.1 | https://www.boe.es/doue/2008/353/L00001-01355.pdf |
| R878 | Reglamento (UE) 2020/878 (anexo II de REACH, requisitos de las fichas de datos de seguridad), DOUE L 203 de 26.6.2020: sección 9, epígrafe 9.1, letras f) a i) y nota 7 | https://www.boe.es/doue/2020/203/L00028-00058.pdf |
| GUIA | INSST, «Guía técnica para la evaluación y prevención de los riesgos derivados de atmósferas explosivas en el lugar de trabajo», edición de junio de 2021: comentarios a los artículos 2 a 8 y a los anexos I, II y III; apéndice 2 (apartados 2.2 y 3, tabla 5), apéndice 3, apéndice 4 (tablas 8 y 14) y apéndice 5 | https://www.insst.es/documents/94886/789467/ATM%C3%93SFERAS+EXPLOSIVAS.pdf |
| NTP663 | INSST, NTP 663 «Propiedades fisicoquímicas relevantes en la prevención del riesgo químico» (entera) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/19-serie-ntp-numeros-646-a-680-ano-2004/ntp-663.-propiedades-fisicoquimicas-relevantes-en-la-prevencion-del-riesgo-quimico.- |
| NTP225 | INSST, NTP 225 «Electricidad estática en el trasvase de líquidos inflamables» (entera; es de 1988) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-225-electricidad-estatica-en-el-trasvase-de-liquidos-inflamables |
| NTP827 | INSST, NTP 827 «Electricidad estática en polvos combustibles (I)» (apartados 1 a 3 y tabla 2) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-827 |
| NTP828 | INSST, NTP 828 «Electricidad estática en polvos combustibles (II): medidas de seguridad» (apartado 1 y comienzo del 2) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-828 |

Nota práctica: el enlace «descargar» de las páginas de las NTP redirige a la propia página cuando se usa `curl`. El PDF se obtiene con `https://www.insst.es/c/document_library/get_file?uuid=<uuid que aparece en el enlace>&groupId=94886`.

## Afirmación por afirmación

| Afirmación de la lección | Documento y apartado | Cómo se comprobó |
|---|---|---|
| El combustible tiene que estar íntimamente mezclado con el aire; las formas son gas, vapor, niebla y polvo | GUIA, comentario al artículo 2 | Leído en el documento |
| Lo que arde es la mezcla de vapor y aire, no el líquido | NTP663, «Punto de inflamación» (el líquido «desprende la cantidad suficiente de vapor para que se produzca la inflamación de la mezcla vapor-aire»); NTP225, «Control de atmósferas inflamables» | Leído en el documento |
| La mayoría de los vapores inflamables pesan más que el aire y se acumulan a ras de suelo | NTP663, «Densidad relativa de vapor»; GUIA, comentario al artículo 4.2 | Leído en el documento |
| Definición de punto de inflamación; cuanto más bajo, más peligro | NTP663, «Punto de inflamación o de destello (flash point)» | Leído en el documento |
| Tolueno: punto de inflamación 4 °C. Éter etílico: −45 °C | NTP663, mismo apartado | Leído en el documento |
| Los límites se dan en % en volumen; por debajo o por encima no hay ignición | NTP663, «Límites de inflamabilidad - explosividad»; GUIA, comentario al artículo 2 | Leído en el documento |
| Tolueno 1,2 % a 7 %; éter etílico 1,7 % a 48 % | NTP663, mismo apartado | Leído en el documento (otras fuentes dan 1,1 % para el tolueno; la lección dice que manda la ficha del producto) |
| «Límite de explosividad» y «límite de inflamabilidad» son sinónimos | R878, nota 7 de la sección 9 | Leído en el documento |
| Por encima del LSE, si entra aire la mezcla cruza el rango | Razonamiento propio a partir de la definición de los límites | Razonado (no es cita) |
| El rango se ensancha al calentar (baja el LIE, sube el LSE) | GUIA, nota 6 del comentario al artículo 2 y apéndice 2, apartado 2.2.2 | Leído en el documento |
| El LIE no es una barrera; hay que adoptar un coeficiente de seguridad | GUIA, apéndice 2, apartado 2.2 | Leído en el documento |
| Definición de temperatura de autoignición; la mayoría de líquidos combustibles entre 450 y 600 °C; éter etílico 160 °C | NTP663, «Temperatura de autoignición» | Leído en el documento |
| No confundir temperatura de ignición con punto de inflamación | GUIA, apéndice 4, apartado 2.1.2 | Leído en el documento |
| Analogías (taza de café, hoguera, sartén, moqueta, tronco y serrín) | Recursos didácticos propios | No son datos |
| Sección 9, epígrafe 9.1: f) inflamabilidad, g) límite superior e inferior de explosividad, h) punto de inflamación, i) temperatura de auto-inflamación; para líquidos inflamables se indica al menos el límite inferior | R878, anexo, sección 9, epígrafe 9.1 | Leído en el documento |
| Líquido inflamable: punto de inflamación no superior a 60 °C | CLP, anexo I, 2.6.1 | Leído en el documento |
| Criterios de las categorías 1, 2 y 3 | CLP, anexo I, tabla 2.6.1 | Leído en el documento |
| Palabras de advertencia y frases H224, H225, H226 (texto literal) | CLP, anexo I, tabla 2.6.2 | Leído en el documento |
| Éter dietílico: Flam. Liq. 1, H224. Tolueno, acetona, etanol, propan-2-ol y acetato de etilo: Flam. Liq. 2, H225 | CLP, anexo VI, tabla 3.1 (n.º de índice 603-022-00-4, 601-021-00-3, 606-001-00-8, 603-002-00-5, 603-117-00-0, 607-022-00-5) | Leído en el documento (versión original de 2008; no se han revisado las adaptaciones posteriores) |
| 1 % en volumen = 10 000 ppm | Definición de ppm | Recalculado |
| Ejemplo 1: 20 % de 1,2 % = 0,24 % = 2400 ppm | Cálculo propio con el LIE de NTP663 | Recalculado con python |
| La referencia al «20 % del límite inferior» como margen | NTP225, «Control de atmósferas inflamables» (ventilación por debajo del 20 % del L.I.I.) | Leído en el documento; en la lección solo se usa como ejemplo de límite fijado por la planta |
| Ejemplo 2: 0,30 / 1,2 = 25 % del LIE | Cálculo propio | Recalculado con python |
| Presión de vapor del tolueno a 20 °C: 2,9 kPa; 1 atmósfera = 101,3 kPa | NTP663, «Presión de vapor» | Leído en el documento |
| Ejemplo 3: 2,9 / 101,3 = 2,86 % en volumen, dentro del rango | Cálculo propio (fracción en volumen = presión de vapor / presión total) | Recalculado con python |
| Definición literal de atmósfera explosiva | RD681, artículo 2 | Leído en el documento |
| Obligación de clasificar en zonas | RD681, artículo 7.1 | Leído en el documento |
| Definiciones literales de las zonas 0, 1, 2, 20, 21 y 22 | RD681, anexo I, apartado 2 | Leído en el documento; copiadas literalmente |
| Ejemplos de cada zona | GUIA, comentario al anexo I | Leído en el documento |
| Señal: triangular, letras negras sobre fondo amarillo, bordes negros; letras «EX»; es la misma para todas las zonas | RD681, anexo III y su imagen (RD681-img); GUIA, comentario al anexo III | Leído en el documento e imagen vista |
| Contenido de la evaluación de riesgos, «incluidas las descargas electrostáticas» | RD681, artículo 4.1 | Leído en el documento |
| Documento de protección contra explosiones | RD681, artículo 8 | Leído en el documento |
| Formación e información | RD681, anexo II, parte A, punto 1.1 | Leído en el documento |
| Instrucciones por escrito y permisos, expedidos antes del comienzo por persona expresamente autorizada | RD681, anexo II, parte A, punto 1.2 | Leído en el documento |
| Calzado antiestático y ropa de trabajo adecuada | RD681, anexo II, parte A, punto 2.3 | Leído en el documento |
| Alarmas y desalojo antes de alcanzar condiciones de explosión | RD681, anexo II, parte A, punto 2.6 | Leído en el documento |
| Categorías de aparatos admitidas en cada zona | RD681, anexo II, parte B | Leído en el documento |
| Categoría 1 «muy alto», 2 «alto», 3 «normal» | RD144, anexo I, apartado 2 | Leído en el documento |
| Marcado: CE, marcado específico de protección contra explosiones, grupo, categoría, letra G o D | RD144, anexo II, punto 1.0.5, letras f) y g) | Leído en el documento |
| El marcado específico es un hexágono con «Ex»; grupo II para usos distintos de la minería | GUIA, apéndice 4, tabla 8 | Leído en el documento e imagen de la tabla vista |
| Clases de temperatura T1 a T6 (450, 300, 200, 135, 100, 85 °C); no debe exceder la temperatura de ignición | GUIA, apéndice 4, tabla 14 | Leído en el documento |
| Para el éter etílico (160 °C) hace falta T4 o superior | Cálculo propio con NTP663 y tabla 14 | Recalculado |
| Un móvil o una linterna corrientes no entran en zona | Consecuencia de RD681, anexo II, partes A.2.4 y B; GUIA, apéndice 2, apartado 3 («equipos móviles, herramientas y dispositivos que se puedan introducir puntualmente») | Deducido; ninguna fuente leída nombra los teléfonos |
| Trece fuentes de ignición y sus ejemplos | GUIA, apéndice 2, tabla 5 | Leído en el documento |
| Detalle y control de cada fuente (polvo sobre equipos, vehículos, herrumbre y aluminio, material eléctrico, refrigeración, sol y botellas) | GUIA, apéndice 5 | Leído en el documento |
| «No fumar» y trabajos en caliente como actuaciones prohibidas | GUIA, comentario al anexo II, punto 1.1 | Leído en el documento |
| Cualquier llama tiene energía suficiente; décimas de milijulio bastan en muchas mezclas | GUIA, apéndice 5 | Leído en el documento |
| Cómo se genera la carga en líquidos | NTP225, «Formación y acumulación de la electricidad estática» | Leído en el documento |
| Carga en polvos: tamizado, llenado, molienda, transporte neumático | NTP827, tabla 1 | Leído en el documento |
| Medidas rigurosas por encima de 10¹² Ω·cm | NTP225, mismo apartado | Leído en el documento |
| Resistividad del tolueno 10¹⁴ Ω·cm | NTP663, «Resistividad eléctrica» | Leído en el documento |
| Persona: unos 10 000 V, 200 a 300 pF, unos 10 mJ; vapores del orden de 0,25 mJ | NTP225, introducción y «Cargas electrostáticas de personas» | Leído en el documento |
| Ejemplo 4: 0,5 × 200 pF × (10 000 V)² = 10 mJ; 10 / 0,25 = 40 | Cálculo propio | Recalculado con python |
| Conexión equipotencial y puesta a tierra; resistencia hasta 1 MΩ | GUIA, apéndice 5, apartado 2.A; NTP225, «Interconexiones equipotenciales y puesta a tierra» | Leído en el documento |
| Pinzas antes de empezar y lejos de las bocas | NTP225, mismo apartado | Leído en el documento |
| Evitar chorro libre; tubo de llenado hasta el fondo; velocidad muy reducida hasta que el tubo esté sumergido | NTP225, «Control de la velocidad de flujo...» | Leído en el documento |
| Mangueras conductoras o con alma metálica conectada | NTP225, «Interconexiones...» | Leído en el documento |
| Tiempos de relajación: 30 s y 1 min | NTP225, «Control de los tiempos de relajación» | Leído en el documento |
| La puesta a tierra no evita la carga interna del líquido | NTP225, «Peligros de las descargas...» | Leído en el documento |
| Poner a tierra un aislante no disipa su carga | NTP828, apartado 1 | Leído en el documento |
| Calzado: hace falta suelo conductor; nada aislante entre plantilla y pie; no quitarse la ropa en atmósfera explosiva | GUIA, apéndice 5, apartado 1 (A y B) y comentario al anexo II, punto 2.3 | Leído en el documento |
| Polvo: partículas de más de 0,5 mm tienen baja probabilidad de explosión; más fino y seco, más peligro | GUIA, comentario al artículo 2 y figura 6 | Leído en el documento |
| El riesgo existe en la industria farmacéutica; el serrín es polvo combustible | NTP827, apartado 1 | Leído en el documento |
| Las capas de polvo son fuente de atmósfera explosiva | RD681, anexo I, apartado 1 | Leído en el documento |
| Explosión primaria y explosiones en cadena; eliminar cualquier depósito visible | GUIA, comentario al anexo I, apartado 1 | Leído en el documento |
| Limpieza por aspiración o paños húmedos, nunca barrido ni soplado; el calor del equipo puede inflamar la capa | GUIA, apéndice 3, apartado 2.2 | Leído en el documento |
| Un gas inflamable junto al polvo rebaja su energía mínima de ignición aunque esté por debajo del LIE | NTP827, tabla 2 (descarga en brocha); GUIA, comentario al artículo 2 (mezclas híbridas) | Leído en el documento |
| Sacudir bolsas de plástico al final de un vaciado en la boca de un reactor produce descargas | NTP827, tabla 2 | Leído en el documento |
| Orden de las medidas: impedir la atmósfera, evitar la ignición, atenuar los efectos | RD681, artículo 3 | Leído en el documento |
| Ejemplos de medidas de cada grupo | GUIA, apéndice 3 | Leído en el documento |
| Evitar la atmósfera es lo más fiable; controlar solo los focos no basta | NTP225, «Control de atmósferas inflamables» | Leído en el documento |
| Regla 3, «sobre metal limpio» | NTP828, apartado 1 (una capa de pintura o suciedad aumenta la resistencia) | Leído en el documento |
| Regla 9, no accionar interruptores | GUIA, tabla 5 («apagado y encendido de circuitos» como fuente de ignición) | Deducido |
| Regla 9, el olor no sirve de alarma | NTP663, «Color y olor» | Leído en el documento |
| Contenido del permiso de trabajo (lugar, personal, trabajo, riesgos y medidas, equipos de protección, comprobación final) | GUIA, comentario al anexo II, punto 1.2, y apéndice 3 | Leído en el documento |
| Antes de un trabajo con fuentes de ignición se comprueba que no hay atmósfera explosiva | GUIA, comentario al artículo 5 | Leído en el documento |
| Bomba neumática portátil para bidones (ejemplo de planta) | NTP225, «Instalación eléctrica y equipos protegidos» | Leído en el documento |
| LIE del hexano 1,1 % (pregunta 1) | GUIA, comentario al anexo II, punto 2.2 (ejemplo de la regla de Le Chatelier) | Leído en el documento |
| Resultados de las preguntas numéricas: 2200 ppm; 37,5 %; 2,86 %; 9,6 mJ | Cálculos propios | Recalculado con python |

## Lo que quería incluir y dejé fuera

- **Datos de más disolventes** (acetona, etanol, isopropanol, heptano: punto de inflamación, límites y autoignición) y la **temperatura de autoignición del tolueno**. Las fichas internacionales de seguridad química a las que enlaza el INSST están en chemicalsafety.ilo.org, que no es accesible desde esta sesión. Solo se usan los valores que da la NTP 663. Por la misma razón no he podido contrastar el rango «2,5 % a 13 %» de la acetona que da la lección introductoria `incendio-y-atex`.
- **Niveles de alarma habituales de los detectores** (10 %, 20 %, 40 % del LIE). Ni el real decreto ni la guía dan cifras. La única cifra leída es el 20 % del límite inferior de la NTP 225, y se refiere a ventilación.
- **Que los detectores marquen en «% del LIE»**: es práctica común, pero ningún documento leído lo dice así; la lección lo plantea solo como ejemplo.
- **Modos de protección** (Ex d, Ex e, Ex i), **grupos de gas** IIA, IIB, IIC y **niveles EPL**: la guía los resume, pero proceden de normas de pago (UNE-EN 60079) que no he leído; los omití también por extensión.
- **Herramientas antichispa de aleaciones concretas** (bronce, cobre-berilio): la guía solo habla de «selección adecuada de materiales».
- **Teléfonos móviles**: ninguna fuente leída los nombra. La regla se deduce de la obligación general sobre equipos y se indica así en la tabla.
- **Parámetros de explosividad del polvo** (clases St, Kst, concentración mínima explosiva, energía mínima de ignición de principios activos) y datos de polvos farmacéuticos concretos: no hay fuente gratuita verificada.
- **Distancias de extensión de las zonas**: dependen de normas de pago y del estudio de cada planta.
- **Cifras de la NTP 225 que no he querido dar como regla**: velocidad máxima de trasvase (v·d ≤ 0,5 m²/s, 7 m/s), reducción del oxígeno «al 11 %» y resistencias de calzado de una norma americana. La nota es de 1988 y la cifra de oxígeno chocaría con la lección `inertizacion-a-fondo`, que remite al límite fijado por cada planta.
- **Humedad relativa mínima del 50 %** en locales con riesgo por electricidad estática (anexo III del Real Decreto 486/1997): solo la he visto citada en la guía y en la NTP 828, no en el BOE.
- **Texto de las Directivas 1999/92/CE y 2014/34/UE**: eur-lex no es accesible; solo se citan los reales decretos que las transponen.
- **Sistema Globalmente Armonizado (unece.org)**: el servidor devolvió error 403; no se usó.
- **NTP 567, 374 y 1138**: descargadas, pero no las leí enteras y no se cita nada de ellas.
- **Fórmula de la guía para corregir los límites con la temperatura**: la del LSE aparece con un signo que no cuadra con el texto (que dice que el LSE aumenta), así que solo se da la idea cualitativa.
