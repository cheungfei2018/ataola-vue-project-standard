// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import router from './router';
import { get, post } from './utils/api';

import App from '@/App';

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.prototype.$get = get;
Vue.prototype.$post = post;

window.log = console.log;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
