# Identificadores universales (UUID)

El modelo propuesto se basa en un concepto extremadamente simple pero poderoso: el uso de identificadores únicos universales (UUID) como base para identificar cualquier agente u operación dentro del sistema. Esta elección no es casual. Los UUID tienen propiedades que los hacen ideales para construir un sistema distribuido, interoperable y sin necesidad de coordinación central.

## ¿Qué es un UUID?

Un UUID (Universally Unique Identifier) es una cadena de 128 bits representada habitualmente como un texto hexadecimal dividido en grupos. Su característica fundamental es que puede generarse localmente, sin comunicación con ningún servidor, y aun así la probabilidad de que dos UUID generados en lugares distintos coincidan es prácticamente nula.

Esto permite:

- Identificar elementos sin necesidad de un registro central.
- Generar identificadores en cualquier dispositivo o sistema.
- Evitar colisiones sin mecanismos de consenso.
- Crear sistemas distribuidos sin puntos únicos de fallo.

## Por qué un UUID es perfecto para este modelo

El objetivo del sistema es permitir que cualquier agente —persona, empresa, objeto, cuenta, activo u operación— pueda ser identificado de forma inequívoca. Para ello, un UUID ofrece:

- **Unicidad práctica**: la probabilidad de colisión es tan baja que puede considerarse inexistente.
- **Independencia**: no requiere coordinación entre agentes.
- **Neutralidad**: no contiene información semántica (no revela nada sobre el agente).
- **Simplicidad**: se genera con una función estándar disponible en cualquier lenguaje.
- **Escalabilidad**: no hay límite práctico al número de UUIDs que pueden generarse.

## Qué puede identificarse con un UUID

En este modelo, cualquier cosa que necesite ser identificada puede tener un UUID. Algunos ejemplos:

### Agentes humanos o institucionales
- Una persona (por ejemplo, un DNI digital).
- Una empresa.
- Un banco, bróker o institución financiera