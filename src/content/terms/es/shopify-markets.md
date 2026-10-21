---
pair: 'shopify-markets'
term: 'Shopify Markets'
aliases: ['Markets', 'mercados', 'multimercado', 'internacional']
category: 'plan'
seoTitle: 'Shopify Markets: vender en varios países e idiomas'
description: 'Shopify Markets agrupa países con su moneda, idioma, impuestos y precios. En B2B es además la vía por la que se asignan los catálogos sin Shopify Plus.'
keyword: 'shopify markets'
answer: 'Shopify Markets es la función con la que una tienda vende en varios países desde un solo panel: cada mercado tiene sus países, su moneda, sus idiomas, sus impuestos y sus ajustes de precio. En B2B tiene un papel extra, porque sin Shopify Plus los catálogos se asignan a través de mercados B2B.'
related: ['b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

Para una tienda B2C, Markets es lo que evita montar cuatro tiendas para vender en cuatro países. Para una tienda B2B es más que eso: es la pieza de la que depende tu estructura de precios si no tienes Plus.

## El cruce con B2B que hay que dibujar antes

Sin Shopify Plus un [catálogo](/glosario/catalogo-b2b/) no se asigna a una empresa: se asigna a un mercado B2B, y las empresas de ese mercado lo heredan. Como solo puedes tener tres catálogos activos, tu segmentación de precios y tu segmentación geográfica tienen que caber en el mismo esquema.

Ejemplo de lo que pasa en una reunión real: si los niveles son "mayorista España", "mayorista Portugal" y "distribuidor", ya se han gastado los tres y no queda hueco para cuentas clave. Dibujarlo en una pizarra antes de elegir plan ahorra la conversación.

## Lo que afecta al front-end

- **El selector de país e idioma** tiene que existir y no reiniciar el carrito.
- **Los precios redondeados** por mercado cambian lo que muestra la ficha; si el tema cachea precios en JavaScript, hay que invalidarlos al cambiar de mercado.
- **El SEO internacional** se decide aquí: cada mercado con su dominio o subcarpeta y su `hreflang`. Una tienda con cuatro mercados y un solo `hreflang` compite consigo misma.

Documentación: [Shopify Markets](https://help.shopify.com/en/manual/markets).
