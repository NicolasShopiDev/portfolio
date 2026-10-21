// Diagnóstico temporal: si /ping responde, Pages está ejecutando las Functions de este repo.
export function onRequestGet() {
  return new Response('pong', { headers: { 'content-type': 'text/plain' } });
}
