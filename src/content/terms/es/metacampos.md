---
pair: 'metafields'
term: 'Metacampos (metafields)'
aliases: ['metafields', 'metafield', 'campos personalizados']
category: 'theme'
seoTitle: 'Metacampos en Shopify: qué son y cuándo usarlos'
description: 'Los metacampos guardan datos propios en productos, variantes, clientes o pedidos. Son la forma correcta de que el tema y las Functions lean información a medida.'
keyword: 'metacampos shopify'
answer: 'Los metacampos (metafields) son campos propios que se añaden a un objeto de Shopify —producto, variante, cliente, pedido, empresa— para guardar datos que la plataforma no trae de serie. Tienen tipo y validación, y son accesibles desde el tema en Liquid, desde la API y desde dentro de una Shopify Function.'
related: ['metaobjects', 'input-query', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la primera herramienta que hay que mirar cuando aparece un dato que Shopify no tiene: la caja de almacén de una variante, la ficha técnica de un producto, el código de cliente del ERP. Antes de instalar una app o de inventar una convención en las etiquetas, casi siempre la respuesta es un metacampo.

## Con tipo, y eso importa

Un metacampo no es texto libre: tiene un tipo (entero, decimal, fecha, referencia a producto, archivo, lista) y Shopify valida lo que se guarda. Eso evita el clásico de leer `"6 uds"` donde el código esperaba `6`.

Y el tipo decide cómo se lee en el tema. Una referencia a producto llega como el objeto producto, no como un identificador que haya que resolver a mano.

## Variante frente a producto

La decisión que más se equivoca. Si el dato cambia por talla o por color, va en la **variante**. La caja de almacén es un caso claro: no todas las tallas van en cajas de 6. Un metacampo de producto obliga a aproximar, y la aproximación aparece en el almacén.

## Por qué importan en las Functions

Una [Shopify Function](/glosario/shopify-functions/) no puede llamar a nada: lo único que ve es lo que su [input query](/glosario/input-query/) le pasa. Así que cualquier regla de negocio que dependa de un dato propio necesita ese dato en un metacampo, con su alias en la consulta. Si el dato está en una app o en un sistema externo, la Function no lo puede usar.

Documentación: [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).
