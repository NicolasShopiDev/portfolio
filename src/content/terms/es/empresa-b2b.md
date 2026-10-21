---
pair: 'company'
term: 'Empresa (company)'
aliases: ['company', 'cuenta de empresa', 'cliente B2B']
category: 'b2b'
seoTitle: 'Empresa en Shopify B2B: qué es y qué límites tiene'
description: 'La empresa es el cliente en Shopify B2B: agrupa sedes y compradores, y de ella cuelgan catálogos y condiciones de pago. Hasta 10.000 sedes por empresa.'
keyword: 'empresa shopify b2b'
answer: 'Una empresa (company) es el cliente en Shopify B2B: en lugar de una persona, el comprador es una organización con sus sedes y sus compradores asociados. De la empresa cuelgan el catálogo que ve, sus condiciones de pago y quién puede comprar en su nombre.'
related: ['company-location', 'shopify-b2b', 'payment-terms']
updated: '2026-10-21'
verified: '2026-10-21'
---

Este cambio de modelo es el que rompe más suposiciones del tema. En B2C hay un cliente y una dirección; en B2B hay una empresa, varias sedes, y personas que compran para una o para varias de ellas. Un objeto `customer` ya no basta para saber qué precio toca.

## Los números

Shopify no limita el número de empresas en ningún plan. Lo que sí tiene tope es lo que cuelga de cada una: hasta **10.000 sedes** y **10.000 compradores** por empresa. Son techos que en la práctica no se tocan; el límite que duele es el de [catálogos activos](/glosario/catalogo-b2b/), que depende del plan.

## Lo que hay que mirar al montar el portal

Una empresa con varias sedes no es un detalle administrativo: cambia portes, impuestos, mínimos y a veces el catálogo. En Liquid, `customer.current_location` dice desde qué sede se está comprando, y con eso se pueden cambiar mensajes, mínimos o avisos de envío sin duplicar plantillas.

El error habitual es dar por hecho que un comprador pertenece a una sola sede. Si pertenece a tres y el selector está escondido en la página de cuenta, el carrito se llena con los precios de la sede equivocada y la incidencia llega dos días después, ya facturada.

Los límites están en la [documentación de empresas](https://help.shopify.com/en/manual/b2b/companies).
