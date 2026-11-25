---
pair: orden-productos-coleccion-shopify
title: 'Has ordenado la colección... pero tu cliente ve otra cosa'
seoTitle: 'Orden de productos en colecciones Shopify: qué revisar'
description: 'Separa la posición guardada, el orden elegido por el visitante y el precio que está comparando. Un diagnóstico antes de volver a arrastrar todo el catálogo.'
keyword: orden productos coleccion shopify
date: '2026-11-25'
tags: ['Shopify', 'Catálogo', 'B2B']
faq:
  - q: '¿Una colección manual significa que los productos se ordenan a mano?'
    a: 'No confundas pertenencia y presentación. Comprueba por separado qué productos incluye la colección y cuál es su orden predeterminado.'
  - q: '¿Ordenar por precio utiliza la tarifa B2B que ve el comprador?'
    a: 'La ayuda actual de Shopify indica que utiliza precios base, no precios de catálogos B2B o Markets. Una secuencia inesperada no demuestra que el precio esté mal.'
  - q: '¿Hay que instalar una app si el orden no coincide?'
    a: 'Primero reproduce la diferencia y localiza dónde aparece: administrador, URL, selector o listado. Elegir una herramienta antes del diagnóstico puede añadir otra regla que investigar.'
cta:
  heading: '¿Tu catálogo mayorista necesita una presentación que el orden actual no resuelve?'
  text: 'Cuéntame qué debería ver primero cada comprador y envíame una colección representativa. Podemos valorar navegación, reglas comerciales y tema.'
  label: 'Revisar la presentación de mi catálogo'
---

Si una colección de Shopify aparece en un orden distinto del esperado, compara el orden guardado con la dirección y la selección que utiliza el visitante. Si ordenas por precio para mayoristas, comprueba también qué precio se usa para ordenar: no basta con mirar las cifras visibles.

Te has pasado un rato colocando productos con cariño.

Abres la tienda... y parece que alguien ha barajado las cartas.

Antes de repetir el trabajo, averigüemos qué orden estamos comparando.

## Incluir productos y decidir su posición son dos preguntas

«Esta colección es manual» puede estar describiendo cómo eliges sus miembros, no cómo se presentan. Escribe dos respuestas separadas: qué referencias deben estar y cuál debe aparecer primero.

La [guía de presentación de colecciones](https://help.shopify.com/en/manual/products/collections/collection-layout) documenta la elección del orden predeterminado y el movimiento manual mediante arrastre o posiciones. Consulta los controles actuales: no tomes un hilo antiguo sobre paginación como prueba de una limitación que siga vigente.

Para empezar, anota tres referencias en el orden esperado y comprueba si ese orden queda guardado al volver a abrir la colección. Es una observación pequeña pero útil: distingue «no consigo guardar» de «la tienda lo muestra distinto».

## Abre la dirección exacta, no una colección parecida

El enlace de una campaña, un menú y una pestaña antigua pueden llevar a experiencias diferentes. Copia la dirección completa de la visita que no coincide y mira la opción seleccionada en el listado.

La documentación técnica de [colecciones](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) explica que el parámetro `sort_by` permite elegir orden en la URL. Encontrarlo es una pista para comprobar una selección de la visita, no una autorización para borrar parámetros de todos tus enlaces.

Propongo comparar una entrada desde el menú y otra desde el enlace problemático, manteniendo el mismo contexto. Anota la secuencia inicial y la opción visible. Si cambian, ya tienes algo más concreto que «no respeta el orden».

No estamos midiendo conversión ni afirmando que una app haya intervenido. Estamos haciendo que el síntoma se pueda repetir.

## En B2B, un orden por precio puede sorprender sin que falle la tarifa

La misma ayuda oficial advierte que el orden por precio utiliza precios base, no los de catálogos B2B o mercados. Por eso las cifras que ve un comprador pueden no formar una secuencia ascendente aunque esa sea la opción elegida.

Ejemplo hipotético: dos referencias tienen condiciones comerciales distintas para una empresa. Si sus precios visibles invierten la relación de sus precios base, no concluyas automáticamente que se ha perdido el descuento.

Primero decide cuál es el problema: ¿el importe es incorrecto o el orden no corresponde al criterio que esperaba el comprador? Para lo primero, utiliza el [diagnóstico de precio B2B](/blog/precio-incorrecto-shopify-b2b/). Para lo segundo, define la regla necesaria y verifica qué puede ofrecer tu configuración antes de prometer una personalización.

## Si el orden guardado cambia solo, registra cuándo

No sigas recolocando el mismo producto sin dejar rastro. Apunta el momento, la selección guardada y qué otra persona o proceso pudo editar la colección. Es una hipótesis que investigar, no una acusación a la app que instalaste ayer.

Y, por amor de Dios, no pongas a tres personas a corregirla a la vez. Si cada una devuelve «su» orden correcto, habéis creado una automatización humana bastante puñetera.

Antes de desinstalar herramientas o tocar código, identifica cuál mantiene la presentación y qué resultado debería conservar. Una lista de sospechosos no sustituye una reproducción del cambio.

## Define qué significa que esté bien

Para una colección ficticia, usaría esta ficha propuesta:

| Revisión | Evidencia |
| --- | --- |
| Entrada habitual | Dirección desde menú o campaña |
| Criterio comercial | Qué debe ir primero y por qué |
| Ajuste guardado | Orden elegido en el administrador |
| Selección visible | Opción y primeras referencias en tienda |
| Contexto de precio | Comprador y catálogo utilizados |
| Mantenimiento | Persona o proceso que conserva la regla |

Repite la lectura en móvil y en una segunda página del listado si existe. Comprueba también qué ocurre cuando entra una nueva referencia: una portada bien ordenada hoy no explica quién la mantendrá mañana.

El objetivo no es que el listado se parezca a una captura del administrador, sino que ayude a elegir. Si necesitas valorar un [portal Shopify B2B](/shopify-b2b/), trae una colección y una regla comercial concreta. «Quiero que se vea mejor» es una conversación; «estos compradores necesitan encontrar primero estas referencias» ya permite diseñar.

Fuentes comprobadas en noviembre de 2026. Ejemplo y ficha hipotéticos; no se ha cambiado una colección ni validado un orden personalizado en una tienda de cliente.
