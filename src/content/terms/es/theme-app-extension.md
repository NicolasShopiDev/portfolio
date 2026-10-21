---
pair: 'theme-app-extension'
term: 'Theme app extension'
aliases: ['app block', 'bloque de app', 'app embed', 'extensión de app en el tema']
category: 'theme'
seoTitle: 'Theme app extension: apps sin tocar el código del tema'
description: 'Una theme app extension deja que una app añada bloques al tema desde el editor, sin inyectar código. Por eso desinstalarla ya no deja restos cargando.'
keyword: 'theme app extension shopify'
answer: 'Una theme app extension es la forma en la que una app añade funcionalidad a un tema sin modificar sus archivos: aporta bloques que el comerciante coloca desde el editor, o un embed que se activa para toda la tienda. Al desinstalar la app, sus bloques se van con ella.'
related: ['sections-and-blocks', 'liquid']
updated: '2026-10-22'
---

Esto resuelve el problema más caro del mantenimiento de una tienda Shopify: las apps que dejan restos.

## El modelo viejo, y por qué dolía

Antes, una app se instalaba metiendo su código en tu tema: una etiqueta de script, un fragmento pegado en `theme.liquid`, a veces una plantilla entera. Desinstalar la app quitaba la app, pero **el código seguía ahí**, cargando su script en cada página y sin que nadie recordara de dónde había salido.

Esos restos son, con diferencia, lo primero que encuentro al auditar una tienda lenta: dos o tres scripts de apps que ya no están instaladas. Y cuando una app así se desinstala mal, el tema se queda con fragmentos rotos que revientan al actualizar.

## El modelo actual

Con una theme app extension, el código de la app vive en la app, no en tu tema. El comerciante coloca el bloque donde quiere desde el editor, igual que una [sección](/glosario/secciones-y-bloques/), y la app se actualiza sin tocar tu tema.

Consecuencias prácticas que conviene usar a tu favor:

- **Al desinstalar no queda nada.** Se acabó el arqueólogo buscando scripts huérfanos.
- **Tu tema sigue siendo actualizable**, porque la app no lo ha editado.
- **Si una app todavía te pide pegar código en `theme.liquid`**, es una señal sobre cómo está mantenida. No es descalificante, pero sí un dato antes de instalarla.

Documentación: [theme app extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions).
