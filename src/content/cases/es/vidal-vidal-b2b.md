---
project: vidal-vidal-b2b
title: 'Vidal & Vidal: tienda mayorista en Shopify Plus | Nicolás Mateos'
description: 'Tienda B2B en Shopify Plus para una casa joyera de Menorca: limpieza del tema exportado de la tienda B2C (29 plantillas, −75 %) y tabla de pedido sobre Sleek.'
h1: 'Vidal & Vidal: de un tema B2C exportado a una tienda mayorista en Shopify Plus'
summary: 'Vidal & Vidal es una casa joyera de Menorca. Su tienda mayorista en Shopify Plus partió de una exportación del tema Sleek de la tienda B2C, sin ninguna lógica B2B: primero se eliminaron 29 plantillas huérfanas, un 75 % de la carpeta templates, y después se llevó al tema la tabla de pedido de Émolo.'
glance:
  problem: 'Convertir en tienda mayorista un tema B2C exportado, sin lógica B2B y con 29 plantillas que impedían trabajar en local.'
  forWho: 'Tu tienda B2B nace de copiar el tema de la B2C y quieres aprovechar lo que ya funciona.'
  notFor: 'Quieres un portal mayorista con un diseño propio, distinto del de tu tienda B2C.'
  outcome: 'Un tema con un 75 % menos de plantillas y la tabla de pedido de Émolo reutilizada, en lugar de escrita otra vez.'
  effort: '4 semanas de front-end, solo yo, en Shopify Plus y a través de una agencia.'
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Joyería'
  country: 'España (Menorca)'
  plan: 'Shopify Plus'
  theme: 'Sleek, exportado de la tienda B2C'
  engagement: 'A través de una agencia'
  duration: '4 semanas'
  team: 'Solo yo, en front-end'
stack:
  - 'Shopify Plus y Shopify B2B'
  - 'Liquid sobre el tema Sleek'
  - 'JavaScript: pub/sub y section bundling de Sleek'
  - 'Ajax Cart API (/cart/update.js)'
  - 'Metafields de tipo dinero y metaobjects'
  - 'Shopify CLI (shopify theme dev)'
results:
  - '29 plantillas huérfanas eliminadas: la carpeta templates del tema B2B se redujo un 75 %.'
  - 'shopify theme dev volvió a funcionar en el tema B2B tras quitar las siete plantillas que referenciaban vídeos de la tienda B2C.'
resultsDone: true
lessons: false
testimonial: false
pending: []
---

## ¿De dónde partía la tienda mayorista de Vidal & Vidal?

El tema B2B de Vidal & Vidal nació como una exportación directa del tema Sleek de la tienda B2C, sin ninguna lógica mayorista. Con la exportación llegaron 29 plantillas huérfanas que la tienda mayorista no usaba. Siete de ellas hacían referencia a vídeos que solo existen en la tienda B2C, y eso rompía `shopify theme dev`: no se podía trabajar en local sobre el tema hasta limpiarlo.

## ¿Cómo se convirtió el tema B2C en una tienda mayorista?

Primero se limpió el tema y después se le añadió la lógica de pedido mayorista, reutilizando la tabla de pedido construida para Émolo.

### Limpieza del tema exportado

Eliminar las 29 plantillas huérfanas redujo la carpeta `templates` del tema B2B en un 75 % y devolvió a `shopify theme dev` un tema que arranca sin errores. Es el paso que permitió trabajar el resto del proyecto en local.

### La tabla de pedido de Émolo, adaptada a Sleek

La tabla de pedido de Vidal & Vidal es la de Émolo llevada a otro tema: la misma lógica, con una capa de adaptación que sustituye los eventos de carrito de Prestige por el pub/sub y el section bundling de Sleek. Además respeta el mismo contrato de red que la lista de pedido rápido nativa de Sleek, así que el carrito lateral y la cabecera se actualizan sin código adicional.

### Precio mayorista junto al PVP

Cada fila de la tabla muestra el stock, el precio mayorista y, a su lado, el PVP, que sale de un metafield de tipo dinero de la variante. La muestra de color de cada fila se resuelve desde un metaobject.

### Solo se envían las filas que cambian

A `/cart/update.js` solo se envían las filas que han cambiado, con cantidades absolutas y en una petición marcada como XHR para que Shopify valide el inventario. El total acumulado se formatea a partir de un importe de ejemplo renderizado con Liquid, así que coincide con la moneda de la sesión en todos los mercados.

### Compra cerrada a quien no es mayorista

La compra está cerrada a cualquiera que no sea cliente mayorista de Vidal & Vidal.
