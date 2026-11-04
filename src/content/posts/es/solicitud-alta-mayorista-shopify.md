---
pair: "solicitud-alta-mayorista-shopify"
title: "Solicitudes de alta mayorista en Shopify: formulario, aprobación y primera compra"
seoTitle: "Alta mayorista en Shopify: solicitar y aprobar acceso"
description: "Recibe solicitudes B2B en Shopify sin conceder tarifas al enviar un formulario. Qué resuelve Shopify Forms y cómo diseñar revisión, permisos y primera compra."
keyword: "solicitud alta mayorista shopify"
date: "2026-11-04"
tags: ["Shopify B2B","Cuentas de cliente","Shopify Forms"]
related: ["shopify-b2b-b2c-misma-tienda","precio-incorrecto-shopify-b2b"]
faq: [{"q":"¿Enviar una solicitud concede acceso mayorista automáticamente?","a":"El flujo documentado de solicitudes de empresa mantiene el acceso pendiente de aprobación por defecto. Comprueba que ninguna automatización lo conceda antes de la revisión que tu negocio necesita."},{"q":"¿Este formulario sirve para añadir empleados a una empresa existente?","a":"No es el propósito del flujo nativo de solicitudes de empresa. Prepara un recorrido distinto para reconocer a un empleado y asociarlo a la empresa y ubicación correctas."},{"q":"¿Qué debo comprobar después de aprobar al mayorista?","a":"Que accede a la ubicación autorizada, recibe la tarifa acordada y puede completar un pedido válido. La aprobación administrativa no sustituye la prueba del recorrido de compra."}]
cta: {"heading":"¿Tus solicitudes mayoristas se pierden entre formularios y correos?","text":"Cuéntame quién revisa las altas, qué datos necesita y cómo asignas tarifas. Puedo valorar el recorrido desde la solicitud hasta el primer pedido B2B.","label":"Cuéntame cómo apruebas las altas"}
---

Puedes recibir solicitudes de alta mayorista con Shopify Forms y revisar el acceso antes de que el comprador use condiciones B2B. Diseña la solicitud, la aprobación y la primera compra como tres pasos distintos: enviar datos no debería significar recibir una tarifa que todavía no has autorizado.

La pregunta aparece en la comunidad como una necesidad de sustituir correos y altas manuales. Para resolverla, primero hay que decidir qué comprueba tu equipo y cómo sabe el comprador que ya puede pedir.

> Documentación contrastada en noviembre de 2026. Las tablas y escenarios siguientes son propuestas de diseño; no representan una implementación probada en una tienda de cliente.

## Qué permite el flujo nativo de solicitudes

La [documentación de solicitudes de empresa](https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests) describe un formulario con Shopify Forms que crea empresa, ubicación y cliente, pendientes de autorización por defecto. No añade personas a una empresa ya existente. Además, un escaparate completamente restringido a B2B impide que un solicitante sin acceso llegue a ese formulario.

Esas condiciones deciden dónde empieza el proyecto. Si tu tienda está cerrada, dibuja cómo llega un interesado al punto de solicitud. Si ya trabaja para un cliente existente, prepara un recorrido de invitación o asociación con revisión, en lugar de crear otra empresa por cada empleado.

No deduzcas la capacidad actual de Shopify de una respuesta antigua del foro. Algunos resultados siguen describiendo este proceso como enteramente manual; otros son anuncios de apps. Comprueba el flujo documentado y después valora lo que tu negocio necesita añadir.

## Define qué decisión debe permitir el formulario

No pidas campos porque aparezcan en otra web mayorista. Para cada dato escribe quién lo usa y qué decisión cambia. Un formulario largo que nadie revisa no mejora la aprobación.

Esta es una propuesta de trabajo, no una lista de campos obligatorios de Shopify:

| Dato solicitado | Decisión que debe ayudar a tomar |
| --- | --- |
| Empresa y actividad | Si encaja en el canal mayorista |
| Persona de contacto | Con quién aclarar la solicitud |
| País y zona de entrega | Qué operativa comercial corresponde |
| Identificador comercial necesario | Cómo se relacionará con administración o ERP |
| Número de establecimientos | Si hace falta revisar varias ubicaciones |

Si solicitas documentación adicional, define cómo la recibe y revisa la persona responsable. No trates una declaración del formulario como una verificación fiscal ni como autorización para conceder crédito.

## Conserva los datos donde el revisor pueda encontrarlos

El [modelo de campos de Shopify Forms](https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests#adding-custom-input-fields-to-your-form) distingue información local del formulario y metacampos asociados a cliente o empresa. Decide el destino según cómo quieras revisar y reutilizar el dato.

Antes de construir automatizaciones, pide al revisor que encuentre una solicitud ficticia completa. Si necesita abrir tres pantallas y buscar el mismo correo en una hoja, el proceso todavía tiene trabajo pendiente.

Incluye en tu especificación qué ocurre con un segundo envío: corrección de datos, otra ubicación o solicitud duplicada. No prometas fusionar automáticamente registros solo porque sus nombres se parecen.

## Separa avisar al equipo de aprobar al comprador

Shopify documenta [plantillas B2B de Flow](https://help.shopify.com/en/manual/b2b/reports-and-automations/automations), tanto para avisar de nuevas solicitudes como para autorizar automáticamente las creadas mediante el formulario. Son decisiones distintas.

Si necesitas revisión comercial, empieza por avisar y asignar un responsable. No actives una plantilla de aprobación como atajo para que el cliente reciba un correo más rápido.

Mi tabla de estados propuesta sería esta:

| Estado interno | Qué sabe el comprador | Siguiente acción |
| --- | --- | --- |
| Recibida | Su solicitud ha llegado | Revisión asignada |
| Falta información | Qué dato concreto debe aclarar | Solicitar corrección |
| Aprobada | Puede acceder a las condiciones autorizadas | Comprobar primera compra |
| No aceptada | Resolución comercial clara | Cerrar o atender consulta |

Estos nombres son una propuesta organizativa, no estados que debas esperar encontrar literalmente en el administrador.

## Aprobar también exige decidir permisos y tarifa

La revisión debe terminar con una respuesta operativa: qué persona puede comprar, para qué ubicación y con qué condiciones. Un correo que diga aprobado no crea por sí mismo esa correspondencia.

Comprueba los permisos con un comprador de prueba equivalente. Después revisa que reciba los productos y precios previstos. Si ves un importe diferente, utiliza el [diagnóstico de precios B2B](/blog/precio-incorrecto-shopify-b2b/) antes de corregirlo pintando otra cifra en el tema.

Si la tienda atiende también a particulares, compara ambos perfiles en el mismo país. La guía de [B2B y B2C en una tienda](/blog/shopify-b2b-b2c-misma-tienda/) explica por qué la separación de condiciones debe comprobarse también fuera de la cuenta mayorista.

## Prueba la solicitud completa y sus excepciones

Prepararía esta matriz antes de lanzar el formulario. Los resultados deben adaptarse a tu política comercial:

| Escenario ficticio | Evidencia de aceptación |
| --- | --- |
| Nuevo interesado válido | Solicitud visible y responsable identificado |
| Datos incompletos | Se explica qué corregir |
| Solicitud todavía pendiente | No recibe condiciones antes de autorización |
| Aprobación finalizada | Acceso y tarifa esperados en una compra |
| Segundo envío del mismo contacto | Revisión de duplicados sin alta comercial errónea |
| Empleado de empresa existente | Se deriva al proceso correcto |
| Particular en tienda mixta | Conserva sus condiciones de compra |

Prueba también el correo de acceso y la ruta desde móvil. Un botón que llega a una página cerrada convierte una solicitud bien guardada en otra conversación de soporte.

## Qué medir después de abrir las solicitudes

Registra solicitudes recibidas, pendientes por antigüedad, aprobadas y compradores que completan su primer pedido. Define tu propia línea base antes de prometer que el formulario mejorará una tasa.

Mira especialmente las aprobadas sin compra. Puede faltar comunicación, una tarifa o una condición de pedido; también puede que el interesado simplemente no vaya a comprar todavía. El dato orienta la investigación, no demuestra la causa.

Para valorar el desarrollo, prepara una solicitud anonimizada y explica quién decide cada paso. Con eso se puede diseñar un [portal Shopify B2B](/shopify-b2b/) que convierta el interés comercial en un acceso utilizable, con una revisión que tu equipo pueda mantener.
