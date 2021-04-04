<template>
  <div class="home">
    <the-header />
    
    <example-modal />
    
  </div>
</template>

<script>
import Modal from '@/components/stateless/Modal';
import TheHeader from '@/components/stateless/TheHeader';
import ExampleModal from '@/components/statefull/ExampleCode/ExampleModal'

export default {
  name: 'home',

  components: {
    Modal,
    TheHeader,
    ExampleModal,
  },

  data: () => ({
    modal: false,
    modal2: false,
    code: `
      <button> Open modal </button> 
      <modal v-modal="open">
    `
  }),

}
</script>
