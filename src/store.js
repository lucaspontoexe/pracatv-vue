import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 'something',
    cities: [
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
  },
  mutations: {
    change(state, payload) {
      state.test = payload;
    },

    updateCities(state, payload) {
      Object.assign(state.cities, payload);
    },
  },
  actions: {

  },
});
