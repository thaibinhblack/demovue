import '@/assets/scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import i18n from  '@/i18n';
import directives from  '@/mixins/directives';
import plugins from '@/mixins/plugins';

Vue.use(directives);
Vue.use(plugins);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
  i18n,
}).$mount('#app');
