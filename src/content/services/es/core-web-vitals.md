---
pair: 'performance'
label: 'Rendimiento'
h1: 'Optimización de velocidad y Core Web Vitals en Shopify'
pitch: 'Una tienda que carga rápido en el móvil de tus clientes'
topic: 'other'
lead: 'Mido la tienda con datos de usuarios reales, no solo con Lighthouse, y arreglo lo que de verdad cuesta segundos: scripts de apps que ya nadie usa, imágenes sin dimensionar y JavaScript del tema que bloquea la interacción.'
serviceName: 'Optimización de rendimiento en Shopify'
serviceType: 'Optimización web'
seoTitle: 'Optimizar la velocidad de una tienda Shopify | Nicolás Mateos'
description: 'Optimización de Core Web Vitals en Shopify: LCP, INP y CLS. Auditoría con datos reales, limpieza de apps y arreglos en el tema, con antes y después medidos.'
keyword: 'optimizar velocidad shopify'
cases: []
faq:
  - q: '¿Puedo llegar a 100 en Lighthouse?'
    a: 'En una tienda real con apps, casi nunca, y no es el objetivo. Lo que se puede conseguir es pasar los tres Core Web Vitals con datos de usuarios reales, que es lo que mira Google y lo que nota el comprador.'
  - q: '¿Qué suele ser el problema?'
    a: 'Por frecuencia: scripts de apps desinstaladas que siguen cargando, imágenes sin width y height, la imagen principal dentro de un carrusel que arranca con JavaScript, y el carrito reconstruido a mano en cada cambio.'
  - q: '¿Hay que cambiar de tema?'
    a: 'Casi nunca. En las auditorías que he hecho, la mayor parte del tiempo perdido no está en el tema: está en lo que se le ha ido añadiendo encima.'
related: ['custom-themes', 'migration-to-shopify']
terms: ['core-web-vitals', 'liquid']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Primero medir, y medir lo que cuenta

Lighthouse sirve para comparar antes y después en condiciones iguales. Lo que decide tu posicionamiento son los datos de campo de usuarios reales: una tienda puede marcar 95 en Lighthouse y tener malos [Core Web Vitals](/glosario/core-web-vitals/) si el 70 % de sus visitas llegan desde un móvil con conexión mala.

Así que la auditoría empieza por los datos reales y por saber de dónde vienen tus visitas. Optimizar el escritorio de una tienda cuyo tráfico es 80 % móvil es trabajo tirado.

## El orden en el que arreglo

1. **Apps fantasma.** La app se quita del panel y su script sigue cargando. Es lo primero que miro y casi siempre hay dos o tres. Es también el arreglo más rentable: quitar peso no tiene riesgo de diseño.
2. **Imágenes.** Tamaño declarado, formato moderno, la principal cargada pronto y fuera de cualquier carrusel que necesite JavaScript para pintar el primer fotograma.
3. **JavaScript del tema.** Normalmente es el carrito: reconstruirlo a mano en cada cambio cuando se puede pedir la sección ya renderizada a Shopify.
4. **[Liquid](/glosario/liquid/) caro.** Bucles anidados sobre colecciones grandes. La solución casi siempre es mover el cálculo a un metacampo.

## Lo que entrego

El antes y el después medidos con el mismo método, la lista de lo que se tocó y por qué, y lo que no he tocado porque el riesgo no compensaba. En [la página de código](/codigo/) puedes ver los números de esta web, medidos sobre el sitio desplegado y no en local.
