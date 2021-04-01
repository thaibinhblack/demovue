<template>
  <div class="home">
    <div class="container">
      <button @click="modal = true">open modal</button>
      <modal v-model="modal" full />
    </div>
  </div>
</template>

<script>
import Modal from '@/components/stateless/Modal';

export default {
  name: 'home',

  components: {
    Modal,
  },

  data: () => ({
    modal: false,
  }),
}
</script>
