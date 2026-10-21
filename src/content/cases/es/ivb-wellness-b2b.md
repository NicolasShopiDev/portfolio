---
project: ivb-wellness-b2b
title: 'IVB Wellness Lab: portal B2B para farmacias | Nicolás Mateos'
description: 'Portal B2B en Shopify para farmacias: precios por tramos de volumen editables desde el admin, tabla de pedido multivariante y compra solo para cuentas de empresa.'
h1: 'IVB Wellness Lab: portal B2B en Shopify para farmacias, con precios por tramos de volumen'
summary: 'IVB Wellness Lab es un laboratorio español de suplementos presente en más de 3000 farmacias. Su portal de pedidos B2B se construyó en 2026 sobre el tema Enterprise, a partir de los diseños de la marca en Figma: las farmacias compran por tramos de volumen, ven su tramo en toda la tienda y el cliente cambia los umbrales desde el admin.'
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Suplementos y salud'
  country: 'España'
  theme: 'Enterprise, a partir de diseños en Figma'
  plan: 'Shopify Plus'
  engagement: 'A través de una agencia'
  duration: '6 semanas'
  team: 'Una diseñadora y yo'
stack:
  - 'Shopify B2B (cuentas de empresa)'
  - 'Liquid sobre el tema Enterprise'
  - 'Metafields de tienda, producto y variante'
  - 'Metaobjects (badges y esquemas de color)'
  - 'JavaScript'
resultsDone: true
lessons: false
testimonial: false
pending: []
---

## ¿Qué necesitaba IVB Wellness Lab?

Las farmacias compran a IVB Wellness Lab por tramos de volumen: cuanto más piden, mejor precio. El portal B2B de IVB tenía que enseñar ese tramo en toda la compra, no solo en el carrito, y el cliente necesitaba cambiar los umbrales de cada tramo sin pedir una nueva versión del tema. También quería gestionar desde el admin los badges y los colores de cada producto.

## ¿Cómo funciona el portal B2B de IVB?

La lógica de tramos, la tabla de pedido y el merchandising salen de datos que el cliente edita en el admin de Shopify, no de valores escritos en el código del tema.

### Tramos de volumen calculados en Liquid desde un metafield

La lógica de tramos recorre la cabecera, la página de producto y el carrito. El tramo actual del comprador aparece en la navegación, y el siguiente se calcula en Liquid a partir de una configuración guardada en un metafield de la tienda. Así, el cliente cambia los umbrales de los tramos sin que haya que publicar una nueva versión del tema.

### Tabla de pedido multivariante con productos hermanos

La página de producto de IVB incluye una tabla de pedido multivariante. Sus filas pueden ser variantes o productos hermanos enlazados mediante un metafield, con galerías por variante y un pie con los totales. Cuando una fila cambia de variante, la tabla mantiene sincronizadas las secciones de la página que dependen de ella.

### Badges y esquemas de color como metaobjects

Los badges de producto y los esquemas de color son metaobjects que el tema convierte en marcado y en clases CSS, así que el merchandising se gestiona desde el admin sin tocar el código.

### Compra para empresas y pedidos repetidos

La compra está restringida a cuentas de empresa. Las colecciones se abren en una vista de lista pensada para repetir pedidos, los badges de descuento redondean a la baja de la misma forma en toda la tienda, el PVP sale de un metafield y el carrito ofrece material promocional en un pop-up cuando el comprador va a pagar.
