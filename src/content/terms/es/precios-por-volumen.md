---
pair: 'volume-pricing'
term: 'Precios por volumen'
aliases: ['volume pricing', 'precio por tramos', 'descuento por cantidad']
category: 'b2b'
seoTitle: 'Precios por volumen en Shopify B2B: cómo funcionan'
description: 'Los precios por volumen son saltos de precio al pasar de una cantidad dentro de un catálogo B2B. Funcionan sin Plus y resuelven muchos casos de cuarto catálogo.'
keyword: 'precios por volumen shopify b2b'
answer: 'Los precios por volumen son escalones de precio dentro de un catálogo B2B: a partir de X unidades de una variante, el precio unitario baja. Se configuran por producto dentro del catálogo y están disponibles en todos los planes que soportan B2B, también sin Shopify Plus.'
related: ['b2b-catalog', 'quantity-rules', 'price-list']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la función de B2B que más proyectos salva y la que menos se usa. Cuando alguien pide un cuarto catálogo porque "este cliente compra mucho más", casi siempre lo que describe no es un precio distinto: es una cantidad distinta.

## Precio por tramos, no descuento

Un tramo de volumen no es un descuento aplicado al final: es el precio unitario de esa variante a partir de esa cantidad. Eso tiene dos consecuencias prácticas. La primera es que el comprador ve el incentivo mientras pide, no al pagar. La segunda es que el tema tiene que mostrarlo: si el precio cambia al llegar a 12 unidades y la ficha no lo dice, el comprador pide 10 y nadie gana.

## Lo que hay que enseñar en el front-end

En los portales que monto, la tabla de tramos va junto al selector de cantidad, y la fila activa se marca según lo que hay en el carrito. Dos detalles que importan:

- El salto se calcula por **variante**, no por producto. Doce unidades repartidas entre cuatro tallas no son doce de una talla.
- Si usas [reglas de cantidad](/glosario/reglas-de-cantidad/) con múltiplos, los tramos deberían caer en múltiplos válidos. Un tramo que empieza en 10 cuando el múltiplo es 6 es un tramo al que no se llega nunca.

## Cuándo no basta

Cuando la diferencia entre dos clientes es de precio de verdad —un acuerdo cerrado, no un volumen— el tramo no lo resuelve. Ahí toca otro catálogo o, si ya tienes tres, [valorar Plus](/comparativas/shopify-plus-o-advanced/).

La configuración está en la [documentación de catálogos y precios](https://help.shopify.com/en/manual/b2b/catalogs).
