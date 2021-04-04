<template>
  <div class="table-props-modal">
    <div class="container">
      <base-table
        :title="$t('modal.props.name')"
        :heads="heads"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import BaseTable from '@/components/stateless/BaseTable';

export default {
  components: {
    BaseTable
  },

  data: (vm) => ({
    heads: vm.$t('modal.table.heads'),
    data: vm.$t('modal.props.data'),
  })
}
</script>

<style lang="scss">
.table-props-modal {
  padding: fn.rem(25) 0;
}
</style>
