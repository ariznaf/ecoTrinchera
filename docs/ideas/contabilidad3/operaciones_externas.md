# Operaciones externas

Las operaciones externas son aquellas que implican a dos agentes distintos. A diferencia de las operaciones internas, que ocurren dentro del ámbito de un único agente, las operaciones externas requieren comunicación, validación mutua y mecanismos de seguridad que garanticen autenticidad, integridad y no-repudio.

En este modelo, una operación externa se representa como un intercambio estructurado entre dos agentes, donde cada uno registra la operación en su propio historial y genera las operaciones internas correspondientes.

## Naturaleza de una operación externa

Una operación externa ocurre cuando:

- Un agente **emite** una operación destinada a otro agente.
- El agente receptor **recibe** la operación y la valida.
- Ambos agentes registran la operación en sus respectivos historiales.
- Cada agente genera sus propias operaciones internas derivadas.

Ejemplos típicos:

- Una transferencia bancaria entre dos bancos distintos.
- Un pago entre dos empresas.
- Una compra de valores entre un cliente y un bróker.
- Un traspaso entre fondos gestionados por entidades diferentes.
- Un intercambio de activos entre dos agentes independientes.

## Estructura de una operación externa

Una operación externa contiene:

- **UUID de la operación externa** (generado por el emisor).
- **UUID del agente emisor**.
- **UUID del registrador del emisor**.
- **UUID del agente receptor**.
- **Fecha** de emisión.
- **Contenido de la operación** (por ejemplo, un traspaso).
- **Firma digital del emisor**.
- **Metadatos opcionales** (tipo de activo, referencia interna, etc.).

El receptor no modifica esta estructura: la conserva tal cual para garantizar trazabilidad y no-repudio.

## Protocolo de intercambio

El intercambio de una operación externa sigue un flujo claro:

### 1. Emisión
El agente emisor:

- Genera la operación externa.
- La firma digitalmente usando su UUID privado.
- Incluye su UUID público y el de su registrador.
- Registra la operación en su historial como **operación externa de salida**.

### 2. Transmisión
La operación se envía al agente receptor mediante cualquier canal acordado:

- API.
- Mensajería segura.
- Red privada.
- Intercambio de ficheros.
- Protocolo específico del sector.

El modelo no impone un mecanismo concreto.

### 3. Recepción
El agente receptor:

- Recibe la operación externa.
- Verifica la firma digital usando el registrador del emisor.
- Comprueba que el UUID del emisor es válido.
- Registra la operación como **operación externa de entrada**.

### 4. Generación de operación interna
El receptor genera una operación interna equivalente, que puede incluir:

- Un traspaso hacia una cuenta interna.
- Comisiones.
- Ajustes.
- Operaciones derivadas.

### 5. Registro histórico
Ambos agentes conservan:

- La operación externa original.
- Las operaciones internas derivadas.

Esto garantiza trazabilidad completa.

## Validación y seguridad

La seguridad en operaciones externas se basa en:

### Firma digital obligatoria
Toda operación externa debe estar firmada digitalmente por el emisor.  
La firma garantiza:

- Autenticidad del emisor.
- Integridad del contenido.
- No-repudio.

### Uso del UUID privado
El emisor firma usando su UUID privado, registrado previamente en su registrador.

El receptor verifica la firma consultando:

- El UUID público del emisor.
- El registrador del emisor.
- La clave pública asociada.

### Prevención de suplantación
Sin firma digital, un agente podría:

- Atribuir una operación a otro agente usando su UUID público.
- Enviar operaciones falsas.

La firma digital elimina este riesgo.

### Registro histórico inalterable
Ambos agentes deben conservar:

- La operación externa original.
- La firma digital.
- La fecha de recepción.
- Las operaciones internas derivadas.

Esto permite auditoría y reconstrucción completa del flujo.

## Operaciones externas y trazabilidad

La trazabilidad entre agentes surge de forma natural:

- El emisor conserva la operación externa de salida.
- El receptor conserva la operación externa de entrada.
- Ambos conservan sus operaciones internas.
- La firma digital vincula la operación al emisor.
- El registrador certifica la identidad del emisor.

Esto permite reconstruir:

- El origen de cualquier operación.
- La cadena completa de efectos derivados.
- La relación entre agentes independientes.
- La validez de cualquier firma.

## Ejemplos

### Transferencia bancaria entre dos bancos
- Banco A emite una operación externa hacia Banco B.
- Banco B la recibe, valida la firma y genera un traspaso interno.
- Ambos bancos registran la operación.

### Compra de valores entre cliente y bróker
- El cliente emite una orden firmada.
- El bróker la recibe y ejecuta operaciones internas.
- Se generan comisiones y liquidaciones.

### Traspaso entre fondos gestionados por entidades distintas
- El fondo origen emite una operación externa.
- El fondo destino la recibe y genera operaciones internas.
- Se registran ventas, compras y ajustes.

## Resumen

Las operaciones externas permiten que agentes independientes interactúen de forma segura, trazable y verificable. La firma digital garantiza autenticidad y no-repudio, mientras que el registro histórico asegura que cada agente conserva evidencia completa del intercambio. Este mecanismo es la base de la interoperabilidad en un sistema distribuido.