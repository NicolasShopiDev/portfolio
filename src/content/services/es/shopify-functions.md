---
pair: 'functions-development'
label: 'Shopify Functions'
h1: 'Desarrollo de Shopify Functions'
pitch: 'Reglas de negocio complejas en el carrito y el checkout, sin apps de terceros'
topic: 'plus'
lead: 'Escribo Functions de descuento, validación de carrito, transformación de líneas y métodos de envío y de pago, en JavaScript o Rust, con su input query ajustada y sus pruebas. Si tu regla de negocio no cabe en una app del App Store, cabe aquí.'
serviceName: 'Desarrollo de Shopify Functions'
serviceType: 'Desarrollo de software para ecommerce'
seoTitle: 'Desarrollo de Shopify Functions | Nicolás Mateos'
description: 'Shopify Functions a medida: descuentos, validaciones de carrito, transformación de líneas, envíos y pagos. En JavaScript o Rust, con pruebas y código revisable.'
keyword: 'desarrollador shopify functions'
cases: []
faq:
  - q: '¿Necesito Shopify Plus para una Function a medida?'
    a: 'Sí. Solo las tiendas con Shopify Plus pueden instalar apps personalizadas que contengan Shopify Functions. En Basic, Grow y Advanced puedes usar funciones que vengan dentro de una app pública del App Store, pero no una escrita para tu tienda.'
  - q: '¿JavaScript o Rust?'
    a: 'JavaScript para la mayoría de los casos: se lee, se prueba y lo puede mantener cualquiera. Rust cuando la función recorre carritos muy grandes y el presupuesto de instrucciones aprieta. Lo decido con el caso delante, no por defecto.'
  - q: '¿Puede una Function consultar mi ERP?'
    a: 'No. Una Function no hace llamadas de red: solo ve los datos que pide en su input query. Si la regla depende de un dato externo, ese dato tiene que estar antes en un metacampo, y eso es trabajo de integración.'
  - q: '¿Qué entregas exactamente?'
    a: 'La app personalizada con la Function, su input query, sus pruebas unitarias, la configuración en el admin y un documento corto con qué hace, qué datos necesita y cómo se cambia. El código es tuyo y es revisable.'
related: ['scripts-to-functions', 'checkout-development']
terms: ['shopify-functions', 'input-query', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Cuándo hace falta una Function

Cuando la regla es tuya. Los tres casos que más me llegan:

- **Validaciones que bloquean el checkout.** Cajas completas, mínimo por pedido, no mezclar tarifas, un producto que exige otro. La plataforma trae mínimos por variante, pero nada que mire el carrito entero.
- **Descuentos que ninguna app calcula igual.** Escalados por familia de producto, por sede de la empresa, combinaciones excluyentes.
- **Envíos y pagos condicionados.** Ocultar contra reembolso por encima de un importe, reordenar métodos según el peso, esconder una transportadora para una zona.

Si lo que necesitas es uno de los descuentos estándar, una app del App Store sale más barata y la mantiene otro. Te lo diré si es el caso.

## Cómo las escribo

Lo que diferencia una Function que aguanta de una que falla el primer pedido grande no es la lógica: es el input.

Una Function tiene un presupuesto de ejecución del orden de 11 millones de instrucciones y un tope de 128 kB en su input. En un carrito de diez líneas eso no se nota. En un bloc de pedido mayorista de 200 líneas, cada campo que pides de más se multiplica por 200. Así que la input query pide exactamente los campos que lee el código, con alias para que los metacampos lleguen con un nombre legible.

El segundo detalle, que cuesta dos días de soporte cuando se olvida: el `buyerJourney`. Una validación que bloquea en todos los pasos impide al comprador escribir 7 camino de 12. Se bloquea en el checkout, no mientras se edita el carrito.

## Lo que puedes ver antes de contratarme

Una Function de validación completa, con su input query y sus pruebas, está publicada en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab), y en la [portada](/) hay un Checkout Lab donde puedes cambiarle la configuración y ver qué deja de funcionar. Es el mismo archivo que se despliega a una tienda.

## Cómo trabajamos

Primero me cuentas la regla en palabras, con un caso real y un caso límite. Si la regla se puede resolver sin código (un [catálogo](/glosario/catalogo-b2b/), unas [reglas de cantidad](/glosario/reglas-de-cantidad/)), te lo digo y te ahorras el desarrollo. Si no, escribo la Function con sus pruebas, la desplegamos en una tienda de desarrollo y la probamos con tu carrito más feo antes de tocar producción.
