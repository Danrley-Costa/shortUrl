<h1 align='center'>Encurtador de URL com Node.js</h1>

![insominia](https://user-images.githubusercontent.com/71861586/97539202-536c4b80-19a0-11eb-85b5-666af791526a.PNG)


# how to use
## Como usar



- Set string connection with data base in file ./config/config.js
- Run server

- Defina uma conexão da string com o banco de dados no arquivo .app.js onde se encontra o comentario "connect MongoDB"
```
    npm run dev
``` 

## Requests
## Enviar Solicitações em Http

- Short Url
- Encurtar Url
```
    Type: Post
    localhost:5000/short
    body: { "url": "example.com", "expire": "data de expiração nesse formato (2020-10-30)" }
```

- Get Urls list 
- Obter lista de Urls
```
    Type: Get
    localhost:5000/
```

- Get Url not compressed 
- Obter a URL original
```
    Type: Get
    localhost:5000/"short"
```

- Remover Url 
```
    Type: Get
    localhost:5000/"_id"
```

- Documentation API 
```
    Type: Get
    localhost:5000/api/doc
```
## Documentation
- https://app.swaggerhub.com/apis-docs/Ley/ShortUrl/1.0.0#/

## Meta

- Danrley Costa -  - dan.ley.costa2@gmail.com
- Distribuído sob a licença MIT. Veja LICENSE para mais informações.
- https://github.com/Danrley-Costa


