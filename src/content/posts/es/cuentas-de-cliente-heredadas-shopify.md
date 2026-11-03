---
pair: cuentas-de-cliente-heredadas-shopify
title: 'Cuentas de cliente heredadas en Shopify: qué se rompe al actualizar y cómo prepararlo'
seoTitle: 'Cuentas de cliente heredadas en Shopify: qué se rompe (2026)'
description: 'Shopify dejó obsoletas las cuentas de cliente heredadas en febrero de 2026. Qué se rompe al actualizar, cómo encontrarlo en tu tema y la trampa de cambiar de tema.'
keyword: 'cuentas de cliente heredadas shopify'
date: '2026-11-03'
tags: ['Cuentas de cliente', 'Temas', 'Apps']
related: ['shopify-b2b-sin-plus', 'scripts-adicionales-shopify']
faq:
  - q: '¿Shopify va a eliminar las cuentas de cliente heredadas?'
    a: 'Sí. Están obsoletas desde el 26 de febrero de 2026: no se pueden activar en tiendas nuevas, no reciben novedades y Shopify ya no da soporte técnico sobre ellas. Shopify dijo que anunciaría la fecha final de cierre a lo largo de 2026, y a 3 de noviembre de 2026 todavía no la ha publicado.'
  - q: '¿Mis clientes pierden su cuenta o sus pedidos al actualizar?'
    a: 'No. En las cuentas nuevas, cualquier cliente con perfil en el panel ya tiene cuenta: entra con su correo y un código de 6 dígitos y ve sus pedidos. Lo que se pierde es lo que hubieras construido en las plantillas Liquid de las cuentas heredadas, que dejan de usarse.'
  - q: '¿Qué pasa con las contraseñas de mis clientes?'
    a: 'Dejan de usarse. Las cuentas nuevas no tienen contraseña: el cliente recibe un código de un solo uso en su correo, y además puede entrar con Shop, Google o Facebook si los activas. Si alguien entra con un correo que no tenías, Shopify le crea el perfil automáticamente.'
  - q: '¿Puedo volver a las cuentas heredadas si algo sale mal?'
    a: 'Durante 30 días. La ayuda de Shopify permite revertir el cambio en ese plazo, pero eso devuelve el ajuste, no lo que hayan hecho los clientes mientras tanto. Lo seguro es probar la configuración nueva antes de publicarla, que el propio proceso de actualización permite.'
  - q: '¿Necesito Shopify Plus para personalizar las cuentas nuevas?'
    a: 'Para la mayoría de cosas, no: las apps públicas con extensiones para cuentas de cliente funcionan desde el plan Basic. Plus hace falta para conectar tu propio proveedor de identidad, mantener Multipass y mostrar bloques del perfil solo a clientes B2B.'
cta:
  heading: '¿Tu área de cliente está hecha en Liquid?'
  text: 'Reviso temas con cuentas heredadas antes de actualizar: qué plantillas, formularios, apps y automatizaciones dependen de ellas, y con qué se rehace cada cosa en las cuentas nuevas. Cuéntame qué tiene hoy tu área de cliente y te digo qué se mueve solo y qué hay que rehacer.'
  label: 'Cuéntame tu caso'
---

Sí, hay que cambiarse, aunque todavía no hay fecha. Shopify dejó obsoletas las cuentas de cliente heredadas el 26 de febrero de 2026, ha dejado de darles soporte y dijo que anunciaría la fecha final a lo largo del año. A 3 de noviembre de 2026 esa fecha no está publicada, así que el cambio lo decides tú, y es mejor así que con prisas.

Lo que se rompe al actualizar es todo lo que estaba construido sobre las plantillas Liquid de la cuenta: un área de cliente a medida, un formulario de alta propio, una app que inyectaba su botón en la página de pedidos. Los clientes, sus pedidos y sus direcciones pasan sin hacer nada.

Y hay una forma de actualizar sin querer, que conviene conocer antes de cambiar de tema.

> Los datos de este artículo están comprobados en el centro de ayuda y el registro de cambios de Shopify en noviembre de 2026. Las rutas del panel salen de la ayuda de Shopify en español, no de un recorrido por un panel real: si alguna etiqueta no coincide con lo que ves, manda lo que ves.

## Cómo sabes si estás en las heredadas

En **Configuración > Cuentas de cliente**. Si tu tienda sigue en las heredadas, verás un aviso que dice *Estás usando cuentas de cliente heredadas*, con un botón **Ayuda para actualizar** que abre el asistente de Sidekick.

Otra pista sin entrar en el panel: si el enlace de "Mi cuenta" lleva a una página de tu tienda con un formulario de correo y contraseña, estás en las heredadas. Las cuentas nuevas no tienen contraseña. Según el [aviso para desarrolladores](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated) de febrero, más del 70 % de las tiendas ya usan las nuevas.

## La trampa de cambiar de tema

Está en ese mismo aviso de Shopify: una tienda que está en cuentas heredadas y **cambia a un tema que no trae los archivos de las cuentas heredadas se actualiza automáticamente** a las cuentas nuevas. Shopify pide además a quien hace temas que deje de incluir esos archivos.

En la práctica: si estás preparando un rediseño sobre un tema nuevo, la actualización de las cuentas llega el día que publicas el tema, mezclada con todo lo demás. Si algo falla ese día, no vas a saber si es el tema o las cuentas.

Antes de publicar un tema nuevo, mira si tiene la carpeta `templates/customers/`. Si no la tiene, haz primero la actualización de las cuentas, con el tema de siempre, y deja el rediseño para después.

## Qué pasa con tus clientes

Nada que tengas que migrar. La [ayuda de Shopify](https://help.shopify.com/es/manual/customers/customer-accounts) lo resume en una frase: si el cliente tiene un perfil en el panel, ya tiene cuenta.

- **Entra con un código.** Escribe su correo y recibe un código de 6 dígitos de un solo uso. No hay contraseña, así que tampoco hay que restablecer ninguna.
- **O con Shop, Google o Facebook**, si los activas.
- **La sesión dura hasta 365 días.** El cliente que repite no tiene que volver a entrar.
- **Un correo nuevo crea un perfil nuevo.** Si alguien entra con una dirección que no tenías, Shopify le crea el perfil en ese momento. No existe un "registro" separado del inicio de sesión.

Ese último punto es el que más cambia en tiendas que aprobaban a mano las altas, por ejemplo de profesionales: ya no hay un formulario de registro que cree una cuenta pendiente de revisar. Quien quiera entrar, entra.

## Lo que se rompe

La [guía de actualización](https://help.shopify.com/es/manual/customers/customer-accounts/upgrade) y el foro de Shopify dejan esta lista de lo que cambia:

| Lo que tienes hoy | Qué pasa al actualizar |
| --- | --- |
| Plantillas `customers/*` personalizadas | Dejan de usarse: `/account` redirige a las cuentas nuevas |
| Inicio de sesión o registro en un modal | Hay que quitarlo del tema antes de actualizar |
| Formulario de alta con `create_customer` | Puede dar error en vez de crear la cuenta |
| App que inyecta su bloque en la página de cuenta | No aparece si la app no tiene extensión para cuentas |
| Flujo de Flow con *Cuenta de cliente activada* | Salta en el primer inicio de sesión, no al crear la cuenta |
| Flujo con *Cuenta de cliente desactivada* | No existe en las cuentas nuevas |
| Segmentos por estado `DISABLED`, `INVITED` o `DECLINED` | Esos clientes pasan a `ENABLED` al entrar |
| Un dominio por mercado | Las cuentas usan un solo dominio para todos los mercados |
| Multipass, en Plus | Sigue funcionando |
| Tienda headless con `customerAccessTokenCreate` | Esa mutación es solo para cuentas heredadas |

Las redirecciones salen solas: Shopify manda `/account/login` y el resto de rutas de la cuenta heredada a las cuentas nuevas, incluidos los enlaces escritos a mano en el tema. Lo que no redirige es lo que montaste fuera de esas rutas, como un inicio de sesión en un modal o una página de alta propia, y la guía pide quitarlos antes.

El formulario de alta es el que más guerra da. En el foro de Shopify hay [tiendas que, después de actualizar, ven el error *Customer account creation has been disabled*](https://community.shopify.com/t/customer-account-creation-has-been-disabled/591109) porque el tema seguía enviando el formulario de registro de siempre.

## Cómo encontrarlo todo en tu tema

Sidekick analiza el tema publicado y las apps instaladas, pero la propia ayuda dice que no revisa los flujos de Shopify Flow ni los segmentos, y que puede dejar archivos sin analizar. Antes de actualizar, prefiero tener la lista yo. Con [Shopify CLI](https://shopify.dev/docs/api/shopify-cli/theme/theme-pull):

```bash
shopify theme pull --store tutienda.myshopify.com --live --path tema-en-vivo
cd tema-en-vivo

# Las plantillas de la cuenta heredada que tiene el tema
ls templates/customers/

# Todo lo que depende de ellas fuera de esa carpeta
grep -rnE \
  -e "create_customer|customer_login|recover_customer_password" \
  -e "customer_address|account_register_url|customer\.has_account" \
  -e "/account/(login|register)" \
  --include=*.liquid --include=*.json .
```

Cada línea que sale es una decisión: se tira, la cubre la cuenta nueva o hay que rehacerla. Un tema reciente debería devolver las plantillas y poco más. Uno con años puede devolver modales de inicio de sesión, formularios de alta con campos extra en `customer[note]` y avisos de "crea tu cuenta" que dependían de `customer.has_account`.

## El cambio del 28 de octubre

Hay una novedad de la semana pasada que afecta justo a las tiendas que están actualizando. Desde el [28 de octubre de 2026](https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable), el primer inicio de sesión de un cliente en las cuentas nuevas lo marca como `ENABLED` y envía los webhooks `customers/enable` y `customers/update`, igual que la activación de las heredadas. Hasta ahora no pasaba.

Tiene dos consecuencias para la tienda:

- **`customer.has_account` cambia.** Antes devolvía `false` para estos clientes; ahora devuelve `true` después de su primer inicio de sesión. Si tu tema enseña un aviso de "crea tu cuenta" con esa condición, va a dejar de salir para gente que antes lo veía.
- **Los mensajes de bienvenida.** Una app que manda un correo de bienvenida o regala puntos al recibir `customers/enable` lo hará en el primer inicio de sesión. Quien compró como invitado nunca activó una cuenta heredada, así que sigue en `DISABLED`: si compró hace tres años y entra hoy para ver un pedido, puede recibir un "bienvenido a la tienda". Revísalo con la app antes de actualizar.

## Con qué se rehace lo que había en Liquid

En las cuentas nuevas no hay plantillas que editar. Las páginas se amplían con extensiones de interfaz para cuentas de cliente: en la página de pedidos, en el estado de un pedido, en el perfil o como página completa. Llegan dentro de apps, se colocan desde el editor de pantalla de pago y cuentas, y toman los colores y la tipografía que configures ahí.

Por plan, según la ayuda de Shopify:

- **Desde Basic**, apps públicas con extensiones para todas las páginas de la cuenta.
- **Advanced y Plus** para personalizar las cuentas por mercado.
- **Solo Plus**: conectar tu propio proveedor de identidad, Multipass y los bloques del perfil que solo ven los clientes B2B.

Si lo que necesitas es tuyo (un botón que repita el pedido con tus reglas, las facturas de tu programa de facturación), es una extensión escrita a medida, y la documentación no deja claro qué permite una app personalizada fuera de Plus. Antes de presupuestarla sin Plus, pruébala en una tienda de desarrollo. Es el trabajo que hago en [áreas de cliente](/servicios/cuentas-de-cliente/), sobre todo para portales mayoristas.

Y si vas a vender al por mayor, no hay elección: Shopify B2B no funciona con cuentas heredadas. Lo que entra en cada plan está en [Shopify B2B sin Plus](/blog/shopify-b2b-sin-plus/).

## Cómo hacer el cambio sin sustos

La guía de Shopify tiene nueve pasos. Estos son los que no me salto:

1. **Saca la lista de arriba** (tema, apps, Flow y segmentos) y decide qué se rehace.
2. **Duplica la configuración de pantalla de pago y cuentas** y trabaja en la copia. Así pruebas sin tocar lo publicado.
3. **Conecta un subdominio para las cuentas**, del tipo `cuenta.tutienda.com`. Afecta a la medición: si las cuentas no están en un subdominio de tu dominio, los píxeles y el consentimiento de cookies no funcionan en la página de estado del pedido. Lo conté en el artículo sobre [scripts adicionales y conversiones](/blog/scripts-adicionales-shopify/).
4. **Revisa el correo del remitente**, que es el que manda los códigos de acceso.
5. **Previsualiza y prueba** con un cliente real de la tienda: que entre con su código, vea sus pedidos y que cada app aparezca donde tiene que aparecer.
6. **Actualiza.** Durante 30 días puedes revertir. Tómalo como red, no como plan.

Lo que no recomiendo es esperar a la fecha final. Cuando Shopify la publique, la mitad de las tiendas que quedan se moverán a la vez, y la otra mitad lo hará el día que cambie de tema sin darse cuenta.

Las fuentes de Shopify: el [aviso de obsolescencia](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated), la [guía de actualización](https://help.shopify.com/es/manual/customers/customer-accounts/upgrade), las [cuentas de cliente](https://help.shopify.com/es/manual/customers/customer-accounts), el [cambio del 28 de octubre](https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable) y la [documentación de B2B sobre cuentas](https://help.shopify.com/en/manual/b2b/customer-login-and-accounts).
