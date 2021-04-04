<template>
  <div class="example-modal">
      <example-code 
        :title="$t('modal.name')"
        :code="code"
        :script="script"
      >
        <div class="example-modal__container">
          <button 
            @click="openModal"
            class="button --outline-primary"
          >
            {{ $t('modal.button.name') }}
          </button>

          <modal v-model="open" />
        </div>
      </example-code>
      <table-props-modal />
      <table-slot-modal />
      <table-event-modal />
  </div>
</template>

<script>
import ExampleCode from '@/components/stateless/ExampleCode';
import Modal from '@/components/stateless/Modal';
import TablePropsModal from '@/components/statefull/BaseTable/TablePropsModal';
import TableSlotModal from '@/components/statefull/BaseTable/TableSlotModal';
import TableEventModal from '@/components/statefull/BaseTable/TableEventModal';

export default {
  name: 'example-modal',

  components: {
    ExampleCode,
    Modal,
    TablePropsModal,
    TableSlotModal,
    TableEventModal,
  },

  methods: {
    
    openModal() {
      this.open = true;
    }
  },

  data: (vm) => ({
    open: false,
    code: `
      <template>
        <div>
          <button 
            @click="openModal"
            class="button --outline-primary"
          >
            
          </button>

          <modal v-model="open" />
        </div>
      </template>
    `,
    script: `
      import Modal from '@/components/stateless/Modal';

      export default {
        data: () => ({
          open: false,
        }),

        components: {
          Modal,
        },

        methods: {
          openModal() {
            this.open = true;
          }
        },
      }
    `,
  })
}
</script>

<style lang="scss">
.example-modal {
  padding: fn.rem(50) 0;
}
</style>
