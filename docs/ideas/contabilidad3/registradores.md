# Registradores de UUID

El sistema propuesto permite que cualquier agente genere UUIDs de forma local, sin coordinación con terceros. Sin embargo, para que el modelo sea trazable, verificable y utilizable en entornos reales, es necesario introducir un elemento organizativo: el *registrador*.

Un registrador no es un servidor central ni un nodo privilegiado. Es simplemente un agente cuya función es certificar la emisión de UUIDs y permitir que otros agentes puedan resolver su procedencia. Su papel es fundamental para garantizar autenticidad, trazabilidad y confianza en un sistema completamente distribuido.

## Por qué son necesarios los registradores

Aunque técnicamente cualquier agente podría generar UUIDs sin registrador, esto generaría varios problemas:

- No habría forma de saber quién emitió un UUID.
- No sería posible verificar la legitimidad de una operación externa.
- Cualquier agente podría suplantar a otro usando su UUID público.
- No existiría trazabilidad entre agentes.
- No habría forma de resolver un UUID desconocido.

El registrador resuelve estos problemas proporcionando un punto de referencia verificable, sin necesidad de centralización.

## Qué es un registrador

Un registrador es un agente que:

- Emite UUIDs para otros agentes.
- Mantiene un registro público de los UUIDs que ha emitido.
- Permite verificar la validez y procedencia de un UUID.
- Puede delegar autoridad a subregistradores.
- Puede mantener una copia del registro raíz de registradores.
- Certifica la relación entre un UUID público y un UUID privado de firma.

El registrador no controla a los agentes, no almacena sus datos internos y no participa en sus operaciones. Su función es exclusivamente de certificación.

## Registro público de registradores

Para que el sistema sea resoluble, debe existir un registro público de registradores de primer nivel. Este registro:

- Puede tener múltiples copias distribuidas.
- Puede ser mantenido por varios agentes de forma colaborativa.
- No requiere consenso global.
- No contiene información privada, solo identificadores.

Cada registrador de primer nivel puede delegar autoridad a otros registradores, formando un árbol de delegación.

## Delegación de autoridad

La delegación permite que:

- Un país tenga un registrador raíz.
- Ese registrador delegue en ministerios o instituciones.
- Estos deleguen en organismos específicos.
- Estos deleguen en empresas o agentes autorizados.

Ejemplos:

- El Estado español → Ministerio del Interior → Policía Nacional → emisión de UUIDs para personas (DNI digital).
- Un fabricante → su departamento de producción → emisión de UUIDs para lavadoras.
- Un banco → su sistema interno → emisión de UUIDs para cuentas y operaciones.

La delegación no afecta a la independencia del sistema: cada registrador sigue siendo autónomo.

## Resolución de UUIDs

Cuando un agente recibe un UUID desconocido, puede resolverlo consultando:

1. El registrador que lo emitió.
2. El registrador superior en la cadena de delegación.
3. El registro público de registradores de primer nivel.

La resolución permite saber:

- Quién emitió el UUID.
- Qué tipo de agente es.
- Qué registrador lo certifica.
- Cómo verificar su firma digital (si procede).

La resolución no da acceso a información privada del agente.

## Registro histórico obligatorio

Cada registrador debe mantener un registro histórico de:

- Todos los UUIDs emitidos.
- Las relaciones de delegación.
- Los UUIDs privados asociados a claves de firma (sin revelar las claves).
- Las revocaciones o anulaciones de UUIDs.

Este registro permite:

- Verificar la validez de un UUID en cualquier momento.
- Garantizar no-repudio.
- Auditar la cadena de delegación.

## Relación entre registradores y seguridad

El registrador es un elemento clave en la capa de seguridad:

- Certifica que un UUID público pertenece a un agente.
- Certifica que un UUID privado pertenece al mismo agente.
- Permite validar firmas digitales en operaciones externas.
- Impide que un agente pueda negar la autoría de una operación firmada.

Sin registradores, la firma digital sería válida, pero no habría forma de vincularla a un agente concreto.

## Ejemplos prácticos

### Identidad digital (DNI)
- La Policía Nacional actúa como registrador.
- Emite un UUID público para cada persona.
- Registra un UUID privado asociado a su clave de firma.
- Permite validar operaciones firmadas por esa persona.

### Trazabilidad industrial (lavadora)
- El fabricante actúa como registrador.
- Emite un UUID para cada lavadora.
- Permite reconstruir su historial de reparaciones, propietarios y reciclaje.

### Sistema financiero
- Un banco actúa como registrador interno.
- Emite UUIDs para cuentas, operaciones y activos.
- Permite trazabilidad completa dentro del banco y hacia otros agentes.

## Resumen

Los registradores son el mecanismo que permite que un sistema basado en UUIDs sea trazable, verificable y seguro. No centralizan información ni controlan a los agentes, pero certifican la procedencia de los identificadores y permiten validar operaciones externas. Son la base de la confianza en un sistema completamente distribuido.