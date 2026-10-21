---
pair: 'quick-order'
term: 'Pedido rápido (quick order)'
aliases: ['quick order', 'bloc de pedido', 'order pad', 'pedido por referencia']
category: 'b2b'
seoTitle: 'Pedido rápido en Shopify B2B: cómo se monta bien'
description: 'El pedido rápido es la tabla donde un comprador mayorista pide muchas líneas de una vez. No viene con el tema: se monta, y el detalle está en el carrito.'
keyword: 'pedido rápido shopify b2b'
answer: 'El pedido rápido es la tabla donde un comprador mayorista introduce cantidades de muchas referencias a la vez y las envía al carrito en una sola operación. No es una función de Shopify sino un patrón de front-end, y es lo que más diferencia a un portal B2B usable de un catálogo bonito.'
related: ['quantity-rules', 'ajax-cart-api', 'shopify-b2b']
updated: '2026-10-21'
verified: '2026-10-21'
---

Un comprador B2C compara y elige. Un comprador B2B ya sabe lo que quiere y lo que necesita es escribirlo rápido. Esa diferencia es todo el diseño del portal.

## El error que hace fallar la mitad de las implementaciones

Una tabla con 40 referencias y una cantidad por fila invita a hacer una petición por línea. Cuarenta llamadas seguidas al carrito hacen dos cosas malas: el carrito parpadea cuarenta veces y, peor, **la última respuesta puede llegar antes que la primera**, así que el total que ve el comprador no es el que tiene.

La [Cart API](/glosario/api-ajax-de-carrito/) acepta un objeto con varias líneas de golpe, y devuelve ya renderizado el HTML de las secciones que hay que repintar. Una petición, un estado, un repintado.

## Cantidades absolutas, no incrementos

El segundo detalle que ahorra incidencias: enviar la cantidad total de cada línea, no "suma 3". Con cantidades absolutas, un primer pedido, una ampliación y una corrección son exactamente la misma petición, y una línea rechazada deja el carrito como estaba.

## Lo que no se puede olvidar

- **Búsqueda por referencia**, que es como busca un comprador profesional, no por nombre de producto.
- **Stock por fila**, porque pedir lo que no hay es la queja número uno.
- **Las [reglas de cantidad](/glosario/reglas-de-cantidad/) aplicadas al propio campo**, con `min` y `step`.
- **Sincronía con el resto del tema**: la misma variante tiene que mostrar la misma cantidad en la ficha, en el listado y en el buscador.

El patrón completo, reconstruido sobre Dawn y sin código de ningún cliente, está en [shopify-b2b-order-portal](https://github.com/NicolasShopiDev/shopify-b2b-order-portal).
