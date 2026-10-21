---
pair: 'sections-and-blocks'
term: 'Secciones y bloques'
aliases: ['sections', 'blocks', 'secciones de tema', 'Online Store 2.0']
category: 'theme'
seoTitle: 'Secciones y bloques en Shopify: el tema que se mantiene'
description: 'Las secciones y los bloques son las piezas con las que el cliente monta páginas en Shopify sin tocar código. Son el entregable real de un tema a medida.'
keyword: 'secciones y bloques shopify'
answer: 'Las secciones son los módulos de una plantilla de Shopify que el cliente puede añadir, ordenar y configurar desde el editor; los bloques son las piezas que van dentro de una sección. Desde Online Store 2.0 se pueden usar en cualquier plantilla, y son lo que hace que un tema se pueda mantener sin un desarrollador.'
related: ['liquid', 'metaobjects']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es la parte del trabajo de un tema que no se ve en la maqueta y decide si el proyecto envejece bien. Dos temas pueden verse igual el día de la entrega: en uno el cliente monta una landing en veinte minutos, en el otro pide presupuesto cada vez.

## El criterio para partir en secciones

Una sección por **intención de la página**, no por fila del diseño. Si el diseño tiene tres bandas de texto con imagen que solo se diferencian en el lado de la foto, no son tres secciones: es una con un ajuste de posición.

El error contrario es igual de común: una sección gigante con cuarenta ajustes. Si el cliente tiene que leer un manual para usarla, la sección está mal partida.

## Lo que convierte una sección en algo útil

- **Valores por defecto sensatos.** Una sección recién añadida tiene que verse bien sin tocar nada.
- **Bloques con límite.** Un carrusel que admite 30 bloques acabará con 30 bloques.
- **Texto en los ajustes, no en el código.** Todo lo que el cliente podría querer cambiar algún día.
- **Nombres en su idioma.** "Banda destacada" y no "hero_section_2".

## Dónde conectan con el contenido

Cuando los datos que muestra una sección se repiten entre páginas, no van en los ajustes: van en [metaobjetos](/glosario/metaobjetos/) y la sección los referencia. Así el cliente edita el dato una vez y cambia en todas las páginas donde aparece.

Documentación: [secciones de tema](https://shopify.dev/docs/storefronts/themes/architecture/sections).
