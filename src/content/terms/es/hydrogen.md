---
pair: 'hydrogen'
term: 'Hydrogen'
aliases: ['Hydrogen de Shopify', 'Oxygen', 'React en Shopify']
category: 'theme'
seoTitle: 'Hydrogen: el framework headless de Shopify, explicado'
description: 'Hydrogen es el framework de Shopify en React para montar escaparates headless, con Oxygen como alojamiento. Cuándo compensa frente a un tema normal.'
keyword: 'shopify hydrogen'
answer: 'Hydrogen es el framework de Shopify, basado en React, para construir escaparates headless que leen los datos de la Storefront API. Shopify lo acompaña de Oxygen, su propio alojamiento, de modo que el camino de desarrollo a producción lo cubre la plataforma en lugar de montarlo tú.'
related: ['headless-commerce', 'storefront-api', 'liquid']
updated: '2026-10-22'
---

Si ya has decidido ir [headless](/glosario/comercio-headless/), Hydrogen es el camino con menos piezas sueltas: trae las consultas a la [Storefront API](/glosario/storefront-api/), el manejo del carrito y los componentes de producto resueltos, y se despliega en Oxygen sin montar infraestructura.

La pregunta real no es "¿Hydrogen o otro framework?", es "¿headless o tema?". Si la respuesta es tema, Hydrogen no entra en la conversación.

## Cuándo lo recomendaría

Cuando el equipo que va a mantener la tienda **ya trabaja en React** y el escaparate tiene lógica de interfaz que un tema haría incómoda. En ese caso, lo que en Liquid serían semanas de pelearse con el editor se convierte en código normal para ellos.

## Cuándo no

Cuando el motivo es la velocidad. Un tema bien construido compite de sobra, y el peso de una tienda lenta casi nunca está en el renderizado del servidor: está en lo que se le ha ido añadiendo encima.

Y cuando el cliente monta sus propias páginas. Ese es el coste que más tarde se nota: con Hydrogen, cada landing nueva vuelve a pasar por desarrollo, mientras que con [secciones y bloques](/glosario/secciones-y-bloques/) la monta el equipo de marketing en una tarde.

## En B2B, un aviso

Hydrogen no te da gratis el contexto de empresa. El catálogo, el precio del comprador y la sede hay que pedirlos y propagarlos tú, cuando en un tema llegan resueltos. Es trabajo que no aparece en la demo.

Documentación: [Hydrogen](https://shopify.dev/docs/storefronts/headless/hydrogen).
