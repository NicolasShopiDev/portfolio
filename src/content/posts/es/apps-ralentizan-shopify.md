---
pair: "apps-ralentizan-shopify"
title: "Qué apps ralentizan tu Shopify: cómo medirlo antes de quitar nada"
seoTitle: "Apps que ralentizan Shopify: cómo medir su impacto"
description: "Aísla el coste de las apps en tu tienda Shopify con mediciones comparables. Qué mirar en scripts, páginas y funciones antes de decidir qué quitar o cambiar."
keyword: "apps shopify ralentizan"
date: "2026-11-03"
tags: ["Rendimiento","Apps","Temas"]
related: ["auditar-javascript-apps-shopify","pedido-rapido-referencia-shopify"]
faq: [{"q":"¿Más apps significa siempre una tienda más lenta?","a":"No es una medida suficiente. Importa qué cargan, dónde lo hacen y qué trabajo ejecutan. Compara páginas y recorridos representativos en condiciones equivalentes."},{"q":"¿Puedo borrar una app porque Coverage muestra código sin usar?","a":"No solo por esa captura. El código puede usarse en otra página o después de una interacción. Revisa su función y prueba el recorrido antes de retirarlo."},{"q":"¿Una mejora de Lighthouse garantiza más ventas?","a":"No. Es una señal técnica de laboratorio. Hay que comprobar la experiencia real, las funciones del negocio y los datos disponibles después del cambio sin atribuir causalidad automáticamente."}]
cta: {"heading":"¿Tu tienda se ha vuelto lenta después de acumular apps?","text":"Cuéntame qué páginas fallan y qué herramientas necesitas conservar. Puedo valorar una auditoría con pruebas comparables y prioridades de mejora.","label":"Cuéntame dónde notas lentitud"}
---

Para saber qué apps ralentizan tu Shopify, mide su carga en páginas representativas y compara un cambio cada vez. El número de apps instaladas no identifica cuánto cuesta cada una ni si puedes retirarla sin perder una función importante.

Empieza con una pregunta concreta: ¿qué tarda en aparecer o responder y en qué recorrido? Una ficha lenta, un filtro que se bloquea y un carrito que tarda en actualizarse pueden tener causas distintas.

> Método de auditoría basado en documentación revisada el 3 de noviembre de 2026. Las tablas son plantillas propuestas; no contienen mediciones de una tienda real ni promesas de ganancia.

## Define el problema antes de ordenar apps por tamaño

Anota URL, dispositivo, estado de consentimiento, perfil del comprador y acción. Si el fallo aparece después de abrir el chat, esa interacción debe estar incluida en la prueba.

No uses solo la portada. Selecciona una colección, una ficha y el carrito que representen el negocio. Si tienes B2B, incluye una sesión con las condiciones de un comprador de empresa.

También registra las funciones que deben seguir operativas: búsqueda, reseñas, atención, captación, analítica y reglas comerciales. El objetivo no es dejar una página vacía para ganar una puntuación.

## Construye un inventario que relacione código y función

| Recurso observado | Función esperada | Dónde debería ser necesario | Responsable |
| --- | --- | --- | --- |
| Widget de reseñas | Mostrar opiniones | Ficha, según diseño | Ecommerce |
| Chat | Atención al comprador | Recorridos definidos | Soporte |
| Etiqueta de marketing | Medición de campaña | Según consentimiento y configuración | Marketing |
| Tabla mayorista | Añadir variantes | Portal B2B | Comercial / desarrollo |

La [guía de Shopify para auditar scripts de terceros](https://shopify.dev/docs/storefronts/themes/best-practices/performance/audit-remove-third-party-scripts) recomienda revisar inventario, utilidad y eliminación completa. Una app desinstalada puede dejar código en el tema; comprueba lo que sigue cargando.

No elimines un dominio porque no reconozcas su nombre. Relaciónalo con una función y un proveedor antes de decidir. Algunos recursos de una misma herramienta pueden venir de varios hosts.

## Conserva una línea base comparable

Usa la misma página, condiciones de red y dispositivo, estado de caché y consentimiento. Repite las mediciones para distinguir una diferencia consistente de una ejecución aislada.

Guarda los resultados y la configuración, no solo una captura del número final. Si una prueba se hizo sin iniciar sesión y otra con una tabla B2B activa, no has aislado la app.

Como plantilla de registro propondría: fecha, URL, variante del ensayo, entorno, métricas, traza y observaciones funcionales. Es suficiente para que otra persona entienda qué se comparó.

## Aísla un recurso sin confundir prueba y solución

Bloquear temporalmente un dominio en DevTools puede ayudar a investigar su coste, según la guía oficial. Ese bloqueo local no es una optimización desplegada ni demuestra que la tienda siga funcionando para todos.

Después de comparar, comprueba qué se ha roto o dejado de medir. Una tabla que ya no calcula precios podría hacer que la página responda antes y al mismo tiempo volverla inutilizable.

No bloquees varios proveedores a la vez si necesitas atribuir el efecto. Cambia uno, registra el resultado y repite. Si existen dependencias, documenta la relación en lugar de asignar todo el coste al último archivo que viste.

## Revisa ejecución y recorrido, además de descarga

Un archivo grande no tiene necesariamente el mayor impacto en la interacción que falla. Inspecciona el trabajo del navegador y cuándo ocurre. La [guía de Shopify para localizar JavaScript costoso](https://shopify.dev/docs/storefronts/themes/best-practices/performance/finding-worst-offenders) sirve como referencia técnica.

Haz las acciones del usuario: cambiar variante, filtrar, abrir carrito y editar cantidad. Una medición de carga sin interacción puede no reproducir la queja de «se queda pensando».

Evita deducir que todo el código no usado en una captura sobra. Puede activarse en otra plantilla o al completar una acción que la grabación no incluyó.

## Decide entre retirar, limitar o sustituir

Si nadie usa una función, retirar su coste puede ser sencillo después de comprobar dependencias. Si es esencial, explora si debe cargar en todas las páginas o solo donde aporta valor.

Para cada candidato haría una decisión explícita:

| Decisión | Qué hay que demostrar |
| --- | --- |
| Retirar | La función no es necesaria y no rompe dependencias |
| Limitar carga | Funciona en las páginas donde debe estar |
| Sustituir | Mantiene requisitos con menor coste medido |
| Conservar | El beneficio justifica su impacto actual |

No propongas diferir scripts indiscriminadamente. El orden de ejecución puede formar parte de una integración. Si lo cambias, verifica inicialización, interacción y seguimiento según el consentimiento previsto.

## Comprueba regresiones y mide el resultado real

Antes de publicar, revisa móvil, búsqueda, variantes, carrito, formularios y las funciones afectadas. Si hay pedidos rápidos, añade una cesta larga y una cantidad inválida.

Después conserva el antes y después bajo las mismas condiciones. No conviertas una diferencia de laboratorio en un porcentaje de ventas recuperadas. El impacto comercial necesita datos propios y una interpretación que considere otros cambios.

Las métricas de usuarios reales y los ensayos de laboratorio responden a preguntas distintas. Registra cuál usas y qué periodo representa, especialmente al evaluar cambios recién desplegados.

## Qué debería entregar una auditoría

Un inventario relacionado con funciones, pruebas reproducibles, decisiones priorizadas y comprobaciones posteriores. Añadiría lo que no se pudo medir y qué acceso o caso falta para comprobarlo.

Si además hay preocupación por scripts desconocidos, el [artículo sobre auditoría de JavaScript](/blog/auditar-javascript-apps-shopify/) aborda otro ángulo. Una revisión de velocidad no certifica por sí sola la seguridad de una app.

La [optimización de Core Web Vitals](/servicios/core-web-vitals/) empieza con evidencia de lo que cuesta tiempo al comprador y una propuesta que conserva lo que tu negocio necesita. Quitar apps es una posible decisión, no el objetivo completo.
