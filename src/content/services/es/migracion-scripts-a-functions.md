---
pair: 'scripts-to-functions'
label: 'Migración'
h1: 'Migración de Shopify Scripts a Functions'
lead: 'Shopify Scripts dejó de ejecutarse en junio de 2026. Si tu tienda tenía descuentos, portes o métodos de pago controlados por un Script, hoy esa regla no se está aplicando. Reviso qué hacía cada Script, qué sigue hacen falta y lo reescribo como Function.'
serviceName: 'Migración de Shopify Scripts a Shopify Functions'
serviceType: 'Migración de software para ecommerce'
seoTitle: 'Migrar Shopify Scripts a Functions | Nicolás Mateos'
description: 'Migración de Shopify Scripts a Functions: auditoría de lo que hacía cada Script, qué sigue hacen falta y reescritura con pruebas. Scripts dejó de correr en 2026.'
keyword: 'migrar shopify scripts a functions'
cases: []
faq:
  - q: '¿Qué pasa si no migro?'
    a: 'Nada visible, y eso es el problema. Scripts dejó de ejecutarse en junio de 2026: no da error, simplemente la regla no se aplica. Un descuento por nivel de cliente que dejó de aplicarse se nota en el margen, no en el panel.'
  - q: '¿Se traduce el Ruby a JavaScript y listo?'
    a: 'No. El modelo es distinto: una Function declara en su input query qué datos necesita y solo recibe esos, tiene un presupuesto de instrucciones y se despliega como una app con versiones. Es un rediseño corto, no una traducción.'
  - q: '¿Cuántos de mis Scripts voy a necesitar de verdad?'
    a: 'En los proyectos que he visto, la mitad. Varias de las reglas más comunes hoy se resuelven sin código: un descuento por nivel es un catálogo B2B y un mínimo por caja son reglas de cantidad. Eso sale en la auditoría antes de escribir nada.'
related: ['functions-development', 'checkout-development']
terms: ['shopify-scripts', 'shopify-functions', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

## El orden que sigo

**1. Inventario.** Qué Scripts había, qué hacía cada uno y cuándo se tocó por última vez. En tiendas con varios años encima suele aparecer algún Script que nadie recuerda haber pedido.

**2. Descarte.** Por cada regla, la pregunta es si sigue hacen falta y si la plataforma ya la cubre. Los tres Scripts más comunes eran descuento por etiqueta de cliente, ocultar envíos según el carrito y reordenar métodos de pago. En B2B, dos de ellos se resuelven hoy sin código: el descuento por nivel es un [catálogo](/glosario/catalogo-b2b/) y el mínimo por caja son [reglas de cantidad](/glosario/reglas-de-cantidad/).

**3. Reescritura.** Lo que queda se escribe como [Function](/servicios/shopify-functions/), con su input query ajustada y sus pruebas.

**4. Comprobación.** Se despliega en una tienda de desarrollo y se pasan los carritos que de verdad importan: el pedido grande, el que mezcla tarifas, el que está en el límite del mínimo.

## Lo que cambia respecto a un Script

Tres cosas, y son las que obligan a rediseñar en lugar de traducir. Un Script veía el carrito entero; una Function solo recibe los campos que su input query pide. Un Script no tenía presupuesto visible; una Function sí, y eso descarta recorrer el catálogo dentro del código. Y una Function se despliega como app, con versiones y configuración, en lugar de ser texto guardado en el admin: más trabajo la primera vez, mucho menos riesgo después.

## El requisito de plan

Una Function escrita a medida va dentro de una app personalizada, y eso solo se puede instalar en tiendas con [Shopify Plus](/glosario/shopify-plus/). Si tenías Scripts, ya tienes Plus, así que este punto rara vez bloquea esta migración en concreto.
