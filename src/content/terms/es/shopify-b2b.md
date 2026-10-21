---
pair: 'shopify-b2b'
term: 'Shopify B2B'
aliases: ['B2B nativo', 'venta mayorista en Shopify', 'Shopify wholesale']
category: 'b2b'
seoTitle: 'Qué es Shopify B2B y en qué planes está disponible'
description: 'Shopify B2B es el modelo de venta mayorista integrado en la tienda: empresas, sedes y catálogos con precios propios. Está en Basic, Grow, Advanced y Plus.'
keyword: 'qué es shopify b2b'
answer: 'Shopify B2B es el conjunto de funciones de venta mayorista integradas en la propia tienda: el cliente deja de ser una persona y pasa a ser una empresa con sus sedes, y los precios salen de catálogos asignados a esas empresas. No es una app ni un tema aparte, es un modelo de datos dentro de la tienda que ya tienes.'
related: ['company', 'b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

Lo que distingue a B2B nativo de los apaños que se hacían antes (etiquetas de cliente, descuentos automáticos, una segunda tienda en paralelo) es que el precio mayorista **llega resuelto al tema**. El front-end no calcula nada: pide el precio de la variante y recibe el que corresponde a la empresa del comprador que tiene la sesión abierta.

## En qué planes funciona

La documentación de Shopify lista B2B en **Basic, Grow, Advanced y Shopify Plus**, y lo excluye solo de Starter y Retail. La diferencia entre planes no está en si puedes vender al por mayor, sino en cuántos [catálogos](/glosario/catalogo-b2b/) activos puedes tener: tres en total en los planes sin Plus, sin límite en Plus.

## Qué tiene que hacer el tema

Una sola cosa, y es la que más veces se hace mal: decidir quién ve precios. La condición es `customer.b2b?`, y la regla es que si el visitante no es B2B el precio **no debe llegar al HTML**, no basta con ocultarlo por CSS.

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
{% else %}
  <a href="/account/login">Accede para ver precios</a>
{% endif %}
```

El resto del trabajo de un portal mayorista no depende del plan ni de B2B: es flujo de pedido. Tabla de tallas con stock, búsqueda por referencia, repetir el último pedido. Eso es front-end, y es donde se nota la diferencia para el comprador.

Los detalles del modelo están en la [documentación de B2B](https://help.shopify.com/en/manual/b2b).
