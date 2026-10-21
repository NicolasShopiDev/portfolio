---
pair: 'webassembly'
term: 'WebAssembly (Wasm)'
aliases: ['Wasm', 'WebAssembly', 'wasm32']
category: 'functions'
seoTitle: 'WebAssembly en Shopify: por qué las Functions van así'
description: 'Las Shopify Functions se compilan a WebAssembly. De ahí salen sus tres reglas: nada de red, presupuesto de instrucciones y libertad de lenguaje.'
keyword: 'webassembly shopify functions'
answer: 'WebAssembly es el formato al que se compilan las Shopify Functions antes de subirlas. Shopify no ejecuta tu JavaScript o tu Rust tal cual: ejecuta el módulo Wasm resultante, en un entorno aislado, sin acceso a la red y con un presupuesto de instrucciones.'
related: ['shopify-functions', 'input-query']
updated: '2026-10-22'
---

No es un detalle de implementación que puedas ignorar: explica las tres reglas de las [Functions](/glosario/shopify-functions/) que más desconciertan cuando empiezas.

## De dónde salen las limitaciones

**No hay llamadas de red.** Un módulo Wasm solo ve lo que le pasan por la entrada. Por eso una Function no puede consultar tu ERP ni una API externa, y por eso cualquier dato propio tiene que llegar en [metacampos](/glosario/metacampos/) a través de la [input query](/glosario/input-query/).

**Hay un presupuesto de instrucciones.** Shopify ejecuta tu módulo dentro de su checkout, para todos los compradores de todas las tiendas, así que lo limita. Es la razón de que recorrer el catálogo entero dentro de una Function no sea una opción.

**Es rápido y aislado.** Un módulo Wasm arranca en microsegundos y no puede tocar nada fuera de su caja. Eso es lo que permite a Shopify ejecutar código de terceros en el camino crítico de un pago.

## Qué significa para elegir lenguaje

Shopify soporta oficialmente JavaScript y Rust, pero en el fondo **vale cualquier lenguaje que compile a Wasm**. En la práctica elijo JavaScript salvo que el presupuesto apriete: se lee, se prueba con herramientas normales y lo puede mantener cualquiera del equipo. Rust entra cuando la función recorre carritos muy grandes y hay que exprimir instrucciones.

La decisión no suele ser técnica, es de mantenimiento: ¿quién va a tocar esto dentro de un año?

Documentación: [lenguajes para Functions](https://shopify.dev/docs/apps/build/functions/programming-languages).
