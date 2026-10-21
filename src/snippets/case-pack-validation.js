// Wholesale case packs. A buyer who orders 7 units of something that leaves the
// warehouse in boxes of 6 forces somebody to open a box, and that is found out
// after the order is paid. This blocks checkout instead, and says what to change.
//
// The case pack lives in a variant metafield (b2b.case_pack, integer). A variant
// without it is not sold by the box and is left alone.
//
// Target: cart.validations.generate.run (Cart and Checkout Validation API)

// @ts-check
/**
 * @typedef {import("../generated/api").CartValidationsGenerateRunInput} RunInput
 * @typedef {import("../generated/api").CartValidationsGenerateRunResult} RunResult
 * @typedef {import("../generated/api").ValidationError} ValidationError
 */

// Five lines is already a long list to read in a checkout banner.
const MAX_ERRORS = 5;

/**
 * @param {RunInput} input
 * @returns {RunResult}
 */
export function cartValidationsGenerateRun(input) {
  // The target also runs while the cart is being edited. Blocking there means the
  // buyer cannot type 7 on the way to 12, so only the checkout steps are checked.
  const { step } = input.buyerJourney;
  if (step !== 'CHECKOUT_INTERACTION' && step !== 'CHECKOUT_COMPLETION') {
    return { operations: [] };
  }

  /** @type {ValidationError[]} */
  const errors = [];

  for (const line of input.cart.lines) {
    if (line.merchandise.__typename !== 'ProductVariant') continue;

    const pack = Number.parseInt(line.merchandise.casePack?.value ?? '', 10);
    if (!Number.isInteger(pack) || pack < 2) continue;

    const remainder = line.quantity % pack;
    if (remainder === 0) continue;

    // Round up, never down: nobody wants to be told to buy less.
    const suggestion = line.quantity + (pack - remainder);
    errors.push({
      message: `${line.merchandise.title} ships in boxes of ${pack}. Change ${line.quantity} to ${suggestion}.`,
      target: '$.cart',
    });

    if (errors.length === MAX_ERRORS) break;
  }

  return errors.length ? { operations: [{ validationAdd: { errors } }] } : { operations: [] };
}
