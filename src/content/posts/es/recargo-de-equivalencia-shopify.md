---
pair: "recargo-de-equivalencia-shopify"
title: "Recargo de equivalencia en Shopify B2B: diseñar pedido, cobro y factura"
seoTitle: "Recargo de equivalencia en Shopify: pedido y factura"
description: "Qué definir para gestionar el recargo de equivalencia con Shopify B2B: cliente, base, cobro, factura y ERP. Una guía de integración sin atajos fiscales."
keyword: "recargo de equivalencia shopify"
date: "2026-11-03"
tags: ["Shopify B2B","Impuestos","Integraciones"]
related: ["pedidos-excel-portal-shopify","errores-sincronizacion-shopify-erp"]
faq: [{"q":"¿Un catálogo B2B demuestra que el recargo está bien facturado?","a":"No. El catálogo define precios; hay que comprobar por separado el tratamiento fiscal, el importe cobrado y el desglose del documento emitido."},{"q":"¿Puedo aplicar un porcentaje global a todos los compradores?","a":"No lo hagas sin validar el alcance fiscal. Debes identificar cuándo corresponde y a quién. Un cambio general puede afectar operaciones para las que no procede."},{"q":"¿Esta guía ofrece una automatización ya probada para instalar?","a":"No. Define decisiones y pruebas de integración. Cualquier cálculo automático o modificación de pedidos debe probarse con el sistema de facturación y las reglas fiscales de tu operación."}]
cta: {"heading":"¿Vendes a comercios sujetos a recargo de equivalencia?","text":"Cuéntame cómo identificas esos clientes, qué programa factura y cómo entra el pedido. Puedo valorar el flujo técnico que debe validarse junto con tu asesoría.","label":"Cuéntame cómo facturas hoy"}
---

Para gestionar recargo de equivalencia con Shopify B2B, hay que alinear la identificación del comprador, el cálculo aprobado, el importe solicitado y la factura final. Cambiar un precio o añadir una línea no demuestra por sí solo que todo el recorrido sea correcto.

La primera decisión técnica es qué sistema controla el tratamiento fiscal y cómo se conserva hasta el cobro y la contabilidad. Antes de automatizar, reúne un pedido y una factura de ejemplo aprobados para tu operación.

> Documentación consultada en noviembre de 2026. Esta guía define una integración y su aceptación; no afirma que un flujo de recargo se haya probado en una tienda. La aplicación fiscal concreta debe validarse con quien lleva tus impuestos.

## Qué exige comprobar la factura

La Agencia Tributaria explica que el proveedor repercute el recargo además del IVA, sobre la misma base y de forma independiente en la factura, cuando procede. También describe la comunicación del régimen y una consulta censal. La referencia es su [guía de aplicación del recargo](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2025/capitulo-06-regimenes-especiales-iva/regimen-especial-recargo-equivalencia/aplicacion-recargo-equivalencia.html).

Por eso el criterio de aceptación debe incluir el documento emitido, no solo la pantalla de pago. Una cifra total correcta puede esconder un desglose que tu programa contable interpreta de otra manera.

No deduzcas el régimen por el nombre del comprador o por que se llame tienda. Prepara una clasificación validada y conserva la información necesaria para mantenerla actualizada.

## Define el dato que identifica el tratamiento

Propongo una ficha interna con estado fiscal validado, fecha, responsable y sistema de origen. No son campos obligatorios de Shopify ni un modelo legal universal: son una forma de evitar que una decisión importante quede en una nota suelta.

Decide si la información se mantiene en el ERP, en el sistema de facturación o en otro registro. Si se refleja también en Shopify, define cómo se actualiza y qué ocurre cuando falta.

Una casilla que nadie revisa puede automatizar un error durante meses. El flujo necesita una política para información dudosa: revisión antes de aceptar el importe, en lugar de una asignación silenciosa.

## Separa precio comercial, impuestos y total solicitado

| Capa | Pregunta de diseño |
| --- | --- |
| Precio comercial | ¿Qué tarifa y descuentos corresponden? |
| Base del cálculo | ¿Qué conceptos entran según la regla aprobada? |
| IVA y recargo | ¿Qué importes debe desglosar el sistema fiscal? |
| Cobro | ¿Qué total acepta y paga el comprador? |
| Factura | ¿Representa los conceptos de la misma operación? |
| Contabilidad | ¿Recibe códigos e importes conciliables? |

No reutilices un descuento para representar un impuesto sin comprobar el efecto completo. Tampoco combines porcentajes en un nombre de tarifa y des por resuelta la factura.

Como ejercicio de aceptación usaría importes calculados por la asesoría o el programa fiscal. Este artículo no fija tipos ni decide qué artículos de tu catálogo están sujetos: evita convertir un ejemplo numérico en una instrucción fiscal universal.

## Escoge un recorrido que permita revisar antes de cobrar

Si hay condiciones pendientes, evalúa un pedido sujeto a revisión. Shopify documenta [borradores B2B](https://help.shopify.com/en/manual/b2b/checkout-and-orders/draft-orders) y la posibilidad de revisar pedidos de empresa. Esa capacidad no certifica que el recargo esté calculado o desglosado correctamente.

La propuesta debe indicar dónde se obtiene el importe definitivo, qué acepta el cliente y cómo se evita que una actualización posterior cree un saldo inesperado.

Si una app modifica el borrador, necesita un comportamiento definido ante reintentos. Reprocesar la operación no debería añadir otro recargo. Especifica cómo reconoce el cálculo previo y qué ocurre si cambian cantidades o descuentos.

## Comprueba cambios, abonos y pedidos repetidos

No basta con una compra sencilla. Prepararía esta matriz con valores esperados aprobados para el negocio:

| Escenario | Evidencia que hay que revisar |
| --- | --- |
| Cliente al que procede aplicar recargo | Clasificación e importes esperados |
| Cliente al que no procede | Ausencia del recargo en pedido y factura |
| Descuento antes de confirmar | Base recalculada según regla aprobada |
| Cambio de cantidades | Un único cálculo coherente con el pedido final |
| Reintento de integración | No duplica conceptos ni documentos |
| Abono o devolución | Documento y saldo coherentes |
| Datos fiscales incompletos | Revisión visible antes de finalizar |

Guarda el pedido, el cobro y la factura para comparar. Si se usan varios tipos o tratamientos, el conjunto de casos debe representarlos; una sola referencia no acredita todo el catálogo.

## Decide cómo viaja al ERP

Una línea llamada recargo puede llegar al destino como producto, gasto o concepto sin clasificación. No presupongas que el nombre visible basta para que el sistema fiscal la reconozca.

Pide al integrador que muestre los códigos y el documento resultante. Si Shopify recoge una solicitud y el ERP determina el total final, define cómo vuelve ese resultado al comprador antes del cobro.

La guía de [errores de sincronización](/blog/errores-sincronizacion-shopify-erp/) ayuda a concretar identidad, reintentos y conciliación. Aquí importan también los documentos fiscales: una venta duplicada puede convertirse en dos facturas que luego hay que corregir.

## Qué no publicaría como solución cerrada

No presentaría un porcentaje global, una línea sin comprobar ni un fragmento de código como solución universal. Tampoco prometería que pasar a Plus arregla por sí solo el requisito fiscal.

El alcance técnico debe explicar qué calcula cada sistema y aportar pruebas del recorrido elegido. Si esa evidencia no existe todavía, puede haber un diseño de integración válido, pero no una implementación certificada como terminada.

## Qué preparar para valorar el trabajo

Una factura anonimizada correcta, un pedido representativo, la clasificación del cliente y el programa que emite documentos. Añade devoluciones, portes y descuentos que deban entrar en las pruebas.

Con ese material se puede diseñar una [integración Shopify con facturación o ERP](/servicios/integraciones-erp/) y acordar la validación con administración. El resultado debe poder seguirse de comprador a factura, sin depender de un ajuste manual que solo una persona entiende.
