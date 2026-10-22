// Checkout Lab: runs the real Shopify Functions from shopify-checkout-lab against simulated checkouts.
// The function files are copied verbatim from that repo (see scripts/sync-lab.ps1). Each ticket is a level
// with its own function, cart and checks; the deploy bar, the checks list and the code panel are shared.

const REPO = 'https://github.com/NicolasShopiDev/shopify-checkout-lab';
const LAB_DIR = new URL('../lab/', import.meta.url);

// Tickets 02 and 03 take typed quantities, as B2B quick-order forms do.
const MAX_LINE_QTY = 999;

/* ── Copy ────────────────────────────────────────────────────── */
// Every string the lab writes at runtime. The page language picks the set; the code shown is never translated.
const I18N = {
  en: {
    locale: 'en',
    percent: n => `${n}%`,
    returnedNoChanges: '← returned, no changes',
    foldLabel: n => `Expand ${n} lines of type definitions`,
    foldPill: n => `${n} lines · types`,
    crumbInput: 'What Shopify sends the function, shaped by input.graphql',
    crumbOutput: 'What the function returns to the checkout',
    crumbConfig: 'Metafield $app:function-configuration · edit it',
    reset: 'Reset',
    deploying: 'Deploying…',
    turnOff: 'Turn off',
    deployFn: 'Deploy function',
    stateDeploying: 'Deploying',
    stateLive: 'Live on checkout',
    stateOff: 'Not deployed',
    hintDeploying: 'Building and releasing the function…',
    hintBug: '<b>There’s the bug.</b> Deploy the function to fix it.',
    termOps: n => `${n} operation${n > 1 ? 's' : ''}`,
    termNoChanges: 'no changes',
    termTime: ms => (ms < 0.1 ? '<0.1 ms' : `${ms.toFixed(1)} ms`),
    termInBrowser: 'in your browser',
    logBuilt: handle => `✓ Built ${handle} → dist/function.wasm`,
    logReleased: '✓ Released a new app version',
    configNotObject: 'Settings must be a JSON object.',
    configInvalid: msg => `Invalid JSON, still using the last valid settings. ${msg}`,
    loadFailed: 'The lab could not load. Refresh the page to try again.',
    cod: {
      countries: { ES: 'Spain', PT: 'Portugal', FR: 'France' },
      nowhere: 'nowhere',
      listJoin: 'or',
      listJoinOutside: 'or',
      methods: [
        { name: 'Credit card', note: 'Visa, Mastercard, Amex' },
        { name: 'PayPal', note: 'Pay with your PayPal account' },
        { name: 'Bank transfer', note: 'Ships once the payment clears' },
        { name: 'Cash on Delivery (COD)', note: 'Pay the courier at the door' },
      ],
      // Must be contained in the COD method name above: the function matches it case-insensitively.
      methodName: 'cash on delivery',
      checks: [
        c => `COD offered on a small order shipped to ${countryList(c)}`,
        c => `COD hidden above ${money(c.maxOrderTotal)}`,
        c => `COD hidden when shipping outside ${countryList(c, T.cod.listJoinOutside)}`,
      ],
      returnedHide: '← returned, hide COD',
      outputNotDeployed: '// Not deployed.\n// Shopify skips the function and shows every payment method.',
      outputError: '// A failing function changes nothing: every method stays visible.',
      bugMethodNote: 'Offered, against the merchant’s rules',
      bugOverLimit: total => `COD offered on a ${total} order`,
      bugAbroad: country => `COD offered on an order to ${country}`,
      hiddenBy: n => `${n} method${n > 1 ? 's' : ''} hidden by cod-guard`,
      hintStart: 'Push the order over €300 or ship to France to reproduce the problem.',
      hintVerify: 'Now check each rule on its own: change the quantity and the country.',
      hintDone: 'Fixed. Try editing metafield.json to change the rules without touching the code.',
      termOff: '$ cod-guard is not deployed. Shopify shows every payment method.',
      logEnabled: '✓ Payment customization enabled',
      logDisabled: 'Payment customization disabled. cod-guard no longer runs.',
    },
    packs: {
      // What the merchant saves in the metafield: the function's own English defaults.
      messages: {
        caseSize: 'Order {title} in cases of {caseSize} (you have {quantity}).',
        minimum: 'B2B orders need a €{minimum} minimum. Add €{missing} more.',
      },
      checks: [
        () => 'Retail customers check out without the B2B rules',
        () => 'A company order that splits a case is blocked',
        c => `Full cases under ${c.minimum} are blocked`,
        c => `Full cases from ${c.minimum} go through`,
      ],
      returnedErrors: n => `← returned, ${n} error${n > 1 ? 's' : ''}`,
      outputNotDeployed: '// Not deployed.\n// Shopify skips the validation: no errors, any cart checks out.',
      outputError: '// blockOnFailure is false, so a failing validation lets the checkout through.',
      bugAccepted: parts => `Order accepted with ${parts.join(' and ')}`,
      bugSplit: n => `${n} split case${n > 1 ? 's' : ''}`,
      bugUnder: total => `${total}, under the minimum`,
      blocked: n => `b2b-case-packs blocked the payment: ${n} error${n > 1 ? 's' : ''}`,
      noteRetail: 'No errors: retail customers skip the B2B rules',
      noteCart: 'No errors at the cart step: the rules wait for checkout',
      hintStart: 'Switch the buyer to a company account to reproduce the problem.',
      hintVerify: 'Now check each rule on its own: change the buyer and the quantities.',
      hintDone: 'Fixed. Try the Cart step, or edit metafield.json to change the case size and the minimum.',
      termOff: '$ b2b-case-packs is not deployed. Any cart can check out.',
      logEnabled: '✓ Validation enabled in Checkout rules',
      logDisabled: 'Validation disabled. b2b-case-packs no longer runs.',
    },
    tiers: {
      message: 'Wholesale {percentage}%',
      checks: [
        () => 'Guests and untagged customers pay the regular price',
        c => `From ${c.low.minQuantity} bags of a coffee: ${T.percent(c.low.percentage)} off`,
        c => `From ${c.high.minQuantity}: ${T.percent(c.high.percentage)} off`,
        c => `Each coffee counts on its own: ${c.half[0]} + ${c.half[1]} bags get nothing`,
      ],
      crumbInput: 'What Shopify sends the function. hasAnyTag uses $tags from metafield.json',
      returnedDiscounts: n => `← returned, ${n} discount${n > 1 ? 's' : ''}`,
      outputNotDeployed: '// Not deployed.\n// Shopify skips the discount: every line keeps its price.',
      outputError: '// A failing discount function applies no discount.',
      bug: (qty, title) => `${qty} × ${title} at the regular price for a wholesale customer`,
      applied: n => `${n} line${n > 1 ? 's' : ''} discounted by wholesale-tiers`,
      noteGuest: 'Regular price: a guest has no tags',
      noteUntagged: 'Regular price: no qualifying tag on the customer',
      noteLines: 'Regular price: each coffee counts on its own',
      hintStart: 'Tag the customer as wholesale to reproduce the problem.',
      hintVerify: 'Now check each tier on its own: change the tags and the quantities.',
      hintDone: 'Fixed. Try editing metafield.json: add a tier, or let the horeca tag in.',
      termOff: '$ wholesale-tiers is not deployed. Everyone pays the regular price.',
      logEnabled: '✓ Automatic discount enabled',
      logDisabled: 'Discount disabled. wholesale-tiers no longer runs.',
    },
  },
  es: {
    locale: 'es-ES',
    percent: n => `${n} %`,
    returnedNoChanges: '← devuelve: sin cambios',
    foldLabel: n => `Desplegar ${n} líneas de definiciones de tipos`,
    foldPill: n => `${n} líneas · tipos`,
    crumbInput: 'Lo que Shopify envía a la función, según input.graphql',
    crumbOutput: 'Lo que la función devuelve al checkout',
    crumbConfig: 'Metafield $app:function-configuration · edítalo',
    reset: 'Restablecer',
    deploying: 'Desplegando…',
    turnOff: 'Desactivar',
    deployFn: 'Desplegar función',
    stateDeploying: 'Desplegando',
    stateLive: 'Activa en el checkout',
    stateOff: 'Sin desplegar',
    hintDeploying: 'Compilando y publicando la función…',
    hintBug: '<b>Ahí está el fallo.</b> Despliega la función para corregirlo.',
    termOps: n => (n > 1 ? `${n} operaciones` : `${n} operación`),
    termNoChanges: 'sin cambios',
    termTime: ms => (ms < 0.1 ? '<0,1 ms' : `${ms.toFixed(1).replace('.', ',')} ms`),
    termInBrowser: 'en tu navegador',
    logBuilt: handle => `✓ ${handle} compilada → dist/function.wasm`,
    logReleased: '✓ Nueva versión de la app publicada',
    configNotObject: 'La configuración debe ser un objeto JSON.',
    configInvalid: msg => `JSON no válido, se mantiene la última configuración válida. ${msg}`,
    loadFailed: 'No se ha podido cargar el laboratorio. Recarga la página para volver a intentarlo.',
    cod: {
      countries: { ES: 'España', PT: 'Portugal', FR: 'Francia' },
      nowhere: 'ningún país',
      listJoin: 'o',
      listJoinOutside: 'y',
      methods: [
        { name: 'Tarjeta de crédito', note: 'Visa, Mastercard, Amex' },
        { name: 'PayPal', note: 'Paga con tu cuenta de PayPal' },
        { name: 'Transferencia bancaria', note: 'Se envía cuando se confirma el pago' },
        { name: 'Contra reembolso', note: 'Pagas al repartidor al recibir el pedido' },
      ],
      // Must be contained in the COD method name above: the function matches it case-insensitively.
      methodName: 'contra reembolso',
      checks: [
        c => `Contra reembolso disponible en un pedido pequeño con envío a ${countryList(c)}`,
        c => `Contra reembolso oculto por encima de ${money(c.maxOrderTotal)}`,
        c => `Contra reembolso oculto en envíos fuera de ${countryList(c, T.cod.listJoinOutside)}`,
      ],
      returnedHide: '← devuelve: ocultar contra reembolso',
      outputNotDeployed: '// Sin desplegar.\n// Shopify no ejecuta la función y muestra todos los métodos de pago.',
      outputError: '// Si la función falla, no cambia nada: todos los métodos siguen visibles.',
      bugMethodNote: 'Disponible, aunque la tienda no lo permite',
      bugOverLimit: total => `Contra reembolso disponible en un pedido de ${total}`,
      bugAbroad: country => `Contra reembolso disponible en un envío a ${country}`,
      hiddenBy: n => (n > 1 ? `${n} métodos ocultos por cod-guard` : `${n} método oculto por cod-guard`),
      hintStart: 'Sube el pedido por encima de 300 € o envíalo a Francia para reproducir el problema.',
      hintVerify: 'Ahora comprueba cada regla por separado: cambia la cantidad y el país.',
      hintDone: 'Solucionado. Prueba a editar metafield.json para cambiar las reglas sin tocar el código.',
      termOff: '$ cod-guard no está desplegada. Shopify muestra todos los métodos de pago.',
      logEnabled: '✓ Personalización de pago activada',
      logDisabled: 'Personalización de pago desactivada. cod-guard ya no se ejecuta.',
    },
    packs: {
      // What the merchant saves in the metafield: the store translates the function's messages.
      messages: {
        caseSize: 'Pide {title} en cajas de {caseSize} (tienes {quantity}).',
        minimum: 'Los pedidos B2B tienen un mínimo de {minimum} €. Añade {missing} € más.',
      },
      checks: [
        () => 'Los particulares compran sin las reglas B2B',
        () => 'Un pedido de empresa que rompe una caja se bloquea',
        c => `Un pedido de cajas completas por debajo de ${c.minimum} se bloquea`,
        c => `Cajas completas desde ${c.minimum}: el pedido pasa`,
      ],
      returnedErrors: n => `← devuelve: ${n} error${n > 1 ? 'es' : ''}`,
      outputNotDeployed: '// Sin desplegar.\n// Shopify no ejecuta la validación: ningún error, cualquier carrito se puede pagar.',
      outputError: '// blockOnFailure está en false: si la validación falla, el pago sigue adelante.',
      bugAccepted: parts => `Pedido aceptado con ${parts.join(' y ')}`,
      bugSplit: n => (n > 1 ? `${n} cajas incompletas` : `${n} caja incompleta`),
      bugUnder: total => `${total}, por debajo del mínimo`,
      blocked: n => `b2b-case-packs bloquea el pago: ${n} error${n > 1 ? 'es' : ''}`,
      noteRetail: 'Sin errores: un particular no tiene reglas B2B',
      noteCart: 'Sin errores en el carrito: las reglas esperan al checkout',
      hintStart: 'Cambia el comprador a una cuenta de empresa para reproducir el problema.',
      hintVerify: 'Ahora comprueba cada regla por separado: cambia el comprador y las cantidades.',
      hintDone: 'Solucionado. Prueba el paso Carrito, o edita metafield.json para cambiar las cajas y el mínimo.',
      termOff: '$ b2b-case-packs no está desplegada. Cualquier carrito se puede pagar.',
      logEnabled: '✓ Validación activada en las reglas del checkout',
      logDisabled: 'Validación desactivada. b2b-case-packs ya no se ejecuta.',
    },
    tiers: {
      message: 'Mayorista {percentage} %',
      checks: [
        () => 'Invitados y clientes sin la etiqueta pagan el precio normal',
        c => `Desde ${c.low.minQuantity} bolsas de un café: ${T.percent(c.low.percentage)} de descuento`,
        c => `Desde ${c.high.minQuantity}: ${T.percent(c.high.percentage)} de descuento`,
        c => `Cada café cuenta por separado: ${c.half[0]} + ${c.half[1]} bolsas no tienen descuento`,
      ],
      crumbInput: 'Lo que Shopify envía a la función. hasAnyTag usa $tags de metafield.json',
      returnedDiscounts: n => `← devuelve: ${n} descuento${n > 1 ? 's' : ''}`,
      outputNotDeployed: '// Sin desplegar.\n// Shopify no ejecuta el descuento: cada línea mantiene su precio.',
      outputError: '// Si la función de descuento falla, no se aplica ningún descuento.',
      bug: (qty, title) => `${qty} × ${title} a precio normal para un cliente mayorista`,
      applied: n => (n > 1 ? `${n} líneas con descuento de wholesale-tiers` : `${n} línea con descuento de wholesale-tiers`),
      noteGuest: 'Precio normal: un invitado no tiene etiquetas',
      noteUntagged: 'Precio normal: el cliente no tiene una etiqueta válida',
      noteLines: 'Precio normal: cada café cuenta por separado',
      hintStart: 'Ponle al cliente la etiqueta wholesale para reproducir el problema.',
      hintVerify: 'Ahora comprueba cada tramo por separado: cambia las etiquetas y las cantidades.',
      hintDone: 'Solucionado. Prueba a editar metafield.json: añade un tramo o admite la etiqueta horeca.',
      termOff: '$ wholesale-tiers no está desplegada. Todos pagan el precio normal.',
      logEnabled: '✓ Descuento automático activado',
      logDisabled: 'Descuento desactivado. wholesale-tiers ya no se ejecuta.',
    },
  },
};

const LANG = (document.documentElement.lang || '').toLowerCase().startsWith('es') ? 'es' : 'en';
const T = I18N[LANG];

/* ── Helpers ─────────────────────────────────────────────────── */
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// No grouping, so English reads exactly as before (€1000, not €1,000).
const currency = digits => new Intl.NumberFormat(T.locale, {
  style: 'currency', currency: 'EUR', useGrouping: false,
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});
const MONEY_WHOLE = currency(0);
const MONEY_CENTS = currency(2);

// Short form for prose: €300, €337.50 (es: 300 €, 337,50 €).
function money(n) {
  const value = Number(Number(n).toFixed(2));
  return (Number.isInteger(value) ? MONEY_WHOLE : MONEY_CENTS).format(value);
}

// Always with cents, as a checkout prints totals: €135.00 (es: 135,00 €).
function price(n) {
  return MONEY_CENTS.format(n);
}

function countryList(config, joiner = T.cod.listJoin) {
  const codes = Array.isArray(config.allowedCountries) ? config.allowedCountries : [];
  const names = codes.map(c => T.cod.countries[c] || c);
  if (names.length === 0) return T.cod.nowhere;
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(', ')} ${joiner} ${names[names.length - 1]}`;
}

// Same rule as positiveInteger() in b2b-case-packs.
function positiveInteger(value) {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number : undefined;
}

function clampQty(n) {
  return Math.min(MAX_LINE_QTY, Math.max(1, Math.round(n)));
}

// Products for tickets 02 and 03 live in Lab.astro; their price, title and case size come from data attributes.
function readLines(panel) {
  return [...panel.querySelectorAll('[data-line]')].map((el, i) => ({
    el,
    id: `gid://shopify/CartLine/${i + 1}`,
    cents: Math.round(Number(el.dataset.price) * 100),
    caseSize: el.dataset.caseSize || null,
    title: el.querySelector('.lc-item-name').textContent.trim(),
    input: el.querySelector('[data-line-qty]'),
    minus: el.querySelector('[data-line-step="-1"]'),
    plus: el.querySelector('[data-line-step="1"]'),
    caseEl: el.querySelector('[data-el="case"]'),
    off: el.querySelector('[data-el="off"]'),
  }));
}

function renderQuantities(lines, qty) {
  lines.forEach((line, i) => {
    // A field being typed into keeps what the buyer typed; the change event tidies it up on leave.
    if (document.activeElement !== line.input) line.input.value = qty[i];
    line.minus.disabled = qty[i] <= 1;
    line.plus.disabled = qty[i] >= MAX_LINE_QTY;
  });
}

function pressed(container, attr, value) {
  container.querySelectorAll(`[${attr}]`).forEach(b => {
    b.setAttribute('aria-pressed', String(b.getAttribute(attr) === value));
  });
}

function setNote(note, text, cls = '') {
  note.className = `lc-note${cls ? ` is-${cls}` : ''}`;
  note.textContent = text || '';
}

/* ── Ticket 01 · cod-guard ───────────────────────────────────── */
function codGuard() {
  const C = T.cod;
  const PRICE = 45;
  const MAX_QTY = 12;
  const METHODS = C.methods.map((m, i) => ({ id: `gid://shopify/PaymentCustomizationPaymentMethod/${i}`, ...m }));
  const COD = METHODS[3];

  // Mirrors DEFAULTS in the function. Only used to annotate the code view, never to decide.
  const FN_DEFAULTS = { methodName: 'cash on delivery', maxOrderTotal: 300, allowedCountries: ['ES'] };

  const hiddenIds = output =>
    new Set((output?.operations || []).map(op => op.paymentMethodHide?.paymentMethodId).filter(Boolean));

  let els = null;

  return {
    id: '01',
    handle: 'cod-guard',
    fnFile: 'cart_payment_methods_transform_run.js',
    queryFile: 'cart_payment_methods_transform_run.graphql',
    exportName: 'cartPaymentMethodsTransformRun',
    target: 'cart.payment-methods.transform.run',
    copy: C,
    // What the merchant saves in the metafield. methodName follows the page language so it matches the COD name.
    configText: `{
  "methodName": ${JSON.stringify(C.methodName)},
  "maxOrderTotal": ${FN_DEFAULTS.maxOrderTotal},
  "allowedCountries": ${JSON.stringify(FN_DEFAULTS.allowedCountries)}
}`,
    sim: { qty: 3, country: 'ES', selected: METHODS[0].id },

    // Each rule must be seen on its own, the way a test isolates one behaviour.
    checks: [
      { label: C.checks[0], passes: (t, out) => !t.overLimit && !t.shipsAbroad && !hiddenIds(out).has(COD.id) },
      { label: C.checks[1], passes: (t, out) => t.overLimit && !t.shipsAbroad && hiddenIds(out).has(COD.id) },
      { label: C.checks[2], passes: (t, out) => t.shipsAbroad && !t.overLimit && hiddenIds(out).has(COD.id) },
    ],
    labelContext(t, config) {
      return t ? t.config : config;
    },

    bind(panel) {
      els = {
        qty: panel.querySelector('#lc-qty'),
        minus: panel.querySelector('[data-qty="-1"]'),
        plus: panel.querySelector('[data-qty="1"]'),
        countries: panel.querySelector('#lc-countries'),
        methods: panel.querySelector('#lc-methods'),
        note: panel.querySelector('#lc-note'),
        subtotal: panel.querySelector('#lc-subtotal'),
        total: panel.querySelector('#lc-total'),
      };
      els.methods.innerHTML = METHODS.map(m => `
        <div class="lc-method-wrap" data-wrap="${m.id}">
          <div class="lc-method-clip">
            <button type="button" class="lc-method" data-method="${m.id}">
              <span class="lc-radio" aria-hidden="true"></span>
              <span class="lc-method-text">
                <span class="lc-method-name">${esc(m.name)}</span>
                <span class="lc-method-note" data-note>${esc(m.note)}</span>
              </span>
            </button>
          </div>
        </div>`).join('');
    },

    onClick(target) {
      const sim = this.sim;
      const qtyBtn = target.closest('[data-qty]');
      if (qtyBtn) {
        sim.qty = Math.min(MAX_QTY, Math.max(1, sim.qty + Number(qtyBtn.dataset.qty)));
        return true;
      }
      const countryBtn = target.closest('[data-country]');
      if (countryBtn) {
        sim.country = countryBtn.dataset.country;
        return true;
      }
      const methodBtn = target.closest('[data-method]');
      if (methodBtn) {
        sim.selected = methodBtn.dataset.method;
        return true;
      }
      return false;
    },

    buildInput(sim, config) {
      return {
        cart: {
          cost: { totalAmount: { amount: (sim.qty * PRICE).toFixed(2) } },
          deliveryGroups: [{ deliveryAddress: { countryCode: sim.country } }],
        },
        paymentMethods: METHODS.map(({ id, name }) => ({ id, name })),
        paymentCustomization: { metafield: { jsonValue: config } },
      };
    },

    // Recomputes the function's intermediate values so the code view can show them inline.
    trace(input) {
      try {
        const config = { ...FN_DEFAULTS, ...input.paymentCustomization.metafield.jsonValue };
        const method = input.paymentMethods.find(m => m.name.toLowerCase().includes(config.methodName.toLowerCase()));
        const total = parseFloat(input.cart.cost.totalAmount.amount);
        const countries = input.cart.deliveryGroups.map(g => g.deliveryAddress?.countryCode).filter(Boolean);
        const overLimit = total > config.maxOrderTotal;
        const shipsAbroad = countries.some(code => !config.allowedCountries.includes(code));
        return { config, method, total, countries, overLimit, shipsAbroad };
      } catch {
        return null;
      }
    },

    annotate(t, mark) {
      const cfg = t.config;
      mark('const config', 'ran', `maxOrderTotal: ${cfg.maxOrderTotal} · allowedCountries: ${JSON.stringify(cfg.allowedCountries)}`);
      mark('const method', 'ran', `method = ${t.method ? JSON.stringify(t.method.name) : 'undefined'}`);
      if (!t.method) return mark('if (!method)', 'ret', T.returnedNoChanges, true);
      mark('if (!method)', 'ran', null, true);
      mark('const total', 'ran', `total = ${t.total}`);
      mark('const countries', 'ran', `countries = ${JSON.stringify(t.countries)}`);
      mark('const overLimit', 'ran', `overLimit = ${t.overLimit}`);
      mark('const shipsAbroad', 'ran', `shipsAbroad = ${t.shipsAbroad}`);
      if (!t.overLimit && !t.shipsAbroad) return mark('if (!overLimit', 'ret', T.returnedNoChanges, true);
      mark('if (!overLimit', 'ran', null, true);
      mark('return {', 'ret', C.returnedHide);
    },

    render(t, result, s) {
      const sim = this.sim;
      const hidden = hiddenIds(result.output);
      const total = sim.qty * PRICE;
      els.qty.textContent = sim.qty;
      els.subtotal.textContent = price(total);
      els.total.textContent = price(total);
      els.minus.disabled = sim.qty <= 1;
      els.plus.disabled = sim.qty >= MAX_QTY;
      pressed(els.countries, 'data-country', sim.country);

      if (hidden.has(sim.selected)) sim.selected = METHODS.find(m => !hidden.has(m.id))?.id;

      const bug = !s.deployed && t && (t.overLimit || t.shipsAbroad);
      METHODS.forEach(m => {
        const isHidden = hidden.has(m.id);
        const wrap = els.methods.querySelector(`[data-wrap="${m.id}"]`);
        const btn = wrap.querySelector('.lc-method');
        wrap.classList.toggle('is-hidden', isHidden);
        btn.tabIndex = isHidden ? -1 : 0;
        btn.setAttribute('aria-hidden', String(isHidden));
        btn.classList.toggle('is-selected', sim.selected === m.id);
        btn.setAttribute('aria-pressed', String(sim.selected === m.id));
        const isBug = bug && m.id === COD.id;
        btn.classList.toggle('is-bug', isBug);
        btn.querySelector('[data-note]').textContent = isBug ? C.bugMethodNote : m.note;
      });

      if (bug) setNote(els.note, t.overLimit ? C.bugOverLimit(money(t.total)) : C.bugAbroad(C.countries[sim.country]), 'bug');
      else if (hidden.size) setNote(els.note, C.hiddenBy(hidden.size), 'ok');
      else setNote(els.note, '');
      return bug;
    },
  };
}

/* ── Ticket 02 · b2b-case-packs ──────────────────────────────── */
function casePacks() {
  const C = T.packs;

  // Mirrors DEFAULTS in the function. Only used to annotate the code view, never to decide.
  const FN_DEFAULTS = { caseSize: 6, minimumSubtotal: 500 };

  const errorsOf = output => (output?.operations || []).flatMap(op => op.validationAdd?.errors || []);
  // What the rules would object to, whether or not they apply to this buyer and step.
  const breaksRules = t => t.split > 0 || t.underMinimum;
  const onlyCompanyAtCheckout = t => t.company && t.atCheckout;

  let els = null;
  let lines = [];

  return {
    id: '02',
    handle: 'b2b-case-packs',
    fnFile: 'cart_validations_generate_run.js',
    queryFile: 'cart_validations_generate_run.graphql',
    exportName: 'cartValidationsGenerateRun',
    target: 'cart.validations.generate.run',
    copy: C,
    configText: `{
  "caseSize": ${FN_DEFAULTS.caseSize},
  "minimumSubtotal": ${FN_DEFAULTS.minimumSubtotal},
  "messages": {
    "caseSize": ${JSON.stringify(C.messages.caseSize)},
    "minimum": ${JSON.stringify(C.messages.minimum)}
  }
}`,
    sim: { company: false, step: 'CHECKOUT_INTERACTION', qty: [] },

    checks: [
      { label: C.checks[0], passes: (t, out) => !t.company && t.atCheckout && breaksRules(t) && errorsOf(out).length === 0 },
      { label: C.checks[1], passes: (t, out) => onlyCompanyAtCheckout(t) && t.split > 0 && !t.underMinimum && errorsOf(out).length === t.split },
      { label: C.checks[2], passes: (t, out) => onlyCompanyAtCheckout(t) && t.split === 0 && t.underMinimum && errorsOf(out).length === 1 },
      { label: C.checks[3], passes: (t, out) => onlyCompanyAtCheckout(t) && t.split === 0 && !t.underMinimum && errorsOf(out).length === 0 },
    ],
    labelContext(t) {
      const cents = t && Number.isFinite(t.minimum) ? t.minimum : FN_DEFAULTS.minimumSubtotal * 100;
      return { minimum: money(cents / 100) };
    },

    bind(panel) {
      els = {
        panel,
        alert: panel.querySelector('[data-el="alert"]'),
        note: panel.querySelector('[data-el="note"]'),
        subtotal: panel.querySelector('[data-el="subtotal"]'),
        total: panel.querySelector('[data-el="total"]'),
        pay: panel.querySelector('[data-el="pay"]'),
      };
      lines = readLines(panel);
      this.lines = lines;
      this.sim.qty = lines.map(line => clampQty(Number(line.input.value) || 1));
    },

    onClick(target) {
      const buyer = target.closest('[data-buyer]');
      if (buyer) {
        this.sim.company = buyer.dataset.buyer === 'company';
        return true;
      }
      const step = target.closest('[data-journey]');
      if (step) {
        this.sim.step = step.dataset.journey;
        return true;
      }
      return false;
    },

    subtotalCents(sim) {
      return lines.reduce((sum, line, i) => sum + line.cents * sim.qty[i], 0);
    },

    buildInput(sim, config) {
      return {
        buyerJourney: { step: sim.step },
        cart: {
          buyerIdentity: {
            purchasingCompany: sim.company ? { company: { id: 'gid://shopify/Company/1' } } : null,
          },
          cost: { subtotalAmount: { amount: (this.subtotalCents(sim) / 100).toFixed(2) } },
          lines: lines.map((line, i) => ({
            quantity: sim.qty[i],
            merchandise: {
              __typename: 'ProductVariant',
              product: { title: line.title },
              metafield: line.caseSize ? { value: line.caseSize } : null,
            },
          })),
        },
        validation: { metafield: { jsonValue: config } },
      };
    },

    trace(input) {
      try {
        const step = input.buyerJourney.step;
        const settings = input.validation?.metafield?.jsonValue ?? {};
        const config = { ...FN_DEFAULTS, ...settings };
        const defaultCaseSize = positiveInteger(config.caseSize) ?? FN_DEFAULTS.caseSize;
        const caseLines = input.cart.lines.map(line => {
          const caseSize = positiveInteger(line.merchandise.metafield?.value) ?? defaultCaseSize;
          return { quantity: line.quantity, caseSize, split: line.quantity % caseSize !== 0 };
        });
        const subtotal = Math.round(parseFloat(input.cart.cost.subtotalAmount.amount) * 100);
        const minimum = Math.round(Number(config.minimumSubtotal) * 100);
        return {
          step,
          atCheckout: step === 'CHECKOUT_INTERACTION' || step === 'CHECKOUT_COMPLETION',
          company: Boolean(input.cart.buyerIdentity?.purchasingCompany),
          config,
          defaultCaseSize,
          lines: caseLines,
          split: caseLines.filter(line => line.split).length,
          subtotal,
          minimum,
          underMinimum: subtotal < minimum,
        };
      } catch {
        return null;
      }
    },

    annotate(t, mark) {
      mark('const step', 'ran', `step = ${JSON.stringify(t.step)}`);
      if (!t.atCheckout) return mark('if (step !==', 'ret', T.returnedNoChanges, true);
      mark('if (step !==', 'ran', null, true);
      if (!t.company) return mark('if (!input.cart.buyerIdentity', 'ret', `purchasingCompany = null  ${T.returnedNoChanges}`, true);
      mark('if (!input.cart.buyerIdentity', 'ran', null, true);
      mark('const settings', 'ran');
      mark('const config = {', 'ran', `caseSize: ${t.config.caseSize} · minimumSubtotal: ${t.config.minimumSubtotal}`);
      mark('const defaultCaseSize', 'ran', `defaultCaseSize = ${t.defaultCaseSize}`);
      mark('const errors', 'ran');
      mark('for (const line of', 'ran', null, true);
      mark('if (line.merchandise.__typename', 'ran', null, true);
      mark('const caseSize = positiveInteger', 'ran', `caseSize = ${t.lines.map(l => l.caseSize).join(' · ')}`);
      mark('if (line.quantity % caseSize', 'ran',
        t.lines.map(l => `${l.quantity} % ${l.caseSize} = ${l.quantity % l.caseSize}`).join(' · '), true);
      if (t.split) mark('errors.push({', 'ran', `errors.length = ${t.split}`);
      mark('const subtotal = Math.round', 'ran', `subtotal = ${t.subtotal}`);
      mark('const minimum = Math.round', 'ran', `minimum = ${t.minimum}`);
      mark('if (subtotal < minimum)', 'ran', `→ ${t.underMinimum}`, true);
      const count = t.split + (t.underMinimum ? 1 : 0);
      if (t.underMinimum) mark('errors.push({', 'ran', `errors.length = ${count}`, false, 'if (subtotal < minimum)');
      if (!count) return mark('if (errors.length === 0)', 'ret', T.returnedNoChanges, true);
      mark('if (errors.length === 0)', 'ran', null, true);
      mark('return { operations', 'ret', C.returnedErrors(count), true);
    },

    render(t, result, s) {
      const sim = this.sim;
      renderQuantities(lines, sim.qty);
      pressed(els.panel, 'data-buyer', sim.company ? 'company' : 'retail');
      pressed(els.panel, 'data-journey', sim.step);
      // Lines without their own case size follow the settings.
      if (t) lines.forEach(line => { if (!line.caseSize) line.caseEl.textContent = t.defaultCaseSize; });

      const subtotal = price(this.subtotalCents(sim) / 100);
      els.subtotal.textContent = subtotal;
      els.total.textContent = subtotal;

      const errors = errorsOf(result.output);
      els.alert.hidden = errors.length === 0;
      els.alert.querySelector('ul').innerHTML = errors.map(e => `<li>${esc(e.message)}</li>`).join('');
      els.pay.classList.toggle('is-blocked', errors.length > 0);

      const bug = Boolean(!s.deployed && t && onlyCompanyAtCheckout(t) && breaksRules(t));
      if (bug) {
        const parts = [];
        if (t.split) parts.push(C.bugSplit(t.split));
        if (t.underMinimum) parts.push(C.bugUnder(price(t.subtotal / 100)));
        setNote(els.note, C.bugAccepted(parts), 'bug');
      } else if (errors.length) {
        setNote(els.note, C.blocked(errors.length), 'ok');
      } else if (s.deployed && t && breaksRules(t) && !t.company) {
        setNote(els.note, C.noteRetail);
      } else if (s.deployed && t && breaksRules(t) && !t.atCheckout) {
        setNote(els.note, C.noteCart);
      } else {
        setNote(els.note, '');
      }
      return bug;
    },
  };
}

/* ── Ticket 03 · wholesale-tiers ─────────────────────────────── */
function wholesaleTiers() {
  const C = T.tiers;

  // Mirrors DEFAULTS in the function. Only used to annotate the code view, never to decide.
  const FN_DEFAULTS = {
    tags: ['wholesale'],
    tiers: [
      { minQuantity: 20, percentage: 10 },
      { minQuantity: 50, percentage: 20 },
    ],
  };

  // Same filtering and order as usableTiers() in the function: highest minQuantity first.
  const usableTiers = tiers => (Array.isArray(tiers) ? tiers : [])
    .map(tier => ({ minQuantity: Number(tier?.minQuantity), percentage: Number(tier?.percentage) }))
    .filter(tier => Number.isInteger(tier.minQuantity) && tier.minQuantity > 0 && tier.percentage > 0 && tier.percentage <= 100)
    .sort((a, b) => b.minQuantity - a.minQuantity || b.percentage - a.percentage);

  // The lowest and highest tiers, for the checks. Falls back to the defaults when no tier is usable.
  const ladder = t => {
    const tiers = t && t.tiers.length ? t.tiers : usableTiers(FN_DEFAULTS.tiers);
    const low = tiers[tiers.length - 1];
    const half = Math.ceil(low.minQuantity / 2);
    return { low, high: tiers[0], half: [half, low.minQuantity - half] };
  };

  // One entry per discounted cart line. The function emits one candidate per line; if several ever
  // targeted the same line, the largest is the one kept here.
  const discountsOf = output => {
    const byLine = new Map();
    (output?.operations || []).forEach(op => (op.productDiscountsAdd?.candidates || []).forEach(candidate => {
      const percentage = Number(candidate.value?.percentage?.value);
      (candidate.targets || []).forEach(target => {
        const id = target.cartLine?.id;
        if (id && percentage > 0 && !(byLine.get(id)?.percentage >= percentage)) {
          byLine.set(id, { message: candidate.message, percentage });
        }
      });
    }));
    return byLine;
  };

  let els = null;
  let lines = [];

  return {
    id: '03',
    handle: 'wholesale-tiers',
    fnFile: 'cart_lines_discounts_generate_run.js',
    queryFile: 'cart_lines_discounts_generate_run.graphql',
    exportName: 'cartLinesDiscountsGenerateRun',
    target: 'cart.lines.discounts.generate.run',
    copy: C,
    configText: `{
  "tags": ${JSON.stringify(FN_DEFAULTS.tags)},
  "tiers": [
    { "minQuantity": 20, "percentage": 10 },
    { "minQuantity": 50, "percentage": 20 }
  ],
  "message": ${JSON.stringify(C.message)}
}`,
    sim: { signedIn: true, tags: [], qty: [] },

    checks: [
      { label: C.checks[0], passes: (t, out) => !t.hasAnyTag && t.qualifying > 0 && discountsOf(out).size === 0 },
      {
        label: C.checks[1],
        passes: (t, out) => {
          const { low, high } = ladder(t);
          const off = discountsOf(out);
          return t.hasAnyTag && t.lines.some(l =>
            l.quantity >= low.minQuantity && l.quantity < high.minQuantity && off.get(l.id)?.percentage === low.percentage);
        },
      },
      {
        label: C.checks[2],
        passes: (t, out) => {
          const { high } = ladder(t);
          const off = discountsOf(out);
          return t.hasAnyTag && t.lines.some(l => l.quantity >= high.minQuantity && off.get(l.id)?.percentage === high.percentage);
        },
      },
      {
        label: C.checks[3],
        passes: (t, out) => t.hasAnyTag && t.qualifying === 0 && t.units >= ladder(t).low.minQuantity && discountsOf(out).size === 0,
      },
    ],
    labelContext(t) {
      return ladder(t);
    },

    bind(panel) {
      els = {
        panel,
        chips: [...panel.querySelectorAll('[data-tag]')],
        note: panel.querySelector('[data-el="note"]'),
        subtotal: panel.querySelector('[data-el="subtotal"]'),
        discounts: panel.querySelector('[data-el="discounts"]'),
        total: panel.querySelector('[data-el="total"]'),
      };
      lines = readLines(panel);
      this.lines = lines;
      this.sim.qty = lines.map(line => clampQty(Number(line.input.value) || 1));
      this.sim.tags = els.chips.filter(c => c.getAttribute('aria-pressed') === 'true').map(c => c.dataset.tag);
    },

    onClick(target) {
      const customer = target.closest('[data-customer]');
      if (customer) {
        this.sim.signedIn = customer.dataset.customer === 'signed-in';
        return true;
      }
      const chip = target.closest('[data-tag]');
      if (chip) {
        const tag = chip.dataset.tag;
        const tags = this.sim.tags;
        this.sim.tags = tags.includes(tag) ? tags.filter(x => x !== tag) : [...tags, tag];
        return true;
      }
      return false;
    },

    buildInput(sim, config) {
      // Shopify resolves hasAnyTag before the function runs, with $tags filled from the metafield's
      // "tags" key (input_variables). Here a missing key counts as no tags to match.
      const tags = Array.isArray(config.tags) ? config.tags : [];
      const hasAnyTag = sim.tags.some(tag => tags.includes(tag));
      return {
        cart: {
          buyerIdentity: { customer: sim.signedIn ? { hasAnyTag } : null },
          lines: lines.map((line, i) => ({ id: line.id, quantity: sim.qty[i] })),
        },
        discount: {
          discountClasses: ['PRODUCT'],
          metafield: { jsonValue: config },
        },
      };
    },

    trace(input) {
      try {
        const customer = input.cart.buyerIdentity?.customer;
        const config = { ...FN_DEFAULTS, ...input.discount.metafield?.jsonValue };
        const tiers = usableTiers(config.tiers);
        const tierLines = input.cart.lines.map(line => ({
          id: line.id,
          quantity: line.quantity,
          tier: tiers.find(tier => line.quantity >= tier.minQuantity),
        }));
        return {
          classes: input.discount.discountClasses,
          guest: !customer,
          hasAnyTag: Boolean(customer?.hasAnyTag),
          config,
          tiers,
          lines: tierLines,
          qualifying: tierLines.filter(line => line.tier).length,
          units: tierLines.reduce((sum, line) => sum + line.quantity, 0),
        };
      } catch {
        return null;
      }
    },

    annotate(t, mark) {
      if (!t.classes.includes('PRODUCT')) return mark('if (!input.discount.discountClasses', 'ret', T.returnedNoChanges, true);
      mark('if (!input.discount.discountClasses', 'ran', `discountClasses = ${JSON.stringify(t.classes)}`, true);
      if (!t.hasAnyTag) {
        const value = t.guest ? 'customer = null' : 'hasAnyTag = false';
        return mark('if (!input.cart.buyerIdentity', 'ret', `${value}  ${T.returnedNoChanges}`, true);
      }
      mark('if (!input.cart.buyerIdentity', 'ran', 'hasAnyTag = true', true);
      mark('const config = {', 'ran');
      mark('const tiers = usableTiers', 'ran',
        `tiers = ${t.tiers.map(x => `${x.minQuantity}+ → ${x.percentage}%`).join(' · ') || '[]'}`);
      mark('const candidates', 'ran');
      mark('for (const line of', 'ran', null, true);
      mark('const tier = tiers.find', 'ran',
        t.lines.map(l => `${l.quantity} → ${l.tier ? `${l.tier.percentage}%` : 'undefined'}`).join(' · '));
      mark('if (!tier) continue', 'ran', null, true);
      if (t.qualifying) mark('candidates.push({', 'ran', `candidates.length = ${t.qualifying}`);
      if (!t.qualifying) return mark('if (candidates.length === 0)', 'ret', T.returnedNoChanges, true);
      mark('if (candidates.length === 0)', 'ran', null, true);
      mark('return {', 'ret', C.returnedDiscounts(t.qualifying));
    },

    render(t, result, s) {
      const sim = this.sim;
      renderQuantities(lines, sim.qty);
      pressed(els.panel, 'data-customer', sim.signedIn ? 'signed-in' : 'guest');
      els.chips.forEach(chip => {
        chip.setAttribute('aria-pressed', String(sim.tags.includes(chip.dataset.tag)));
        chip.disabled = !sim.signedIn;
      });

      const off = discountsOf(result.output);
      let subtotal = 0;
      let discount = 0;
      lines.forEach((line, i) => {
        const cents = line.cents * sim.qty[i];
        const applied = off.get(line.id);
        const lineOff = applied ? Math.round((cents * applied.percentage) / 100) : 0;
        subtotal += cents;
        discount += lineOff;
        line.off.hidden = !applied;
        line.off.innerHTML = applied
          ? `<span class="lc-off-tag">${esc(applied.message)}</span> <span>−${esc(price(lineOff / 100))}</span>`
          : '';
      });
      els.subtotal.textContent = price(subtotal / 100);
      els.discounts.textContent = discount ? `−${price(discount / 100)}` : price(0);
      els.total.textContent = price((subtotal - discount) / 100);

      const bug = Boolean(!s.deployed && t && t.hasAnyTag && t.qualifying > 0);
      if (bug) {
        const first = t.lines.findIndex(line => line.tier);
        setNote(els.note, C.bug(sim.qty[first], lines[first].title), 'bug');
      } else if (off.size) {
        setNote(els.note, C.applied(off.size), 'ok');
      } else if (s.deployed && t && t.qualifying && !t.hasAnyTag) {
        setNote(els.note, t.guest ? C.noteGuest : C.noteUntagged);
      } else if (s.deployed && t && t.hasAnyTag && !t.qualifying && t.units >= ladder(t).low.minQuantity) {
        setNote(els.note, C.noteLines);
      } else {
        setNote(els.note, '');
      }
      return bug;
    },
  };
}

const LEVELS = [codGuard(), casePacks(), wholesaleTiers()];
LEVELS.forEach(level => {
  level.state = {
    deployed: false,
    deploying: false,
    config: JSON.parse(level.configText),
    configText: level.configText,
    configError: '',
    folded: true,
    verified: new Set(),
    deployLog: [],
    lastOutputText: '',
  };
});

let current = LEVELS[0];
let tab = 'run';
let els = null;
let followTimer = 0;

/* ── Syntax highlighting ─────────────────────────────────────── */
const RULES = {
  js: /(?<com>\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(?<str>"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(?<kw>\b(?:const|let|return|if|else|export|function|import|from|new|typeof|for|of|continue)\b)|(?<lit>\b(?:true|false|null|undefined|\d+(?:\.\d+)?)\b)|(?<fn>[A-Za-z_$][\w$]*(?=\s*\())/g,
  graphql: /(?<com>#[^\n]*)|(?<str>"(?:[^"\\\n]|\\.)*")|(?<kw>\b(?:query|mutation|fragment|on)\b)|(?<lit>\$\w+)|(?<fn>[A-Za-z_]\w*(?=\s*[({]))/g,
  json: /(?<key>"(?:[^"\\\n]|\\.)*"(?=\s*:))|(?<str>"(?:[^"\\\n]|\\.)*")|(?<lit>-?\b\d+(?:\.\d+)?\b|\b(?:true|false|null)\b)/g,
};

// Returns one HTML string per source line; tokens spanning lines are split so spans stay balanced.
function highlight(src, lang) {
  const re = RULES[lang];
  const lines = [''];
  const push = (text, cls) => {
    text.split('\n').forEach((part, i) => {
      if (i > 0) lines.push('');
      if (part) lines[lines.length - 1] += cls ? `<span class="t-${cls}">${esc(part)}</span>` : esc(part);
    });
  };
  re.lastIndex = 0;
  let last = 0;
  let m;
  while ((m = re.exec(src))) {
    if (m.index > last) push(src.slice(last, m.index));
    push(m[0], Object.keys(m.groups).find(k => m.groups[k] !== undefined));
    last = re.lastIndex;
  }
  push(src.slice(last));
  return lines;
}

/* ── Function run ────────────────────────────────────────────── */
function runFunction(level, input) {
  if (!level.state.deployed) return { output: null, error: null, ms: 0 };
  const start = performance.now();
  try {
    const output = level.fn(structuredClone(input));
    return { output, error: null, ms: performance.now() - start };
  } catch (error) {
    return { output: null, error, ms: performance.now() - start };
  }
}

/* ── Code view ───────────────────────────────────────────────── */
function sourceLines(level) {
  return level.fnSource.split('\n');
}

function annotations(level, t, result) {
  const marks = new Map();
  if (!level.state.deployed || !level.fnSource) return marks;

  const lines = sourceLines(level);
  const lineOf = (anchor, from = 0) => {
    for (let i = Math.max(0, from); i < lines.length; i++) if (lines[i].includes(anchor)) return i;
    return -1;
  };
  // A statement runs from its anchor line to the first line ending in ";".
  const statementEnd = start => {
    let end = start;
    while (end < lines.length - 1 && !lines[end].trimEnd().endsWith(';')) end++;
    return end;
  };
  // after: search from the line holding this other anchor, for code that repeats (two errors.push calls).
  const mark = (anchor, cls, note, singleLine = false, after = null) => {
    const start = lineOf(anchor, after ? lineOf(after) : 0);
    if (start < 0) return;
    const end = singleLine ? start : statementEnd(start);
    for (let i = start; i <= end; i++) marks.set(i, { cls });
    if (note) marks.get(end).note = note;
  };

  mark('export function', 'ran', null, true);
  if (result.error || !t) return marks;
  level.annotate(t, mark);
  return marks;
}

function foldRange(level) {
  const lines = sourceLines(level);
  const start = lines.findIndex(l => l.startsWith('/**'));
  const end = lines.findIndex(l => l.startsWith('/** @type {Configuration}')) - 2;
  return start >= 0 && end > start ? [start, end] : null;
}

function lineHtml(n, code, mark) {
  const cls = mark ? ` is-${mark.cls}` : '';
  const note = mark?.note ? `<span class="cl-v">${esc(mark.note)}</span>` : '';
  return `<div class="cl${cls}" data-line-no="${n}"><span class="cl-n">${n + 1}</span><span class="cl-c">${code}${note}</span></div>`;
}

function renderLines(htmlLines, marks = new Map(), fold = null) {
  let out = '';
  for (let i = 0; i < htmlLines.length; i++) {
    if (fold && i === fold[0]) {
      const count = fold[1] - fold[0] + 1;
      out += `<div class="cl cl-fold" data-fold role="button" tabindex="0" aria-label="${esc(T.foldLabel(count))}"><span class="cl-n">${i + 1}</span><span class="cl-c"><span class="t-com">/** … */</span><span class="fold-pill">${esc(T.foldPill(count))}</span></span></div>`;
      i = fold[1];
      continue;
    }
    out += lineHtml(i, htmlLines[i] || ' ', marks.get(i));
  }
  return `<div class="code-lines">${out}</div>`;
}

function commentLines(text) {
  return text.split('\n').map(l => `<span class="t-com">${esc(l)}</span>`);
}

function renderCode(level, t, result, input) {
  const { body, crumb, configWrap } = els;
  const s = level.state;
  const C = level.copy;
  const isConfig = tab === 'config';
  body.hidden = isConfig;
  configWrap.hidden = !isConfig;

  const dir = `extensions/${level.handle}/src`;
  const repoLink = file => `<a href="${REPO}/blob/main/${dir}/${file}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`;

  if (tab === 'run') {
    crumb.innerHTML = `<span>${dir}/${level.fnFile}</span>${repoLink(level.fnFile)}`;
    body.innerHTML = renderLines(highlight(level.fnSource, 'js'), annotations(level, t, result), s.folded ? foldRange(level) : null);
  } else if (tab === 'query') {
    crumb.innerHTML = `<span>${dir}/${level.queryFile}</span>${repoLink(level.queryFile)}`;
    body.innerHTML = renderLines(highlight(level.querySource, 'graphql'));
  } else if (tab === 'input') {
    crumb.innerHTML = `<span>${esc(C.crumbInput || T.crumbInput)}</span>`;
    body.innerHTML = renderLines(highlight(JSON.stringify(input, null, 2), 'json'));
  } else if (tab === 'output') {
    crumb.innerHTML = `<span>${esc(T.crumbOutput)}</span>`;
    let lines;
    if (!s.deployed) {
      lines = commentLines(C.outputNotDeployed);
    } else if (result.error) {
      lines = commentLines(`// ${result.error.name}: ${result.error.message}\n${C.outputError}`);
    } else {
      lines = highlight(JSON.stringify(result.output, null, 2), 'json');
    }
    body.innerHTML = renderLines(lines);
  } else {
    crumb.innerHTML = `<span>${esc(T.crumbConfig)}</span><button type="button" data-reset-config>${esc(T.reset)}</button>`;
  }
}

/* ── Checks, bar and terminal ────────────────────────────────── */
function renderChecks(level, t, result) {
  const s = level.state;
  if (s.deployed && !result.error && t) {
    level.checks.forEach((check, i) => { if (check.passes(t, result.output)) s.verified.add(i); });
  }
  const ctx = level.labelContext(t, s.config);
  els.checks.innerHTML = level.checks.map((check, i) =>
    `<li class="${s.verified.has(i) ? 'is-done' : ''}">${esc(check.label(ctx))}</li>`).join('');
  els.progress.textContent = `${s.verified.size}/${level.checks.length}`;
  const done = s.verified.size === level.checks.length;
  els.done.hidden = !done;
  level.tab.classList.toggle('is-done', done);
}

function renderBar(level, bug) {
  const s = level.state;
  const C = level.copy;
  const { app, fnName, fnState, hint, deploy } = els;
  app.classList.toggle('is-deployed', s.deployed);
  app.classList.toggle('is-deploying', s.deploying);
  fnName.textContent = level.handle;
  deploy.disabled = s.deploying;
  deploy.textContent = s.deploying ? T.deploying : s.deployed ? T.turnOff : T.deployFn;
  fnState.textContent = s.deploying ? T.stateDeploying : s.deployed ? T.stateLive : T.stateOff;

  if (s.deploying) hint.textContent = T.hintDeploying;
  else if (bug) hint.innerHTML = T.hintBug;
  else if (!s.deployed) hint.textContent = C.hintStart;
  else if (s.verified.size < level.checks.length) hint.textContent = C.hintVerify;
  else hint.textContent = C.hintDone;
}

function renderTerm(level, result) {
  const s = level.state;
  const rows = s.deployLog.map(([cls, text]) => `<p class="${cls}">${esc(text)}</p>`);
  if (!s.deployed && !s.deploying) {
    rows.push(`<p>${esc(level.copy.termOff)}</p>`);
  } else if (s.deployed) {
    if (result.error) {
      rows.push(`<p class="is-err">✕ ${esc(result.error.name)}: ${esc(result.error.message)}</p>`);
    } else {
      const ops = result.output.operations.length;
      const what = ops ? T.termOps(ops) : T.termNoChanges;
      const time = T.termTime(result.ms);
      rows.push(`<p class="is-run">▶ ${level.target} · ${what} · ${esc(time)} ${T.termInBrowser}</p>`);
    }
  }
  els.term.innerHTML = rows.slice(-3).join('');
}

function render() {
  const level = current;
  const s = level.state;
  const input = level.buildInput(level.sim, s.config);
  const result = runFunction(level, input);
  const t = level.trace(input);

  const bug = level.render(t, result, s);
  renderChecks(level, t, result);
  renderBar(level, bug);
  renderTerm(level, result);
  renderCode(level, t, result, input);
  // wait for the payment rows to finish collapsing: they change the panel height
  clearTimeout(followTimer);
  followTimer = setTimeout(followReturn, 400);

  // flag output.json when its content changes while another tab is open
  const outputText = JSON.stringify(result.output);
  if (outputText !== s.lastOutputText && tab !== 'output' && s.deployed) {
    els.tabs.querySelector('[data-tab="output"]').classList.add('has-change');
  }
  s.lastOutputText = outputText;
}

/* ── Actions ─────────────────────────────────────────────────── */
function deploy() {
  const level = current;
  const s = level.state;
  if (s.deployed) {
    s.deployed = false;
    s.deployLog = [['', level.copy.logDisabled]];
    render();
    return;
  }
  s.deploying = true;
  s.deployLog = [['is-cmd', '$ shopify app deploy']];
  render();
  const steps = [
    [350, ['is-ok', T.logBuilt(level.handle)]],
    [700, ['is-ok', T.logReleased]],
    [1000, ['is-ok', level.copy.logEnabled]],
  ];
  steps.forEach(([delay, line]) => setTimeout(() => { s.deployLog.push(line); render(); }, delay));
  setTimeout(() => {
    s.deploying = false;
    s.deployed = true;
    s.deployLog = s.deployLog.slice(-1);
    if (current === level && tab !== 'run') setTab('run');
    render();
  }, 1300);
}

// Keeps the line the function returned from in view, like a debugger following execution.
function followReturn() {
  if (tab !== 'run' || !current.state.deployed) return;
  const rets = els.body.querySelectorAll('.cl.is-ret');
  const line = rets[rets.length - 1];
  if (!line) return;
  const r = line.getBoundingClientRect();
  const b = els.body.getBoundingClientRect();
  if (r.bottom > b.bottom - 8) els.body.scrollBy({ top: r.bottom - b.bottom + 16, behavior: 'smooth' });
  else if (r.top < b.top + 8) els.body.scrollBy({ top: r.top - b.top - 16, behavior: 'smooth' });
}

function setTab(next) {
  tab = next;
  els.tabs.querySelectorAll('[data-tab]').forEach(b => {
    b.classList.toggle('is-active', b.dataset.tab === next);
    b.setAttribute('aria-pressed', String(b.dataset.tab === next));
  });
  if (next === 'output') els.tabs.querySelector('[data-tab="output"]').classList.remove('has-change');
  els.body.scrollTop = 0;
}

function setLevel(level) {
  current = level;
  LEVELS.forEach(l => {
    const on = l === level;
    l.tab.classList.toggle('is-active', on);
    l.tab.setAttribute('aria-pressed', String(on));
    l.brief.hidden = !on;
    l.panel.hidden = !on;
  });
  // On phones the ticket strip scrolls sideways: bring the chosen ticket fully into view.
  const strip = level.tab.parentElement.getBoundingClientRect();
  const box = level.tab.getBoundingClientRect();
  if (box.right > strip.right) level.tab.parentElement.scrollLeft += box.right - strip.right + 10;
  else if (box.left < strip.left) level.tab.parentElement.scrollLeft -= strip.left - box.left + 10;
  els.doneLink.href = `${REPO}/tree/main/extensions/${level.handle}`;
  els.config.value = level.state.configText;
  els.configError.textContent = level.state.configError;
  els.tabs.querySelector('[data-tab="output"]').classList.remove('has-change');
  els.body.scrollTop = 0;
  render();
}

function onConfigInput() {
  const s = current.state;
  s.configText = els.config.value;
  try {
    const parsed = JSON.parse(els.config.value);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error(T.configNotObject);
    s.config = parsed;
    s.configError = '';
  } catch (err) {
    s.configError = T.configInvalid(err.message);
    els.configError.textContent = s.configError;
    return;
  }
  els.configError.textContent = '';
  render();
}

function lineIndex(target) {
  return (current.lines || []).findIndex(line => line.el.contains(target));
}

function bindEvents() {
  const { app } = els;
  app.addEventListener('click', e => {
    const ticket = e.target.closest('[data-ticket]');
    if (ticket) {
      const level = LEVELS.find(l => l.id === ticket.dataset.ticket);
      if (level && level !== current) setLevel(level);
      return;
    }
    const stepBtn = e.target.closest('[data-line-step]');
    if (stepBtn) {
      const i = lineIndex(stepBtn);
      if (i < 0) return;
      current.sim.qty[i] = clampQty(current.sim.qty[i] + Number(stepBtn.dataset.lineStep));
      return render();
    }
    if (current.onClick(e.target)) return render();
    const tabBtn = e.target.closest('[data-tab]');
    if (tabBtn) {
      setTab(tabBtn.dataset.tab);
      return render();
    }
    if (e.target.closest('[data-fold]')) {
      current.state.folded = false;
      return render();
    }
    if (e.target.closest('[data-reset-config]')) {
      els.config.value = current.configText;
      return onConfigInput();
    }
    if (e.target.closest('#lab-deploy')) deploy();
  });

  app.addEventListener('input', e => {
    if (e.target === els.config) return onConfigInput();
    if (!e.target.matches('[data-line-qty]')) return;
    const i = lineIndex(e.target);
    const typed = Number(e.target.value);
    // An empty or half-typed field keeps the last quantity until it reads as a number.
    if (i < 0 || e.target.value === '' || !Number.isFinite(typed)) return;
    current.sim.qty[i] = clampQty(typed);
    render();
  });

  // Once the field is left, show the quantity actually in the cart (clamped, never empty).
  app.addEventListener('change', e => {
    if (!e.target.matches('[data-line-qty]')) return;
    const i = lineIndex(e.target);
    if (i >= 0) e.target.value = current.sim.qty[i];
  });

  app.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-fold]')) {
      e.preventDefault();
      current.state.folded = false;
      render();
    }
  });
}

/* ── Init ────────────────────────────────────────────────────── */
async function loadLevel(level) {
  const fnUrl = new URL(`${level.handle}/${level.fnFile}`, LAB_DIR);
  const queryUrl = new URL(`${level.handle}/${level.queryFile}`, LAB_DIR);
  const text = url => fetch(url).then(r => {
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    return r.text();
  });
  const [mod, src, query] = await Promise.all([import(fnUrl.href), text(fnUrl), text(queryUrl)]);
  level.fn = mod[level.exportName];
  level.fnSource = src.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  level.querySource = query.replace(/\r\n?/g, '\n').replace(/\n$/, '');
}

async function init() {
  const app = document.getElementById('lab-app');
  els = {
    app,
    stage: app.querySelector('.lab-stage'),
    checks: document.getElementById('lab-checks'),
    progress: document.getElementById('lab-progress'),
    done: document.getElementById('lab-done'),
    doneLink: document.getElementById('lab-done-link'),
    fnName: document.getElementById('lab-fn-name'),
    fnState: document.getElementById('lab-fn-state'),
    hint: document.getElementById('lab-hint'),
    deploy: document.getElementById('lab-deploy'),
    tabs: document.getElementById('lab-tabs'),
    crumb: document.getElementById('lab-crumb'),
    body: document.getElementById('lab-code-body'),
    configWrap: document.getElementById('lab-config-wrap'),
    config: document.getElementById('lab-config'),
    configError: document.getElementById('lab-config-error'),
    term: document.getElementById('lab-term'),
  };

  try {
    await Promise.all(LEVELS.map(loadLevel));
  } catch (err) {
    els.hint.textContent = T.loadFailed;
    console.error(err);
    return;
  }

  LEVELS.forEach(level => {
    level.tab = app.querySelector(`[data-ticket="${level.id}"]`);
    level.brief = app.querySelector(`[data-brief="${level.id}"]`);
    level.panel = app.querySelector(`[data-panel="${level.id}"]`);
    level.bind(level.panel);
  });
  bindEvents();
  app.dataset.ready = 'true';
  els.stage.removeAttribute('inert');
  setLevel(current);
}

// Load the functions only when the lab is about to scroll into view.
const target = document.getElementById('lab');
if (target) {
  const io = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      io.disconnect();
      init();
    }
  }, { rootMargin: '600px 0px' });
  io.observe(target);
}
