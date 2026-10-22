---
pair: 'customer-accounts'
label: 'Cuentas de cliente'
h1: 'Área de cliente y extensiones de cuenta en Shopify'
pitch: 'Que tus clientes repitan pedidos y gestionen su cuenta sin llamarte'
topic: 'b2b'
glance:
  problem: 'Compradores mayoristas que llaman para repetir un pedido, pedir una factura o saber qué tienen pendiente de pago.'
  forWho: 'Marcas B2B cuyos clientes compran cada semana o cada mes desde la tienda.'
  notFor: 'Si vendes sobre todo a consumidor final: su área de cliente se abre una vez por pedido.'
  outcome: 'Tus clientes repiten pedidos, descargan facturas y ven sus vencimientos solos, sin pasar por tu equipo.'
  effort: 'Casi todo se monta en el tema y funciona sin Plus. Las extensiones de cuenta a medida sí necesitan Shopify Plus.'
lead: 'El área de cliente es donde vive un comprador mayorista: su histórico, sus pedidos pendientes, su tarifa, su sede. Monto esa zona con extensiones de cuenta y el front-end que la hace útil en lugar de decorativa.'
serviceName: 'Desarrollo del área de cliente en Shopify'
serviceType: 'Desarrollo front-end para ecommerce'
seoTitle: 'Área de cliente y cuentas en Shopify | Nicolás Mateos'
description: 'Área de cliente en Shopify para B2B: histórico de pedidos, repetir pedido, selector de sede, plazos de pago y extensiones de cuenta en tiendas Plus.'
keyword: 'área de cliente shopify b2b'
cases: []
faq:
  - q: '¿Qué pide de verdad un comprador B2B en su cuenta?'
    a: 'Cuatro cosas, por orden: repetir el último pedido, ver qué tiene pendiente de pago y cuándo vence, descargar facturas y cambiar de sede. Lo demás es decoración.'
  - q: '¿Necesito Plus para las extensiones de cuenta?'
    a: 'Una extensión escrita a medida para tu tienda va dentro de una app personalizada, y eso requiere Shopify Plus. Buena parte del valor, en cambio, se consigue en el tema y sin Plus.'
  - q: '¿Se puede ocultar el precio hasta que el comprador entra?'
    a: 'Sí, y es lo correcto: con la condición customer.b2b? el precio no llega al HTML de quien no tiene sesión. Ocultarlo por CSS no cuenta, porque sigue estando en el código fuente.'
related: ['checkout-development', 'functions-development']
terms: ['checkout-extensibility', 'company', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Por qué importa más en B2B que en B2C

Un cliente B2C entra a su cuenta una vez, para ver dónde está el envío. Un comprador mayorista entra cada semana: es su herramienta de trabajo. Si no encuentra lo que busca, no se va a la competencia, llama por teléfono, y esa llamada la paga tu equipo.

## Lo que monto, por orden de lo que se usa

1. **Repetir el último pedido.** La función más usada de cualquier portal mayorista. Un botón que recrea el pedido en el carrito, con sus cantidades, y que avisa de lo que ya no está disponible.
2. **Pendiente de pago y vencimientos.** Si la empresa tiene [plazo de pago](/glosario/condiciones-de-pago/), esto es lo primero que mira. Que esté, y que cuadre con la factura.
3. **Facturas descargables**, donde el comprador las busca y no en un email de hace dos meses.
4. **[Selector de sede](/glosario/sede-de-empresa/)**, si compra para varias delegaciones, y en la cabecera, no enterrado aquí: cambiar de sede puede cambiar todos los precios del carrito.

## El detalle de los precios

La regla que repito en todos los proyectos: si el visitante no es B2B, el precio **no debe llegar al HTML**. La condición de Liquid sobre `customer.b2b?` es la forma correcta; esconderlo con CSS deja el precio en el código fuente, visible para cualquiera que mire y para cualquier buscador.

## Lo que no depende del plan

Casi todo lo de arriba se monta en el tema y funciona sin Plus. Lo que necesita [Shopify Plus](/glosario/shopify-plus/) son las extensiones de cuenta escritas a medida, porque van dentro de una app personalizada. Conviene saber qué parte del presupuesto depende del plan antes de prometerlo.
