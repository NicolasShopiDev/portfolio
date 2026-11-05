---
pair: "transferencia-solo-mayoristas-shopify"
title: "Transferencia solo para mayoristas en Shopify: separar los métodos de pago"
seoTitle: "Transferencia solo para mayoristas en Shopify B2B"
description: "Ofrece transferencia a mayoristas y tarjeta a particulares en Shopify. Qué exige Checkout Blocks, qué alternativas revisar y cómo comprobar la separación."
keyword: "transferencia solo mayoristas shopify"
date: "2026-11-05"
tags: ["Shopify B2B","Checkout","Pagos"]
related: ["shopify-b2b-b2c-misma-tienda","pago-aplazado-shopify-b2b"]
faq: [{"q":"¿Activar transferencia bancaria la reserva automáticamente a mayoristas?","a":"Activar el método y limitar quién puede utilizarlo son decisiones distintas. Comprueba la disponibilidad por perfil en el checkout, en lugar de confiar en el nombre o en un aviso del tema."},{"q":"¿Puedo ocultar métodos con Checkout Blocks sin Plus?","a":"La documentación actual reserva la personalización de métodos de pago de Checkout Blocks a Plus. No deduzcas su disponibilidad de otras funciones de esa misma app."},{"q":"¿Una transferencia elegida significa que el pedido está cobrado?","a":"No. La elección de un pago manual no confirma el ingreso. Define quién comprueba el pago y cuándo se registra como recibido antes de preparar la mercancía."}]
cta: {"heading":"¿Tu checkout ofrece las mismas opciones a particulares y distribuidores?","text":"Cuéntame tu plan, los perfiles que compran y qué medios debe ver cada uno. Puedo valorar una separación de pagos que encaje con tu operativa B2B.","label":"Cuéntame cómo deben pagar"}
---

Para ofrecer transferencia solo a mayoristas y tarjeta a particulares en una tienda Shopify, necesitas configurar el método y controlar su disponibilidad en el checkout. Un mensaje que diga «solo empresas» no impide que otro comprador lo seleccione.

El primer paso es escribir la política de pago por perfil. Después puedes elegir una herramienta compatible con tu plan y comprobarla con compradores reales de prueba, sin cambiar las condiciones de toda la tienda a ciegas.

> Documentación comprobada en noviembre de 2026. Los perfiles y pruebas de esta guía son propuestas de aceptación; no se presentan como una configuración ya ejecutada en una tienda de cliente.

## Define qué debe ver cada comprador

Empieza con una tabla como esta, adaptada a tus acuerdos. Es un ejemplo ficticio, no una recomendación de qué medios debes ofrecer:

| Perfil de compra | Opciones previstas | Decisión pendiente |
| --- | --- | --- |
| Particular | Tarjeta y los medios de consumo autorizados | Qué ocurre sin iniciar sesión |
| Empresa aprobada, pago previo | Transferencia y, si procede, tarjeta | Cuándo se prepara el pedido |
| Empresa con plazo pactado | Condiciones acordadas | Quién controla el vencimiento |
| Cliente pendiente de aprobación | Recorrido permitido por la tienda | Evitar condiciones concedidas antes de revisión |

No uses «cliente registrado» como sinónimo de mayorista. Una persona puede tener cuenta y comprar como particular. Lo que importa es el contexto comercial que debe activar tu regla.

Si tienes excepciones por distribuidor, inclúyelas desde el principio. Una regla amplia de B2B puede ocultar una opción que necesita una empresa concreta, aunque funcione para el resto.

## Activar transferencia y segmentarla son trabajos distintos

Shopify documenta los [métodos de pago manual](https://help.shopify.com/en/manual/payments/manual-payments), incluida la transferencia, con instrucciones al comprador y registro del pago recibido. Un pedido con un método manual no acredita por sí mismo que el dinero haya llegado.

Antes de publicar instrucciones, comprueba qué referencia debe indicar el cliente y quién conciliará el ingreso. La información debe coincidir con administración; no inventes un proceso de cobro solo para completar el texto del checkout.

Después comprueba la disponibilidad del método para los perfiles de la tabla. Esa segunda parte requiere una personalización o herramienta que represente tu condición, no un cambio de etiqueta visible.

## Qué permite Checkout Blocks y en qué plan

La [guía específica de métodos de pago de Checkout Blocks](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/customizations/payment-methods) exige Shopify Plus para estas personalizaciones. Documenta reglas B2B y de cliente para ocultar métodos, y señala que una personalización guardada como borrador debe activarse.

No extrapoles desde otra función de la app. Que puedas instalar Checkout Blocks o usar un límite de importe no demuestra que puedas utilizar sus personalizaciones de pago con tu plan.

En Plus, revisaría la condición que distingue al comprador y el método que debe ocultarse. Si tu objetivo es reservar transferencia a empresas, la comprobación decisiva es entrar también como particular y verificar que no aparece.

## Qué evaluar si no tienes Plus

La [tabla de compatibilidad del checkout](https://help.shopify.com/en/manual/checkout-settings/checkout-customization) distingue apps públicas basadas en Functions y apps personalizadas. Shopify reserva las [apps personalizadas con Functions a Plus](https://shopify.dev/docs/apps/build/functions), mientras permite apps públicas que incorporan Functions en otros planes, según su alcance.

Por tanto, evalúa una app pública que cubra tu caso concreto antes de presupuestar un desarrollo personalizado. Pide ver la regla sobre el contexto B2B que utilizas, el medio manual instalado y el recorrido de los compradores excluidos.

Una ficha que diga «ocultar pagos por cliente» no demuestra que entienda tu modelo de empresa. Si se basa en etiquetas, documenta cómo se mantienen y cómo evitas que una etiqueta concedida por otra automatización active condiciones no previstas.

## No confundas transferencia, pago aplazado y crédito

La transferencia indica cómo se recibe el dinero. Un plazo indica cuándo vence la obligación. El control de crédito decide cuánto riesgo permite el negocio. La misma empresa puede combinar estas tres decisiones de formas distintas.

Si ofreces treinta días, acuerda quién cobra y qué ocurre al vencer. El artículo de [pago aplazado en Shopify B2B](/blog/pago-aplazado-shopify-b2b/) desarrolla esa parte. Ocultar tarjeta no implementa por sí solo el acuerdo financiero.

Como especificación, escribiría para cada perfil si el pedido puede prepararse pendiente de pago, si requiere revisión y qué sistema autoriza la salida. Esa decisión debe ser visible para quien trabaja en almacén.

## Comprueba el checkout completo, incluidos los accesos alternativos

No des la tarea por cerrada con una captura de la lista normal de métodos. Recorre los botones y accesos de pago que ofrece la tienda y compara lo que está disponible en cada uno.

La documentación de Checkout Blocks señala restricciones de personalización en opciones exprés y Shop Pay. No prometas que una regla de métodos normales controla todas las superficies del mismo modo: define los métodos compatibles y prueba los que realmente estén activos.

Si el resultado cambia al iniciar sesión o seleccionar una empresa, conserva esa secuencia. Una prueba que empieza con el perfil ya seleccionado puede ocultar un problema que aparece cuando el comprador cambia de contexto.

## Una matriz de aceptación para la política de pago

Estos casos propuestos sirven para la tabla ficticia anterior. Completa los medios esperados antes de ejecutarlos:

| Caso | Qué hay que comprobar |
| --- | --- |
| Visitante particular | No recibe el medio reservado a empresas |
| Particular registrado | Mantiene las condiciones de consumo |
| Empresa autorizada | Ve los medios pactados y puede avanzar |
| Empresa con excepción | La regla general no elimina su opción necesaria |
| Cambio de contexto | No conserva una disponibilidad anterior incorrecta |
| Acceso exprés activo | Su comportamiento coincide con lo documentado y previsto |
| Personalización inactiva | La prueba detecta que la política aún no se aplica |
| Pedido por transferencia | Administración identifica que falta comprobar el ingreso |

Incluye un pedido correcto de cada perfil después de activar el cambio. Evita ocultar todos los medios por combinar reglas que por separado parecían razonables.

## Cuándo merece un desarrollo específico

Cuando las condiciones dependen de datos o excepciones que una herramienta compatible no puede representar, concreta el alcance antes de escribir una Function. Prepara tus perfiles, métodos, reglas y resultado esperado.

La separación de pagos es parte del [checkout de un portal Shopify B2B](/shopify-b2b/). El resultado útil es que cada comprador pueda pagar según su acuerdo y que administración reconozca el estado del pedido, con una configuración que puedas revisar cuando cambien las condiciones.
