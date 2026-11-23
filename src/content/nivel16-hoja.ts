import type { Lesson } from "./types";

export const hojaDeProduccionAFondo: Lesson = {
  slug: "hoja-de-produccion-a-fondo",
  level: 16,
  order: 4,
  title: "La hoja de producción a fondo: de la instrucción maestra a la revisión del lote",
  titleEn: "The batch production record in depth: from the master production instruction to batch record review",
  minutes: 34,
  summary:
    "Qué documentos hay en una planta, qué lleva la instrucción maestra, qué se anota en cada paso de la hoja del lote, cómo se verifica, cómo se calcula el rendimiento, quién revisa el lote y cuánto tiempo se guarda todo, apartado por apartado de ICH Q7.",
  body: `
En la lección anterior aprendiste las reglas básicas para escribir en un documento de planta. Aquí vas a ver el recorrido completo de la hoja de producción: de dónde sale, qué se anota en ella, quién la revisa y cuánto tiempo se guarda.

Casi todo sale de la sección 6, «Documentación y registros», de la guía ICH Q7, la norma de correcta fabricación (*Good Manufacturing Practice*, GMP) para principios activos. Un número como 6.52 es el apartado de esa guía donde está escrito. La guía usa la palabra «debería» (*should*). Su introducción aclara que son recomendaciones que se espera que se apliquen, salvo que se demuestre que no proceden o que otra solución garantiza al menos lo mismo.

### Una idea para empezar: la receta y el diario
Piensa en una pastelería que hace siempre la misma tarta. Tiene dos papeles:

- La **receta**, aprobada por el dueño. Dice qué hay que hacer. No se escribe en ella.
- El **diario de hoy**: una copia de la receta con huecos, donde el pastelero apunta lo que ha hecho de verdad.

En tu planta la receta es la instrucción maestra de producción y el diario es la hoja de producción del lote. Dentro de cinco años nadie se acordará de ese lote: solo quedará la hoja.

### La familia de documentos de una planta

| Documento | Pregunta que responde | Dónde está en ICH Q7 |
|---|---|---|
| **Especificación** (*specification*) | ¿Qué tiene que cumplir este material para ser aceptable? | 6.17 |
| **Instrucción maestra de producción** (*master production instruction*) | ¿Cómo se fabrica este producto, siempre igual? | 6.40 y 6.41 |
| **Hoja de producción del lote** (*batch production record*) | ¿Cómo se fabricó este lote en concreto? | 6.50 a 6.52 |
| **Registro de limpieza y uso de equipos** (*equipment cleaning and use record*) | ¿Qué ha pasado por este equipo, cuándo y quién lo limpió? | 6.20 y 6.21 |
| **Registros de materias primas** (*records of raw materials*) | ¿De dónde vino cada material, qué se le analizó y dónde se usó? | 6.30 |
| **Registros de laboratorio** (*laboratory control records*) | ¿Qué análisis se hicieron y con qué datos? | 6.60 |
| **Procedimiento** (*standard operating procedure*, SOP) | ¿Cómo se hace una tarea que se repite, como limpiar o pesar? | 6.10 y glosario |

- **Especificaciones** (6.17). Las hay para materias primas, para intermedios cuando hace falta, para el principio activo y para los materiales de etiquetado y envasado. Los controles en proceso también tienen criterios de aceptación escritos.
- **Equipos** (6.20). El registro de un equipo principal recoge fecha, hora si procede, producto y número de cada lote que ha pasado por él, y quién lo limpió y lo mantuvo. Si el equipo está dedicado a un solo producto, ese registro puede ir dentro de la hoja del lote (6.21).
- **Materias primas** (6.30). Se guarda el fabricante, el proveedor, la cantidad, el número asignado al recibirlas, los análisis y dónde se han usado. El número de lote que copias de un bidón une tu hoja con ese registro.

Todos se preparan, revisan, aprueban y reparten según un procedimiento escrito (6.10), y sus versiones se controlan guardando el historial de revisiones (6.11).

### La instrucción maestra: la receta aprobada
Para que todos los lotes salgan iguales, cada intermedio y cada principio activo tiene su instrucción maestra. La prepara, fecha y firma una persona, y otra de la unidad de calidad (*quality unit*) la comprueba de forma independiente, la fecha y la firma (6.40).

Según el apartado 6.41, debe incluir:

1. **El nombre** del intermedio o principio activo y, si lo hay, el código del documento.
2. **La lista completa de materias primas e intermedios**, con nombres o códigos lo bastante precisos para distinguir cualquier calidad especial.
3. **La cantidad o la proporción de cada uno**, con su unidad. Si no es fija, el cálculo para cada tamaño de lote. Las variaciones solo se incluyen si están justificadas.
4. **El lugar de producción y los equipos principales** que se van a usar.
5. **Las instrucciones detalladas de producción**: el orden de los pasos, los rangos de los parámetros de proceso, el muestreo y los controles en proceso (*in-process controls*) con sus criterios de aceptación, los tiempos límite cuando proceda y los rangos de rendimiento esperado.
6. **Las precauciones especiales**, o la referencia a ellas.
7. **Las instrucciones de almacenamiento**: materiales de etiquetado y envasado y condiciones especiales con sus tiempos límite.

Lo que verás impreso en tu hoja (rangos, tiempos máximos, rendimiento esperado) viene de aquí. Tú no decides esos valores ni los cambias.

### La hoja del lote: una copia controlada con número propio
Para cada lote se emite una hoja. Antes de entregarla se comprueba que es **la versión correcta** y una **reproducción legible y exacta** de la instrucción maestra (6.50). Con una fotocopia antigua se fabricaría con una receta que ya no vale.

Al emitirla, la hoja recibe un **número de lote o de identificación único**, y se **fecha y se firma** (6.51). El número de lote es, según el glosario de la guía, una combinación única de números, letras o símbolos que identifica el lote y permite reconstruir su historia de producción y distribución. Es como la matrícula de un coche. Si te dan una hoja sin número de lote, sin firma de emisión o con páginas que no cuadran, no empieces. Avisa.

### Qué debe quedar anotado en cada paso
El apartado 6.52 enumera en doce puntos lo que la hoja debe recoger al completar cada paso significativo:

| Qué pide el 6.52 | Ejemplo en planta (ficticio) |
|---|---|
| Fechas y, cuando proceda, horas | «14/01/2027, inicio de carga 09:12, fin 09:40» |
| Identidad de los equipos principales | «Reactor R-301», no «el reactor» |
| Pesos, medidas y números de lote de materias primas, intermedios o materiales reprocesados | «KS-40, lote MP-26-0412, 180,4 kg» |
| Resultados reales de los parámetros críticos de proceso | «62,8 °C», no «60 a 65 °C» |
| Cualquier muestreo realizado | «Muestra M-1, fondo de R-301, 12:10» |
| Firmas de quien hace y de quien supervisa o comprueba cada paso crítico | «Hecho: NR. Verificado: IS» |
| Resultados de controles en proceso y de laboratorio | «Pérdida por secado 0,4 % (límite: no más de 0,5 %)» |
| Rendimiento real en las fases que corresponda | «214,5 kg secos, 85,8 %» |
| Descripción del envase y de la etiqueta | «5 bidones de 40,0 kg y 1 de 14,5 kg, doble bolsa» |
| Etiqueta representativa, si el producto se comercializa | Una etiqueta de muestra pegada en la hoja |
| Desviaciones, su evaluación y la investigación, o su referencia | «Parada de agitación de 4 min, ver desviación DV-27-008» |
| Resultados de los análisis de liberación | El boletín de análisis final del lote |

El glosario de ICH Q7 llama crítico a un paso, condición, ensayo o parámetro que tiene que mantenerse dentro de unos criterios fijados de antemano para que el principio activo cumpla su especificación.

### Cómo se anota
Según el apartado 6.14, las anotaciones se hacen:

- **De forma indeleble.** En papel, con tinta que no se pueda borrar.
- **En los espacios previstos.** En la casilla, no en el margen ni en un papel aparte.
- **Justo después de hacer la actividad.** Ni antes, ni al final del turno.
- **Identificando a quien anota.**

Las correcciones van **fechadas y firmadas, dejando legible la anotación original**. Una bien hecha:

~~18,4~~ 180,4 kg. NR, 14/01/2027, error al escribir.

Se lee el dato antiguo y el nuevo, y se sabe quién lo cambió y cuándo. El motivo no lo exige el 6.14; el Capítulo 4 de las normas europeas para medicamentos lo pide «cuando proceda» (apartado 4.9). Sigue tu procedimiento.

Tres correcciones mal hechas:

| Lo que se hizo | Por qué está mal |
|---|---|
| Tapar el 18,4 con corrector o con un tachón y escribir encima | El original ya no se puede leer |
| Convertir un 3 en un 8 repasando el número | No se lee el original y no hay fecha ni firma |
| Tachar con una raya y escribir el valor nuevo, sin nada más | Falta la fecha y la firma de quien corrige |

### La segunda persona: qué significa firmar como verificador
El apartado 8.12 dice que las pesadas, medidas o subdivisiones críticas de materiales deben ser **presenciadas** (*witnessed*) o tener un control equivalente. El 8.13 extiende lo mismo a otras actividades críticas. Y el 6.52 pide dos firmas en cada paso crítico: la de quien lo hace y la de quien lo supervisa directamente o lo comprueba.

El mismo 8.12 añade que, antes de usar un material, el personal de producción comprueba que es el que indica la hoja.

¿Qué significa firmar como verificador? El glosario define la firma como el registro de la persona que realizó una acción o una revisión. Si firmas como verificador, dejas escrito que tú has presenciado o comprobado ese paso. Es como el copiloto que repasa la lista antes de despegar: no sirve de nada si la marca sin mirar.

- Si no estabas delante en la pesada, no la firmes después.
- Verificar es mirar el dato en su origen: la etiqueta del bidón, la pantalla de la báscula. No basta con leer lo que ha escrito tu compañero.
- Qué pasos llevan segunda firma lo decide la hoja, no tú.

En pantalla pasa igual: si un dato crítico se teclea a mano, lo comprueba además un segundo operador o el propio sistema (5.45).

### Rendimientos: cuánto salió frente a cuánto debía salir
- **Rendimiento teórico** (*theoretical yield*): lo que saldría, según lo cargado, si no se perdiera nada.
- **Rendimiento esperado** (*expected yield*): lo que se prevé obtener de verdad, en cantidad o en porcentaje del teórico, según datos anteriores.
- **Rendimiento real** (*actual yield*): lo que has pesado tú.

**rendimiento (%) = cantidad real obtenida / cantidad teórica × 100**

Ejemplo: teórico 250,0 kg, rango esperado del 82 al 90 %. Pesas 214,5 kg secos: 214,5 / 250,0 × 100 = 85,8 %. Está dentro del rango.

El apartado 8.14 pide comparar el rendimiento real con el esperado en los pasos que fije el proceso, e investigar las desviaciones de rendimiento de los pasos críticos para saber si afectan a la calidad del lote.

El rendimiento es un chivato. Si sale menos de lo esperado, puede que haya producto retenido en un filtro o en una línea. Si sale más, puede que esté húmedo o que una pesada esté mal. Un 104 % no es una buena noticia: algo no cuadra.

Tu papel: pesar, calcular, anotar el valor real y avisar si queda fuera del rango.

### Cómo se revisa un lote antes de liberarlo
Al terminar el último paso empieza la revisión del lote (*batch record review*), apartados 6.70 a 6.73:

1. **Hay un procedimiento escrito** para revisar y aprobar los registros de producción y de laboratorio, incluidos envasado y etiquetado. Sirve para decidir si el lote cumple antes de liberarlo (6.70).
2. **Producción revisa sus hojas.** Entre las responsabilidades de producción está revisar todas las hojas y asegurarse de que están completas y firmadas (2.3).
3. **La unidad de calidad revisa y aprueba los pasos críticos** antes de liberar un principio activo. Los no críticos puede revisarlos personal cualificado de producción, con procedimientos aprobados por calidad (6.71).
4. **Todas las desviaciones, investigaciones y resultados fuera de especificación** (*out of specification*, OOS) se revisan dentro de la revisión del lote, antes de liberarlo (6.72).
5. **Quien libera o rechaza un principio activo es la unidad de calidad**, y eso no se delega (2.22). Sí puede delegar en producción la liberación de intermedios que no salen de la empresa (6.73).

¿Y las desviaciones? Todas se documentan y se explican; las críticas se investigan (8.15), y la investigación se extiende a otros lotes que puedan estar relacionados (6.53). Una desviación bien anotada no «estropea» el lote: le da a calidad lo que necesita para decidir.

### Cuánto tiempo se guardan los registros
Un procedimiento de la planta fija cuánto se conserva cada documento (6.12). Para los registros de producción, control y distribución, el 6.13 da los mínimos:

- Producto con **fecha de caducidad** (*expiry date*): al menos 1 año después de la caducidad del lote. Un lote que caduca el 31/03/2029 se guarda, como mínimo, hasta el 31/03/2030.
- Producto con **fecha de reanálisis** (*retest date*): al menos 3 años después de que el lote se haya distribuido por completo. Si se terminó de distribuir el 15/06/2027, se guarda hasta el 15/06/2030 como mínimo. Se cuenta desde la distribución, no desde la fecha de reanálisis.

Son mínimos: tu empresa puede fijar plazos más largos. Durante ese tiempo, los originales o sus copias deben poder consultarse con facilidad en la instalación donde se hizo el trabajo (6.15).

### Papel, electrónico e híbrido
ICH Q7 admite documentos en papel o electrónicos (6.10). Las firmas electrónicas deben estar autenticadas y ser seguras (6.18). Un sistema informático debe impedir accesos y cambios no autorizados y registrar cada cambio de un dato: qué había antes, quién lo cambió y cuándo (5.43). Es la regla de la corrección a mano, hecha por el ordenador.

Un sistema **híbrido** tiene parte en papel y parte en pantalla. El Capítulo 4 de las normas europeas lo reconoce y pide que quede definida la relación entre ambas partes (apartado 4.1). Para ti significa saber cuál es el registro oficial de cada dato: el que guarda el sistema o el que escribes tú. Lo verás en el nivel 20, en las lecciones sobre integridad de datos, registro de auditoría, firma electrónica y archivo.

### Los diez errores más habituales y cómo evitarlos

| Error | Apartado | Cómo evitarlo |
|---|---|---|
| 1. Rellenar pasos de memoria al final del turno | 6.14 | Anota cada paso al terminarlo |
| 2. Rellenar o firmar un paso antes de hacerlo | 6.14 | Primero se hace, después se anota |
| 3. Escribir el valor objetivo o «correcto» en vez de la lectura | 6.52 | Copia lo que marca el instrumento, con decimales y unidad |
| 4. Olvidar la fecha o la hora | 6.52 | Mira el reloj oficial y anota antes de seguir |
| 5. Copiar el lote del material de un listado y no de la etiqueta | 6.52 y 8.12 | Lee la etiqueta del envase y compárala con la hoja |
| 6. Usar otro equipo y no dejarlo escrito | 6.52 y 6.20 | Anota el código del equipo usado de verdad y avisa |
| 7. Firmar como verificador sin haber presenciado el paso | 8.12 y 6.52 | Si no lo viste, no firmes; avisa |
| 8. Corregir tapando el dato, o sin fecha ni firma | 6.14 | Una raya, valor nuevo, fecha y firma |
| 9. Apuntar en un papel suelto o fuera de la casilla | 6.14 | Anota solo en los espacios de la hoja |
| 10. Callar una incidencia porque «al final no pasó nada» | 6.52 y 8.15 | Anótala y comunícala |

Los números, códigos y formatos de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): él te dice cómo se rellena, se corrige, se verifica y se archiva la hoja en tu empresa.
`,
  plant: `
Turno de mañana del 14/01/2027. Nerea, operadora, fabrica el lote L-27-003 del intermedio ficticio LM-22. Antes de empezar revisa la hoja: lleva el número de lote, la firma de emisión y todas las páginas. Empieza.

La hoja pide cargar en el reactor R-301 entre 179,0 y 181,0 kg de la materia prima KS-40. Nerea lee la etiqueta del bidón: KS-40, lote MP-26-0412. Coincide con la hoja. Llama a Íker, que hoy verifica las pesadas. Íker mira la etiqueta y la pantalla de la báscula BA-12: 180,4 kg. Nerea anota el peso y la hora, firma, e Íker firma al lado. Con las prisas ha escrito «18,4». Lo tacha con una raya, escribe 180,4, pone sus iniciales y la fecha.

Por la tarde, después de centrifugar en la CF-302 y secar en el secadero SV-303, pesa el producto: 195,0 kg. La hoja da un teórico de 250,0 kg y un rango esperado del 82 al 90 %. Hace la cuenta: 195,0 / 250,0 × 100 = 78,0 %. Está por debajo.

Un compañero le dice que ponga 205 kg, «que es casi lo mismo y así entra». Nerea no lo hace. Anota 195,0 kg y 78,0 %, y avisa a Marta, la jefa de turno. Se abre la desviación DV-27-011 y Nerea escribe la referencia en la hoja.

La investigación encuentra producto retenido en la línea de descarga de la centrífuga. Calidad revisa la hoja, la desviación y los análisis, y decide sobre el lote con todos los datos delante. Si Nerea hubiera escrito 205 kg, nadie habría buscado ese producto y la línea habría quedado sucia para el lote siguiente.
`,
  batchRecord: `
Fragmento de una hoja ficticia bien rellenada. La cabecera viene impresa al emitirla; lo demás lo escribe quien fabrica.

**Producto:** LM-22 (intermedio) · **Lote:** L-27-003 · **Instrucción maestra:** IM-LM22, versión 04 · **Emitida:** 13/01/2027, firma A. Soler (calidad) · **Página** 7 de 23

| Paso | Instrucción | Dato real anotado | Fecha y hora | Hecho por | Verificado por |
|---|---|---|---|---|---|
| 12 | Comprobar que R-301 está limpio y liberado | R-301, etiqueta «limpio» del 13/01/2027 | 14/01/2027 08:50 | NR | No se pide |
| 13 (crítico) | Cargar KS-40: 179,0 a 181,0 kg | Lote MP-26-0412. ~~18,4~~ 180,4 kg (NR, 14/01/2027, error al escribir). Báscula BA-12 | 14/01/2027 09:12 a 09:40 | NR | IS |
| 14 (crítico) | Calentar a 60 a 65 °C y mantener 2 h | 62,8 °C al inicio; 63,1 °C al final | 14/01/2027 10:05 a 12:05 | NR | IS |
| 15 | Tomar muestra para control en proceso | Muestra M-1, fondo de R-301 | 14/01/2027 12:10 | NR | No se pide |
| 16 | Anotar el resultado del control. Límite: no más de 0,5 % de KS-40 sin reaccionar | 0,3 %, boletín CP-27-0031 adjunto | 14/01/2027 13:02 | NR | No se pide |
| 21 (crítico) | Pesar producto seco. Teórico 250,0 kg; esperado 82 a 90 % | 214,5 kg; 214,5 / 250,0 × 100 = 85,8 % | 15/01/2027 11:30 | NR | IS |
| 22 | Envasar y etiquetar | 5 bidones de 40,0 kg y 1 de 14,5 kg, doble bolsa. Etiqueta de muestra pegada al dorso | 15/01/2027 12:15 | NR | IS |

**Desviaciones en esta página:** ninguna. NR, 15/01/2027.

Qué mirar en este fragmento:

- Cada dato es el real, con unidad y decimales: «62,8 °C», no «60 a 65».
- El material lleva su número de lote y el equipo, su código.
- La corrección del paso 13 deja ver el dato antiguo y lleva iniciales y fecha.
- Los pasos críticos tienen dos firmas.
- El rendimiento está calculado en la propia hoja y comparado con el rango.
- Los bidones suman lo pesado: 5 × 40,0 + 14,5 = 214,5 kg.
`,
  terms: [
    { es: "Instrucción maestra de producción", en: "Master production instruction", def: "Documento aprobado que dice cómo se fabrica un producto: materiales, cantidades, equipos, pasos, rangos, controles y rendimiento esperado. De él se copia la hoja de cada lote." },
    { es: "Hoja de producción del lote", en: "Batch production record", def: "Copia comprobada de la instrucción maestra, con número de lote único, donde se anota lo que se hizo de verdad en ese lote." },
    { es: "Especificación", en: "Specification", def: "Lista de ensayos y criterios que un material debe cumplir para ser aceptable." },
    { es: "Número de lote", en: "Batch number (lot number)", def: "Combinación única de números, letras o símbolos que identifica un lote y permite reconstruir su historia de producción y distribución." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Parte de la organización, independiente de producción, que cumple las funciones de garantía de calidad y de control de calidad." },
    { es: "Crítico", en: "Critical", def: "Paso, condición, ensayo o parámetro que debe mantenerse dentro de criterios fijados de antemano para que el principio activo cumpla su especificación." },
    { es: "Control en proceso", en: "In-process control (IPC)", def: "Comprobación hecha durante la fabricación para vigilar el proceso y, si hace falta, ajustarlo." },
    { es: "Rendimiento teórico", en: "Theoretical yield", def: "Cantidad que se obtendría en una fase si no hubiera ninguna pérdida ni error, calculada a partir de lo cargado." },
    { es: "Rendimiento esperado", en: "Expected yield", def: "Cantidad o porcentaje del rendimiento teórico que se prevé obtener, según datos anteriores de laboratorio, planta piloto o fabricación." },
    { es: "Rendimiento real", en: "Actual yield", def: "Cantidad que se ha obtenido de verdad en una fase, pesada o medida." },
    { es: "Desviación", en: "Deviation", def: "Apartarse de una instrucción aprobada o de un estándar establecido." },
    { es: "Revisión del lote", en: "Batch record review", def: "Revisión y aprobación de los registros de producción y de laboratorio de un lote, con sus desviaciones, antes de liberarlo." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en la que un material debe volver a examinarse para comprobar que sigue siendo apto para su uso." },
    { es: "Firma", en: "Signature", def: "Registro de la persona que hizo una acción o una revisión: iniciales, firma completa, sello personal o firma electrónica autenticada y segura." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Te entregan la hoja de un lote nuevo. ¿Qué debe traer ya hecho desde su emisión, según ICH Q7?",
      options: [
        "Número de lote único, fecha y firma de quien la emite",
        "Los pesos de las materias primas ya escritos a mano",
        "La firma del verificador en todos los pasos críticos",
        "El rendimiento real del lote anterior, para comparar",
      ],
      answer: 0,
      explain: "El apartado 6.51 pide que la hoja se numere con un número de lote o de identificación único y se feche y firme al emitirla; antes se comprueba que es la versión correcta (6.50).",
    },
    {
      kind: "choice",
      q: "El panel del reactor R-301 marca 62,8 °C y la hoja pide mantener entre 60 y 65 °C. ¿Qué anotas en la casilla?",
      options: [
        "«60 a 65 °C», que es el rango que indica la hoja",
        "«62,8 °C», la lectura real con su unidad",
        "«Correcto», porque está dentro del rango",
        "«63 °C», redondeado para que quede limpio",
      ],
      answer: 1,
      explain: "El apartado 6.52 pide los resultados reales de los parámetros críticos de proceso: se anota lo que marca el instrumento, no el rango ni una valoración.",
    },
    {
      kind: "number",
      q: "La hoja indica un rendimiento teórico de 400,0 kg. Pesas 332,0 kg de producto seco. ¿Cuál es el rendimiento real en porcentaje del teórico?",
      answer: 83,
      tolerance: 0.01,
      unit: "%",
      explain: "Rendimiento = real / teórico × 100 = 332,0 / 400,0 × 100 = 83 %. Después se compara con el rango esperado de la hoja (apartado 8.14).",
    },
    {
      kind: "choice",
      q: "Un compañero pesó una carga crítica mientras tú estabas en otra sala. Al volver te pide que firmes como verificador. ¿Qué haces?",
      options: [
        "Firmo, porque el ticket de la báscula está grapado",
        "Firmo, pero pongo la hora a la que he vuelto",
        "Firmo si el peso anotado está dentro del rango",
        "No firmo y aviso: no he presenciado la pesada",
      ],
      answer: 3,
      explain: "Las pesadas críticas deben ser presenciadas o tener un control equivalente (8.12), y la firma es el registro de quien hizo la comprobación; firmar sin haberla hecho deja escrito algo que no ocurrió.",
    },
    {
      kind: "choice",
      q: "Escribiste 245 kg y el peso real era 254 kg. ¿Cuál de estas correcciones cumple el apartado 6.14 de ICH Q7?",
      options: [
        "Repasar el 4 y el 5 con el bolígrafo hasta que se lea 254",
        "Tapar el 245 con corrector y escribir 254 encima, con fecha",
        "Una raya que deje leer el 245, el 254 al lado, fecha y firma",
        "Tachar el 245 con una raya y escribir 254, sin añadir nada",
      ],
      answer: 2,
      explain: "El 6.14 pide que las correcciones estén fechadas y firmadas y dejen legible la anotación original; las otras opciones ocultan el dato o no dicen quién corrigió ni cuándo.",
    },
    {
      kind: "number",
      q: "Un lote de principio activo tiene fecha de caducidad 30/06/2029. Según el mínimo de ICH Q7, ¿hasta qué año hay que conservar, como poco, su hoja de producción?",
      answer: 2030,
      tolerance: 0.0002,
      unit: "(año)",
      explain: "El apartado 6.13 pide conservar los registros al menos 1 año después de la fecha de caducidad del lote: 2029 + 1 = 2030 (hasta el 30/06/2030 como mínimo).",
    },
    {
      kind: "number",
      q: "Un lote de principio activo con fecha de reanálisis se terminó de distribuir por completo el 10/09/2028. ¿Hasta qué año hay que conservar sus registros, como mínimo?",
      answer: 2031,
      tolerance: 0.0002,
      unit: "(año)",
      explain: "Para productos con fecha de reanálisis, el apartado 6.13 pide al menos 3 años desde que el lote se ha distribuido por completo: 2028 + 3 = 2031 (hasta el 10/09/2031 como mínimo).",
    },
    {
      kind: "choice",
      q: "El rendimiento de un paso crítico sale del 104 %, por encima del rango esperado (82 a 90 %). ¿Qué haces?",
      options: [
        "Anoto el valor real y aviso para que se investigue",
        "Anoto 90 %, que es el máximo que admite la hoja",
        "Lo celebro: cuanto más producto salga, mejor lote",
        "Repito la pesada hasta que dé un valor del rango",
      ],
      answer: 0,
      explain: "El apartado 8.14 pide comparar el rendimiento real con el esperado e investigar las desviaciones en pasos críticos; un exceso puede indicar producto húmedo, impurezas o un error de pesada.",
    },
    {
      kind: "choice",
      q: "¿Quién revisa y aprueba los registros de los pasos críticos antes de liberar un lote de principio activo?",
      options: [
        "El operador que ha fabricado el lote, al acabar su turno",
        "El jefe de turno de producción, sin intervención de nadie más",
        "El almacén, en el momento de preparar el envío al cliente",
        "La unidad de calidad, que es independiente de producción",
      ],
      answer: 3,
      explain: "El apartado 6.71 asigna a la unidad de calidad la revisión y aprobación de los registros de los pasos críticos antes de liberar el principio activo; producción, por su parte, revisa que todas las hojas estén completas y firmadas (2.3).",
    },
    {
      kind: "choice",
      q: "Durante el lote hubo una parada de agitación de 4 minutos y se abrió una desviación. ¿Qué pasa con ella en la revisión del lote?",
      options: [
        "Se archiva aparte y se revisa en la auditoría anual",
        "Se revisa junto con la hoja antes de liberar el lote",
        "Se elimina de la hoja si el análisis final es correcto",
        "Se revisa solo si el cliente presenta una reclamación",
      ],
      answer: 1,
      explain: "El apartado 6.72 dice que todos los informes de desviación, investigación y fuera de especificación se revisan como parte de la revisión del lote, antes de liberarlo.",
    },
  ],
};
