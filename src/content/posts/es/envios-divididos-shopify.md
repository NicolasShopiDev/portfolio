---
pair: envios-divididos-shopify
title: 'Un pedido, dos envíos... y un cliente que no entiende el transporte'
seoTitle: 'Envíos divididos en Shopify: entender paquetes y costes'
description: 'Dos envíos no significan necesariamente dos pedidos ni un cobro duplicado. Revisa qué se separa, cómo se explica y qué necesita recibir tu equipo logístico.'
keyword: envios divididos shopify
date: '2026-11-24'
tags: ['Shopify', 'Checkout', 'Logística']
faq:
  - q: '¿Dos envíos significan dos pedidos?'
    a: 'No necesariamente. Un mismo pedido puede tener varios grupos de entrega y órdenes de preparación. Comprueba los registros antes de interpretar duplicidades.'
  - q: '¿Dos paquetes deberían costar siempre el doble?'
    a: 'No uses el número de paquetes como fórmula. Revisa la configuración y el importe realmente presentado al comprador antes de concluir que existe un error.'
  - q: '¿Puedo prometer una presentación concreta del checkout?'
    a: 'Primero comprueba el recorrido real y qué permite tu configuración. Define la información que necesita el comprador antes de encargar un cambio de interfaz.'
cta:
  heading: '¿Tu checkout y tu almacén cuentan historias diferentes?'
  text: 'Cuéntame una cesta que se divide, qué coste esperas y qué recibe logística. Podemos revisar el recorrido y los requisitos de integración.'
  label: 'Revisar mis entregas divididas'
---

Si Shopify muestra varios envíos en una compra, identifica qué artículos forman cada grupo y qué coste ve el comprador antes de cambiar tarifas. Una compra puede generar más de una entrega; eso no demuestra por sí solo que hayas duplicado un pedido o cobrado mal.

Tú ves una operación logística bastante razonable.

El cliente ve dos bloques de transporte... y empieza a hacer cuentas con cara de pocos amigos.

Conviene que ambos estéis comprando la misma historia.

## Separa pedido, entrega y caja física

La documentación de [carritos divididos](https://shopify.dev/docs/apps/build/orders-fulfillment/split-carts) distingue grupos de entrega y órdenes de preparación dentro de una misma compra. Entre los motivos aparecen productos de distintas ubicaciones o perfiles y combinaciones con preventa.

Para investigar, dibuja tres niveles: qué compró la persona, cómo se organiza su entrega y qué prepara el almacén. No supongas que «pedido», «envío» y «caja» son siempre equivalentes.

Ejemplo hipotético: una tienda vende una pieza disponible y un accesorio bajo reserva. Comercial puede describirlo como una compra; el comprador necesita saber cuándo recibirá cada cosa. Antes de discutir el diseño de un desplegable, acordad esa promesa.

## Averigua qué configuración estás mirando

La [guía de perfiles de envío](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles) describe reglas por productos y ubicaciones y una transición gradual a opciones de envío por mercado. No presupongas que dos tiendas muestran los mismos ajustes.

Anota mercado, productos, cantidades y recorrido. Guarda una captura del detalle que recibe el comprador, no solo de la suma final. Esa evidencia permite discutir un caso concreto en lugar de «Shopify cobra dos veces».

Si no aparece ninguna tarifa, es otro síntoma: empieza por [envío no disponible](/blog/envio-no-disponible-shopify-b2b/). Aquí sí existe una propuesta de transporte; queremos entender y explicar su división.

## No deduzcas el coste contando paquetes

La [ayuda sobre envío dividido](https://help.shopify.com/es/manual/checkout-settings/split-shipping) documenta diferencias de cobro según configuración y tipo de tarifa. También excluye los checkouts B2B enviados a borrador y ciertos casos de reparto de una misma línea entre ubicaciones; conviene comprobar compatibilidad de apps. No es una opción universal para cualquier flujo.

En las tiendas actualizadas a opciones por mercado cambia el funcionamiento y ya no aplica el antiguo interruptor de activación. Revisa la sección correspondiente a tu tienda antes de seguir instrucciones de una captura antigua.

Para el ejemplo ficticio, no pondría un precio inventado en una regla real. Escribiría primero qué espera el negocio: ¿se informa de dos entregas?, ¿qué importe debe mostrarse?, ¿quién puede justificarlo? Después compararía esa expectativa con el recorrido observado y la documentación aplicable.

Y, por amor de Dios, no pongas «envío gratis» en la ficha si necesitas explicar después tres excepciones que nadie ha visto. La letra pequeña no transporta confianza.

## Redacta la promesa antes de pedir otro diseño

Propongo esta frase de trabajo: «Esta compra incluye ___; recibirás ___; el transporte que se muestra corresponde a ___».

No es una notificación predeterminada de Shopify ni una plantilla contractual. Es una prueba de claridad para tu equipo. Si cuesta completarla, falta una decisión comercial, no necesariamente un componente visual.

Revisa ficha, carrito y checkout con la misma cesta. Busca contradicciones: una fecha única para artículos que se esperan en momentos diferentes, mensajes generales que no explican la excepción o términos que soporte interpreta de otra manera.

Una interfaz más desplegada puede ayudar en un caso y no resolver nada en otro. Define primero qué debe entender la persona; después verifica qué presentación permite el recorrido y qué desarrollo tendría sentido. No prometas rehacer el checkout antes de evaluarlo.

## Haz que logística entienda el resultado también

Para un sistema externo, el modelo oficial de carritos divididos advierte contra asumir una correspondencia única entre pedido y preparación. No necesitas leer código para plantear el requisito: cada grupo debe llegar al equipo con la información que necesita, sin omisiones ni duplicidades.

Esta sería mi ficha de aceptación propuesta para la cesta del ejemplo:

| Comprobación | Evidencia a guardar |
| --- | --- |
| Contenido de la cesta | Referencias, cantidades y contexto |
| Promesa al comprador | Qué entiende sobre entregas y coste |
| Resultado comercial | Pedido generado y grupos identificados |
| Trabajo de almacén | Qué recibe cada equipo y qué debe preparar |
| Comunicación posterior | Qué se comunica cuando avanza cada entrega |

Incluye otra cesta que no deba dividirse y compara. No declares toda la operativa validada por una compra que termina sin errores. Este protocolo no se ha ejecutado en una tienda para el artículo.

Si las entregas pasan por otro sistema, prepara un caso anonimizado antes de valorar una [integración con tu ERP](/servicios/integraciones-erp/). Cesta, expectativa y resultado: con eso ya podemos hablar de una solución concreta.

Fuentes revisadas en noviembre de 2026. Ejemplo y pruebas hipotéticos; no se han verificado tarifas ni integraciones de un cliente.
