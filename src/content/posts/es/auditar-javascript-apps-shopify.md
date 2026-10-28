---
pair: auditar-javascript-apps-shopify
title: 'Una app puede inyectarte JavaScript que no está en el tema: cómo auditarlo'
seoTitle: 'Checkout falso en Shopify: auditar el JavaScript de las apps'
description: 'El JavaScript del checkout falso de octubre no estaba en el tema: lo traía una app en caliente. Las cuatro puertas por las que entra código y cómo auditarlas.'
keyword: 'checkout falso shopify'
date: '2026-10-28'
tags: ['Seguridad', 'Apps', 'Temas', 'Checkout']
draft: true
faq:
  - q: '¿Han hackeado el checkout de Shopify?'
    a: 'No hay nada publicado que apunte al checkout de Shopify. Lo que describen los análisis del incidente de octubre de 2026 es código inyectado desde apps de terceros que interceptaba el clic en el botón de pagar y llevaba al comprador a una página de pago falsa en otro dominio antes de entrar en el checkout real.'
  - q: '¿Cómo compruebo si mi tienda Shopify lleva JavaScript que no he puesto yo?'
    a: 'Abre una ventana privada nueva con las DevTools y la pestaña Network abierta, recorre una ficha de producto y el carrito, y revisa qué dominios sirven JavaScript. En la consola, `performance.getEntriesByType("resource")` filtrado por scripts te da la lista de hosts, incluidos los que se inyectan en caliente y no aparecen en el HTML.'
  - q: '¿Desinstalar una app borra su código del tema?'
    a: 'No siempre. La documentación de Shopify avisa de que el código que una app inyecta en los archivos del tema puede quedarse después de desinstalarla, normalmente en `layout/theme.liquid` o en un snippet con el nombre de la app. Hay que buscarlo y quitarlo a mano.'
  - q: '¿Puede un píxel de Shopify secuestrar el botón de pagar?'
    a: 'No. Los píxeles web corren aislados, en un iframe con el atributo sandbox o en un web worker, y la documentación dice que no pueden pintar interfaz ni sacar datos leyendo el DOM. Las puertas que sí ejecutan código en la página son el tema, las incrustaciones de app y los script tags heredados.'
  - q: '¿Qué pasa el 1 de marzo de 2027 con los script tags?'
    a: 'Shopify deja de inyectarlos en el escaparate, así que el JavaScript que una app cargue por esa vía dejará de ejecutarse. Desde el 1 de octubre de 2026 ya no se pueden crear ni modificar. Si una app tuya depende de un script tag, tiene que mover su código a una incrustación de app o a un píxel antes de esa fecha.'
cta:
  heading: '¿Quieres saber qué carga tu tienda de verdad?'
  text: 'Audito lo que las apps ejecutan en una tienda Shopify: qué dominio sirve cada script, qué queda de apps desinstaladas y qué se puede quitar sin romper nada. Sale un informe con lo que carga hoy, lo que sobra y lo que se gana en velocidad al quitarlo.'
  label: 'Cuéntame tu caso'
---

Empieza por las incrustaciones de app del tema, no por los archivos. El JavaScript que en octubre de 2026 desvió el pago de varias tiendas Shopify a una página falsa no estaba en el código del tema: lo traía una app legítima en caliente, dentro de la respuesta de su propia API, y por eso ningún repaso de archivos lo encontraba.

Si has llegado aquí para saber si te ha pasado a ti, la comprobación es el apartado siguiente y son cinco minutos. El resto es lo que hace falta saber una vez: por cuántas puertas entra JavaScript de terceros en una tienda Shopify, y cuáles de esas puertas pueden tocar el botón de pagar.

> Los datos de plataforma de este artículo están comprobados en la documentación de Shopify el 28 de octubre de 2026. Lo que cuento del incidente sale del análisis técnico de [c/side](https://cside.com/blog/hulkapps-shopify-checkout-hijack) y de un [hilo del foro de desarrolladores](https://community.shopify.dev/t/the-october-shopify-checkout-hijack-made-affected-orders-look-completely-normal-worth-a-quick-check/39038) del 26 de octubre, no de un comunicado de Shopify.

## Cómo compruebas tu tienda en cinco minutos

Siete pasos, sin instalar nada:

1. Abre una **ventana privada nueva**. Es importante que sea nueva: el código que describe el análisis se disparaba una sola vez por sesión del navegador, así que repetir la prueba en la misma pestaña sale limpia aunque no lo esté.
2. Abre las DevTools, pestaña **Network**, y marca **Preserve log** para que no se borren las peticiones al cambiar de página.
3. Añade un producto al carrito y pulsa el **botón normal de pagar**. No Shop Pay, no PayPal, no Apple Pay: los botones exprés siguen otro camino y no sirven para esta prueba.
4. Mira la barra de direcciones en cuanto cargue la página de pago. Esta prueba vale el doble si la haces hoy con la tienda sana: apunta la URL que ves, con su dominio y su ruta, y ya tienes la línea base con la que comparar cualquier día raro.
5. Vuelve a Network y busca dominios que no reconozcas, sobre todo con terminación `.top`, la que usaron las páginas falsas.
6. En la pestaña **Console**, pega esto. Devuelve todos los dominios que han servido JavaScript, incluidos los que se inyectan en caliente y no aparecen en el HTML:

```js
[...new Set(performance.getEntriesByType('resource')
  .filter(r => r.initiatorType === 'script')
  .map(r => new URL(r.name).host))].sort()
```

7. Y mira el almacenamiento del navegador, donde el código del incidente dejaba su marca:

```js
Object.keys(sessionStorage).concat(Object.keys(localStorage))
```

Según el análisis de c/side, cualquier clave que empiece por `__ctf_` es señal de que el código estuvo ahí. Si no sale nada y la URL de pago es la tuya, repite el paso 1 en otra ventana privada y da la prueba por buena.

## Por qué no se veía en el tema

Porque el archivo que cargaba la tienda era el correcto. En el caso analizado, la extensión de la app servía su `hulkcode.js` desde `cdn.shopify.com`, sin modificar, y ese archivo pedía su configuración a la API de la app. La respuesta traía un campo de JavaScript personalizado con unos 22 KB de código que la app inyectaba en la página al cargarse.

Ahí está lo que cambia la forma de auditar una tienda: el código no era un archivo, era **un dato**. Un hash, una comprobación de integridad o un diff del tema contra el repositorio no veían nada, porque el archivo no había cambiado. En las DevTools aparecía como un script anónimo, sin origen, de los que es fácil dar por buenos.

Y el efecto en la tienda es lo que hace esto difícil de notar desde el panel: el código interceptaba el clic en pagar, llevaba al comprador a una copia del checkout en otro dominio, recogía los datos de la tarjeta y lo devolvía al checkout real. El pedido entraba normal. No había nada raro que mirar en los pedidos.

## Las cuatro puertas por las que entra JavaScript

En una tienda Shopify, el JavaScript de terceros entra por cuatro sitios, y solo tres de ellos pueden ejecutar código en la página:

| Puerta | Dónde se ve | ¿Toca la página? |
| --- | --- | --- |
| Código del tema | Archivos del tema (`layout/theme.liquid`, `snippets/`) | Sí |
| Incrustaciones y bloques de app | Editor de temas, icono de incrustaciones de app | Sí |
| Script tags heredados | En ningún sitio del admin | Sí, hasta marzo de 2027 |
| Píxeles web | Configuración, Eventos de cliente | No |

**Código del tema.** Es el que todo el mundo mira y el único que se puede leer entero. La [guía oficial para auditar scripts de terceros](https://shopify.dev/docs/storefronts/themes/best-practices/performance/audit-remove-third-party-scripts) avisa de algo que vale igual para la seguridad y para la velocidad: desinstalar una app no siempre borra el código que metió en el tema, y lo normal es encontrarlo en `theme.liquid` o en un snippet con el nombre de la app.

**Incrustaciones de app.** Son la parte visible de una [theme app extension](/glosario/theme-app-extension/) y se activan con un interruptor en el editor de temas, en el icono de incrustaciones de app. Es la puerta grande de hoy: Shopify empuja a las apps hacia aquí, el código se sirve desde su CDN y, como se vio en octubre, lo que ese código haga depende de la configuración que la app traiga de su propio servidor en ese momento.

**Script tags heredados.** La vía antigua, y muerta a plazos: desde el [1 de octubre de 2026](https://shopify.dev/changelog/posts/online-store-script-tags-deprecation) no se pueden crear ni modificar, y el 1 de marzo de 2027 Shopify deja de inyectarlos en el escaparate. Lo incómodo es que el admin no los lista en ninguna parte, y la [documentación de la migración](https://shopify.dev/docs/apps/build/online-store/script-tag-deprecation/storefront) dice que la consulta `scriptTags` devuelve los script tags *de tu app*. Traducido: una app personalizada tuya no te enseña los de las demás. La lista completa de lo que se ejecuta en tu tienda la da el navegador, no la API.

**Píxeles web.** Se gestionan en Configuración, [Eventos de cliente](https://help.shopify.com/en/manual/promoting-marketing/pixels/managing-pixels), y aquí está lo que casi ninguna lista de comprobación cuenta: un píxel no puede secuestrar un botón. Los de app corren en un web worker y los personalizados en un iframe con el atributo `sandbox`, y la documentación dice que no pueden pintar interfaz ni sacar datos leyendo el DOM. Repásalos por si hay alguno que no reconozcas, pero no son por donde se cuela un checkout falso.

De ahí sale el orden de la auditoría: incrustaciones de app primero, tema después, script tags mientras existan y píxeles al final.

## El checkout no se puede tocar, y por eso la copia estaba fuera

Esta es la parte tranquilizadora, y la que explica la forma del ataque. Una app no puede meter JavaScript dentro del checkout de Shopify: las extensiones de checkout corren, según la [documentación de la API](https://shopify.dev/docs/api/checkout-ui-extensions), en un web worker que no tiene acceso a `window` ni al DOM, y no ven el HTML de la página de pago.

Por eso el pago falso tenía que estar en otro dominio. Nadie puede añadir un campo de tarjeta a tu checkout, así que la única forma de llegar a los datos de la tarjeta es sacar al comprador antes, desde el escaparate, que es la parte que sí ejecuta código de terceros.

Lo que se puede cambiar de verdad en el checkout, y con qué plan, está en [¿puedo personalizar el checkout de Shopify?](/preguntas/puedo-personalizar-el-checkout-de-shopify/).

## La auditoría de veinte minutos, cada trimestre

Lo de arriba es la urgencia. Esto es lo que dejo hecho en una tienda y conviene repetir cada pocos meses.

Primero, los dominios que sirven algo en una ficha de producto, directamente del HTML que entrega Shopify:

```bash
curl -s https://tutienda.com/products/un-producto \
  | grep -oE 'src="https?://[^"]+"' \
  | sed -E 's|src="https?://([^/"]+).*|\1|' \
  | sort -u
```

Esa lista es el punto de partida, no el final: lo que se inyecta en caliente no está en el HTML, y para eso está el `performance.getEntriesByType` de antes. Saca las dos y guárdalas con la fecha. La próxima vez, lo que importa no es la lista, es la diferencia.

Después, las puertas, por orden:

- **Incrustaciones de app activas.** Desactiva las de apps que ya no usas. Cada interruptor encendido es una app con permiso para ejecutar lo que quiera en tu escaparate.
- **Archivos del tema.** Busca el nombre de cada app y cada dominio externo que haya salido en la lista anterior.
- **Script tags.** Si tienes una app personalizada, `{ scriptTags(first: 50) { nodes { id src displayScope } } }` en la [API GraphQL de Admin](/glosario/api-graphql-de-admin/) te da los suyos. Para los demás, el navegador.
- **Píxeles.** Configuración, Eventos de cliente: fuera los que no sepas de quién son.

Y una pregunta por escrito a cada proveedor de app, que es la que separa a los serios: ¿vuestro código trae JavaScript desde vuestra API, o lo que carga mi tienda es solo lo que está en vuestra extensión? Si es lo primero, tu tienda ejecuta lo que ellos decidan cada mañana.

Es la misma auditoría que hago cuando una tienda viene por velocidad: casi siempre, [lo que cuesta segundos](/servicios/core-web-vitals/) y lo que abre un agujero son los mismos scripts de apps que ya nadie usa.

## Si encuentras algo

Por este orden, y sin borrar pruebas:

1. **Captura lo que ves.** URL completa de la página falsa, hora y la pestaña Network abierta. Sin eso, el desarrollador de la app te va a pedir que lo reproduzcas.
2. **Corta por la app**, no por el tema: desactiva su incrustación o desinstálala. Si tocas el tema, pierdes la prueba.
3. **Escribe al desarrollador y abre un caso con el soporte de Shopify**, con las capturas.
4. **Avisa a tu pasarela de pago.** Si alguien ha escrito su tarjeta en una copia de tu checkout, esa persona es tu cliente y el cargo raro va a salir con tu nombre al lado.
5. **Cuenta los días.** Si se han capturado datos personales de compradores, eso es una brecha de seguridad, y en España hay 72 horas para notificarla a la AEPD cuando hay riesgo para esas personas. Consúltalo el primer día, no el cuarto.

Lo que no sirve: cambiar el tema de sitio, reinstalar la app para dejarla limpia o esperar a ver si los pedidos siguen entrando bien. Los pedidos seguían entrando bien. Era justo lo que hacía que nadie se diera cuenta.
