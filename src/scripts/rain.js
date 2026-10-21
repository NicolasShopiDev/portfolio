/* Falling characters. One engine for the two rains on the code page: the black one behind the
   patterns and the green one that fills the screen in Matrix mode.

   What keeps it cheap:
   - the canvas is never bigger than the viewport, whatever the page measures;
   - it repaints ~22 times a second, not 60, and only while it is started;
   - it stops itself when the tab goes to the background;
   - the trails are not redrawn, a veil of the background colour eats them one frame at a time;
   - prefers-reduced-motion gets a single still frame and no loop at all.

   createRain() builds nothing and paints nothing until start() is called. */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>/\=;:+*$&|!?#';
const FRAME_MS = 45;        // ~22 fps
const SPEED = [0.45, 1.15]; // rows per frame

const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * @param {HTMLCanvasElement} canvas
 * @param {{ink: string, veil: string, columnWidth?: number, fade?: number, maxDpr?: number}} opts
 *   ink and veil are "r,g,b": the colour of the glyphs and the colour they dissolve into.
 */
export function createRain(canvas, { ink, veil, columnWidth = 18, fade = 0.05, maxDpr = 1.5 }) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { start() {}, stop() {}, destroy() {} };

  let cols = [];
  let w = 0, h = 0, rowH = 0, rows = 0;
  let timer = 0, last = 0, running = false, resizeTimer = 0;

  // Columns start above the top edge at a random height, so they never fall as one wall.
  const column = () => ({
    y: -Math.random() * rows * 0.9,
    speed: SPEED[0] + Math.random() * (SPEED[1] - SPEED[0]),
  });

  function measure() {
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const rect = canvas.getBoundingClientRect();
    w = Math.max(1, Math.round(rect.width));
    h = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `${columnWidth - 3}px 'Space Mono', monospace`;
    ctx.textBaseline = 'top';
    rowH = columnWidth * 1.2;
    rows = Math.ceil(h / rowH) + 2;
    const count = Math.ceil(w / columnWidth);
    cols = Array.from({ length: count }, (_, i) => cols[i] || column());
  }

  function paint(x, row, alpha) {
    ctx.fillStyle = `rgba(${ink},${alpha})`;
    ctx.fillText(glyph(), x, row * rowH);
  }

  function frame(now) {
    timer = requestAnimationFrame(frame);
    if (now - last < FRAME_MS) return;
    last = now;

    ctx.fillStyle = `rgba(${veil},${fade})`;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      const from = Math.floor(col.y);
      col.y += col.speed;
      const to = Math.floor(col.y);
      for (let row = from + 1; row <= to; row++) {
        if (row >= 0 && row < rows) paint(i * columnWidth, row, 0.9);
      }
      if (col.y > rows) cols[i] = column();
    }
  }

  // One frozen frame: every column caught mid-fall, fading out behind its head.
  function freeze() {
    ctx.clearRect(0, 0, w, h);
    cols.forEach((col, i) => {
      const head = Math.random() * rows;
      for (let n = 0; n < 18; n++) {
        const row = Math.floor(head - n);
        if (row < 0) break;
        paint(i * columnWidth, row, 0.9 * Math.pow(1 - fade, n * 3));
      }
    });
  }

  function onVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(timer);
    } else if (running) {
      last = 0;
      timer = requestAnimationFrame(frame);
    }
  }

  const resizer = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      measure();
      if (still()) freeze();
    }, 150);
  });

  function start() {
    if (running) return;
    running = true;
    measure();
    resizer.observe(canvas);
    if (still()) {
      freeze();
      return;
    }
    document.addEventListener('visibilitychange', onVisibility);
    last = 0;
    timer = requestAnimationFrame(frame);
  }

  function stop() {
    if (!running) return;
    running = false;
    cancelAnimationFrame(timer);
    resizer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  }

  function destroy() {
    stop();
    clearTimeout(resizeTimer);
    cols = [];
  }

  return { start, stop, destroy };
}
