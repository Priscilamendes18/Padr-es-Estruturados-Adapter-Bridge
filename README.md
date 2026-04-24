# Padrões de Projeto Estruturados 🏗️

Este repositório reúne implementações práticas focadas na exploração de **Padrões de Projeto Estruturais**. O objetivo principal é demonstrar como classes e objetos podem ser compostos para formar estruturas maiores, mantendo a flexibilidade e a eficiência do sistema.

## 🚀 Tecnologias Utilizadas

<div style="display: inline-block">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
</div>

---

## 📂 Conteúdo do Repositório

### 🟢 Padrão Adapter (Tradução de Interfaces)
Resolução de exercícios focados na integração de interfaces incompatíveis, permitindo que objetos colaborem entre si:
* **Implementação Multilinguagem:** Exemplos desenvolvidos em **Python** e **JavaScript**.
* **Encapsulamento de Legados:** Uso de uma classe `Adapter` para envolver um `Adaptee` (serviço existente), traduzindo chamadas para o formato esperado pelo `Cliente`.
* **Interoperabilidade:** Demonstração de como o cliente realiza requisições sem conhecer a complexidade interna do serviço específico.

### 🟣 Padrão Bridge (Desacoplamento de Hierarquias)
Aplicação do padrão para separar a abstração da sua implementação, facilitando a variação independente de ambas:
* **Hierarquia de Cores:** Implementação de cores independentes (`CorVermelho`, `CorAzul`, `CorVerde`) que atuam como a base de implementação.
* **Abstração de Formas:** Criação de formas geométricas (`Circulo`, `Quadrado`, `Triangulo`) que recebem a cor via composição, evitando a explosão de subclasses.
* **Flexibilidade:** Estrutura que permite adicionar novas formas ou cores sem alterar as classes existentes.

---

## 🛠️ Como Executar os Projetos

### 1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/PadroesEstruturados.git](https://github.com/seu-usuario/PadroesEstruturados.git)

````

### 2. Acesse a pasta do padrão desejado:
```bash
Exemplo para o Bridge
cd PadrõesEstruturados/Bridge

````
### 3. Inicie o projeto e execute:
#### Para JavaScript (Node.js):
```bash
node Bridge01.js
# ou
node Adapter01.js

````

#### Para Python:
```bash
python Adapter01.py

````
---
                                                 Priscila de Carvalho Mendes
