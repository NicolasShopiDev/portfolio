---
pair: shopify-b2b-sin-plus
title: 'Shopify B2B sin Plus: qué puedes hacer en Basic, Grow y Advanced'
seoTitle: 'Shopify B2B sin Plus: qué puedes y qué no (2026)'
description: 'B2B nativo ya funciona en Basic, Grow y Advanced, con un tope de 3 catálogos activos. Qué cubre de verdad, dónde se rompe y cuándo compensa pasar a Plus.'
keyword: 'shopify b2b sin plus'
date: '2026-10-21'
tags: ['Shopify B2B', 'Catálogos', 'Planes']
faq:
  - q: '¿Shopify B2B funciona en el plan Basic?'
    a: 'Sí. La documentación de Shopify lista B2B en Basic, Grow, Advanced y Shopify Plus, y lo excluye solo de Starter y Retail. En Basic tienes empresas, ubicaciones y catálogos con precios propios, con un tope de 3 catálogos activos.'
  - q: '¿Cuántos catálogos B2B puedo tener sin Shopify Plus?'
    a: 'Tres activos, contando todos tus mercados B2B juntos, no tres por mercado. Shopify Plus no tiene ese tope y además permite asignar un catálogo directamente a una empresa o a una ubicación concreta.'
  - q: '¿Puedo tener un precio negociado por cliente sin Plus?'
    a: 'De forma nativa no. Sin Plus los catálogos se asignan a través de mercados B2B, así que lo que puedes montar son niveles de precio comunes (mayorista, distribuidor, cuentas clave) y no una lista por cuenta. Para precios por cuenta necesitas Plus o una app pública que aplique el descuento.'
  - q: '¿Necesito un tema nuevo para vender B2B en Shopify?'
    a: 'No. Un portal mayorista se puede montar sobre el tema que ya tienes: el precio del catálogo llega resuelto al tema y el acceso se decide con una condición de Liquid sobre customer.b2b?. Lo que suele hacer falta es trabajo de front-end sobre ese tema, no empezar de cero.'
  - q: '¿Puedo usar Shopify Functions a medida en Advanced?'
    a: 'No. Solo las tiendas con Shopify Plus pueden instalar apps personalizadas que contengan Shopify Functions. En Basic, Grow y Advanced puedes usar funciones que vengan dentro de una app pública del App Store, pero no una Function escrita para tu tienda.'
cta:
  heading: '¿Te has quedado sin catálogos?'
  text: 'Monto portales mayoristas sobre Shopify B2B, con Plus y sin Plus. Cuéntame cómo tienes los precios y los niveles de cliente, y te digo qué entra en tu plan, qué no y qué saldría más barato a medio plazo.'
  label: 'Cuéntame tu caso'
---

Durante años, "vender al por mayor en Shopify" quería decir una de dos cosas: pagar Shopify Plus o montar un apaño con etiquetas de cliente, descuentos automáticos y una tienda paralela. Ya no. Hoy la documentación de Shopify lista B2B en los planes **Basic, Grow, Advanced y Shopify Plus**, y lo excluye solo de Starter y Retail.

Eso cambia la pregunta. Ya no es "¿puedo hacer B2B sin Plus?", porque sí puedes, sino **dónde está el muro**. Y el muro tiene un número concreto: en Basic, Grow y Advanced puedes asignar *hasta 3 catálogos activos* contando todos tus mercados B2B juntos. Ese número decide si tu proyecto cabe en tu plan o no, mucho antes que cualquier otra cosa.

Esto es lo que entra, lo que no, y cómo lo resuelvo cuando no entra.

> Los límites de este artículo están comprobados en la documentación oficial de Shopify el 21 de octubre de 2026. Shopify los mueve: antes de tomar una decisión de plan, vuelve a mirarlos.

## Qué significa "B2B nativo" en Shopify

B2B no es una app ni un tema: es un modelo de datos dentro de tu tienda. Tiene tres piezas.

- **Empresas (companies).** El cliente deja de ser una persona y pasa a ser una empresa con sus ubicaciones. Cada ubicación tiene su dirección de envío, sus impuestos y sus condiciones.
- **Clientes asociados.** Las personas que compran en nombre de esa empresa, cada una ligada a una o varias ubicaciones.
- **Catálogos.** Un conjunto de productos con sus propios precios, reglas de cantidad y precios por volumen. Es el equivalente a tu lista de precios de mayorista.

Lo importante para el front-end: cuando un comprador entra con su cuenta de empresa, **el precio del catálogo ya llega resuelto al tema**. No tienes que calcular nada. Lo que sí tienes que hacer es decidir quién ve precios y quién no:

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
  <button name="add" type="submit">Añadir al pedido</button>
{% else %}
  <a class="btn" href="/account/login">Accede con tu cuenta para ver precios</a>
{% endif %}
```

Esa condición vale como regla de oro: si el visitante no es B2B, el precio **no debería llegar nunca al HTML**, no solo esconderse con CSS. Y si una misma empresa compra desde varias delegaciones, `customer.current_location` te deja cambiar portes, mínimos o mensajes por ubicación sin duplicar plantillas.

## Los límites, en una tabla

Estos son los números que marcan el proyecto. Los primeros dos dependen del plan; el resto son topes de la plataforma, iguales en todos los planes que soportan B2B.

| Límite | Basic / Grow / Advanced | Shopify Plus |
| --- | --- | --- |
| Catálogos activos | 3 en total, en todos los mercados B2B | Sin límite |
| Asignación del catálogo | A través de mercados B2B | Directa a empresa y a ubicación |
| Número de empresas | Sin límite | Sin límite |
| Ubicaciones por empresa | 10.000 | 10.000 |
| Clientes por empresa | 10.000 | 10.000 |
| Catálogos por ubicación | 25 | 25 |
| Clientes por ubicación | 50 | 50 |

Fíjate en la contradicción aparente entre la primera fila y la sexta: una ubicación admite hasta 25 catálogos, pero sin Plus solo puedes tener 3 activos en toda la tienda. El tope de 25 es de la plataforma; el de 3 es de tu plan. Es el segundo el que te va a doler.

## El tope de 3 catálogos: qué cabe y qué no

Tres catálogos dan para una estructura de precios por **niveles**, que es como trabaja la mayoría de las marcas:

1. Mayorista (el precio de tarifa menos un porcentaje).
2. Distribuidor (un escalón más abajo, con mínimos más altos).
3. Cuentas clave o export.

Dentro de cada catálogo todavía tienes margen: puedes fijar precios por variante o un descuento porcentual sobre toda la tarifa, y añadir **reglas de cantidad** (mínimos, múltiplos, máximos) y **precios por volumen** (saltos de precio al pasar de X unidades). Nada de eso está reservado a Plus. Un catálogo bien montado con escalones de volumen cubre bastantes casos que a primera vista parecen necesitar una lista por cliente.

Lo que no cabe en tres catálogos:

- **Precio negociado cuenta por cuenta.** Si cada distribuidor tiene su acuerdo, necesitas una lista por cuenta y ahí se acaba el plan.
- **Un catálogo distinto por delegación de la misma empresa.** Sin Plus no puedes asignar un catálogo directamente a una ubicación.
- **Más de tres tarifas reales.** Y "reales" quiere decir que de verdad se usan: he visto listas de ocho tarifas que al mirar los pedidos del último año eran dos.

## La asignación por mercados cambia cómo montas el proyecto

Este punto se pasa por alto y es el que más decisiones arrastra. Sin Plus, un catálogo no se enchufa a una empresa: se enchufa a un **mercado B2B**, y las empresas de ese mercado heredan el catálogo. Con Plus puedes hacer lo contrario, asignar el catálogo directamente a la empresa o a una de sus ubicaciones, e incluso asignar varios catálogos a la misma.

Consecuencias prácticas si estás en Advanced:

- Tu segmentación de precios tiene que coincidir con tu segmentación **geográfica**. Si tus tres niveles son "mayorista España", "mayorista Portugal" y "distribuidor", ya has gastado los tres.
- Mover a un cliente de nivel significa moverlo de mercado, con lo que eso implica en idioma, moneda e impuestos.
- Los *rollouts* (programar el cambio de estado de un catálogo) solo existen para catálogos creados para un mercado. Un catálogo asignado directo a una empresa no entra.

Si al dibujar esto en una pizarra te salen más de tres combinaciones, tienes la respuesta sobre el plan sin necesidad de más análisis.

## Cómo resolverlo sin pasar a Plus

Por orden de lo que menos deuda técnica deja:

**1. Aprovechar el volumen antes que el catálogo.** Antes de pedir un cuarto catálogo, mira si la diferencia entre dos clientes es de *precio* o de *cantidad*. Si es de cantidad, los saltos por volumen dentro de un catálogo te lo resuelven, y el comprador además ve el incentivo de subir de escalón.

**2. Ordenar por mercado, no por cliente.** Monta los tres catálogos como tres niveles limpios y lleva a cada empresa al mercado que le toca. Es aburrido y es lo que aguanta mejor el paso del tiempo.

**3. Una app pública del App Store si necesitas descuentos por cuenta.** Aquí hay un detalle que casi nadie cuenta y que conviene saber antes de presupuestar: *solo las tiendas con Shopify Plus pueden instalar apps personalizadas que contengan Shopify Functions*. Es decir, una Function escrita a medida para tu tienda, con tus reglas de descuento por empresa, **no es una opción en Basic, Grow o Advanced**. Lo que sí puedes usar es una app pública del App Store que lleve funciones dentro. La diferencia importa: con una app pública te adaptas a su modelo de datos; con una Function propia el modelo lo pones tú. Si quieres ver por dentro cómo es una Function propia, tengo una publicada con sus pruebas en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).

**4. Trabajo de front-end sobre el tema.** Mucho de lo que la gente pide a un portal mayorista no es precio, es **flujo de pedido**: tabla de tallas con stock y cantidad por fila, búsqueda por referencia, pedido rápido, repetir el último pedido, ocultar precios en pantalla cuando el comprador está en el almacén con el móvil a la vista de un cliente. Nada de eso depende del plan. Es exactamente el portal que monté para [Émolo](/proyectos/#emolo-b2b), una marca de joyería de Murcia, sobre su tema existente y sin Plus: una condición de Liquid decide el acceso, una tabla de pedido renderizada en Liquid gestiona las cantidades y todo el pedido se envía en una sola llamada al carrito. Ese patrón, reconstruido sobre Dawn y sin código de ningún cliente, está publicado en [shopify-b2b-order-portal](https://github.com/NicolasShopiDev/shopify-b2b-order-portal): la condición de acceso, las reglas de cantidad del catálogo aplicadas al propio input y la llamada única al carrito.

## Cuándo compensa Plus de verdad

No por "ser más grande". Por uno de estos cinco motivos concretos:

1. Necesitas **más de tres tarifas** en uso real.
2. Negocias **precio por cuenta** y no por nivel.
3. Una misma empresa necesita **catálogos distintos por delegación**.
4. Necesitas **Functions a medida**: reglas de carrito, transformación de líneas, personalización de pagos o de envíos escritas para tu negocio.
5. Necesitas tocar el **checkout** más allá de lo que permite una app pública.

Si marcas uno, la conversación ya no es técnica, es de números: cuánto cuesta el plan frente a cuánto cuesta el apaño y su mantenimiento. Si no marcas ninguno, quedarte en Advanced y gastar ese presupuesto en el flujo de pedido te va a dar más margen que el cambio de plan.

## Por dónde empezar

Si estás montando esto ahora, el orden que menos sorpresas da:

1. Escribe tus tarifas reales, con pedidos del último año delante. No las que figuran en el PDF comercial.
2. Cuéntalas. Si son tres o menos, Advanced llega.
3. Comprueba que esos niveles no choquen con tus mercados (país, moneda, idioma).
4. Decide qué parte del valor está en el precio y qué parte en el flujo de pedido. Casi siempre está en el flujo.
5. Solo entonces elige plan.

Los límites de catálogos y empresas están en la documentación de Shopify: [B2B en Shopify](https://help.shopify.com/en/manual/b2b), [catálogos](https://help.shopify.com/en/manual/b2b/catalogs) y [empresas](https://help.shopify.com/en/manual/b2b/companies). La regla de las apps personalizadas con Functions está en la [documentación para desarrolladores](https://shopify.dev/docs/api/functions).
