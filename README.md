# 📱 Projeto: Pokédex Interativa com JavaScript

Este projeto foi desenvolvido como parte do desafio **"Construindo uma Pokédex com JavaScript"** da [Digital Innovation One (DIO)](https://www.dio.me/). O objetivo é consumir a PokéAPI para criar uma Pokédex web interativa, colocando em prática conceitos de HTML, CSS, JavaScript e manipulação de APIs REST.

> **Desafio Original:** https://github.com/digitalinnovationone/js-developer-pokedex

---

## 🧩 Funcionalidades

- 📃 Listagem de Pokémons com rolagem paginada
- 🔍 Visualização detalhada de cada Pokémon em página individual
- ❤️ Botão de **favoritar Pokémon** com alternância de ícone 
- 🧠 Consumo dinâmico da [PokéAPI](https://pokeapi.co/)
- 🎨 Estilização modular com variáveis CSS por tipo de Pokémon
- 📱 Layout responsivo para desktop e mobile
- 🧾 Detalhes adicionais como gênero, grupo de ovos, descrição e cadeia evolutiva
- 🔄 Código modularizado com orientação a objetos

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica
- **CSS3** – Flexbox, Variáveis CSS, Estilização por tipo
- **JavaScript (ES6+)** – DOM, Fetch API, Promises, Classes
- **PokéAPI** – Dados reais e atualizados sobre Pokémons

---


## 📦 Estrutura do Projeto

📁 assets/ → Imagens e ícones  
📁 css/  
├─ global.css → Estilos base  
├─ pokedex.css → Estilo da lista de Pokémons (index.html)  
└─ pokemon.css → Estilo da página de detalhes (pokemon.html)  
📁 js/  
├─ main.js → Script principal da Pokédex (index)  
├─ pokemon-page.js → Script da página de detalhes (pokemon.html)  
├─ poke-api.js → Módulo de integração com a PokéAPI  
└─ pokemon-model.js → Classe Pokemon com estrutura de dados  
📄 index.html → Página principal com listagem dos Pokémons  
📄 pokemon.html → Página de detalhes de cada Pokémon  

---

## 🧠 Aprendizados

- Organização modular do JavaScript com separação de responsabilidades
- Consumo e encadeamento de múltiplas requisições à API REST
- Manipulação de DOM dinâmica com JS puro
- Criação de interface responsiva e escalável
- Uso de variáveis CSS para personalização de tema por tipo de Pokémon
- Implementação de lógica condicional para exibir gênero, stats, descrição e evolução

---

## 📸 Preview

<img width="600" height="400" alt="Captura de tela 2025-08-01 091728" src="https://github.com/user-attachments/assets/85ce4810-3d58-400c-ac08-23e9e157ad6f" />

<img width="600" height="400" alt="Captura de tela 2025-08-01 091752" src="https://github.com/user-attachments/assets/37a0a33a-e593-484d-a033-3172dcc8bb0d" />

---

## 🚀 Como Executar Localmente

1. Clone o repositório:  
```bash
git clone https://github.com/Shillue/pokedex-js-dio.git
```
2.Acesse o diretório do projeto:  
```bash
cd pokedex-javascript
```     
3. Instale o servidor HTTP local (caso ainda não tenha):   
```bash
npm install -g http-server
```   
4. Inicie o servidor local:
```bash   
http-server ./
```   
5. Abra no navegador:   
Após iniciar o servidor, o terminal mostrará o endereço local (ex: http://127.0.0.1:8080).
Acesse esse endereço no navegador para visualizar o projeto.

## 👨‍💻 Autor

Feito com 💖 por [Shilluê](https://www.linkedin.com/in/shillu%C3%AA/) para o desafio da [DIO](https://www.dio.me/)
