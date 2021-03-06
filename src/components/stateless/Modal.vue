<template>
  <transition name="modal-fade">
    
    <div  
      :class="[
        {     
          'modal': true,
          '--active': value,
          '--full': full,
        },
        classPosition,
      ]"
    >
      <div class="modal__container">
        <div 
          v-show="value"
          v-click-outside="closeOutside"
          :class="[
            {
              'modal__dialog': true,
            },
            classPosition,
          ]"
          role="dialog"
          :aria-labelledby="title"
        >
          <div class="modal__header">
            <slot name="header">
              <h3> {{title || ''}}</h3>
              <button 
                v-show="!closeX"
                type="button"
                class="button --close --radius"
                @click="close"
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
              class="button --outline-warning"
              @click="close"
              aria-label="Close modal"
            >
              <i class="bi bi-x" />
              {{ $t('modal.close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export const POSTION_MODAL = {
  center: '--center',
  left: '--left',
  right: '--right'
}
POSTION_MODAL.default = POSTION_MODAL.center;

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
    outside: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: POSTION_MODAL.default,
    },
    closeX: {
      type: Boolean,
      default: false,
    } 
  },

  computed: {
    classPosition: (vm) => (POSTION_MODAL[vm.position] || POSTION_MODAL.default)
  },

  methods: {
    close() {
      //update model
      this.$emit('input', false);
      //event close
      this.$emit('close', false);
    },

    closeOutside() {
      if(this.value === true && this.outside === true) {
        this.close();
      }
    }
  },
};
</script>

<style <style lang="scss">
$height-header-footer: fn.rem(210);
$heigh-body: 100% - $height-header-footer;
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

    #{$this}.\--left &{
      justify-content: right;
    }

  }

  &__dialog {
    position: absolute;
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

    #{$this}.\--left & {
      height: 100%;
      left: 0;
    }

    #{$this}.\--right & {
      height: 100%;
      right: 0;
    } 
  
  } 
  &__header, &__body, &__footer {
    padding: fn.rem(15);
    width: 100%;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid colors.$color-modal-border;
    align-items: center;
    height: fn.rem(60);
  }

  &__body {
    height: calc(100% - 135px);
    padding: fn.rem(25) fn.rem(15);
  }

  &__footer {
    border-top: 1px solid colors.$color-modal-border;
    height: fn.rem(60);
    display: flex;
    align-items: center;
  }
}
</style>
