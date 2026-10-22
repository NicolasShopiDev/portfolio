---
pair: 'checkout-development'
label: 'Checkout'
h1: 'Personalización del checkout de Shopify'
pitch: 'Un checkout que pide los datos que necesitas y aplica tus reglas'
topic: 'plus'
glance:
  problem: 'Avisar de algo antes de pagar, pedir un dato (CIF, pedido de compra), bloquear carritos imposibles u ordenar envíos y pagos.'
  forWho: 'Tiendas Shopify Plus, sobre todo B2B, cuyo checkout tiene que pedir o comprobar algo propio del negocio.'
  notFor: 'Si quieres mover los pasos del checkout o maquetarlo libremente: Shopify no lo permite.'
  outcome: 'Pedidos que el almacén puede servir y compradores que ven sus condiciones antes de pagar.'
  effort: 'Un aviso, una tarde. Una validación que bloquea el pago, días: antes hay que escribir los casos límite.'
lead: 'Extensiones de interfaz, validaciones que bloquean el pago, campos propios y reglas de envío y de pago, dentro de Checkout Extensibility. Lo que se puede hacer, lo hago; lo que no, te lo digo antes de presupuestar.'
serviceName: 'Personalización del checkout de Shopify'
serviceType: 'Desarrollo de software para ecommerce'
seoTitle: 'Personalizar el checkout de Shopify | Nicolás Mateos'
description: 'Personalización del checkout de Shopify con Checkout Extensibility: extensiones de UI, validaciones, campos propios y reglas de envío y de pago en tiendas Plus.'
keyword: 'personalizar checkout shopify plus'
cases: []
faq:
  - q: '¿Se puede maquetar el checkout como una página normal?'
    a: 'No. Checkout Extensibility coloca extensiones en puntos permitidos y permite cambiar logotipo, colores, tipografías y orden de bloques desde el editor, pero no reordenar libremente los pasos ni inyectar JavaScript arbitrario. Si un presupuesto da por hecho eso, está mal.'
  - q: '¿Necesito Plus para tocar el checkout?'
    a: 'Para lo visual y para apps públicas, no. Para una extensión o una Function escritas a medida para tu tienda, sí: van dentro de una app personalizada y eso requiere Shopify Plus.'
  - q: '¿Qué pasó con checkout.liquid?'
    a: 'Dejó de ser el camino. Lo que había en checkout.liquid se rehace con extensiones y Functions, y en la mayoría de los casos la mitad de lo que había ya no hace falta: eran apaños que la plataforma ahora cubre.'
  - q: '¿Puedo pedir un número de pedido de compra en el checkout?'
    a: 'Sí, con un campo en una extensión, y se puede guardar en el pedido para que llegue a la factura y al ERP. Es una de las cosas que más pide un comprador B2B.'
related: ['functions-development', 'customer-accounts']
terms: ['checkout-extensibility', 'shopify-plus', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Lo que de verdad se pide

Casi nunca es un rediseño. En los proyectos que me llegan, el checkout se toca por cuatro motivos:

1. **Avisar de algo antes de pagar.** Un mínimo que no se cumple, un producto que tarda tres semanas, un plazo de pago que la empresa ya tiene concedido.
2. **Pedir un dato.** Número de pedido de compra, CIF, referencia interna del comprador, fecha de entrega deseada.
3. **Bloquear.** Que no se pueda pagar un carrito que el almacén no va a poder servir.
4. **Ordenar métodos.** Esconder o reordenar envíos y pagos según el carrito, el país o la empresa.

Los cuatro caben en Checkout Extensibility. Lo que no cabe es mover los pasos del checkout o maquetarlo libremente, y conviene saberlo antes de prometerlo a dirección.

## Las piezas y cuál toca

- **El editor** para lo visual: logotipo, colores, tipografías, orden de bloques. Sin código y sin Plus.
- **Extensiones de interfaz** para añadir contenido o campos en los puntos permitidos del checkout y de la página de gracias.
- **[Functions](/servicios/shopify-functions/)** para el comportamiento: validaciones que bloquean, descuentos, disponibilidad y orden de métodos de envío y de pago.

La diferencia que más importa al presupuestar: una extensión que muestra un aviso es una tarde; una validación que decide si un carrito puede pagarse toca reglas de negocio y hay que escribir los casos límite antes de tocar el código.

## En B2B, dos cosas concretas

El checkout de un portal mayorista se juega en dos detalles. El primero es decir el plazo de pago donde el comprador lo ve: si paga a 60 días, decirlo en el carrito y en el checkout baja el abandono más que cualquier sello. El segundo es el pedido de compra: un comprador profesional tiene que poder meter su referencia, y esa referencia tiene que llegar al pedido.

## Qué entrego

La extensión o la Function con su configuración, probada en una tienda de desarrollo con los carritos que de verdad dan problemas, y escrito qué se puede cambiar desde el admin sin volver a llamarme.
