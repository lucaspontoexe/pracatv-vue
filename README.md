# PraçaTV Clone

Um clone do gerador de caracteres (GC) utilizado nos telejornais regionais da TV Globo (& afiliadas), implementado com Vue.

![o clone em si](doc.png)

see also: praça tv vanilla JS

---

## Instalação
- `yarn` ou `npm install`
- git submodule init (ou algo assim)


## Uso
- Tenha um servidor de WebSocket aberto na porta 9999 [(ou baixe esta extensão)](https://chrome.google.com/webstore/detail/websocket-server-test/pkbpddppnkjmlbgliipgmhjeialadokj)
- Inicie com `yarn serve` ou `npm run serve`


## Controle via Websocket
Por enquanto, o único jeito de interagir é enviando strings JSON pelo socket.

*qualquer coisa, é só rodar o projeto, baixar a extensão, pegar esse bloco de código, colar na janela e ver o que acontece*

### Atualizar título e descrição

```json
{
  "event": "overlay",
  "event_data": {
    "isRunning": true,
    "title": "Crime ocorre, nada acontece",
    "description": "Feijoada"
  }
}
``` 

### Alterar cores

```json
{
  "event": "color",
  "event_data": {
    "accent_color": "blue"
  }
}
```

---

*Q: mas logo Vue em pleno século 2019? 486% das empresas gostam de quem escreve as coisas em React!*

Vue foi o framework que eu achei mais confortável pra começar, mas React não é um bicho de sete cabeças.

---

*abaixo, algo que a CLI gerou e que pode ser bem útil (ou nem tanto)*

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
