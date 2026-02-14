# Capítulo 1 · El problema de la apertura de cartera en PP  
## Y cómo debería resolverse con una cuenta de balance interna

---

# 1. El mundo real: la cartera existente a 31/12/2025

En la realidad, el inversor tiene este patrimonio:

### Cuentas de efectivo
- **BrokerACash** → 10 000 €
- **BrokerBCash** → 5 000 €
- **Bank** → 0 €

### Posiciones en valores
- **CompanyA** (en BrokerA) → 2 000 €
- **CompanyB** (en BrokerB) → 1 000 €

### Patrimonio total real
**18 000 €**

Este es el punto de partida que queremos reconstruir en PP.

---

# 2. Cómo PP obliga a reconstruirlo hoy  
## (método recomendado actualmente: depósitos + entregas)

PP no permite introducir un “saldo inicial” directamente.  
Por tanto, la única forma de reconstruir una cartera existente es:

- meter el efectivo mediante **depósitos remotos**  
- meter las posiciones mediante **Delivery (Inbound)**  

Veamos cómo queda.

---

## 2.1. Crear las cuentas

Creamos:

- **BrokerACash**  
- **BrokerA**  
- **BrokerBCash**  
- **BrokerB**  
- **Bank**

Todas empiezan en **0 €**.

---

## 2.2. Introducir el efectivo mediante depósitos remotos

PP obliga a simular que el dinero “entra” en las cuentas:

- BrokerACash → depósito 01/01/1900 → +10 000 €  
- BrokerBCash → depósito 01/01/1900 → +5 000 €

Bank queda en 0 €.

---

## 2.3. Introducir las posiciones mediante *Delivery (Inbound)*

- BrokerA → CompanyA → 2 000 € (31/12/2025)  
- BrokerB → CompanyB → 1 000 € (31/12/2025)

PP crea las posiciones **sin descontar dinero** de las cuentas cash.

---

## 2.4. Resultado obtenido con el método PP

### ✔ Statement of Assets  
PP muestra correctamente:

- BrokerACash: 10 000 €  
- BrokerA (CompanyA): 2 000 €  
- BrokerBCash: 5 000 €  
- BrokerB (CompanyB): 1 000 €  
- **Total: 18 000 €**

### ❌ Allocation (reparto de patrimonio)  
Aquí aparece el problema:

- Si falta un precio actual → **no aparece el reparto**  
- Si hay precios, aparece, pero **PP no sabe cuál es el patrimonio inicial**  
- PP no distingue entre:
  - aportaciones reales  
  - aportaciones históricas  
  - patrimonio inicial  
  - patrimonio actual  

### ❌ Performance / Chart  
- No muestra **patrimonio inicial del periodo**  
- No muestra **balance de apertura**  
- Si no hay variación → gráfico vacío  
- PP no sabe que los deliveries representan patrimonio previo

---

# 3. Propuesta de solución: usar una cuenta de balance  
## (modelo contable correcto)

Para que la apertura sea coherente, introducimos una cuenta técnica:

- **Balance** (pasivo)

Esta cuenta representa el **origen del patrimonio inicial**.

---

## 3.1. Traspasar el efectivo desde Balance a las cuentas cash

- Balance → BrokerACash: 10 000 €  
- Balance → BrokerBCash: 5 000 €

**Saldo de Balance = –15 000 €**

---

## 3.2. Registrar las posiciones iniciales como compras reales

- BrokerA → Compra CompanyA → 2 000 €  
  - BrokerACash pasa a 8 000 €
- BrokerB → Compra CompanyB → 1 000 €  
  - BrokerBCash pasa a 4 000 €

**Saldo de Balance = –18 000 €**

Ese saldo (cambiado de signo) es exactamente el **patrimonio inicial real**.

---

## 3.3. Dejar Balance a 0 sin “ñapas”  
### (la pequeña modificación que hace que todo encaje)

En lugar de usar un asiento remoto en 1900, basta con registrar:

- **Balance → +3 000 €** con fecha **31/12/2025**

Ese depósito representa el valor de las posiciones iniciales (2 000 + 1 000) que PP no descuenta de ningún sitio cuando se usan deliveries.

Tras este depósito:

- Balance queda en **0 €**  
- No contamina los informes  
- Y PP interpreta correctamente el patrimonio inicial

---

# 4. Cómo debería hacerlo PP internamente  
## (si PP implementara una cuenta Balance no visible)

Si PP gestionara la apertura mediante una cuenta interna de balance, ocurriría exactamente esto:

### ✔ Al crear los saldos de efectivo  
PP registraría internamente:

- **Balance = –15 000 €**

### ✔ Al crear las posiciones iniciales  
PP registraría internamente:

- **Balance = –18 000 €**

### ✔ Interpretación automática  
La diferencia entre inicio y final del periodo sería:



\[
-18\,000 - (-15\,000) = -3\,000
\]



Que PP clasificaría automáticamente como:

### ✔ **Depósitos = 3 000 €**

Sin que el usuario tenga que hacer nada.  
Sin depósitos falsos.  
Sin deliveries mal interpretados.  
Sin gráficos vacíos.

---

# 5. Resultado final con el método contable

### ✔ Statement of Assets  
Correcto: **18 000 €**

### ✔ Allocation  
Siempre correcto (compras reales → valoración correcta)

### ✔ Performance / Chart  
- PP sabe que hubo **compras reales**  
- PP puede reconstruir **patrimonio inicial = 18 000 €**  
- No hay líneas vacías  
- No hay distorsiones

### ✔ Contabilidad coherente  
- El patrimonio inicial queda representado por el saldo previo de Balance  
- Los movimientos tienen contrapartida real  
- No hay “dinero que aparece de la nada”

---

# 6. Conclusión

El método actual de PP funciona para una foto fija, pero no para reconstruir una cartera real.  
El método con **Balance**:

- separa patrimonio inicial de movimientos reales  
- permite reconstruir la historia correctamente  
- evita inconsistencias en gráficos  
- es contablemente sólido  

Y demuestra que PP debería:

1. Solicitar un **saldo inicial** al crear una cuenta  
2. Crear una **cuenta interna Balance**  
3. Registrar automáticamente el efectivo y las posiciones iniciales  
4. Dejar Balance en 0  
5. Mostrar correctamente el **patrimonio inicial del periodo**

Así, el usuario no tendría que hacer ninguna “ñapa”.
