---
pair: 'ajax-cart-api'
term: 'API Ajax de carrito'
aliases: ['Cart API', 'cart.js', 'cart/update.js', 'Ajax Cart API']
category: 'api'
seoTitle: 'API Ajax de carrito de Shopify: update.js y secciones'
description: 'La Cart API modifica el carrito desde el tema sin recargar. Acepta varias líneas en una sola llamada y devuelve el HTML de las secciones a repintar.'
keyword: 'shopify cart api ajax'
answer: 'La API Ajax de carrito es el conjunto de rutas (/cart.js, /cart/add.js, /cart/update.js, /cart/change.js) con las que el tema lee y modifica el carrito sin recargar la página. Acepta varias líneas en una sola llamada y puede devolver ya renderizado el HTML de las secciones que hay que actualizar.'
related: ['quick-order', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la API con la que se juega todo el flujo de pedido de un portal B2B, y la que más se usa mal.

## update.js frente a add.js

`add.js` añade. `update.js` fija cantidades absolutas. Para un bloc de pedido mayorista, `update.js` es la correcta, y no por gusto: con cantidades absolutas, el primer pedido, la ampliación y la corrección son la misma petición. Con `add.js` hay que saber qué había antes, y ahí empiezan los descuadres.

```js
await fetch('/cart/update.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ updates: { 4631: 12, 4632: 6 }, sections: 'cart-drawer,cart-icon-bubble' }),
});
```

## El parámetro `sections`

Es el que ahorra la mitad del JavaScript. En lugar de recibir el carrito en JSON y volver a dibujarlo a mano, se piden las secciones del tema y llega su HTML ya renderizado por Shopify, con los precios formateados y los textos traducidos. Un `innerHTML` y ya está.

## Dos detalles que dan incidencias

- **El orden de las respuestas.** Varias llamadas en paralelo pueden llegar desordenadas: la última respuesta no es necesariamente el último estado. Una llamada por acción, con las líneas juntas.
- **La bfcache.** Si el usuario vuelve con el botón atrás, el navegador puede restaurar la página con el carrito viejo. Releer el carrito en el evento `pageshow` lo arregla.

Documentación: [Ajax Cart API](https://shopify.dev/docs/api/ajax/reference/cart).
