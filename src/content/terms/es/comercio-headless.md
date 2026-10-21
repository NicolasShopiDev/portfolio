---
pair: 'headless-commerce'
term: 'Comercio headless'
aliases: ['headless', 'headless commerce', 'desacoplado']
category: 'api'
seoTitle: 'Comercio headless en Shopify: qué ganas y qué pierdes'
description: 'Headless es separar el escaparate de Shopify y pintarlo tú con la Storefront API. Da control total del front-end y te quita el editor de temas y parte de las apps.'
keyword: 'shopify headless'
answer: 'Headless es construir el escaparate por tu cuenta y pedirle a Shopify solo los datos, a través de la Storefront API, en lugar de dejar que Shopify renderice las páginas con un tema. Ganas control absoluto del front-end y pierdes el editor de temas, parte del ecosistema de apps y el mantenimiento que antes no era tuyo.'
related: ['hydrogen', 'storefront-api', 'liquid']
updated: '2026-10-22'
---

Es la decisión con peor relación entre lo que promete y lo que cuesta en la mayoría de los proyectos que me la piden. No porque esté mal, sino porque casi siempre se pide por el motivo equivocado.

## El motivo equivocado: "queremos que vaya rápido"

Un tema bien hecho sobre Shopify va rápido. Cuando una tienda va lenta, la causa casi nunca es [Liquid](/glosario/liquid/): son los scripts de apps que ya nadie usa, las imágenes sin dimensionar y el carrito reconstruido a mano en cada cambio. Irse a headless con esos hábitos produce una tienda headless lenta, y además ahora el servidor es tuyo.

## Los motivos buenos

- **El escaparate no es una tienda.** Una web de contenido enorme, una aplicación, un punto de venta raro, y la compra es una parte.
- **Varias marcas o canales** compartiendo un mismo front-end.
- **Un front-end que ya existe** y funciona, al que se le añade comprar.

## Lo que se pierde, y conviene escribirlo antes de empezar

El editor de temas: tu cliente deja de montar páginas solo y vuelve a depender de desarrollo. Las apps que se instalan como bloques de tema dejan de servir. El checkout sigue siendo de Shopify, así que la libertad no es total. Y el alojamiento, el despliegue y las actualizaciones pasan a ser tuyos.

En B2B hay un peaje extra: el contexto de empresa, el catálogo y el precio del comprador hay que llevarlos a mano por la [Storefront API](/glosario/storefront-api/), que en un tema vienen resueltos.

Si después de leer esto sigues en el sí, [Hydrogen](/glosario/hydrogen/) es el camino corto.
