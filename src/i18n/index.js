import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales';
Vue.use(VueI18n);

export const locales = {
  vi: 'vi',
  en: 'en',
};

const i18n = new VueI18n({
  locale: locales.vi,
  messages,
});

// Vue.prototype.$i18n = i18n;

export default i18n;
