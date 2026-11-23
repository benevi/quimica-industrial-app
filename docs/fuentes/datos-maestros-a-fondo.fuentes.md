# Fuentes de la lección `datos-maestros-a-fondo`

Documentos descargados con curl el 21 de noviembre de 2026, convertidos con `pdftotext -layout` y leídos en el texto (copias en `src_maestros/`):

- **ICH Q7** (Step 4, 10 de noviembre de 2000): https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`). Leídos enteros los apartados 2.22, 2.3, 5.4 (5.40 a 5.49), 6.1 a 6.5, 7.1 a 7.5, 8.1, 9.4, 11.6, 13 y el glosario.
- **EudraLex vol. 4, anexo 11** (revisión 1, en vigor desde el 30 de junio de 2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf (`a11.txt`). Leído entero.
- **Borrador de revisión del anexo 11** (consulta de 2025): página oficial https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en (`cons.html`) y PDF https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (`a11d.txt`). Leídos el índice y los apartados 6.6, 10 y 11.1.
- **PIC/S PI 041-1** (1 de julio de 2021), «Good practices for data management and integrity in regulated GMP/GDP environments»: copia ya descargada de picscheme.org para otra lección (`lecciones/src_custodia/pics041.txt`), releída aquí. Leído el apartado 9.4 entero.
- Lecciones y fichas de la propia app (repo): `src/content/nivel18.ts`, `nivel19.ts`, `nivel20-alcoa.ts`, `nivel13-sistema.ts`, `nivel0-densidad.ts`, `nivel0-unidades.ts`, `nivel16-hoja.ts`, `fds.ts`.

## Afirmaciones normativas

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| La instrucción maestra lista materias primas e intermedios «designados por nombres o códigos» lo bastante específicos para identificar características especiales de calidad | ICH Q7, 6.41 | Leído en el documento |
| La instrucción maestra da la cantidad o proporción de cada material, incluida la unidad de medida; si la cantidad no es fija, incluye el cálculo para cada tamaño de lote | ICH Q7, 6.41 | Leído en el documento |
| La instrucción maestra incluye secuencia, rangos de parámetros, muestreos y controles en proceso con criterios, tiempos y rendimientos esperados; lugar de producción y equipos principales | ICH Q7, 6.41 | Leído en el documento |
| En la recepción se comprueba la correspondencia entre el nombre del proveedor y el nombre interno | ICH Q7, 7.20 | Leído en el documento |
| Antes de emitir la hoja del lote se comprueba que es la versión correcta de la instrucción maestra | ICH Q7, 6.50 | Leído en el documento |
| El estado de los equipos principales se indica en el equipo o por documentación, sistemas de control informáticos u otros medios | ICH Q7, 8.16 | Leído en el documento |
| Especificaciones para materias primas, intermedios cuando haga falta, APIs y materiales de envasado y etiquetado | ICH Q7, 6.17 | Leído en el documento |
| Comprar contra especificación acordada a proveedores aprobados por la unidad de calidad | ICH Q7, 7.12 | Leído en el documento |
| Cambiar el proveedor de una materia prima crítica se trata por control de cambios (sección 13) | ICH Q7, 7.14 | Leído en el documento |
| Debe haber un sistema que identifique el estado de cada lote | ICH Q7, 7.24 | Leído en el documento |
| Definición de cuarentena | ICH Q7, glosario «Quarantine» | Leído en el documento |
| Definición de fecha de reanálisis | ICH Q7, glosario «Retest Date» | Leído en el documento |
| Responsabilidades no delegables de la unidad de calidad: aprobar especificaciones e instrucciones maestras (punto 5) y cambios que puedan afectar a la calidad (punto 9) | ICH Q7, 2.22 | Leído en el documento |
| La instrucción maestra la prepara, fecha y firma una persona y la revisa de forma independiente, fecha y firma una persona de la unidad de calidad | ICH Q7, 6.40 | Leído en el documento |
| Dato crítico tecleado a mano: comprobación adicional por una segunda persona o por el sistema | ICH Q7, 5.45; anexo 11, apartado 6 | Leído en los dos documentos |
| Cooperación entre dueño del proceso, dueño del sistema, personas cualificadas e informática, con accesos y responsabilidades definidos | Anexo 11, apartado 2 y glosario | Leído en el documento |
| Sistema formal de control de cambios; lista del 13.11 (materias primas, especificaciones, pasos del proceso, programas informáticos, entre otros) | ICH Q7, 13.10 y 13.11 | Leído en el documento |
| Al implantar el cambio se revisan todos los documentos afectados | ICH Q7, 13.14 | Leído en el documento |
| Se evalúa si un cambio crítico afecta a las fechas de reanálisis o caducidad | ICH Q7, 13.16 | Leído en el documento |
| Registro de cada cambio de dato, con el valor anterior, quién y cuándo | ICH Q7, 5.43 | Leído en el documento |
| Cambios del sistema autorizados, documentados y probados (citado en el test) | ICH Q7, 5.47 | Leído en el documento |
| Cualquier cambio de un sistema, incluida su configuración, de forma controlada según procedimiento | Anexo 11, apartado 10 | Leído en el documento |
| Audit trail de cambios GMP y motivo documentado al cambiar o borrar | Anexo 11, apartado 9 | Leído en el documento |
| Comprobaciones integradas en los sistemas que intercambian datos electrónicamente | Anexo 11, apartado 5 | Leído en el documento (texto traducido en la lección casi literal) |
| Descripción actualizada de sistemas críticos con flujos de datos e interfaces | Anexo 11, 4.3 | Leído en el documento |
| Las pruebas consideran límites de parámetros, límites de datos y tratamiento de errores | Anexo 11, 4.7 | Leído en el documento |
| En una transferencia a otro formato o sistema se comprueba que los datos no cambian de valor ni de significado | Anexo 11, 4.8 | Leído en el documento |
| Interfaces evaluadas en validación para transferencia correcta y completa; verificación con transferencia segura, cifrado, sumas de control; transferencia automática cualificada más fiable que la manual | PIC/S PI 041-1, 9.4 (expectativa 1) | Leído en el documento |
| Transferir directamente al lugar seguro y no copiar desde una carpeta local; el almacenamiento temporal es una ocasión para borrar o manipular datos | PIC/S PI 041-1, 9.4 (riesgos de la expectativa 1) | Leído en el documento |
| Consulta del borrador del anexo 11 abierta del 7 de julio al 7 de octubre de 2025 | Página oficial de la consulta (fecha de apertura y plazo) | Leído en la página oficial |
| Borrador, 10.2: datos críticos transferidos habitualmente, por interfaces validadas mejor que por transcripción manual; 10.1: aviso si un dato tecleado no es plausible | Borrador del anexo 11, apartados 10.1 y 10.2 | Leído en el documento. No se ha comprobado si ya hay versión definitiva a noviembre de 2026: la lección dice que, mientras no la haya, manda el anexo 11 de 2011 |
| La investigación de una desviación crítica se extiende a otros lotes que puedan estar afectados | ICH Q7, 6.53 | Leído en el documento |
| Definiciones de ALCOA+ y enlace | Lección `alcoa-plus` de la app | Leído en el repo |

## Cálculos (recalculados con python, `src_maestros/calc.py`)

| Cuenta | Resultado |
|---|---|
| 312,0 × 1250 / 1000 | 390,0 kg |
| 2,5 × 800 / 1000 en kg; en g por error | 2,0 kg; 2,0 g (factor 1000) |
| 150 / 20; 7,5 × 25; (187,5 − 150) / 150 | 7,5 sacos; 187,5 kg; 25 % |
| 600 / 0,87; 600 / 0,78; 769,2 × 0,87; exceso | 689,7 L; 769,2 L; 669,2 kg; 11,5 % |
| (120 − 110) / 110 | 9,1 % |
| n × (n − 1) / 2 con n = 6 | 15 |
| Planta: 15 × 25; 300 / 25; 300 / 20; exceso 75 / 300 | 375 kg; 12 sacos; 15 sacos; 25 % |
| Test: 45 × 1250 / 1000 | 56,25 kg |
| Test: 200 / 20 × 25 | 10 sacos, 250 kg |
| Test: 450 / 0,78; 576,9 × 0,87 | 576,9 L; 501,9 kg (11,5 % de más) |
| 10 de febrero de 2026 + 24 meses | 10 de febrero de 2028 |

## Datos de la app y valores de ejemplo

| Dato | Origen | Cómo se comprobó |
|---|---|---|
| Densidad del tolueno 0,87 kg/L | `src/content/fds.ts` (sección 9 de la ficha SOLVEX T) y `nivel0-densidad.ts` | Leído en el repo; no contrastado con una fuente externa en esta sesión (coincide con lo usado en «Densidad a fondo») |
| Códigos MP-0417, RX-3, CT-9, BX-2, AF-33, R-205, C-410, S-520, L2, orden 1004518, versiones 3 y 4, cantidades de las listas de materiales, saco de 25 kg, límite de agua 0,5 %, periodo de 24 meses, cargas de 120 y 110 kg | Valores de ejemplo declarados | Inventados, declarados en el texto |
| Reparto de quién propone cada maestro (logística, producción, control de calidad, compras) | Práctica habitual, presentada como «un reparto habitual que cada empresa fija en su procedimiento» | Sin fuente normativa: solo la aprobación por calidad está en ICH Q7 2.22 y 6.40 |
| Punto a punto frente a capa intermedia; fichero, servicio web REST/SOAP, cola de mensajes y sus riesgos; pruebas típicas de una interfaz (duplicados, conciliación) | Conocimiento general de informática; sin norma gratuita que lo describa así | Descripción conceptual, sin cifras. Las pruebas de la tabla concretan el anexo 11 (5, 4.7, 4.8) y PIC/S 9.4, pero su lista concreta es práctica habitual, no texto normativo |
| Que tratar un maestro como cambio de sistema o de documento depende del procedimiento de cada empresa | Interpretación declarada en el texto | El anexo 11 (10) habla de configuración y ICH Q7 (13.11) de especificaciones, materias primas y software; ninguno nombra «datos maestros» |
| Códigos de motivo como listas cerradas | Práctica habitual | Solo es normativo que el motivo se documente (anexo 11, 9) |

## Lo que se dejó fuera por no poder verificarlo

- Nombres concretos de objetos de SAP para maestros (registro info de calidad, lista de fuentes, unidades alternativas en el maestro de materiales, tipos de mensaje IDoc de material): no hay documentación gratuita de SAP en los hosts accesibles.
- Lo que dice ISA-95 / IEC 62264 sobre datos maestros e intercambio entre niveles 3 y 4 (norma de pago; ningún documento gratuito leído lo reproduce).
- Densidades de otros disolventes contrastadas con FISQ/ICSC (host no accesible).
- Si el borrador de 2025 del anexo 11 ya es definitivo a noviembre de 2026: no comprobado; la lección lo trata como borrador.
- La guía de la MHRA sobre integridad de datos (2018) no se ha releído para esta lección; no se cita.
