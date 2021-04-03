<template>
  <div class="home">
    <div class="container">
      <button @click="modal = true">open modal</button>
      <modal v-model="modal" :outside="false" />
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
