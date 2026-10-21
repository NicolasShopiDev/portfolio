---
pair: 'draft-order'
term: 'Pedido borrador (draft order)'
aliases: ['draft order', 'presupuesto', 'pedido manual']
category: 'b2b'
seoTitle: 'Pedido borrador en Shopify: presupuestos y pedidos B2B'
description: 'Un pedido borrador es un pedido creado desde el admin o la API antes de cobrarlo. Es la pieza con la que se montan presupuestos y pedidos por teléfono en B2B.'
keyword: 'draft order shopify'
answer: 'Un pedido borrador (draft order) es un pedido creado desde el admin o la API antes de que exista un pago, con sus líneas, su cliente y su precio ya fijados. En B2B es la forma habitual de pasar un presupuesto a pedido y de meter un pedido tomado por teléfono o por email.'
related: ['payment-terms', 'company', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

En mayorista, el pedido no siempre empieza en la web. Empieza en una llamada, en un Excel que manda el comercial o en un email con quince referencias. El pedido borrador es donde aterriza todo eso sin romper el modelo de la tienda.

## Para qué se usa de verdad

Tres cosas, por frecuencia:

1. **Presupuesto.** Se monta el pedido con precios y portes, se manda al comprador y, cuando lo acepta, se convierte en pedido. No hay que reescribir nada.
2. **Pedido tomado fuera de la web.** El comercial lo mete por el admin con el cliente y la sede correctos, y el precio sale del catálogo que le toca.
3. **Excepciones.** Un precio especial puntual o un porte negociado que no justifica tocar el catálogo.

## Lo que hay que saber antes de automatizarlo

Si se crean por [API](/glosario/api-graphql-de-admin/) desde un ERP o un configurador, conviene tener claro que el borrador no reserva stock y que los precios que se escriben a mano no se recalculan solos. Un borrador creado en enero con un precio de enero sigue teniendo ese precio en marzo.

El otro punto: el envío del borrador al comprador manda un enlace de pago. Si la empresa tiene [condiciones de pago](/glosario/condiciones-de-pago/) a plazo, el flujo correcto no es ese enlace, es convertirlo a pedido con su vencimiento.

Detalle en la [documentación de pedidos borrador](https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders).
