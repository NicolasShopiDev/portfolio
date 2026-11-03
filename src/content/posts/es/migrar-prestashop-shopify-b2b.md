---
pair: "migrar-prestashop-shopify-b2b"
title: "Migrar de PrestaShop a Shopify si vendes al por mayor: qué comprobar"
seoTitle: "Migrar PrestaShop a Shopify B2B: qué comprobar"
description: "Planifica una migración mayorista de PrestaShop a Shopify: tarifas, variantes, empresas, pedidos, ERP y URLs. Qué ensayar antes de cambiar el dominio."
keyword: "migrar prestashop shopify b2b"
date: "2026-11-03"
tags: ["Migración","Shopify B2B","Integraciones"]
related: ["importar-tarifas-shopify-b2b","pedidos-excel-portal-shopify"]
faq: [{"q":"¿Basta con importar productos para migrar una tienda mayorista?","a":"No. También hay que representar compradores, empresas, tarifas, cantidades, pagos y sistemas externos. La aceptación debe comprobar pedidos completos."},{"q":"¿Puedo copiar los grupos de PrestaShop tal cual?","a":"Primero define qué regla representa cada grupo: precio, acceso, fiscalidad o permiso. Después diseña su equivalente; una etiqueta con el mismo nombre no garantiza el mismo comportamiento."},{"q":"¿Cuándo debería cambiar el dominio?","a":"Después de ensayar catálogo, acceso, pedidos, integración y redirecciones, y de definir quién controla cambios durante el corte. La fecha debe responder a criterios verificables."}]
cta: {"heading":"¿Tu PrestaShop mayorista ya no encaja con la operativa?","text":"Cuéntame cuántas referencias y tarifas tienes, qué módulos sostienen el B2B y qué ERP está conectado. Puedo valorar el alcance de la migración.","label":"Cuéntame qué necesitas migrar"}
---

Para migrar de PrestaShop a Shopify con venta mayorista, inventaría primero las reglas comerciales y después los datos. Mover productos es una parte del trabajo; mantener tarifas, acceso y pedidos correctos es el criterio de éxito.

La pregunta importante es qué seguirá pudiendo hacer cada comprador al día siguiente del cambio. Una portada terminada no responde a si un distribuidor puede repetir su pedido con las condiciones acordadas.

> Plan de aceptación propuesto con documentación revisada en noviembre de 2026. No se afirma haber ejecutado una migración de ejemplo ni se promete conservar posiciones de búsqueda.

## Lista las reglas que hoy viven en módulos

Prepara los módulos instalados y pregunta qué operación depende de cada uno. Puede haber un grupo usado para descuentos, otro para acceso y un desarrollo que exporta pedidos al ERP.

No clasifiques un módulo como prescindible porque no cambia la apariencia. Quizá rellena un campo que almacén necesita o evita que un comprador vea una tarifa interna.

Para cada regla registra un ejemplo válido y uno que deba rechazarse. «Mayoristas» como nombre de grupo es demasiado amplio; «este comprador puede pedir para estas dos sedes con esta tarifa» sí define un comportamiento.

## Diseña la correspondencia, no una copia de etiquetas

| Origen que debes inventariar | Pregunta para el destino |
| --- | --- |
| Grupo de clientes | ¿Precio, acceso o ambas cosas? |
| Tarifa por combinación | ¿Qué variante y qué destinatario? |
| Mínimo o lote | ¿Por variante, producto o pedido? |
| Plazo de pago | ¿Desde qué fecha y quién cobra? |
| Dirección alternativa | ¿Ubicación autorizada o dato libre? |
| Módulo fiscal | ¿Qué calcula y qué exporta a factura? |

Una correspondencia puede requerir dividir una regla de origen en varias piezas. Eso es normal. Lo peligroso es reutilizar el mismo nombre sin comprobar qué hace en cada plataforma.

Shopify ofrece una [guía general de migración](https://help.shopify.com/en/manual/migrating-to-shopify) con opciones de CSV, apps y API, además de verificaciones de catálogo, pagos y dominio. La elección del método no sustituye el diseño de tus equivalencias.

## Ensaya productos con variantes difíciles

Selecciona productos que representen tallas, colores, referencias parecidas, imágenes, formatos de caja y artículos descontinuados. Revisa lo que verá el comprador y lo que recibirá el ERP.

No deduzcas que una importación fue completa porque el número de productos coincide. Cuenta variantes y compara referencias, disponibilidad y unidad de venta. Un producto puede estar presente y tener sus combinaciones mal asociadas.

Documenta qué datos se dejan fuera y dónde se consultarán. La migración no tiene que ocultar sus límites: debe permitir que administración y soporte sepan cómo resolver una consulta histórica.

## Comprueba tarifas con pedidos representativos

Escoge compradores de grupos distintos y prepara una cesta esperada por perfil. Incluye cantidades que activen condiciones especiales, promociones y excepciones conocidas.

Si el destino utiliza catálogos, organiza una [importación controlada de tarifas](/blog/importar-tarifas-shopify-b2b/). No tomes una captura del catálogo como sustituto del pedido: hay que comprobar qué precio llega al comprador.

Si un cliente combina B2B y B2C, prueba ambos recorridos. Un error en la separación puede no aparecer con la cuenta del administrador y sí con un consumidor del mismo país.

## Resuelve acceso y comunicación de clientes

Define cómo reconocerá el nuevo sistema a la persona, para qué empresa compra y qué ubicaciones puede usar. Comprueba el método de acceso elegido en lugar de prometer que cualquier dato de autenticación se trasladará sin cambios.

Prepara comunicaciones claras sobre el cambio: dónde entrar, qué debe revisar el comprador y cómo pedir ayuda. Evita enviar invitaciones mientras sigues cambiando su tarifa o dirección.

No migres contactos duplicados sin revisar la relación entre personas y empresas. Resolver duplicados después del lanzamiento puede mezclar permisos, pedidos y comunicaciones.

## Planifica URLs y contenidos con una lista real

Exporta las URLs que deben seguir teniendo destino y asigna una página nueva a cada intención relevante. Incluye productos, categorías, contenidos informativos y páginas que reciben enlaces.

Una redirección no debe acabar automáticamente en la portada por comodidad. Comprueba que el destino responde a lo que esperaba el visitante y evita cadenas innecesarias.

Después prueba navegación interna, enlaces desde emails y acceso a productos antiguos. No prometas un resultado SEO por el simple hecho de cargar redirecciones: hay que revisar cobertura, contenido y evolución tras el cambio.

## Ensaya el corte y los cambios que llegan durante él

Decide qué sistema acepta pedidos durante la transición, qué datos se congelan y cómo se trasladan las altas o ventas nuevas. Un ensayo sin cambios concurrentes no representa un negocio que sigue vendiendo.

Asigna responsables para catálogo, pagos, ERP y dominio. Define qué señales obligan a parar y qué significa volver al sistema anterior sin perder pedidos.

| Antes del cambio | Evidencia propuesta |
| --- | --- |
| Pedido por cada perfil | Precio, cantidad y total esperados |
| Envío al ERP | Una única venta con datos correctos |
| Cliente recupera acceso | Recorrido completado sin asistencia técnica |
| URL prioritaria antigua | Destino relevante y operativo |
| Error de integración | Registro y recuperación ensayados |

## Qué revisar después del lanzamiento

Compara pedidos, incidencias de acceso, referencias no encontradas y datos pendientes. Durante los primeros días conviene tener una persona capaz de responder a un comprador y otra que pueda comprobar el destino en el ERP.

Registra qué fue una incidencia y qué fue una excepción comercial no prevista. Esa diferencia sirve para priorizar correcciones sin rehacer el alcance a ciegas.

Una [migración a Shopify](/servicios/migracion-a-shopify/) se puede presupuestar con más rigor cuando incluye estas pruebas y un inventario de reglas. El resultado esperado es continuidad operativa, no únicamente un catálogo que se parece al anterior.
