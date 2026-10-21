---
pair: 'webhooks'
term: 'Webhooks'
aliases: ['webhook', 'suscripción de webhook', 'eventos de Shopify']
category: 'api'
seoTitle: 'Webhooks de Shopify: qué son y cómo no perder pedidos'
description: 'Un webhook es un aviso que Shopify manda a tu servidor cuando algo pasa en la tienda. Lo que decide si funciona no es recibirlo: es qué haces cuando falla.'
keyword: 'webhooks shopify'
answer: 'Un webhook es una petición HTTP que Shopify envía a una URL tuya cuando ocurre algo en la tienda: un pedido nuevo, un producto actualizado, un cliente creado. Es la forma correcta de enterarse de los cambios, en lugar de preguntar cada pocos minutos por la API.'
related: ['admin-graphql-api', 'storefront-api']
updated: '2026-10-22'
---

La diferencia con una sincronización que pregunta cada cinco minutos es doble: te enteras al instante y no gastas presupuesto de API preguntando por cosas que no han cambiado.

## Lo que hay que hacer sí o sí

**Verificar la firma.** Cada envío lleva una cabecera HMAC calculada con el secreto de tu app. Un endpoint que no la comprueba acepta pedidos inventados por cualquiera que conozca la URL. Es el fallo de seguridad que más veces he visto en integraciones hechas con prisa.

**Contestar rápido y trabajar después.** Shopify espera una respuesta en pocos segundos. Si tu endpoint se pone a escribir en el ERP antes de contestar, acabas fallando por tiempo de espera aunque el trabajo se haya hecho. Lo correcto es guardar el aviso, devolver 200 y procesarlo en una cola.

**Asumir duplicados.** El mismo evento puede llegarte dos veces. Si cada aviso crea un pedido en tu sistema, acabarás con pedidos repetidos. Guarda el identificador del evento y descarta lo que ya has procesado.

## Lo que pasa cuando tu servidor está caído

Shopify reintenta durante un tiempo y, si sigue fallando, acaba desactivando la suscripción. Ese es el escenario que hay que diseñar: no "¿y si falla un aviso?", sino "¿cómo recupero lo que me perdí mientras estuve caído?". La respuesta suele ser un repaso por la [API de Admin](/glosario/api-graphql-de-admin/) que cubra la ventana de caída.

Las condiciones exactas de reintento están en la [documentación de webhooks](https://shopify.dev/docs/apps/build/webhooks).
