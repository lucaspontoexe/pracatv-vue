import Vue from 'vue';
import Vuex from 'vuex';
import api from './services/api';
// eslint-disable-next-line import/extensions
import properties from '../properties.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 'something',
    useApi: properties.useApi,
    cities: properties.cityList,
  },
  mutations: {
    change(state, payload) {
      state.test = payload;
    },

    updateCities(state, payload) {
      payload.forEach((element) => {
        // Atualiza as cidades especificadas como parâmetro pro WeatherWidget.
        // As cidades que estão sem o WOEID (no caso, as fictícias)
        // continuam aparecendo. É só não esquecer de incluir o nome

        const candidate = state.cities.find(item => item.woeid === element.id);

        // grab name from API if not specified
        candidate.name = candidate.name || element.name;
        candidate.temperature = Math.round(element.main.temp);
        candidate.icon = element.weather[0].icon;
      });
    },
  },
  actions: {
    async getListFromApi({ commit, state }) {
      const idList = state.cities.filter(item => 'woeid' in item).map(obj => obj.woeid);

      const response = await api.get('/group', {
        params: {
          id: idList.join(),
          units: 'metric',
          APPID: properties.apiKey,
        },
      });

      commit('updateCities', response.data.list);
      console.log(response);
    },
  },
});
