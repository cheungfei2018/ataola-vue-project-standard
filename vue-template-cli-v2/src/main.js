import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import globalComp from '@/components/global';

Vue.config.productionTip = false;

Vue.use(globalComp);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
