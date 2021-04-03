import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

// Vue.prototype.$i18n = i18n;

export default i18n;
