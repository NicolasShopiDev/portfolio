---
pair: "checkout-abandonado-shopify-b2b"
title: "Checkouts abandonados en Shopify B2B: por qué no aparece la recuperación"
seoTitle: "Checkouts abandonados Shopify B2B: límites y diagnóstico"
description: "Tu mayorista deja el checkout y no llega un recordatorio. Revisa primero la disponibilidad B2B, el plan y el recorrido antes de cambiar la automatización."
keyword: "checkout abandonado shopify b2b"
date: "2026-11-06"
tags: ["Shopify B2B","Checkout","Automatización"]
related: ["transferencia-solo-mayoristas-shopify","solicitud-alta-mayorista-shopify","precio-incorrecto-shopify-b2b"]
faq: [{"q":"¿La recuperación de checkouts B2B funciona igual que en B2C?","a":"No debes asumirlo. La ayuda específica de Shopify B2B reserva la función a Plus y la deja desactivada inicialmente. Confirma ese requisito antes de investigar el correo."},{"q":"¿Un pedido pendiente de transferencia es un checkout abandonado?","a":"Es un caso distinto: ya existe un pedido cuyo pago debe gestionarse. Clasifica el estado antes de enviar un mensaje para terminar una compra que quizá ya está registrada."},{"q":"¿Un email enviado demuestra que la automatización recuperó la venta?","a":"No. Verifica el pedido resultante y utiliza un criterio de atribución definido. Que alguien compre después de un mensaje no prueba por sí solo que esa venta dependiera del mensaje."}]
cta: {"heading":"¿Tu equipo pierde de vista los intentos de compra de mayoristas?","text":"Cuéntame el plan, qué recorrido siguen tus compradores y un ejemplo anonimizado del caso que falta. Puedo valorar el diagnóstico del checkout y el seguimiento adecuado.","label":"Cuéntame qué compra quedó pendiente"}
---

Si un mayorista abandona el checkout de Shopify y no aparece la recuperación, comprueba primero si la función está disponible y activada para tu tienda B2B. La automatización de particulares no demuestra que exista el mismo recorrido para empresas.

Después distingue una compra incompleta de un pedido pendiente de revisión o pago. Sin esa clasificación puedes enviar recordatorios equivocados y perseguir un fallo de correo que en realidad empieza antes.

> Documentación revisada en noviembre de 2026. Las tablas y el protocolo siguientes son propuestas de diagnóstico; no describen una prueba realizada en una tienda de cliente ni resultados de recuperación.

## La primera comprobación es B2B y plan

La [ayuda específica de checkout B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders) indica que los checkouts abandonados están desactivados por defecto y no están disponibles fuera de Shopify Plus. Para solicitar su activación en Plus debe contactar el propietario de la tienda u organización con soporte Plus.

Por eso no empezaría instalando una plantilla de emails. Apunta el plan, el tipo de comprador utilizado y si soporte ha confirmado la activación para esa tienda.

Si no tienes esa función, documenta la limitación antes de elegir otra herramienta. Una app que anuncia recuperación de carritos debe demostrar qué evento y qué datos recibe de tu recorrido B2B; no basta con que funcione con un consumidor sin sesión.

## Clasifica qué quedó realmente pendiente

Esta tabla es una propuesta operativa, no una lista literal de estados del administrador:

| Caso observado | Pregunta antes de actuar |
| --- | --- |
| Productos añadidos sin llegar a pagar | ¿Se inició un checkout identificable? |
| Checkout empezado e incompleto | ¿Se registra en la función disponible para esta tienda? |
| Solicitud enviada a revisión | ¿Ya hay un borrador que debe atender ventas? |
| Pedido por transferencia | ¿Falta cobrar un pedido ya creado? |
| Intento rechazado al pagar | ¿Existe un evento que explique el fallo? |

No uses «abandonado» como nombre genérico de cualquier compra no cobrada. Para el comprador hay una diferencia importante entre pedir ayuda para completar la compra y recibir otra solicitud de pago por un pedido que ya envió.

El artículo sobre [transferencia para mayoristas](/blog/transferencia-solo-mayoristas-shopify/) ayuda a separar elección de método y recepción del ingreso. Si el proceso incluye revisión comercial, identifica también quién debe aceptar el pedido.

## Identifica qué experiencia de recuperación usas

Shopify distingue la experiencia heredada de la nueva automatización en Messaging. Su [guía de transición](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout) avisa de que activar la nueva experiencia impide volver a la anterior. No la actives solo como prueba para ver si aparece un email.

Conserva nombre de la automatización, configuración actual y una captura de sus condiciones. Si dos personas revisan experiencias distintas, pueden dar instrucciones incompatibles aunque ambas estén leyendo documentación de Shopify.

Una página general de marketing tampoco sustituye la comprobación inicial de disponibilidad B2B. Empieza por el tipo de compra y después investiga el mecanismo de envío que corresponda.

## Diseña una prueba que puedas seguir de principio a fin

Usa un comprador de prueba, una empresa y una ubicación conocidas. Elige productos comprables y registra el momento en que termina cada paso: acceso, selección de empresa, carrito, checkout y salida antes de completarlo.

Anota la configuración de destinatarios y las preferencias de comunicación del perfil. Un diagnóstico debe respetar ese estado; no lo cambies silenciosamente para conseguir que la prueba produzca un envío.

Como ficha interna propondría estos campos:

| Dato | Qué permite comparar |
| --- | --- |
| Perfil y ubicación | El contexto B2B de la prueba |
| Recorrido exacto | En qué punto dejó de avanzar |
| Hora y zona horaria | Orden de registro y automatización |
| Identificador disponible | Relación entre intento y seguimiento |
| Condición esperada | Por qué debía entrar o no en el flujo |
| Resultado final | Registro, envío y posible pedido, por separado |

No necesitas datos reales de compradores para preparar el protocolo. Si solicitas ayuda, comparte un caso anonimizado que permita reproducirlo.

## Separa registro, elegibilidad y entrega

Primero comprueba si existe el registro que el flujo necesita. Después verifica si cumple sus condiciones. Por último, revisa si el mensaje se intentó enviar y qué resultado consta.

La [documentación de recuperación](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout) describe la consulta de actividad y detalles de ejecución. Usa el motivo registrado, cuando exista, en lugar de deducir que cualquier ausencia es un fallo del proveedor de correo.

Si el caso no llegó a la automatización, cambiar el asunto del email no resuelve el origen. Si el envío consta pero el comprador no lo encuentra, la investigación cambia hacia la entrega y su destinatario.

## Revisa las fricciones antes de ofrecer un descuento

Una compra puede detenerse porque el cliente necesita una referencia de compra, no entiende la cantidad mínima, ve otra tarifa o no obtiene transporte. Un descuento puede añadir otra condición sin resolver ninguna de esas causas.

Reproduce el recorrido con el mismo perfil. Si el precio no coincide, sigue el [diagnóstico de precios B2B](/blog/precio-incorrecto-shopify-b2b/). Si falta autorización para entrar, revisa primero la [aprobación mayorista](/blog/solicitud-alta-mayorista-shopify/).

No atribuyas intención al silencio del comprador. Registra la causa comprobada y deja como desconocido lo que todavía no puedes explicar.

## Qué medir sin inventar ventas recuperadas

Separaría intentos que cumplen el criterio elegido, casos que entran en el flujo, mensajes enviados y pedidos completados. Define con qué identificadores y periodo relacionas esas cifras.

No compares números de una tienda B2C con los del canal mayorista sin considerar sus recorridos distintos. Tampoco llames recuperadas a todas las compras posteriores por el simple hecho de haber enviado un email.

Si interviene el comercial, registra esa intervención y el estado resultante para no automatizar seguimientos duplicados. La política de contacto debe ser común al equipo y a las herramientas.

## Cuándo tiene sentido pedir una auditoría

Cuando puedes describir qué falta: el registro, la entrada al flujo, el envío o la compra posterior. Prepara un caso, el plan y la configuración correspondiente; no hace falta empezar enviando una exportación completa de clientes.

El objetivo del [desarrollo de un portal Shopify B2B](/shopify-b2b/) es que el comprador pueda completar un pedido correcto y que tu equipo sepa atender las excepciones. Recuperar una compra empieza por entender en qué paso quedó, antes de añadir otro recordatorio.
