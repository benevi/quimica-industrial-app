# Fuentes de la lección `mol-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl, pasado a texto y leído el pasaje.
- **Recalculado**: cuenta rehecha con python (`src_mol/calc.py`), con el mismo redondeo que el texto.
- **Libro de texto, comprobado por cálculo**: química general universal; no se cita una fuente que no se haya leído.
- **Lección o ficha de la app**: dato ya presente y verificado en el repositorio.
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.

Documentos leídos:

- **RD 2032/2009**, unidades legales de medida, texto consolidado (última actualización publicada el 29/04/2020): https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (el identificador BOE-A-2009-18708 del brief corresponde a otra norma; se usó el correcto).
- **ICH Q3C(R8)**, «Impurities: guideline for residual solvents», versión Step 4 de 22 de abril de 2021: https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422_1.pdf (apartados 3.3 y 4.3, tabla 2).
- Lecciones del repo: `el-mol`, `disoluciones`, `atomos-y-tabla-periodica` (src/content/nivel1.ts), `densidad` (src/content/nivel0.ts), `ecuaciones-y-estequiometria` y `reactivo-limitante` (src/content/nivel2.ts), `gases-de-planta-a-fondo` (src/content/nivel14-gases.ts), y las fichas de src/content/fds.ts.

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| «El mol, símbolo mol, es la unidad SI de cantidad de sustancia. Un mol contiene exactamente 6,022 140 76 × 10²³ entidades elementales» (cita literal) | RD 2032/2009, anexo, apartado 2.6 | Leído en el documento |
| Esa cifra es el valor fijo de la constante de Avogadro, N_A = 6,022 140 76 × 10²³ mol⁻¹ | RD 2032/2009, 2.6 | Leído en el documento |
| Entidad elemental: átomo, molécula, ion, electrón u otra partícula o grupo especificado | RD 2032/2009, 2.6 | Leído en el documento |
| Dalton (u) = 1/12 de la masa del átomo de ¹²C | RD 2032/2009, tabla 7, nota (c) | Leído en el documento |
| La masa de un átomo en dalton coincide numéricamente con la de un mol en gramos | Consecuencia de las definiciones; también en `atomos-y-tabla-periodica` | Libro de texto |
| Temperatura Celsius t = T − T₀, con T₀ = 273,15 K | RD 2032/2009, tabla 3, nota (e) | Leído en el documento |
| Pascal = N/m²; julio = N·m; de ahí J = Pa·m³ | RD 2032/2009, tabla 3 | Leído en el documento; la igualdad J = Pa·m³ es cálculo de unidades |
| 1 L = 1 dm³ = 10⁻³ m³ | RD 2032/2009, tabla 6 | Leído en el documento |
| Atmósfera normal = 1,013 25 bar = 101 325 Pa; los datos termodinámicos se refieren hoy a 1 bar, antes de 1982 a la atmósfera normal | RD 2032/2009, tabla 8, nota (a) | Leído en el documento |
| 1 bar = 100000 Pa | RD 2032/2009, tabla 8 (también citado así en `gases-de-planta-a-fondo`) | Leído en el documento |
| ppm = 10⁻⁶ en valor relativo; con %, ppm, etc., hay que declarar la magnitud | RD 2032/2009, texto sobre magnitudes adimensionales (tras la tabla 4) | Leído en el documento |
| Concentración de cantidad de sustancia en mol/m³; concentración másica en kg/m³ | RD 2032/2009, tabla 2 | Leído en el documento |
| Metanol: límite de 3000 ppm (opción 1) | ICH Q3C(R8), tabla 2 | Leído en el documento |
| Clase 3: 50 mg/día o menos, que corresponde a 5000 ppm o 0,5 % en la opción 1, aceptables sin justificación; clase 3 = baja toxicidad | ICH Q3C(R8), 4.3 | Leído en el documento |
| Masas atómicas H 1,008; C 12,011; N 14,007; O 15,999; Na 22,990; S 32,06; Cl 35,45 | Valores estándar de la IUPAC, no leídos en esta sesión; coinciden con la tabla de `atomos-y-tabla-periodica` | Valores de clase (brief) |
| Redondeo usado: H 1, C 12, N 14, O 16, Na 23, S 32, Cl 35,5 | Declarado en el texto | — |
| Error de los redondeados menor del 0,2 % en las sustancias de la lección (máximo 0,15 % en etanol y tolueno) | Cálculo | Recalculado |
| Masas molares redondeadas: agua 18, NaCl 58,5, NaOH 40, H₂SO₄ 98, etanol 46, tolueno 92, paracetamol 151, metanol 32, ácido acetilsalicílico 180, HCl 36,5, N₂ 28, CO₂ 44, ácido acético 60 | Cálculo | Recalculado |
| Masas molares con valores estándar: 18,015; 58,440; 39,997; 98,072; 46,069; 92,141; 151,165; 32,042 | Cálculo | Recalculado |
| Fórmulas: H₂O, NaCl, NaOH, H₂SO₄, C₂H₅OH, C₇H₈, C₈H₉NO₂ (paracetamol), C₉H₈O₄ (ácido acetilsalicílico), CH₃OH, C₂H₄O₂ (ácido acético) | Libro de texto; paracetamol y metanol ya en `el-mol` y `ecuaciones-y-estequiometria` | Libro de texto |
| Gota de 0,05 g de agua: unos 1,7 × 10²¹ moléculas | Valor de ejemplo declarado (la masa de la gota); cuenta 0,05 / 18 × N_A = 1,67 × 10²¹ | Recalculado |
| Conversiones: 36 g agua = 2 mol; 10 g NaOH = 0,25 mol; 500 g paracetamol = 3,31 mol; 0,25 mol H₂SO₄ = 24,5 g; 3 mol etanol = 138 g; 2 mol agua = 1,204 × 10²⁴ moléculas; 1 g agua = 0,0556 mol = 3,35 × 10²² moléculas | Cálculo | Recalculado |
| 1 kmol = 1000 mol; g/mol = kg/kmol | Prefijo kilo (RD 2032/2009, tabla de prefijos) | Libro de texto |
| 250 kg tolueno = 2,717 kmol; 120 kg H₂SO₄ = 1,224 kmol; 75,5 kg paracetamol = 0,500 kmol; 6,25 kmol NaOH = 250 kg | Valores de carga de ejemplo; cuentas | Recalculado |
| Cl en NaCl = 60,7 % (60,66 % con valores estándar); 100 kg de sal llevan 60,7 kg de cloro | Cálculo | Recalculado |
| N en paracetamol = 9,27 % (9,27 % con valores estándar) | Cálculo | Recalculado |
| Análisis elemental 40,0 % C, 6,7 % H, 53,3 % O da CH₂O; con M = 60, C₂H₄O₂ | Valor de ejemplo (composición de CH₂O); cuenta 3,33 : 6,7 : 3,33 = 1 : 2,01 : 1 | Recalculado |
| Densidades: metanol 0,79 kg/L, tolueno 0,87 kg/L, ácido sulfúrico 98 % 1,84 kg/L (a 20 °C) | Lección `densidad` (nivel 0); metanol y tolueno también en fds.ts | Lección o ficha de la app |
| Sosa al 50 %: 1,52 g/cm³ (20 °C); HCl al 35 %: 1,17 g/cm³ | src/content/fds.ts (CAUSTIL 50 y CLORAC 35, ficticias) | Ficha de la app |
| La densidad cambia con la temperatura | Lección `densidad` | Lección de la app |
| 500 L metanol = 395 kg = 12,34 kmol; 50 L H₂SO₄ 98 % = 92 kg, 90,16 kg puro, 0,920 kmol (0,939 sin riqueza); 1200 L tolueno = 1044 kg = 11,35 kmol | Cálculo | Recalculado |
| P·V = n·R·T con P absoluta en Pa, V en m³, T en K; R = 8,314 J/(mol·K) | Libro de texto (constante universal, como indica el brief) | Libro de texto, comprobado por cálculo |
| A presiones altas los gases reales se apartan de la ley ideal | Libro de texto; también en `gases-de-planta-a-fondo` | Libro de texto |
| Volumen molar: 22,41 L a 0 °C y 1 atm; 22,71 L a 0 °C y 1 bar; 24,05 L a 20 °C y 1 atm | Cálculo con R = 8,314 | Recalculado |
| Espacio de cabeza 2 m³ a 0,5 bar g y 25 °C: 121 mol de N₂, 3,39 kg; con presión manométrica, 40,3 mol | Volumen y condiciones: valor de ejemplo declarado; cuenta | Recalculado |
| 10 mol de CO₂ a 20 °C y 1 atm: 0,2405 m³ = 240 L; 440 g | Cantidad: valor de ejemplo declarado; cuenta | Recalculado |
| Calentar de 20 a 80 °C a volumen y moles constantes: 1,2 bar a pasa a 1,45 bar a; con °C saldría 4,8 | Cálculo (P₁/T₁ = P₂/T₂, derivada de P·V = n·R·T) | Recalculado |
| Ley de Boyle como caso de T constante | `gases-de-planta-a-fondo` | Lección de la app |
| Con disolvente dentro, la presión sube además por su evaporación | Libro de texto (presión de vapor); se remite a «El reactor a fondo» sin dar cifras | Libro de texto |
| Ejemplos de concentración: 40 kg NaOH en 500 L = 2 mol/L; 20 kg en 100 kg = 20 % m/m; 25 g en 500 mL = 5 % m/v; 70 L etanol hasta 100 L = 70 % v/v; 15 kg en 600 L = 25 g/L | Valores de ejemplo; cuentas | Recalculado |
| Al mezclar etanol y agua los volúmenes no se suman exactamente | Libro de texto (contracción de volumen); coherente con `disoluciones` («al diluir cambia la densidad») | Libro de texto |
| 1 ppm en masa = 1 mg/kg; 3000 ppm en 50 kg = 150 g; 5000 ppm = 0,5 %; de ppm a %, entre 10000 | Cálculo a partir de ppm = 10⁻⁶ | Recalculado |
| Sosa 50 %: 19,0 mol/L; 1 kmol en 52,6 L. HCl 35 %: 11,2 mol/L | Cálculo con densidades de fds.ts | Recalculado |
| HCl comercial al ~37 % | Lección `disoluciones` | Lección de la app |
| Errores: 100 kg NaOH = 2,5 kmol; 100 kg paracetamol = 0,66 kmol | Cálculo | Recalculado |
| Ejemplo de planta: 600 L metanol × 0,79 = 474 kg = 14,8 kmol; 250 kg tolueno = 2,72 kmol; sosa 19 mol/L; 0,3 bar g a 22 °C calentado a 64 °C: 1,48 bar a | Equipos, producto y condiciones ficticios; cuentas | Recalculado |
| Metanol hierve hacia 65 °C (para situar el reflujo a 64 °C) | src/content/fds.ts (SOLVEX M, punto de ebullición 65 °C) | Ficha de la app |
| Quiz: 180 g/mol; 2 mol; 4 kmol; 32,65 %; 240,4 mol; 2,5 mol/L; 18,4 mol/L; 1,14 bar a | Cálculo | Recalculado |

## Lo que dejé fuera por no poder verificarlo

- Densidad del ácido clorhídrico al 37 %: no la leí en ninguna fuente accesible; usé la de la ficha de la app al 35 % y lo digo en el texto.
- Factores de compresibilidad de gases reales a presión alta (cuánto se aparta exactamente una botella a 200 bar de la ley ideal).
- Masas atómicas de la IUPAC leídas en su fuente original (ciaaw.org y similares no son accesibles): se usan los valores estándar de clase indicados en el brief.
- La versión más reciente de ICH Q3C (R9, 2024) no se pudo descargar en las URL probadas; el límite del metanol se cita expresamente de la R8 leída.
- Valores de molaridad de los ácidos comerciales tomados de tablas de fabricantes: no se usan; todas las molaridades se calculan con densidades de la app.
