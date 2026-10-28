# Radar de preguntas

Qué se pregunta la gente y qué responde mal Google. La tarea de cada mañana añade aquí un bloque con la pregunta que ha elegido, dónde la vio y qué descartó. Sirve para tres cosas: no repetir tema, ver qué se repite de un mes a otro, y tener a mano el enlace al hilo original para ir a contestar allí cuando el artículo esté publicado.

Formato de cada bloque:

```
## AAAA-MM-DD

**Elegida:** <la pregunta, tal cual la hace la gente>
- Dónde: <foro, subreddit o hilo> <enlace>
- Hueco: <qué sale hoy en Google y por qué no sirve>
- Artículo: <slug> (<rama>)

**Descartadas:**
- <pregunta> <enlace>: <motivo>
- <pregunta> <enlace>: <motivo>
```

---

## 2026-10-21

**Elegida:** ¿puedo vender al por mayor en Shopify sin pagar Plus, y hasta dónde llego?
- Dónde: entrada manual, el primer artículo del blog. Se eligió por el cambio de 2026 que abrió B2B a Basic, Grow y Advanced.
- Hueco: lo que había en español eran notas de agencia repitiendo la nota de prensa, sin los límites concretos ni lo que pasa cuando los superas. Nada decía que una Function a medida necesita Plus.
- Artículo: `shopify-b2b-sin-plus` (publicado el 21-10-2026, también en inglés)

**Descartadas:**
- Migración de Scripts a Functions: la fecha límite ya pasó en junio de 2026, el pico de búsquedas se fue; se queda como tema de rescate.
- Cuánto cuesta un portal B2B: buen tema de conversión, pero mejor después de un artículo técnico que demuestre criterio.

## 2026-10-23

**Elegida:** ¿cómo pongo un pedido mínimo (por importe) en Shopify, y puedo hacerlo sin Plus?
- Dónde: Shopify Community, [Missing minimum order for B2B](https://community.shopify.com/t/missing-minimum-order-for-b2b/607451) y [B2B: Creating a Total Order Minimum Quantity Rule](https://community.shopify.com/t/b2b-creating-a-total-order-minimum-quantity-rule/307721). En el primero, una respuesta sigue diciendo que no hay mínimo nativo para B2B y manda a una app.
- Hueco: en español salen apps (Limitify, Yuko), un artículo traducido a máquina y un hilo viejo del foro que propone el apaño de las tarifas de envío. Nadie cuenta que desde el 13 de abril de 2026 la validación de límite de pedido de Checkout Blocks funciona en Basic, Grow y Advanced, ni lo que no cubre (mínimo por empresa, por mercado, mezclando variantes).
- Artículo: `pedido-minimo-shopify` (solo en español; el inglés compite con muchas guías de apps)
- De paso: corregidas seis páginas (ES y EN) que todavía decían que un mínimo por importe necesita una Function y Plus.

**Descartadas:**
- B2B y B2C en la misma tienda: duda recurrente y las guías de 2026 se contradicen sobre si hace falta Plus. Buen candidato para el siguiente.
- Cuánto cuesta un portal B2B: ya hay una página en `/preguntas/` con esa palabra clave; un artículo la canibalizaría.
- Migración de Scripts a Functions: sigue siendo tema de rescate, sin pico de búsquedas.

## 2026-10-27

**Elegida:** marqué la empresa como exenta de IVA y mi mayorista sigue viendo los precios con IVA en la tienda, ¿cómo le muestro los precios netos?
- Dónde: foro de desarrolladores de Shopify, [B2B company location with "Don't collect tax" still sees tax-inclusive prices on storefront](https://community.shopify.dev/t/title-b2b-company-location-with-dont-collect-tax-still-sees-tax-inclusive-prices-on-storefront-same-country-exemption-only-applied-at-checkout/35868) (8 de julio de 2026, tienda italiana en Grow, sigue abierto como petición de producto). La misma duda sale en el foro general de Shopify con etiquetas de cliente y en las búsquedas en español.
- Hueco: en español solo salen fichas de apps de doble precio (EUR Tax Dual Price, BSS, Singleton) y guías que se contradicen sobre el plan necesario. Nadie cuenta las dos cosas que importan: que el ajuste fiscal de la ubicación no lo lee el escaparate (y que `company_location` no expone ese dato en Liquid), ni que la documentación de Shopify avisa de que un cliente exento con precios con IVA incluido paga el precio completo de la lista.
- Artículo: `precios-sin-iva-shopify-b2b` (rama `borrador-2026-10-27-precios-sin-iva-shopify-b2b`, solo en español: el caso es de IVA europeo y el inglés compite con muchas fichas de app)
- Comprobado el 27-10: tres opciones de *Tax settings* en la ubicación, 3 catálogos activos en Basic/Grow/Advanced frente a ilimitados y asignación directa solo en Plus, el precio fijo anula el ajuste global del catálogo, `shop.taxes_included` deprecado porque depende del país, `company_location` sin propiedad de impuestos más allá de `tax_registration_id`, y la validación del número de IVA con Shopify Tax en la UE y el Reino Unido.

**Descartadas:**
- B2B y B2C en la misma tienda: sigue siendo buen candidato, pero este artículo le come la mitad del contenido fiscal. Mejor escribirlo después y enlazarlo.
- Precios distintos por cliente con etiquetas de cliente: ya hay una página en `/preguntas/` con esa intención y la canibalizaría.
- Separar inventario de mayorista y tienda por ubicaciones: tema real y sin buena respuesta, pero no está dentro de lo que puedo demostrar con código propio.

## 2026-10-28

**Elegida:** el checkout falso de octubre, ¿me ha pasado a mí?, y ¿cómo veo el JavaScript que meten las apps si no está en el tema?
- Dónde: foro de desarrolladores de Shopify, [The October Shopify checkout-hijack made affected orders look completely normal](https://community.shopify.dev/t/the-october-shopify-checkout-hijack-made-affected-orders-look-completely-normal-worth-a-quick-check/39038) (26 de octubre de 2026, cuatro respuestas que añaden tres puntos de inyección distintos), más el análisis técnico de [c/side](https://cside.com/blog/hulkapps-shopify-checkout-hijack). Tema pedido en vivo: hoy no querías B2B, para atraer también a tiendas B2C.
- Hueco: en inglés hay veinte listas de comprobación escritas en una semana, casi todas iguales y sin explicar el mecanismo. En español no hay nada propio: las búsquedas en castellano devuelven esos mismos blogs en inglés. Y ninguna de las listas dice las dos cosas que ordenan la auditoría: que el código llegaba como dato de configuración de la app (ni un diff del tema ni SRI lo veían), y que un píxel no puede secuestrar un botón porque corre en un iframe o en un worker, así que las puertas que importan son el tema y las incrustaciones de app.
- Artículo: `auditar-javascript-apps-shopify` (rama `borrador-2026-10-28-auditar-javascript-apps-shopify`, solo en español: el inglés está saturado de esta noticia)
- Comprobado el 28-10: los script tags no se pueden crear ni modificar desde el 1 de octubre de 2026 y dejan de inyectarse el 1 de marzo de 2027; la consulta `scriptTags` solo devuelve los de tu propia app; los píxeles se gestionan en Configuración > Eventos de cliente (iframe con `sandbox` los personalizados, web worker los de app, sin DOM ni interfaz); las extensiones de checkout corren en un web worker sin acceso a `window` ni al HTML del checkout; y el aviso oficial de que desinstalar una app no siempre borra su código del tema.

**Descartadas:**
- B2B y B2C en la misma tienda: descartada hoy por petición expresa (nada de B2B). Sigue siendo el siguiente candidato bueno.
- [Product descriptions are untrusted, but Dawn and Horizon render them raw](https://community.shopify.dev/t/product-descriptions-are-untrusted-but-dawn-and-horizon-render-them-raw-and-liquid-cant-sanitize-them/39103) (28-10): tema real y del mismo terreno, pero la duda es de quien desarrolla apps, no de quien tiene la tienda, y apenas tiene búsquedas.
- [Prefilling shipping address in native checkout for guest customers on non-Plus plans](https://community.shopify.dev/t/prefilling-shipping-address-in-shopify-native-checkout-via-storefront-api-for-guest-customers-on-non-plus-plans/38972) (23-10): caso demasiado concreto de un desarrollo headless; nadie busca eso en español.
- [Sudden LCP spike since October 27 across two Shopify apps](https://community.shopify.dev/t/sudden-lcp-spike-since-october-27-across-two-shopify-apps/39135) (28-10): son métricas del panel de partners, no de tiendas, y el dato está en movimiento sin confirmar.
