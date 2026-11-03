---
pair: "errores-sincronizacion-shopify-erp"
title: "Shopify y ERP no cuadran: cómo localizar errores de stock y pedidos"
seoTitle: "Errores entre Shopify y ERP: stock, pedidos y reintentos"
description: "Localiza por qué Shopify y tu ERP muestran stock distinto, pierden pedidos o los duplican. Una guía de datos, trazabilidad, reintentos y conciliación."
keyword: "errores sincronizacion shopify erp"
date: "2026-11-03"
tags: ["Integraciones","Shopify B2B","Pedidos"]
related: ["importar-tarifas-shopify-b2b","pago-aplazado-shopify-b2b"]
faq: [{"q":"¿Debo reenviar todos los pedidos que aparecen con error?","a":"No sin comprobar el destino. Un error de respuesta puede ocurrir después de que el ERP haya creado el pedido. Consulta el identificador antes de repetir para evitar duplicados."},{"q":"¿Sincronizar más a menudo arregla diferencias de stock?","a":"No necesariamente. Si las referencias, reservas o fuentes de verdad son incorrectas, enviar más rápido puede repetir el error. Define primero qué representa cada cantidad."},{"q":"¿Qué datos necesito para diagnosticar un pedido perdido?","a":"Identificador en Shopify, hora, referencia externa, respuesta del conector y búsqueda en el ERP. Comparte ejemplos anonimizados y conserva registros sin exponer credenciales."}]
cta: {"heading":"¿Tu equipo corrige a mano lo que debería sincronizarse?","text":"Dime qué ERP y conector usas, qué dato falla y un ejemplo anonimizado con fecha. Puedo valorar el diagnóstico y el flujo de recuperación.","label":"Cuéntame qué no cuadra"}
---

Si Shopify y tu ERP no cuadran, empieza por una referencia o un pedido concreto y sigue su recorrido entre ambos sistemas. Antes de aumentar la frecuencia de sincronización, decide quién manda sobre el dato y qué significa exactamente el valor que comparas.

Un stock de diez piezas disponibles y otro de diez piezas físicas no son necesariamente la misma magnitud. Un pedido con error de entrega tampoco es necesariamente un pedido que no existe en el destino.

> Método de diagnóstico propuesto en noviembre de 2026. Los registros y cantidades son ilustrativos; no describen una incidencia de un cliente.

## Elige un fallo y conserva la secuencia

No empieces con «la integración falla a veces». Elige un pedido o una variante afectada, anota la hora y reúne identificadores de origen y destino. Guarda el estado antes de corregirlo manualmente.

Esta es una propuesta de ficha de incidente:

| Campo | Ejemplo ficticio |
| --- | --- |
| Objeto | Pedido de prueba 1042 |
| Acción esperada | Crear venta en ERP una sola vez |
| Hora de envío | 10:05, con zona horaria registrada |
| Resultado de transporte | Respuesta no recibida |
| Estado encontrado en ERP | Venta creada a las 10:05 |
| Acción segura siguiente | Recuperar referencia y conciliar |

El ejemplo muestra por qué un botón de reenviar necesita contexto. Si la venta ya existe, volver a crearla añade otro problema.

## Define una fuente de verdad por campo

No basta con decir «el ERP manda». Quizá mande sobre existencias físicas, mientras Shopify registra el pedido nuevo y el sistema de almacén confirma la preparación. Escribe las responsabilidades por dato y por momento.

| Dato | Decisión que hay que documentar |
| --- | --- |
| SKU | Identificador estable y equivalencias |
| Stock | Físico, reservado, disponible y ubicación |
| Precio | Tarifa, moneda, vigencia y excepciones |
| Pedido | Quién lo crea y qué referencia evita duplicarlo |
| Pago | Quién confirma cobro y quién refleja el saldo |

Si ambos sistemas pueden sobrescribir el mismo dato, define la prioridad y qué se conserva para auditoría. Un bucle en el que cada lado restaura su valor anterior no se arregla con más reintentos.

## Comprueba el modelo B2B del conector

Shopify documenta [integraciones con sistemas externos](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) y advierte de que algunas apps no representan correctamente empresas y catálogos. «Conecta Shopify» no demuestra que cubra tu estructura mayorista.

Pide un pedido con comprador, empresa, ubicación, tarifa y condiciones reales de prueba. Mira qué queda en el ERP. Si solo viajan nombre y correo, puede faltar la clave que administración usa para reconocer al cliente.

No copies campos a notas libres como solución definitiva sin decidir quién los mantiene y cómo se validan. Las notas pueden ayudar a diagnosticar, pero no sustituyen una correspondencia estable entre entidades.

## Separa retraso, dato incorrecto y operación fallida

Un retraso tiene un dato correcto que todavía no llega. Un error de correspondencia entrega un dato que llega al objeto equivocado. Una operación fallida no se completa según el criterio pactado.

Cada caso necesita una respuesta distinta. Para retrasos, registra antigüedad y cola pendiente. Para correspondencias, corrige la transformación y revisa objetos ya afectados. Para operaciones incompletas, confirma el destino antes de decidir si repetir.

Un aviso que llame error a todo no permite priorizar. Una venta que no llegó requiere otra urgencia que un cambio descriptivo pendiente desde hace tres minutos.

## Diseña reintentos que no dupliquen

Como recomendación de arquitectura, usaría una clave externa estable y un registro del resultado. El objetivo es que procesar dos veces el mismo evento no cree dos ventas.

No deduzcas que un evento es nuevo solo porque llega otra vez. Y no hagas depender la identidad de una hora redondeada o de un importe: dos pedidos legítimos pueden compartirlos.

La recuperación debe cubrir el caso más incómodo: el ERP aceptó la operación y la conexión se cortó antes de responder. La integración necesita consultar o reconciliar el resultado, no tratar cada silencio como permiso para crear otra vez.

## Para stock, reproduce una venta y una cancelación

Escoge una variante con poca actividad durante la prueba y documenta todas las cantidades relevantes. Después simula, en un entorno controlado, una reserva, venta, cancelación y ajuste de almacén según tu modelo.

No compares pantallas sin registrar el momento. Una captura tomada antes de una venta y otra después pueden mostrar diferencias correctas. Anota también ubicación y unidad: piezas y cajas son un origen frecuente de comparaciones inútiles.

Si el producto se vende por packs, define cómo se descuentan componentes. La guía de [cajas y múltiplos](/blog/vender-por-cajas-shopify/) ayuda a aclarar esa unidad antes de culpar al conector.

## Añade conciliación, no solo alertas

Una alerta te dice que algo salió mal; la conciliación compara lo que debería existir con lo que existe. Propongo un informe de pedidos sin referencia de destino, duplicados, importes distintos y datos pendientes demasiado tiempo.

El informe necesita un responsable y una acción posible. «Hay 37 errores» sin detalle obliga al equipo a buscar desde cero. Muestra identificador, último intento, causa conocida y estado del destino cuando pueda comprobarse.

Conserva registros útiles sin volcar información sensible innecesaria. Una investigación de SKU y cantidades rara vez necesita exponer datos completos del comprador o claves de acceso.

## Qué significa resolver la incidencia

Repite el caso original, una actualización duplicada y un fallo de respuesta. Comprueba que la corrección sobrevive a la siguiente sincronización y que los objetos afectados anteriormente quedan conciliados.

Después documenta qué sistema controla cada dato y cómo se recupera el proceso. Si la única solución es que alguien pulse un botón todas las mañanas, has creado una tarea manual, no una integración mantenible.

Para valorar una [integración Shopify y ERP](/servicios/integraciones-erp/), necesito entender el recorrido y un ejemplo reproducible. Con eso se puede distinguir una configuración que corregir de un flujo que hay que rediseñar.
