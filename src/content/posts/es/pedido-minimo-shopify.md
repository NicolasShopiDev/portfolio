---
pair: pedido-minimo-shopify
title: 'Pedido mínimo en Shopify: cómo exigirlo en cualquier plan sin perder ventas'
seoTitle: 'Pedido mínimo en Shopify: cómo ponerlo en cualquier plan (2026)'
description: 'Desde abril de 2026 puedes fijar un importe mínimo de pedido en Basic, Grow y Advanced sin código. Cómo se configura, qué no cubre y cuándo hace falta una Function.'
keyword: 'pedido mínimo shopify'
date: '2026-10-23'
tags: ['Checkout', 'Shopify B2B', 'Shopify Functions']
related: ['shopify-b2b-sin-plus']
faq:
  - q: '¿Se puede poner un pedido mínimo en Shopify sin Plus?'
    a: 'Sí. Desde el 13 de abril de 2026, la validación de límite de pedido de Checkout Blocks funciona en Basic, Grow, Advanced y Plus. Fijas un subtotal mínimo, y si quieres un máximo, para todos los clientes o solo para empresas B2B, y el checkout no deja pagar fuera de ese rango.'
  - q: '¿Puedo poner un pedido mínimo distinto para cada cliente mayorista?'
    a: 'Con Checkout Blocks no, porque su configuración solo distingue entre todos los clientes y empresas B2B. Un mínimo por empresa necesita una Function de validación que lea el importe de un metacampo de la empresa, y una Function a medida exige Shopify Plus. Sin Plus, la alternativa es una app pública que valide en el checkout.'
  - q: '¿El pedido mínimo de Shopify cuenta unidades o importe?'
    a: 'Depende del mecanismo. Checkout Blocks controla el importe del subtotal. Las reglas de cantidad de los catálogos B2B controlan unidades por variante (mínimo, máximo y múltiplo) y no suman variantes distintas para llegar al mínimo.'
  - q: '¿Shop Pay o el pago exprés se saltan el pedido mínimo?'
    a: 'La validación de Checkout Blocks se aplica a todos los métodos de pago, incluidos Shop Pay y los pagos acelerados. Lo que sí se saltan es un bloqueo hecho solo en el tema, porque el botón de compra rápida de la ficha de producto va directo al checkout sin pasar por el carrito.'
  - q: '¿Es mejor un pedido mínimo o cobrar más envío a los pedidos pequeños?'
    a: 'En B2B el mínimo suele formar parte de las condiciones comerciales y tiene sentido bloquear el pago. En B2C, una tarifa de envío más alta por debajo de cierto importe cubre el coste del pedido pequeño sin perder la venta, y se configura en todos los planes con las condiciones de precio de las tarifas de envío.'
cta:
  heading: '¿Tu mínimo cambia según el cliente?'
  text: 'Escribo validaciones de carrito y checkout para tiendas B2B: mínimos por empresa, por mercado o por piezas mezclando tallas. Cuéntame cómo calculas tus mínimos y te digo si te basta con Checkout Blocks o necesitas una Function.'
  label: 'Cuéntame tu caso'
---

Sí, y desde el 13 de abril de 2026 sin Shopify Plus y sin escribir código. Checkout Blocks, la app de checkout de la propia Shopify, tiene una validación de **límite de pedido** que bloquea el pago cuando el subtotal no llega a un importe, y funciona en Basic, Grow, Advanced y Plus.

Si lo buscaste el año pasado y la respuesta era "solo con Plus o con una app de terceros", era verdad: la función salió en abril de 2025 únicamente para Plus. Ahora llega a todos los planes que tienen B2B.

Tiene un límite: Checkout Blocks te deja un mínimo para todo el mundo o uno para las empresas B2B, y ahí se acaban las opciones. Si tu mínimo cambia según el distribuidor, el país o lo que lleva el carrito, necesitas otra cosa, y esa otra cosa depende de tu plan.

> Los datos de este artículo están comprobados en la documentación y el registro de cambios de Shopify el 23 de octubre de 2026. Shopify mueve sus planes cada pocos meses: si vas a decidir algo con esto, vuelve a mirarlo.

## Las cuatro formas de poner un mínimo en Shopify

Hay cuatro mecanismos y cada uno controla una cosa distinta. El error más habitual es pedir "un pedido mínimo" y configurar el que no toca.

| Mecanismo | Qué controla | Planes | Pago exprés |
| --- | --- | --- | --- |
| Checkout Blocks | Importe del pedido | Todos con B2B | Bloqueado |
| Reglas de cantidad | Unidades por variante | Todos con B2B | Bloqueado |
| Function de validación | Lo que programes | Plus, o app pública | Bloqueado |
| Script en el tema | Solo el carrito | Todos | Se lo salta |

"Todos con B2B" son Basic, Grow, Advanced y Plus. La última fila es la más fácil de montar y la única que no impide nada: un script en el carrito que desactiva el botón de pagar mientras no llegas al mínimo. Sirve para avisar. El botón de compra rápida de la ficha de producto (Shop Pay, Apple Pay, Google Pay) va directo al checkout sin pasar por el carrito, y un enlace de checkout guardado o compartido también.

## Cómo se configura en Checkout Blocks

Seis pasos desde el admin:

1. Ve a **Apps > Checkout Blocks**. Si no la tienes, se instala desde el App Store.
2. Entra en **Functions** y pulsa **Create function**.
3. En **Validation**, elige **Order limit validation**.
4. En **Assign to**, elige todos los clientes o solo empresas B2B.
5. En **Set order limits**, escribe el subtotal mínimo y, si quieres, el máximo.
6. Guarda.

El séptimo paso es el que se olvida: la función se guarda **inactiva**. Hasta que cambias el estado a *Active* y vuelves a guardar, no bloquea ningún pedido. Haz un pedido de prueba por debajo del mínimo antes de dar el trabajo por cerrado.

Tres detalles de la documentación que cambian cómo lo explicas al equipo comercial:

- El límite se mide sobre el **subtotal antes de tarjetas regalo y crédito de tienda**. Un cliente con un subtotal de 300 € y una tarjeta regalo de 50 € paga 250 € y, para Shopify, cumple un mínimo de 300.
- Se aplica a **todos los métodos de pago**, incluidos Shop Pay, los pagos acelerados y Shop Cash.
- El importe se escribe en la moneda de la tienda y Shopify lo **convierte** a la moneda local del comprador. No hay un campo por mercado, así que 300 € en España y 1.000 € para exportación ya no caben aquí.

## Lo que Checkout Blocks no cubre

La configuración tiene dos opciones de alcance: todos los clientes o empresas B2B. Con eso quedan fuera los mínimos que más se piden en un portal mayorista:

- **Un mínimo por empresa.** El distribuidor a 1.000 € y la tienda de barrio a 300 €.
- **Un mínimo por mercado o por ubicación.** Más alto para exportación, por ejemplo, porque el porte cuesta más.
- **Un mínimo que solo cuente ciertos productos.** Que las muestras o el expositor no sumen para llegar.
- **Un mínimo de piezas mezclando variantes.** "Mínimo 12 piezas, combinando tallas y colores."

El último es el más frecuente en moda y complementos, y el que más sorprende. Las [reglas de cantidad](/glosario/reglas-de-cantidad/) del catálogo parecen hechas para eso, pero la documentación es clara: una regla puesta en una variante no se aplica a las demás, y el comprador no puede mezclar variantes para llegar a un mínimo o a un múltiplo. Doce camisetas en tres tallas son tres líneas de cuatro, y ninguna llega a doce.

## Cuando el mínimo depende del cliente

Con Plus, es una Function de validación de carrito y checkout escrita para tu tienda. El importe de cada empresa vive en un metacampo de la empresa (`custom.pedido_minimo`), la Function lo lee y lo compara con el subtotal. La consulta de entrada pide solo eso:

```graphql
query CartValidationsGenerateRunInput {
  buyerJourney {
    step
  }
  cart {
    cost {
      subtotalAmount {
        amount
      }
    }
    buyerIdentity {
      purchasingCompany {
        company {
          metafield(namespace: "custom", key: "pedido_minimo") {
            value
          }
        }
      }
    }
  }
}
```

Y la función son veinte líneas:

```js
const NO_CHANGES = { operations: [] };

export function cartValidationsGenerateRun(input) {
  // Solo en el checkout: al añadir al carrito, la primera línea siempre está por debajo.
  const step = input.buyerJourney.step;
  if (step !== "CHECKOUT_INTERACTION" && step !== "CHECKOUT_COMPLETION") return NO_CHANGES;

  const company = input.cart.buyerIdentity?.purchasingCompany?.company;
  const minimo = Number(company?.metafield?.value);
  if (!minimo) return NO_CHANGES; // Sin empresa o sin mínimo: no se bloquea.

  const subtotal = Number(input.cart.cost.subtotalAmount.amount);
  if (subtotal >= minimo) return NO_CHANGES;

  const faltan = (minimo - subtotal).toFixed(2);
  return {
    operations: [{
      validationAdd: {
        errors: [{ message: `Tu pedido mínimo es de ${minimo} €. Te faltan ${faltan} €.`, target: "$.cart" }],
      },
    }],
  };
}
```

Dos decisiones de esa función que conviene entender antes de copiarla:

- **El filtro de `step`.** La validación también se ejecuta cuando el comprador añade productos al carrito, y un error en ese momento rechaza la acción. Sin el filtro, el primer producto que alguien intenta añadir está por debajo del mínimo y no entra nunca. La validación por cajas del [Checkout Lab](/#lab) de la portada lleva el mismo filtro por el mismo motivo, con un mínimo fijo para B2B; el código, con sus pruebas, está en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).
- **La moneda.** `subtotalAmount` llega en la moneda del carrito y el metacampo es un número sin moneda. Si una empresa compra en libras, su mínimo se guarda en libras.

Sin Plus, esta Function no se puede instalar. La regla es la misma que expliqué en [Shopify B2B sin Plus](/blog/shopify-b2b-sin-plus/): solo las tiendas Plus pueden usar apps personalizadas que contengan Functions. Lo que sí funciona en cualquier plan es una app pública del App Store que lleve funciones dentro. Antes de instalarla, pregunta una cosa: si valida en el checkout o solo esconde el botón del carrito. Si es lo segundo, es la cuarta fila de la tabla.

## Avisar en el carrito antes de que bloquee el checkout

La validación impide el pedido, pero llega tarde: el comprador ya ha pulsado "pagar". Para no perder la venta, el carrito tiene que decir cuánto falta antes de que lo intente:

```liquid
{%- assign minimo = settings.pedido_minimo | times: 100 -%}
{%- if customer.b2b? and minimo > 0 and cart.items_subtotal_price < minimo -%}
  {%- assign faltan = minimo | minus: cart.items_subtotal_price -%}
  <p class="cart-minimo" role="status">
    Pedido mínimo: {{ minimo | money }}. Te faltan {{ faltan | money }}.
  </p>
{%- endif -%}
```

`settings.pedido_minimo` es un ajuste de tipo `number` en `settings_schema.json`, en euros; Liquid trabaja en céntimos, de ahí el `times: 100`. Si el mínimo es para todos los clientes, quita `customer.b2b?`. Y tres detalles que deciden si el aviso es fiable:

- **El subtotal correcto.** Usa `cart.items_subtotal_price`, que descuenta los descuentos de línea y no los de pedido, igual que el `subtotalAmount` que lee una Function. `cart.total_price` ya resta los descuentos de pedido: con un mínimo de 300 €, un carrito de 310 € y un código del 10 %, el carrito diría que faltan 21 € en un pedido que el checkout deja pasar. La documentación de Checkout Blocks dice "subtotal" sin más detalle, así que, si usas códigos de descuento de pedido, haz una compra de prueba con uno.
- **Dentro de la sección que ya se repinta.** En Dawn y en la mayoría de temas actuales, el cajón del carrito se vuelve a pintar con la Section Rendering API cada vez que cambia una cantidad. Si el aviso está dentro de esa sección, se actualiza solo y no hace falta JavaScript.
- **El importe vive en dos sitios.** No he encontrado forma de leer desde Liquid el importe que configuras en Checkout Blocks, así que acaba duplicado en la app y en el ajuste del tema. Apúntalo donde documentas las tarifas, porque el día que se suba el mínimo alguien cambiará uno de los dos y no el otro.

Si quieres, desactiva el botón de pagar mientras no se llegue, con el aviso al lado. Un botón gris sin explicación acaba en una llamada al comercial preguntando por qué no puede pagar.

Un aviso en euros no sirve si el comprador ve otra moneda: el filtro `money` da formato al número, no lo convierte. En un portal B2B que solo vende en euros no hay nada que hacer; en uno multimoneda, el umbral del tema tiene que convertirse o limitarse al mercado principal.

## En B2C, piénsatelo dos veces

Un mínimo duro en una tienda de consumo hace que se vaya quien quería gastar 18 €. Si el motivo es lo que te cuesta enviar un pedido pequeño, hay una opción nativa en todos los planes: tarifas de envío con condición de precio. Pedidos de menos de 40 € pagan 5,95 € de envío y a partir de 40 € es gratis. El comprador decide si añade algo o paga el porte, y la venta no se pierde.

Lo que conviene quitar es el apaño de antes: ofrecer tarifas de envío solo por encima del mínimo. Por debajo, el checkout no encuentra ningún método de envío y el comprador entiende que no envías a su dirección. Con la validación de Checkout Blocks disponible en todos los planes, ese apaño ya no tiene motivo para seguir ahí.

## Por dónde empezar

1. Escribe tu regla tal como la dirías por teléfono: "300 € para todos los mayoristas", "12 piezas mezclando tallas", "1.000 € a distribuidores de exportación".
2. Si es un importe para todo el mundo o para todo el B2B, Checkout Blocks, en cualquier plan. Se configura en minutos; lo que lleva tiempo es probarlo.
3. Si son unidades de una misma variante, reglas de cantidad en el catálogo.
4. Si depende de la empresa, del mercado o de qué productos lleva el carrito, una Function a medida con Plus, o una app pública que valide en el checkout sin Plus.
5. En todos los casos, el aviso en el carrito con lo que falta.

Las fuentes de Shopify: [límites de importe en Checkout Blocks](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/order-value-limits), el [anuncio del 13 de abril de 2026](https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans), las [reglas de cantidad de los catálogos](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing), la [API de validación de carrito y checkout](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) y la [disponibilidad de Functions por plan](https://shopify.dev/docs/apps/build/functions).
