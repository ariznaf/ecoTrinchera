# Ejemplos prácticos

Los ejemplos son esenciales para comprender cómo se aplica el modelo en situaciones reales. A continuación se presentan varios casos que ilustran cómo agentes, cuentas, traspasos y operaciones (internas y externas) interactúan para representar procesos económicos y de trazabilidad de forma simple y universal.

Cada ejemplo muestra cómo el sistema abstrae la complejidad del mundo real en estructuras mínimas basadas en UUIDs y traspasos.

---

## Transferencia bancaria entre dos cuentas internas

Un banco puede mover fondos entre dos cuentas internas sin necesidad de comunicación externa.  
Ejemplo:

- Cuenta origen: UUID A1  
- Cuenta destino: UUID A2  
- Cantidad: 500 EUR  

El banco genera:

- Un traspaso interno (UUID T1)  
- Fecha: 2026-02-13  
- Origen: A1  
- Destino: A2  
- Cantidad: 500  

No hay operaciones derivadas ni firma digital obligatoria.

El registro histórico del banco conserva T1.

---

## Transferencia bancaria entre dos bancos distintos

Aquí intervienen dos agentes independientes: Banco A y Banco B.

### 1. Banco A emite la operación externa
- Genera un traspaso interno de salida (T1).
- Genera una operación externa (E1).
- Firma digitalmente E1 con su UUID privado.
- Registra E1 en su historial como operación externa de salida.

### 2. Banco B recibe la operación
- Verifica la firma usando el registrador de Banco A.
- Registra E1 como operación externa de entrada.
- Genera un traspaso interno de entrada (T2).

### 3. Trazabilidad
Ambos bancos conservan:

- La operación externa E1.
- Sus traspasos internos T1 y T2.

Esto permite reconstruir el flujo completo sin necesidad de un sistema centralizado.

---

## Cambio de divisa

Un agente convierte 1.000 EUR a USD dentro de su propio sistema.

### Operación interna principal
- Traspaso T1: Cuenta EUR → Cuenta de cambio  
- Cantidad: -1.000 EUR

### Operaciones derivadas
- T2: Compra de USD → Cuenta USD  
- Cantidad: +1.080 USD (según tipo de cambio)
- T3: Comisión → Cuenta de comisiones  
- Cantidad: -5 EUR
- T4: Ajuste por tipo de cambio → Cuenta de ajustes  
- Cantidad: +2 EUR

Todas estas operaciones quedan vinculadas mediante una lista de UUIDs relacionadas.

---

## Compra de valores

Un cliente compra 10 acciones de una empresa a través de un bróker.

### 1. El cliente emite una operación externa hacia el bróker
- Orden firmada digitalmente (E1).
- Contiene: cantidad, precio, activo, UUID del cliente.

### 2. El bróker recibe y valida la operación
- Verifica la firma.
- Registra E1 como operación externa de entrada.

### 3. El bróker genera operaciones internas
- T1: Traspaso de dinero desde la cuenta del cliente.
- T2: Traspaso de valores hacia la cuenta del cliente.
- T3: Comisión hacia la cuenta del bróker.
- T4: Liquidación posterior (si aplica).

### 4. Trazabilidad
El cliente conserva E1.  
El bróker conserva E1, T1, T2, T3 y T4.

---

## Traspaso entre fondos gestionados por entidades distintas

Un cliente mueve dinero desde un fondo gestionado por la entidad X hacia otro fondo gestionado por la entidad Y.

### En la entidad X
- Venta de participaciones (T1).
- Comisión de salida (T2).
- Operación externa de salida (E1).

### En la entidad Y
- Recepción de E1.
- Compra de participaciones (T3).
- Comisión de entrada (T4).
- Registro de E1 como operación externa de entrada.

Cada entidad conserva su parte del historial.

---

## Identidad digital: el DNI como UUID

Una persona puede tener:

### UUID público
- Emitido por la Policía Nacional.
- Usado para identificarse ante terceros.
- No contiene información privada.

### UUID privado
- Asociado a una clave privada.
- Usado para firmar operaciones externas.
- Registrado en el registrador correspondiente.

Ejemplo de uso:

- Firma de una operación externa (E1).
- Validación por parte del receptor mediante el registrador.

Esto permite construir un sistema de identidad digital universal.

---

## Trazabilidad industrial: la lavadora

Una lavadora fabricada por una empresa puede tener un UUID emitido por el fabricante.

### Eventos registrados como operaciones internas
- Fabricación (T1).
- Control de calidad (T2).
- Venta al distribuidor (T3).
- Reparación (T4).
- Sustitución de una pieza (T5).
- Cambio de propietario (T6).
- Reciclaje final (T7).

Cada evento es una operación interna del agente correspondiente (fabricante, servicio técnico, propietario, etc.).

La lavadora tiene un historial completo y verificable.

---

## Resumen

Los ejemplos muestran cómo el modelo permite representar:

- Movimientos internos simples.
- Interacciones entre agentes independientes.
- Operaciones financieras complejas.
- Identidad digital.
- Trazabilidad industrial.
- Cadenas de operaciones derivadas.

Todo ello usando únicamente:

- Agentes identificados por UUID.
- Cuentas como contenedores de activos.
- Traspasos como movimientos mínimos.
- Operaciones internas y externas.
- Registro histórico.
- Firma digital cuando es necesaria.

La simplicidad del modelo permite aplicarlo a prácticamente cualquier dominio.