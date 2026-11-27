---
pair: stock-packs-shopify-bundles
title: 'Vendes un pack... ¿quién descuenta las piezas de dentro?'
seoTitle: 'Stock de packs en Shopify Bundles: componentes y límites'
description: 'Un pack comercial y una caja preparada no son el mismo inventario. Revisa componentes, cantidades y lo que recibe tu ERP antes de corregir stock a mano.'
keyword: stock packs shopify bundles
date: '2026-11-27'
tags: ['Shopify', 'Inventario', 'Integraciones']
faq:
  - q: '¿Puedo calcular packs sumando todas las piezas disponibles?'
    a: 'No. Debes poder completar cada composición. La cantidad necesaria de cada componente importa; una pieza sobrante no sustituye a otra que falta.'
  - q: '¿Todas las apps de packs representan el pedido igual?'
    a: 'No lo presupongas. Identifica la aplicación y comprueba qué referencias y cantidades recibe cada sistema antes de diseñar la integración.'
  - q: '¿Un pack virtual equivale a stock de cajas ya montadas?'
    a: 'No necesariamente. Define si vendes una composición de unidades sueltas o mercancía preparada que el almacén controla por separado.'
cta:
  heading: '¿Los packs obligan a corregir el inventario a mano?'
  text: 'Envíame una composición, su aplicación y qué espera recibir tu ERP. Podemos valorar quién calcula disponibilidad y quién descuenta cada pieza.'
  label: 'Revisar mis packs e inventario'
---

Antes de corregir el stock de un pack en Shopify, identifica cómo se representa su composición y qué sistema descuenta sus componentes. Un producto llamado «kit» no demuestra que exista una relación de inventario con las piezas que contiene.

Has vendido un set precioso.

Ahora toca averiguar si el almacén ha vendido un set, tres piezas... o las dos cosas a la vez.

La foto del pack no responde a esa pregunta.

## Define qué estás vendiendo físicamente

¿Se monta con unidades que también vendes sueltas? ¿Es una caja ya preparada con existencias propias? ¿El comprador puede elegir la composición?

Estas preguntas definen el modelo de trabajo. Si el almacén reserva cajas terminadas por separado, no deberías asumir que sumar componentes sueltos describe automáticamente lo que puede expedir.

Ejemplo hipotético: un kit contiene dos cuadernos y un estuche. Los tres artículos también se venden por separado. Antes de elegir la herramienta, decide si el kit se prepara cuando entra el pedido o ya existe como mercancía montada.

## Calcula composiciones completas, no una suma de unidades

La guía de [inventario y compatibilidad de bundles](https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations) explica que la disponibilidad depende de los componentes y sus cantidades. Los componentes sin seguimiento o con venta sin stock se excluyen del cálculo documentado.

Para el kit ficticio, con doce cuadernos y cuatro estuches podrías completar cuatro kits, suponiendo que esas unidades sean utilizables para esa composición. No son dieciséis kits ni seis: faltaría el estuche del quinto.

Este cálculo ilustra una composición, no verifica ubicación, reserva ni disponibilidad real de una tienda. Anota variantes exactas y unidades por kit. «Cuaderno azul» y «cualquier cuaderno» no son la misma regla.

## Identifica la app antes de seguir una receta

La aplicación oficial [Shopify Bundles](https://help.shopify.com/en/manual/products/bundles/shopify-bundles) admite packs fijos y multipacks en todos los planes. Su ayuda señala stock global, no por ubicación, y SKUs de componentes en pedidos. No extrapoles ese funcionamiento a cualquier app que utilice la palabra bundle.

Define qué necesita ver cada equipo. Comercial puede querer reconocer el kit vendido; logística necesita saber qué preparar. Si tu ERP espera una sola referencia, comprueba qué le llega antes de dar la conexión por válida.

El problema no se resuelve escribiendo el mismo SKU en tres sitios. Necesitas una correspondencia entendida por los sistemas que participan, no una coincidencia visual en la hoja.

## Cuidado con descontar dos veces

Propongo dibujar el recorrido desde compra hasta preparación y marcar quién cambia cada cantidad. Si dos sistemas creen ser responsables del mismo descuento, tienes una hipótesis que investigar antes de compensarla con ajustes manuales.

Y, por amor de Dios, no conviertas «lo arreglo cada viernes» en una integración. Eso es una tarea pendiente con mucha puntualidad.

No afirmo que exista doble descuento en tu tienda. El criterio es comprobarlo con registros: composición esperada, movimiento observado y sistema que lo produjo. Si el síntoma afecta también a productos sueltos, utiliza el [diagnóstico de sincronización ERP](/blog/errores-sincronizacion-shopify-erp/).

## Prueba lo que pasa cuando algo deja de encajar

Para el ejemplo, usaría esta matriz propuesta en un entorno y procedimiento apropiados:

| Caso | Qué comprobar |
| --- | --- |
| Venta de una unidad suelta | Efecto previsto sobre la composición disponible |
| Compra de un kit | Referencias y cantidades recibidas por preparación |
| Componente insuficiente | Resultado visible y posibilidad de compra |
| Cambio de variante | Que la composición siga representando el kit acordado |
| Corrección posterior | Qué registros y cantidades debe revisar el equipo |

Son criterios de aceptación, no pruebas ejecutadas. Una compra correcta no valida por sí sola modificaciones, devoluciones o todos los canales.

Consulta también las incompatibilidades de la documentación oficial antes de ofrecer el pack en otro recorrido. No des por compatibles preventas, suscripciones o presupuestos solo porque una ficha deja añadirlo al carrito. Esta guía no certifica ningún flujo B2B concreto.

## Lleva una composición al diagnóstico

Prepara el nombre comercial, componentes y variantes, cantidades, app que los relaciona y muestra de lo que recibe el sistema externo. Añade quién mantiene esa composición cuando cambia el producto.

Si vendes cantidades de una referencia por caja, la guía de [venta por cajas](/blog/vender-por-cajas-shopify/) resuelve otra decisión. Aquí tratamos las piezas que componen una oferta y su inventario.

Para valorar una [integración de Shopify con ERP](/servicios/integraciones-erp/), empieza con un solo kit y su recorrido esperado. Es suficiente para localizar qué falta definir sin tocar todo el almacén.

Fuentes comprobadas en noviembre de 2026. Ejemplo y matriz hipotéticos; no se han comprado packs ni probado movimientos de inventario de una tienda de cliente.
