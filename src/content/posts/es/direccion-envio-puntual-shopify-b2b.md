---
pair: "direccion-envio-puntual-shopify-b2b"
title: "Enviar a otra dirección en Shopify B2B: entrega puntual o nueva sede"
seoTitle: "Otra dirección de envío en Shopify B2B: qué configurar"
description: "Permite entregas puntuales de mayoristas sin confundirlas con nuevas sedes. Qué guarda Shopify, qué comprobar en el transporte y cómo recibe el pedido el ERP."
keyword: "otra direccion envio shopify b2b"
date: "2026-11-05"
tags: ["Shopify B2B","Envíos","Integraciones"]
related: ["errores-sincronizacion-shopify-erp","shopify-b2b-b2c-misma-tienda"]
faq: [{"q":"¿Una dirección puntual se guarda para próximos pedidos B2B?","a":"La documentación de Shopify indica que la dirección puntual se utiliza solo en ese pedido y no se almacena para futuros usos. No la presentes como una libreta de destinos recurrentes."},{"q":"¿Debo crear una sede por cada entrega a un tercero?","a":"Decídelo según la relación comercial. Una entrega excepcional y una sede con compradores y condiciones propias son necesidades distintas; crear registros permanentes por comodidad puede complicar el mantenimiento."},{"q":"¿Permitir otra dirección garantiza que haya transporte disponible?","a":"No. Comprueba la cobertura y tarifas del destino con el producto y la cantidad del pedido. Poder escribir la dirección no demuestra que el checkout pueda ofrecer una entrega válida."}]
cta: {"heading":"¿Tus distribuidores necesitan enviar a tiendas u obras diferentes?","text":"Cuéntame si los destinos son puntuales o recurrentes, quién autoriza las entregas y qué necesita el ERP. Puedo valorar el flujo de direcciones de tu portal mayorista.","label":"Cuéntame dónde entregas los pedidos"}
---

Shopify B2B permite habilitar una dirección de envío puntual distinta de la ubicación de empresa. Antes de activarla, decide si necesitas resolver una entrega excepcional o gestionar una sede recurrente: son modelos distintos y producen datos que el almacén y el ERP deben interpretar bien.

El ajuste puede evitar correos para pedir cambios, pero no sustituye la política comercial de destinos. Define quién compra, dónde se entrega y qué datos identifican al cliente facturado.

> Documentación revisada en noviembre de 2026. Los escenarios y tablas son propuestas de aceptación, sin atribuir pruebas ni resultados a una tienda real.

## Qué hace una dirección puntual y qué conserva

La [guía de ajustes de checkout B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders/checkout-settings) explica que el destino de la ubicación está fijado por defecto y puede habilitarse otro para un pedido. La dirección puntual no se guarda para próximos usos; cada ubicación admite una dirección de envío guardada. El comprador no puede editar el destino del pedido una vez realizado.

Por eso, si tu requisito es seleccionar cada semana entre cincuenta tiendas, no des por cubierta esa necesidad solo con el permiso de dirección puntual. Primero compara el recorrido esperado con lo que la función conserva.

Para activar el comportamiento, revisa el apartado de dirección de envío en los ajustes de checkout de la empresa o ubicación, siguiendo la guía oficial. Empieza por un perfil controlado antes de aplicarlo a todas las cuentas.

## Distingue destinatario, comprador y cliente facturado

Un distribuidor puede comprar para entregar en la obra de su cliente. Esa dirección no convierte necesariamente al receptor en tu cliente comercial ni debe sustituir sin revisión los datos de facturación.

Esta tabla propone las preguntas de diseño:

| Dato del pedido | Pregunta que debe quedar resuelta |
| --- | --- |
| Comprador | ¿Qué persona está autorizada para pedir? |
| Ubicación de empresa | ¿A qué cuenta comercial corresponde la compra? |
| Destino de entrega | ¿Dónde debe llegar este pedido concreto? |
| Cliente facturado | ¿Qué entidad recibe la factura? |
| Contacto de entrega | ¿Con quién coordina el transportista? |

No uses el nombre del destinatario como identificador único de empresa en la integración. Dos operaciones del mismo distribuidor pueden tener receptores distintos sin representar dos clientes nuevos.

## Cuándo evaluar una ubicación permanente

Si el destino reaparece y tiene compradores, condiciones o responsabilidades propias, analiza un modelo estable de ubicaciones. Si es una entrega excepcional, revisa si basta el destino del pedido.

No crees una empresa nueva por cada punto de entrega para conseguir que aparezca una dirección. Ese atajo puede multiplicar registros que luego requieren tarifas, permisos y conciliación.

El criterio debe quedar por escrito para el equipo que tramita altas. Una solicitud de un empleado nuevo, una apertura de sede y una entrega a un tercero deberían poder distinguirse sin interpretar notas ambiguas del comercial.

## Permitir escribir un destino no crea su transporte

Shopify recuerda en su [guía de métodos de envío B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods) que los perfiles deben cubrir los mercados B2B con zonas de envío; sin ellas el checkout no muestra opciones de transporte para esos clientes.

Prueba el destino nuevo con productos y cantidades representativas. Una dirección dentro del mismo país puede tener un coste o una restricción operativa diferente para tu negocio. No deduzcas cobertura de la mera existencia del campo.

Define qué ocurre cuando no hay tarifa: mensaje claro, revisión comercial o la política que corresponda. Evita enviar al cliente de nuevo al carrito sin explicar que el problema está en el destino o en la cobertura.

## Revisa qué recibe el ERP y el almacén

La dirección del pedido y la dirección maestra de la cuenta no deberían sobrescribirse por accidente. Como recomendación de integración, mantendría una distinción explícita entre ambas y comprobaría cómo llega al destino.

Prepara un ejemplo ficticio con sede habitual en Madrid y entrega puntual en Valencia. Comprueba dónde se imprime Valencia y qué datos de Madrid deben seguir representando la cuenta, según tu modelo acordado.

Si el ERP solo admite direcciones previamente dadas de alta, decide qué ruta permite crear o revisar el destino antes de preparar el pedido. No aceptes como solución cerrada una transmisión que termina en una cola de errores invisible.

## Decide cómo se corrige un destino equivocado

Como el comprador no puede editar por su cuenta la dirección del pedido ya realizado mediante esta función, tu operativa necesita un recorrido de atención posterior. Explica dónde debe solicitar una corrección y quién verifica si el pedido ya se está preparando.

Una modificación no debería quedarse solo en Shopify si el almacén trabaja con un dato exportado antes. Comprueba la propagación, el momento de corte y qué pasa con una etiqueta de transporte ya creada.

La guía de [errores entre Shopify y ERP](/blog/errores-sincronizacion-shopify-erp/) ayuda a definir identidad, trazabilidad y recuperación. Cambiar una dirección no debe convertirse en crear otra venta al repetir la sincronización.

## Una matriz para validar destinos excepcionales

Completa los datos esperados y ejecuta los casos que correspondan a tu tienda. Esta es una propuesta de prueba, no resultados observados:

| Caso | Comprobación |
| --- | --- |
| Ubicación sin permiso de cambio | Mantiene su destino autorizado |
| Ubicación con permiso | Puede completar un destino puntual permitido |
| Segundo pedido | No se promete una dirección puntual guardada |
| Destino con cobertura | Ofrece la entrega y coste previstos |
| Destino sin cobertura | Explica la imposibilidad o revisión necesaria |
| Pedido exportado | Almacén recibe la dirección de ese pedido |
| Datos de cuenta | No se sobrescriben por la entrega excepcional |
| Corrección posterior | Se gestiona antes del punto de corte acordado |

Incluye un comprador con varias ubicaciones y verifica cuál seleccionó antes de introducir otro destino. Conserva capturas o registros anonimizados del mismo caso en ambos sistemas para comparar datos equivalentes.

## Qué preparar para definir el proyecto

Trae un pedido habitual, uno a un tercero y otro a un destino recurrente. Indica qué sistema factura, cuál prepara la mercancía y quién autoriza los cambios.

Si conviven consumidores y mayoristas, añade la comprobación del recorrido B2C. El artículo sobre [tienda mixta](/blog/shopify-b2b-b2c-misma-tienda/) sirve para revisar qué condiciones comparten y cuáles deben diferenciarse.

Con esos ejemplos se puede diseñar una [integración Shopify y ERP](/servicios/integraciones-erp/) que conserve el significado de cada dirección. El resultado es un pedido que llega al sitio correcto sin transformar cada entrega en un problema de datos maestros.
