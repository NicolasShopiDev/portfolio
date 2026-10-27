---
pair: precios-sin-iva-shopify-b2b
title: 'Precios sin IVA para mayoristas en Shopify: por qué tu cliente exento los sigue viendo con IVA'
seoTitle: 'Precios sin IVA en Shopify B2B: por qué no se aplican (2026)'
description: 'El ajuste fiscal de la empresa actúa en el pago, no en el escaparate. Con IVA incluido, tu mayorista exento paga el precio completo. Cómo darle precios netos.'
keyword: 'precios sin iva shopify b2b'
date: '2026-10-27'
tags: ['Shopify B2B', 'Impuestos', 'Catálogos']
related: ['shopify-b2b-sin-plus', 'pedido-minimo-shopify']
draft: true
faq:
  - q: '¿Se puede mostrar precios sin IVA solo a los clientes B2B en Shopify?'
    a: 'No con un interruptor por cliente. Shopify decide si el precio se muestra con IVA o sin IVA por mercado, no por quién ha iniciado sesión, y el ajuste fiscal de la ubicación de la empresa solo actúa en el pago. La forma nativa de que un mayorista vea el precio neto es un catálogo B2B con precios fijos netos.'
  - q: 'He marcado "No cobrar impuestos" en la empresa y los precios siguen apareciendo con IVA. ¿Es un fallo?'
    a: 'No, es cómo funciona. El ajuste fiscal de la ubicación es una regla de cobro, no de presentación: el escaparate no lo lee, y Liquid tampoco puede leerlo porque el objeto company_location no expone ese dato. Solo verás el cambio en el pago, y no siempre en el importe.'
  - q: 'Si marco a un cliente como exento y mi tienda tiene el IVA incluido, ¿paga menos?'
    a: 'No. La documentación de Shopify lo dice expreso: con precios con IVA incluido, un cliente exento sigue pagando el precio completo de la lista. Desaparece la línea de impuestos, no el importe. Por eso un cliente exento necesita un precio neto de verdad, no solo una exención.'
  - q: '¿Cuántos catálogos B2B puedo tener para separar precios netos?'
    a: 'En Basic, Grow y Advanced, hasta 3 catálogos activos entre todos tus mercados B2B. Shopify Plus los deja ilimitados y es el único plan que permite asignar un catálogo directamente a una empresa o a una ubicación.'
  - q: '¿Shopify valida el NIF-IVA de mis clientes europeos?'
    a: 'Si usas Shopify Tax y la ubicación de la empresa tiene dirección en la Unión Europea o el Reino Unido, el campo aparece como número de IVA y Shopify Tax lo valida al guardarlo. Que la operación esté exenta o no es una decisión fiscal, no un ajuste de la tienda: eso lo ve tu asesor.'
cta:
  heading: '¿Tus mayoristas ven el precio que les corresponde?'
  text: 'Monto portales B2B en Shopify donde el precio que ve el comprador es el que se le cobra: catálogos netos, exenciones, tramos de volumen y el tema que los enseña bien. Cuéntame cómo factura tu tienda y te digo si te basta con catálogos o hay que tocar el tema.'
  label: 'Cuéntame tu caso'
---

Porque el ajuste fiscal de una empresa en Shopify actúa en el pago, no en el escaparate: que un precio se muestre con IVA o sin IVA lo decide el mercado del visitante, no el cliente que ha iniciado sesión. Y si tu tienda tiene el IVA incluido en el precio, el problema no es solo de pantalla, es de caja: la documentación de Shopify dice que un cliente marcado como exento con precios con IVA incluido sigue pagando el precio completo de la lista.

La forma nativa y fiable de que un mayorista vea precios netos es meter el precio neto en un catálogo B2B como precio fijo. Todo lo demás (metacampos, condiciones en el tema, apps de doble precio) cambia el número en pantalla sin cambiar lo que se cobra, y eso se nota en el carrito.

> Los datos de plataforma de este artículo están comprobados en la documentación de Shopify el 27 de octubre de 2026. Los planes y los ajustes de impuestos se mueven cada pocos meses: si vas a decidir algo con esto, vuelve a mirarlo.

## Por qué "No cobrar impuestos" no cambia el precio que se ve

Porque es una regla de cobro. En la ubicación de la empresa, en **Manage tax settings**, el desplegable **Tax settings** te da tres opciones: *Collect tax*, *Don't collect tax* y *Collect tax unless exemptions apply*. Las tres describen qué hace Shopify al cobrar, no qué imprime la ficha de producto.

El escaparate se decide en otro sitio. La inclusión del IVA en el precio mostrado se configura por mercado, y la opción de ajustarlo automáticamente (**Dynamic tax display**, en los ajustes de impuestos del mercado) funciona por región: Shopify compara la tasa de tu dirección de tienda con la del país del visitante. No mira si el visitante es una empresa.

La prueba está en el propio Liquid. `shop.taxes_included` está deprecado, y la razón que da la documentación es exactamente esta: si los precios incluyen impuestos "depende del país del cliente". El sustituto es `cart.taxes_included`, que tampoco sabe nada de empresas.

Y aunque quisieras programarlo, el dato no está. El objeto `company_location` de Liquid expone `tax_registration_id`, `metafields`, `shipping_address`, `store_credit_account` y poco más. No hay ninguna propiedad que diga si esa ubicación cobra impuestos o no. Es el motivo por el que todas las soluciones del tema acaban necesitando un metacampo que marque la ubicación a mano.

## El aviso que cuesta dinero

Este es el párrafo por el que escribí el artículo. La documentación de Shopify sobre exenciones avisa de que, si marcas a un cliente como exento pero usas precios con IVA incluido, "el cliente seguirá pagando el precio completo del producto".

Traducido a una tienda española con el IVA incluido: un producto a 121 € con un 21 % de IVA, vendido a una empresa exenta, no pasa a 100 €. La línea de impuestos baja a cero y el total sigue en 121 €. Tu mayorista paga un 21 % más de lo que tú crees que le estás cobrando, y en la factura no hay IVA que justifique la diferencia.

Esto es lo que hace que el caso no se arregle con una exención. Una exención quita el impuesto; no convierte un precio bruto en un precio neto. Para eso hace falta otro precio.

## Las cuatro formas de que un mayorista vea el precio neto

Cada mecanismo cambia una cosa distinta, y el error habitual es elegir el que solo cambia la pantalla.

| Mecanismo | Qué cambia | Planes | Riesgo |
| --- | --- | --- | --- |
| Catálogo B2B con precios fijos netos | El precio real | Todos con B2B | Límite de catálogos |
| Mercado B2B con sus propios impuestos | El precio real | Todos con B2B | No separa por cliente dentro del mismo país |
| Metacampo y condición en el tema | Solo el número en pantalla | Todos | Se desalinea del carrito |
| App de doble precio | Solo el número, y a veces un descuento | Todos | Dependes de la app en el pago |

"Todos con B2B" son Basic, Grow, Advanced y Plus, los planes donde [Shopify B2B funciona sin pasar por Plus](/blog/shopify-b2b-sin-plus/). Las dos primeras filas cambian lo que se cobra; las dos últimas, no.

## Cómo se monta el catálogo con precios netos

Un [catálogo B2B](/glosario/catalogo-b2b/) admite dos formas de poner precio: un ajuste porcentual sobre todos los productos, o un precio fijo producto a producto. Y hay una regla que conviene tener clara antes de empezar: "una vez asignado un precio fijo, los ajustes globales del catálogo dejan de aplicarse".

Eso es justo lo que quieres aquí. El ajuste porcentual no te sirve, porque un 17,355 % de descuento para sacar el IVA de un precio con IVA incluido deja céntimos raros en media tienda. Lo que quieres es el neto exacto: divides tu precio de venta entre 1,21 y lo metes como precio fijo.

Después, la ubicación de la empresa sigue necesitando su ajuste fiscal (*Don't collect tax*, o *Collect tax unless exemptions apply* con la exención que corresponda), para que el pago no vuelva a tratar ese neto como un bruto. Los dos ajustes trabajan juntos: el catálogo pone el importe, la ubicación evita que el impuesto se extraiga de él.

No des el trabajo por cerrado sin un pedido de prueba. Haz uno con el comprador de la empresa, y mira dos números en la pantalla de pago: que el subtotal sea el neto y que la línea de impuestos esté a cero. Si el subtotal es el neto pero aparece un IVA encima, el ajuste de la ubicación no está donde crees.

Los límites del plan deciden hasta dónde llega esto. En Basic, Grow y Advanced puedes "asignar hasta 3 catálogos activos entre todos tus mercados B2B", y los catálogos se asignan a mercados B2B, no a empresas. Shopify Plus es el único plan con catálogos ilimitados y con asignación directa a una empresa o a una ubicación. Si tus tipos de IVA y tus tarifas de distribuidor se cruzan y te salen más de tres combinaciones, el límite llega antes que el presupuesto.

Y una trampa de las que se descubren tarde: si una empresa tiene varios catálogos con el mismo producto a precios distintos, Shopify muestra el más bajo. Un catálogo neto conviviendo con un catálogo de tarifa mayorista significa que el precio ganador es el neto, para todos los que tengan los dos.

## Si tu mayorista está en tu mismo país

Aquí es donde se acaba lo nativo, y conviene decirlo sin adornos. Un mercado B2B aparte resuelve bien el caso del distribuidor extranjero, porque el mercado ya cambia impuestos y moneda. Pero si tu tienda está en España y tu mayorista exento también, el visitante está en tu mercado local y el display de impuestos es el mismo para él que para un particular.

No es una interpretación mía. En el foro de desarrolladores de Shopify hay un hilo de julio de 2026, [una tienda italiana en el plan Grow](https://community.shopify.dev/t/title-b2b-company-location-with-dont-collect-tax-still-sees-tax-inclusive-prices-on-storefront-same-country-exemption-only-applied-at-checkout/35868), con este caso exacto: ubicación de empresa en *Don't collect tax*, mismo país, y precios con IVA en la ficha y en el carrito. La respuesta fue que no hay ajuste nativo, que Liquid no expone el dato de la ubicación y que el camino fiable es el catálogo con precios netos fijos. Sigue abierto como petición de producto.

## El apaño en el tema, y por qué no lo dejo solo

Si además del precio neto quieres que la ficha diga "+ IVA no incluido", eso sí va en el tema. Marcas la ubicación con un metacampo y lo lees:

```liquid
{% assign neto = false %}
{% if customer.b2b? and cart.taxes_included %}
  {% if customer.current_location.metafields.custom.sin_iva.value %}
    {% assign neto = true %}
  {% endif %}
{% endif %}

{% if neto %}
  {{ variant.price | times: 100 | divided_by: 121 | money }} <span class="precio__nota">+ IVA</span>
{% else %}
  {{ variant.price | money }}
{% endif %}
```

Funciona, y por eso es tentador quedarse ahí. No lo hagas: esos céntimos son un número pintado. El carrito, la pantalla de pago, el JSON-LD de la ficha y el feed de productos siguen con el precio bruto, y el comprador ve una cifra en la ficha y otra al pagar. Si vendes con [precios distintos por cliente](/preguntas/precio-distinto-por-cliente-en-shopify/), ese desajuste es el primer motivo de email.

Úsalo para lo que sirve: la etiqueta que acompaña a un precio que ya es neto de verdad. El mismo criterio que aplico al [portal B2B de Émolo](/proyectos/emolo-b2b/), donde el precio no es un precio escondido con CSS, es un precio que el servidor no envía si el visitante no es comprador de una empresa.

## Lo que no arregla ningún catálogo

Dos cosas se quedan fuera, y es mejor saberlo antes de prometer nada.

La validación del NIF-IVA sí la tienes: con Shopify Tax, una ubicación de empresa con dirección en la Unión Europea o el Reino Unido muestra el campo como número de IVA y Shopify lo valida al guardarlo. Lo que no decide Shopify es si esa operación va exenta. Eso es una decisión fiscal, y la toma tu asesor, no un desplegable.

Y el recargo de equivalencia no se resuelve con catálogos. Un catálogo pone importes; el recargo es un tipo que va en la factura. Si vendes a clientes en recargo, mira primero cómo factura tu tienda y luego qué precio le enseñas.
