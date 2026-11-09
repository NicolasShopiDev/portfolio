---
pair: shopify-agotado-con-stock
title: 'Shopify dice agotado, pero tienes stock: ¿dónde está ese stock?'
seoTitle: 'Shopify muestra agotado aunque hay stock: qué revisar'
description: 'Antes de sumar unidades o cambiar el botón, compara variante, estado y ubicación del inventario. Una guía para investigar por qué el cliente no puede comprar.'
keyword: shopify agotado con stock
date: '2026-11-09'
tags: ['Shopify', 'Inventario', 'Catálogo']
related: ['errores-sincronizacion-shopify-erp', 'envio-no-disponible-shopify-b2b']
faq:
  - q: '¿Ver unidades en el administrador demuestra que el cliente puede comprarlas?'
    a: 'No basta con una cifra aislada. Identifica la variante, la cantidad que estás leyendo y la ubicación; después contrasta el contexto de compra y la configuración correspondiente.'
  - q: '¿Activo seguir vendiendo sin stock para corregir el aviso?'
    a: 'No lo uses para esconder una causa desconocida. Permitir ventas sin existencias es una decisión comercial sobre lo que aceptas vender y cómo lo entregarás, no una comprobación de inventario.'
  - q: '¿Si solo falla una talla debo cambiar todo el producto?'
    a: 'Empieza por esa variante y conserva su caso. Cambiar todo el catálogo dificulta comparar y puede alterar referencias que ya funcionaban.'
cta:
  heading: '¿Tu catálogo tiene unidades que los clientes no pueden comprar?'
  text: 'Envíame una variante de ejemplo, la ubicación donde aparece el stock y el contexto de la prueba. Podemos valorar la revisión del catálogo y del flujo de inventario.'
  label: 'Investigar mi producto agotado'
---

Si Shopify muestra «agotado» aunque ves unidades en el administrador, comprueba la variante exacta, el estado de esa cantidad y la ubicación donde está registrada. Un total de inventario no describe por sí solo qué puede comprar ese cliente.

Tienes mercancía. La web dice que no.

Antes de añadir cien unidades de prueba para convencer al botón... vamos a localizar las que ya tienes.

## Primero, la variante que el comprador intenta pedir

Conserva la dirección de la ficha y las opciones seleccionadas: talla, color o formato. Después localiza esa misma combinación en el administrador.

No compares el total de un producto con la disponibilidad de una talla concreta. Una camiseta puede tener muchas unidades repartidas y ninguna en la combinación que intenta comprar el cliente.

Ejemplo hipotético: hay camisetas azules de talla M, pero el enlace compartido lleva a la talla L. La primera comprobación no es instalar una app de inventario; es asegurar que estamos hablando de la misma variante.

Anota también si el aviso aparece en la colección, en la ficha o después de seleccionar una opción. Esa diferencia ayuda a preparar una revisión reproducible sin asumir todavía que el dato está mal.

## Mira el nombre de la cantidad, no solo el número

La [ayuda de estados de inventario](https://help.shopify.com/en/manual/inventory-and-locations/fundamentals/inventory-states) distingue **On hand**, el total físico en una ubicación, de **Available**, lo que está disponible para vender. También separa cantidades comprometidas, no disponibles y en camino.

Para el diagnóstico, escribe el nombre de la columna junto a cada cifra. «Hay diez» es una conversación bastante corta para un dato que puede significar varias cosas.

No cambies una cantidad para que dos pantallas coincidan sin entender qué representa cada una. Quizá estés comparando magnitudes distintas, no corrigiendo un descuadre.

## ¿La ubicación con existencias prepara pedidos online?

Shopify documenta en su [guía de venta sin stock](https://help.shopify.com/en/manual/inventory-and-locations/setup/selling-when-out-of-stock) un caso importante: puede haber existencias en una ubicación que no prepara pedidos online y mostrarse el artículo como agotado si la ubicación que sí los prepara no tiene unidades.

Esa posibilidad merece comprobarse, no convertirse en diagnóstico automático. Registra qué ubicación tiene la variante y cuál debería servir esa compra según tu operativa.

Si las unidades están físicamente en otra tienda, decidir desde dónde venderlas puede afectar a preparación y transporte. No actives cualquier ubicación por quitar el aviso: acuerda primero si realmente puede atender esos pedidos.

## El país del comprador también forma parte de la prueba

La [documentación de inventario que puede prepararse](https://help.shopify.com/en/manual/inventory-and-locations/setup/fulfillable-inventory) relaciona disponibilidad con ubicaciones que envían a la zona del cliente. El ajuste de visualización heredado solo es configurable en tiendas anteriores a abril de 2024; no todos los paneles permiten cambiarlo.

Por eso conviene anotar el país seleccionado en la tienda al reproducir el caso. No declares que el cliente «lo está viendo mal» porque desde tu ordenador aparece disponible.

El objetivo tampoco es fingir que todos los destinos tienen el mismo servicio. Es entender si la disponibilidad mostrada corresponde con lo que puedes entregar.

## Una ficha para dejar de comparar de memoria

Propongo esta revisión para una sola variante:

| Dato | Qué conservar |
| --- | --- |
| Referencia y opciones | Variante exacta del caso |
| Cantidad | Valor y nombre del estado de inventario |
| Ubicación | Dónde están registradas las unidades |
| Preparación | Qué ubicación debería atender el pedido |
| Contexto | País y recorrido del comprador |
| Resultado | Aviso visible y momento en que aparece |

Añade una captura de la ficha y otra del dato relevante, sin exponer información de clientes. La tabla es un protocolo propuesto; no se ha ejecutado una auditoría de tu tienda.

Cuando hayas identificado esas piezas, repite la prueba sin cambiar varias cosas a la vez. Si otra variante funciona, consérvala como comparación. Una diferencia pequeña y explicable vale más que un «a veces pasa».

## Seguir vendiendo sin stock no es reparar el stock

Puede encajar aceptar pedidos de algo que vas a reponer, fabricar o comprar después. Pero necesitas una promesa de entrega y un proceso para cumplirla.

Cambiar esa política para ocultar un fallo no demuestra que el inventario sea correcto. El cliente podría comprar y el equipo descubrir después que las unidades no estaban donde creía.

La distinción es sencilla: una cosa es decidir vender bajo pedido; otra es no saber por qué algo aparece agotado. No conviertas la segunda en la primera sin una decisión consciente.

## Cuándo mirar el ERP o el tema

Si el inventario llega de otro sistema y el valor ya es incorrecto en Shopify, el artículo de [diagnóstico entre Shopify y ERP](/blog/errores-sincronizacion-shopify-erp/) ayuda a seguir ese dato. Aquí estamos comprobando primero qué representa y dónde está.

Si la ficha permite avanzar y el problema aparece al elegir transporte, sigue la guía de [envío no disponible](/blog/envio-no-disponible-shopify-b2b/). Es otro punto del recorrido.

Si los datos y el contexto parecen correctos pero el aviso no corresponde, prepara el caso para revisar el tema o una integración. No cambies el texto del botón para simular disponibilidad: hace falta comprobar el comportamiento, no maquillarlo.

Para pedir ayuda con esa revisión, puedes consultar el [desarrollo de temas Shopify](/servicios/temas-shopify-a-medida/). Lleva una variante, sus datos y el resultado esperado. Con eso ya hay un problema concreto que investigar, no un catálogo entero al que echarle la culpa.

Documentación revisada en noviembre de 2026. Ejemplos hipotéticos y protocolo propuesto, sin resultados ni pruebas atribuidos a una tienda de cliente.
