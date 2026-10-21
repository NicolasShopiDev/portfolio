---
pair: 'update-customised-theme'
question: '¿Puedo actualizar un tema de Shopify que está personalizado?'
category: 'theme'
seoTitle: 'Actualizar un tema Shopify personalizado: cómo hacerlo'
description: 'Depende de dónde estén los cambios. Si están en secciones nuevas y en archivos propios, sí. Si están repartidos por los archivos del tema, es una reescritura.'
keyword: 'actualizar tema shopify personalizado'
answer: 'Depende de dónde estén los cambios. Si están en secciones nuevas y en archivos propios, la actualización es viable y hay que revisar solo los puntos de contacto. Si están repartidos dentro de los archivos originales del tema, actualizar significa rehacer los cambios uno a uno, y eso ya es un proyecto, no una actualización.'
related: ['new-theme-for-b2b', 'b2b-portal-cost']
terms: ['sections-and-blocks', 'liquid']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Por qué algunos temas se pueden actualizar y otros no

Shopify no aplica actualizaciones sobre un tema que has editado: lo que se hace es instalar la versión nueva y volver a llevar los cambios. Así que la pregunta real no es técnica, es de arqueología: **dónde están tus cambios**.

Dos tiendas con la misma cantidad de personalización pueden estar en situaciones opuestas. En una, todo lo propio vive en tres secciones nuevas, un `custom.css` y un `custom.js`; actualizar es instalar, mover esos archivos y revisar cuatro puntos. En la otra, hay condiciones sueltas dentro de diez archivos del tema original y nadie recuerda cuáles; ahí actualizar es rehacerlo.

## Cómo saber en cuál estás

Sin mirar el código, tres indicadores bastante fiables:

- **¿Hay un archivo de estilos propio** o el CSS se tocó directamente en el del tema?
- **¿Las funcionalidades nuevas son secciones** que se añaden y quitan desde el editor, o están incrustadas en las plantillas?
- **¿Está en control de versiones?** Si existe el repositorio, se puede ver exactamente qué se tocó. Si el único sitio donde vive el tema es el admin, la respuesta es que nadie lo sabe.

## Cómo lo dejo yo para que esto no pase

Cuando hago una personalización, todo lo propio va en archivos nuevos y en [secciones](/glosario/secciones-y-bloques/) nuevas, y los puntos donde hay que tocar un archivo original se quedan escritos. No es por elegancia: es para que la siguiente actualización cueste una tarde en lugar de un presupuesto.

Y donde el tema original hay que tocarlo sí o sí, el cambio se hace lo más pequeño posible: una línea que llama a algo mío, en lugar de veinte líneas propias dentro de su archivo.

## Si ya estás en el caso malo

No hace falta rehacer el tema entero de golpe. Lo que funciona es sacar los cambios a archivos propios poco a poco, empezando por los que más se tocan. Al cabo de unos meses el tema vuelve a ser actualizable sin haber parado nunca la tienda.
