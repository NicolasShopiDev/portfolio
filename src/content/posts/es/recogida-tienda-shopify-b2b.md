---
pair: "recogida-tienda-shopify-b2b"
title: "La recogida en tienda no aparece en Shopify B2B: qué comprobar"
seoTitle: "Recogida en tienda en Shopify B2B: por qué no aparece"
description: "Tu particular puede recoger pero el mayorista no ve la opción. Revisa activación B2B, sucursales, pedido y segmentación antes de crear una tarifa gratuita."
keyword: "recogida tienda shopify b2b"
date: "2026-11-06"
tags: ["Shopify B2B","Envíos","Checkout"]
related: ["direccion-envio-puntual-shopify-b2b","shopify-b2b-b2c-misma-tienda"]
faq: [{"q":"¿La recogida en tienda está activada por defecto para B2B?","a":"La ayuda de Shopify indica que está desactivada inicialmente y que el propietario debe solicitar su activación a soporte. Compruébalo antes de atribuir el fallo al tema."},{"q":"¿Una tarifa de envío llamada recogida equivale a la función de recogida?","a":"No la des por equivalente. Comprueba qué método registra el pedido y qué recibe el equipo que prepara la mercancía, además del nombre y el precio mostrados."},{"q":"¿La prueba de un particular valida la recogida de un mayorista?","a":"No. Compara ambos perfiles con el mismo producto y punto de recogida. La activación y el contexto B2B necesitan su propia comprobación."}]
cta: {"heading":"¿Tus mayoristas llaman para recoger pedidos que deberían tramitar online?","text":"Cuéntame el plan, los puntos de recogida y cómo trabaja tu almacén. Puedo valorar el recorrido B2B y su relación con preparación e integración.","label":"Cuéntame cómo recogen tus clientes"}
---

Si un particular puede elegir recogida en tienda pero un comprador B2B no, comprueba primero la activación específica para empresas. Después revisa el punto de recogida, el pedido y las reglas que deciden qué opciones ve cada perfil.

Crear una tarifa gratuita llamada recogida puede ocultar el síntoma sin representar correctamente la operación. Antes de cambiar el checkout, define qué debe ver el comprador y qué debe recibir el equipo que prepara el pedido.

> Documentación contrastada en noviembre de 2026. Los escenarios son ejemplos de diagnóstico y aceptación, no pruebas realizadas en una tienda de cliente.

## La activación de B2B es una comprobación independiente

La [guía oficial de envíos B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods) indica que la recogida está desactivada por defecto para empresas y que el propietario de la tienda u organización debe pedir su activación a soporte. La misma guía distingue recogida de entrega local.

Por eso una captura del checkout de un particular no demuestra que el servicio esté habilitado para un mayorista. Registra el contexto de compra y confirma ese requisito antes de investigar apps o modificar el tema.

Si vienes de una respuesta antigua del foro que afirmaba que B2B no permite recogida, contrástala con la documentación actual. Los hilos sirven para reconocer el problema, pero no son una lista de capacidades vigente.

## Distingue los servicios que tu equipo llama recogida

| Servicio comercial | Pregunta que hay que resolver |
| --- | --- |
| Recogida en tu tienda o almacén | ¿Qué punto prepara y entrega el pedido? |
| Entrega local al comprador | ¿Qué recorrido y cobertura se han configurado? |
| Envío a un punto de un transportista | ¿Qué integración selecciona y conserva ese punto? |
| Envío gratuito convencional | ¿Sigue siendo una expedición a una dirección? |

Esta tabla propone distinciones de negocio; no enumera funciones garantizadas de cualquier plan o app. Evita usar un mismo nombre para servicios con preparación y datos diferentes.

Una recogida por el comprador y una entrega en su sede requieren comunicaciones distintas. Si el almacén solo recibe una dirección de envío, necesita saber cómo reconocer la operación antes de preparar etiquetas.

## Revisa el punto de recogida y los productos del ejemplo

Shopify documenta la [configuración de recogida por ubicación](https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/pickup-in-store) y requisitos como disponer de una ubicación que prepare pedidos online y utilizar el checkout actualizado. La guía también trata disponibilidad y transferencias de inventario.

Para diagnosticar, empieza con un punto y una variante cuya situación puedas explicar. Anota dónde está el inventario y cómo espera tu negocio preparar esa compra. No cambies todos los productos para conseguir que aparezca una opción sin entender qué desbloqueó la prueba.

Después añade el pedido habitual: varias referencias, cantidades mayoristas y los destinos o ubicaciones que realmente manejen tus clientes. Un ejemplo mínimo demuestra una parte; no valida todavía toda la operativa.

## Compara B2B y B2C con las mismas condiciones

Usa el mismo producto y punto de recogida para un particular y un comprador de empresa de prueba. Conserva qué ubicación comercial seleccionó este último y en qué paso cambian las opciones.

Como propuesta, registra estos datos:

| Dato | Para qué lo necesitas |
| --- | --- |
| Perfil y ubicación de empresa | Identificar el contexto comercial |
| Variante y cantidad | Repetir el mismo pedido |
| Punto de recogida previsto | Evitar comparar almacenes distintos |
| Opciones mostradas | Localizar dónde aparece la diferencia |
| Apps o reglas activas | Revisar restricciones que puedan intervenir |
| Resultado del pedido | Comprobar cómo se registra la entrega |

Si hay una diferencia, no afirmes que la causa es una tarifa de transportista solo porque ambas cosas coinciden. Aísla la condición en un entorno controlado y conserva evidencia para soporte.

## Revisa la segmentación de una tienda mixta

La ayuda B2B señala que, al habilitar recogida en una tienda mixta, ambos tipos de clientes pueden elegirla. También aclara que los perfiles de envío no sirven para limitarla exclusivamente a B2B. Revisa las herramientas compatibles si necesitas esa separación.

Escribe qué puntos debe ver cada comprador. Un almacén industrial puede atender distribuidores mientras otra tienda atiende particulares; esa política necesita una comprobación explícita.

El artículo sobre [B2B y B2C en una misma tienda](/blog/shopify-b2b-b2c-misma-tienda/) ayuda a ordenar condiciones compartidas y separadas. Antes de instalar una app, confirma su plan requerido y qué tipo de opción puede ocultar.

## Por qué el nombre de una tarifa no valida el resultado

En varios hilos antiguos se propone una tarifa de cero euros como solución. Si la evalúas, inspecciona el método que registra el pedido, las comunicaciones y cómo decide almacén que no hay que enviarlo.

Una etiqueta visible no demuestra que el sistema haya creado una recogida nativa. Tampoco explica qué pasa si el comprador la elige esperando envío gratuito. La solución debe evitar ambigüedad antes de aceptar el pedido.

No usaría como criterio de éxito únicamente que desaparezca el coste del transporte. El criterio es que se prepare y entregue del modo acordado.

## Prueba también las comunicaciones y el ERP

Prepara una matriz de aceptación adaptada a tu negocio. Estos resultados son propuestos, no observados:

| Caso | Evidencia necesaria |
| --- | --- |
| B2B con servicio habilitado | Puede elegir el punto previsto |
| Particular en tienda mixta | Conserva las opciones autorizadas |
| Punto excluido para un perfil | No aparece como alternativa válida |
| Pedido habitual de varias líneas | Disponibilidad y preparación coherentes |
| Confirmación al comprador | Explica dónde y cómo se entrega |
| Registro de preparación | Identifica el punto y evita un envío accidental |
| Recepción en ERP | Conserva el método y referencia correctos |
| Cancelación o cambio solicitado | Tiene un recorrido de atención definido |

Si el destino de una entrega cambia, no lo confundas con cambiar de servicio. La guía de [direcciones puntuales B2B](/blog/direccion-envio-puntual-shopify-b2b/) trata otro requisito y complementa esta revisión.

## Qué enviar para pedir ayuda sin rehacer todo

El plan, confirmación de activación, una variante, un punto de recogida y el recorrido exacto de un comprador de prueba. Añade el resultado del mismo caso con perfil particular y las reglas relevantes.

Con esos datos se puede valorar un [portal Shopify B2B](/shopify-b2b/) que represente cómo entregas de verdad. La opción visible en checkout es el principio; la validación termina cuando comprador y almacén entienden el mismo pedido.
