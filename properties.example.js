/*

Instruções:

- Apague '.example' do nome do arquivo

- Insira a chave da API

- Caso você queira usar cidades reais (e localizar na API),
use os parâmetros 'name' (opcional) e 'woeid'

- Para usar dados fictícios, use 'name', 'temperature' e 'icon'.

*/

export default {
  // defina como 'true' para utilizar a API.
  useApi: false,
  apiKey: 'YOUR_API_KEY_HERE',
  cityList: [
    // dados reais
    {
      name: 'São Paulo',
      woeid: 3448439,
    },

    // o parâmetro 'name' é opcional
    { woeid: 3451190 },
    { woeid: 3470127 },

    // dados fictícios
    {
      name: 'Qualquer Cidade',
      temperature: 20,
      icon: '01d',
    },
    {
      name: 'Tangamandápio',
      temperature: 30,
      icon: '02d',
    },
    {
      name: 'Acapulco',
      temperature: 15,
      icon: '04d',
    },
    {
      name: 'Quatrópolis',
      temperature: 14,
      icon: '03d',
    },
    {
      name: 'Piracicaba',
      temperature: 15,
      icon: '02d',
    },
    {
      name: 'Sexta',
      temperature: 21,
      icon: '04d',
    },
  ],
};
