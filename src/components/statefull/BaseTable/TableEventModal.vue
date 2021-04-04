<template>
  <div class="table-event-modal">
    <div class="container">
      <base-table  
        :title="$t('modal.event.name')"
        :heads="heads"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import BaseTable from '@/components/stateless/BaseTable';

export default {
  name: 'table-event-modal',

  components: {
    BaseTable,
  },

  data: (vm) => ({
    heads: vm.$t('modal.table.heads'),
    data: vm.$t('modal.event.data')
  }),
}
</script>
