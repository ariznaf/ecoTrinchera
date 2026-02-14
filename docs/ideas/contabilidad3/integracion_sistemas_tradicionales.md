# Integración con sistemas contables tradicionales

La adopción del modelo basado en UUIDs, agentes, cuentas y traspasos no requiere abandonar inmediatamente los sistemas contables clásicos. Durante un periodo de transición —que puede durar años o incluso décadas— es razonable que convivan ambos modelos. Este apartado describe cómo integrar el sistema propuesto con contabilidades tradicionales sin necesidad de migraciones traumáticas.

---

## Representación de un sistema contable clásico como agente

Un sistema contable tradicional puede representarse como:

- Un **agente** con UUID propio.
- Un conjunto de **cuentas espejo** que reflejan las cuentas del sistema clásico.
- Un mecanismo de **exportación de operaciones** hacia el nuevo modelo.

Esto permite que:

- El sistema clásico siga funcionando internamente.
- El nuevo sistema reciba operaciones equivalentes en forma de traspasos.
- La transición sea gradual y reversible.

---

## Traducción de asientos contables a traspasos

Un asiento contable tradicional puede traducirse directamente a uno o varios traspasos.

Ejemplo:

Asiento clásico:
- Debe: 100 EUR en “Gastos”
- Haber: 100 EUR en “Caja”

Traducción:
- Traspaso desde la cuenta “Caja” → cuenta “Gastos”
- Cantidad: 100 EUR

Esta traducción es sistemática y puede automatizarse.

---

## Doble registro durante la transición

Durante la convivencia de ambos sistemas:

- El sistema clásico mantiene los libros obligatorios.
- El nuevo sistema mantiene el registro histórico basado en UUIDs.
- Ambos sistemas pueden conciliarse automáticamente.

Esto permite:

- Auditorías más claras.
- Control interno más robusto.
- Trazabilidad completa sin abandonar la contabilidad tradicional.

---

## Interoperación con agentes modernos

Incluso si un agente no ha migrado al nuevo sistema:

- Puede recibir operaciones externas en formato tradicional.
- Puede enviar operaciones externas en formato tradicional.
- Puede utilizar un adaptador para convertirlas al nuevo modelo.

Esto garantiza que:

- Los agentes modernos pueden operar con agentes tradicionales.
- No se requiere una adopción simultánea por parte de todos.
- La interoperabilidad está asegurada desde el primer día.

---

## Ventajas de la integración gradual

- No se obliga a nadie a migrar de inmediato.
- Los agentes pueden adoptar el sistema cuando estén preparados.
- La transición puede hacerse por sectores o por fases.
- El sistema puede implantarse sin interrumpir operaciones existentes.

---

## Resumen

La integración con sistemas contables tradicionales es sencilla y no requiere cambios drásticos. El modelo permite representar sistemas clásicos como agentes, traducir asientos a traspasos y mantener doble registro durante la transición. Esto garantiza una adopción gradual, segura y compatible con las obligaciones legales actuales.