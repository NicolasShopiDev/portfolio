---
pair: descuentos-b2b-black-friday-shopify
title: 'Black Friday con mayoristas en Shopify: cómo evitar que tus descuentos se sumen al precio B2B'
seoTitle: 'Descuentos B2B en Shopify: Black Friday sin rebajar al mayorista'
description: 'Con B2B activo, un descuento para todos los clientes se suma al precio del mayorista. Cómo limitarlo por mercado, qué no cabe y cómo probarlo antes del Black Friday.'
keyword: 'descuentos b2b shopify'
date: '2026-11-03'
tags: ['Shopify B2B', 'Descuentos', 'Markets']
related: ['shopify-b2b-b2c-misma-tienda', 'precio-incorrecto-shopify-b2b', 'shopify-b2b-sin-plus']
faq:
  - q: '¿Los descuentos de Shopify se aplican a los clientes B2B?'
    a: 'Sí, si los descuentos para B2B están activos en tu tienda. Un descuento elegible para Todos los clientes, Clientes específicos o Segmentos de clientes se aplica a consumidores y a mayoristas por defecto, y se suma al precio de su catálogo. Desde el 23 de junio de 2026 esos descuentos se activan solos en las tiendas B2B nuevas y en muchas de las que ya existían.'
  - q: '¿Cómo hago que un descuento solo sea para consumidores?'
    a: 'En la elegibilidad del descuento, elige Mercados y selecciona tu mercado de región (España, Unión Europea o el que uses) en lugar de Todos los clientes. Un descuento asignado a un mercado de región no pasa a los mercados B2B. Funciona desde el plan Basic con la versión nueva de Markets.'
  - q: '¿Puedo limitar un descuento a un segmento de clientes y a un mercado a la vez?'
    a: 'No. La elegibilidad es por mercados o por segmentos de clientes, no por las dos cosas. Si necesitas las dos condiciones, lo nativo es un código que solo repartes a ese segmento, con elegibilidad por mercado; para reglas más finas hace falta una app de descuentos o, con Plus, una Function propia.'
  - q: '¿Un código de descuento de influencer lo puede usar un mayorista?'
    a: 'Sí, si el código es para todos los clientes y los descuentos B2B están activos: se aplica encima del precio de catálogo. Asigna el código al mercado de consumidor y nadie con cuenta de empresa podrá usarlo.'
cta:
  heading: '¿Vendes a consumidor y a mayorista en la misma tienda?'
  text: 'Reviso tiendas Shopify con B2B antes de campañas: qué descuentos llegan a quién, qué ve el mayorista en el tema y qué hay que separar con una app o con Plus. Cuéntame qué vas a lanzar en Black Friday y te digo si tus tarifas mayoristas están a salvo.'
  label: 'Cuéntame tu caso'
---

Si tu tienda vende también a mayoristas con Shopify B2B, un descuento creado para *Todos los clientes* se les aplica a ellos, y encima del precio de su catálogo. Se evita en la elegibilidad del descuento: en lugar de *Todos los clientes*, eliges el mercado de consumidor. Desde mayo de 2026 se puede en cualquier plan desde Basic con la versión nueva de Markets.

Este año la pregunta importa más que nunca, por dos fechas: B2B llegó a Basic, Grow y Advanced en abril de 2026, y el 23 de junio Shopify activó solos los descuentos B2B en las tiendas nuevas y en muchas de las existentes. Para bastantes tiendas, este será el primer Black Friday con las dos cosas a la vez.

> Los datos de este artículo están comprobados en el centro de ayuda y el registro de cambios de Shopify en noviembre de 2026. Las rutas del panel salen de la ayuda de Shopify, no de un recorrido por un panel real: si alguna etiqueta no coincide con lo que ves, manda lo que ves.

## Qué pasa, con números

La [documentación de descuentos B2B](https://help.shopify.com/es/manual/b2b/catalogs/discounts) lo dice sin rodeos: los descuentos automáticos y los códigos se aplican como descuentos adicionales encima de los precios del catálogo, y en una tienda combinada los elegibles para *Todos los clientes*, *Clientes específicos* o *Segmentos de clientes* se aplican de forma predeterminada a B2B y a consumidores.

Un producto con PVP de 100 €, un [catálogo B2B](/glosario/catalogo-b2b/) con un 40 % de descuento y una rebaja automática del 20 % para todos los clientes:

| Comprador | Precio de partida | Con la rebaja |
| --- | --- | --- |
| Consumidor | 100 € | 80 € |
| Mayorista | 60 € | 48 € |

Si el producto te cuesta 50 €, la venta al consumidor deja margen y la del mayorista pierde 2 € por unidad. Y el mayorista compra por cajas: con [precios por volumen](/glosario/precios-por-volumen/) en el catálogo, el último tramo baja todavía más antes de la rebaja.

Lo mismo vale para un código. El código del 15 % que le das a un influencer, si es para todos los clientes, lo puede escribir cualquier comprador con cuenta de empresa.

Si el precio raro que ves no viene de un descuento, el diagnóstico paso a paso (sesión, sede, catálogo, precios fijos, tema) está en [mi mayorista ve un precio incorrecto en Shopify](/blog/precio-incorrecto-shopify-b2b/).

## Por qué este año

Dos cambios de 2026 se juntan en noviembre:

- **2 de abril.** B2B pasa a Basic, Grow y Advanced. Muchas tiendas que antes no tenían mayoristas en Shopify los tienen ahora, en la misma tienda que el consumidor; lo que eso implica en general está en [B2B y B2C en la misma tienda](/blog/shopify-b2b-b2c-misma-tienda/).
- **23 de junio.** Según el [registro de cambios](https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores), los descuentos B2B se activan por defecto en las tiendas B2B nuevas y en las existentes que no tenían descuentos activos ni programados. Antes había que pedírselo a soporte. El mismo aviso recuerda que, a partir de ese momento, cualquier descuento para *Todos los clientes*, *Clientes específicos* o *Segmentos de clientes* se aplica a todos, B2B incluido, salvo que le asignes mercados.

Es decir: en una tienda que activó B2B este verano, nadie ha decidido que la rebaja de Black Friday llegue a los mayoristas. Llega porque es lo que hace por defecto.

## Cómo se limita un descuento por mercado

La elegibilidad por mercado salió el [7 de mayo de 2026](https://changelog.shopify.com/posts/assign-discounts-to-specific-markets) y está disponible desde el plan Basic en las tiendas con la versión nueva de Markets. Vale para descuentos automáticos y códigos, de importe, de porcentaje, de compra X y lleva Y y de envío gratis.

En cada descuento, en la sección de elegibilidad:

- **Solo para consumidores:** elige *Mercados* y selecciona tu mercado de región (España, Unión Europea, el que tengas).
- **Solo para mayoristas:** elige *Mercados* y selecciona el mercado B2B.

El detalle que hace que funcione está en la [nota para desarrolladores](https://shopify.dev/changelog/posts/target-discounts-to-specific-markets): los descuentos no se heredan entre tipos de mercado. Uno asignado a un mercado de región se aplica a sus submercados de región (de "Europa" a "España"), pero nunca pasa a un mercado B2B ni a uno de tienda física. Ese mismo selector te sirve, si tienes tienda física con Shopify POS, para hacer una rebaja solo online.

Antes de crear nada, filtra la lista de descuentos por mercado y por cliente: los que siguen en *Todos los clientes*, *Clientes específicos* o *Segmentos de clientes* son los que también llegan al mayorista. La ficha de cada mercado enseña los descuentos asignados a ese mercado, y Markets tiene una vista previa para ver cómo se resuelven en contexto.

## Lo que no cabe en un descuento

La elegibilidad es **por mercados o por segmentos de clientes, no por las dos cosas**. La nota de Shopify lo dice expresamente. Así que "20 % para mi segmento VIP, pero solo consumidores" no entra en un único descuento automático.

Tres salidas, de menos a más trabajo:

1. **Un código en vez de un automático.** Lo repartes solo al segmento (por correo, desde tu herramienta de email) y le asignas el mercado de consumidor. El segmento lo controla quién recibe el código; el mercado, quién puede usarlo.
2. **Dos descuentos.** Uno para el mercado de consumidor y otro, distinto, para el mercado B2B, si quieres que el mayorista también tenga su campaña.
3. **Una app de descuentos o una Function propia.** Si la regla depende de la empresa (un 5 % extra solo para distribuidores, por ejemplo), es lógica de descuento a medida. Las apps públicas con funciones dentro funcionan en cualquier plan; una Function escrita para tu tienda [solo se puede instalar con Plus](/preguntas/puedo-usar-shopify-functions-sin-plus/).

## Si tu tienda tenía descuentos en junio

La activación automática del 23 de junio no llegó a las tiendas B2B que tenían descuentos activos o programados en ese momento. En esas tiendas puede que los descuentos B2B sigan apagados, y entonces pasa lo contrario: ningún descuento llega a los mayoristas, tampoco el que quieras darles a ellos. La [ayuda de Shopify](https://help.shopify.com/es/manual/b2b/catalogs/discounts) dice que, si no los tienes disponibles, el propietario de la tienda puede pedir a soporte que los active.

Si no sabes en qué caso estás, la prueba de abajo te lo dice en diez minutos.

## Cómo probarlo antes del viernes

1. **Filtra los descuentos.** Cualquiera que no tenga mercado asignado llega a todos, mayoristas incluidos.
2. **Ten un comprador de prueba.** Una empresa de prueba, con una sede en tu mercado B2B y un contacto con tu propio correo con alias (`tu+mayorista@tudominio.es`), para no tocar clientes reales.
3. **Entra con ese contacto y llena un carrito.** Comprueba que la rebaja automática no aparece y que los códigos de consumidor dan error.
4. **Haz lo mismo sin iniciar sesión.** La rebaja tiene que estar.
5. **Termina el pedido B2B sin pagar.** Si la sede de prueba tiene condiciones de pago a plazo o envía los pedidos como borrador para revisar, el pedido se completa sin cobro y lo cancelas después.

Repite la prueba el día que actives la campaña, no solo cuando la programas. Un descuento duplicado a última hora con *Todos los clientes* deshace el trabajo.

## Lo que ve el mayorista en la tienda

El descuento no se aplica, pero la barra de "-20 % en toda la tienda" sigue en la cabecera, y el mayorista la lee como una promesa. En el tema se quita con la misma condición que separa el resto de la experiencia B2B:

```liquid
{%- unless customer.b2b? -%}
  <div class="barra-promo" role="region" aria-label="Promoción">
    {{ section.settings.texto_promo }}
  </div>
{%- endunless -%}
```

La misma condición sirve para el pop-up de la campaña, los contadores de cuenta atrás y las etiquetas de "Black Friday" en las fichas. Si el mayorista tiene su propia promoción, el `else` de esa condición es su sitio.

## Las apps que no ven estos descuentos

Un aviso para quien tenga apps que leen descuentos: según la misma nota para desarrolladores, las versiones de la API anteriores a la 2026-07 **filtran los descuentos con elegibilidad por mercado**, porque no saben representarlos. Una app que pinta etiquetas de descuento en el tema, que sincroniza promociones con Google o con tu herramienta de email, o que hace informes de descuentos, puede dejar de ver tu rebaja en cuanto le pones un mercado.

Antes de lanzar la campaña, pregunta a cada una qué versión de la API usa. Si es anterior a 2026-07, el descuento existe y se aplica en el pago, pero la app no lo ve.

## La lista de esta semana

1. Abre **Descuentos** y revisa la elegibilidad de cada descuento activo y programado.
2. Pasa al mercado de consumidor los que no deban llegar a mayoristas, códigos de influencer incluidos.
3. Si quieres una promoción para mayoristas, créala aparte para el mercado B2B.
4. Haz la prueba con el contacto de empresa, con sesión y sin ella.
5. Esconde la comunicación de la campaña a los clientes B2B en el tema.
6. Pregunta a tus apps de descuentos y de marketing qué versión de la API usan.

Las fuentes de Shopify: [descuentos B2B](https://help.shopify.com/es/manual/b2b/catalogs/discounts), [descuentos B2B activos por defecto](https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores), [descuentos por mercado](https://changelog.shopify.com/posts/assign-discounts-to-specific-markets), la [nota para desarrolladores sobre mercados](https://shopify.dev/changelog/posts/target-discounts-to-specific-markets) y [B2B en planes sin Plus](https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans).
