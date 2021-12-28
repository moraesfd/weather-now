<h1 align="center">Bem-vindo(a) ao weather-now 👋</h1>

> Este projeto foi desenvolvido como teste para demonstrar os conhecimentos técnicos de Front-End para uma vaga no processo seletivo da Conta Azul.

### Website Preview

---

🏠 [Homepage](https://moraesfd.github.io/maganets-wishlist/)

### Pré-requisitos

---

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando o projeto

---

```bash
# Clone este repositório
$ git clone <https://github.com/moraesfd/weather-now.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd weather-now

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run serve

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```

### Rodando os testes com Cypress

---

```sh
$ npx cypress run
```

### Variável de ambiente

---

Neste projeto é utilizada uma variável de ambiente contendo a API Key, este arquivo não foi versionado por questões de segurança.

Para que o projeto possa ser executado, siga os seguintes passos:

- Acesse o site da [API](https://openweathermap.org/)
- Crie uma conta e gere uma key de acesso á API
- No projeto, crie um arquivo com o nome .env.local
- Neste arquivo, adicione a variável VUE_APP_API_KEY=[key]

### Tecnologias

---

As seguintes ferramentas foram usadas na construção do projeto:

- [Node/NPM](https://nodejs.org/en/)
- [Vue 2](https://br.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [vuex-persist](https://github.com/championswimmer/vuex-persist)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Cypress](https://www.cypress.io/)
- [Sass/SCSS](https://sass-lang.com/)

### Features

---

- [x] Estilização da página em SCSS conforme [layout](https://marvelapp.com/prototype/13gd240g/screen/55669566?sign_up_origin=player)
- [x] Aplicação responsiva
- [x] Importando dados da [API](https://openweathermap.org/)
- [x] Utilizando Vuex para gerenciar estados
- [x] Persistir os dados no localstorage com vuex-persist
- [x] Pequenos Testes E2E com Cypress
- [x] Deploy da aplicação no Github Pages

### Autor

---

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/22510170?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Felipe de Moraes</b></sub>

Feito com ❤️ por Felipe de Moraes 👋🏽

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-de-moraes/)](https://www.linkedin.com/in/felipe-de-moraes/)
[![Gmail Badge](https://img.shields.io/badge/-moraesfd@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:moraesfd@gmail.com)](mailto:moraesfd@gmail.com)
