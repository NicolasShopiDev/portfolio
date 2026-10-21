---
pair: 'core-web-vitals'
term: 'Core Web Vitals'
aliases: ['LCP', 'INP', 'CLS', 'métricas web esenciales']
category: 'theme'
seoTitle: 'Core Web Vitals en Shopify: qué medir y qué arreglar'
description: 'Core Web Vitals son LCP, INP y CLS: carga, respuesta y estabilidad. En Shopify los tres suelen empeorar por lo mismo, y no es el tema.'
keyword: 'core web vitals shopify'
answer: 'Core Web Vitals son las tres métricas con las que Google mide la experiencia de una página: LCP (cuánto tarda en pintarse el elemento principal), INP (cuánto tarda la página en responder a una interacción) y CLS (cuánto se mueve el contenido mientras carga). En Shopify las tres empeoran casi siempre por scripts de apps y por imágenes sin dimensionar.'
related: ['liquid', 'sections-and-blocks']
updated: '2026-10-21'
verified: '2026-10-21'
---

Importan por dos motivos distintos y conviene no mezclarlos. El primero es que son una señal de posicionamiento, pequeña pero real. El segundo, que es el que de verdad mueve dinero, es que una ficha de producto que tarda cuatro segundos en el móvil de un comprador pierde ventas.

## De dónde vienen los problemas en Shopify

Por frecuencia, en las tiendas que he auditado:

1. **Scripts de apps que ya no se usan.** La app se desinstala del panel y su `script_tag` o su bloque sigue cargando. Es lo primero que miro y casi siempre hay dos o tres.
2. **Imágenes sin `width` y `height`.** Cada una es un salto de CLS, y el salto se nota justo cuando el usuario va a pulsar.
3. **La imagen principal cargada tarde**, dentro de un carrusel que arranca con JavaScript. El LCP se dispara aunque el servidor responda rápido.
4. **JavaScript del tema que bloquea la interacción**, normalmente por reconstruir el carrito entero en cada cambio en lugar de pedir la sección renderizada.

## Cómo lo mido

Lighthouse sirve para comparar antes y después, pero lo que cuenta para Google son los datos de campo de usuarios reales. Una tienda puede tener 95 en Lighthouse y malos Core Web Vitals si el 70 % de sus visitas vienen de un móvil con conexión lenta.

Por eso en esta web los números que se publican en [la página de código](/codigo/) se miden sobre el sitio ya desplegado, no en local.
