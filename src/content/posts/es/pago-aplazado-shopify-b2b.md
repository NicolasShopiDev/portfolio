---
pair: "pago-aplazado-shopify-b2b"
title: "Cobrar a 30 o 60 días en Shopify B2B: vencimiento, cobro y riesgo"
seoTitle: "Pago a 30 o 60 días en Shopify B2B: qué revisar"
description: "Configura el pago aplazado B2B con un proceso claro: vencimientos, cobro, impagos y conciliación. Qué comprobar antes de ofrecer 30 o 60 días a tus clientes."
keyword: "pago a 30 dias shopify b2b"
date: "2026-11-03"
tags: ["Shopify B2B","Pagos","Pedidos"]
related: ["pedidos-excel-portal-shopify","errores-sincronizacion-shopify-erp"]
faq: [{"q":"¿Net 30 significa cobrar automáticamente al cumplirse 30 días?","a":"No. El plazo establece el vencimiento; no garantiza un cargo automático. Define cómo se cobra, quién actúa al vencer y cómo se registra el resultado."},{"q":"¿Desde qué momento se cuentan los plazos netos?","a":"La documentación de Shopify cuenta los plazos netos desde la fecha del pedido. Si tu acuerdo empieza con la entrega o una fecha fija, revisa que el flujo elegido represente ese acuerdo."},{"q":"¿Un vencimiento equivale a un límite de crédito?","a":"No. La fecha de pago y el riesgo acumulado del cliente son reglas diferentes. Decide qué sistema calcula la exposición y qué debe ocurrir cuando se supera."}]
cta: {"heading":"¿Quieres ofrecer crédito comercial sin perder el control de los pedidos?","text":"Cuéntame qué plazos pactas, cómo cobras y dónde controlas la deuda. Puedo valorar el flujo entre tu portal, administración y ERP.","label":"Cuéntame tus condiciones de pago"}
---

Para vender a 30 o 60 días en Shopify B2B, configura las condiciones de pago y define por separado cómo vas a cobrar y controlar el riesgo. Un vencimiento no es un cargo automático ni un límite de crédito.

Antes de activar el plazo para todos los mayoristas, recorre un pedido desde su creación hasta la conciliación. La pantalla de compra es solo una parte: el trabajo termina cuando administración sabe qué se debe, qué se ha cobrado y qué puede volver a comprar ese cliente.

> Documentación revisada el 3 de noviembre de 2026. Los escenarios son propuestas de aceptación, no una prueba ejecutada en tu tienda ni una recomendación sobre cuánto crédito conceder.

## Define qué acuerdo comercial quieres representar

«Pago a 30 días» puede significar cosas distintas dentro de una empresa: treinta días desde pedido, desde factura, desde envío o hasta una fecha acordada. Escribe el punto de partida y qué ocurre con entregas parciales.

También decidiría quién puede cambiar las condiciones y si la excepción vale para una compra o para todas las siguientes. Un cambio que parece administrativo puede afectar pedidos futuros si se guarda en la ficha equivocada.

No fijes la prueba alrededor del texto de un desplegable. Fíjala alrededor de una fecha esperada que administración haya aprobado y que después puedas comparar con el pedido.

## Qué representan las condiciones de Shopify

Shopify permite configurar condiciones por ubicación de empresa y documenta plazos netos, vencimiento con preparación y fecha fija en borradores. Los plazos netos parten del día del pedido. La configuración se explica en [condiciones de pago B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-terms).

Revisa la disponibilidad de funciones adicionales antes de incluirlas en el alcance: los requisitos de depósito documentados son de Plus. Ofrecer un plazo y pedir un anticipo no son la misma función.

Como propuesta de trabajo, empezaría con una ubicación de prueba y una condición simple. Guardaría su vencimiento y la comunicación que recibe el comprador. Después comprobaría las excepciones antes de extender la configuración a otras empresas.

## El vencimiento no hace el trabajo de cobro

La documentación oficial indica que el pago no se captura automáticamente al vencer el plazo. Define quién cobra, con qué autorización y cómo comprueba el importe pendiente antes de actuar.

Si el cliente paga por transferencia, alguien o algún proceso debe relacionar el ingreso con el pedido. Si paga por otro medio, hay que poder distinguir autorización, captura y registro del cobro. No marques un pedido como pagado solo porque alguien ha enviado un justificante pendiente de comprobar.

El proceso necesita un responsable y una sustitución. Una lista de vencimientos que solo revisa una persona falla el día que esa persona está fuera, aunque la configuración de la tienda sea correcta.

## Separa deuda vencida y exposición total

Ejemplo ficticio: un cliente tiene un pedido pendiente de 800 € que vence mañana y otro de 700 € que vence el mes próximo. La deuda vencida puede ser cero hoy, pero su exposición propuesta para tu control interno es 1.500 €.

Decide qué conceptos cuenta tu política: pedidos sin preparar, impuestos, portes, abonos pendientes y moneda. Es una definición de negocio que la implementación debe respetar, no una cifra que el desarrollador deba deducir.

Si el ERP controla el riesgo, especifica qué información puede usar Shopify y qué ocurre cuando está atrasada. ¿Se bloquea el pedido, se envía a revisión o se acepta bajo otra condición? Evita dejar el resultado al azar de una sincronización.

## Construye una tabla de estados compartida

Esta tabla es una propuesta organizativa, no una lista exhaustiva de estados de Shopify:

| Situación | Acción esperada | Responsable propuesto |
| --- | --- | --- |
| Pedido aceptado con plazo | Registrar fecha e importe | Integración / administración |
| Próximo al vencimiento | Revisar comunicación y saldo | Administración |
| Ingreso recibido | Conciliar sin duplicar | Finanzas |
| Plazo superado | Aplicar política acordada | Responsable comercial y financiero |
| Abono o devolución | Recalcular saldo y conservar trazabilidad | Finanzas / ERP |

El comprador debe recibir mensajes compatibles con esos estados. Un correo que diga «ya está pagado» mientras el ERP conserva una deuda crea llamadas y correcciones que ninguna automatización de recordatorios arregla.

## Prueba también lo que pasa cuando algo cambia

Una implementación no queda validada con un único pedido feliz. Propongo estos escenarios:

- Pedido normal con el vencimiento esperado.
- Comprador que paga antes de la fecha.
- Pago parcial o ingreso que no cuadra, según los métodos previstos.
- Pedido cancelado antes del cobro.
- Abono después de la factura.
- Actualización repetida desde el ERP.
- Cliente que intenta otro pedido con deuda pendiente.

En cada caso escribe qué debe ver el cliente y qué debe recibir administración. Si una condición depende del plan o del método de pago, verifícala en el entorno real antes de prometerla.

## No conviertas un fallo de integración en crédito nuevo

Un pedido que no llega al ERP puede parecer inexistente para el control de riesgo. Por eso la [integración del portal](/servicios/integraciones-erp/) debe indicar retrasos y fallos, además de enviar datos.

Me interesaría más una pantalla que muestre «saldo no actualizado desde ayer» que otra con un cero aparentemente tranquilizador. Define una política para la información desconocida, no solo para los valores válidos.

Para diagnosticar problemas de entrega o duplicados, la guía de [errores de sincronización con ERP](/blog/errores-sincronizacion-shopify-erp/) complementa este flujo. El vencimiento correcto no compensa un pedido perdido.

## Cuándo está listo para activarlo a clientes

Cuando ventas, finanzas y desarrollo pueden explicar el mismo recorrido: quién recibe plazo, de dónde sale la fecha, cómo se cobra, dónde se concilia y qué sucede con una incidencia.

Si los pedidos siguen entrando por correo, puedes diseñar una transición al [portal mayorista](/blog/pedidos-excel-portal-shopify/) sin cambiar todas las condiciones a la vez. Empieza por una regla demostrable y amplía cuando puedas seguir el dinero y el pedido hasta el final.
