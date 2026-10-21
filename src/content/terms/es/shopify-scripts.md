---
pair: 'shopify-scripts'
term: 'Shopify Scripts'
aliases: ['Scripts', 'Ruby scripts', 'Script Editor']
category: 'functions'
seoTitle: 'Shopify Scripts: qué eran y por qué ya no se usan'
description: 'Shopify Scripts era el sistema en Ruby para reglas de carrito y envío en tiendas Plus. Dejó de ejecutarse en junio de 2026 y lo sustituyen las Functions.'
keyword: 'shopify scripts'
answer: 'Shopify Scripts era el sistema anterior a las Functions para aplicar reglas propias de descuento, envío y pago en tiendas Shopify Plus, escrito en Ruby desde el Script Editor. Dejó de ejecutarse en junio de 2026, y lo que lo sustituye son las Shopify Functions.'
related: ['shopify-functions', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

Si una tienda todavía tiene Scripts en su documentación interna, en su wiki o en el contrato de mantenimiento, lo que tiene es una regla de negocio que ya no se está aplicando.

## Qué cambia al migrar

No es una traducción de Ruby a JavaScript. El modelo es distinto en tres puntos que obligan a rediseñar, no a reescribir:

- **Scripts corría en el momento del checkout y veía el carrito entero.** Una [Function](/glosario/shopify-functions/) declara en su [input query](/glosario/input-query/) qué campos necesita, y solo recibe esos.
- **Un Script no tenía presupuesto de instrucciones visible.** Una Function sí, y eso descarta recorrer el catálogo entero dentro del código.
- **Las Functions se despliegan como una app**, con versiones y configuración, no como un texto guardado en el admin. Eso es mejor para mantener y más trabajo la primera vez.

## Lo que se encuentra en la práctica

Los Scripts que más se usaban eran tres: descuento por etiqueta de cliente, ocultar métodos de envío según el carrito y reordenar métodos de pago. Los tres tienen hoy su Function equivalente, y en B2B dos de ellos se resuelven incluso sin código: el descuento por nivel es un [catálogo](/glosario/catalogo-b2b/) y el mínimo por caja son [reglas de cantidad](/glosario/reglas-de-cantidad/).

Antes de presupuestar una migración conviene mirar cuáles de los Scripts viejos han dejado de hacer falta. En los proyectos que he visto, la mitad.

Documentación de lo que las sustituye: [Shopify Functions](https://shopify.dev/docs/api/functions).
