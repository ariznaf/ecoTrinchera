# Cuentas y traspasos

El modelo contable propuesto se basa en dos conceptos mínimos y universales: **cuentas** y **traspasos**. Estos dos elementos son suficientes para representar cualquier operación económica, desde un simple movimiento interno hasta una operación compleja con múltiples efectos derivados como comisiones, impuestos o cambios de divisa.

La simplicidad de este enfoque es una de sus mayores fortalezas: no es necesario un plan contable rígido ni estructuras específicas para cada tipo de operación. Todo puede expresarse como movimientos entre cuentas.

## Cuentas

Una cuenta es un agente cuyo propósito es actuar como contenedor de activos.  
Cada cuenta tiene:

- Un UUID único.
- Un saldo, que puede ser positivo o negativo.
- Un tipo de activo asociado (dinero, divisa, valor, fondo, etc.).
- Un registro histórico de todos los traspasos que la afectan.

Las cuentas no son exclusivas del ámbito financiero. En este modelo, cualquier agente puede tener cuentas:

- Una persona puede tener cuentas de dinero, valores o activos digitales.
- Un banco puede tener cuentas internas para liquidez, reservas o posiciones.
- Un objeto físico puede tener cuentas asociadas a su estado, valor residual o historial de mantenimiento.
- Un proceso administrativo puede tener cuentas de recursos o etapas.

### Saldo positivo o negativo

El modelo permite que una cuenta tenga saldo negativo. Esto es útil para representar:

- Descubiertos bancarios.
- Posiciones cortas.
- Deudas.
- Obligaciones pendientes.
- Ajustes temporales.

No hay restricciones artificiales: el saldo es simplemente el resultado de los traspasos acumulados.

## Traspasos

Un traspaso es la unidad mínima de movimiento económico. Representa el flujo de activos desde una cuenta origen hacia una cuenta destino.

Todo traspaso tiene:

- **UUID propio**, que lo identifica como operación independiente.
- **Fecha** de emisión.
- **Cuenta origen** (UUID).
- **Cuenta destino** (UUID).
- **Cantidad** (positiva para la cuenta destino, negativa para la origen).
- **Tipo de activo** (si procede).
- **Referencias a operaciones relacionadas** (opcional).

El traspaso es un concepto extremadamente general. Con él se pueden representar:

- Transferencias bancarias.
- Pagos.
- Cobros.
- Compras y ventas de valores.
- Cambios de divisa.
- Liquidaciones.
- Movimientos internos de una empresa.
- Ajustes contables.
- Operaciones derivadas.

## Representación interna del traspaso

A nivel interno, un traspaso se registra como un objeto simple:

- `uuid`: identificador único del traspaso.
- `fecha`: momento en que se emite.
- `origen`: UUID de la cuenta origen.
- `destino`: UUID de la cuenta destino.
- `cantidad`: valor numérico.
- `activo`: tipo de activo (si aplica).
- `relacionadas`: lista de UUIDs de operaciones derivadas.

Este formato minimalista permite:

- Auditar fácilmente cualquier operación.
- Reconstruir el historial de una cuenta.
- Encadenar operaciones relacionadas.
- Mantener trazabilidad completa.

## Traspasos derivados

Una operación puede generar otras operaciones internas. Por ejemplo:

- Un cambio de divisa genera:
  - Un traspaso de salida en la divisa origen.
  - Un traspaso de entrada en la divisa destino.
  - Comisiones.
  - Ajustes por tipo de cambio.

- Una compra de valores genera:
  - Un traspaso de dinero.
  - Un traspaso de valores.
  - Comisiones.
  - Liquidación posterior.

- Un pago internacional genera:
  - Traspaso interno.
  - Traspaso externo.
  - Comisiones.
  - Ajustes regulatorios.

Cada una de estas operaciones derivadas tiene su propio UUID y queda vinculada al traspaso original mediante la lista de operaciones relacionadas.

## Registro histórico obligatorio

Cada agente debe mantener un registro histórico completo de:

- Todos los traspasos internos.
- Todos los traspasos externos recibidos.
- Todos los traspasos externos emitidos.

Este registro:

- No puede modificarse retroactivamente.
- Permite reconstruir cualquier operación.
- Garantiza trazabilidad interna.
- Facilita auditorías y conciliaciones.

El registro histórico es el equivalente generalizado del libro mayor contable.

## Cuentas como base de cualquier sistema contable

Con este modelo, cualquier sistema contable puede construirse a partir de:

- Cuentas (contenedores de activos).
- Traspasos (movimientos entre cuentas).

No se requiere:

- Plan contable rígido.
- Estructuras específicas para cada tipo de operación.
- Sistemas de doble entrada tradicionales.

La doble entrada surge de forma natural:

- La cuenta origen pierde activos.
- La cuenta destino los gana.

No hay necesidad de imponerla: es inherente al modelo.

## Ejemplos

### Transferencia bancaria
- Cuenta A → Cuenta B  
- Cantidad: 100  
- Activo: EUR

### Compra de acciones
- Cuenta de dinero → Cuenta de valores  
- Cantidad: precio × unidades  
- Operaciones derivadas: comisión, liquidación

### Cambio de divisa
- Cuenta EUR → Cuenta USD  
- Operaciones derivadas: comisión, ajuste de tipo de cambio

### Reparación de una lavadora
- Cuenta del propietario → Cuenta del servicio técnico  
- Activo: EUR  
- Operación derivada: actualización del historial de la lavadora

## Resumen

Las cuentas y los traspasos constituyen el núcleo del modelo contable. Con solo estos dos elementos es posible representar cualquier operación económica, desde las más simples hasta las más complejas. Su simplicidad permite construir sistemas distribuidos, auditables y universales sin necesidad de estructuras contables tradicionales.