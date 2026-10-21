---
pair: 'migration-to-shopify'
label: 'Migración'
h1: 'Migración a Shopify desde otra plataforma'
lead: 'Migraciones a Shopify desde WooCommerce, PrestaShop, Magento o un desarrollo propio, con el front-end rehecho y, lo que más duele si se olvida, las URLs redirigidas una por una.'
serviceName: 'Migración a Shopify'
serviceType: 'Migración de plataforma de ecommerce'
seoTitle: 'Migrar a Shopify desde otra plataforma | Nicolás Mateos'
description: 'Migración a Shopify desde WooCommerce, PrestaShop o Magento: datos, front-end, redirecciones 301 una a una y comprobación de que no pierdes posiciones.'
keyword: 'migrar a shopify'
cases: []
faq:
  - q: '¿Voy a perder posicionamiento?'
    a: 'No si las redirecciones se hacen bien. La pérdida de tráfico en una migración casi siempre viene de lo mismo: URLs viejas que acaban en un 404 o redirigidas todas a la portada. Cada URL con tráfico o enlaces tiene que ir a su equivalente concreta.'
  - q: '¿Se pueden migrar los pedidos antiguos?'
    a: 'Se pueden importar como histórico, sin estado real de pago ni de envío. Sirve para que el comprador vea lo que compró y para los informes; no sirve para gestionar devoluciones de esos pedidos.'
  - q: '¿Cuánto se tarda?'
    a: 'Depende del catálogo y de cuántas funcionalidades propias había. Lo que nunca va rápido es el inventario de URLs y el mapa de redirecciones, y es justo lo que no se puede recortar.'
related: ['custom-themes', 'erp-integrations']
terms: ['liquid', 'metafields', 'sections-and-blocks']
updated: '2026-10-21'
verified: '2026-10-21'
---

## El orden que menos sorpresas da

**1. Inventario de URLs antes que nada.** Antes de hablar de diseño, saco la lista de URLs con tráfico y con enlaces entrantes. Esa lista es la que decide la estructura de la tienda nueva, no al contrario.

**2. Modelo de datos.** Qué era un producto, qué era una variante y qué era un campo propio en la plataforma vieja. Lo que no encaja en Shopify de serie va a [metacampos](/glosario/metacampos/) o a metaobjetos, y eso se decide antes de importar, no después.

**3. Catálogo e históricos.** Productos, variantes, imágenes, clientes y pedidos como histórico.

**4. Front-end.** Sobre un tema de pago o [a medida](/servicios/temas-shopify-a-medida/), con las secciones que tu equipo va a usar.

**5. Redirecciones, una por una.** Cada URL con valor a su equivalente. No a la portada: a su equivalente.

**6. Comprobación después de publicar.** Rastreo del sitio nuevo buscando 404 y cadenas de redirección, y seguimiento de las posiciones las semanas siguientes.

## Lo que se olvida y luego cuesta

Las funcionalidades propias de la plataforma vieja. Un módulo de PrestaShop o un plugin de WooCommerce que llevaba años haciendo algo que nadie recuerda haber pedido. Si no se inventaría antes de migrar, aparece el día después de publicar, normalmente en forma de "es que antes se podía...".

Mi forma de reducirlo: listar las funcionalidades con el equipo que atiende a los clientes, no solo con quien gestiona la web. Las cosas que importan de verdad las conoce quien recibe las llamadas.
