---
pair: 'checkout-liquid'
term: 'checkout.liquid'
aliases: ['checkout liquid', 'plantilla de checkout', 'checkout antiguo']
category: 'checkout'
seoTitle: 'checkout.liquid: qué era y por qué ya no se toca'
description: 'checkout.liquid era la plantilla que permitía editar el checkout en tiendas Plus. Lo sustituye Checkout Extensibility, y al migrar sobra la mitad de lo que había.'
keyword: 'checkout.liquid shopify'
answer: 'checkout.liquid era la plantilla con la que las tiendas Shopify Plus podían editar el checkout como cualquier otra página del tema. Shopify la ha retirado en favor de Checkout Extensibility, donde el checkout ya no se edita: se extiende con extensiones y Functions en puntos permitidos.'
related: ['checkout-extensibility', 'shopify-scripts']
updated: '2026-10-22'
---

Si alguien de tu equipo sigue hablando de "tocar el checkout.liquid", lo que describe es un modelo que ya no existe. Y la migración no es copiar aquel código a otro sitio.

## Por qué Shopify lo cerró

Una plantilla editable significaba que cada tienda Plus tenía un checkout distinto, y que Shopify no podía mejorar el suyo sin arriesgarse a romper miles de personalizaciones. El modelo nuevo invierte el trato: tú pierdes libertad, y a cambio una actualización de Shopify deja de ser un riesgo para tu tienda.

## Qué hay que hacer con lo que había dentro

El orden que menos trabajo da:

1. **Inventariar.** Qué hacía exactamente, no qué dice la documentación interna que hacía.
2. **Descartar.** Esta es la parte que sorprende: en los proyectos que he visto, cerca de la mitad de las personalizaciones eran apaños que la plataforma ya cubre de serie. Avisos de envío, campos extra, reordenar métodos de pago.
3. **Reconstruir lo que queda.** Lo visual, desde el editor. El contenido y los campos, con extensiones. El comportamiento, con [Functions](/glosario/shopify-functions/).

## Lo que no vuelve

Reordenar los pasos del checkout, maquetarlo libremente o meter JavaScript arbitrario. Si la migración se presupuestó asumiendo que todo aquello se puede replicar, el presupuesto está mal, y es mejor saberlo antes de empezar que a mitad.

Lo mismo le pasó a [Shopify Scripts](/glosario/shopify-scripts/): se cerró y lo que quedaba vivo se reescribió como Function.

Shopify explica la ruta de actualización en la [documentación de checkout](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).
