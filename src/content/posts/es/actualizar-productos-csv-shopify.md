---
pair: actualizar-productos-csv-shopify
title: 'Solo ibas a cambiar un dato... y el CSV cambió más de la cuenta'
seoTitle: 'Actualizar productos Shopify por CSV sin cambios inesperados'
description: 'Una celda vacía puede ser una instrucción, no un espacio inocente. Revisa alcance, columnas y variantes antes de sobrescribir productos con un CSV de Shopify.'
keyword: actualizar productos csv shopify
date: '2026-11-23'
tags: ['Shopify', 'Catálogo', 'Importaciones']
faq:
  - q: '¿Una celda vacía significa dejar el dato como está?'
    a: 'No lo asumas. Al sobrescribir, un campo opcional vacío puede borrar el dato correspondiente. Revisa la regla de esa columna y sus dependencias antes de importar.'
  - q: '¿Puedo eliminar todas las columnas que no quiero editar?'
    a: 'No como regla universal. Algunas columnas dependen de otras; reducir el archivo sin revisar esas relaciones puede alterar variantes o producir errores.'
  - q: '¿Que Shopify acepte el archivo demuestra que el catálogo quedó correcto?'
    a: 'No. Compara valores, estructura de variantes y recorrido visible después. La aceptación del formato no sustituye revisar los cambios reales.'
cta:
  heading: '¿Actualizas el catálogo con archivos que cada proveedor prepara a su manera?'
  text: 'Cuéntame qué dato quieres actualizar, de dónde llega y qué debe conservarse. Podemos valorar el mapeo, la validación y el proceso de importación.'
  label: 'Revisar mi actualización de catálogo'
---

Antes de actualizar productos de Shopify con un CSV, define qué campos quieres cambiar y cómo se identifican los productos y sus variantes. Una celda vacía no significa necesariamente «no tocar»: con sobrescritura puede convertirse en una instrucción para borrar información.

Querías completar unas referencias. No reinventar el catálogo.

El archivo no conoce esa diferencia... si no la has dejado clara en sus datos.

## Escribe el cambio en una frase

«Actualizar estos productos» es demasiado amplio. «Completar los códigos que faltan conservando opciones, descripciones e imágenes» ya permite comprobar un resultado.

Haz una lista del dato de origen, del campo de destino y de lo que no debería cambiar. Si el archivo llega de un proveedor, sus nombres y su estructura no tienen por qué coincidir con los que espera Shopify.

No empieces copiando columnas hasta que desaparezca el error de importación. Primero entiende qué operación estás preparando: crear, completar o sustituir datos existentes.

## Sobrescribir no significa rellenar solo los huecos

La [guía oficial de importación](https://help.shopify.com/en/manual/products/import-export/import-products) explica la sobrescritura por identificadores de URL coincidentes. No es una operación que compare tus intenciones: debes revisar qué datos envías y qué opción de importación eliges.

La [referencia del CSV de productos](https://help.shopify.com/en/manual/products/import-export/using-csv) distingue columnas opcionales vacías de columnas ausentes y documenta dependencias entre campos. Una celda opcional vacía puede sobrescribir con vacío; no reduzcas el archivo aplicando una regla universal a todas las columnas.

Ejemplo hipotético: tu producto tiene proveedor guardado, pero la hoja de trabajo conserva esa columna vacía porque solo estabas editando otra cosa. El hueco parece inocente para quien abre Excel. Para una importación con sobrescritura puede tener consecuencias.

La solución no es tener miedo a los CSV. Es decidir qué instrucciones contiene el tuyo.

## Las variantes merecen una revisión propia

Un producto con varias tallas no se describe igual que un artículo con una única opción. Conserva la relación entre cada fila y la variante que representa.

Shopify advierte en su documentación de columnas de que eliminar campos de opciones necesarios para otros datos puede cambiar la estructura existente. No publiques una receta de «deja solo el SKU y ya» sin revisar el formato que exige tu caso.

Para una muestra ficticia de dos tallas, plantearía estas comprobaciones:

| Antes de importar | Después de la prueba |
| --- | --- |
| Producto y dirección identificados | Sigue siendo el producto previsto |
| Opciones y valores registrados | Se conservan las combinaciones esperadas |
| Código por variante anotado | Cambia solo el código acordado |
| Descripción e imágenes de referencia | No hay diferencias no previstas |
| Selección comprable conocida | La ficha y el carrito siguen siendo coherentes |

Es una matriz de aceptación propuesta, no un CSV probado ni una garantía de restauración.

## Guarda una referencia que no estés editando

La [guía de exportación de productos](https://help.shopify.com/en/manual/products/import-export/export-products) permite obtener un archivo para trabajar con datos del catálogo. Conserva una copia de referencia separada de la hoja que modificas.

No llames a todas «final.csv». Pon fecha, alcance y propósito. La versión original debe seguir siendo original después de que tres personas hayan corregido la hoja.

Una exportación tampoco demuestra que tengas una recuperación completa de toda la tienda. Define qué información permite comparar y qué necesitarías para corregir una modificación inesperada; no improvises esa decisión después de la carga.

## Prueba una muestra que se parezca al problema

Si el catálogo tiene productos simples y productos con variantes, una prueba con un único artículo simple no cubre ambos. Elige casos representativos y un entorno apropiado antes de afectar al catálogo que compra la gente.

Propongo comparar estado inicial, archivo que se va a enviar y resultado observado. Anota cada diferencia: esperada o inesperada. No marques la prueba como correcta solo porque llegó un correo diciendo que terminó la importación.

Y, por amor de Dios, no aproveches la misma carga para renombrar opciones, ordenar imágenes y completar códigos «ya que estamos». Si algo cambia de más, habrás fabricado tu propio rompecabezas.

Una muestra correcta no valida automáticamente cualquier otra combinación del archivo completo. Sí permite detectar supuestos equivocados antes de multiplicarlos.

## Cuándo el archivo no es la solución completa

Si actualizas lo mismo cada día, necesitas reglas estables: quién manda sobre el dato, cómo identificas el producto y qué haces con las excepciones. El trabajo deja de ser editar una hoja y pasa a ser diseñar un flujo.

La guía de [importación de tarifas mayoristas](/blog/importar-tarifas-shopify-b2b/) trata otro tipo de archivo: no intercambies sus columnas con las del CSV de productos. Si interviene un sistema externo, el [diagnóstico entre Shopify y ERP](/blog/errores-sincronizacion-shopify-erp/) ayuda a seguir el recorrido del dato.

Para empezar hoy, define una sola actualización y prepara el antes/después de dos productos representativos. Con eso ya puedes valorar una [integración de catálogo](/servicios/integraciones-erp/) y hablar de reglas concretas, no de «importar un Excel» como si todos fueran iguales.

Fuentes comprobadas en noviembre de 2026. Ejemplo y matriz hipotéticos; no se ha importado un catálogo de cliente ni ejecutado una prueba de recuperación para este artículo.
