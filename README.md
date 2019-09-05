# PraçaTV Clone

Um clone do gerador de caracteres (GC) utilizado nos telejornais regionais da TV Globo (& afiliadas), implementado com Vue.

![o clone em si](doc.png)

*veja também: [a mesma coisa, só que sem frameworks](https://github.com/lucaspontoexe/pracatv-vanilla)*

---


## Instalação
- `yarn` ou `npm install`
- git submodule init (ou algo assim)


## Uso
- Tenha um servidor de WebSocket aberto na porta 9999 [(ou baixe esta extensão para Chrome)](https://chrome.google.com/webstore/detail/websocket-server-test/pkbpddppnkjmlbgliipgmhjeialadokj)
- Inicie com `yarn serve` ou `npm run serve`

### Outras opções
- Corrigir problemas de indentação e estilo: `yarn lint` ou `npm run lint`
- Compilar o projeto: `yarn build` ou `npm run build`

---

## Controle via Websocket
Por enquanto, o único jeito de interagir é enviando strings JSON pelo socket.

*qualquer coisa, é só baixar a extensão, rodar o projeto, pegar esse bloco de código, colar na janela e ver o que acontece*

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
