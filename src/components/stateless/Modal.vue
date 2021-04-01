<template>
  <transition name="modal-fade">
    <div  :class="{     
        'modal': true,
        '--active': value,
        '--full': full
      }"
    >
      <div class="modal__container">
        <div 
          v-show="value"
          class="modal__dialog"
          role="dialog"
          :aria-labelledby="title"
        >
          <div class="modal__header">
            <slot name="header">
              <h3>{{title || ''}}</h3>
              <button 
                type="button"
                class="button --close --radius --outline-warning"
              >
                <i class="bi bi-x" />
              </button>
            </slot>
          </div>

          <div class="modal__body">
            <slot />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',

    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: String,
      full: {
        type: Boolean,
        default: false,
      },
    },

    methods: {
      close() {
        this.$emit('input', false);
      },
    },
  };
</script>

<style <style lang="scss">
.modal {
  $this: &;

  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  display: none;
  background: colors.$color-modal-background;

  &.\--active {
    display: block;
  }

  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  &__dialog {
    width: 50%;
    background-color: colors.$color-modal-background-dialog;
    border: 1px solid colors.$color-modal-border;
    border-radius: fn.rem(3);
    display: flex;
    flex-wrap: wrap;

    #{$this}.\--full & {
      width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
  
  } 

  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid colors.$color-modal-border;
    align-items: center;
    height: fn.rem(60);
  }

  &__body {
    
  }

  &__footer {
    height: fn.rem(150);
    display: flex;
    align-items: center;
  }

  &__header, &__body, &__footer {
    padding: fn.rem(15);
    width: 100%;
  }
}
</style>
