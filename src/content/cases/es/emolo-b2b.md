---
project: emolo-b2b
title: 'Émolo: portal B2B en Shopify para joyería | Nicolás Mateos'
description: 'Portal mayorista sobre el tema Prestige: precios solo para empresas, tabla de pedido por tallas sincronizada con el carrito y búsqueda por referencia.'
h1: 'Émolo: portal mayorista B2B en Shopify para una marca de joyería'
summary: 'Émolo es una marca de joyería hecha a mano de Murcia. Su portal mayorista se construyó en 2026 sobre el tema Prestige que ya usaba la tienda: solo los compradores de una empresa ven precios y pueden comprar, y piden todas las tallas de una pieza desde una tabla sincronizada con el carrito.'
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Joyería hecha a mano'
  country: 'España (Murcia)'
  theme: 'Prestige'
stack:
  - 'Shopify B2B (empresas y compradores)'
  - 'Liquid sobre el tema Prestige'
  - 'JavaScript: custom elements'
  - 'Ajax Cart API (/cart.js y /cart/update.js)'
  - 'Metafields'
pending:
  - 'Fragmento de código de la llamada a /cart/update.js (reescrito, no el del cliente), si das el OK.'
  - '¿Es la misma tienda que la B2C de Émolo o una tienda aparte solo para mayoristas?'
---

## ¿Qué necesitaba Émolo?

Émolo quería vender al por mayor desde Shopify sin cambiar el tema Prestige que ya tenía. El portal B2B de Émolo debía cumplir dos condiciones. La primera, que nadie sin cuenta de empresa viera precios, ni siquiera en el código de la página. La segunda, que un comprador pudiera pedir varias tallas de una misma pieza de una sola vez, desde la ficha de producto, desde las colecciones o desde la búsqueda.

## ¿Cómo funciona el portal B2B de Émolo?

El portal se apoya en las cuentas de empresa de Shopify B2B y en una tabla de pedido propia que comparte estado con el carrito en toda la tienda.

### Precios solo para compradores de una empresa

El acceso lo decide una única condición de Liquid sobre `customer.b2b?`, que leen todos los precios, los badges de stock y los botones de compra. Así, un visitante sin sesión iniciada o un cliente sin empresa nunca recibe un precio en el HTML: no es un precio oculto con CSS, es un precio que no se envía. Los compradores pueden además ocultar sus propios precios en pantalla. Esa preferencia se guarda en localStorage y se aplica en el `head`, antes de que se pinte la página, para que el precio no llegue a parpadear.

### Una tabla de pedido por variantes

La tabla de pedido de Émolo se renderiza en Liquid y la controla un custom element, con una fila por variante y el stock en tiempo real. Sus selectores de cantidad se inicializan una sola vez desde `/cart.js` y se mantienen sincronizados con el evento `cart:change` del tema. Por eso una variante muestra la misma cantidad en la ficha de producto, en cada tarjeta de colección y en los resultados de búsqueda.

### Una sola petición a /cart/update.js con cantidades absolutas

Al enviar, la tabla hace una única llamada a `/cart/update.js` con cantidades absolutas. Con este contrato, un primer pedido, una ampliación y una reducción son la misma petición, y si Shopify rechaza una línea el carrito queda intacto en lugar de quedarse a medias.

### Búsqueda por referencia, vistas y galerías por variante

Completan la tabla una búsqueda por referencia (SKU) que marca la fila coincidente, el cambio entre vista de parrilla y de lista, galerías por variante que salen de un metafield y el estado del stock en cada línea del carrito. Un handler de `pageshow` vuelve a leer el carrito cuando el navegador restaura la página desde la bfcache, para que las cantidades no se queden desfasadas al volver atrás.
