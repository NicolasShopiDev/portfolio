---
pair: "numero-pedido-compra-obligatorio-shopify-b2b"
title: "Número de pedido de compra obligatorio en Shopify B2B: cómo validarlo"
seoTitle: "Número de pedido de compra obligatorio en Shopify B2B"
description: "Exige una referencia de compra en Shopify B2B sin confundirla con una nota de carrito. Qué permite la validación de PO, qué plan necesitas y qué probar."
keyword: "numero pedido compra obligatorio shopify b2b"
date: "2026-11-04"
tags: ["Shopify B2B","Checkout","Shopify Functions"]
related: ["pago-aplazado-shopify-b2b","errores-sincronizacion-shopify-erp"]
faq: [{"q":"¿Shopify puede validar el campo nativo de número de pedido de compra?","a":"Sí. Desde la versión 2026-04, Cart and Checkout Validation permite leer poNumber y dirigir el error al campo nativo. Implementar y probar la regla sigue siendo necesario."},{"q":"¿Necesito Plus para una Function personalizada de validación?","a":"Las apps personalizadas que contienen Shopify Functions requieren Plus. En otros planes puedes evaluar una app pública distribuida en la App Store que cubra esa validación."},{"q":"¿Un número con formato válido demuestra que la compra está autorizada?","a":"No. Comprobar presencia o estructura no verifica que compras del cliente haya emitido esa referencia ni que tenga saldo. La autorización requiere su propio proceso o integración."}]
cta: {"heading":"¿Administración devuelve pedidos porque falta la referencia de compra?","text":"Cuéntame quién debe aportar el número, qué formato aceptas y dónde se recibe en el ERP. Puedo valorar una validación B2B que encaje con ese proceso.","label":"Cuéntame qué referencia necesitas"}
---

Sí, puedes exigir un número de pedido de compra en el checkout B2B mediante validación del campo nativo. Antes de implementarlo, define a quién se exige, qué dato se considera válido y cómo llegará al ERP: un campo rellenado no demuestra una compra autorizada.

Esta guía trata de la referencia que proporciona el comprador, habitualmente llamada PO number. No es el número que Shopify asigna a la venta ni el número de factura que emitirá tu sistema.

> Funciones contrastadas en noviembre de 2026. Los ejemplos son una especificación propuesta; no se afirma haber desplegado una Function ni validado un circuito de compras de un cliente.

## Qué ha cambiado respecto a las respuestas antiguas

El [changelog oficial de Shopify](https://shopify.dev/changelog/posts/cart-and-checkout-validation-adds-billing-address-and-po-number-error-targets) documenta que desde la API 2026-04 una Function de Cart and Checkout Validation puede leer el número de PO y devolver un error dirigido a ese campo. Las respuestas antiguas que lo daban por inaccesible necesitan revisarse.

Eso permite plantear una regla sobre el dato nativo en lugar de pedir una copia en una nota del carrito. No significa que exista una validación universal adecuada para todas las empresas ni que cualquier app la implemente.

Si un proveedor promete resolverlo, pídele que muestre qué campo valida y dónde queda el dato final. Una captura con una etiqueta «PO» en pantalla no responde a ninguna de esas dos preguntas.

## Decide qué referencia necesitas realmente

Escribe la política con ejemplos antes de elegir una expresión regular. Para algunos clientes basta una referencia no vacía; otros tienen un prefijo, longitud o proceso de aprobación específico.

| Dato | Quién lo origina | Para qué lo usarías |
| --- | --- | --- |
| Referencia de compra / PO | Comprador o su departamento de compras | Relacionar su autorización con tu venta |
| Número de pedido Shopify | Sistema de venta | Identificar tu pedido |
| Número de factura | Sistema de facturación | Identificar el documento emitido |
| Referencia de destino ERP | Integración o ERP | Trazar el registro interno |

No rellenes automáticamente una PO vacía con el número de venta para conseguir que el campo deje de fallar. Puede satisfacer una comprobación de texto y romper el propósito comercial del requisito.

## Define el alcance por comprador y operación

Una regla para todo B2B puede ser excesiva si solo un distribuidor exige PO. Decide si depende de empresa, ubicación, tipo de pedido o alguna condición aprobada por el equipo.

También escribe las excepciones: muestras, pedidos atendidos por comercial o correcciones de una compra anterior. Una excepción debería ser reconocible y revisable; no una palabra secreta que cualquier comprador pueda escribir para saltarse el control.

Si el comprador paga a plazo, coordina esta política con las [condiciones de pago B2B](/blog/pago-aplazado-shopify-b2b/). El vencimiento y la referencia de compra resuelven necesidades distintas de administración.

## Qué valida la Function y qué no demuestra

La [API de Cart and Checkout Validation](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) documenta el campo poNumber y el destino de error <code>$.cart.poNumber</code>. Esa es la referencia técnica para dirigir el mensaje al dato que el comprador debe corregir.

Como propuesta, separaría cuatro comprobaciones: obligación de aportar el dato, valor tras quitar espacios exteriores, estructura permitida y mensaje de corrección. No conviertas todos los errores en «pedido no válido» si puedes señalar qué falta.

Aceptar <code>PO-4821</code> porque coincide con tu formato no verifica que exista en el sistema del comprador. Si necesitas comprobar existencia, saldo o autorización, diseña ese proceso expresamente. No atribuyas esas garantías a una simple comprobación del texto.

## Qué cambia según el plan

Shopify indica que las [apps personalizadas con Functions requieren Plus](https://shopify.dev/docs/apps/build/functions). Las tiendas en otros planes pueden usar apps públicas de la App Store que contengan Functions, dentro del alcance que ofrezca cada app.

En una evaluación pediría una demostración con tu campo nativo, tus perfiles y tus ejemplos de error. No elegiría solo por una ficha que diga «campos obligatorios», porque puede referirse a otro dato o a una condición que solo se presenta en el tema.

Calcula también quién mantiene la configuración. Si cada empresa necesita un formato diferente, evita una regla imposible de revisar sin modificar código para cada alta.

## Una matriz para probar presencia, formato y alcance

Esta tabla corresponde a una regla ficticia: exigir a ciertos compradores una referencia con prefijo PO y números. No es una recomendación universal de formato.

| Caso | Resultado esperado del ejemplo |
| --- | --- |
| Comprador obligado, campo vacío | Detener con explicación junto al campo |
| Solo espacios | Tratar como ausencia |
| Referencia con estructura admitida | Permitir si el resto del pedido es válido |
| Texto no admitido | Explicar la estructura requerida |
| Comprador exento de la regla | No exigir una referencia innecesaria |
| Particular en tienda mixta | Mantener su recorrido previsto |
| Corrección después del error | Permitir continuar sin perder la cesta |
| Pedido recibido en ERP | Conservar el dato y su relación con la venta |

Ejecuta las pruebas en los métodos de compra que realmente ofreces. El resultado de un checkout online no acredita automáticamente el comportamiento de un proceso externo que crea pedidos por otra vía.

## Conserva el dato hasta administración

Comprueba que la referencia aparece en el registro destinado a facturación o gestión, sin quedar enterrada en un texto de observaciones. Si el ERP tiene un campo específico, acuerda una correspondencia estable.

Para investigar fallos, conserva identificadores del pedido y del destino. La guía de [errores de sincronización Shopify y ERP](/blog/errores-sincronizacion-shopify-erp/) explica por qué repetir un envío sin comprobar si ya existe puede duplicar una venta.

Define también cómo se corrige una PO después de aceptar el pedido. Una modificación del texto no debería perder la trazabilidad de lo que el comprador envió inicialmente.

## Qué necesito para valorar la implementación

Dos o tres referencias ficticias válidas, ejemplos de las que deberían rechazarse, perfiles obligados y una muestra de cómo recibe el dato el ERP. Añade quién autoriza excepciones.

Con eso se puede valorar una [Function de Shopify](/servicios/shopify-functions/) y su aceptación. El resultado buscado es que un pedido utilizable llegue a administración con la referencia correcta, sin crear barreras innecesarias para el resto de compradores.
