---
pair: "pedido-rapido-referencia-shopify"
title: "Pedido rápido por referencia en Shopify B2B: qué debe resolver"
seoTitle: "Pedido rápido por SKU en Shopify B2B: cómo plantearlo"
description: "Diseña un pedido rápido para mayoristas: búsqueda por referencia, variantes, cajas, precios y errores por línea. Cuándo basta una lista y qué exige una carga CSV."
keyword: "pedido rapido referencia shopify b2b"
date: "2026-11-03"
tags: ["Shopify B2B","Pedidos","Temas"]
related: ["vender-por-cajas-shopify","pedidos-excel-portal-shopify"]
faq: [{"q":"¿Una lista de pedido rápido es lo mismo que buscar cualquier SKU?","a":"No. Una lista puede mostrar variantes de un producto, mientras la búsqueda por referencia puede abarcar todo el catálogo. Define el alcance antes de elegir una solución."},{"q":"¿Debe aceptar una carga de CSV desde el primer día?","a":"Solo si responde al modo de compra de tus clientes. Una tabla o búsqueda por referencia puede cubrir buena parte del trabajo sin añadir gestión de archivos y errores de importación."},{"q":"¿Qué pasa si una línea del pedido rápido es incorrecta?","a":"El comprador debe saber qué línea falla y por qué. Define si las líneas válidas se conservan y evita anunciar que se añadió todo si algunas fueron rechazadas."}]
cta: {"heading":"¿Tus compradores tardan demasiado en reponer referencias conocidas?","text":"Cuéntame cuántas líneas lleva un pedido y si tus clientes buscan por SKU, talla o colección. Puedo valorar una tabla de pedido adaptada a tu tema y reglas B2B.","label":"Cuéntame cómo piden tus clientes"}
---

Un pedido rápido B2B debe permitir introducir referencias y cantidades sin perder tarifa, reglas de caja ni explicación de errores. Una tabla con muchos campos no es suficiente si al final el cliente tiene que revisar cada línea en otra pantalla.

El punto de partida es observar cómo compra el mayorista: descubrir colección, reponer referencias conocidas o repetir un pedido. Cada tarea puede necesitar una entrada distinta.

> Diseño funcional propuesto en noviembre de 2026. Los escenarios y cifras son ilustrativos. La guía no presenta una demo nueva como si estuviera implementada.

## Diferencia tres herramientas que suelen llamarse igual

| Herramienta | Qué intenta resolver | Pregunta de alcance |
| --- | --- | --- |
| Lista de variantes | Comprar tallas o colores de un producto | ¿Qué variantes deben verse juntas? |
| Búsqueda por SKU | Reponer referencias conocidas | ¿Busca todo el catálogo autorizado? |
| Repetir pedido | Recuperar una selección anterior | ¿Qué pasa con precios y productos que cambiaron? |

Shopify documenta [listas de pedido rápido](https://help.shopify.com/en/manual/b2b/getting-started/features) para añadir varias variantes de un producto. No deduzcas de esa función que cualquier tema ya incluye un buscador mayorista que entiende todos tus códigos.

Antes de desarrollar, prueba el recorrido existente con un pedido representativo. Puede que el primer trabajo sea presentar mejor las variantes, no construir un importador.

## Define qué identifica una referencia

Pregunta si el comprador usa SKU, código del proveedor, código de barras o un nombre abreviado. Conserva una correspondencia explícita entre el dato introducido y la variante vendible.

No reemplaces una referencia desconocida por una parecida sin confirmación. En moda, dos códigos próximos pueden representar tallas o colores distintos; el pedido parece razonable hasta que llega al almacén.

Si admites búsqueda parcial, muestra suficientes datos para distinguir resultados: producto, opción, formato y unidad de venta. El objetivo no es devolver muchas coincidencias, sino que el comprador elija sin ambigüedad.

## Mantén la tarifa y el acceso en el contexto correcto

La lista debe reflejar lo que ese comprador puede pedir. Si alterna ubicaciones de empresa, comprueba que el cambio no conserve precios o productos de la selección anterior sin revisar.

Prepararía dos perfiles de prueba con referencias compartidas y exclusivas. Un resultado de búsqueda no debe revelar condiciones que la tienda decidió reservar a otro comprador.

Si aparecen precios inesperados, sigue la guía de [diagnóstico de precios B2B](/blog/precio-incorrecto-shopify-b2b/). Corregir el importe visual de una celda no demuestra que el pedido vaya a cobrarlo.

## Haz visibles las cantidades que el almacén acepta

Una columna cantidad necesita explicar si cuenta piezas, cajas o packs. Muestra la regla cerca del campo, especialmente si varía por referencia.

Para el ejemplo de cajas de seis, el comprador debería entender qué significa escribir dos: dos piezas o dos cajas. No reutilices el mismo campo cambiando silenciosamente su interpretación entre productos.

El artículo de [cajas y múltiplos](/blog/vender-por-cajas-shopify/) separa reglas por variante y cajas mezcladas. La tabla debe acompañar esa regla; no inventar una diferente por comodidad de interfaz.

## Define los errores por línea y el resultado global

Propongo estas respuestas para un ejemplo de diseño:

| Situación | Mensaje útil |
| --- | --- |
| SKU desconocido | No se encuentra esta referencia; revisa el código |
| Cantidad incompatible | Esta referencia se sirve en múltiplos de seis |
| Producto no disponible para el perfil | No se puede añadir con las condiciones actuales |
| Algunas líneas aceptadas | Se añadieron estas líneas; estas otras requieren corrección |
| Respuesta incompleta | No se pudo confirmar el resultado; revisa el carrito antes de repetir |

Conserva lo escrito cuando una línea falla. Obligar a rehacer treinta referencias por un error frustra más que una tabla menos sofisticada que permite continuar.

No muestres un éxito global si una petición solo ha funcionado parcialmente. La confirmación debe corresponder al estado real del carrito, no a que el botón haya recibido un clic.

## La carga de CSV necesita una vista previa

Si el cliente ya genera archivos, separa lectura, correspondencia y aceptación. Antes de añadir, muestra qué referencia se resolvió, qué cantidad se interpretó y qué líneas no se podrán procesar.

Define el tratamiento de duplicados. Dos filas del mismo SKU pueden significar una suma intencionada o una repetición accidental. Decide la política con ejemplos y comunica el resultado.

No confundas este archivo de entrada de pedidos con la [importación de tarifas](/blog/importar-tarifas-shopify-b2b/). Uno solicita cantidades; el otro modifica datos comerciales. Deben tener permisos y validaciones distintos.

## Comprueba móvil, teclado y pedidos largos

Una tabla que funciona con cuatro líneas en un monitor puede resultar impracticable en un móvil. Revisa el orden de foco, etiquetas, persistencia de cantidades y cómo se llega al siguiente error.

Elige un pedido del tamaño que realmente maneje tu negocio. Si el cliente suele reponer cincuenta variantes, esa debe ser una prueba de aceptación. No prometas un límite técnico sin comprobarlo con el tema, apps y recorrido previstos.

Mide el trabajo con tu propio caso: referencias introducidas, errores encontrados y pasos hasta confirmar. Un vídeo corto de la prueba puede ser más útil para decidir que una promesa genérica de rapidez.

## Qué pedir en una propuesta de desarrollo

Un pedido anonimizado, los identificadores que usan tus clientes y las reglas de cantidades bastan para empezar. Añade quién ve cada tarifa y qué datos necesita el ERP.

Mi [proyecto publicado de Émolo B2B](/proyectos/emolo-b2b/) es una referencia de trabajo con portales mayoristas; no atribuyo a ese cliente las pruebas hipotéticas de este artículo.

La propuesta debería explicar qué ocurre con una línea inválida, un reintento y un cambio de ubicación, además de mostrar una tabla bonita. Eso define un [portal Shopify B2B](/shopify-b2b/) que puede usarse para pedir, no solo para enseñar el catálogo.
