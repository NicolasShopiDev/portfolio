---
pair: 'shopify-functions'
term: 'Shopify Functions'
aliases: ['Functions', 'funciones de Shopify', 'function']
category: 'functions'
seoTitle: 'Shopify Functions: qué son y qué límites tienen'
description: 'Las Shopify Functions son código propio que corre en el back-end de Shopify para descuentos, validaciones, envíos y pagos. Requieren Plus si son a medida.'
keyword: 'qué son shopify functions'
answer: 'Las Shopify Functions son código propio que se ejecuta dentro del back-end de Shopify, en puntos concretos del carrito y del checkout: descuentos, validaciones, transformación de líneas, métodos de envío y de pago. Se escriben en JavaScript o Rust, se compilan a WebAssembly, y una Function a medida solo se puede instalar en tiendas con Shopify Plus.'
related: ['shopify-scripts', 'input-query', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

Las Functions son la respuesta de Shopify a "necesito una regla de negocio que la plataforma no trae". Sustituyeron a [Shopify Scripts](/glosario/shopify-scripts/) y se diferencian en algo importante: no corren en el navegador ni en un servidor tuyo, corren dentro de Shopify, antes de que el checkout se dibuje.

## El presupuesto, que es la parte que sorprende

Una Function no es una función normal. Tiene un presupuesto de ejecución —del orden de **11 millones de instrucciones**— y un **límite de 128 kB en el input**. Eso cambia cómo se escribe:

- La [input query](/glosario/input-query/) es la mitad del trabajo: una Function solo ve lo que pide, y en un bloc de pedido con 200 líneas no caben campos de sobra.
- No hay llamadas de red. No puedes consultar tu ERP desde dentro de una Function.
- Los datos que la Function necesita y que no son nativos van en [metacampos](/glosario/metacampos/), que es lo que sí llega en el input.

## El límite de plan

Es el punto que más presupuestos rompe: **solo las tiendas con Shopify Plus pueden instalar apps personalizadas que contengan Functions**. En Basic, Grow y Advanced puedes usar funciones que vengan dentro de una app pública del App Store, pero no una escrita para tu tienda. La diferencia práctica: con la app pública te adaptas a su modelo de datos, con una Function propia el modelo lo pones tú.

## Un ejemplo completo

Una Function de validación que bloquea el checkout cuando una línea no es múltiplo de la caja de almacén, con su input query y sus pruebas, está publicada en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab) y se puede tocar en vivo en el Checkout Lab de [la portada](/).

Documentación oficial: [Shopify Functions](https://shopify.dev/docs/api/functions).
