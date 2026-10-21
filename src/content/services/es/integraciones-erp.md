---
pair: 'erp-integrations'
label: 'Integraciones'
h1: 'Integraciones de Shopify con ERP y sistemas externos'
lead: 'Conecto Shopify con el ERP, el almacén o el PIM que ya tienes: stock, precios, clientes, pedidos y facturas. Lo difícil nunca es GraphQL, es decidir quién gana cuando los dos lados cambian el mismo dato.'
serviceName: 'Integración de Shopify con sistemas externos'
serviceType: 'Integración de sistemas'
seoTitle: 'Integrar Shopify con un ERP | Nicolás Mateos'
description: 'Integraciones de Shopify con ERP, almacén o PIM: stock, precios, pedidos y clientes, por la Admin API GraphQL, con reintentos y registro de errores.'
keyword: 'integrar erp con shopify'
cases: []
faq:
  - q: '¿App a medida o conector del mercado?'
    a: 'Si tu ERP es uno de los grandes y tu modelo de datos es estándar, un conector del mercado sale más barato y lo mantiene otro. Una integración a medida se justifica cuando el modelo no es estándar: tarifas B2B por empresa, stock por almacén, referencias que no coinciden.'
  - q: '¿Puede una Shopify Function consultar el ERP?'
    a: 'No. Una Function no hace llamadas de red. Si una regla de carrito depende de un dato del ERP, ese dato se sincroniza antes a un metacampo y la Function lo lee de ahí.'
  - q: '¿Cada cuánto se sincroniza?'
    a: 'Depende del dato. El stock, lo más cerca de tiempo real que aguante el ERP, con webhooks en el sentido Shopify a ERP. Los precios y el catálogo, por lotes y de noche, que es cuando se puede reintentar sin prisa.'
related: ['custom-apps', 'migration-to-shopify']
terms: ['admin-graphql-api', 'metafields', 'draft-order']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Las tres decisiones que hay que tomar antes del código

Ninguna es técnica, y las tres se pagan caras si se dejan sin decidir:

**Quién es la fuente de verdad de cada dato.** Si el ERP y Shopify pueden modificar el stock, hay que decidir el sentido y escribirlo. Casi todas las integraciones que he visto romperse tenían este punto a medias.

**Qué pasa con lo que falla.** Una línea rechazada no puede quedarse en silencio. Hace falta reintento, un registro y alguien que lo mire. Sin eso, el fallo aparece tres semanas después como "nos falta un pedido".

**Cómo se identifican las cosas.** La referencia del ERP y la del catálogo de Shopify casi nunca coinciden. Esa correspondencia tiene que vivir en algún sitio, y lo normal es un [metacampo](/glosario/metacampos/).

## Lo que la plataforma pone de su parte

La [Admin API GraphQL](/glosario/api-graphql-de-admin/) tiene presupuesto por consulta y por ventana de tiempo: una sincronización que recorre 20.000 variantes de una en una se lo come, y hecha por lotes no. Para cargas grandes están las operaciones masivas, que son más lentas de programar y la diferencia entre una sincronización nocturna que termina y una que se queda a medias.

Y en el otro sentido, los webhooks: Shopify avisa de un pedido nuevo en lugar de que tú preguntes cada cinco minutos.

## En B2B hay un dato más

Un portal mayorista añade las empresas, sus sedes y su tarifa. Si el ERP es el que decide a qué nivel pertenece cada cliente, esa asignación también se sincroniza, y conviene decidir quién puede cambiarla desde Shopify: normalmente, nadie.
