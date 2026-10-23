---
pair: 'functions-without-plus'
question: '¿Puedo usar Shopify Functions sin Shopify Plus?'
category: 'functions'
seoTitle: '¿Se pueden usar Shopify Functions sin Plus?'
description: 'Solo las que vienen dentro de una app pública del App Store. Una Function escrita para tu tienda va en una app personalizada, y eso requiere Shopify Plus.'
keyword: 'shopify functions sin plus'
answer: 'Solo las que vengan dentro de una app pública del App Store. Una Function escrita a medida para tu tienda va dentro de una app personalizada, y únicamente las tiendas con Shopify Plus pueden instalar apps personalizadas que contengan Shopify Functions.'
related: ['need-app-for-b2b', 'customise-checkout']
terms: ['shopify-functions', 'shopify-plus', 'quantity-rules']
updated: '2026-10-23'
verified: '2026-10-23'
---

## La diferencia que importa al presupuestar

Es un detalle que casi nadie cuenta y que decide proyectos enteros: con una app pública te adaptas a **su** modelo de datos, con una [Function](/glosario/shopify-functions/) propia el modelo lo pones tú.

Si tu regla es "un 10 % al pasar de 500 €", hay apps del App Store que lo hacen y además las mantiene otro. Si tu regla es "un 10 % al pasar de 500 €, salvo en la familia de producto X, y solo para las sedes de España, y sin acumular con el precio de volumen", ninguna app pública la va a modelar igual, y ahí Plus deja de ser una preferencia.

## Lo que sí se puede hacer sin Plus

Bastante más de lo que parece, y conviene agotarlo antes de cambiar de plan:

- **[Reglas de cantidad](/glosario/reglas-de-cantidad/)** en el catálogo: mínimo, máximo e incremento por variante. Es lo que obliga a pedir cajas completas, sin una línea de código.
- **[Precios por volumen](/glosario/precios-por-volumen/)**: saltos de precio por cantidad dentro del catálogo.
- **Descuentos automáticos** nativos para las promociones estándar.
- **Apps públicas** que lleven Functions dentro, para descuentos que no caben en lo anterior.

En los proyectos B2B que me llegan pidiendo una Function, un buen número se resuelve con las dos primeras.

## Cuándo no hay alternativa

Cuando la regla mira el **carrito entero** y cambia según quién compra o qué lleva. Las reglas de cantidad son por variante: no saben si estás mezclando dos tarifas, ni si un producto exige otro, ni si esta empresa en concreto llega a su mínimo. Un [pedido mínimo](/blog/pedido-minimo-shopify/) igual para todo el B2B sí se resuelve sin Plus desde abril de 2026, con Checkout Blocks. Para el resto hace falta una validación propia, es decir una Function, y por tanto Plus.

Si quieres ver cómo es una de esas validaciones por dentro antes de decidir, hay una publicada con sus pruebas en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab) y se puede tocar en [la portada](/).
