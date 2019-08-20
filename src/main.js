import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';

import router from './router';
const NotFound = { template: '<p>Page not found</p>' };

Vue.use(VeeValidate);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
