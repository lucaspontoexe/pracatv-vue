import Vue from 'vue';
import App2 from './App2.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App2),
}).$mount('#app');
