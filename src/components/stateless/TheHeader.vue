<template>
  <header class="the-header">
    <div class="container">
      <div class="the-header__logo">
          {{ $t('app') }}
      </div>
      <div class="the-header__menu-container">
          <dropdown 
            v-model="selectedLanguage"
            class="the-header__menu"
            :label="$t('language.name')"
            :data="languages"
          />
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/stateless/Dropdown';
import iconVN from '@/assets/icons/vietnam.svg';
import iconEN from '@/assets/icons/english.png';
import { locales } from '@/i18n';

export default {
  name: 'the-header',

  components: {
    Dropdown,
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      const vm = this;
      this.languages =  [
        {
           key: 'vietnam',
          name: vm.$t('language.vietnam'),
          icon: iconVN,
          value: 'vi'
        },
        {
           key: 'english',
          name: vm.$t('language.english'),
          icon: iconEN,
          value: 'en'
        }
      ];
      this.selectedLanguage.name = this.$t(`language.${this.selectedLanguage.key}`);
    }
  },

  props: {
    menu: {
      type: Array,
      default: () => ([
        {
          name: 'Modal',
          id: '#modal',
          link: '#modal'
        }
      ]),
    }
  },

  data: (vm) => ({
    languages: [
      {
        key: 'vietnam',
        name: vm.$t('language.vietnam'),
        icon: iconVN,
        value: 'vi'
      },
      {
        key: 'english',
        name: vm.$t('language.english'),
        icon: iconEN,
        value: 'en'
      }
    ],
    selectedLanguage: {
      key: 'vietnam',
      name: vm.$t('language.vietnam'),
      icon: iconVN,
      value: 'vi'
    }
  }),

  watch: {
    selectedLanguage(language) {
      if(locales[language.value]) {
        if(language.value) this.setLocale(language.value)
      }
      else
      {
        console.error(this.$t('errors.notDefine', {
          name: language.value
        }))
      }
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
.the-header {
  padding: fn.rem(25);
  background-color: colors.$color-the-header-bg;
  display: flex;
  align-items: center;

  &__logo {
    padding: fn.rem(25);
    position: absolute;
    background-color: colors.$color-the-header-bg;
    color: colors.$white-1;
    text-transform: uppercase;
  }

  &__menu {
    margin: 0;
    padding: 0;
    float: right;
    width: fn.rem(150);
  }

  &__menu-item {
    list-style: none;
    color: colors.$white-1;
  }
}
</style>
