---
pair: buscador-shopify-no-encuentra-sku
title: 'Tu cliente busca un SKU y Shopify no lo encuentra: por dónde empezar'
seoTitle: 'El buscador Shopify no encuentra un SKU: diagnóstico'
description: 'Una referencia existe, pero el cliente no la encuentra. Compara sugerencias y resultados, revisa el código exacto y localiza el fallo antes de cambiar de app.'
keyword: buscador shopify no encuentra sku
date: '2026-11-07'
tags: ['Shopify', 'Búsqueda', 'B2B']
related: ['pedido-rapido-referencia-shopify', 'errores-sincronizacion-shopify-erp']
faq:
  - q: '¿No ver un producto en las sugerencias significa que no se puede buscar?'
    a: 'No. Compara la lista que aparece mientras escribes con la página de resultados después de enviar la consulta. Son dos recorridos distintos y la lista de sugerencias tiene un espacio limitado.'
  - q: '¿Encontrar el producto demuestra que se seleccionó la variante correcta?'
    a: 'No. Comprueba la variante que aparece seleccionada y la que termina en el carrito. El resultado de búsqueda y la selección comprable deben validarse por separado.'
  - q: '¿Sirve este diagnóstico si mi buscador lo controla una app externa?'
    a: 'La comparación sigue ayudando a describir el problema, pero las reglas nativas de Shopify no explican necesariamente el comportamiento de esa app. Identifica primero qué sistema resuelve la consulta.'
cta:
  heading: '¿Tus mayoristas llaman porque no encuentran sus referencias?'
  text: 'Envíame tres códigos de ejemplo, la página desde la que buscan y el producto o variante que deberían encontrar. Podemos valorar el buscador y su conexión con el pedido.'
  label: 'Revisar la búsqueda por referencia'
---

Si un cliente busca una referencia y no encuentra el producto en Shopify, empieza con el SKU completo y compara las sugerencias con la página de resultados. Después identifica si responde el buscador nativo o una app: no tienen por qué aplicar las mismas reglas.

El producto existe. El comercial lo encuentra. El cliente, no.

Y acaba mandando el pedido por correo... justo lo que querías evitar con la tienda.

Antes de cambiar de buscador, vamos a localizar en qué paso se pierde esa referencia.

## «No sale» todavía no describe el problema

Pide el texto exacto que escribió el comprador y el lugar donde lo hizo. El buscador del administrador, el de la tienda y una tabla de pedido rápido no son la misma pantalla.

La [ayuda de búsqueda de Shopify](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior) distingue la búsqueda predictiva, mientras escribes, de los resultados que aparecen al enviar la consulta. También aclara que una app externa puede controlar el buscador y cambiar su comportamiento.

Si solo recibes «no funciona», prueba a concretarlo: «Escribo este código en el encabezado, no aparece en el desplegable, pero sí después de pulsar Enter». Esa frase ya permite investigar algo. La primera solo invita a adivinar.

## Empieza por el código completo, copiado del dato real

Selecciona una variante conocida y compara su SKU guardado con el que utiliza el cliente. Revisa si está copiando una referencia comercial antigua, un código de proveedor o el identificador que usa el ERP.

No des por hecho que son intercambiables porque el equipo los llama a todos «la referencia». Deja por escrito cuál de ellos debe admitir tu tienda y de dónde procede.

Shopify documenta la búsqueda por SKU completo y reglas específicas para fragmentos de códigos. Un trozo elegido al azar del centro no equivale a una búsqueda completa. Consulta esas condiciones en la ayuda enlazada antes de declarar que cualquier coincidencia parcial debería funcionar.

Para diagnosticar, empieza con el dato completo. Después añade las abreviaturas que realmente usan tus clientes y decide cuáles necesita resolver el negocio.

## Prueba la sugerencia y después pulsa Enter

No te quedes mirando el desplegable como si fuera todo el catálogo. La [documentación de búsqueda predictiva](https://help.shopify.com/en/manual/online-store/storefront-search/predictive-search) explica que las sugerencias muestran un conjunto limitado y dependen de la compatibilidad del tema.

Ejemplo hipotético: escribes el código completo de una bota y no aparece entre las sugerencias visibles. Envías la consulta y sí encuentras la ficha. Has localizado una diferencia entre dos recorridos; no has demostrado que falte el SKU en el catálogo.

Registra ambos resultados antes de modificar productos. Si solo falla el desplegable, la revisión debe mirar ese recorrido. Si tampoco aparece en la búsqueda completa, conserva ese dato y revisa sistema de búsqueda, producto y configuración relevante.

No metas palabras a lo loco en los títulos para «forzar» un resultado. Primero entiende qué dato está usando la búsqueda. El cliente no necesita un título que parezca el inventario de un almacén.

## Encontrar el producto no es encontrar la variante

Supón que el SKU identifica una bota negra de talla 42. El resultado abre el producto, pero la ficha selecciona por defecto otra talla. El cliente ha encontrado el modelo y todavía puede pedir una variante equivocada.

Este ejemplo es ficticio; no se afirma que todos los temas se comporten así. Sirve para separar tres comprobaciones: qué producto se encuentra, qué variante se muestra y cuál se añade al carrito.

En B2B importa especialmente si el comprador trabaja con listas de códigos. Un buscador que encuentra «algo parecido» puede quedarse corto para ese recorrido. Antes de encargar desarrollo, define si quieres explorar productos o introducir referencias para pedirlas. El artículo sobre [pedido rápido por SKU](/blog/pedido-rapido-referencia-shopify/) desarrolla ese segundo caso.

## Haz una matriz pequeña que puedas repetir

Propongo esta prueba, sin darla por ejecutada en tu tienda:

| Caso | Qué observar |
| --- | --- |
| SKU completo copiado | Producto esperado en sugerencias y resultados, por separado |
| Código abreviado habitual | Qué encuentra y si encaja con tu requisito |
| Referencia antigua | Si existe una correspondencia definida |
| Otra variante del mismo producto | Selección mostrada y variante añadida |
| Misma consulta en móvil | Facilidad para ver, abrir y comprar el resultado |
| Buscador externo | Herramienta responsable y comportamiento documentado |

Añade una columna para resultado real, otra para resultado esperado y una captura. No marques «correcto» solo porque hay resultados: podrían ser otros productos.

Si los códigos llegan de otro sistema, compara una muestra de origen y destino antes de modificar toda la importación. El diagnóstico de [errores Shopify y ERP](/blog/errores-sincronizacion-shopify-erp/) ayuda a ordenar esa comprobación sin convertir cada fallo de búsqueda en una supuesta avería de sincronización.

## Qué puedes resolver hoy sin instalar nada

Elige tres referencias que tus clientes utilicen de verdad. Comprueba el dato guardado y repite la matriz. Identifica si falta una relación entre códigos, si falla una pantalla concreta o si el resultado no permite comprar la variante adecuada.

Con eso ya puedes redactar un requisito útil: «estos códigos deben llevar a estas variantes en este recorrido». Mucho mejor que «quiero un buscador con IA»... que suena estupendo y no aclara qué debería encontrar.

Si necesitas ayuda para adaptar la experiencia, puedes consultar el [desarrollo de temas Shopify](/servicios/temas-shopify-a-medida/). El trabajo empieza por esos ejemplos y el resultado que necesitas, no por añadir otra herramienta a ciegas.

Documentación contrastada en noviembre de 2026. Matriz y escenarios propuestos; no se han ejecutado pruebas en una tienda de cliente para este artículo.
