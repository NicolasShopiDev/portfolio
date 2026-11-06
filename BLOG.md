# Plan del blog

Cómo se publica y qué se publica en `/blog/` y `/en/blog/`. Este archivo no se despliega: Cloudflare solo sirve `dist/`.

## Premisa editorial: utilidad para el lector

Por instrucción de Nicolás del 6 de noviembre de 2026, esta es la prioridad de todos los posts, también en revisiones: aportar conocimiento y valor gratuito para resolver un problema real del lector. La experiencia de Nicolás respalda la respuesta; no es el tema principal ni una excusa para hablar de él.

Cada artículo debe dejar una respuesta clara y algo que el lector pueda aplicar: criterios para decidir, preguntas de diagnóstico, errores que evitar, ejemplos o primeros pasos. Explicar por qué importa para su negocio. Mostrar suficiente conocimiento para ayudar y generar confianza sin revelar todo el método propio ni volcar una implementación completa. Reservar la ejecución detallada, la configuración específica y el acompañamiento para el servicio, sin omitir datos esenciales ni hacer una respuesta deliberadamente incompleta para forzar un contacto.

Las capturas y casos personales se usan cuando enseñan algo transferible. El título, el arranque y el desarrollo deben centrarse en lo que aprende o resuelve el lector. El CTA llega después del valor aportado y propone ayuda sobre su caso concreto. Antes de publicar, comprobar: ¿qué sabe decidir o hacer ahora el lector aunque no contacte?

## Publicar un artículo

```bash
npm run post -- es shopify-precios-por-volumen "Precios por volumen en Shopify B2B"
npm run build     # falla si el title, la meta o una fecha no cumplen
npm run dev       # léelo en una ventana estrecha antes de subirlo
git add -A && git commit -m "blog: precios por volumen" && git push
```

La versión en inglés del mismo artículo se enlaza con `--pair`, usando la clave del artículo en español:

```bash
npm run post -- en shopify-volume-pricing "Volume pricing in Shopify B2B" --pair shopify-precios-por-volumen
```

El `pair` es lo que une los dos idiomas: hreflang, el selector de idioma y los artículos relacionados salen de ahí. Por instrucción de Nicolás del 3 de noviembre de 2026, cada nuevo artículo debe escribirse y publicarse en español e inglés, con el mismo `pair`. No publicar una versión sin su pareja. Revisar metadatos, FAQ, CTA y enlaces en ambos idiomas.

Qué pasa solo: la URL, el sitemap con sus alternates, el RSS, el JSON-LD (`BlogPosting`, `FAQPage`, breadcrumbs), el índice de contenidos (desde cuatro `##`), el tiempo de lectura, la ficha de autor, el CTA y los enlaces a otros artículos.

Qué hay que escribir a mano: el artículo, `seoTitle`, `description`, `keyword`, `tags`, las preguntas de `faq` y el `cta`.

`draft: true` deja el artículo fuera del índice, del sitemap y del RSS, y lo marca `noindex`, pero sigue teniendo URL. Sirve para enseñarlo en una rama de preview antes de publicarlo.

## Publicación de cada mañana

Por autorización expresa de Nicolás del 3 de noviembre de 2026, la tarea recurrente publica **dos temas nuevos cada mañana a las 08:00, Europe/Berlin**, cada tema en español e inglés: cuatro páginas por ejecución. Sustituye la instrucción anterior de preparar un único borrador sin publicar. El horario de inicio no garantiza que el despliegue haya terminado a las 08:00.

1. Lee AGENTS.md, este archivo, BLOG-PLAN-90-DIAS.md, BLOG-RADAR.md y los posts de la última versión de origin/master. No vuelvas a escribir temas ya publicados ni dupliques la intención de preguntas, servicios o comparativas existentes.
2. Busca preguntas reales sobre Shopify, B2B, checkout, temas, rendimiento e integraciones que encajen con los servicios de Nicolás. Comprueba resultados actuales y registra fuentes; no inventes volúmenes, huecos SEO ni experiencias de clientes.
3. Selecciona dos preguntas distintas y verifica datos de plataforma en documentación oficial ese día. Los ejemplos deben ser propios o hipotéticos identificados. No presentes una implementación como probada si no la ejecutaste.
4. Escribe ambos idiomas con el mismo `pair`, fecha local de Berlín, SEO, FAQ, CTA y enlaces adaptados. Revisa las afirmaciones fiscales, jurídicas o de seguridad con fuentes primarias; si falta evidencia, cambia el enfoque a lo verificable o elige otro tema.
5. Trabaja en una rama o worktree aislado de origin/master; conserva cambios ajenos. Actualiza el radar, pasa build con `PENDING_GUARD=strict`, revisa móvil y ambos idiomas, enlaces internos, alternates, RSS y sitemap.
6. Publica únicamente los archivos del lote mediante commit y push a master, sin force push. Si hay cambios concurrentes, intégralos y repite las comprobaciones necesarias. Espera el despliegue y verifica las cuatro URLs públicas, indexables y con enlaces de idioma recíprocos.
7. Comunica títulos y URLs, o un bloqueo concreto. No rellenes la cuota con artículos sin verificar. Esta autorización cubre publicación en el portfolio, no mensajes o enlaces promocionales en foros o redes.

Los borradores siguen siendo útiles para trabajo no validado: `draft: true` los excluye del índice, sitemap y RSS. No cuentan como publicaciones terminadas.

Para revisarlo:

```bash
git checkout borrador-2026-10-22-mi-slug
npm run dev          # http://localhost:4321/blog/mi-slug/
```

Para publicarlo, cuando te convenza:

```bash
npm run publish -- mi-slug    # quita el draft y le pone la fecha de hoy
npm run publish -- my-english-slug    # publicar también la pareja inglesa
npm run build
git add -A && git commit -m "blog: mi-slug"
git checkout master && git merge --no-ff borrador-2026-10-22-mi-slug && git push origin master
```

Y si no te convence, se borra la rama y no ha pasado nada. Un artículo flojo resta más de lo que suma.

Cuando el artículo esté publicado, vuelve al hilo donde viste la pregunta y contéstala allí, enlazando el artículo. Ahí es donde llegan los primeros lectores, y de paso es el enlace que Google ve primero.

## El listón de cada artículo

No es un blog de volumen, es la prueba de que sabes de lo que hablas. Un artículo flojo al día hace más daño que tres buenos a la semana.

1. **Una pregunta real, respondida en las dos primeras frases.** Quien llega de Google quiere la respuesta, no una introducción. Google y los asistentes de IA citan ese primer párrafo.
2. **Datos comprobados hoy.** Todo límite, precio o nombre de función se comprueba en la documentación de Shopify el día que escribes, y se enlaza. Shopify cambia los planes cada pocos meses: un dato viejo es peor que no tenerlo. Si el artículo depende de datos que caducan, pon la fecha de comprobación dentro, como en el primero.
3. **Algo que solo puedes decir tú.** El código que escribirías, el error que te encontraste, el número que has visto. Lo que se puede copiar de la documentación no vale la pena publicarlo.
4. **Extensión según la respuesta.** Como fija el plan editorial, no alargar para alcanzar una cifra: una guía técnica suele necesitar alrededor de 1.200–1.800 palabras, pero el criterio es resolver la pregunta con ejemplos, límites y comprobaciones útiles en cada idioma.
5. **`##` que respondan a subconsultas.** Cada apartado empieza respondiendo. Párrafos de dos o tres frases.
6. **Dos o tres enlaces internos** con texto descriptivo: a un proyecto (`/proyectos/#slug`), a otro artículo, a `/sobre-mi/`. El CTA ya enlaza a contacto.
7. **Un CTA, al final, específico del artículo.** El genérico está en `i18n/ui.ts`; el bueno se escribe para cada tema ("¿Te has quedado sin catálogos?" convierte más que "¿Hablamos?").
8. **De tres a cinco preguntas en `faq`.** Son las que salen en los resultados enriquecidos y las que citan los asistentes. Respuestas de dos o tres frases, autosuficientes.
9. **Sin guiones largos** (quitaste uno a mano del texto de "Sobre mí") y sin "en el mundo actual", "descubre", "sumérgete". El tono del sitio es seco y directo.
10. **Nada de datos de clientes que no estén ya publicados** en la ficha del proyecto.

## Publicación siempre bilingüe

Todos los artículos nuevos se escriben y publican en español e inglés. Mantener el mismo contenido sustancial, ejemplos, fuentes y fecha; adaptar título SEO, consulta objetivo y redacción a cada idioma. Si un tema trata de España, explicar ese contexto también en inglés. Usar enlaces internos del idioma correspondiente; cuando no exista una traducción antigua, explicar el punto en el propio artículo o identificar expresamente el enlace como contenido en español. Antes de publicar, comprobar las dos URLs, el selector de idioma y los hreflang recíprocos. Esta regla sustituye la selección anterior de traducciones parciales y vale también para el archivo: por instrucción de Nicolás del mismo día, todos los artículos publicados tienen versión en los dos idiomas. `npm run build` falla si un artículo publicado no tiene su pareja publicada, así que un borrador se publica con su traducción o no se publica.

## Calendario de temas

Tres grupos, por lo que hace quien busca. Mezcla uno de cada grupo cada pocos días: los de decisión convierten, los técnicos traen enlaces y citas de IA, los de plataforma traen volumen.

### Decisión (pocas visitas, muchas consultas)

| # | Tema | Palabra clave | Por qué convierte |
| --- | --- | --- | --- |
| 1 | Cuánto cuesta montar un portal mayorista en Shopify | presupuesto tienda b2b shopify | Quien busca precio ya tiene proyecto |
| 2 | Shopify Plus o Advanced: cuándo compensa el salto | shopify plus vale la pena | Decisión de plan, con factura detrás |
| 3 | Agencia, freelance o app: cómo elegir para un proyecto B2B | desarrollador shopify freelance o agencia | Te pone en la terna |
| 4 | Qué pedir en un presupuesto de desarrollo Shopify | presupuesto desarrollo shopify | Define el criterio con el que te comparan |
| 5 | Cuánto tarda un portal mayorista, semana a semana | tiempo desarrollo tienda b2b | Responde la objeción del plazo |
| 6 | Migrar de PrestaShop a Shopify B2B: qué se rompe | migrar prestashop a shopify | Mercado español puro |
| 7 | Señales de que tu tema Shopify necesita un desarrollador | tema shopify lento soluciones | Autodiagnóstico que acaba en contacto |

### B2B y catálogos (tu terreno)

| # | Tema | Palabra clave | Ángulo |
| --- | --- | --- | --- |
| 8 | Montar un portal mayorista sobre tu tema actual | portal mayorista shopify | Caso Émolo, sin rehacer la tienda |
| 9 | Reglas de cantidad y precios por volumen sin apps | precios por volumen shopify b2b | Lo nativo llega más lejos de lo que creen |
| 10 | Ocultar precios a quien no tiene cuenta, bien hecho | ocultar precios shopify b2b | El precio no debe llegar al HTML |
| 11 | Tabla de pedido rápido: cómo se construye | pedido rapido shopify b2b | Liquid + un custom element, con código |
| 12 | Empresas y ubicaciones: modelar bien al cliente mayorista | empresas shopify b2b | El error de modelado que se paga después |
| 13 | B2B y Markets: cuando el precio y el país se pelean | shopify markets b2b | Lo que descubriste en el artículo 1 |
| 14 | Pago aplazado (net terms) en Shopify B2B | pago aplazado shopify b2b | Qué cubre de verdad |
| 15 | Importar tu lista de precios a un catálogo | importar precios shopify b2b | CSV y GraphQL, con el script |
| 16 | Un mismo cliente comprando B2C y B2B | shopify b2b y b2c en la misma tienda | Duda recurrente, respuesta clara |

### Checkout, Functions y rendimiento (autoridad)

| # | Tema | Palabra clave | Ángulo |
| --- | --- | --- | --- |
| 17 | Functions en app pública o a medida: qué permite tu plan | shopify functions plan | El dato que casi nadie cuenta |
| 18 | Qué se puede cambiar hoy en el checkout de Shopify | personalizar checkout shopify | Mapa de lo posible por plan |
| 19 | Pedido mínimo sin cargarte la conversión | pedido minimo shopify | Validación de carrito, con código |
| 20 | Ocultar métodos de pago por cliente | ocultar metodo de pago shopify | Enlaza con el Checkout Lab del sitio |
| 21 | Extensiones de cuenta de cliente: el panel del mayorista | cuenta de cliente shopify b2b | Poca competencia en español |
| 22 | Vida después de Scripts: qué revisar si algo dejó de aplicarse | shopify scripts functions migracion | Tráfico de urgencia |
| 23 | Las cinco cosas que mueven el LCP en un tema Shopify | mejorar velocidad shopify | Medible, se puede demostrar |
| 24 | Metafields y metaobjects en vez de una app | metafields shopify | Ahorro de apps = ahorro mensual |
| 25 | Cuánto te cuestan en velocidad las apps que tienes | apps shopify ralentizan | Auditoría que acaba en encargo |
| 26 | Liquid que no escala: patrones que revientan con 5.000 productos | optimizar liquid shopify | Para agencias |
| 27 | Theme app extension o editar el tema | theme app extension | Decisión de arquitectura |
| 28 | Multimercado sin duplicar la tienda | shopify varios paises | Cruce con B2B |
| 29 | Errores que veo en tiendas Shopify españolas | errores tienda shopify | Compartible, trae enlaces |
| 30 | Qué mirar en la analítica antes de rediseñar | rediseñar tienda shopify | Frena el rediseño y abre la conversación |

El orden no es sagrado. Si un cliente te pregunta algo esta semana, ese es el artículo de mañana: una pregunta real de un cliente real vale más que cualquier lista.

## Medir

A las dos o tres semanas, en Google Search Console: qué consultas traen impresiones y cuáles tienen posición entre 8 y 20. Esas son las que se arreglan tocando el `seoTitle` y el primer párrafo, no escribiendo otro artículo. En el formulario de contacto, el campo "¿Cómo me has encontrado?" ya separa buscador de asistente de IA: mira cuál crece.
