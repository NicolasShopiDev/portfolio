---
pair: permisos-compradores-shopify-b2b
title: 'Dos compradores de la misma empresa no tienen por qué ver lo mismo'
seoTitle: 'Permisos de compradores en Shopify B2B: pedidos y sedes'
description: 'Un empleado ve sus pedidos y otro necesita revisar toda una sede. Aprende a definir los accesos de compradores B2B sin confundirlos con usuarios de tu tienda.'
keyword: permisos compradores shopify b2b
date: '2026-11-09'
tags: ['Shopify B2B', 'Cuentas de cliente', 'Pedidos']
related: ['solicitud-alta-mayorista-shopify', 'direccion-envio-puntual-shopify-b2b']
faq:
  - q: '¿El responsable de una empresa cliente necesita entrar en mi administrador?'
    a: 'No confundas su trabajo como comprador con la administración de tu tienda. Define primero qué debe hacer en su cuenta B2B; dar acceso interno no es un sustituto de diseñar ese recorrido.'
  - q: '¿Puedo decidir el acceso solo por el nombre del puesto?'
    a: 'No conviene. Traduce cada puesto a acciones: pedir, consultar historial o gestionar datos de una sede. Después contrasta esas necesidades con las funciones documentadas y pruébalas con perfiles adecuados.'
  - q: '¿Ocultar una sección visual demuestra que el acceso está resuelto?'
    a: 'No. La revisión debe comprobar permisos y recorridos, no solo una captura. Esta guía propone una matriz de aceptación, no certifica la configuración ni una personalización de tu tienda.'
cta:
  heading: '¿Tus clientes necesitan que varias personas compren por la empresa?'
  text: 'Cuéntame qué personas intervienen, para qué sedes compran y qué historial necesita cada una. Podemos valorar la estructura de cuentas y el alcance del portal B2B.'
  label: 'Ordenar los accesos de mis compradores'
---

Si dos compradores de una empresa ven historiales distintos en Shopify B2B, revisa las sedes asignadas y el permiso de cada contacto antes de buscar un fallo de pedidos. Pertenecer a la misma empresa no describe por sí solo qué necesita hacer cada persona.

Una compra. Otra revisa. Una tercera llama porque «no ve el pedido».

Y tú, buscando un pedido que quizá nunca estuvo perdido... solo estabais hablando de accesos distintos.

## Empieza por el trabajo, no por el cargo

«Administración», «compras» o «responsable de tienda» significan cosas diferentes en cada negocio. Pregunta qué debe hacer esa persona y para qué sede.

¿Solo introduce sus pedidos? ¿Concilia lo que han pedido otros? ¿Debe poder corregir datos de dirección? Esas respuestas permiten elegir el acceso. El organigrama, por sí solo, no configura nada.

Ejemplo hipotético: una distribuidora tiene dos delegaciones. Cada comprador hace pedidos para su delegación y una responsable revisa la actividad de ambas. No empieces dando a todo el mundo el mismo acceso porque es más rápido: escribe las necesidades de cada uno.

## Qué distingue Shopify de forma nativa

La [ayuda de contactos B2B](https://help.shopify.com/en/manual/b2b/companies-and-customers/adding-customers) diferencia dos permisos: **Ordering only**, para pedir y consultar pedidos propios en las sedes asignadas; y **Location admin**, que añade el historial de pedidos de otros compradores de esa sede y la edición de direcciones de facturación y envío.

Es una diferencia concreta. No convierte al responsable de la empresa cliente en administrador de tu tienda ni demuestra que pueda ejecutar cualquier aprobación interna que imagines.

La [tabla oficial de planes B2B](https://help.shopify.com/en/manual/b2b/getting-started/plan-features) incluye estos permisos de sede en Basic, Grow, Advanced y Plus. No deduzcas de ahí que cualquier aplicación o extensión adicional tendrá la misma disponibilidad: verifica su alcance aparte.

## Separa la persona de la sede para la que compra

En el [acceso a cuentas B2B](https://help.shopify.com/en/manual/b2b/customer-login-and-accounts), Shopify vincula al comprador con ubicaciones de empresa; cuando tiene varias, selecciona aquella para la que va a pedir. Registra ese contexto al investigar una diferencia.

Si alguien dice «yo sí lo veo», pregunta en qué sede estaba. No compares dos pantallas sin anotar esa selección. La respuesta podría ser correcta para un contexto y distinta para otro.

Tampoco confundas sede comercial con destino puntual de entrega. Si necesitas enviar un pedido a otra dirección, la guía de [direcciones puntuales B2B](/blog/direccion-envio-puntual-shopify-b2b/) explica esa decisión por separado.

## Dibuja una matriz antes de tocar permisos

Para el ejemplo ficticio, empezaría con una tabla de requisitos. Todavía no es una asignación aprobada ni una prueba de funcionamiento:

| Perfil del ejemplo | Pregunta que hay que resolver |
| --- | --- |
| Comprador de la delegación A | ¿Debe consultar solo lo que pide personalmente? |
| Responsable de la delegación A | ¿Necesita revisar compras de otras personas de A? |
| Responsable de ambas delegaciones | ¿Qué tareas necesita en A y en B? |
| Persona que cambia de puesto | ¿Qué asignaciones dejan de tener sentido? |

Añade quién autoriza cada necesidad en la empresa cliente. No hace falta que te envíen su estructura completa: basta con entender las acciones y el ámbito que necesitas configurar.

Y, por amor de Dios, no resuelvas el «no veo este pedido» ampliando todos los permisos sin preguntar. Quizá estás arreglando una molestia pequeña creando una decisión de acceso mucho mayor.

## Prueba también lo que no debería poder hacerse

Prepara perfiles de prueba y pedidos ficticios. Comprueba las tareas esperadas, pero también el recorrido de un comprador que no debería tener el mismo alcance. Evita utilizar credenciales compartidas de empleados reales para improvisar la revisión.

Propongo registrar cinco cosas por caso: perfil, sede, acción intentada, resultado esperado y resultado observado. Una captura del menú no sustituye entrar en el recorrido y comprobarlo.

Si existe una personalización, inclúyela en el alcance de revisión. Que el diseño quite un enlace no demuestra por sí solo qué controla el acceso a la información. Este artículo no certifica una implementación ni propone un parche de código sin probar.

## Cuándo los dos permisos se quedan cortos

«Puede revisar pedidos» y «debe aprobarlos antes de que alguien compre» son requisitos distintos. No vendas el primero como si resolviera el segundo.

Si necesitas jerarquías, límites por importe o un circuito de autorización, describe un pedido de principio a fin y verifica qué parte cubre tu configuración. Ahí puede hacer falta otro flujo o desarrollo; no lo des por resuelto cambiando el nombre del rol.

El artículo de [solicitudes de alta mayorista](/blog/solicitud-alta-mayorista-shopify/) trata cómo entra una empresa nueva. Aquí la pregunta es qué pueden hacer las personas que ya compran por ella.

## Qué puedes dejar claro hoy

Elige una empresa de ejemplo, dos compradores y una sede. Escribe qué debería poder hacer cada uno. Después compara esa necesidad con su asignación actual, sin cambiarla hasta entender la diferencia.

Esa ficha permite valorar un [portal Shopify B2B](/shopify-b2b/) que encaje con la forma real de trabajar del cliente. No necesitas veinte roles con nombres impresionantes. Necesitas que las personas adecuadas puedan hacer su trabajo y que ese alcance esté comprobado.

Fuentes revisadas en noviembre de 2026. Ejemplos y matriz propuestos; no se han ejecutado pruebas de acceso en una tienda de cliente.
