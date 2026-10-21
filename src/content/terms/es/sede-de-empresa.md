---
pair: 'company-location'
term: 'Sede de empresa (company location)'
aliases: ['company location', 'ubicación de empresa', 'delegación']
category: 'b2b'
seoTitle: 'Sede de empresa en Shopify B2B: precios y envíos'
description: 'La sede es la unidad de compra real en Shopify B2B: decide dirección, impuestos, condiciones de pago y, con Plus, el catálogo. Hasta 25 catálogos por sede.'
keyword: 'company location shopify b2b'
answer: 'Una sede (company location) es la dirección concreta de una empresa desde la que se compra, y es la unidad que realmente decide el pedido: su dirección de envío, sus impuestos, sus condiciones de pago y, en Shopify Plus, su propio catálogo. Una empresa con tres delegaciones puede comprar a tres precios distintos.'
related: ['company', 'b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

La sede es el objeto que más se infravalora al presupuestar un portal B2B. Suena a dato de facturación y en realidad es la pieza que decide qué ve el comprador.

## Qué cambia entre planes

En Shopify Plus un catálogo se puede asignar **directamente a una sede**. Sin Plus no: el catálogo se asigna a un mercado B2B y las empresas de ese mercado lo heredan, igual para todas sus sedes. Por eso "cada delegación con su tarifa" es uno de los motivos reales para pasar a Plus.

El tope de la plataforma es de **25 catálogos por sede** y **50 compradores por sede**, igual en todos los planes. Ese 25 convive con el límite de 3 catálogos activos de los planes sin Plus: el primero es de la plataforma, el segundo es de tu plan, y es el segundo el que te frena.

## El selector de sede

Si un comprador tiene varias sedes, el cambio de sede tiene que estar donde se compra, no enterrado en la cuenta. Cambiar de sede puede cambiar el precio de todas las líneas del carrito, así que conviene que el cambio sea visible y que el carrito avise de que se ha recalculado.

En la práctica lo resuelvo con un selector en la cabecera que lee `customer.current_location` y que, al cambiar, recarga el carrito. Es el patrón que describo en [la página de código](/codigo/).

Más detalle en la [documentación de sedes](https://help.shopify.com/en/manual/b2b/companies).
