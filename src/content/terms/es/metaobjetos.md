---
pair: 'metaobjects'
term: 'Metaobjetos (metaobjects)'
aliases: ['metaobjects', 'metaobjeto', 'contenido estructurado']
category: 'theme'
seoTitle: 'Metaobjetos en Shopify: contenido propio sin apps'
description: 'Los metaobjetos son tipos de contenido propios en Shopify: tallas, materiales, sedes, autores. Se referencian desde productos y se renderizan en el tema.'
keyword: 'metaobjetos shopify'
answer: 'Los metaobjetos son tipos de contenido definidos por ti dentro de Shopify, con sus propios campos: una guía de tallas, un material, un punto de venta, un autor. Existen por sí mismos, se referencian desde productos o páginas con un metacampo, y el tema los renderiza como cualquier otro objeto.'
related: ['metafields', 'sections-and-blocks', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

La diferencia con un [metacampo](/glosario/metacampos/) es de pertenencia. Un metacampo describe a un objeto que ya existe. Un metaobjeto **es** un objeto: vive solo, se edita una vez y lo usan muchos productos.

## Cuándo vale la pena

La prueba es sencilla: ¿este dato se repite en varios productos y cuando cambia hay que cambiarlo en todos? Si la respuesta es sí, es un metaobjeto.

Los casos que más me encuentro:

- **Guía de tallas** compartida por toda una familia de producto.
- **Materiales o composiciones**, con su nombre, su descripción y su icono.
- **Sedes o puntos de venta**, con dirección y horario, para una página de tiendas.
- **Certificaciones**, que llevan logotipo y texto legal.

El beneficio real no es técnico: es que el cliente lo edita una vez y se actualiza en 200 fichas, sin tocar el tema.

## Lo que hay que planificar

Dos cosas. La primera, que un metaobjeto puede tener su propia URL si se le asigna, y entonces pasa a ser contenido indexable; conviene decidirlo a propósito y no por descuido. La segunda, que el tema tiene que renderizarlo: un metaobjeto sin una sección que lo muestre es un dato que nadie ve.

Y el aviso de siempre: los metaobjetos no son una base de datos. Si lo que se quiere es un catálogo de 50.000 filas con búsqueda, no es esto.

Documentación: [metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects).
