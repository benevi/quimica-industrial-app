# Fuentes de la lección `organica-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: lo leí en esta sesión en el texto descargado.
- **Libro de texto, comprobado por cálculo**: química orgánica general (reglas de la fórmula de esqueleto, recuento de átomos, nomenclatura IUPAC básica, estructura de paracetamol, ácido acetilsalicílico e ibuprofeno). No se ha leído una fuente externa que lo diga; cada recuento y masa molar se rehízo con python (`src_organica/calc.py`).
- **Leído en la app**: dato que ya está en una lección o ficha del repositorio.
- **Valor de ejemplo declarado**: número o código inventado; el texto lo dice.

Fuentes externas leídas:

- **ICH Q3C (R8)**, *Impurities: Guideline for Residual Solvents*, apéndice 1 («List of solvents included in the guideline»: nombre, otros nombres, estructura, clase): https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422.pdf (descargado y pasado a texto con pdftotext).
- **INSST, listado de Fichas Internacionales de Seguridad Química (FISQ)**: https://www.insst.es/documentacion/colecciones-tecnicas/fisq?start=N (N = 1 a 90, descargadas con curl). Cada entrada del listado da número FISQ, nombre, CAS, CE, ONU y sinónimos. Las fichas completas enlazan a chemicalsafety.ilo.org, que no responde desde esta sesión: solo se leyó el listado.

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| El carbono forma cuatro enlaces, cadenas, ramas y anillos; simples, dobles y triples | `src/content/nivel3.ts` («El carbono y las fórmulas orgánicas») y química general | Leído en la app / libro de texto |
| Casi todos los principios activos y la mayoría de los disolventes son orgánicos | `src/content/nivel3.ts` | Leído en la app |
| Etanol C₂H₆O; semidesarrollada CH₃CH₂OH | ICH Q3C, apéndice 1 (Ethanol, CH3CH2OH) | Leído en el documento; recuento por cálculo |
| Formas molecular, desarrollada, semidesarrollada, de esqueleto; reglas de lectura del esqueleto (vértice y extremo = C, H del C no se dibujan, H = 4 − rayas) | Química general | Libro de texto, comprobado en cada ejemplo por cálculo |
| SMILES del etanol: CCO | Química general | Libro de texto (solo mención) |
| Etanol y dimetiléter, ambos C₂H₆O | `src/content/nivel3.ts` («Isómeros y quiralidad») | Leído en la app |
| Paracetamol C₈H₉NO₂, HO–C₆H₄–NH–CO–CH₃, 151 g/mol redondeada | Fórmula: `src/content/nivel1-mol.ts`; estructura: química general | Leído en la app / libro de texto; masa recalculada (151; 151,16 con masas IUPAC) |
| Tolueno C₇H₈, 92 g/mol; metilbenceno, toluol | ICH Q3C (Toluene, Methylbenzene); INSST FISQ 0078 (Metilbenceno, Toluol, CAS 108-88-3) | Leído en el documento; recuento y masa por cálculo |
| Acetato de etilo C₄H₈O₂, CH₃COOCH₂CH₃, 88 g/mol | ICH Q3C (Ethyl acetate, Acetic acid ethyl ester, CH3COOCH2CH3) | Leído en el documento; recuento y masa por cálculo |
| Ibuprofeno C₁₃H₁₈O₂, 206 g/mol (206,28 con C 12,011, H 1,008, O 15,999) | Estructura: química general | Libro de texto; recuento y masa por cálculo |
| Masas atómicas redondeadas H 1, C 12, N 14, O 16, Cl 35,5 y las estándar C 12,011, H 1,008, O 15,999 | BRIEF-QUIMICA; `src/content/nivel1-mol.ts` | Valores estándar de la IUPAC, no leídos en esta sesión |
| Alcanos CₙH₂ₙ₊₂ (heptano C₇H₁₆); ciclohexano C₆H₁₂ frente a hexano C₆H₁₄; benceno C₆H₆; eteno C₂H₄; etino C₂H₂ | Química general | Libro de texto, comprobado por cálculo |
| Benceno: seis enlaces iguales, electrones repartidos, muy estable | Química general | Libro de texto (sin cifras) |
| Heptano = n-heptano, CH₃(CH₂)₅CH₃ | ICH Q3C; INSST FISQ 0657 (n-HEPTANO, CAS 142-82-5) | Leído en el documento |
| Ciclohexano: hexametileno, hexahidrobenceno | ICH Q3C (Hexamethylene); INSST FISQ 0242 | Leído en el documento |
| Xileno: dimetilbenceno, xilol; «usually 60% m-xylene, 14% p-xylene, 9% o-xylene with 17% ethyl benzene» | ICH Q3C, apéndice 1 y nota | Leído en el documento |
| o-Xileno = 1,2-dimetilbenceno, CAS 95-47-6; p-xileno = 1,4-dimetilbenceno, CAS 106-42-3 | INSST FISQ 0084 y 0086 | Leído en el documento |
| m-Xileno = 1,3- | Química general | Libro de texto |
| Pasos de nomenclatura (cadena más larga, terminación, localizador más bajo, prefijos di-, tri-, tetra-) | Química general | Libro de texto |
| Propan-2-ol: 2-propanol, isopropyl alcohol, (CH₃)₂CHOH | ICH Q3C | Leído en el documento |
| Sinónimos del alcohol isopropílico: isopropanol, propan-2-ol, 2-propanol, 2-hidroxipropano, 1-metiletanol; CAS 67-63-0 | INSST FISQ 0554 | Leído en el documento |
| Propan-1-ol: 1-propanol, alcohol n-propílico, CH₃CH₂CH₂OH; CAS 71-23-8 | ICH Q3C; INSST FISQ 0553 | Leído en el documento |
| Acetona: 2-propanona, propan-2-ona, CH₃COCH₃; CAS 67-64-1 (en la lección no se da el CAS de la acetona) | ICH Q3C; INSST FISQ 0087 | Leído en el documento |
| Ácido acético = ácido etanoico, CH₃COOH | ICH Q3C (Acetic acid, Ethanoic acid) | Leído en el documento |
| MTBE: tert-butylmethyl ether, 2-metoxi-2-metilpropano, (CH₃)₃COCH₃; metil terc-butil éter, MTBE; CAS 1634-04-4 (no se da en la lección) | ICH Q3C; INSST FISQ 1164 | Leído en el documento; C₅H₁₂O y 88 g/mol por cálculo |
| Diclorometano: methylene chloride, CH₂Cl₂; DCM, cloruro de metileno; CAS 75-09-2 (no se da en la lección) | ICH Q3C; INSST FISQ 0058 | Leído en el documento |
| Cloruro de metilo = clorometano, CH₃Cl, otra sustancia | Química general (nomenclatura metilo CH₃ / metileno CH₂) | Libro de texto. Nota: el listado del INSST pone «Cloruro de metilo (licuado)» entre los sinónimos del diclorometano; parece un error del listado y no se usa |
| THF: tetramethylene oxide, oxacyclopentane; anillo de 5 con una O; C₄H₈O, 72 g/mol | ICH Q3C (estructura dibujada) | Leído en el documento; fórmula y masa por cálculo. Furano y «tetrahidro»: libro de texto |
| DMF: HCON(CH₃)₂; N,N-dimetilformamida, DMF; CAS 68-12-2 (no se da en la lección); C₃H₇NO | ICH Q3C; INSST FISQ 0457 | Leído en el documento; fórmula por cálculo |
| Formamida = metanamida, HCONH₂ | ICH Q3C (Formamide, Methanamide) | Leído en el documento |
| Trietilamina = N,N-dietiletanamina, N(CH₂CH₃)₃ | ICH Q3C | Leído en el documento |
| Etanal = acetaldehído, CH₃CHO; propanal | Química general | Libro de texto |
| Raíces «form-» (1 C) y «acet-» (2 C) | Química general | Libro de texto |
| Etanol: alcohol etílico, etanol absoluto; CAS 64-17-5 | INSST FISQ 0044 | Leído en el documento |
| Metanol CAS 67-56-1; tóxico por ingestión, inhalación y piel (H301, H311, H331) | `src/content/fds.ts` (SOLVEX M) | Leído en la app |
| Número CAS: asignado por el Chemical Abstracts Service; tres grupos separados por guiones; la última cifra es de control | cas.org (fragmento del buscador) | Fragmento de buscador. Los tres grupos se ven en todos los números leídos |
| Regla de la cifra de control (pesos 1, 2, 3… desde la derecha; última cifra de la suma). 67-63-0: 3×1 + 6×2 + 7×3 + 6×4 = 60 | Cálculo | Recalculado con python; la regla da la cifra correcta en los 18 CAS leídos (67-56-1, 64-17-5, 71-23-8, 67-63-0, 67-64-1, 75-09-2, 108-88-3, 110-82-7, 142-82-5, 68-12-2, 1634-04-4, 95-47-6, 106-42-3, 69-72-7, 1310-73-2, 7647-01-0, 18662-53-8, 5064-31-3). La regla no se leyó en una fuente oficial |
| Sosa al 50 % identificada con el CAS del hidróxido de sodio 1310-73-2; ácido clorhídrico al 35 % con el CAS del cloruro de hidrógeno 7647-01-0 | `src/content/fds.ts` (CAUSTIL 50, CLORAC 35) | Leído en la app |
| Comprobar código, nombre, lote y estado de calidad en la carga | `src/content/nivel3.ts`; lección «Recepción de materiales y estados de calidad» | Leído en la app |
| Ácido acetilsalicílico C₉H₈O₄ (180 g/mol); ramas vecinas, –COOH y –O–CO–CH₃ | Fórmula: `src/content/nivel1-mol.ts`; estructura: química general | Leído en la app / libro de texto; masa por cálculo |
| Ácido salicílico: ácido 2-hidroxibenzoico, CAS 69-72-7 | INSST FISQ 0563 | Leído en el documento |
| Ácido salicílico C₇H₆O₃, 138 g/mol; el acetilsalicílico es el salicílico con un acetilo en el OH | Química general | Libro de texto; masa por cálculo |
| Clorhidrato = base + HCl, escrito X · HCl; sal sódica; hidrato, anhidro | `src/content/nivel3.ts` («Polimorfismo, sales y solvatos», «Grupos funcionales») | Leído en la app; la notación «·» es libro de texto |
| Sal de trisodio del ácido nitrilotriacético: anhidra CAS 5064-31-3; monohidrato CAS 18662-53-8 | INSST FISQ 1240 y 1239 | Leído en el documento |
| Base de 250 g/mol; clorhidrato 286,5; clorhidrato monohidrato 304,5 g/mol | Cálculo con valor de ejemplo | Valor de ejemplo declarado; recalculado |
| Cuestionario: butan-2-ol C₄H₁₀O (10 H); propan-2-ol 60; THF 72; MTBE 88; ibuprofeno 13 C; 304,5 | Cálculo | Recalculado con python |
| Intermedio LZ-12, reactor R-117, códigos MP-2041 y MP-5520, principio activo FX, 300 L, contenedores de 1000 L | Inventado | Valor de ejemplo declarado (códigos ficticios) |

## Lo que quería incluir y dejé fuera

- Números CAS del acetato de etilo, ácido acético, tetrahidrofurano, paracetamol, ácido acetilsalicílico e ibuprofeno: no aparecen en las páginas del listado del INSST que se descargaron ni en `fds.ts`; no se dan.
- Propiedades de los disolventes (ebullición, inflamación, densidad) en esta lección: ya están en «Disolventes orgánicos y disolventes residuales» y no hacían falta.
- Fichas completas de las FISQ (fórmula molecular y masa molar oficiales): chemicalsafety.ilo.org no responde desde esta sesión; las fórmulas se sacaron de la estructura y se comprobaron por cálculo.
- Qué identificadores exige el Reglamento CLP en la etiqueta (artículo 18): EUR-Lex no es accesible; la lección solo dice que el CAS se usa en etiquetas y fichas, como ya muestra `fds.ts`.
- Recomendación actual de la IUPAC sobre «propan-2-ol» frente a «2-propanol»: no leída; la lección solo dice que las dos formas aparecen en documentos oficiales (ICH Q3C y el INSST dan las dos).
- Algoritmo oficial del dígito de control del CAS: no leído en fuente oficial; se presenta la regla comprobada con los 18 números de la lección.
- Que el ácido salicílico sea materia de partida o impureza del ácido acetilsalicílico: no leído en la Farmacopea; se quitó.
- Datos de actividad o dosis de paracetamol, ácido acetilsalicílico e ibuprofeno: fuera de alcance y no leídos.
