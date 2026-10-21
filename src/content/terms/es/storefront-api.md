---
pair: 'storefront-api'
term: 'Storefront API'
aliases: ['API de escaparate', 'Storefront GraphQL API']
category: 'api'
seoTitle: 'Storefront API de Shopify: para qué sirve de verdad'
description: 'La Storefront API da acceso público de lectura al catálogo y al carrito. Es la base de una tienda headless, y también sirve dentro de un tema normal.'
keyword: 'storefront api shopify'
answer: 'La Storefront API es la interfaz GraphQL pensada para el lado del comprador: lee productos, colecciones y contenido, y crea y modifica carritos. Está pensada para usarse desde el navegador o desde una app, con un token público, y es la base sobre la que se construye una tienda headless.'
related: ['admin-graphql-api', 'headless-commerce', 'hydrogen']
updated: '2026-10-22'
---

La confusión habitual es pensar que es "la otra API" y que da igual cuál uses. No da igual: la [API de Admin](/glosario/api-graphql-de-admin/) es privada y gestiona la tienda, la Storefront es pública y sirve para comprar.

## Público quiere decir público

El token de la Storefront API viaja al navegador, así que cualquiera puede leerlo y usarlo. Eso es normal y está pensado así, pero tiene una consecuencia que conviene entender: **lo que expongas por ahí es visible para todo el mundo**.

En una tienda B2C no suele importar, porque el catálogo ya es público. En un portal mayorista sí importa, y mucho: si montas una pieza con la Storefront API que devuelve precios de catálogo B2B, estás publicando tu tarifa. Esa es la razón por la que en los portales que monto el precio mayorista se decide en [Liquid](/glosario/liquid/), en el servidor, y no se pide desde el navegador.

## No hace falta ser headless para usarla

Se asocia a [headless](/glosario/comercio-headless/) y se puede usar perfectamente dentro de un tema normal, para una pieza concreta: un buscador rápido, un selector de producto complejo, un configurador. Es una decisión por componente, no por tienda.

Documentación: [Storefront API](https://shopify.dev/docs/api/storefront).
