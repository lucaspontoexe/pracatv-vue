# PraçaTV Clone

era pra ter uma descrição bonita aqui, mas eu só vou mandar isso pro GitHub depois que isso estiver pronto

## Demonstração de comandos do Websocket

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
