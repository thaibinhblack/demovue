<template functional>
  <div class="base-table">
    <div class="base-table__intro">
     <strong> {{ props.title }} </strong>
     <hr />
    </div>
    <table class="base-table__container">
      <thead class="base-table__head">
        <tr class="base-table__row">
          <th 
            class="base-table__head-item"
            v-for="(item, index) in props.heads"
            :key="index"
          >
            {{item.name}}
          </th>
        </tr>
      </thead>

      <tbody class="base-table__body">
        <tr
          v-for="(item, index) in props.data" 
          :key="index" 
          class="base-table__row-data"
        >
          <td
            v-for="(head, index) in props.heads" 
            :key="index"
            class="base-table__item"
          >
            <div v-html="item[head.key]"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'base-table',

  props: {
    title: String,
    heads: {
      type: Array,
      default: () => ([]),
    },
    data: {
      type: Array,
      default: () => ([]),
    }
  }
}
</script>

<style lang="scss">
.base-table {

  $this: &;

  &__container {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
  }
  
  &__row, &__row-data{
    display: flex;
  }

  &__row-data {
    &:nth-child(even) {
      background-color: colors.$color-base-table-bg-even-row;
    }
  }

  &__head-item {
    padding: fn.rem(20) fn.rem(15);
    text-transform: uppercase;
    background-color: colors.$color-base-table-bg-head;
  }
  
  &__item {
    padding: fn.rem(8) fn.rem(15);
    display: flex;
    align-items: center;

    #{$this}__row-data & {
      border-top-color: transparent;
    }
  }

  &__head-item, &__item {
    flex: 1;
    border: 1px solid colors.$gray-1;
    border-right-color: transparent;
    font-size: fn.rem(15);

    &:last-child {
      border-right-color: colors.$gray-1;
    }
  }

}
</style>
