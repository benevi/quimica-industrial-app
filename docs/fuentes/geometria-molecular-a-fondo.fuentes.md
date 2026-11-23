# Fuentes: geometria-molecular-a-fondo

Descargas y cálculos en `scratchpad/lecciones/tmp-geometria/` (`dl/` y `calc.py`).

Fuentes leídas de verdad en esta sesión:

- NIST Chemistry WebBook (SRD 69), sodio, C7440235: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440235&Mask=1 (ΔfH° gas = 107,5 ± 0,7 kJ/mol, CODATA, Cox, Wagman et al. 1984) y &Mask=20 (IE evaluada = 5,13908 eV, Lide 1992).
- NIST Chemistry WebBook, cloro atómico, C22537151: &Mask=1 (ΔfH° gas = 121,301 ± 0,008 kJ/mol, CODATA) y &Mask=20 (afinidad electrónica 3,6131 eV, Martin y Hepburn 1998; otra determinación 3,612).
- NIST Chemistry WebBook, cloruro de sodio, C7647145: &Mask=2 (ΔfH° sólido = −411,12 kJ/mol, Chase 1998).
- Real Decreto 2032/2009, unidades legales de medida, BOE consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (e = 1,602 176 634 × 10⁻¹⁹ C, apartado 2.4; N_A = 6,022 140 76 × 10²³ mol⁻¹, apartado 2.6; el electronvoltio aceptado para uso con el SI).
- Lecciones de la app leídas para no repetir y para remitir por título: `enlaces-a-fondo` (entera), `atomos-a-fondo` (parte 4, octeto y excepciones), `quiralidad-a-fondo` (estereocentro tetraédrico, cis-trans, racemización), `organica-a-fondo` (benceno), títulos del catálogo.
- Control.com, «Lessons in Industrial Instrumentation», capítulo de química (electronic-structure, energy-in-chemical-reactions, formulae…): leídos, no contienen ángulos ni geometría; no se usan.

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Electrones de valencia: H 1, B 3, C 4, N 5, O 6, F 7, Cl 7 | `atomos-a-fondo` (tabla de capas; boro: Z = 5, 2 y 3) y química general | Leído en la lección de la app (que tiene su propia tabla de fuentes) |
| Método de 7 pasos para dibujar estructuras de Lewis | Química general (libro de texto) | No leído en fuente oficial; es un procedimiento, comprobado en cada ejemplo por recuento |
| CH₂Cl₂: 20 electrones; 8 en enlaces y 12 solitarios | Cálculo | Recalculado (calc.py) |
| Fórmula de la carga formal: valencia − solitarios − enlace/2 | IUPAC Gold Book «formal charge» (PAC 2022, 94, 353) | Solo fragmento de buscador (goldbook.iupac.org devuelve página de Cloudflare); fórmula estándar de química general; no se usa para cifras externas, solo en cuentas recalculadas |
| Reglas de uso de la carga formal (suma = carga; cerca de cero; negativa en el más electronegativo) | Química general | No leído en fuente oficial; la regla de la suma se comprueba en NH₄⁺, H₃O⁺, acetato y CO₂ por cálculo |
| Carga formal N en NH₃ = 0; N en NH₄⁺ / amina protonada = +1; O en H₃O⁺ = +1; NH₄⁺ con 8 electrones | Cálculo | Recalculado (calc.py) |
| O≡C–O: cargas +1 y −1; O=C=O: todo 0 | Cálculo | Recalculado |
| Acetato: 24 electrones; O doble 0, O simple −1 | Cálculo | Recalculado |
| Resonancia: carga repartida entre los dos oxígenos; mezcla fija, no alternancia | Química general | No leído en fuente oficial |
| BF₃: 24 electrones, boro con 6, cargas formales 0 | Cálculo; octeto incompleto del boro en `atomos-a-fondo` | Recalculado; leído en la lección |
| Azufre y fósforo con más de 8 (ácido sulfúrico) | `atomos-a-fondo` parte 4 | Leído en la lección |
| Enunciado de RPECV: las zonas de electrones se repelen y se alejan al máximo; doble o triple cuenta como una zona | Química general; Gillespie-Nyholm | Fragmento de buscador (LibreTexts, U. Calgary, Wikipedia): no leído en fuente oficial |
| Pares solitarios repelen más que los de enlace | Química general | Fragmento de buscador (U. Calgary); no se dan cifras |
| Ángulos ideales 180°, 120°, 109,5° | Geometría | Recalculado: 360/3 = 120; arccos(−1/3) = 109,47° |
| Formas: CO₂ lineal, BF₃ triangular plana, CH₄ tetraédrica, NH₃ piramidal, H₂O angular; polaridad de cada una | Química general (RPECV); CO₂, H₂O y CH₄ coinciden con `enlaces-a-fondo` | Deducido por RPECV; no leído en fuente oficial |
| Orden de ángulos metano > amoníaco > agua, sin valores | Química general | No leído; los valores medidos se omiten |
| CH₂Cl₂ polar, CCl₄ apolar | Química general (simetría) | Deducido; no leído en fuente oficial |
| Orbitales s esféricos y p de dos lóbulos a 90° | Química general | No leído en fuente oficial (control.com electronic-structure habla de subcapas con formas distintas, sin detalle) |
| Hibridación sp³, sp², sp: mezcla de s y p; ángulos y p sobrantes | IUPAC Gold Book «hybridization» (combinación lineal de orbitales atómicos de un átomo) | Solo fragmento de buscador; tabla de ángulos recalculada |
| Enlaces σ y π; doble = σ + π, triple = σ + 2π; el π impide el giro | Química general; rigidez del doble enlace también en `quiralidad-a-fondo` | No leído en fuente oficial; lo de la rigidez, leído en la lección |
| Acetona: 9 σ y 1 π; carbonos sp³ y sp² | Cálculo | Recontado (calc.py) |
| Acetonitrilo: carbono sp, C–C≡N recto | Química general (RPECV, 2 zonas) | Deducido |
| Benceno: carbonos sp², ángulo interior del hexágono 120°, 12 σ y 3 π, anillo plano por solapamiento de los p | Química general; benceno con electrones repartidos en `organica-a-fondo` | (6 − 2) × 180 / 6 = 120 recalculado; recuento recalculado |
| Estereocentro: carbono tetraédrico con cuatro grupos distintos; racemización al pasar a plano | `quiralidad-a-fondo` | Leído en la lección |
| Un carbono sp² no puede ser estereocentro (imagen especular superponible) | Química general | Deducido de la geometría plana; no leído en fuente oficial |
| Definición de energía reticular (separar un mol del sólido en iones gaseosos; signo positivo por convenio en la lección) | Química general | No leído en fuente oficial (Gold Book bloqueado); se declara el convenio de signo en el texto |
| Ciclo de Born-Haber: conservación de la energía (ley de Hess) | Química general | No leído en fuente oficial |
| Na(s) a Na(g): +107,5 kJ/mol | NIST WebBook, ΔfH° gas del Na (CODATA) | Leído en la página |
| ½ Cl₂ a Cl(g): +121,3 kJ/mol | NIST WebBook, ΔfH° gas del Cl (121,301) | Leído; redondeado |
| Energía de ionización del Na 5,139 eV = 495,8 kJ/mol | NIST WebBook (5,13908 eV) | Leído; conversión recalculada |
| Afinidad electrónica del Cl 3,613 eV = 348,6 kJ/mol | NIST WebBook (3,6131 eV) | Leído; conversión recalculada |
| ΔfH° NaCl(s) = −411,1 kJ/mol | NIST WebBook (−411,12) | Leído; redondeado |
| 1 eV = 96,485 kJ/mol | e × N_A del RD 2032/2009 | Recalculado: 1,602176634e-19 × 6,02214076e23 / 1000 = 96,4853 |
| U(NaCl) = 787,1 kJ/mol; pasos 1 a 4 = 376,0 kJ/mol | Cálculo | Recalculado con valores redondeados (787,1) y sin redondear (787,16) |
| Simplificación: IE y afinidad tratadas como entalpías | Química general | Declarado en el texto; no se cuantifica la corrección |
| Sal soluble en agua por la energía de hidratación, insoluble en heptano | Química general; ion-dipolo en `enlaces-a-fondo` | Cualitativo; no se dan cifras |
| Ley de Coulomb: atracción crece con las cargas y baja con la distancia | Física general | No leído en fuente oficial; solo tendencia, sin cifras |
| Bandas en metales y aislantes | Química general | No leído en fuente oficial; solo idea cualitativa |
| Infrarrojo e «identificación conforme» por comparación con patrón | `espectroscopia-a-fondo` (remisión por título) | Remisión; no se añaden datos |
| Proceso QV-52, R-318, FD-406, tiempos y temperaturas | Valor de ejemplo declarado | Ficticio |

## Lo que quería incluir y dejé fuera

- Ángulos de enlace medidos del agua (104,5°) y del amoníaco (unos 107°): cccbdb.nist.gov no es accesible desde la sesión (DNS bloqueado) y el NIST WebBook no da geometrías experimentales; la búsqueda web no devolvió los valores. En el texto queda solo el orden cualitativo. Si se habilita cccbdb.nist.gov, añadir los valores con su referencia (Kuchitsu 1998, según el fragmento del buscador).
- Longitudes de enlace (C–C, C=C, benceno, C–O del acetato): mismo motivo.
- Definiciones literales del IUPAC Gold Book (VSEPR, hibridación, carga formal, energía reticular): goldbook.iupac.org devuelve una página de Cloudflare; un intento con hosts alternativos fue bloqueado por permisos.
- Punto de fusión del NaCl: la ficha ICSC que se probó (n.º 1413) resultó ser de otra sustancia y el WebBook no da la temperatura de fusión.
- Energías reticulares de otras sales (MgO, KCl) para comparar: sin datos verificados; queda la tendencia de Coulomb.
- Momentos dipolares numéricos (agua, diclorometano): sin fuente leída.
- Geometrías con más de cuatro zonas (bipirámide trigonal, octaedro: PCl₅, SF₆): fuera por extensión y por no tener fuente leída; el temario de Bachillerato las cita, pueden añadirse con fuente.

## Ideas para la capa visual

- Simulación PhET «Forma de la molécula» (*Molecule Shapes*, Universidad de Colorado, licencia CC BY): añadir zonas de electrones y pares solitarios y ver cómo pasa de tetraédrica a piramidal y angular.
- Esquema de las cinco moléculas (CO₂, BF₃, CH₄, NH₃, H₂O) en tres dimensiones, con los pares solitarios dibujados como globos y las flechas de polaridad que se anulan o no.
- Esquema de la hibridación: orbital s y tres p a la izquierda, cuatro sp³ (o tres sp² más un p de pie) a la derecha; y el benceno con los seis p paralelos formando la nube π.
- Diagrama de escalones del ciclo de Born-Haber del NaCl, con las cinco flechas a escala de kJ/mol y la energía reticular como el gran escalón de bajada.
