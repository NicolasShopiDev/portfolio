---
pair: 'quantity-rules'
term: 'Reglas de cantidad'
aliases: ['quantity rules', 'mínimo de pedido', 'múltiplos', 'caja completa']
category: 'b2b'
seoTitle: 'Reglas de cantidad en Shopify B2B: mínimos y múltiplos'
description: 'Las reglas de cantidad fijan mínimo, máximo e incremento por variante dentro de un catálogo B2B. Son lo que obliga a pedir cajas completas sin escribir código.'
keyword: 'reglas de cantidad shopify b2b'
answer: 'Las reglas de cantidad son el mínimo, el máximo y el incremento con los que se puede pedir una variante dentro de un catálogo B2B. Son la forma nativa de obligar a pedir en cajas completas o a partir de un mínimo, y funcionan en todos los planes que soportan B2B.'
related: ['volume-pricing', 'b2b-catalog', 'shopify-functions']
updated: '2026-10-23'
verified: '2026-10-23'
---

Tres números por variante: mínimo, máximo e incremento. Con eso se cubre la mayor parte de lo que en una reunión se describe como "es que no pueden pedir unidades sueltas".

## Dónde se aplican y dónde no

Las reglas viven en el catálogo, así que el mismo producto puede tener mínimos distintos para el mayorista y para el distribuidor. El tema las recibe y debería usarlas en el propio `input`: `min`, `max` y `step` en el campo de cantidad. Es la diferencia entre avisar al comprador antes de que escriba y avisarle cuando ya ha intentado pagar.

Lo que no hacen: validar combinaciones entre líneas. "Mínimo 300 € por pedido" o "no se puede mezclar tarifa A y tarifa B en el mismo pedido" no son reglas de cantidad. Un importe mínimo igual para todos, o para todo el B2B, se pone desde abril de 2026 con la validación de límite de pedido de Checkout Blocks, en cualquier plan con B2B: está explicado en [pedido mínimo en Shopify](/blog/pedido-minimo-shopify/). Lo que cambia según la empresa o lo que lleva el carrito es una [Shopify Function](/glosario/shopify-functions/) de validación, y una Function escrita a medida necesita Plus.

## El caso de la caja completa

El ejemplo que más repito: un producto que sale del almacén en cajas de 6. Con un incremento de 6 en la regla de cantidad, el campo ya no deja escribir 7 y el problema desaparece en el origen.

Si por cualquier motivo la regla no se puede aplicar (un pedido importado, una línea creada desde el admin), el respaldo es una Function de validación que bloquea el checkout y dice qué cambiar. Esa Function está publicada con sus pruebas en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).

Configuración en la [documentación de catálogos](https://help.shopify.com/en/manual/b2b/catalogs).
