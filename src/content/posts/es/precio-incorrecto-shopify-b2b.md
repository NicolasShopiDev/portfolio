---
pair: precio-incorrecto-shopify-b2b
title: 'Mi mayorista ve un precio incorrecto en Shopify: qué revisar'
seoTitle: 'Precio incorrecto en Shopify B2B: cómo encontrar la causa'
description: 'Tu mayorista ve otra tarifa o paga un importe inesperado. Revisa sesión, ubicación, catálogos, precios fijos, descuentos y tema con un diagnóstico ordenado.'
keyword: 'precio incorrecto shopify b2b'
date: '2026-11-03'
tags: ['Shopify B2B', 'Catálogos', 'Markets']
related: ['shopify-b2b-b2c-misma-tienda', 'shopify-b2b-sin-plus', 'precios-sin-iva-shopify-b2b']
faq:
  - q: '¿Por qué mi mayorista sigue viendo el precio de particular?'
    a: 'Empieza por confirmar que ha iniciado sesión y compra para la ubicación de empresa correcta. Después revisa que el catálogo y su mercado estén activos y cubran esa ubicación. Una etiqueta de cliente no prueba que esté comprando en contexto B2B.'
  - q: '¿Siempre se aplica el catálogo con el precio más bajo?'
    a: 'No. La prioridad depende de cómo se asignen los catálogos. Una asignación directa a la ubicación prevalece sobre la de mercado; entre mercados importa su especificidad. No compares solo los importes.'
  - q: '¿Por qué cambiar el descuento general del catálogo no cambia una variante?'
    a: 'Comprueba si esa variante tiene un precio fijo. Los precios fijos prevalecen sobre el ajuste porcentual general del catálogo. También revisa la configuración de precios por volumen si el problema aparece al cambiar cantidades.'
  - q: '¿Un descuento promocional puede rebajar la tarifa mayorista?'
    a: 'Sí. Los códigos y descuentos automáticos pueden aplicarse sobre el precio ajustado por catálogo si el pedido es elegible. Revisa destinatarios, condiciones y combinaciones antes de concluir que la tarifa está mal.'
cta:
  heading: '¿No consigues localizar de dónde sale ese precio?'
  text: 'Cuéntame tu plan de Shopify y un ejemplo anonimizado: variante, cantidad, precio esperado y precio mostrado. Con esos datos puedo valorar el diagnóstico de tus catálogos y del recorrido B2B.'
  label: 'Cuéntame qué precio falla'
---

Si un mayorista ve un precio incorrecto en Shopify, revisa primero su sesión y ubicación de empresa, después el catálogo que le corresponde y, por último, cantidades, descuentos y presentación del tema. Cambiar la tarifa sin identificar en qué paso aparece la diferencia puede corregir un pedido y estropear otros.

La pregunta útil es concreta: **qué variante, para qué ubicación, en qué cantidad y en qué pantalla muestra un importe distinto al esperado**. Con esos cuatro datos puedes empezar a aislar el problema.

> Documentación oficial revisada el 3 de noviembre de 2026. Los importes y el procedimiento de esta guía son ejemplos de diagnóstico, no resultados de una auditoría de una tienda concreta. La guía se centra en B2B nativo de la tienda online.

## Antes de tocar nada, escribe el precio esperado

«A este cliente no le funciona el descuento» no define un caso reproducible. Escoge un pedido que falle y completa una ficha como esta:

| Dato | Ejemplo ilustrativo |
| --- | --- |
| Producto y variante | Camiseta azul, talla M, SKU CAM-AZ-M |
| Contexto de compra | Empresa de prueba, ubicación Madrid |
| Cantidad | 12 unidades de esa variante |
| Tarifa esperada | 8 € por unidad, antes de impuestos |
| Pantalla y resultado | Ficha: 8 €; carrito: 10 € por unidad |
| Moneda y destino | EUR, envío a España |
| Promoción | Sin código introducido; revisar descuentos automáticos |

Guarda también la hora y qué se cambió recientemente. Una captura sin variante ni cantidad puede parecer una prueba completa y esconder dos pedidos distintos.

No compares una línea con IVA con una tarifa neta, ni el total de doce unidades con el precio unitario. Primero iguala las condiciones de la comparación. Si el problema es la presentación fiscal, tienes una guía específica sobre [precios sin IVA para mayoristas](/blog/precios-sin-iva-shopify-b2b/).

## Si ve el precio de particular, comprueba quién está comprando

En el B2B nativo, el comprador debe iniciar sesión y comprar para una ubicación de empresa cubierta por el catálogo. Esa relación está documentada en la [configuración de B2B con Markets](https://help.shopify.com/en/manual/b2b/markets/catalogs).

Para reproducir el fallo, utiliza un comprador de prueba con la misma configuración comercial y anota la ubicación seleccionada. No basta con abrir la tienda desde tu sesión de administrador ni con comprobar que el contacto tiene una etiqueta de mayorista.

Si una persona puede comprar para varias ubicaciones, haz la comparación con la que dio el problema. «Es el mismo correo» no garantiza que estés comprobando las mismas condiciones.

Mi siguiente comprobación sería abrir el producto como particular y como comprador B2B. Si ambos muestran el precio de particular, todavía no culparía al tema: primero seguiría la cadena de asignación del catálogo. Si solo falla una pantalla, conservaría ese dato para la revisión del recorrido.

## Si el catálogo parece correcto, revisa su estado y sus asignaciones

Un catálogo guardado no es necesariamente un catálogo aplicado. Comprueba que tanto el catálogo como el mercado B2B correspondiente estén activos, tal como indica la [guía de creación de catálogos](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs).

Después dibuja una línea sencilla: ubicación de empresa, mercado aplicable, catálogo y variante. Escribe los nombres reales de tu configuración. Si no puedes justificar uno de esos enlaces, ahí tienes una comprobación pendiente.

Evita crear un mercado nuevo solo para probar una idea. Primero revisa los existentes y qué condiciones incluyen. También conviene comprobar el recorrido de particulares cuando cambias asignaciones: una corrección mayorista no debería darse por cerrada sin esa regresión. El artículo sobre [B2B y B2C en la misma tienda](/blog/shopify-b2b-b2c-misma-tienda/) explica esa separación.

## Si hay varios catálogos, no asumas que siempre gana el más barato

Shopify distingue la asignación directa a una ubicación de la asignación mediante mercados. La directa prevalece sobre la de mercado; entre mercados gana el más específico, y a igual especificidad se aplica el precio inferior. Consulta las reglas de [prioridad de catálogos](https://help.shopify.com/en/manual/b2b/markets/catalogs).

Ejemplo hipotético: un catálogo de mercado ofrece una variante a 7 € y uno asignado directamente a la ubicación la ofrece a 9 €. Esperar 7 € solo porque es menor no describe la prioridad configurada. Antes de editar importes, decide qué asignación representa el acuerdo comercial.

Prepararía un inventario de catálogos que pueden intervenir en el pedido y señalaría cuál espero que mande. Si aparecen dos tarifas que tu equipo considera igual de válidas, el trabajo pendiente es aclarar la regla comercial antes de ajustar la tienda.

## Si solo falla una variante, busca un precio fijo

Un precio fijo de producto o variante prevalece sobre el ajuste porcentual general del catálogo. Shopify lo explica en su [guía de ajustes de precio](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs).

Supón que la base es 20 € y el catálogo reduce un 30 %. Esperarías 14 €, pero la variante conserva un precio fijo de 15 €. Cambiar el porcentaje a un 35 % no arregla esa excepción: primero debes decidir si esos 15 € siguen siendo una condición negociada válida.

Compara una variante afectada y otra que funcione. Si tienen el mismo mercado y comprador, pero distinto comportamiento, revisa las diferencias del dato antes de reconstruir el acceso B2B entero. Si los precios vuelven a cambiar después de corregirlos, registra cuándo sucede y revisa qué importación o integración los escribe.

## Si el precio cambia con la cantidad, comprueba el tramo por variante

Los precios por volumen exigen alcanzar la cantidad de cada variante; no debes dar por hecho que se suman tallas o colores. Además, Shopify indica que el precio por volumen se convierte en fijo y no recibe el ajuste general del catálogo. Está en la [documentación de precios por volumen](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing).

Anota los resultados justo antes del tramo y al alcanzarlo. Para un umbral de 12 unidades, compararía 11 y 12 de la misma variante, y después 6 de una y 6 de otra. Es un ejemplo de prueba: completa los precios esperados según tu tarifa real antes de ejecutarlo.

Si comercial promete un descuento por cajas mezcladas y la configuración trabaja por variante, no has encontrado necesariamente un error de cálculo. Has encontrado una diferencia entre lo vendido y lo configurado.

## Si paga menos de lo esperado, revisa las promociones

Los descuentos automáticos y códigos pueden añadir una rebaja sobre el precio de catálogo. Su elegibilidad importa también en tiendas mixtas. Shopify detalla este comportamiento en su [guía de descuentos B2B](https://help.shopify.com/en/manual/b2b/catalogs/discounts).

Ejemplo: una tarifa mayorista deja la unidad a 8 € y una promoción adicional elegible reduce otro 10 %. Un resultado de 7,20 € no demuestra por sí solo que el catálogo haya calculado mal.

Registra qué descuentos aparecen en el pedido y qué campaña debía recibir ese cliente. No desactives todas las promociones de producción para comprobar una sospecha. Prepara un caso controlado y cambia una condición cada vez, de modo que puedas explicar qué modificación produce el resultado.

## Si ficha, carrito y checkout no coinciden, sigue el recorrido completo

Un precio correcto en una pantalla no valida las demás. Comprueba selección de variante, cantidad, carrito lateral, página de carrito y checkout con el mismo caso. Registra precio unitario, descuentos y total por separado.

Si sospechas de una personalización, compara con una copia del tema y documenta qué componente cambia la presentación. Shopify publica una [guía para mostrar cantidades y precios por volumen en el tema](https://help.shopify.com/en/manual/b2b/store-customization/quantity-pricing), que ayuda a revisar qué información debe actualizarse al elegir otra variante.

No intentaría resolver una discrepancia pintando el precio esperado con JavaScript. Primero hay que entender el importe que el pedido realmente calcula. Si una app controla la tarifa, registra cuál es y usa su documentación: no presupongas que sigue las mismas reglas que el B2B nativo.

## Cómo dar el problema por cerrado

Repite el caso original y al menos un caso de control: particular, otra ubicación o variante sin excepción. Comprueba también un pedido con promoción y otro sin ella cuando los descuentos hayan intervenido.

Guarda qué fallaba, qué cambiaste y el resultado final. Si el precio debe salir de un ERP, añade la siguiente sincronización a la comprobación. Una corrección manual que desaparece esa noche todavía no resuelve el origen.

Cuando necesites ayuda, envía un ejemplo anonimizado con los datos de la primera tabla. Ese contexto permite valorar un [diagnóstico del portal Shopify B2B](/shopify-b2b/) con mucha más precisión que una captura que solo diga «precio incorrecto».
