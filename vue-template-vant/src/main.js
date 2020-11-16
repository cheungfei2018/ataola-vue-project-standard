import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VConsole from 'vconsole';

import { Button } from 'vant';

Vue.config.productionTip = false;
const Vconsole = new VConsole();
Vue.use(Vconsole);

Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
