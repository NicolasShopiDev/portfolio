---
pair: 'new-theme-for-b2b'
question: '¿Necesito un tema nuevo para vender B2B en Shopify?'
category: 'theme'
seoTitle: '¿Hace falta un tema nuevo para vender B2B?'
description: 'No. Un portal mayorista se monta sobre el tema que ya tienes: el precio del catálogo llega resuelto y el acceso lo decide una condición de Liquid.'
keyword: 'tema shopify b2b'
answer: 'No. Un portal mayorista se puede montar sobre el tema que ya tienes, incluido uno de pago: el precio del catálogo llega resuelto al tema y el acceso se decide con una condición de Liquid sobre customer.b2b?. Lo que suele hacer falta es trabajo de front-end sobre ese tema, no empezar de cero.'
related: ['hide-prices', 'update-customised-theme']
terms: ['liquid', 'quick-order', 'sections-and-blocks']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Por qué no hace falta empezar de cero

La parte de B2B que parece más difícil —que cada empresa vea su precio— no la hace el tema. La hace la plataforma: el catálogo asignado a la empresa resuelve el precio antes de que el tema lo pida. Al tema solo le queda una decisión, que es quién ve precios y quién no.

Eso significa que un tema de pago bien hecho ya sirve de base. El portal mayorista de [Émolo](/proyectos/#emolo-b2b), una marca de joyería de Murcia, está construido sobre el tema Prestige que la tienda ya usaba.

## Lo que sí hay que añadir

Aquí está el presupuesto real de un portal B2B, y no tiene nada que ver con el diseño:

- **Decidir el acceso** con una condición de Liquid, en todos los sitios donde sale un precio y no solo en la ficha.
- **[Tabla de pedido](/glosario/pedido-rapido/)** por variante, con stock y cantidad por fila, que es como pide un comprador mayorista.
- **Búsqueda por referencia**, porque un profesional busca por SKU y no por nombre de producto.
- **Las reglas de cantidad del catálogo aplicadas al propio campo**, con `min` y `step`, para avisar antes de escribir y no al pagar.
- **Repetir el último pedido**, que es la función más usada de cualquier portal.

## Cuándo sí toca tema nuevo

Por los mismos motivos que en B2C, no por el B2B: cuando el tema de pago se ha tocado tanto que actualizarlo es imposible, o cuando la marca necesita algo que ningún tema del catálogo hace. Si no estás en ninguno de esos dos casos, el presupuesto rinde mucho más gastado en el flujo de pedido que en rehacer el front-end entero.
