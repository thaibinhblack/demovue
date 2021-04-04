<template>
  <div 
    class="dropdown"
    :class="data.staticClass"
    v-click-outside="closeDropdown"
  >
    <div
      @click="openDropdown"
      class="dropdown__selected"
    >
      <slot> 
        {{ value.name || label}} 
      </slot>
      <i 
        :class="[
          'bi dropdown__icon',
          classIcon,
        ]" 
      />
    </div>
    <ul 
      :class="{
        'dropdown__content': true,
        '--active': show, 
      }"
    >
      <li
        class="dropdown__item"
        v-for="(item, index) in data" 
        :key="index"
        @click="selectedValue(item)"
      >
        <img class="dropdown__item-icon" :src="item.icon" alt="icon" />
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown',

  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
    value: [Object, String],
    label: String,
  },

  data: () => ({
    show: false,
  }),

  computed: {
    classIcon: (vm) => (
      vm.show ? 'bi-chevron-up' : 'bi-chevron-down'
    )
  },

  methods: {
    openDropdown() {
      this.show = !this.show;
    },

    selectedValue(value) {
      this.$emit('input',value);
    },

    closeDropdown() {
      this.show = false;
    }
  }
}
</script>

<style lang="scss">
  .dropdown {
    color: colors.$white-1;
    position: relative;
    cursor: pointer;

    &__selected {
      display: flex;
      align-items: center;
      padding: fn.rem(8) fn.rem(20);
      padding-left: fn.rem(8);
    }

    &__icon {
      margin-left: fn.rem(7);
      font-size: fn.rem(8);
    }

    &__content {
      background-color: colors.$white-1;
      padding: 0;
      margin: 0;
      display: none;
      position: absolute;
      left: 0;
      width: 100%;

      &.\--active {
        display: flex;
        flex-wrap: wrap;
      }
    }

    &__item {
      padding: fn.rem(8);
      list-style: none;
      color: colors.$color-text-dark;
      font-size: fn.rem(13);
      border: 1px solid colors.$gray-2;
      width: 100%;
      display: flex;
      align-items: center;

      &:hover {
        background-color: colors.$blue-2;
        border-color: colors.$blue-1;
        color: colors.$white-1;
      }

    }

    &__item-icon {
      width: fn.rem(20);
      height: auto;
      margin-right: fn.rem(5);
    }
  }
</style>
