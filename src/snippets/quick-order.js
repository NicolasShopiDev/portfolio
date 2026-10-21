// B2B order pad. A buyer fills quantities across a table of 40 SKUs and adds the
// lot at once: one request instead of forty, the cart UI re-rendered from that same
// response, and a second click that cancels the first instead of racing it.
//
// <quick-order data-sections="cart-icon-bubble,cart-drawer">
//   <input type="number" data-variant-id="43210" min="0" step="6" value="0">
//   ...
//   <button type="submit">Add to cart</button>
//   <p role="status" aria-live="polite"></p>
// </quick-order>

class QuickOrder extends HTMLElement {
  #request = null;

  connectedCallback() {
    this.button = this.querySelector('[type="submit"]');
    this.status = this.querySelector('[role="status"]');

    // Inside a form, Enter in any quantity field has to work too, and listening to
    // both submit and click would send the batch twice.
    const form = this.querySelector('form');
    if (form) form.addEventListener('submit', this);
    else this.button?.addEventListener('click', this);
  }

  handleEvent(event) {
    event.preventDefault();
    this.add();
  }

  get lines() {
    return [...this.querySelectorAll('input[data-variant-id]')]
      .map((input) => ({ id: Number(input.dataset.variantId), quantity: Number(input.value) }))
      .filter((line) => line.quantity > 0);
  }

  async add() {
    const items = this.lines;
    if (items.length === 0) return;

    this.#request?.abort();
    this.#request = new AbortController();
    this.#busy(true);

    try {
      // Bundled section rendering: the cart markup comes back with the line items,
      // so the drawer and the bubble update without a second round trip.
      const response = await fetch(`${window.Shopify.routes.root}cart/add.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items, sections: this.dataset.sections }),
        signal: this.#request.signal,
      });
      const body = await response.json();

      // A sold-out line answers 422 with a readable description: show it, don't swallow it.
      if (!response.ok) throw new Error(body.description || body.message);

      for (const [id, html] of Object.entries(body.sections ?? {})) {
        const target = document.getElementById(`shopify-section-${id}`);
        if (target) target.innerHTML = html;
      }

      this.dispatchEvent(new CustomEvent('cart:updated', { bubbles: true, detail: body }));
      this.#say(`${items.length} lines added`);
    } catch (error) {
      if (error.name === 'AbortError') return; // superseded by a newer click
      this.#say(error.message);
    } finally {
      this.#busy(false);
    }
  }

  #busy(state) {
    if (!this.button) return;
    this.button.disabled = state;
    this.button.setAttribute('aria-busy', String(state));
  }

  #say(message) {
    if (this.status) this.status.textContent = message;
  }
}

customElements.define('quick-order', QuickOrder);
