# Plan del blog

Cómo se publica y qué se publica en `/blog/` y `/en/blog/`. Este archivo no se despliega: Cloudflare solo sirve `dist/`.

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

El `pair` es lo que une los dos idiomas: hreflang, el selector de idioma y los artículos relacionados salen de ahí. Si un artículo solo existe en español, no pasa nada: se publica solo con su hreflang.

Qué pasa solo: la URL, el sitemap con sus alternates, el RSS, el JSON-LD (`BlogPosting`, `FAQPage`, breadcrumbs), el índice de contenidos (desde cuatro `##`), el tiempo de lectura, la ficha de autor, el CTA y los enlaces a otros artículos.

Qué hay que escribir a mano: el artículo, `seoTitle`, `description`, `keyword`, `tags`, las preguntas de `faq` y el `cta`.

`draft: true` deja el artículo fuera del índice, del sitemap y del RSS, y lo marca `noindex`, pero sigue teniendo URL. Sirve para enseñarlo en una rama de preview antes de publicarlo.

## El listón de cada artículo

No es un blog de volumen, es la prueba de que sabes de lo que hablas. Un artículo flojo al día hace más daño que tres buenos a la semana.

1. **Una pregunta real, respondida en las dos primeras frases.** Quien llega de Google quiere la respuesta, no una introducción. Google y los asistentes de IA citan ese primer párrafo.
2. **Datos comprobados hoy.** Todo límite, precio o nombre de función se comprueba en la documentación de Shopify el día que escribes, y se enlaza. Shopify cambia los planes cada pocos meses: un dato viejo es peor que no tenerlo. Si el artículo depende de datos que caducan, pon la fecha de comprobación dentro, como en el primero.
3. **Algo que solo puedes decir tú.** El código que escribirías, el error que te encontraste, el número que has visto. Lo que se puede copiar de la documentación no vale la pena publicarlo.
4. **Entre 1.200 y 1.800 palabras.** Menos se queda corto para una consulta técnica; más se lee en diagonal.
5. **`##` que respondan a subconsultas.** Cada apartado empieza respondiendo. Párrafos de dos o tres frases.
6. **Dos o tres enlaces internos** con texto descriptivo: a un proyecto (`/proyectos/#slug`), a otro artículo, a `/sobre-mi/`. El CTA ya enlaza a contacto.
7. **Un CTA, al final, específico del artículo.** El genérico está en `i18n/ui.ts`; el bueno se escribe para cada tema ("¿Te has quedado sin catálogos?" convierte más que "¿Hablamos?").
8. **De tres a cinco preguntas en `faq`.** Son las que salen en los resultados enriquecidos y las que citan los asistentes. Respuestas de dos o tres frases, autosuficientes.
9. **Sin guiones largos** (quitaste uno a mano del texto de "Sobre mí") y sin "en el mundo actual", "descubre", "sumérgete". El tono del sitio es seco y directo.
10. **Nada de datos de clientes que no estén ya publicados** en la ficha del proyecto.

## Qué traducir al inglés

El español es el idioma por defecto: es donde compites menos y donde está tu mercado más cercano. Traduce al inglés solo los artículos que (a) hablen de un límite o una técnica de plataforma, no de España, y (b) te servirían para Upwork o para una agencia holandesa. Una traducción buena cada tres artículos rinde más que traducirlo todo deprisa.

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
