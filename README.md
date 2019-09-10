# PraçaTV Clone

Um clone do gerador de caracteres (GC) utilizado nos telejornais regionais da TV Globo (& afiliadas), implementado com Vue.

![o clone em si](demo.gif)

*veja também: [a mesma coisa, só que sem frameworks](https://github.com/lucaspontoexe/pracatv-vanilla)*

---


## Instalação
- `yarn` ou `npm install`


## Uso
- Tenha um servidor de WebSocket aberto na porta 9999 [(ou baixe esta extensão para Chrome)](https://chrome.google.com/webstore/detail/websocket-server-test/pkbpddppnkjmlbgliipgmhjeialadokj)
- Inicie com `yarn serve` ou `npm run serve`

### Outras opções
- Corrigir problemas de indentação e estilo: `yarn lint` ou `npm run lint`
- Compilar o projeto: `yarn build` ou `npm run build`

---

## Controle via Websocket
Por enquanto, o único jeito de interagir é enviando strings JSON pelo socket.

*qualquer coisa, é só baixar a extensão, rodar o projeto, pegar um desses blocos de código, colar na caixa de texto da janela e ver o que acontece*

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

## TODO: Widget do Clima
apresenta nome da cidade, temperatura e ícone representando a condição climática.
Os dados são carregados de uma API, mas caso não tenha a chave de acesso [dá pra criar de graça, missing docs], pode-se usar dados fictícios.
(foto opcional)
*TODO: como configurar o acesso à API, criação da conta e chave, etc.*

---


*Q: mas logo Vue em pleno século 2019? 486% das empresas gostam de quem escreve as coisas em React!*

Vue foi o framework que eu achei mais confortável pra começar, mas React não é um bicho de sete cabeças.
