# Operaciones internas

Las operaciones internas son aquellas que ocurren dentro del ámbito de un mismo agente. No implican comunicación con otros agentes y, por tanto, no requieren mecanismos de firma digital externa ni validación por terceros. Constituyen la base del funcionamiento interno de cualquier entidad, desde un banco hasta un objeto físico o un proceso administrativo.

En este modelo, una operación interna se representa como un conjunto de uno o varios traspasos entre cuentas controladas por el mismo agente.

## Qué es una operación interna

Una operación interna es cualquier acción que:

- afecta únicamente a cuentas pertenecientes al mismo agente,
- no requiere comunicación con agentes externos,
- modifica el estado interno del agente,
- queda registrada en su historial interno.

Ejemplos típicos:

- Un banco moviendo fondos entre cuentas internas.
- Un bróker registrando una compra de valores.
- Una empresa registrando un gasto o ingreso interno.
- Un objeto físico actualizando su historial de mantenimiento.
- Un proceso administrativo avanzando de una etapa a otra.

Las operaciones internas son completamente autónomas: el agente las genera, las valida y las registra sin intervención externa.

## Estructura de una operación interna

Una operación interna puede constar de:

- Uno o varios **traspasos** entre cuentas internas.
- Un **UUID propio** que identifica la operación.
- Una **fecha** de emisión.
- Una lista de **operaciones derivadas** (si las hay).
- Información adicional según el tipo de operación.

El traspaso es la unidad mínima, pero la operación interna puede agrupar varios traspasos relacionados.

Ejemplo:

Una compra de valores puede generar:

- Un traspaso de dinero desde la cuenta de efectivo.
- Un traspaso de valores hacia la cuenta de activos.
- Un traspaso de comisión hacia la cuenta del bróker.
- Un traspaso de liquidación posterior.

Todos estos traspasos forman parte de una única operación interna.

## Operaciones derivadas

Una operación interna puede desencadenar otras operaciones internas. Esto es especialmente común en:

- Cambios de divisa.
- Compras y ventas de valores.
- Liquidaciones.
- Ajustes contables.
- Cálculo de intereses.
- Aplicación de comisiones.
- Procesos administrativos complejos.

Cada operación derivada tiene su propio UUID, pero queda vinculada a la operación original mediante una lista de operaciones relacionadas.

Esto permite reconstruir el árbol completo de efectos de una operación.

## Registro histórico de operaciones internas

Cada agente debe mantener un registro histórico completo de todas sus operaciones internas. Este registro:

- No puede modificarse retroactivamente.
- Permite auditar el comportamiento del agente.
- Facilita la conciliación interna.
- Permite reconstruir el estado de cualquier cuenta en cualquier momento.
- Es la base de la trazabilidad interna.

El registro histórico es equivalente al libro mayor contable, pero generalizado a cualquier tipo de agente.

## Seguridad y firma de operaciones internas

En la mayoría de los casos, las operaciones internas **no requieren firma digital**, ya que:

- No salen del ámbito del agente.
- No afectan directamente a terceros.
- No generan responsabilidad legal externa.

Sin embargo, algunos agentes pueden estar obligados por regulación a firmar internamente sus operaciones, por ejemplo:

- Entidades financieras.
- Administraciones públicas.
- Empresas auditadas.
- Sistemas con trazabilidad reforzada.

En estos casos, la firma interna puede incluir:

- El contenido de la operación.
- La fecha y hora.
- El UUID del agente.
- Un sello de tiempo externo (opcional).

La firma interna garantiza que el registro histórico no pueda ser alterado sin dejar rastro.

## Operaciones internas y trazabilidad

La trazabilidad interna surge de forma natural:

- Cada operación tiene un UUID.
- Cada traspaso tiene su propio UUID.
- Las operaciones derivadas están vinculadas.
- El registro histórico conserva todo el árbol de operaciones.

Esto permite reconstruir:

- El origen de cualquier movimiento.
- El impacto de una operación compleja.
- La secuencia exacta de eventos internos.
- El estado de cualquier cuenta en cualquier momento.

## Ejemplos

### Movimiento interno de fondos
Un banco mueve 10.000 EUR desde su cuenta de liquidez a su cuenta de reservas.

### Compra de valores
Una operación interna que incluye:
- Traspaso de dinero.
- Traspaso de valores.
- Comisión.
- Liquidación.

### Cambio de divisa interno
Un agente convierte EUR a USD dentro de su propio sistema:
- Traspaso EUR → cuenta de cambio.
- Traspaso USD → cuenta destino.
- Comisión.
- Ajuste de tipo de cambio.

### Actualización del historial de una lavadora
Una lavadora con UUID propio registra:
- Reparación.
- Sustitución de una pieza.
- Cambio de propietario.

Cada evento es una operación interna.

## Resumen

Las operaciones internas representan la actividad propia de un agente. Se basan en traspasos entre cuentas internas y pueden generar operaciones derivadas. Su registro histórico garantiza trazabilidad completa y permite reconstruir cualquier estado pasado. Aunque no requieren firma digital, pueden integrarla en entornos regulados. Son la base del funcionamiento interno del sistema.