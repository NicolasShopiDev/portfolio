---
pair: 'custom-apps'
label: 'Apps'
h1: 'Apps de Shopify a medida'
lead: 'Apps embebidas en el admin de Shopify con Node.js, Express y el CLI, para lo que ninguna app del App Store hace: configuradores, paneles internos, lógica de catálogo o el contenedor de tus Shopify Functions.'
serviceName: 'Desarrollo de apps de Shopify a medida'
serviceType: 'Desarrollo de software'
seoTitle: 'Desarrollo de apps Shopify a medida | Nicolás Mateos'
description: 'Apps Shopify a medida, embebidas en el admin con Node.js y App Bridge: configuradores, paneles de catálogo, automatizaciones y contenedores de Functions.'
keyword: 'desarrollo apps shopify a medida'
cases: []
faq:
  - q: '¿Cuándo tiene sentido una app a medida?'
    a: 'Cuando el flujo es tuyo y ninguna app del App Store encaja sin doblarlo: un configurador de producto con reglas propias, un panel para que el equipo gestione algo que Shopify no modela, o el contenedor de una Function escrita para tu tienda.'
  - q: '¿Una app a medida necesita Plus?'
    a: 'La app en sí, no. Si contiene Shopify Functions, sí: solo las tiendas con Shopify Plus pueden instalar apps personalizadas que lleven Functions dentro.'
  - q: '¿Dónde se aloja?'
    a: 'Donde te convenga mantenerla. Para la mayoría de los casos basta una función serverless o un contenedor pequeño. El coste de alojamiento de una app interna suele ser de unos pocos euros al mes, y eso conviene saberlo antes de empezar.'
related: ['erp-integrations', 'functions-development']
terms: ['admin-graphql-api', 'shopify-plus', 'metafields']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Lo primero que te voy a preguntar

Si lo que necesitas cabe en un [metacampo](/glosario/metacampos/), en un metaobjeto o en una app del App Store, no necesitas una app a medida. Una app propia es código que alguien tiene que mantener, actualizar cuando cambia la versión de la API y alojar en algún sitio. Vale la pena cuando no hay alternativa, no por defecto.

## Lo que suelo construir

- **Configuradores de producto** con reglas que ninguna app genérica modela: compatibilidades, medidas, combinaciones excluyentes.
- **Paneles internos** embebidos en el admin, para que el equipo gestione datos propios donde ya trabaja, en lugar de en una hoja de cálculo aparte.
- **Automatizaciones** que leen y escriben por la [Admin API](/glosario/api-graphql-de-admin/): recalcular, reclasificar, limpiar.
- **El contenedor de una [Function](/servicios/shopify-functions/)**, cuando la Function necesita configuración y alguien tiene que poder cambiarla sin tocar el código.

## Cómo las monto

Embebidas en el admin con App Bridge, para que la app viva dentro de Shopify y no sea una pestaña aparte con otra sesión. La autenticación por token de sesión, la API por GraphQL y la versión de la API fijada, nunca "la última": una API sin versión fijada es una app que un día deja de funcionar sin que nadie haya tocado nada.

Y una cosa que digo siempre: una app a medida necesita un plan de actualización. Shopify saca versiones de API cada trimestre y las antiguas se retiran. Si nadie va a mirar esa app en dos años, mejor que el proyecto no dependa de ella.
