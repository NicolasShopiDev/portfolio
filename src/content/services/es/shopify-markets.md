---
pair: 'markets'
label: 'Internacional'
h1: 'Shopify multimercado e internacional'
pitch: 'Vender en varios países, monedas e idiomas desde una sola tienda'
topic: 'other'
lead: 'Vender en varios países desde una sola tienda: mercados con su moneda, idioma e impuestos, el selector que no rompe el carrito y el hreflang bien puesto para que tus versiones no compitan entre ellas.'
serviceName: 'Configuración y desarrollo de Shopify Markets'
serviceType: 'Desarrollo de ecommerce internacional'
seoTitle: 'Shopify multimercado e internacional | Nicolás Mateos'
description: 'Shopify Markets: varios países, monedas e idiomas en una tienda, con selector de país, precios por mercado y hreflang correcto. Y el cruce con los catálogos B2B.'
keyword: 'shopify multimercado internacional'
cases: []
faq:
  - q: '¿Una tienda por país o Markets?'
    a: 'Markets, salvo que cada país tenga catálogo, fiscalidad y equipo distintos. Varias tiendas significan varios temas que mantener y varios inventarios que cuadrar; la mayoría de los proyectos que empiezan así acaban unificando.'
  - q: '¿Cómo afecta Markets a un portal B2B?'
    a: 'Mucho más de lo que parece. Sin Shopify Plus los catálogos B2B se asignan a través de mercados B2B, así que tu segmentación de precios tiene que caber en tu segmentación geográfica, con un tope de tres catálogos activos.'
  - q: '¿Subcarpeta o dominio por país?'
    a: 'Subcarpeta en casi todos los casos: concentra la autoridad del dominio y es menos infraestructura. Un dominio propio por país se justifica cuando la marca se percibe como local y eso vale más que la autoridad acumulada.'
related: ['custom-themes', 'erp-integrations']
terms: ['shopify-markets', 'b2b-catalog']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Lo que se decide antes de tocar nada

[Shopify Markets](/glosario/shopify-markets/) agrupa países con su moneda, sus idiomas, sus impuestos y sus ajustes de precio. La configuración es la parte fácil. Lo que de verdad hay que dibujar antes es el cruce con los precios, y en B2B eso es crítico: sin Plus, un [catálogo](/glosario/catalogo-b2b/) se asigna a un mercado B2B, no a una empresa, y solo puedes tener tres activos.

El ejemplo que sale en casi todas las reuniones: si los niveles son "mayorista España", "mayorista Portugal" y "distribuidor", ya están gastados los tres y no queda hueco para cuentas clave. Media hora de pizarra ahorra el rediseño.

## El trabajo de front-end

- **El selector de país e idioma** tiene que estar visible y no reiniciar el carrito al cambiar.
- **Los precios redondeados por mercado** cambian lo que muestra la ficha. Si el tema guarda precios en JavaScript, hay que invalidarlos al cambiar de mercado, o el comprador ve un precio y paga otro.
- **Los textos traducidos** que están en el tema, no en el contenido: avisos de envío, etiquetas de formulario, mensajes de error.

## El SEO internacional, que es donde se pierde tráfico

Cada versión necesita su `hreflang`, apuntando a sus equivalentes y a sí misma, con un `x-default`. Una tienda con cuatro mercados y un solo `hreflang` compite consigo misma y Google elige por ti, normalmente mal.

El segundo error habitual: redirigir por IP. Si un comprador alemán no puede ver la versión española ni al robot de Google se le deja ver todas las versiones, lo que se indexa es una sola. Se detecta el país y se **ofrece** el cambio, no se impone.
