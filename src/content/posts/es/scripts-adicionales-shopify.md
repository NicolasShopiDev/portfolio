---
pair: scripts-adicionales-shopify
title: 'Scripts adicionales en Shopify: por qué dejaste de registrar conversiones y cómo recuperarlas'
seoTitle: 'Scripts adicionales en Shopify: recupera tus conversiones (2026)'
description: 'Desde el 26 de agosto de 2026 los scripts adicionales no se ejecutan en la página de gracias. Cómo pasarlos a píxeles, con código, y por qué ves menos compras.'
keyword: 'scripts adicionales shopify'
date: '2026-11-03'
tags: ['Checkout', 'Píxeles', 'Analítica']
related: ['auditar-javascript-apps-shopify']
faq:
  - q: '¿Por qué Shopify ya no ejecuta mis scripts adicionales?'
    a: 'Porque las páginas de agradecimiento y de estado del pedido se han cambiado por una versión nueva que no los admite. La fecha límite para las tiendas sin Plus fue el 26 de agosto de 2026, y la sección de scripts adicionales es de solo lectura desde el 28 de agosto de 2025. El seguimiento se pasa a píxeles y el contenido visible, a bloques del editor de checkout.'
  - q: '¿Qué sustituye a los scripts adicionales para medir compras?'
    a: 'Un píxel. Si la plataforma tiene app oficial con píxel, como Google & YouTube o Facebook & Instagram, se conecta desde la app. Si no la tiene, se escribe un píxel personalizado en Configuración > Eventos de cliente que escuche el evento checkout_completed y mande la compra a la plataforma.'
  - q: '¿Por qué registro menos compras con píxeles que con los scripts antiguos?'
    a: 'En los mercados que exigen consentimiento, como la Unión Europea, los píxeles solo se ejecutan si el visitante ha aceptado las cookies que pide su configuración, y los scripts adicionales normalmente no lo comprobaban. La propia ayuda de Shopify avisa de esa bajada. Parte de la diferencia son compras que antes se medían sin permiso.'
  - q: '¿El evento checkout_completed se dispara cada vez que el cliente abre la página del pedido?'
    a: 'No. Se dispara una vez por checkout, normalmente en la página de agradecimiento, así que ya no hace falta el truco de first_time_accessed para no contar dos veces. Si tienes ofertas posteriores a la compra, se dispara en la primera página de oferta y no en la de agradecimiento.'
  - q: '¿Puedo volver a activar un script adicional?'
    a: 'No, una vez que las páginas se han actualizado. La ayuda de Shopify dice que solo se puede reactivar un script mientras la actualización no se ha completado. Lo que sí puedes hacer es leer su contenido para rehacerlo como píxel.'
cta:
  heading: '¿Tus conversiones cayeron a finales de agosto?'
  text: 'Reviso el seguimiento de tiendas Shopify después de la actualización: qué script hacía qué, qué píxel lo sustituye, qué se cuenta dos veces y qué número es el de verdad. Cuéntame qué plataformas usas y te digo qué se puede recuperar.'
  label: 'Cuéntame tu caso'
---

Porque desde el 26 de agosto de 2026 las tiendas sin Shopify Plus tienen la nueva página de agradecimiento y la nueva página de estado del pedido, y en ellas el código de **Scripts adicionales** ya no se ejecuta. Si tus conversiones de Google Ads, Meta o de un programa de afiliados bajaron de golpe a finales de agosto, lo más probable es que sea esto.

Se arregla script por script: lo que medía compras pasa a un píxel, de app o personalizado, y lo que pintaba algo en la página pasa a un bloque del editor de checkout. Y conviene saber desde el principio que, aunque lo hagas bien, en España vas a ver menos compras que antes. Es lo esperable, y abajo está por qué.

> Los datos de este artículo están comprobados en el centro de ayuda y la documentación para desarrolladores de Shopify en noviembre de 2026. Las rutas del panel salen de la ayuda de Shopify en español, no de un recorrido por un panel real: si alguna etiqueta no coincide con lo que ves, manda lo que ves.

## Qué cambió y cuándo

Shopify ha ido sustituyendo `checkout.liquid` y todo lo que colgaba de él por [Checkout Extensibility](/glosario/checkout-extensibility/). El último trozo eran las páginas que ve el comprador después de pagar, y llevaba dos fechas:

| Fecha | Qué pasó |
| --- | --- |
| 28 de agosto de 2025 | Scripts adicionales pasa a ser de solo lectura, en todos los planes |
| 28 de agosto de 2025 | Fecha límite de las tiendas Plus para actualizar |
| 26 de agosto de 2026 | Fecha límite de las tiendas sin Plus |

Lo que se rompió es lo que vivía en Scripts adicionales: la etiqueta de conversión de Google Ads pegada a mano, el `fbq('track', 'Purchase')`, el píxel de afiliados, la encuesta de "¿cómo nos conociste?". La página nueva no lo carga.

Para ver qué había, Shopify generó en cada tienda una **Guía de actualización**, en **Configuración > Checkout**, que clasifica los scripts por propósito (seguimiento e informes, personalizaciones de página), propone una app para sustituir cada uno cuando encuentra coincidencia y deja abrir cada script con **Ver script**. Lo que ya no se puede es reactivarlo: la ayuda dice que solo se puede volver a activar mientras las páginas no han completado la actualización.

No he encontrado en la ayuda de Shopify si el contenido se sigue pudiendo leer una vez actualizada la tienda. Si ya no lo ves, el fragmento original está en la cuenta de cada plataforma (Google Ads, el panel del programa de afiliados), que es de donde salió.

## Qué hacía cada script y qué lo sustituye

Antes de escribir código, copia el contenido de cada script a un documento y ponle al lado qué hacía. Suelen salir cuatro tipos:

| Lo que había en el script | Lo que lo sustituye |
| --- | --- |
| Conversión de Google Ads o GA4 | Píxel de la app Google & YouTube |
| `fbq('track', 'Purchase')` de Meta | Píxel de la app Facebook & Instagram |
| Píxel de afiliados, CRM o una plataforma sin app | Píxel personalizado |
| Texto, encuesta o enlace visible en la página | Bloque de una app en el editor de checkout |

Las dos primeras filas son las más comunes y las que menos trabajo dan: la app oficial ya escucha la compra y la manda con su píxel. Si tenías la app y además el script, probablemente contabas cada compra dos veces; la ayuda de Shopify avisa de esos duplicados.

Mira también la pestaña de píxeles personalizados antes de crear uno. En febrero de 2025, Shopify [convirtió en píxeles personalizados](https://help.shopify.com/en/manual/promoting-marketing/pixels/pixel-migration) las etiquetas de Meta y de Google Analytics que estaban en las preferencias de la tienda online sin pasar por su app. En muchas tiendas siguen ahí, conectados, al lado del píxel de la app.

La tercera fila es la que da trabajo. Es el caso del programa de afiliados que te pasó un fragmento de HTML con `{{ checkout.order_id }}` dentro, o del Google Ads que gestiona una agencia con su propia acción de conversión y que nadie quiso tocar con la app.

## El píxel personalizado que sustituye a un script de conversión

Un píxel personalizado se crea en **Configuración > Eventos de cliente** (en la ayuda de Shopify aparece como *Customer events*), en la pestaña de píxeles personalizados. Se le da un nombre, se pega el código y se conecta. No lleva HTML ni Liquid: solo JavaScript, y los datos de la compra llegan en el evento.

Este es el equivalente a la etiqueta de conversión de Google Ads que había en Scripts adicionales:

```js
// Conversión de compra de Google Ads, en un píxel personalizado de Shopify.
const AW_ID = 'AW-123456789';        // ID de conversión de tu cuenta
const AW_LABEL = 'AbCdEfGhIjKlMnOp'; // etiqueta de la acción de compra

const script = document.createElement('script');
script.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;
script.async = true;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', AW_ID);

analytics.subscribe('checkout_completed', (event) => {
  const checkout = event.data.checkout;
  gtag('event', 'conversion', {
    send_to: `${AW_ID}/${AW_LABEL}`,
    value: Number(checkout.subtotalPrice?.amount ?? 0),
    currency: checkout.currencyCode,
    transaction_id: checkout.order?.id ?? checkout.token,
  });
});
```

Tres cosas de ese código que no se ven a simple vista y que deciden si los números cuadran:

- **El importe.** Uso `subtotalPrice`, sin envío ni impuestos, porque es lo que mandaban muchos de esos scripts (`checkout.subtotal_price`). Si el tuyo mandaba el total, cambia a `totalPrice`. Tiene que ser **el mismo** que antes: si pasas de subtotal a total el día que migras, el valor de conversión sube y parece que la campaña ha mejorado.
- **El identificador de la transacción.** `checkout.order.id` es el identificador interno del pedido, no el número que ves en el admin (#1001). Sirve para que Google no cuente dos veces la misma compra. Si tu programa de afiliados necesita el número de pedido, el evento no lo trae y hay que hablar con ellos.
- **Ya no hace falta `first_time_accessed`.** Era el truco de Liquid para no disparar la conversión cada vez que el cliente volvía a abrir la página de su pedido. `checkout_completed` se dispara **una vez por checkout**, según la [documentación del evento](https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed). Con una excepción: si usas ofertas después de la compra, se dispara en la primera página de oferta y no en la de agradecimiento.

## Lo que el sandbox no deja hacer

Los píxeles personalizados corren aislados, en un iframe que Shopify llama *Lax sandbox*; por eso un píxel no puede secuestrar un botón, como conté en [cómo auditar el JavaScript que meten las apps](/blog/auditar-javascript-apps-shopify/). Para medir conversiones tiene tres consecuencias:

- **No ve la página.** No puede leer el DOM, así que lo que el script antiguo sacaba de la página tiene que salir de `event.data`.
- **No pinta nada.** Ni banners, ni encuestas, ni botones. Eso va con bloques.
- **La URL no es la tuya.** La [ayuda de Shopify](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview) avisa de que la URL que detectan los scripts dentro del sandbox es la del propio sandbox. Si una herramienta de analítica registra la página por su cuenta, guarda una dirección rara. La URL real llega en el evento, en `event.context.document.location.href`, y es la que hay que pasarle a mano.

## Por qué ves menos compras aunque todo funcione

Hay dos motivos, y ninguno se ve en el código.

**El consentimiento.** En los mercados que exigen consentimiento, que son el Espacio Económico Europeo y el Reino Unido, un píxel solo se ejecuta si el visitante ha dado los permisos que pide su configuración. Por defecto, un píxel personalizado nuevo pide los de marketing y analítica. La propia [ayuda de Shopify sobre la migración](https://help.shopify.com/es/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/additional-scripts) avisa de que verás menos eventos, porque en los scripts adicionales el consentimiento a menudo no estaba bien configurado.

En una tienda española, eso significa que una parte de la "caída" son compras de gente que rechazó las cookies y que antes se medían igual. Si tu banner tiene el botón de rechazar a la vista, esa parte puede ser grande. No lo arregles quitando el permiso al píxel: habla con quien lleve tu cumplimiento y, si hace falta, usa el modo de consentimiento de la plataforma para modelar lo que falta.

**El dominio de la página de estado del pedido.** Esa página vive con las cuentas de cliente, y la ayuda de Shopify dice que, si tu tienda usa un dominio propio, las cuentas de cliente tienen que estar en un subdominio de ese mismo dominio (por ejemplo, `cuenta.tutienda.com`). Si no, los píxeles y el consentimiento de cookies no funcionan en esa página, porque el consentimiento se guardó en otro dominio.

## Cómo comprobarlo antes de dar el trabajo por cerrado

1. En **Configuración > Eventos de cliente**, abre el píxel y pulsa **Test**. Se abre la tienda con el *Shopify Pixel Helper*, que enseña en tiempo real qué eventos recibe el píxel. Si dice que el píxel espera consentimiento, acepta las cookies del banner o usa el botón para dar el consentimiento de prueba.
2. Haz un pedido de prueba completo y busca `checkout_completed` en el Pixel Helper.
3. Comprueba en la plataforma que la conversión ha llegado, con su importe y su moneda. Google Ads tarda unas horas en enseñarla.
4. Repite la compra en una ventana privada **rechazando las cookies**. No debería llegar nada. Si llega, el píxel no respeta el consentimiento y el problema es otro.

Para depurar, un píxel que solo escribe en consola lo que recibe ahorra mucho tiempo:

```js
analytics.subscribe('checkout_completed', (event) => {
  console.log('checkout_completed', event.data.checkout);
});
```

## Lo que pintaba algo en la página

Si el script mostraba un mensaje, una encuesta o un enlace, el sustituto es un bloque en el editor de checkout y cuentas. Según la [documentación de Shopify](https://shopify.dev/docs/apps/build/checkout/technologies), las extensiones de las páginas de agradecimiento y de estado del pedido están en todos los planes menos Starter, a diferencia de las de los pasos de información, envío y pago, que son solo de Plus. La Guía de actualización recomienda una app para cada personalización que reconoce.

Si lo que necesitas es muy tuyo, como un enlace a la factura de tu programa de facturación, es una extensión de checkout. Qué cambia entre comprarla hecha y escribirla para tu tienda está en [¿puedo personalizar el checkout de Shopify?](/preguntas/puedo-personalizar-el-checkout-de-shopify/).

## Por dónde empezar

1. Abre la Guía de actualización y copia cada script a un documento, con una línea de qué hacía.
2. Para cada plataforma con app oficial, conecta el píxel de la app y nada más.
3. Para el resto, un píxel personalizado por plataforma que escuche `checkout_completed`, mandando el mismo importe que mandaba el script.
4. Prueba con el Pixel Helper, con cookies aceptadas y con cookies rechazadas.
5. Mira el dominio de tus cuentas de cliente.
6. Apunta la fecha del cambio: cuando alguien compare septiembre con julio, explica la diferencia.

Las fuentes de Shopify: la [guía de actualización sin Plus](https://help.shopify.com/es/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/upgrade-guide), la [sustitución de scripts adicionales](https://help.shopify.com/es/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/additional-scripts), el [código de un píxel personalizado](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/code), las [pruebas con el Pixel Helper](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/testing) y el [evento checkout_completed](https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed).
