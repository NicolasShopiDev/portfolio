---
pair: vender-por-cajas-shopify
title: 'Vender por cajas en Shopify: múltiplos, mínimos y variantes mezcladas'
seoTitle: 'Vender por cajas y múltiplos en Shopify B2B'
description: 'Configura cajas completas en Shopify B2B y distingue múltiplos por variante de cajas mezcladas. Qué resuelve el catálogo y cómo comprobar pedidos incorrectos.'
keyword: 'vender por cajas shopify'
date: '2026-11-03'
tags: ['Shopify B2B', 'Catálogos', 'Shopify Functions']
related: ['precio-incorrecto-shopify-b2b', 'pedido-minimo-shopify', 'shopify-b2b-b2c-misma-tienda']
faq:
  - q: '¿Puedo vender en múltiplos de seis en Shopify B2B?'
    a: 'Sí. Las reglas de cantidad de los catálogos permiten definir incrementos por variante. Antes de configurarlas, confirma que la cantidad del pedido representa unidades y que una caja contiene seis de esa misma variante.'
  - q: '¿Poner un mínimo de seis obliga a comprar cajas completas?'
    a: 'No. El mínimo y el incremento expresan condiciones distintas. En una regla de cajas de seis, siete unidades superan el mínimo pero no forman una caja completa; define también el múltiplo y comprueba ese caso.'
  - q: '¿Puedo completar una caja mezclando tallas o colores con las reglas nativas?'
    a: 'Las reglas nativas de catálogo se aplican por variante, sin sumar tallas o colores distintos. Una caja mezclada necesita un modelo de pack o una validación que agrupe los artículos según tu regla comercial.'
  - q: '¿Necesito Plus para una validación a medida de cajas mezcladas?'
    a: 'Si se implementa mediante una app personalizada con Shopify Functions, sí. Sin Plus, puedes evaluar una app pública que use Functions y cubra esa agrupación. Comprueba el alcance real de la app en tu recorrido de compra.'
cta:
  heading: '¿Tus cajas mezclan referencias o cambian según el cliente?'
  text: 'Cuéntame qué contiene una caja, qué representa una unidad en Shopify y qué pedidos debería aceptar el almacén. Puedo valorar si bastan las reglas de catálogo o necesitas una validación específica para tu portal B2B.'
  label: 'Cuéntame cómo preparas las cajas'
---

Para vender cajas completas de una misma variante en Shopify B2B, configura reglas de cantidad en el catálogo, con el incremento y el mínimo que correspondan. Si la caja combina tallas, colores o referencias, esas reglas por variante no bastan: primero hay que definir cómo se agrupan las unidades.

La pregunta de partida no es qué app instalar. Es **qué significa una unidad en tu tienda y qué considera una caja completa tu almacén**. Si cada equipo responde algo diferente, aparecerán pedidos que parecen correctos en pantalla y no se pueden preparar como se prometieron.

> Funciones contrastadas con documentación oficial en noviembre de 2026. Los ejemplos y la matriz de aceptación son propuestas de diseño. No representan pruebas ejecutadas en una tienda de cliente.

## Una caja puede significar tres cosas distintas

Antes de configurar, escribe un pedido válido y otro inválido con referencias reales. Esta tabla ayuda a separar los modelos:

| Modelo comercial | Pedido válido ilustrativo | Qué hay que comprobar |
| --- | --- | --- |
| Caja de la misma variante | 6 botellas de 500 ml del mismo aroma | Cada variante completa sus propias cajas |
| Caja mezclada | 3 botellas de un aroma y 3 de otro | La suma del grupo autorizado completa la caja |
| Pack de composición fija | 2 unidades S, 2 M y 2 L | Se respeta la composición, no solo el total |

Los tres pedidos contienen seis piezas, pero no son intercambiables. Una comprobación que solo sume seis aceptaría un pack de seis tallas S aunque el contrato exigiera dos de cada talla.

También decidiría si se permiten varias cajas, muestras sueltas o excepciones autorizadas por el comercial. Esas respuestas forman parte del alcance; no deberían aparecer cuando el desarrollo ya está terminado.

## Decide si Shopify cuenta piezas o cajas

Hay dos modelos posibles: que cantidad 1 signifique una pieza, o que signifique una caja. La elección afecta a precio, stock, preparación y datos que recibe el ERP.

Ejemplo de diseño: una caja contiene seis botellas y cuesta 48 €. Si vendes piezas, una cantidad de 6 a 8 € representa esa caja. Si vendes la caja como artículo, una cantidad de 1 a 48 € representa lo mismo comercialmente, pero los datos del pedido son distintos.

Antes de elegir, preguntaría al almacén qué referencia espera recibir y cómo descuenta las botellas. No daría por resuelto el inventario de componentes por haber llamado «Caja de seis» a un producto. Ese nombre describe una oferta; todavía hay que diseñar y comprobar su relación con el stock.

En la interfaz mostraría ambas magnitudes cuando ayuden: «2 cajas, 12 botellas». El comprador no debería tener que adivinar si el número del selector se refiere a cajas o a piezas.

## Cuándo bastan las reglas nativas de catálogo

Shopify incluye reglas de cantidad entre sus [funciones B2B](https://help.shopify.com/en/manual/b2b/getting-started/features). Son el punto de partida cuando vendes por cantidades de una misma variante; no hace falta empezar por una Function personalizada.

En **Markets > Catálogos**, abre el catálogo y entra en la gestión de productos y precios. Añade las reglas de cantidad del producto o variante: incremento, mínimo y, si procede, máximo. Guarda. La [guía oficial de configuración](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing) recoge los campos y el recorrido.

Para el ejemplo de seis botellas idénticas, escribiría primero la condición «aceptar 6, 12 y 18; rechazar 7». Después configuraría y comprobaría ese resultado con el comprador B2B adecuado. Así validas una decisión comercial, no solo que hayas rellenado tres campos.

Trabaja con un catálogo y unas referencias controladas antes de extender el cambio al resto. Conserva una relación de los artículos modificados para que el equipo pueda revisar qué se ha activado.

## Un mínimo no sustituye a un múltiplo

El mínimo responde a «¿cuántas piezas exige este pedido?». El incremento responde a «¿en qué saltos puede comprarlas?». Liquid expone esas propiedades como `min`, `max` e `increment` en el objeto [quantity_rule](https://shopify.dev/docs/api/liquid/objects/quantity_rule).

En tu especificación, seis como mínimo y seis como incremento expresa una intención distinta de seis como mínimo e incremento uno. En el segundo diseño quieres permitir comprar siete, ocho o nueve piezas; en el primero quieres cajas completas.

Si además exiges dos cajas para empezar, el ejemplo comercial pasa a un mínimo de doce piezas y un incremento de seis. Documenta las cantidades que aceptas: 12, 18, 24. No dejes esa interpretación en una frase ambigua como «pedido mínimo dos».

Un mínimo por importe es otra condición. Si necesitas también 300 € de pedido, consulta la guía de [pedido mínimo en Shopify](/blog/pedido-minimo-shopify/); no lo conviertas en una cantidad aproximada de cajas, porque los precios pueden cambiar.

## Qué cambia si el comprador mezcla variantes

Las reglas nativas de cantidad son por variante. Shopify explica que no se pueden sumar variantes distintas para cumplir sus incrementos o mínimos. Véase la [documentación de reglas de cantidad](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing).

Para una caja mezclada, prepararía una especificación diferente: qué productos pueden combinarse, qué tamaño tiene cada grupo, qué unidades quedan fuera y si hay una composición obligatoria.

Un ejemplo de lógica comercial sería «sumar las botellas del grupo aromas y exigir un total divisible entre seis». Es una propuesta, no una Function lista para instalar. Hay que definir cómo identifica los productos, cómo trata artículos eliminados y qué sucede con las muestras o los packs que ya contienen varias piezas.

Si el grupo lleva once botellas, el mensaje podría ser «Añade una botella de este grupo para completar dos cajas». Es más útil que «cantidad inválida», porque señala qué tiene que cambiar el comprador sin modificarle el pedido automáticamente.

## Dónde debe validarse una regla a medida

Un selector con saltos de seis ayuda a comprar, pero no sustituye la comprobación del pedido. Para reglas personalizadas, la [API de validación de carrito y checkout](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) permite devolver errores en el servidor e incluye los checkouts exprés.

La disponibilidad también importa: las apps personalizadas con Shopify Functions requieren Plus; otros planes pueden usar apps públicas distribuidas por la App Store que incorporen Functions. Comprueba esas condiciones en la [documentación de Shopify Functions](https://shopify.dev/docs/apps/build/functions).

Antes de elegir una app, le pediría que demostrase tus ejemplos válidos e inválidos, incluida la mezcla de variantes. «Admite mínimos» no responde a si sabe sumar solo las referencias que forman tu caja.

En mi [Checkout Lab](/codigo/) puedes explorar el ejemplo de packs B2B. Es una demostración del sitio, no un caso de cliente: ilustra validación de cajas por línea y no demuestra una regla que agrupe variantes distintas.

## Cómo presentar la regla sin bloquear al comprador por sorpresa

Indica el formato cerca del precio y del selector, antes de añadir al carrito. Para el modelo por piezas, un texto como «Se sirve en cajas de 6. El precio mostrado es por botella» elimina dos ambigüedades a la vez.

Después revisa qué ocurre al cambiar de variante: el tamaño de caja puede ser distinto. Shopify tiene una [guía para mostrar reglas de cantidad en el tema](https://help.shopify.com/en/manual/b2b/store-customization/quantity-pricing), incluida la actualización de la información de la variante.

Comprobaría ficha, pedido rápido, carrito lateral y carrito completo. No asumiría que funcionan igual por compartir el mismo tema: cada punto de entrada necesita mostrar la regla y comunicar el error de forma comprensible.

## Una matriz pequeña para comprobar cajas completas

Completa los resultados esperados antes de ejecutar las pruebas. Estos corresponden al ejemplo de cajas de seis piezas de la misma variante, sin excepciones:

| Caso | Resultado esperado del ejemplo |
| --- | --- |
| 6 unidades de A | Aceptar una caja |
| 7 unidades de A | Impedir completar el pedido inválido y explicar el cambio necesario |
| 12 unidades de A | Aceptar dos cajas |
| 3 de A y 3 de B | Rechazar si cada variante exige su caja completa |
| Cantidad cambiada en el carrito | Mantener la condición de cajas completas |
| Otra variante con caja de 4 | Aplicar su formato y actualizar el mensaje |
| Comprador particular | Respetar las condiciones B2C previstas para esa tienda |
| Pedido recibido en el ERP | Conservar cantidades, unidad de venta y referencia esperadas |

Para cajas mezcladas, cambia expresamente la expectativa de la cuarta fila y añade una mezcla no autorizada. Incluye también los métodos de compra que utiliza tu negocio; una prueba del checkout online no acredita el comportamiento de POS o de un proceso externo que cree pedidos.

Da la implementación por cerrada cuando comprador, comercial y almacén entiendan lo mismo por una caja. Ese acuerdo, las pruebas y la integración forman parte del [desarrollo del portal Shopify B2B](/shopify-b2b/), tanto como el selector de cantidades.
