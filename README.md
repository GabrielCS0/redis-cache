<h1 align="center">
  Redis Cache
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GabrielCordeiroDev/redis-cache">

  <a href="https://www.linkedin.com/in/dev-gabriel-cordeiro/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Gabriel%20Cordeiro-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielCordeiroDev/redis-cache">
  
  <img alt="License" src="https://img.shields.io/github/license/GabrielCordeiroDev/redis-cache">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Redis%20Cache&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGabrielCordeiroDev%2Fredis-cache%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 👨🏻‍💻 About the project

This project was made with the aim of studying how Redis works.

## 🚀 Technologies

Technologies that I used to develop this API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [JWT-token](https://jwt.io/)
- [CryptoJS](https://github.com/brix/crypto-js)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button.

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)
- One instance of [Redis](https://redis.io/)

> Obs.: We are going to use [docker compose](https://docs.docker.com/compose/) to instantiate the databases, you must have a postgreSQL and a Redis image.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/GabrielCordeiroDev/redis-cache
$ cd redis-cache
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables
$ cp .env.example .env

# PostgreSQL and Redis 
$ docker-compose up -d

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/GabrielCordeiroDev/redis-cache/blob/main/LICENSE) file for details.
