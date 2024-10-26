# Rest-APIs

Este projeto é uma aplicação Node.js que interage com a [API de Segredos da App Brewery](https://secrets-api.appbrewery.com/) para realizar operações de CRUD (Create, Read, Update, Delete) de segredos. A aplicação utiliza o framework Express e o cliente HTTP Axios.
  

## Endpoints
- GET /: Rende a página inicial.
- POST /get-secret: Busca um segredo específico com base no ID fornecido.
- POST /post-secret: Cria um novo segredo usando os dados enviados.
- POST /put-secret: Atualiza um segredo existente com base no ID fornecido.
- POST /patch-secret: Atualiza parcialmente um segredo com base no ID fornecido.
- POST /delete-secret: Remove um segredo com base no ID fornecido.
  
Exemplo de Requisição POST /get-secret
Para buscar um segredo, envie uma requisição com id do segredo no corpo da requisição:

## Estrutura do Projeto
```plaintext
.
├── app.js            # Arquivo principal do servidor
├── package.json      # Dependências e scripts do projeto
├── views
│   └── index.ejs     # Arquivo de template para renderização
└── node_modules      # Módulos instalados
```

## Tecnologias Usadas
- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework web para construir o servidor e definir rotas.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Body-Parser**: Middleware para parseamento de dados enviados em requisições POST.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) instalado.
- Um token de autenticação válido para a API de Segredos.
  

## Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:Joao-VictorCm/Rest-APIs.git

   
## Instale as dependências:

- npm install
- Substitua o valor de yourBearerToken com o seu token de autenticação da API de Segredos:
```const yourBearerToken = "SEU_TOKEN_AQUI".; ```
