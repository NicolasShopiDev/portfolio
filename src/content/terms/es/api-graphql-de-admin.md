---
pair: 'admin-graphql-api'
term: 'API GraphQL de Admin'
aliases: ['Admin API', 'GraphQL Admin API', 'API de administración']
category: 'api'
seoTitle: 'API GraphQL de Admin de Shopify: para qué se usa'
description: 'La API GraphQL de Admin lee y escribe los datos de la tienda: productos, pedidos, empresas B2B y metacampos. Es por donde entran las integraciones con el ERP.'
keyword: 'admin api graphql shopify'
answer: 'La API GraphQL de Admin es la interfaz con la que una app o un sistema externo lee y escribe los datos de una tienda Shopify: productos, variantes, stock, pedidos, clientes, empresas B2B y metacampos. Es la vía por la que entran las integraciones con un ERP y las automatizaciones.'
related: ['draft-order', 'ajax-cart-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la API que importa cuando el proyecto deja de ser "una tienda" y pasa a ser "una tienda conectada a lo que la empresa ya tenía". Casi siempre aparece por el mismo sitio: el stock y los precios viven en el ERP, y alguien tiene que llevarlos a Shopify sin tocar nada a mano.

## Lo que hay que planificar antes de escribir código

Tres cosas, y ninguna es GraphQL:

- **El coste de las consultas.** La API tiene un presupuesto por consulta y por ventana de tiempo. Una sincronización que recorre 20.000 variantes de una en una se come el presupuesto; la misma hecha por lotes, no.
- **Quién gana cuando los dos lados cambian.** Si el ERP y Shopify pueden modificar el stock, hay que decidir el sentido y escribirlo. Casi todas las integraciones que he visto romperse lo tenían sin decidir.
- **Qué hacer con lo que falla.** Una línea rechazada no puede quedarse en silencio. Hace falta reintento y un sitio donde mirar.

## Las operaciones masivas

Para importar o exportar mucho, la API tiene operaciones masivas: se lanza la consulta, se espera y se recoge un archivo con el resultado. Es más lento de programar y es la diferencia entre una sincronización nocturna que acaba y una que se queda a medias.

## Lo que no hace

No sirve para leer el carrito de un comprador en la tienda: eso es la [Cart API](/glosario/api-ajax-de-carrito/). Y no se puede llamar desde dentro de una Shopify Function.

Documentación: [Admin API GraphQL](https://shopify.dev/docs/api/admin-graphql).
