export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (err) {
    queue.push(`Error: ${err.message}`, 'Guardrail was processed');
  }
  return queue;
}
