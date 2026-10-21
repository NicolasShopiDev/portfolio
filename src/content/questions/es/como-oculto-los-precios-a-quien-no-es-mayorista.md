---
pair: 'hide-prices'
question: '¿Cómo oculto los precios a quien no es mayorista?'
category: 'b2b'
seoTitle: 'Ocultar precios a quien no es mayorista en Shopify'
description: 'Con una condición de Liquid sobre customer.b2b? el precio no llega al HTML de un visitante sin sesión. Ocultarlo con CSS no sirve: sigue en el código fuente.'
keyword: 'ocultar precios shopify b2b'
answer: 'Con una condición de Liquid sobre customer.b2b? alrededor de cada precio, badge de stock y botón de compra. La regla es que si el visitante no es un cliente B2B con sesión abierta, el precio no debe llegar al HTML: ocultarlo con CSS o con JavaScript no cuenta, porque el precio sigue estando en el código fuente.'
related: ['price-per-customer', 'new-theme-for-b2b']
terms: ['shopify-b2b', 'liquid', 'company']
updated: '2026-10-21'
verified: '2026-10-21'
---

## La condición, y dónde ponerla

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
  <button name="add" type="submit">Añadir al pedido</button>
{% else %}
  <a class="btn" href="/account/login">Accede con tu cuenta para ver precios</a>
{% endif %}
```

Lo importante es que esa condición no va solo en la ficha de producto. Tiene que estar en **todos** los sitios donde un precio sale al HTML, y en un tema de Shopify son más de los que parece: la tarjeta de colección, los resultados del buscador, los productos relacionados, el carrito, el borrador de carrito que algunos temas pintan en JSON, los datos estructurados de producto y el feed de Google Shopping si está activo.

El fallo que me encuentro más veces en auditorías es justo ese: la ficha está bien protegida y el listado de colección sigue mostrando el precio mayorista a cualquiera.

## Por qué el CSS no vale

Si el precio se imprime y se tapa con `display: none`, está en el código fuente. Lo ve cualquiera con "ver código fuente", lo ve cualquier extensión y lo puede indexar un buscador. En un portal mayorista eso significa que tu competencia puede sacar tu tarifa completa en diez minutos sin tener cuenta.

Lo mismo con las soluciones por JavaScript que borran el precio al cargar: entre que el HTML llega y el script corre, el precio está ahí, y en el código fuente está siempre.

## El caso de la misma empresa con varias sedes

Si el comprador puede comprar para varias [sedes](/glosario/sede-de-empresa/), no basta con saber que es B2B: hay que saber **desde dónde** compra, porque la tarifa puede cambiar. `customer.current_location` lo dice, y conviene que el selector de sede esté visible en la cabecera: cambiar de sede puede recalcular todo el carrito, y el comprador tiene que enterarse.

## Un extra que piden los compradores

Un botón para ocultar sus propios precios en pantalla. Parece raro hasta que te lo cuenta un comprador que está en el almacén con el móvil en la mano y un cliente final al lado. Se resuelve con una preferencia en `localStorage` aplicada en el `head`, antes de que se pinte la página.
