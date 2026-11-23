# Fuentes: erp-y-sap-a-fondo («ERP y SAP en la planta a fondo»)

Descargas en `scratchpad/src_sap/dl/` (curl + pdftotext o limpieza de HTML). Cálculos en `scratchpad/src_sap/calc.py`.

Abreviaturas de fuente:

- **SIM**: código de la app, `src/sap/engine.ts`, `src/sap/exam.ts`, `src/components/sap/Simulator.tsx`, `src/app/sap/page.tsx` (leído entero).
- **SAP-MT**: SAP Library R/3 4.6C, «Copy, Change Movement Types» (MM-IM), https://help.sap.com/saphelp_46C/helpdata/EN/fc/6cec6eb435d1118b3f0060b03ca329/content.htm
- **SAP-REV**: SAP Library 4.6C, «Reversing of Goods Movements» (PP-PI-PMA), https://help.sap.com/saphelp_46C/helpdata/EN/8a/caa5bcde1111d2b479006094b9440a/content.htm
- **SAP-CANC**: SAP Library 4.6C, «Entering a Reversal Document with Reference to a Material Document», https://help.sap.com/saphelp_46c/helpdata/en/a5/63327d43a211d189410000e829fbbd/content.htm
- **SAP-BWU**: SAP Library 4.6C, «Batch Where-Used List» (LO-BM), https://help.sap.com/saphelp_46c/helpdata/en/25/283d074f7811d18a150000e816ae6e/content.htm ; y 4.70 «Bottom-Up Analysis», https://help.sap.com/saphelp_470/helpdata/EN/25/283d2e4f7811d18a150000e816ae6e/content.htm
- **SAP-QMPROD**: SAP Library 4.6C, «QM in Production», https://help.sap.com/saphelp_46c/helpdata/en/8a/1a1d794e4211d182be0000e829fbfe/content.htm
- **SAP-CHEM**: SAP Library 4.6C, SAP Chemical, «Additional Process Information», https://help.sap.com/saphelp_46c/helpdata/en/51/953e74a1fa11d189ba0000e829fbbd/content.htm
- **SAP-GRINSP**: SAP Library 4.70, «Inspection for a Goods Receipt» (QM-IM-IL), https://help.sap.com/saphelp_470/helpdata/en/92/b808a8d52a11d2962200a0c930e04c/content.htm
- **SAP-REL**: SAP Library 4.6C, «Releasing Process Orders» (PP-PI-POR), https://help.sap.com/saphelp_46C/helpdata/EN/89/a430ba461e11d182b50000e829fbfe/content.htm
- **SAP-STAT**: SAP Library 4.6C, «Status in Process Orders» (PP-PI-POR), https://help.sap.com/saphelp_46c/helpdata/en/89/a4330c461e11d182b50000e829fbfe/content.htm
- **Q7**: ICH Q7, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **A11**: EudraLex vol. 4, anexo 11 (2011), https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf
- **A11D**: borrador de revisión del anexo 11 para consulta, https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf
- **PI041**: PIC/S PI 041-1 (1 de julio de 2021), https://picscheme.org/docview/4234
- **PI011**: PIC/S PI 011-3 (25 de septiembre de 2007), https://picscheme.org/docview/3444

Nota: help.sap.com respondió. El portal moderno (`/docs/...`) es una aplicación JavaScript y no se pudo leer con curl; sí se leyeron las páginas estáticas de la SAP Library de las versiones R/3 4.6C y 4.70, que siguen publicadas. Por eso el texto dice que son de una versión antigua y que el sistema de la planta puede variar.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ERP como una aplicación con módulos que comparten una base de datos (analogía de la tienda web) | Explicación didáctica, sin cifra ni norma | No es un dato verificable; es la idea general del concepto |
| PP-PI para fabricación por lotes y recetas en industria química, farmacéutica y alimentaria, con orden de proceso; QM para inspecciones durante la producción y en la entrada desde producción; CO para costes | SAP-QMPROD | Leído en el documento (tabla de componentes) |
| MM-IM es la gestión de inventario de MM y registra entradas de pedidos a proveedores (101 para pedido) | SAP-MT (título «Inventory Management and Physical Inventory (MM-IM)», descripción de la 101) | Leído en el documento |
| Materiales RM-1001, RM-2001, RM-3001, FG-5001, todos en kg; nombres | SIM, engine.ts `materials` | Leído en el código |
| Lote B1001A 300 kg libre, caduca 2027-09-30; B1001B 250 calidad; B1001C 180 libre caduca 2026-10-31; B1001D 400 libre; T2001A 2500; N3001A 90 bloqueado; N3001B 200 libre | SIM, `initialState()` | Leído en el código |
| Receta 50000001: base 100 kg; 120/400/30 kg; fases 0010 a 0040 | SIM, `recipes` | Leído en el código |
| Orden 1000001, documentos desde 4900000001, lote de inspección 890000000001, lote API0001 | SIM, `counters` y `goodsReceipt()`; `addLog` numera cada transacción con éxito | Leído en el código; secuencia de 12 documentos recontada a mano (COR1, COR2, 3 × 261, 4 × COR6N, 101, QE51N, QA11) |
| Fecha del simulador 18/11/2026 | SIM, `TODAY` | Leído en el código |
| Resultados del 1.er lote: 99,6 %, 0,21 %, 0,06 %; 2.º lote impureza 0,14 % con máximo 0,1 % | SIM, `labResults`, `characteristics` | Leído en el código |
| Nueve misiones, de MMBE y C203 a la decisión de empleo y el rechazo OOS | SIM, `missions` | Leído en el código |
| Rendimientos del examen entre 90 y 94 % de la orden | SIM, exam.ts `YIELDS` | Leído en el código |
| Avisos y bloqueos del simulador: > 102 % aviso; < 98 % no deja notificar 0010; > 105 % o < 50 % rechazo del rendimiento; lote en calidad, bloqueado o caducado rechazado; cantidad mayor que el lote rechazada; tamaño máximo 500 kg | SIM, `goodsIssue()`, `confirmPhase()`, `createOrder()` | Leído en el código |
| MMBE suma como libre el lote caducado (880 kg) | SIM, `stockOf()` suma por tipo de stock sin mirar caducidad; Simulator.tsx marca «(caducado)» | Leído en el código |
| El simulador solo tiene 261 y 101 | SIM, Simulator.tsx, selector de MIGO | Leído en el código |
| Transacciones COR1, COR2, COR3, COR6N, MIGO, MMBE, MSC3N, MM03, C203, QA32, QE51N, QA11 | SIM, Simulator.tsx `TXS` | Leído en el código; en la lección se presentan como los códigos del simulador, no verificados uno a uno en help.sap.com |
| Estado CRTD al crear; sin liberar no se notifica, no se imprimen papeles, no se crea receta de control, no hay movimientos de mercancía; al liberar se levantan | SAP-REL | Leído en el documento |
| Estados REL y PCNF existen en la orden de proceso | SAP-STAT (lista de estados: CRTD, REL, PCNF, TECO…) | Leído en el documento |
| CNF y DLV | SIM, `OrderStatus` | Leído en el código; en SAP solo visto en fragmento de buscador (no se usa como dato de SAP) |
| La clase de movimiento controla cantidades, cuentas, campos e impresión | SAP-MT | Leído en el documento |
| 101 entrada para pedido u orden; si no está imputada, se elige tipo de stock (libre, calidad, bloqueado) | SAP-MT | Leído en el documento |
| 122 devolución al proveedor o a producción, distinta de la anulación 102, pide motivo | SAP-MT | Leído en el documento |
| 261 salida para una orden (fabricación, mantenimiento…) | SAP-MT | Leído en el documento |
| 311 traslado de libre entre almacenes | SAP-MT | Leído en el documento |
| 321 de calidad a libre; no para materiales gestionados por QM, cuyo traspaso lo hace la decisión de empleo | SAP-MT | Leído en el documento |
| 343 bloqueado a libre; 349 bloqueado a calidad | SAP-MT | Leído en el documento |
| 551, 553, 555 desguace desde libre, calidad, bloqueado | SAP-MT | Leído en el documento |
| 701 diferencia de inventario en libre, generada automáticamente | SAP-MT | Leído en el documento |
| Anulación = clase + 1 (101 y 102); de ahí 262 para 261 | SAP-MT («The reversal movement type is the movement type + 1») | Leído en el documento; 262 deducido con esa regla |
| Clases propias empiezan por 9, X, Y o Z | SAP-MT (paso 3 de «Activities») | Leído en el documento |
| Escalado: 120 × 2 = 240; 400 × 2 = 800; 30 × 2 = 60; total 1100 kg | cálculo | Recalculado (calc.py) |
| Libre 880 kg, utilizable 700; tras consumo libre 640, utilizable 460 | cálculo | Recalculado |
| T2001A 1700 kg; N3001B 140 kg | cálculo | Recalculado |
| Rendimiento 184 / 200 = 92,0 %; merma 16 kg, 8,0 % (184 kg valor de ejemplo declarado) | cálculo | Recalculado |
| Ventana 235,2 a 244,8 kg; 816 kg | cálculo | Recalculado |
| Rendimiento teórico y esperado (definiciones) | Q7, glosario «Yield, Theoretical», «Yield, Expected» | Leído en el documento |
| Comparar rendimiento real con esperado e investigar desviaciones en etapas críticas | Q7, 8.14 | Leído en el documento |
| Tolueno sale con aguas madres y en el secadero | Proceso ficticio declarado como tal | Valor de ejemplo declarado (no es afirmación técnica general) |
| Número de lote y sistema que identifique el estado de cada lote | Q7, 7.24 | Leído en el documento |
| Definición de cuarentena | Q7, glosario «Quarantine» | Leído en el documento |
| Recibidos en cuarentena hasta muestrear, examinar o analizar y liberar | Q7, 7.20 | Leído en el documento |
| Nada se libera o usa antes de la evaluación de calidad, salvo sistemas apropiados | Q7, 2.17 | Leído en el documento |
| Rechazados bajo sistema de cuarentena que impida su uso no autorizado | Q7, 7.44 | Leído en el documento |
| Liberar o rechazar todos los API, responsabilidad no delegable de la unidad de calidad | Q7, 2.22 punto 1 | Leído en el documento |
| Stock en calidad con QM solo sale por la decisión de empleo | SAP-GRINSP | Leído en el documento |
| Tipo de inspección 03 durante la producción, 04 entrada desde producción; la decisión de empleo traspasa automáticamente a libre si se libera | SAP-CHEM | Leído en el documento |
| Lista de utilización de lotes: top-down (composición) y bottom-up (uso); usarlos juntos para hallar el componente y luego productos y clientes; muestra lotes de proveedor | SAP-BWU | Leído en el documento |
| Se forma con movimientos de inventario y anulaciones; solo lotes con entrada o salida contabilizada; los elegidos al liberar no aparecen | SAP-BWU | Leído en el documento |
| Anexo 11: ámbito, validar aplicación y cualificar infraestructura | A11, Principle | Leído en el documento |
| Extensión de la validación por evaluación de riesgos documentada | A11, apartado 1 | Leído en el documento |
| Comprobación adicional de datos críticos tecleados | A11, apartado 6; Q7, 5.45 | Leído en el documento |
| Audit trail con motivo | A11, apartado 9 | Leído en el documento |
| Cambios controlados, también de configuración | A11, apartado 10 | Leído en el documento |
| Registrar alta, cambio y baja de autorizaciones | A11, 12.3 | Leído en el documento |
| Sistemas GMP se validan según diversidad, complejidad y criticidad | Q7, 5.40 | Leído en el documento |
| Controles contra cambios no autorizados, registro de cambios con valor anterior, quién y cuándo | Q7, 5.43 | Leído en el documento |
| Correcciones fechadas y firmadas, original legible | Q7, 6.14 | Leído en el documento |
| Ejemplos de sistemas críticos (compra y estado de materiales, datos del registro de lote, decisión de liberación) | PI041, 9.3 | Leído en el documento |
| Mínimo privilegio y separación de funciones | PI041, 9.5 | Leído en el documento |
| GAMP es de ISPE; categorías de GAMP 4 (estándar, configurable, a medida) con su enfoque de validación | PI011, 4.7 y 15.1 (tabla reproducida «with permission» de GAMP 4, apéndice M4) | Leído en el documento |
| Sistemas integrados mezclan categorías; enfoque de riesgo global | PI011, 15.2 | Leído en el documento |
| Existe borrador de revisión del anexo 11 para consulta | A11D (archivo «consultation_guideline») | Leído el documento; no se ha comprobado si ya está adoptado, y el texto no lo afirma |
| Documento de material no se cambia: se anula y se contabiliza de nuevo; cada anulación crea un documento de anulación | SAP-REV | Leído en el documento |
| Anulación con referencia al documento original (número y año) | SAP-CANC | Leído en el documento |
| Errores 1 a 3: cifras de stock (300/160; 900 y 1700; 60000 g; 58,8 kg) | cálculo con datos de SIM | Recalculado (calc.py) |
| Ejemplo de planta: orden 4207713, MP-77, RX-210, SD-420, 331 kg sobre 350 kg = 94,6 % | Valor de ejemplo declarado | 331 / 350 = 0,9457, recalculado |
| Quiz: 120 × 250 / 100 = 300; 188 / 200 = 94 %; 460 kg; 2500 − 1600 = 900 | cálculo | Recalculado |

## Visto solo en fragmentos de buscador (no usado como dato)

- SAP KBA (userapps.support.sap.com/…/3633237): la decisión de empleo contabiliza el traspaso con la clase 321 y ese movimiento no aparece en los movimientos documentados de la orden. No se usa: la página gratuita leída (SAP-MT) solo dice que la 321 no se usa a mano en materiales con QM.
- SAP KBA: estado DLV cuando la entrada lleva el indicador de entrega final. No se usa como dato de SAP; DLV se presenta como estado del simulador.
- Transacción MB56 para la lista de utilización de lotes y MB57 para construir el fichero. No se usa: el simulador no la tiene y no se leyó en una página oficial.
- Recomendación de anular en MIGO y no en MBST (KBA 3375879). No se usa.

## Lo que quería incluir y se dejó fuera

- Densidad del tolueno para un error de litros frente a kilos: no se pudo leer la ficha FISQ en insst.es (solo copias en otros hosts); se sustituyó por el error de gramos frente a kilos.
- Clases 344 y 350 (contrarias de 343 y 349): solo se deducirían con la regla «+1»; no se incluyeron para no dar como leído lo deducido.
- Que en SAP solo los movimientos de mercancía generan documentos de material y las notificaciones tienen su propio registro: no verificado; el texto dice solo que el simulador numera cada operación.
- Categoría GAMP concreta de un ERP (el resumen previo de la app dice «normalmente categoría 4»): no se afirma; solo se explica la idea con las categorías de GAMP 4 reproducidas por PIC/S.
- Transacciones y estados en SAP S/4HANA o aplicaciones Fiori: no se pudo leer el portal moderno de help.sap.com.
- Estado de adopción del borrador del anexo 11 a noviembre de 2026: no comprobado.
