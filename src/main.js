import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

const vuesockOptions = {
  format: 'json',
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
};

Vue.use(VueNativeSock, 'ws://localhost:9999', vuesockOptions);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
