# Fuentes: densidad-y-viscosidad-a-fondo

Cálculos en `src_densidad/calc.py` (python con el paquete `iapws` 1.5.5 para el agua). Documentos descargados en `src_densidad/dl/`.

Documentos leídos de verdad:
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 5.30-5.35, 7.30-7.33, 8.30-8.36).
- ICH Q6A: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (3.3.1 a; 3.3.2.2 k).
- FDA, guía ICH Q4B anexo 13 (mayo de 2013): https://www.fda.gov/media/78958/download (completa).
- BOE, Orden de 28 de diciembre de 1988 (alcoholímetros y tablas alcoholimétricas), texto consolidado: https://www.boe.es/buscar/pdf/1989/BOE-A-1989-1728-consolidado.pdf, y original del BOE n.º 20 de 24-1-1989: https://www.boe.es/boe/dias/1989/01/24/pdfs/A01947-01950.pdf.
- Real Decreto 2032/2009 (BOE-A-2010-927), copia en `src_dens/dl/rd2032.txt` descargada antes en esta sesión desde boe.es.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 pide al menos un ensayo de identidad de cada lote de material recibido (7.30) | ICH Q7 | Leído |
| Personal de producción cualificado puede hacer controles en proceso y ajustar dentro de límites aprobados por calidad, documentado en la hoja (8.33) | ICH Q7 | Leído |
| En controles en proceso para vigilar o ajustar el proceso normalmente no hace falta investigación OOS (8.36) | ICH Q7 | Leído |
| Los ensayos entran en la especificación cuando influyen en la calidad del lote; propiedades fisicoquímicas caso por caso | ICH Q6A, 3.3 y 3.3.1 a | Leído |
| Para líquidos orales bastante viscosos puede incluirse la viscosidad/densidad relativa (*viscosity/specific gravity*) | ICH Q6A, 3.3.2.2 k | Leído |
| Ph. Eur. 2.9.34, JP 3.01 y USP <616> declarados intercambiables; los textos no contienen criterios de aceptación | Guía FDA de ICH Q4B anexo 13 | Leído |
| Definiciones de densidad aparente (sin golpear) y compactada (golpear la probeta hasta que el volumen casi no cambia); fórmulas del índice de Carr = 100 × (V₀ − V_f) / V₀ y razón de Hausner = V₀ / V_f | Fragmento de buscador (resumen de Ph. Eur. 2.9.34 y 2.9.36) | Solo fragmento; las fórmulas se comprobaron por cálculo y por álgebra: Carr = 100 × (1 − 1/H) |
| Tabla de clasificación de fluidez por Carr/Hausner | Ph. Eur. 2.9.36 (de pago) | No se reproduce. Solo se vio en fragmentos de buscador y en copias no oficiales de universidades (hosts no accesibles) |
| Densidad del agua a 4, 15, 20, 25 °C: 0,999975; 0,999101; 0,998206; 0,997048 g/mL | Formulación IAPWS-IF97 (paquete iapws) | Calculado a 0,101325 MPa |
| Viscosidad del agua a 5, 20, 40, 60, 80 °C: 1,518; 1,0016; 0,653; 0,466; 0,354 mPa·s | Formulación IAPWS de viscosidad implementada en iapws | Calculado |
| ν agua 20 °C = 1,0016 / 0,998206 = 1,0034 mm²/s | Cálculo | Recalculado |
| Densidad del aire 0,0012 g/mL | Lección «Densidad a fondo» (1,20 kg/m³ a 20 °C y 1 atm, gases ideales) | Repo y recalculado |
| Corrección de empuje del aire en picnometría ρ = ρa + (Ms/Mw)(ρw − ρa) | Deducción: la lectura de la balanza es proporcional a V(ρ − ρa) y el volumen es el mismo | Cálculo; formulación de libro de texto, no leída en fuente |
| Picnómetro: 24,9526 g, 24,9974 mL, 23,1226 g, 0,9250 g/mL; corregido 0,9251 | Valores de ejemplo declarados; cálculo | Recalculado |
| Tubo vibrante: ρ = A·τ² − B | Deducción del oscilador masa-muelle (τ² proporcional a la masa total) | Cálculo; principio de libro de texto, no leído en fuente |
| Ajuste A = 1,3855; B = 8,6582; muestra τ = 2,6224 ms da 0,8699 g/cm³ | Periodos de ejemplo declarados; cálculo | Recalculado |
| Tolueno 0,87 g/cm³; metanol 0,79 g/cm³ | src/content/fds.ts | Repo |
| Burbujas: lectura más baja (menos masa en el tubo) | Consecuencia directa de ρ = A·τ² − B | Razonamiento; cualitativo |
| Agua baja 0,00205 g/mL entre 15 y 25 °C, unos 0,0002 por grado | IAPWS, cálculo | Recalculado |
| Los disolventes se dilatan más que el agua | Lección «Densidad a fondo» | Repo, cualitativo, sin cifra |
| d20/20 = 0,8716 y d20/4 = 0,8700 para 0,8700 g/mL | Cálculo con IAPWS | Recalculado |
| Definiciones de título alcoholimétrico másico y volúmico (a 20 °C); fórmula oficial de densidad de mezclas etanol-agua de −20 a +40 °C; tablas de la OIML; transpone la Directiva 76/766/CEE | Orden de 28-12-1988, anexos I y II (BOE) | Leído |
| Orden derogada con efectos de 1-12-2015 por la Orden ITC/2451/2011 | Texto consolidado del BOE | Leído |
| Tabla de densidades etanol-agua a 20 °C (0 a 100 % en masa) | Fórmula del anexo II, solo coeficientes A_k (a 20 °C los términos de temperatura valen cero) | Calculado. Aviso: en el PDF del BOE de 1989 (escaneado) las mantisas se leen, pero los exponentes salen ilegibles. A₁ = 9,982012300·10² se lee. Los demás exponentes se reconstruyeron y se comprobaron así: p = 0 da 998,20 kg/m³ (IAPWS da 998,21), la curva baja de forma suave y monótona y p = 1 da 789,2391 kg/m³, la cifra que un documento de la agencia tributaria de Canadá atribuye al etanol puro según la fórmula de la OIML (visto solo en fragmento de buscador). Los coeficientes B dan agua a 25 °C 997,04 frente a 997,05 de IAPWS |
| Interpolación lineal 0,9250 g/mL: 44,7 %; fórmula exacta 44,9 % en masa | Cálculo | Recalculado (brentq) |
| % vol = % mas × ρ mezcla / ρ etanol; 52,6 % vol | Deducción de las definiciones de la Orden | Recalculado |
| Contracción 50 + 50 mL: 89,37 g, 44,2 %, 0,9265 g/mL, 96,5 mL, faltan 3,5 mL | Cálculo con la fórmula | Recalculado |
| Pendiente cerca del 45 %: 0,00214 g/mL por 1 % en masa; 0,0002 g/mL equivale a un 0,1 % | Cálculo con la fórmula | Recalculado |
| Polvo: 0,400 y 0,500 g/mL, Carr 20 %, Hausner 1,25; porosidad 0,69 con sólido de 1,30 g/mL; bidones 48/60 kg, 7 o 5 bidones | Valores de ejemplo declarados; cálculo | Recalculado |
| Cliente que llena comprimidos o cápsulas por volumen; influencia de tamaño, forma, humedad, molienda | Libro de texto | Cualitativo, no leído en fuente |
| Unidad legal de la viscosidad dinámica: pascal segundo (m⁻¹·kg·s⁻¹) | RD 2032/2009 | Leído |
| Unidad de ν: m²/s | Análisis dimensional a partir del RD 2032/2009 (Pa·s entre kg/m³) | Cálculo |
| 1 cP = 1 mPa·s; 1 cSt = 1 mm²/s | Libro de texto (1 P = 0,1 Pa·s; 1 St = 1 cm²/s) | No leído en fuente |
| Viscosímetro capilar da la cinemática (ν = K·t); rotacional da la dinámica | Fragmento de buscador (Chemical Engineering, Anton Paar) y libro de texto | Solo fragmento; sin cifras |
| K = 0,01000 mm²/s², t = 152,4 s, ν = 1,524 mm²/s, η = 1,410 mPa·s | Valores de ejemplo; cálculo | Recalculado |
| Newtoniano / no newtoniano, pseudoplástico, dilatante, tixotrópico; ejemplos cotidianos | Fragmento de buscador y libro de texto | Cualitativo |
| 850 y 420 mPa·s a 10 y 50 rpm | Valores de ejemplo declarados | — |
| Ley de Darcy: caudal inversamente proporcional a la viscosidad | Lección «Filtros a fondo» (repo) y libro de texto | Repo |
| 1,002 / 0,466 = 2,15; 60 min pasan a unos 129 | Cálculo con IAPWS | Recalculado |
| Calibración de equipos críticos (balanza, densímetro, cronómetro) | ICH Q7 5.30-5.34 | Leído |
| Todas las respuestas numéricas del test (0,875; 1,2; 16,7; 0,678; 0,5925; 5) | Cálculo | Recalculado |

## Lo que quería incluir y dejé fuera
- La tabla de clasificación de fluidez de la Farmacopea Europea 2.9.36 / USP <1174> (de pago; no se leyó en ningún documento oficial gratuito). La lección corta `densidad-viscosidad` de `src/content/nivel8.ts` tampoco la reproduce (dice que es de pago y que el límite lo fija la especificación); sus preguntas solo dicen si el polvo se asienta mucho o poco y remiten a la especificación (revisión cruzada de noviembre de 2026).
- Detalles del método de densidad aparente y compactada (probeta de 250 mL, 100 g, número de golpes): solo en los textos de farmacopea, de pago. El borrador de la OMS para la Farmacopea Internacional (2011) solo se vio en un registro de ProQuest, no accesible.
- Números de capítulo de la Farmacopea Europea para densidad relativa y viscosidad: no se pudieron comprobar en una fuente gratuita.
- Dilatación de mezclas etanol-agua con la temperatura: los coeficientes C de la fórmula salen con exponentes ilegibles en el BOE y no se reconstruyeron.
- Viscosidad real de disolventes (tolueno, metanol, etanol) y de mezclas etanol-agua: sin fuente accesible; en el test se usa un valor de ejemplo.
- Corrección por viscosidad de los densímetros de tubo vibrante: solo conocida por fuentes de fabricantes, no accesibles.
- Hosts sin acceso: control.com (403), pmda.go.jp, mhlw.go.jp, apps.who.int, digicollections.net, legislation.gov.uk, assets.publishing.service.gov.uk (tabla alcoholimétrica de HMRC), proquest.com.
