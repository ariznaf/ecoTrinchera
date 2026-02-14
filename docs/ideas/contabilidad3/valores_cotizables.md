# Valores cotizables

En el sistema propuesto, un *valor cotizable* es cualquier activo cuyo valor puede expresarse, intercambiarse o liquidarse en un mercado o entorno económico. El modelo no distingue entre tipos de activos mediante estructuras rígidas: todos se representan como agentes identificados por un UUID y asociados a cuentas y traspasos.

Esta abstracción permite tratar divisas, acciones, fondos, materias primas o cualquier otro activo financiero de forma uniforme y extensible.

## Qué es un valor cotizable

Un valor cotizable es un agente que:

- Tiene un UUID único.
- Representa un activo con valor económico.
- Puede ser objeto de compra, venta, traspaso o liquidación.
- Puede tener un precio o valor liquidativo asociado.
- Puede participar en operaciones internas y externas.
- Puede generar operaciones derivadas (comisiones, ajustes, etc.).

El modelo no impone restricciones sobre la naturaleza del activo: cualquier cosa que pueda valorarse puede representarse como un valor cotizable.

## Ejemplos de valores cotizables

### Divisas
- EUR, USD, GBP, JPY…
- Cada divisa tiene su propio UUID.
- Los cambios de divisa se representan como traspasos entre cuentas de distintos valores.

### Acciones bursátiles
- Una acción de una empresa cotizada es un valor cotizable.
- Cada acción (o cada clase de acción) tiene su propio UUID.
- Las compras y ventas se representan como traspasos entre cuentas de dinero y cuentas de valores.

### Fondos de inversión
- Cada fondo tiene un UUID.
- Las participaciones se representan como unidades del valor cotizable.
- Los traspasos entre fondos se representan como ventas y compras.

### Materias primas
- Oro, petróleo, gas natural…
- Cada activo tiene un UUID.
- Las operaciones se representan como traspasos entre cuentas de materias primas y cuentas de dinero.

### Activos digitales
- Tokens.
- Certificados digitales.
- Derechos de acceso.
- Cualquier activo digitalizable puede representarse como valor cotizable.

## Representación interna de un valor cotizable

Un valor cotizable puede tener:

- Un UUID único.
- Un registrador que certifica su existencia.
- Un tipo de activo (opcional).
- Unidades o participaciones.
- Un valor o precio asociado (externo al modelo contable).
- Cuentas asociadas para representar posiciones.

El modelo no impone cómo se calcula el precio: eso pertenece a una capa externa (mercados, proveedores de datos, etc.).

## Operaciones con valores cotizables

Las operaciones con valores cotizables se representan mediante traspasos entre cuentas:

### Compra
- Traspaso de dinero → cuenta del vendedor.
- Traspaso de unidades del valor → cuenta del comprador.
- Comisiones y ajustes como operaciones derivadas.

### Venta
- Traspaso de unidades del valor → cuenta del comprador.
- Traspaso de dinero → cuenta del vendedor.
- Comisiones y liquidaciones.

### Traspaso entre fondos
- Venta en el fondo origen.
- Compra en el fondo destino.
- Ajustes de valor liquidativo.

### Cambio de divisa
- Traspaso de divisa origen → cuenta de cambio.
- Traspaso de divisa destino → cuenta destino.
- Comisiones y ajustes.

### Liquidación
- Traspasos internos que reflejan el cierre de una operación.

## Ventajas del modelo

Representar todos los activos como valores cotizables ofrece varias ventajas:

- **Uniformidad**: no hay estructuras especiales para cada tipo de activo.
- **Simplicidad**: todas las operaciones se reducen a traspasos.
- **Extensibilidad**: nuevos tipos de activos pueden añadirse sin modificar el modelo.
- **Trazabilidad**: cada operación tiene un UUID y queda registrada.
- **Interoperabilidad**: agentes distintos pueden intercambiar activos sin necesidad de sistemas específicos.

## Valores cotizables y registradores

Cada valor cotizable debe ser emitido por un registrador:

- Un banco puede emitir valores internos.
- Un mercado puede emitir acciones.
- Un organismo regulador puede certificar divisas.
- Un fabricante puede emitir activos digitales.

El registrador garantiza:

- La autenticidad del valor.
- La validez del UUID.
- La trazabilidad del activo.

## Resumen

Los valores cotizables permiten representar cualquier activo financiero dentro del modelo. Divisas, acciones, fondos, materias primas o activos digitales se tratan de forma uniforme mediante UUIDs, cuentas y traspasos. Esta abstracción simplifica enormemente la contabilidad y permite construir sistemas interoperables y trazables sin estructuras específicas para cada tipo de activo.