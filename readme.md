<h1 align='center'>Encurtador de URL com Node.js</h1>


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
    localhost:3000/short
    body: { "url": "example.com" }
```

- Get Urls list 
- Obter lista de Urls
```
    Type: Get
    localhost:3000/
```

- Get Url not compressed 
- Obter a URL original
```
    Type: Get
    localhost:3000/"short"
```

- Remover Url 
```
    Type: Get
    localhost:3000/"_id"
```

## Meta

- Danrley Costa -  - dan.ley.costa2@gmail.com
- Distribuído sob a licença MIT. Veja LICENSE para mais informações.
- https://github.com/Danrley-Costa