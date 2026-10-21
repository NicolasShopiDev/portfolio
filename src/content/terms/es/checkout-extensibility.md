---
pair: 'checkout-extensibility'
term: 'Checkout Extensibility'
aliases: ['extensibilidad del checkout', 'checkout extensions', 'UI extensions']
category: 'checkout'
seoTitle: 'Checkout Extensibility en Shopify: qué permite tocar'
description: 'Checkout Extensibility es el modelo actual para personalizar el checkout de Shopify con extensiones y Functions, en lugar de editar checkout.liquid.'
keyword: 'checkout extensibility shopify'
answer: 'Checkout Extensibility es el modelo con el que hoy se personaliza el checkout de Shopify: extensiones de interfaz que se colocan en puntos permitidos, Functions que cambian descuentos, envíos o pagos, y configuración en el editor. Sustituye a editar checkout.liquid, que ya no es una opción.'
related: ['shopify-plus', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

El cambio de mentalidad es este: antes el checkout era una plantilla que se editaba, y ahora es una aplicación en la que se enchufan piezas en sitios concretos. Se pierde libertad y se gana que una actualización de Shopify no rompe la tienda.

## Las tres piezas

- **Extensiones de interfaz**, que añaden contenido en puntos permitidos del checkout y de la página de gracias: un aviso, un campo, un bloque de información de entrega.
- **[Functions](/glosario/shopify-functions/)**, que cambian el comportamiento: descuentos, validaciones que bloquean el pago, orden y disponibilidad de métodos de envío y de pago.
- **El editor**, para lo visual: logotipo, colores, tipografías y orden de los bloques, sin código.

## Lo que se puede y lo que no

Se puede: avisar de un mínimo, mostrar el plazo de pago de una empresa B2B, pedir un número de pedido de compra, ocultar un método de envío, bloquear el checkout con un mensaje concreto.

No se puede: reordenar libremente los pasos del checkout, inyectar JavaScript arbitrario en la página, o maquetar el checkout como una página normal. Si un presupuesto da por hecho eso, el presupuesto está mal.

## El límite de plan

Lo visual y las apps públicas funcionan en planes sin Plus. Una extensión o una Function **escritas a medida para la tienda** necesitan [Shopify Plus](/glosario/shopify-plus/), porque van dentro de una app personalizada.

Documentación: [Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout).
