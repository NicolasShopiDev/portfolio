---
pair: 'liquid'
term: 'Liquid'
aliases: ['lenguaje Liquid', 'plantillas Liquid', 'Shopify Liquid']
category: 'theme'
seoTitle: 'Liquid en Shopify: qué es y qué puede y no puede hacer'
description: 'Liquid es el lenguaje de plantillas de los temas de Shopify. Se ejecuta en el servidor antes de enviar el HTML, y eso decide qué se puede hacer en el tema.'
keyword: 'qué es liquid shopify'
answer: 'Liquid es el lenguaje de plantillas con el que se construyen los temas de Shopify. Se ejecuta en el servidor de Shopify antes de enviar el HTML al navegador, así que puede leer productos, colecciones, el cliente o el carrito, pero no puede reaccionar a nada que pase después en la página.'
related: ['sections-and-blocks', 'shopify-b2b', 'ajax-cart-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Entender dónde se ejecuta Liquid resuelve el 90 % de las dudas sobre qué se puede hacer en un tema. Liquid pasa **una vez**, en el servidor. Cuando el HTML llega al navegador, Liquid ya ha terminado: a partir de ahí todo es JavaScript.

## Lo que eso implica en la práctica

- Un precio que depende del cliente se puede decidir en Liquid porque la sesión ya existe cuando se renderiza. Por eso `customer.b2b?` es la forma correcta de que un precio mayorista **no llegue nunca al HTML** de un visitante sin sesión.
- Un cambio de cantidad en el carrito no puede resolverlo Liquid: eso es la [Cart API](/glosario/api-ajax-de-carrito/). Lo que sí se puede es pedirle a Shopify que vuelva a renderizar una sección y devolver su HTML.
- Un filtro de colección con 20 combinaciones no se monta con bucles de Liquid: se monta con los filtros nativos de la tienda.

## El coste de un bucle

Liquid tiene límites de ejecución por página, y los temas lentos casi siempre tienen la misma causa: bucles anidados sobre colecciones grandes. Recorrer todas las variantes de todos los productos de una colección para calcular algo es la forma más rápida de que una página tarde segundos.

La alternativa suele ser un [metacampo](/glosario/metacampos/) con el dato ya calculado. Mover el cálculo del render al momento de guardar es la optimización que más veces he aplicado.

Referencia: [Liquid](https://shopify.dev/docs/api/liquid).
