---
pair: 'payment-terms'
term: 'Condiciones de pago (payment terms)'
aliases: ['payment terms', 'pago aplazado', 'net 30', 'pago a 30 días']
category: 'b2b'
seoTitle: 'Condiciones de pago en Shopify B2B: pago a 30 días'
description: 'Las condiciones de pago permiten que una empresa B2B compre sin pagar en el checkout: net 30, 60 o pago al recibir. Se asignan por empresa o por sede.'
keyword: 'condiciones de pago shopify b2b'
answer: 'Las condiciones de pago en Shopify B2B son el plazo con el que una empresa paga un pedido: al contado, a 30, 45 o 60 días, o a la recepción. Se asignan a la empresa o a la sede, y permiten que el comprador termine el pedido sin introducir una tarjeta.'
related: ['company', 'company-location', 'draft-order']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la función que convierte un carrito en un pedido mayorista de verdad. Un comprador profesional no paga con tarjeta: tiene un acuerdo y paga a plazo contra factura.

## Lo que cambia en el checkout

Con condiciones asignadas, el checkout ofrece terminar el pedido sin cobro inmediato. El pedido entra como pendiente de pago con su fecha de vencimiento, y el cobro se gestiona después. Para el front-end eso significa que el botón de pagar no es el final del flujo: el final es un pedido confirmado que el comprador puede descargar.

## Dónde se nota en el front-end

Dos sitios, y los dos se olvidan:

- **El carrito.** Si el comprador sabe que paga a 60 días, decirlo en el carrito baja el abandono mucho más que cualquier sello de confianza.
- **El área de cliente.** Un comprador con pago aplazado entra a ver qué tiene pendiente y cuándo vence. Si eso no está, lo pregunta por teléfono.

## Lo que no resuelve

No es control de crédito. Shopify guarda el plazo, no el riesgo: no hay un límite de crédito que frene un pedido cuando la empresa ya debe demasiado. Si eso hace falta, sale del ERP, y entra en el proyecto como [integración](/servicios/integraciones-erp/) o como validación de carrito.

Detalle en la [documentación de condiciones de pago](https://help.shopify.com/en/manual/b2b/payment-terms).
