# Arquitectura SEO y GEO

Cómo está organizada la web para buscadores y para asistentes de IA, y de dónde sale cada URL.
Este archivo no se despliega. Complementa a [BLOG.md](BLOG.md) (el blog) y a [BLOG-RADAR.md](BLOG-RADAR.md) (las preguntas).

## El criterio

Dos buscadores, dos trabajos distintos:

- **SEO.** Google necesita una URL por intención de búsqueda. Una página que intenta cubrir seis intenciones no gana ninguna.
- **GEO.** ChatGPT, Claude, Perplexity y Gemini necesitan un dato concreto, atribuible y fácil de extraer. Citan párrafos, no páginas. Lo que se cita es una definición exacta, un límite de plataforma con su fuente, una tabla o un bloque de código.

Las dos cosas apuntan al mismo sitio: **muchas URLs específicas, cada una con una respuesta corta arriba y el detalle debajo**. Lo que no se cumple de esto, no se publica.

### El listón de cada URL nueva

El mismo que el del blog, resumido:

1. **Una intención por URL.** Si dos páginas se pueden canibalizar, son una página.
2. **La respuesta en las dos primeras frases.** Antes de cualquier contexto. Es lo que se cita.
3. **Algo que no está en la documentación.** El límite que te encuentras en producción, el código que escribirías, el número que has visto. Si se copia de shopify.dev, no merece URL.
4. **Datos con fecha.** Todo límite, precio o nombre de función lleva `verified` en el frontmatter y enlace a la fuente. Shopify cambia los planes cada pocos meses.
5. **Dos o tres enlaces internos** con texto descriptivo, hacia arriba (al hub) y hacia los lados (a un término, un proyecto, un artículo).
6. **Sin relleno.** Mejor 30 páginas buenas que 300 vacías. El `pending-guard` bloquea en `master` cualquier página con huecos.

## Los silos

Ocho silos. Cada uno tiene un hub que enlaza a sus hijos, y cada hijo enlaza de vuelta al hub y a dos o tres hermanos.

| Silo | ES | EN | De dónde sale |
| --- | --- | --- | --- |
| Servicios | `/servicios/` | `/en/services/` | `src/content/services/` + las dos páginas grandes a mano |
| Proyectos y casos | `/proyectos/` | `/en/projects/` | `src/content/projects/` + `src/content/cases/` |
| Taxonomías de proyecto | `/proyectos/sector/<x>/`, `/proyectos/tipo/<x>/` | `/en/projects/sector/<x>/`, `/en/projects/type/<x>/` | se derivan de los proyectos |
| Glosario | `/glosario/`, `/glosario/<término>/` | `/en/glossary/`, `/en/glossary/<term>/` | `src/content/terms/` |
| Preguntas | `/preguntas/`, `/preguntas/<pregunta>/` | `/en/questions/`, `/en/questions/<question>/` | `src/content/questions/` |
| Comparativas | `/comparativas/`, `/comparativas/<a-vs-b>/` | `/en/compare/`, `/en/compare/<a-vs-b>/` | `src/content/compare/` |
| Blog | `/blog/`, `/blog/<slug>/` | `/en/blog/`, `/en/blog/<slug>/` | `src/content/posts/` |
| Código | `/codigo/` | `/en/code/` | `src/snippets/` |

### 1. Servicios — intención comercial

Quien busca esto quiere contratar. Es el silo que convierte, y el que lleva los enlaces internos desde todo lo demás.

Las dos páginas cabecera están escritas a mano porque llevan maquetación propia: `/shopify-b2b/` (`B2bView.astro`) y `/shopify-plus/` (`PlusView.astro`). El resto sale de `src/content/services/` con `ServiceView`, que ya trae secciones, casos, FAQ y CTA.

Cola larga de servicios, una URL por servicio que alguien busca por separado:

| ES | EN | Palabra clave objetivo |
| --- | --- | --- |
| `/servicios/shopify-functions/` | `/en/services/shopify-functions/` | desarrollador shopify functions |
| `/servicios/checkout-extensibility/` | `/en/services/checkout-extensibility/` | personalizar checkout shopify plus |
| `/servicios/apps-shopify-a-medida/` | `/en/services/custom-shopify-apps/` | desarrollo apps shopify a medida |
| `/servicios/temas-shopify-a-medida/` | `/en/services/custom-shopify-themes/` | tema shopify a medida |
| `/servicios/migracion-a-shopify/` | `/en/services/shopify-migration/` | migrar a shopify |
| `/servicios/migracion-scripts-a-functions/` | `/en/services/scripts-to-functions-migration/` | migrar shopify scripts a functions |
| `/servicios/core-web-vitals/` | `/en/services/core-web-vitals/` | optimizar velocidad shopify |
| `/servicios/integraciones-erp/` | `/en/services/erp-integrations/` | integrar erp con shopify |
| `/servicios/shopify-markets/` | `/en/services/shopify-markets/` | shopify multimercado internacional |
| `/servicios/cuentas-de-cliente/` | `/en/services/customer-accounts/` | extensiones cuenta de cliente shopify |

### 2. Glosario — cobertura informacional y citas de IA

El silo que más URLs aporta y el que más se cita. Un término por URL, con la definición en la primera frase, el dato de plataforma con su fecha de comprobación, y qué implica en un proyecto real.

Es lo que hace que un asistente, cuando alguien pregunta qué es un catálogo B2B en Shopify, tenga un párrafo exacto que citar con nombre y enlace.

Categorías: `b2b`, `functions`, `checkout`, `theme`, `api`, `plan`.

### 3. Preguntas — AEO

Una pregunta real por URL, de las que BLOG-RADAR recoge. La diferencia con el blog: aquí la respuesta cabe en 300–600 palabras y no da para un artículo. Estructura fija: la respuesta en dos frases, el porqué, la excepción, y a dónde ir después.

Las de dinero (`cuanto-cuesta-…`) son las de más intención comercial de toda la web y las que peor cubiertas están en español.

### 4. Comparativas — decisión

Quien compara está a punto de decidir. Estructura fija: tabla de diferencias, cuándo gana cada uno, y la recomendación con nombre y apellidos. Sin "depende de tus necesidades".

### 5. Taxonomías — cobertura sin escribir contenido nuevo

Las páginas de sector, tipo y tema agrupan lo que ya existe. Cada una lleva su propio H1, su propia introducción escrita a mano (nunca generada) y la lista de lo que agrupa. Una taxonomía con menos de dos elementos no se publica: sería una página vacía con otro nombre.

## La capa GEO

Lo que hace esta web legible para un asistente, además del contenido:

| Qué | Dónde |
| --- | --- |
| `llms.txt` | resumen factual con todas las URLs, `src/pages/llms.txt.ts` |
| `llms-full.txt` | el texto completo de servicios, comparativas, preguntas y glosario en un solo fichero, `src/pages/llms-full.txt.ts` |
| JSON-LD | `src/lib/schema.ts`: `Person`, `WebSite`, `Service`, `DefinedTerm`, `DefinedTermSet`, `Question`, `FAQPage`, `BlogPosting`, `CreativeWork`, `BreadcrumbList`, `ItemList` |
| `@id` estables | todo nodo del grafo cuelga de `#person`, `#website` o `#webpage`, así que un asistente puede resolver quién dice qué |
| Fechas reales | `verified` y `updated` en el frontmatter, visibles en la página y en el sitemap |

El `llms.txt` y el markdown por página existen porque un crawler de IA que no ejecuta JavaScript y trabaja con un presupuesto de tokens prefiere 4 kB de texto a 180 kB de HTML. El contenido es el mismo: no hay versión para robots distinta de la de personas.

## Enlazado interno

Automático donde se puede comprobar, a mano donde hace falta criterio:

- **Hacia arriba:** las migas de pan, en todas las páginas.
- **Hacia los lados:** `related` en el frontmatter (hermanos del mismo silo) y `terms` (términos del glosario que esa página menciona). `src/lib/links.ts` resuelve ambos y falla el build si un slug no existe.
- **Hacia el dinero:** cada página de glosario, pregunta y comparativa termina enlazando a un servicio o a un caso. Eso se escribe a mano, uno por página.
- **Desde el blog:** dos o tres enlaces por artículo, como ya dice BLOG.md.

## Lo que falta y por qué

- **Páginas por ciudad** (`/desarrollador-shopify-madrid/`, Barcelona, Valencia…). El patrón funciona, pero solo si cada página dice algo verdadero y distinto: clientes de esa zona, idioma, facturación, huso. Diez páginas iguales con la ciudad cambiada son páginas puerta y Google las trata como tales. Pendiente de tener material real por ciudad.
- **Taxonomía de temas del blog** (`/blog/tema/<tag>/`). El motor no está escrito todavía porque con un artículo publicado ninguna etiqueta llega a dos, y una página de agrupación con un solo artículo compite con ese artículo y pierde. Se escribe cuando haya dos artículos sobre el mismo tema.
- **Markdown por página** (un `index.md` junto a cada URL de referencia). Hoy ese papel lo hace `llms-full.txt`, que es un fichero y no 143. Vale la pena si algún día un crawler pide la versión por página.
- **Más fichas de glosario.** Hay 23 términos; faltan los de API y plataforma que menos se preguntan (`webhooks`, `storefront-api`, `theme-app-extension`, `hydrogen`, `headless`, `checkout-liquid`, `cart-transform`, `webassembly`).
- **Precios publicados.** `/servicios/` convertiría mejor con una horquilla por tipo de proyecto. Es una decisión de negocio, no técnica.
- **Testimonios.** Harían E-E-A-T real en los casos. Hay que pedirlos a los clientes.

## Dónde estamos

Lo construido hasta hoy, contando las dos lenguas:

| Silo | URLs |
| --- | --- |
| Servicios (10 páginas + los dos hubs) | 22 |
| Glosario (23 términos + los dos hubs) | 48 |
| Preguntas (9 + hubs) | 20 |
| Comparativas (5 + hubs) | 12 |
| Taxonomías de proyecto (9 grupos) | 18 |
| Lo que ya existía (portada, proyectos, casos, código, sobre mí, blog, contacto) | 23 |
| **Total en el sitemap** | **143** |

El build comprueba en cada despliegue que las 143 tienen `title`, meta, canonical, un solo `h1`, `hreflang` con `x-default` y JSON-LD válido, que ningún `title` ni canonical está repetido, y que ninguno de los 4.710 enlaces internos apunta a un 404.

## Mantenimiento

| Cuándo | Qué |
| --- | --- |
| Al publicar cualquier página | `npm run build`: falla si falta la traducción, la meta pasa de 65/165 caracteres o un `related` apunta a nada |
| Al tocar el contenido de una página fija | subir su fecha en `src/i18n/routes.ts` (`updated`) |
| Cada vez que Shopify cambia planes o límites | buscar `verified` en `src/content/` y repasar lo que tenga más de seis meses |
| Antes de mergear a master | `PENDING_GUARD=strict npm run build` |
