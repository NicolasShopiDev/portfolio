---
pair: "importar-tarifas-shopify-b2b"
title: "Importar tarifas mayoristas a Shopify: preparar el CSV y comprobarlo"
seoTitle: "Importar tarifas B2B a Shopify: CSV y comprobaciones"
description: "Prepara una importación de precios B2B en Shopify sin confundir referencias, tarifas ni monedas. Un proceso de muestra, validación y recuperación de errores."
keyword: "importar tarifas shopify b2b"
date: "2026-11-03"
tags: ["Shopify B2B","Catálogos","Integraciones"]
related: ["precio-incorrecto-shopify-b2b","errores-sincronizacion-shopify-erp"]
faq: [{"q":"¿Puedo subir directamente la hoja de precios que envía mi proveedor?","a":"Solo si se transforma al formato y a las referencias del catálogo de destino. Primero revisa columnas, variantes, moneda y significado del precio. Trabaja sobre una exportación actual o la muestra oficial."},{"q":"¿Un CSV correcto garantiza que el cliente verá la tarifa correcta?","a":"No. Después de importar hay que revisar la asignación del catálogo y hacer una compra con el perfil adecuado. Guardar un precio y aplicar ese precio son comprobaciones distintas."},{"q":"¿Cómo recupero la tarifa anterior si algo sale mal?","a":"Conserva una exportación previa, identifica las filas cambiadas y ensaya la restauración en un catálogo controlado. No prometas deshacer una importación completa sin saber qué campos modificó."}]
cta: {"heading":"¿Tu tarifa vive entre el ERP y varias hojas de cálculo?","text":"Cuéntame de dónde salen los precios, cuántas variantes tienes y cada cuánto cambian. Puedo valorar una importación controlada o una integración mantenible.","label":"Cuéntame cómo actualizas las tarifas"}
---

Para importar tarifas mayoristas a Shopify, parte de una exportación actual del catálogo o de la muestra oficial, transforma tus datos y prueba primero unas pocas variantes. La comprobación termina cuando el comprador correcto recibe el precio previsto, no cuando el importador acepta el archivo.

Una tarifa combina identidad de producto, importe, moneda y destinatario. Si solo revisas que la columna de precios tenga números, puedes cargar perfectamente el precio equivocado en una variante válida.

> Procedimiento propuesto con documentación revisada el 3 de noviembre de 2026. Las tablas son ejemplos de preparación; no se presentan como archivos importados en una tienda real.

## Separa tu hoja de trabajo del archivo de importación

La hoja del comercial puede tener comentarios, descuentos negociados o celdas calculadas. El archivo que acepta la plataforma necesita una estructura precisa. Conserva ambos, con fecha y responsable, para poder explicar cómo se obtuvo cada importe.

La [guía oficial de catálogos y CSV](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs) ofrece una muestra y describe los campos de importación. Usa esa referencia en lugar de una plantilla de un blog antiguo. Comprueba también cómo interpreta las celdas vacías antes de modificar una exportación.

No reutilices el CSV general de productos como si fuera una tarifa B2B. Que dos archivos contengan SKU y precio no significa que actualicen lo mismo.

## Prepara una tabla de correspondencias antes de convertir

Esta tabla es una propuesta interna de revisión, no el esquema de importación:

| Referencia origen | Variante destino | Precio origen | Precio esperado | Decisión |
| --- | --- | --- | --- | --- |
| BOT-A-500 | Botella A, 500 ml | 8,00 EUR | 8,00 EUR | Incluir |
| BOT-A-1000 | Botella A, 1 l | 13,50 EUR | 13,50 EUR | Incluir |
| MUESTRA | Sin resolver | 0,00 EUR | Pendiente | No importar |

Revisa duplicados, referencias ausentes y variantes con el mismo nombre visible. Un nombre comercial no sustituye una identidad estable. Si hay equivalencias históricas del ERP, documéntalas en lugar de aplicar reemplazos manuales que nadie pueda repetir.

Decide qué hacer con una referencia desconocida: lo normal en un proceso controlado es detener esa fila y reportarla. Crear un producto nuevo sin confirmación puede introducir stock, imágenes y condiciones sin revisar.

## Escribe qué significa el precio antes de calcularlo

Comprueba moneda, unidad de venta, impuestos incluidos o excluidos, redondeo y vigencia. Dos precios idénticos pueden representar una botella y una caja. El CSV no detectará esa diferencia de negocio por ti.

Si la tarifa deriva de otra, conserva la fórmula en el proceso de preparación. No encadenes conversiones de moneda y descuentos a mano en distintas hojas. El resultado debe poder reconstruirse con el dato de origen y las reglas aprobadas.

Los precios fijos del catálogo prevalecen sobre su ajuste porcentual general, como explica la documentación oficial. Por eso conviene identificar las excepciones: una importación de precios fijos puede cambiar cómo responde después una variante al ajuste general.

## Elige una muestra que pueda descubrir errores

No elijas diez referencias iguales. Incluye variantes de distinto precio, un producto con excepciones, una referencia que no exista y una que use otra unidad de venta.

Si el proveedor entrega decimales con coma y tu proceso necesita punto, verifica la conversión expresamente. La prueba no debe consistir en abrir y volver a guardar el archivo sin mirar sus valores finales. Revisa también codificación, separador y cabeceras contra la muestra oficial vigente.

Para cada fila escribe el resultado esperado antes de importar. Comparar después solo contra lo que terminó en la plataforma no te da una referencia independiente.

## Comprueba la tarifa con el comprador adecuado

Después de cargar la muestra, revisa el catálogo, su aplicación y el recorrido de compra. Elige una ubicación de empresa que deba recibirlo y otra que no. Verifica ficha, cantidad, carrito y checkout.

| Comprobación | Qué debe quedar registrado |
| --- | --- |
| Variante correcta | Identificador y SKU |
| Importe correcto | Valor esperado y guardado |
| Perfil correcto | Empresa y ubicación utilizadas |
| Cantidad relevante | Precio con el pedido habitual |
| Perfil excluido | No recibe la nueva tarifa |
| Datos inválidos | Filas rechazadas o apartadas |

Si el precio difiere, no vuelvas a cargar todo de inmediato. Sigue el [diagnóstico de precios B2B](/blog/precio-incorrecto-shopify-b2b/) para distinguir dato, asignación y presentación.

## Diseña la recuperación antes de la carga completa

Conserva el estado anterior y un registro de cambios. Define quién puede autorizar la importación, cuándo se ejecuta y qué condiciones obligan a detenerla.

La recuperación debe corresponder a los campos afectados. Restaurar solo los importes no arregla una modificación accidental de disponibilidad o reglas de cantidad. Por eso haría un ensayo en una zona controlada y comprobaría tanto valores como alcance.

Si otro sistema actualiza precios durante la importación, acuerda una ventana o una prioridad. De lo contrario puedes corregir una tarifa por la tarde y recibir la antigua de nuevo durante la siguiente sincronización.

## Cuándo conviene dejar de usar una carga manual

Si la tarifa cambia pocas veces y alguien la revisa, un proceso manual documentado puede bastar. Si llega cada día, hay varias monedas o el ERP debe ser la fuente de verdad, estima una integración.

La [documentación de integraciones B2B](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) distingue conectores, intermediarios y desarrollo mediante API. La elección depende de tus datos y de cómo se recuperan los errores, además del coste de instalarla.

Pediría una demostración con una referencia correcta, una inexistente y una actualización repetida. La integración debe indicar qué cambió y qué no pudo procesar; «completado» sin detalle no permite mantenerla.

## Qué preparar antes de pedir ayuda

Trae una muestra anonimizada, una exportación actual y la regla de asignación de precios. Indica quién manda sobre cada tarifa y cuándo entra en vigor.

Con ese material se puede valorar una [integración de Shopify con tu ERP](/servicios/integraciones-erp/) o una importación puntual. El objetivo es un proceso que puedas explicar y repetir, no un archivo que funcionó una vez y nadie sabe regenerar.
