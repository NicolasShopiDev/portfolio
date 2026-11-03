---
pair: "pedidos-excel-portal-shopify"
title: "De pedidos por Excel y correo a un portal mayorista en Shopify"
seoTitle: "Pedidos por Excel a un portal mayorista Shopify"
description: "Convierte pedidos por Excel y correo en un portal B2B de Shopify. Qué datos preparar, cómo decidir el flujo y qué comprobar antes de invitar a tus mayoristas."
keyword: "portal pedidos mayoristas shopify"
date: "2026-11-03"
tags: ["Shopify B2B","Pedidos","Integraciones"]
related: ["vender-por-cajas-shopify","precio-incorrecto-shopify-b2b","pedido-rapido-referencia-shopify"]
faq: [{"q":"¿Tengo que dejar de aceptar pedidos por correo desde el primer día?","a":"No. Puedes empezar con un grupo de clientes y conservar un proceso atendido para excepciones. Define cómo identificar cada pedido para que el mismo correo no termine convertido en dos pedidos."},{"q":"¿Importar un Excel equivale a tener un portal B2B?","a":"No. La importación introduce datos; el portal debe resolver acceso, tarifa, disponibilidad, cantidades y confirmación para quien compra. Son partes distintas del proyecto."},{"q":"¿Se pueden revisar pedidos antes de aceptarlos?","a":"Shopify documenta flujos B2B con pedidos en borrador. Si necesitas revisión, comprueba el recorrido completo, incluidos cambios de precio, aceptación y traspaso al ERP."}]
cta: {"heading":"¿Tus mayoristas siguen enviándote hojas de pedido?","text":"Cuéntame cuántas líneas lleva un pedido habitual, cómo asignas tarifas y qué ERP recibe las ventas. Puedo valorar qué flujo debe resolver tu portal.","label":"Cuéntame cómo recibes los pedidos"}
---

Puedes pasar de pedidos por Excel y correo a un portal Shopify B2B, pero el trabajo empieza por traducir las reglas de la hoja a un recorrido de compra. Subir productos no resuelve por sí solo quién puede pedir, qué tarifa recibe o qué hace el almacén con una referencia incompleta.

El objetivo operativo es que un cliente envíe un pedido que puedas tramitar sin volver a escribir sus líneas. Antes de pedir una tienda nueva, identifica qué correcciones haces hoy y cuáles deben desaparecer con el portal.

> Propuesta de implantación basada en documentación revisada en noviembre de 2026. El pedido de ejemplo es ficticio; no se atribuyen ahorros ni resultados a un cliente.

## Empieza por tres pedidos, no por la portada

Escoge uno sencillo, uno largo y otro con excepciones. Conserva una copia anonimizada y anota cada intervención: buscar referencias, cambiar cantidades, corregir tarifas, preguntar dirección o confirmar disponibilidad.

Si el comercial dedica tiempo a negociar un plazo, quizá quieras conservar esa conversación. Si dedica tiempo a interpretar qué talla significa una abreviatura, el portal sí debería evitarlo. Distinguir ambas tareas impide automatizar una relación comercial que funciona mientras dejas intacto el trabajo repetitivo.

Para cada intervención escribe quién la hace y por qué. No todo error viene del cliente: puede que la hoja de pedido tenga precios antiguos o que un SKU no coincida con el almacén.

## Convierte una línea de Excel en una decisión inequívoca

Esta es una tabla de trabajo propuesta, no un formato de importación de Shopify:

| Línea recibida | Duda que resuelves hoy | Dato que necesita el portal |
| --- | --- | --- |
| CAM-AZ, 12 | ¿Qué talla? | Variante concreta |
| BOT-500, 7 | ¿Aceptamos caja abierta? | Unidad de venta y múltiplo |
| Entregar en tienda nueva | ¿Qué dirección y tarifa? | Ubicación de empresa autorizada |
| Precio habitual | ¿Cuál y desde cuándo? | Tarifa aplicable y fecha de vigencia |

No importes la ambigüedad al nuevo sistema. Haz que el comprador seleccione una variante identificable y vea la unidad que está pidiendo. Si vende cajas, empieza por definir [piezas, cajas y múltiplos](/blog/vender-por-cajas-shopify/).

## Decide entre compra directa y pedido con revisión

Una compra directa encaja cuando las condiciones están cerradas. Un pedido con revisión puede encajar si necesitas confirmar transporte, disponibilidad o alguna condición negociada antes de aceptar la operación.

Shopify permite [crear borradores B2B para pedidos recibidos por correo o teléfono](https://help.shopify.com/en/manual/b2b/checkout-and-orders/draft-orders). Al asociarlos al comprador y a su ubicación de empresa, reflejan la configuración B2B correspondiente. Eso ofrece una vía para organizar la transición; no convierte cada correo en un pedido automáticamente.

Escribe qué significa cada estado para tu equipo: solicitado, pendiente de revisión, aceptado, enviado y cobrado. Evita que un mensaje al cliente diga «confirmado» mientras administración cree que sigue siendo una propuesta.

## Diseña el acceso antes de enviar invitaciones

Prepara una lista de empresas, personas autorizadas y ubicaciones. Confirma quién puede comprar para cada sede y quién recibe la comunicación de los pedidos. No uses el mismo contacto genérico para clientes distintos por comodidad.

Después asigna las tarifas y ejecuta un pedido controlado por cada perfil. La prueba debe incluir al particular si mantienes una tienda mixta. El [portal de Émolo](/proyectos/emolo-b2b/) es una referencia publicada de mi trabajo en B2B; el ejemplo de esta guía sigue siendo un diseño independiente.

El alta del comprador también necesita un recorrido de recuperación. Si pierde acceso, ¿quién le ayuda? ¿Puede pedir por el canal atendido sin que el mismo pedido se duplique después en el portal?

## Elige la entrada de pedido según cómo compra el cliente

Un catálogo visual puede funcionar para descubrir producto. Un comprador que repone treinta referencias conocidas necesita otra velocidad: búsqueda por SKU, variantes visibles o una lista de pedido rápido.

Antes de añadir carga de CSV, comprueba si la mayoría de pedidos se resuelve con una tabla clara. Si ofreces carga de archivos, define errores por línea y una confirmación previa. No conviertas una referencia desconocida en el producto «más parecido» sin que el usuario lo confirme.

En una propuesta de alcance separaría lo necesario para el primer lanzamiento de los atajos posteriores: repetir pedido, favoritos o carga masiva. Así puedes contrastar el flujo básico sin esperar a construir todos los extras.

## Conserva un identificador hasta el ERP

La [documentación de integraciones B2B](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) advierte de que no todos los conectores cubren correctamente empresas y catálogos. Comprueba tu caso con pedidos y clientes representativos, aunque el proveedor anuncie compatibilidad con Shopify.

Mi especificación incluiría una referencia que permita seguir el pedido desde el portal hasta el ERP. Si falla el envío, debe poder distinguirse entre «no se entregó» y «se entregó, pero no recibimos respuesta». Reenviar sin comprobarlo puede duplicar ventas.

No des por suficiente una pantalla que diga sincronizado. Pide ver la empresa, dirección, variante, cantidad, impuestos y condiciones resultantes en el destino.

## Lanza con un grupo pequeño y criterios de aceptación

Propongo elegir compradores con pedidos distintos y explicarles qué podrán resolver en el portal. No necesitas fingir que todos los casos están cubiertos desde el primer día.

| Prueba | Criterio de aceptación propuesto |
| --- | --- |
| Pedido habitual | El cliente lo completa con la tarifa acordada |
| Referencia errónea | Se identifica antes de enviar |
| Caja incompleta | Se explica la cantidad válida |
| Revisión comercial | El estado se entiende en ambos lados |
| Reintento de integración | No crea otro pedido |
| Recepción en almacén | No obliga a volver a escribir las líneas |

Registra qué consultas recibe el equipo durante esa primera fase. Esas dudas te dicen qué texto, regla o dato falta. Compara trabajo manual antes y después con tu propia línea base, sin prometer un porcentaje de ahorro que todavía no has medido.

## Qué pedir para presupuestar el proyecto

Prepara tres pedidos anonimizados, el número de tarifas reales, las reglas de cantidades y el sistema que recibe las ventas. Añade las excepciones que hoy solo conoce el comercial.

Con eso se puede definir un [portal Shopify B2B](/shopify-b2b/) alrededor de tu operativa. La portada llega después de saber qué pedido debe entrar bien y quién tiene que aceptarlo.
