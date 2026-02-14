# Seguridad, autenticidad y no-repudio

El modelo conceptual basado en UUIDs y registradores permite identificar agentes y representar operaciones de forma simple y universal. Sin embargo, para que el sistema sea viable en entornos reales —especialmente financieros, administrativos o legales— es necesario incorporar una capa adicional de seguridad que garantice:

- Autenticidad del emisor.
- Integridad del contenido.
- No-repudio.
- Protección frente a suplantación.
- Registro histórico inalterable cuando sea necesario.

Esta capa no forma parte del núcleo conceptual, pero es imprescindible para su aplicación práctica.

---

## Registro histórico obligatorio

Cada agente debe mantener un registro histórico completo de:

- Operaciones internas.
- Operaciones externas emitidas.
- Operaciones externas recibidas.

Este registro debe ser persistente, auditable e inalterable.

---

## Riesgo de suplantación sin firma digital

Dado que los UUID públicos son visibles, cualquier agente podría intentar:

- Crear una operación falsa.
- Atribuirla a otro agente usando su UUID.
- Enviarla a un tercero.

Por ello, las operaciones externas deben estar firmadas digitalmente.

---

## Firma digital de operaciones externas

Toda operación externa debe incluir:

- El contenido completo.
- La fecha.
- El UUID del emisor.
- El UUID del registrador del emisor.
- Una firma digital generada con un UUID privado.

Esto garantiza autenticidad, integridad y no-repudio.

---

## UUID privado para firma

Cada agente puede disponer de:

- Un UUID público (visible).
- Un UUID privado (asociado a una clave privada).

El UUID privado:

- No se publica.
- Se registra en el registrador.
- Se usa para firmar operaciones externas