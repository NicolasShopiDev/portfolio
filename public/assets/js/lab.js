// Checkout Lab: runs the real Shopify Function from shopify-checkout-lab against a simulated checkout.
// The function file is copied verbatim from that repo (see scripts/sync-lab.ps1).

const FN_URL = new URL('../lab/cod-guard/cart_payment_methods_transform_run.js', import.meta.url);
const QUERY_URL = new URL('../lab/cod-guard/cart_payment_methods_transform_run.graphql', import.meta.url);

const REPO = 'https://github.com/NicolasShopiDev/shopify-checkout-lab';
const EXT_DIR = 'extensions/cod-guard/src';
const FN_FILE = 'cart_payment_methods_transform_run.js';
const QUERY_FILE = 'cart_payment_methods_transform_run.graphql';

const PRICE = 45;
const MAX_QTY = 12;

/* ── Copy ────────────────────────────────────────────────────── */
// Every string the lab writes at runtime. The page language picks the set; the code shown is never translated.
const I18N = {
  en: {
    locale: 'en',
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
      c => `COD hidden when shipping outside ${countryList(c, T.listJoinOutside)}`,
    ],
    returnedNoChanges: '← returned, no changes',
    returnedHide: '← returned, hide COD',
    foldLabel: n => `Expand ${n} lines of type definitions`,
    foldPill: n => `${n} lines · types`,
    crumbInput: 'What Shopify sends the function, shaped by input.graphql',
    crumbOutput: 'What the function returns to the checkout',
    crumbConfig: 'Metafield $app:function-configuration · edit it',
    reset: 'Reset',
    outputNotDeployed: '// Not deployed.\n// Shopify skips the function and shows every payment method.',
    outputError: '// A failing function changes nothing: every method stays visible.',
    bugMethodNote: 'Offered, against the merchant’s rules',
    bugOverLimit: total => `COD offered on a ${total} order`,
    bugAbroad: country => `COD offered on an order to ${country}`,
    hiddenBy: n => `${n} method${n > 1 ? 's' : ''} hidden by cod-guard`,
    deploying: 'Deploying…',
    turnOff: 'Turn off',
    deployFn: 'Deploy function',
    stateDeploying: 'Deploying',
    stateLive: 'Live on checkout',
    stateOff: 'Not deployed',
    hintDeploying: 'Building and releasing the function…',
    hintBug: '<b>There’s the bug.</b> Deploy the function to fix it.',
    hintStart: 'Push the order over €300 or ship to France to reproduce the problem.',
    hintVerify: 'Now check each rule on its own: change the quantity and the country.',
    hintDone: 'Fixed. Try editing metafield.json to change the rules without touching the code.',
    termOff: '$ cod-guard is not deployed. Shopify shows every payment method.',
    termOps: n => `${n} operation${n > 1 ? 's' : ''}`,
    termNoChanges: 'no changes',
    termTime: ms => (ms < 0.1 ? '<0.1 ms' : `${ms.toFixed(1)} ms`),
    termInBrowser: 'in your browser',
    logDisabled: 'Payment customization disabled. cod-guard no longer runs.',
    logBuilt: '✓ Built cod-guard → dist/function.wasm',
    logReleased: '✓ Released a new app version',
    logEnabled: '✓ Payment customization enabled',
    configNotObject: 'Settings must be a JSON object.',
    configInvalid: msg => `Invalid JSON, still using the last valid settings. ${msg}`,
    loadFailed: 'The lab could not load. Refresh the page to try again.',
  },
  es: {
    locale: 'es-ES',
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
      c => `Contra reembolso oculto en envíos fuera de ${countryList(c, T.listJoinOutside)}`,
    ],
    returnedNoChanges: '← devuelve: sin cambios',
    returnedHide: '← devuelve: ocultar contra reembolso',
    foldLabel: n => `Desplegar ${n} líneas de definiciones de tipos`,
    foldPill: n => `${n} líneas · tipos`,
    crumbInput: 'Lo que Shopify envía a la función, según input.graphql',
    crumbOutput: 'Lo que la función devuelve al checkout',
    crumbConfig: 'Metafield $app:function-configuration · edítalo',
    reset: 'Restablecer',
    outputNotDeployed: '// Sin desplegar.\n// Shopify no ejecuta la función y muestra todos los métodos de pago.',
    outputError: '// Si la función falla, no cambia nada: todos los métodos siguen visibles.',
    bugMethodNote: 'Disponible, aunque la tienda no lo permite',
    bugOverLimit: total => `Contra reembolso disponible en un pedido de ${total}`,
    bugAbroad: country => `Contra reembolso disponible en un envío a ${country}`,
    hiddenBy: n => (n > 1 ? `${n} métodos ocultos por cod-guard` : `${n} método oculto por cod-guard`),
    deploying: 'Desplegando…',
    turnOff: 'Desactivar',
    deployFn: 'Desplegar función',
    stateDeploying: 'Desplegando',
    stateLive: 'Activa en el checkout',
    stateOff: 'Sin desplegar',
    hintDeploying: 'Compilando y publicando la función…',
    hintBug: '<b>Ahí está el fallo.</b> Despliega la función para corregirlo.',
    hintStart: 'Sube el pedido por encima de 300 € o envíalo a Francia para reproducir el problema.',
    hintVerify: 'Ahora comprueba cada regla por separado: cambia la cantidad y el país.',
    hintDone: 'Solucionado. Prueba a editar metafield.json para cambiar las reglas sin tocar el código.',
    termOff: '$ cod-guard no está desplegada. Shopify muestra todos los métodos de pago.',
    termOps: n => (n > 1 ? `${n} operaciones` : `${n} operación`),
    termNoChanges: 'sin cambios',
    termTime: ms => (ms < 0.1 ? '<0,1 ms' : `${ms.toFixed(1).replace('.', ',')} ms`),
    termInBrowser: 'en tu navegador',
    logDisabled: 'Personalización de pago desactivada. cod-guard ya no se ejecuta.',
    logBuilt: '✓ cod-guard compilada → dist/function.wasm',
    logReleased: '✓ Nueva versión de la app publicada',
    logEnabled: '✓ Personalización de pago activada',
    configNotObject: 'La configuración debe ser un objeto JSON.',
    configInvalid: msg => `JSON no válido, se mantiene la última configuración válida. ${msg}`,
    loadFailed: 'No se ha podido cargar el laboratorio. Recarga la página para volver a intentarlo.',
  },
};

const LANG = (document.documentElement.lang || '').toLowerCase().startsWith('es') ? 'es' : 'en';
const T = I18N[LANG];
const COUNTRY_NAMES = T.countries;

const METHOD_IDS = [0, 1, 2, 3].map(n => `gid://shopify/PaymentCustomizationPaymentMethod/${n}`);
const METHODS = METHOD_IDS.map((id, i) => ({ id, ...T.methods[i] }));
const COD = METHODS[3];

// Mirrors DEFAULTS in the function. Only used to annotate the code view, never to decide.
const FN_DEFAULTS = { methodName: 'cash on delivery', maxOrderTotal: 300, allowedCountries: ['ES'] };

// What the merchant saves in the metafield. methodName follows the page language so it matches the COD name.
const DEFAULT_CONFIG = { ...FN_DEFAULTS, methodName: T.methodName };
const DEFAULT_CONFIG_TEXT = `{
  "methodName": ${JSON.stringify(DEFAULT_CONFIG.methodName)},
  "maxOrderTotal": ${DEFAULT_CONFIG.maxOrderTotal},
  "allowedCountries": ${JSON.stringify(DEFAULT_CONFIG.allowedCountries).replace(/,/g, ', ')}
}`;

// Each rule must be seen on its own, the way a test isolates one behaviour.
const CHECKS = [
  {
    label: T.checks[0],
    passes: (t, codHidden) => !t.overLimit && !t.shipsAbroad && !codHidden,
  },
  {
    label: T.checks[1],
    passes: (t, codHidden) => t.overLimit && !t.shipsAbroad && codHidden,
  },
  {
    label: T.checks[2],
    passes: (t, codHidden) => t.shipsAbroad && !t.overLimit && codHidden,
  },
];

const state = {
  qty: 3,
  country: 'ES',
  selected: METHODS[0].id,
  deployed: false,
  deploying: false,
  config: { ...DEFAULT_CONFIG },
  tab: 'run',
  folded: true,
  verified: new Set(),
  deployLog: [],
  lastOutputText: '',
};

let fn = null;
let fnSource = '';
let querySource = '';
let els = null;
let followTimer = 0;

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

function countryList(config, joiner = T.listJoin) {
  const codes = Array.isArray(config.allowedCountries) ? config.allowedCountries : [];
  const names = codes.map(c => COUNTRY_NAMES[c] || c);
  if (names.length === 0) return T.nowhere;
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(', ')} ${joiner} ${names[names.length - 1]}`;
}

/* ── Syntax highlighting ─────────────────────────────────────── */
const RULES = {
  js: /(?<com>\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(?<str>"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(?<kw>\b(?:const|let|return|if|else|export|function|import|from|new|typeof)\b)|(?<lit>\b(?:true|false|null|undefined|\d+(?:\.\d+)?)\b)|(?<fn>[A-Za-z_$][\w$]*(?=\s*\())/g,
  graphql: /(?<com>#[^\n]*)|(?<str>"(?:[^"\\\n]|\\.)*")|(?<kw>\b(?:query|mutation|fragment|on)\b)|(?<fn>[A-Za-z_]\w*(?=\s*[({]))/g,
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

/* ── Function input, run and trace ───────────────────────────── */
function buildInput() {
  return {
    cart: {
      cost: { totalAmount: { amount: (state.qty * PRICE).toFixed(2) } },
      deliveryGroups: [{ deliveryAddress: { countryCode: state.country } }],
    },
    paymentMethods: METHODS.map(({ id, name }) => ({ id, name })),
    paymentCustomization: { metafield: { jsonValue: state.config } },
  };
}

function runFunction(input) {
  if (!state.deployed) return { output: null, error: null, ms: 0 };
  const start = performance.now();
  try {
    const output = fn(structuredClone(input));
    return { output, error: null, ms: performance.now() - start };
  } catch (error) {
    return { output: null, error, ms: performance.now() - start };
  }
}

// Recomputes the function's intermediate values so the code view can show them inline.
function trace(input) {
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
}

/* ── Code view ───────────────────────────────────────────────── */
function sourceLines() {
  return fnSource.split('\n');
}

function lineOf(anchor) {
  return sourceLines().findIndex(l => l.includes(anchor));
}

// A statement runs from its anchor line to the first line ending in ";".
function statementRange(anchor) {
  const lines = sourceLines();
  const start = lineOf(anchor);
  let end = start;
  while (end < lines.length - 1 && !lines[end].trimEnd().endsWith(';')) end++;
  return [start, end];
}

function annotations(t, result) {
  const marks = new Map();
  if (!state.deployed || !fnSource) return marks;

  const mark = (anchor, cls, note, singleLine = false) => {
    const [start, end] = singleLine ? [lineOf(anchor), lineOf(anchor)] : statementRange(anchor);
    if (start < 0) return;
    for (let i = start; i <= end; i++) marks.set(i, { cls });
    if (note) marks.get(end).note = note;
  };

  mark('export function', 'ran', null, true);
  if (result.error || !t) return marks;

  const cfg = t.config;
  mark('const config', 'ran', `maxOrderTotal: ${cfg.maxOrderTotal} · allowedCountries: ${JSON.stringify(cfg.allowedCountries)}`);
  mark('const method', 'ran', `method = ${t.method ? JSON.stringify(t.method.name) : 'undefined'}`);
  if (!t.method) {
    mark('if (!method)', 'ret', T.returnedNoChanges, true);
    return marks;
  }
  mark('if (!method)', 'ran', null, true);
  mark('const total', 'ran', `total = ${t.total}`);
  mark('const countries', 'ran', `countries = ${JSON.stringify(t.countries)}`);
  mark('const overLimit', 'ran', `overLimit = ${t.overLimit}`);
  mark('const shipsAbroad', 'ran', `shipsAbroad = ${t.shipsAbroad}`);
  if (!t.overLimit && !t.shipsAbroad) {
    mark('if (!overLimit', 'ret', T.returnedNoChanges, true);
    return marks;
  }
  mark('if (!overLimit', 'ran', null, true);
  mark('return {', 'ret', T.returnedHide);
  return marks;
}

function foldRange() {
  const lines = sourceLines();
  const start = lines.findIndex(l => l.startsWith('/**'));
  const end = lines.findIndex(l => l.startsWith('/** @type {Configuration}')) - 2;
  return start >= 0 && end > start ? [start, end] : null;
}

function lineHtml(n, code, mark) {
  const cls = mark ? ` is-${mark.cls}` : '';
  const note = mark?.note ? `<span class="cl-v">${esc(mark.note)}</span>` : '';
  return `<div class="cl${cls}" data-line="${n}"><span class="cl-n">${n + 1}</span><span class="cl-c">${code}${note}</span></div>`;
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

function renderCode(t, result, input) {
  const { body, crumb, configWrap } = els;
  const isConfig = state.tab === 'config';
  body.hidden = isConfig;
  configWrap.hidden = !isConfig;

  const repoLink = file => `<a href="${REPO}/blob/main/${EXT_DIR}/${file}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`;

  if (state.tab === 'run') {
    crumb.innerHTML = `<span>${EXT_DIR}/${FN_FILE}</span>${repoLink(FN_FILE)}`;
    body.innerHTML = renderLines(highlight(fnSource, 'js'), annotations(t, result), state.folded ? foldRange() : null);
  } else if (state.tab === 'query') {
    crumb.innerHTML = `<span>${EXT_DIR}/${QUERY_FILE}</span>${repoLink(QUERY_FILE)}`;
    body.innerHTML = renderLines(highlight(querySource, 'graphql'));
  } else if (state.tab === 'input') {
    crumb.innerHTML = `<span>${esc(T.crumbInput)}</span>`;
    body.innerHTML = renderLines(highlight(JSON.stringify(input, null, 2), 'json'));
  } else if (state.tab === 'output') {
    crumb.innerHTML = `<span>${esc(T.crumbOutput)}</span>`;
    let lines;
    if (!state.deployed) {
      lines = commentLines(T.outputNotDeployed);
    } else if (result.error) {
      lines = commentLines(`// ${result.error.name}: ${result.error.message}\n${T.outputError}`);
    } else {
      lines = highlight(JSON.stringify(result.output, null, 2), 'json');
    }
    body.innerHTML = renderLines(lines);
  } else {
    crumb.innerHTML = `<span>${esc(T.crumbConfig)}</span><button type="button" data-reset-config>${esc(T.reset)}</button>`;
  }
}

/* ── Checkout and progress ───────────────────────────────────── */
function renderMethodsOnce() {
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
}

function renderCheckout(t, hiddenIds) {
  const total = state.qty * PRICE;
  els.qty.textContent = state.qty;
  els.subtotal.textContent = price(total);
  els.total.textContent = price(total);
  els.minus.disabled = state.qty <= 1;
  els.plus.disabled = state.qty >= MAX_QTY;

  els.countries.querySelectorAll('[data-country]').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.country === state.country));
  });

  if (hiddenIds.has(state.selected)) state.selected = METHODS.find(m => !hiddenIds.has(m.id))?.id;

  const bug = !state.deployed && t && (t.overLimit || t.shipsAbroad);
  METHODS.forEach(m => {
    const hidden = hiddenIds.has(m.id);
    const wrap = els.methods.querySelector(`[data-wrap="${m.id}"]`);
    const btn = wrap.querySelector('.lc-method');
    wrap.classList.toggle('is-hidden', hidden);
    btn.tabIndex = hidden ? -1 : 0;
    btn.setAttribute('aria-hidden', String(hidden));
    btn.classList.toggle('is-selected', state.selected === m.id);
    btn.setAttribute('aria-pressed', String(state.selected === m.id));
    const isBug = bug && m.id === COD.id;
    btn.classList.toggle('is-bug', isBug);
    btn.querySelector('[data-note]').textContent = isBug ? T.bugMethodNote : m.note;
  });

  const note = els.note;
  note.className = 'lc-note';
  if (bug) {
    note.classList.add('is-bug');
    note.textContent = t.overLimit ? T.bugOverLimit(money(t.total)) : T.bugAbroad(COUNTRY_NAMES[state.country]);
  } else if (hiddenIds.size) {
    note.classList.add('is-ok');
    note.textContent = T.hiddenBy(hiddenIds.size);
  } else {
    note.textContent = '';
  }
  return bug;
}

function renderChecks(t, codHidden, result) {
  if (state.deployed && !result.error && t) {
    CHECKS.forEach((check, i) => { if (check.passes(t, codHidden)) state.verified.add(i); });
  }
  const config = t ? t.config : DEFAULT_CONFIG;
  els.checks.innerHTML = CHECKS.map((check, i) =>
    `<li class="${state.verified.has(i) ? 'is-done' : ''}">${esc(check.label(config))}</li>`).join('');
  els.progress.textContent = `${state.verified.size}/${CHECKS.length}`;
  const done = state.verified.size === CHECKS.length;
  els.done.hidden = !done;
  els.app.classList.toggle('is-done', done);
}

function renderBar(bug) {
  const { app, fnState, hint, deploy } = els;
  app.classList.toggle('is-deployed', state.deployed);
  app.classList.toggle('is-deploying', state.deploying);
  deploy.disabled = state.deploying;
  deploy.textContent = state.deploying ? T.deploying : state.deployed ? T.turnOff : T.deployFn;
  fnState.textContent = state.deploying ? T.stateDeploying : state.deployed ? T.stateLive : T.stateOff;

  if (state.deploying) hint.textContent = T.hintDeploying;
  else if (bug) hint.innerHTML = T.hintBug;
  else if (!state.deployed) hint.textContent = T.hintStart;
  else if (state.verified.size < CHECKS.length) hint.textContent = T.hintVerify;
  else hint.textContent = T.hintDone;
}

function renderTerm(result) {
  const rows = state.deployLog.map(([cls, text]) => `<p class="${cls}">${esc(text)}</p>`);
  if (!state.deployed && !state.deploying) {
    rows.push(`<p>${esc(T.termOff)}</p>`);
  } else if (state.deployed) {
    if (result.error) {
      rows.push(`<p class="is-err">✕ ${esc(result.error.name)}: ${esc(result.error.message)}</p>`);
    } else {
      const ops = result.output.operations.length;
      const what = ops ? T.termOps(ops) : T.termNoChanges;
      const time = T.termTime(result.ms);
      rows.push(`<p class="is-run">▶ cart.payment-methods.transform.run · ${what} · ${esc(time)} ${T.termInBrowser}</p>`);
    }
  }
  els.term.innerHTML = rows.slice(-3).join('');
}

function render() {
  const input = buildInput();
  const result = runFunction(input);
  const t = trace(input);
  const ops = result.output?.operations || [];
  const hiddenIds = new Set(ops.map(op => op.paymentMethodHide?.paymentMethodId).filter(Boolean));

  const bug = renderCheckout(t, hiddenIds);
  renderChecks(t, hiddenIds.has(COD.id), result);
  renderBar(bug);
  renderTerm(result);
  renderCode(t, result, input);
  // wait for the payment rows to finish collapsing: they change the panel height
  clearTimeout(followTimer);
  followTimer = setTimeout(followReturn, 400);

  // flag output.json when its content changes while another tab is open
  const outputText = JSON.stringify(result.output);
  if (outputText !== state.lastOutputText && state.tab !== 'output' && state.deployed) {
    els.tabs.querySelector('[data-tab="output"]').classList.add('has-change');
  }
  state.lastOutputText = outputText;
}

/* ── Actions ─────────────────────────────────────────────────── */
function deploy() {
  if (state.deployed) {
    state.deployed = false;
    state.deployLog = [['', T.logDisabled]];
    render();
    return;
  }
  state.deploying = true;
  state.deployLog = [['is-cmd', '$ shopify app deploy']];
  render();
  const steps = [
    [350, ['is-ok', T.logBuilt]],
    [700, ['is-ok', T.logReleased]],
    [1000, ['is-ok', T.logEnabled]],
  ];
  steps.forEach(([delay, line]) => setTimeout(() => { state.deployLog.push(line); render(); }, delay));
  setTimeout(() => {
    state.deploying = false;
    state.deployed = true;
    state.deployLog = state.deployLog.slice(-1);
    if (state.tab !== 'run') setTab('run');
    render();
  }, 1300);
}

// Keeps the line the function returned from in view, like a debugger following execution.
function followReturn() {
  if (state.tab !== 'run' || !state.deployed) return;
  const rets = els.body.querySelectorAll('.cl.is-ret');
  const line = rets[rets.length - 1];
  if (!line) return;
  const r = line.getBoundingClientRect();
  const b = els.body.getBoundingClientRect();
  if (r.bottom > b.bottom - 8) els.body.scrollBy({ top: r.bottom - b.bottom + 16, behavior: 'smooth' });
  else if (r.top < b.top + 8) els.body.scrollBy({ top: r.top - b.top - 16, behavior: 'smooth' });
}

function setTab(tab) {
  state.tab = tab;
  els.tabs.querySelectorAll('[data-tab]').forEach(b => {
    b.classList.toggle('is-active', b.dataset.tab === tab);
    b.setAttribute('aria-pressed', String(b.dataset.tab === tab));
  });
  if (tab === 'output') els.tabs.querySelector('[data-tab="output"]').classList.remove('has-change');
  els.body.scrollTop = 0;
}

function onConfigInput() {
  try {
    const parsed = JSON.parse(els.config.value);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error(T.configNotObject);
    state.config = parsed;
    els.configError.textContent = '';
  } catch (err) {
    els.configError.textContent = T.configInvalid(err.message);
    return;
  }
  render();
}

function bindEvents() {
  const { app } = els;
  app.addEventListener('click', e => {
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) {
      state.qty = Math.min(MAX_QTY, Math.max(1, state.qty + Number(qtyBtn.dataset.qty)));
      return render();
    }
    const countryBtn = e.target.closest('[data-country]');
    if (countryBtn) {
      state.country = countryBtn.dataset.country;
      return render();
    }
    const methodBtn = e.target.closest('[data-method]');
    if (methodBtn) {
      state.selected = methodBtn.dataset.method;
      return render();
    }
    const tabBtn = e.target.closest('[data-tab]');
    if (tabBtn) {
      setTab(tabBtn.dataset.tab);
      return render();
    }
    if (e.target.closest('[data-fold]')) {
      state.folded = false;
      return render();
    }
    if (e.target.closest('[data-reset-config]')) {
      els.config.value = DEFAULT_CONFIG_TEXT;
      return onConfigInput();
    }
    if (e.target.closest('#lab-deploy')) deploy();
  });

  app.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-fold]')) {
      e.preventDefault();
      state.folded = false;
      render();
    }
  });

  els.config.addEventListener('input', onConfigInput);
}

/* ── Init ────────────────────────────────────────────────────── */
async function init() {
  const app = document.getElementById('lab-app');
  els = {
    app,
    stage: app.querySelector('.lab-stage'),
    qty: document.getElementById('lc-qty'),
    minus: app.querySelector('[data-qty="-1"]'),
    plus: app.querySelector('[data-qty="1"]'),
    countries: document.getElementById('lc-countries'),
    methods: document.getElementById('lc-methods'),
    note: document.getElementById('lc-note'),
    subtotal: document.getElementById('lc-subtotal'),
    total: document.getElementById('lc-total'),
    checks: document.getElementById('lab-checks'),
    progress: document.getElementById('lab-progress'),
    done: document.getElementById('lab-done'),
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
    const [mod, src, query] = await Promise.all([
      import(FN_URL.href),
      fetch(FN_URL).then(r => r.text()),
      fetch(QUERY_URL).then(r => r.text()),
    ]);
    fn = mod.cartPaymentMethodsTransformRun;
    fnSource = src.replace(/\r\n?/g, '\n').replace(/\n$/, '');
    querySource = query.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  } catch (err) {
    els.hint.textContent = T.loadFailed;
    console.error(err);
    return;
  }

  els.config.value = DEFAULT_CONFIG_TEXT;
  renderMethodsOnce();
  bindEvents();
  app.dataset.ready = 'true';
  els.stage.removeAttribute('inert');
  render();
}

// Load the function only when the lab is about to scroll into view.
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
