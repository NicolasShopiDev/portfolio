# Radar de preguntas

## 2026-11-05 · Pagos por perfil y destinos B2B

**Elegida 1:** ¿puedo dejar la transferencia solo a mayoristas y tarjeta a particulares?
- Pregunta real: https://community.shopify.com/t/different-payment-methods-for-different-clients/92417 . Otro hilo con la misma necesidad y problemas de compatibilidad de apps: https://community.shopify.com/t/how-to-block-a-payment-method-for-specific-customer/14151?page=4 . Son antecedentes históricos, no confirmación de capacidades actuales ni demanda medida.
- Revisión de resultados: abundan recomendaciones de apps y etiquetas. La ayuda específica de Checkout Blocks exige Plus para personalizar métodos; no extrapolar desde otras funciones de la app disponibles en planes inferiores.
- Fuentes primarias contrastadas el 05-11-2026: https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/customizations/payment-methods ; https://help.shopify.com/en/manual/checkout-settings/checkout-customization ; https://help.shopify.com/en/manual/payments/manual-payments ; https://shopify.dev/docs/apps/build/functions .
- Aportación: política ficticia por perfil, separación de método/plazo/crédito, requisitos concretos y matriz propia de aceptación. No se afirma configurar ni probar pagos en una tienda.
- Artículos: ES `transferencia-solo-mayoristas-shopify`; EN `bank-transfer-wholesale-only-shopify`, mismo pair. Intención específica distinta de la página general de checkout y del post sobre pago aplazado.

**Elegida 2:** ¿cómo permito otra dirección de entrega B2B y se guarda para el siguiente pedido?
- Pregunta real: https://community.shopify.com/t/saving-a-customers-ship-to-address-on-checkout/325219 . Necesidad de entregas a terceros: https://community.shopify.com/t/offer-my-catalogue-for-dropshipping-to-other-shopify-stores-be-dropshipping-supplier/264753 . Los hilos son históricos; se verifican las capacidades en la ayuda actual.
- Fuentes contrastadas el 05-11-2026: https://help.shopify.com/en/manual/b2b/checkout-and-orders/checkout-settings y https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods .
- Aportación: distinguir destino puntual, sede y cliente facturado; ejemplo ficticio Madrid/Valencia y matriz de transporte, permisos y datos ERP. No afirmar que la dirección puntual se convierte en agenda persistente.
- Artículos: ES `direccion-envio-puntual-shopify-b2b`; EN `one-time-shipping-address-shopify-b2b`, mismo pair. No duplica el diagnóstico general de integración ERP.

**Descartadas:** solicitudes de acceso y PO obligatoria se publicaron el 04-11; repetir pedido se solapa con pedido rápido; reglas de caja y descuentos B2B ya cubiertos. No se atribuyen volúmenes ni poca competencia sin datos. Investigación complementada con búsqueda del toolkit Shopify; sus resultados generales se contrastan con páginas oficiales específicas. Ningún mensaje a terceros.

**Validación del lote:** build estricto y comprobación de las cuatro páginas generadas, enlaces internos, canonical, hreflang, indexabilidad, RSS, sitemap y fechas mes/año. En esta ejecución no hay navegadores disponibles en CUA (inventario vacío); la revisión móvil se limita al contenido, estructura y CSS responsive existente, con tablas desplazables a 768 px y sin cambios en plantillas. No se afirma una revisión visual nueva en móvil.

## 2026-11-04 · Solicitudes mayoristas y referencia de compra

**Elegida 1:** ¿cómo solicita acceso un mayorista y quién lo aprueba antes de comprar?
- Pregunta real: https://community.shopify.com/t/merchants-selling-wholesale-how-do-new-b2b-buyers-apply-for-an-account-on-your-store/646242 . Otra señal reciente: https://community.shopify.com/t/foxrate-wholesale-approvals-just-launched-storefront-application-form-one-click-company-creation/705492 (anuncio de app del 27 de octubre; solo evidencia de la necesidad, no fuente de capacidades).
- Revisión de resultados: conviven respuestas antiguas que lo describen como manual y anuncios de apps. No se atribuyen volúmenes ni dificultad. La ayuda vigente documenta solicitudes mediante Forms, autorización, límites con tiendas cerradas y alta de empresas nuevas.
- Aportación: tabla propia de datos/decisiones, estados organizativos, recorrido de empleados existentes y matriz de aceptación. Ejemplos identificados como propuestas, sin resultados de clientes.
- Fuentes primarias comprobadas el 04-11-2026: https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests y https://help.shopify.com/en/manual/b2b/reports-and-automations/automations .
- Artículos: ES `solicitud-alta-mayorista-shopify`; EN `wholesale-account-requests-shopify`; mismo pair. Intención distinta del artículo sobre migrar cuentas heredadas y del servicio de área de cliente.

**Elegida 2:** ¿puedo exigir y validar el campo nativo de número de pedido de compra B2B?
- Preguntas reales: https://community.shopify.com/t/validate-po-number-upon-checkout-b2b/318581 y https://community.shopify.com/t/how-we-can-make-the-po-number-field-required-on-checkout-page-for-the-b2b-store/342321 . Son hilos históricos, no prueba de las capacidades actuales.
- Revisión de resultados: una respuesta del foro todavía afirma que Functions no puede leer el campo; el changelog oficial de abril de 2026 documenta poNumber y el target de error nativo. No se convierte una coincidencia de formato en prueba de autorización de compra.
- Fuentes comprobadas el 04-11-2026: https://shopify.dev/changelog/posts/cart-and-checkout-validation-adds-billing-address-and-po-number-error-targets ; https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation ; https://shopify.dev/docs/apps/build/functions .
- Aportación: separación PO/pedido/factura/referencia ERP, alcance comercial, matriz propia de valores vacíos, espacios, formatos y perfiles. No se publica una Function no ejecutada como si estuviera desplegada.
- Artículos: ES `numero-pedido-compra-obligatorio-shopify-b2b`; EN `require-po-number-shopify-b2b`; mismo pair. Intención específica frente a la página general de personalizar checkout.

**Descartadas:** ocultar precios hasta aprobación ya tiene página específica; recordatorios de pago se solapan con el artículo de plazos; cajas mezcladas ya están tratadas. Ningún envío a foros o terceros.

## 2026-11-03 · Cierre del plan principal y reserva

Nicolás solicita publicar todo el plan pendiente, incluida la reserva, y autoriza dos temas nuevos diarios en ambos idiomas. Se redactan ocho temas con sus dieciséis páginas ES/EN; los títulos y slugs están en `BLOG-PUBLICACIONES.json`.

- Portal desde Excel/correo: ejemplo ficticio de transformación del pedido y criterios de aceptación. Fuentes oficiales: borradores B2B e integraciones externas.
- Importar tarifas: tabla propia de correspondencias, diferenciada del formato CSV oficial; comprobar el archivo con la muestra actual de Shopify antes de importarlo.
- Pago aplazado: separar vencimiento, captura y exposición. Documentación oficial confirma que el vencimiento no captura automáticamente y que los depósitos requieren Plus.
- Errores de ERP: ficha ficticia de incidente y arquitectura recomendada de identidad, reintentos y conciliación; no se atribuyen incidencias a clientes.
- Migración PrestaShop: plan propuesto de aceptación y mapeo de reglas; sin promesas de posiciones SEO ni credenciales migradas sin validación.
- Pedido rápido: alcance entre tabla de variantes, búsqueda SKU y carga; referencia al caso público Émolo, sin inventar métricas.
- Rendimiento de apps: método de comparación y tablas de trabajo; sin mediciones antes/después inventadas. Documentación oficial de Shopify sobre scripts y costes de JavaScript.
- Recargo de equivalencia: se sustituye la propuesta no probada por una guía de diseño y aceptación con documentación de AEAT y Shopify. No afirma cálculo nativo inexistente, tipos universales ni automatización desplegada.

El tema de descuentos B2B de la reserva ya está cubierto por `descuentos-b2b-black-friday-shopify` y su pareja inglesa; no se duplica. Investigación guiada por el plan aprobado, sin afirmar demanda o competencia medida. Fuentes enlazadas en cada artículo y consultadas el 03-11-2026.

## 2026-11-03 · Cajas y múltiplos

**Elegida:** ¿cómo vendo cajas completas y qué pasa si el cliente mezcla tallas o colores?
- Dónde: tercer tema del plan, solicitado por Nicolás. Antecedentes públicos: https://community.shopify.com/t/how-do-i-set-up-case-pack-quantities/304201 y https://community.shopify.com/t/quantity-rules-that-reach-retail-customers-not-just-b2b-catalogs/700917 . Los hilos aportan preguntas, no verifican capacidades actuales ni volumen de búsqueda.
- Enfoque: unidad de venta, cajas por variante, cajas mezcladas y packs de composición fija. Se diferencia del post de pedido mínimo por importe y del diagnóstico de precios.
- Artículos: ES `vender-por-cajas-shopify`; EN `sell-case-packs-shopify`, mismo `pair`.
- Comprobado el 03-11-2026: reglas nativas, campos Liquid quantity_rule, actualización del tema, disponibilidad de Functions y alcance de la API de validación. Demo y snippet propios revisados: no se atribuye al ejemplo por línea una agrupación de variantes.
- Aportación: ejemplos de modelado de piezas/cajas y matriz de aceptación; no se presentan como pruebas de una tienda de cliente.

**Descartadas:** sin nueva selección competitiva; se ejecuta el siguiente tema del plan.

## 2026-11-03 · Precio incorrecto B2B

**Elegida:** mi mayorista ve un precio incorrecto en Shopify, ¿qué reviso?
- Dónde: segundo tema del plan editorial aprobado; antecedente público sobre presentación incorrecta de precios: https://community.shopify.com/t/price-lists-incorrectly-applies-discount-to-compare-at-price/168306 . Es un hilo histórico, no prueba de un fallo actual ni de volumen de búsquedas.
- Enfoque: diagnóstico de un precio inesperado, distinto de la página de preguntas sobre configurar precios por cliente. Ficha reproducible, asignaciones, prioridades, precio fijo, volumen, promociones y recorrido del tema. Sin afirmar un hueco competitivo medido.
- Artículos: ES `precio-incorrecto-shopify-b2b`; EN `wrong-price-shopify-b2b`. Mismo `pair`, FAQ y CTA en ambos idiomas.
- Verificado el 03-11-2026: documentación oficial de Markets/catálogos, ajustes de precio, descuentos B2B, cantidades y presentación de precios por volumen en el tema. Ejemplos identificados como hipotéticos; no se afirma haber auditado una tienda real.

**Descartadas:** no se abre una selección nueva; se ejecuta el siguiente tema del plan por petición de Nicolás.

## 2026-11-03

**Elegida:** ¿puedo vender a particulares y mayoristas en la misma tienda Shopify?
- Dónde: primer tema del plan editorial solicitado por Nicolás; pregunta pública en https://www.reddit.com/r/shopify/comments/1lvhh2f/anyone_successfully_running_wholesale_retail_on/ . Tema ya pendiente en las entradas anteriores del radar.
- Enfoque: decidir entre tienda mixta y dedicada, separar tarifas sin afectar a particulares y definir pruebas de aceptación. No se atribuyen volúmenes de búsqueda ni un hueco competitivo medido.
- Artículo: `shopify-b2b-b2c-misma-tienda`, en español, preparado para publicación el 03-11-2026.
- Verificado: documentación oficial de Shopify sobre tipos de tienda, checklist de tienda mixta, disponibilidad de B2B y catálogos con Markets. Atención al límite de tres asignaciones activas, no tres catálogos únicos, y a la condición Company locations para no incluir D2C en la tarifa B2B.
- Validación: build con PENDING_GUARD=strict y revisión en pantalla estrecha. Ejemplos y matriz de aceptación identificados como propuestas, sin atribuir pruebas a una tienda real.

**Descartadas:** ninguna búsqueda competitiva nueva; se ejecuta el tema aprobado expresamente por Nicolás.

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

## 2026-11-03 (tres artículos más)

Entrada manual: tres artículos el mismo día para recuperar el retraso, sobre problemas recientes y repetidos, B2B o B2C. Hay otras dos entradas de este día al principio del archivo (`shopify-b2b-b2c-misma-tienda` y `precio-incorrecto-shopify-b2b`), publicadas en paralelo; por eso el tercero de este bloque se quedó con los descuentos de campaña, que esos dos artículos solo mencionan de pasada, y enlaza a los dos. Los tres se publican en español y en inglés, según la regla nueva de BLOG.md.

**Elegida:** mis conversiones de Google Ads, Meta o afiliados cayeron a finales de agosto, ¿qué ha pasado con los scripts adicionales?
- Dónde: Shopify Community, [Meta reporting fewer purchases than Shopify after the Aug 26 checkout upgrade](https://community.shopify.com/t/meta-reporting-fewer-purchases-than-shopify-after-the-aug-26-checkout-upgrade-is-anyone-else-seeing-this/672772) y [Two weeks after the Aug 26 script tag cutoff](https://community.shopify.com/t/two-weeks-after-the-aug-26-script-tag-cutoff-what-actually-broke-and-why-it-reads-as-a-sales-drop/679402). Ninguno tiene una causa confirmada por un comerciante.
- Hueco: en español salen hilos viejos del foro sobre la etiqueta de Google Ads y, en inglés, avisos de agencias escritos antes del 26 de agosto. Nadie da el píxel personalizado equivalente al script, ni cuenta las dos causas de la caída que no se ven en el código: el consentimiento (la propia ayuda de Shopify avisa) y el subdominio de las cuentas de cliente, sin el que los píxeles no funcionan en la página de estado del pedido.
- Artículo: `scripts-adicionales-shopify` / `shopify-additional-scripts`
- Comprobado el 03-11: fecha límite sin Plus el 26-08-2026, scripts adicionales de solo lectura desde el 28-08-2025, un script desactivado no se reactiva tras la actualización, `checkout_completed` se dispara una vez por checkout (en la primera oferta si hay ofertas posteriores a la compra), URL del sandbox distinta de la de la página, píxeles nuevos con permiso de marketing y analítica por defecto, etiquetas de Meta y Google Analytics de Preferencias convertidas en píxeles personalizados en febrero de 2025, extensiones de agradecimiento y estado del pedido en todos los planes menos Starter. Sin confirmar en la ayuda: si el contenido de los scripts se sigue pudiendo leer después de la actualización.

**Elegida:** ¿tengo que dejar las cuentas de cliente heredadas?, ¿qué se rompe al cambiar?
- Dónde: Shopify Community, [Customer account creation has been disabled](https://community.shopify.com/t/customer-account-creation-has-been-disabled/591109) (sin resolver) y [For those who have migrated to Shopify's new customer accounts, what compatibility issues did you encounter?](https://community.shopify.com/t/for-those-who-have-migrated-to-shopify-s-new-customer-accounts-what-compatibility-issues-did-you-encounter/647228).
- Hueco: en español hay un hilo de 2024 del foro, la ayuda de Shopify y blogs genéricos. Nadie cuenta que cambiar a un tema sin las plantillas heredadas actualiza la tienda sola, ni lo que pasa con Flow y los segmentos, ni el cambio del 28 de octubre (`customers/enable` en el primer inicio de sesión y `customer.has_account`).
- Artículo: `cuentas-de-cliente-heredadas-shopify` / `shopify-legacy-customer-accounts`
- Comprobado el 03-11: obsoletas desde el 26-02-2026 y sin fecha final publicada, más del 70 % de tiendas en las cuentas nuevas según Shopify, 30 días para revertir, Multipass sigue en Plus, un solo dominio de cuentas para todos los mercados, apps con extensiones de cuenta desde Basic y proveedor de identidad propio solo en Plus. Sin confirmar: qué permite una app personalizada con extensiones de cuenta fuera de Plus.

**Elegida:** ¿por qué mi descuento de Black Friday se aplica también a los mayoristas?
- Dónde: la duda sale de cruzar dos cambios de 2026 (B2B en planes sin Plus el 2 de abril y descuentos B2B activados por defecto el 23 de junio) con las campañas de noviembre. En el foro aparece de lado, en hilos sobre tiendas combinadas como [B2B to B2C without duplicating products](https://community.shopify.com/t/b2b-to-b2c-without-duplicating-products/589972). No he medido búsquedas: es una apuesta por la fecha.
- Hueco: nadie en español explica que los descuentos para todos los clientes se suman al precio de catálogo del mayorista, que la elegibilidad por mercado lo evita desde mayo, ni que mercados y segmentos son excluyentes.
- Artículo: `descuentos-b2b-black-friday-shopify` / `shopify-b2b-discounts-black-friday`
- Comprobado el 03-11: descuentos sobre el precio de catálogo y para B2B y consumidor por defecto en tienda combinada, activación automática del 23-06-2026 solo en tiendas sin descuentos activos o programados, elegibilidad por mercado desde el 07-05-2026 desde Basic con Markets nuevo, sin herencia entre tipos de mercado, mercados o segmentos y no los dos, y las versiones de la API anteriores a 2026-07 filtran los descuentos con mercado.

**Descartadas:**
- Checkout falso de octubre: ya publicado el 28-10. Desde entonces Shopify publicó el aviso al salir de la tienda hacia otra web ([20-10](https://changelog.shopify.com/posts/new-protection-against-unexpected-redirects), acotado el 23-10 a sitios maliciosos o sospechosos) y las novedades de seguridad para apps del [27-10](https://shopify.dev/changelog/blog/app-security-updates-october-2026). Merece una actualización del artículo, no uno nuevo.
- Verifactu: blogs de asesorías dicen que Hacienda anunció el 5-10-2026 un aplazamiento a octubre de 2028, pero no he encontrado la norma publicada; hasta que salga, la fecha legal sigue siendo el 1-1-2027 para sociedades. Escribirlo ahora es escribirlo dos veces.
- Colecciones con varias fuentes (API 2026-07): las apps sin actualizar no verían esas colecciones, pero solo lo he encontrado en blogs de terceros.
- Fall '26 Edition (28-10): comercio con agentes, mucho anuncio y poco dato comprobable todavía; la recepción entre desarrolladores de temas es mala.

## Noviembre de 2026: prueba de recomendación de freelance Shopify B2B

- Origen: petición directa de Nicolás y dos capturas aportadas en esta conversación; no se presenta como una investigación de demanda externa.
- Enfoque: artículo para compradores sobre recomendaciones observadas, con capturas, casos publicados y un prompt para repetir la consulta sin incluir el nombre del autor. Se reserva el proceso interno de AEO.
- ES: `ia-recomienda-desarrollador-shopify-b2b`; EN: `ai-recommends-shopify-b2b-developer`; pair: `ia-recomienda-desarrollador-shopify-b2b`.
- Estado: publicación de ambas versiones autorizada expresamente por Nicolás el 5 de noviembre de 2026. Se utilizan solo las dos capturas seleccionadas; se excluyen la recomendación con fotografía incorrecta y las conversaciones privadas posteriores.
- Límites: la captura de Google no muestra la consulta completa; no se afirma independencia verificada de las pruebas, porcentaje de aparición, aumento de clientes ni causalidad de los cambios recientes. La adaptación inglesa del prompt no se presenta como prueba ejecutada en inglés.
- Contraste interno: el caso de Émolo describe una tienda mayorista aparte que reutiliza Prestige; no se confunde reutilizar el tema con implantar B2B en la misma tienda B2C. La ficha de Hifas da Terra respalda las piezas mencionadas sin atribuir ventas medidas.
