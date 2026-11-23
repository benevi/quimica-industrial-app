# Fuentes de la lección `filtros-a-fondo`

Aviso sobre el método: en esta sesión solo se pudieron abrir y leer enteras las páginas de dominios oficiales (insst.es, health.ec.europa.eu). Las webs de fabricantes, revistas técnicas, Wikipedia y universidades no eran accesibles para lectura directa, así que esas afirmaciones se comprobaron con los **fragmentos devueltos por el buscador** (texto citado de la página). Se indica en cada fila. Conviene que alguien con acceso abra esas URL antes de dar la lección por definitiva.

Claves: **Leído** = texto leído en el documento descargado. **Fragmento** = cita del buscador, página no abierta. **Cálculo** = recalculado con node. **Razonamiento** = se deduce de otra fila o de física elemental; no hay fuente externa propia.

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| El líquido cruza el filtro por una diferencia de presión; se crea con presión de gas por arriba o con vacío por abajo | https://en.wikipedia.org/wiki/Agitated_Nutsche_filter ; lección `filtros` del repo | Fragmento («the liquid is forced through with pressure or vacuum») |
| Con vacío la diferencia de presión no pasa de 1 bar aproximadamente | Razonamiento: la presión atmosférica es de 1 bar aprox. (1,013 bar) y por debajo no se puede bajar de cero | Razonamiento |
| A presión constante el caudal baja con el tiempo porque la torta crece y aumenta la resistencia | https://old.vscht.cz/uchi/ped/chi/filtrace_upr2013.pdf (apuntes universitarios) | Fragmento («Constant Pressure Filtration: pressure drop is kept constant and the flow rate is allowed to fall with time»; ΔP = (Rf+Rc)(μ/A)dV/dt con Rc = hc/κc) |
| Filtrar el doble de volumen cuesta bastante más del doble de tiempo | Misma fuente: a presión constante el tiempo es función cuadrática del volumen (t/V frente a V es una recta) | Fragmento + razonamiento |
| Ley de Darcy: caudal proporcional a permeabilidad, superficie y diferencia de presión; inversamente proporcional a viscosidad y espesor | https://www.doitpoms.ac.uk/tlplib/powder/HTML5/FluidFilterFlowSIM.html (Univ. de Cambridge, CC BY-NC-SA): Q = (κ/η)(ΔP/Δx) por unidad de superficie | Fragmento |
| Torta el doble de gruesa, mitad de velocidad (si la resistencia de la tela es despreciable) | Cálculo a partir de la ley de Darcy | Cálculo |
| Cristales más finos dan una torta menos permeable y filtración más lenta | Lección `filtros` del repo («un filtrado muy lento puede indicar cristales demasiado finos»); coherente con Kozeny-Carman citado en https://manufacturingchemist.com/optimising-process-steps-and-performance-with-agitated-nutsche-1 | Fragmento + coherencia con el repo |
| Nutsche abierto: protege poco al operador y controla poco las emisiones | Patente US 5389244, antecedentes: https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/5389244 | Fragmento («open batch nutsches… little protection for operators and very little emission control») |
| Nutsche cerrado: trabaja sellado, con presión o vacío, sin exponer el producto | https://blog.wstyler.com/filters/nutsche-filter-dryers-high-purity-standards ; Wikipedia (arriba) | Fragmento |
| Filtro-secador agitado: filtra, lava, seca y descarga en el mismo equipo | https://dedietrich.com/en/equipment/process/filtration-drying/agitated-nutsche-filter-dryer | Fragmento («the wet cake can be fully dried and discharged as a powder, all in a single unit») |
| Filtro prensa: placas forradas de tela apretadas que forman cámaras; se bombea la suspensión, el sólido llena las cámaras, el filtrado sale por las placas; se abren las placas para sacar la torta | https://www.mclanahan.com/products/filter-press ; https://en.wikipedia.org/wiki/Filter_press | Fragmento |
| Filtro de bolsa: bolsa de tejido sujeta por cesta metálica en una carcasa; para más carga de sólidos y partículas más gruesas; a veces como prefiltro de un cartucho | https://www.filtermart.com/blogs/bag-filter-vs-cartridge-filter ; https://www.lenntech.com/cartridgefilter-bagfilter.htm | Fragmento |
| Cartucho: filtración más fina que la bolsa; es el filtro de pulido | Mismas fuentes; lección `filtros` del repo | Fragmento |
| Agitador regulable en altura (sube y baja) | https://en.wikipedia.org/wiki/Agitated_Nutsche_filter («height-adjustable agitator») ; movimiento vertical hidráulico en el mismo artículo | Fragmento |
| El agitador gira en los dos sentidos: uno alisa, el otro remueve | https://news.thomasnet.com/fullstory/benchtop-nutsche-filter-dryer-with-agitator-585588 (equipo de sobremesa: remueve en un sentido y, invertido, vuelve a alisar) ; artículo de PSL en trends.directindustry.com («reversing the agitator's direction») | Fragmento. Ojo: comprobado en dos fabricantes, no en todos los modelos |
| Durante la filtración el agitador no interviene | https://manufacturingchemist.com/how-an-agitated-nutsche-filter-dryer-works-204869 | Fragmento («the agitator is not involved in the actual filtration step») |
| Camisa de calefacción; en algunos equipos se calientan también fondo y agitador | https://dedietrich.com/en/agitators-nutsche-filter/dryers | Fragmento («heat transfer media is typically applied to the vessel's sidewalls, filter base, and agitator blades») |
| Válvula de descarga lateral; el agitador baja girando y empuja el sólido hacia la boca | Wikipedia (arriba) ; https://dedietrich.com/en/node/1092 ; https://www.chemicalprocessing.com/processing-equipment/powder-solids/product/11299378/ | Fragmento |
| Alisado: el agitador cierra grietas y deja plana la torta; se hace tras filtrar o lavar | Catálogo De Dietrich https://pdf.directindustry.com/pdf/de-dietrich/nutsche-filter-dryer/161798-628601.html ; https://www.slideshare.net/slideshow/filtration-and-drying-equipment-32187781/32187781 | Fragmento («the agitator is used to smooth the wet cake, which helps avoid cracks or preferential paths») |
| Lavado por desplazamiento: el líquido limpio se rocía sobre la torta y se empuja con presión o vacío | Presentación de fabricante en SlideShare (arriba) | Fragmento |
| Lavado por resuspensión: se añade líquido, se mezcla con el agitador, se para y se levanta el agitador y se filtra; se usa si la torta está muy agrietada o el desplazamiento no funciona | Misma presentación | Fragmento |
| El desplazamiento necesita una torta sin grietas | https://filtech.de/conference/conference-archive/doi/conf2019-413 | Fragmento («displacement washing is usually applied to filter cakes that do not show shrinkage, cracks…») |
| La torta se agrieta al encogerse cuando pierde líquido; el lavado se va por las grietas | Patente US 4017399 https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4017399 ; tesis Imperial College https://spiral.imperial.ac.uk/entities/publication/32547005-de81-4d16-8f8e-2e847b300f44 | Fragmento |
| El gas del soplado también se escapa por las grietas | Tesis Imperial College (arriba) | Fragmento |
| No secar entre lavados salvo que la hoja lo diga | Razonamiento a partir de las dos filas anteriores; patente US 7470370 («if the filter cake surface is not covered with wash feed, bypassing can occur») | Fragmento + razonamiento. No se encontró una fuente que lo enuncie como regla literal |
| Soplado: pasar nitrógeno por la torta quita disolvente sin calentar | https://manufacturingchemist.com/optimising-process-steps-and-performance-with-agitated-nutsche-1 | Fragmento («Convective pre-drying (blow-through)…») |
| Secado a vacío con calor y agitación; la agitación ayuda a soltar el disolvente | SlideShare (arriba: «vacuum drying is the most common drying method in filter/dryers») ; De Dietrich (arriba) | Fragmento |
| El vacío hace que el disolvente se evapore a menos temperatura | Lección `secaderos` del repo | Coherencia con el repo |
| Enfriar antes de descargar; comprobar presión atmosférica antes de abrir | Lección `secaderos` del repo | Coherencia con el repo; sin fuente externa propia |
| Romper el vacío con nitrógeno y no con aire | Lección `secaderos` del repo; razonamiento con el triángulo del fuego | Razonamiento. La búsqueda no devolvió una fuente externa que lo describa como paso |
| Talón: capa que queda entre agitador y placa porque el agitador debe guardar distancia para no dañar la tela | Patentes US 5564350 y US 7473375: https://patents.google.com/patent/US5564350 , https://patents.justia.com/patent/7473375 | Fragmento |
| Algunos equipos sueltan el talón con golpes de nitrógeno a través de la placa | https://www.chemicalprocessing.com/processing-equipment/powder-solids/product/11299378/ | Fragmento |
| Punto de burbuja: se moja el filtro, se sube la presión de gas hasta que vence al líquido de los poros mayores; valor bajo = filtro no íntegro; depende del líquido de mojado; no destructivo | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9865406/ ; https://ncbionetwork.org/educational-resources/elearning/filter-integrity-testing | Fragmento |
| El Anexo 1 de las GMP de la UE cita punto de burbuja, flujo difusivo, intrusión de agua y mantenimiento de presión como ejemplos de ensayo | EudraLex vol. 4, Anexo 1 (2022), apartado 8.87: https://health.ec.europa.eu/document/download/e05af55b-38e9-42bf-8495-194bbf0b9262_en?filename=20220825_gmp-an1_en_0.pdf | Leído en el PDF descargado |
| El aire tiene un 21 % de oxígeno; por debajo del 16 % la atmósfera es peligrosa; los gases inertes son incoloros e inodoros y no avisan | INSST, NTP 340: https://www.insst.es/documents/94886/326827/ntp_340.pdf/81a6d822-eea7-4769-b032-a05d19d1767a | Leído en el PDF descargado |
| Descarga como punto de exposición; aislador o contenedor acoplado | https://manufacturingchemist.com/containment-at-scale-safer-filtration-and-drying-of ; ficha Comber (arriba) | Fragmento |
| Cálculo 1: 2,0 m² × 0,15 m = 0,30 m³ = 300 L; 1,5 × 300 = 450 L; 2 × 450 = 900 L | Cálculo | Recalculado con node |
| Cálculo 2: 1200 + 480 = 1680; 1680 − 1430 = 250; 250 − 50 = 200; 50/250 = 20 %; 200 − 196 = 4; 4/200 = 2 % | Cálculo | Recalculado con node |
| Test: 1,6 × 0,25 = 0,4 m³ = 400 L; × 1,5 = 600 L | Cálculo | Recalculado con node |
| Test: 27/180 = 15 %; 180 − 27 = 153 kg | Cálculo | Recalculado con node |
| Test: 2,0 − 0,3 = 1,7 bar | Cálculo | Recalculado con node |
| Valores del ejemplo de planta (FD-402, KR-17, 1,5 bar, 450 L, 50 °C, 25 °C, 196 kg) | Inventados; así se dice en el texto | No son datos técnicos |

Comprobaciones de formato: el archivo `.ts` compila con `tsc --strict` contra `src/content/types.ts`; el body no contiene flechas, comillas invertidas ni `${`.

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Presiones de trabajo típicas de un filtro-secador (bar de nitrógeno, nivel de vacío) y espesores típicos de torta: no encontré una cifra en fuente abierta fiable.
- Valor del límite de oxígeno para inertizar (concentración límite de oxígeno por disolvente): solo aparece en normas de pago (NFPA 69, EN 1127-1); la lección remite al límite de la hoja.
- Holgura entre agitador y placa («unos 10 mm», «varios milímetros»): solo salía en fragmentos de patentes, sin poder leer el contexto.
- Cuántos volúmenes de torta se usan «normalmente» para lavar y la curva de lavado (impureza restante frente a relación de lavado): se deja como dato de la hoja.
- Qué lavado gasta menos disolvente (desplazamiento o resuspensión): las fuentes se contradicen (literatura académica frente a un artículo de fabricante).
- La regla concreta de «añadir el lavado justo cuando el nivel de líquido llega a la superficie de la torta»: es coherente con lo encontrado, pero ninguna fuente la enuncia.
- Tamaños de poro o rangos en micras de cartuchos y bolsas, y usos concretos de la bolsa en API (carbón activo, catalizador): solo webs comerciales generales, sin confirmación.
- Filtro de polvo en la línea de vacío del filtro-secador, toma de muestras y sistemas de limpieza in situ: no verificados.
- Destino del talón (disolverlo en la limpieza, dejarlo para el lote siguiente de campaña): práctica no verificada; la lección solo dice que lo decide la hoja.
- Mejora del secado con agitador calefactado («15 a 20 % más rápido»): dato comercial de un solo fabricante.
- Valores de presión del punto de burbuja y su fórmula (tensión superficial, ángulo de contacto), y si el ensayo es exigible a filtros de pulido no estériles de una planta de API: el Anexo 1 solo aplica a estériles; no encontré requisito equivalente en ICH Q7.
- Dispositivos de seguridad de presión del equipo (válvula de seguridad, disco de ruptura) y su tarado: sin fuente gratuita específica.
