<template functional>
<section class="example-code">
  <div class="container">
    <div class="example-code__intro">
      <h3 class="example-code__intro-title"> {{ props.title }}  </h3>
      <hr />
      <div class="example-code__intro-description">
        {{ props.description }}
      </div>  

    </div>
    <div class="example-code__result">
      <slot />
    </div>
    <strong> {{ parent.$t('modal.code.html') }} </strong>
    <div class="example-code__container">
      <pre v-highlightjs>
        <code class="javascript">
          {{ props.code }}
        </code>
      </pre>
    </div>
    <strong> {{ parent.$t('modal.code.javscript') }} </strong>
    <div class="example-code__container"> 
      <pre v-highlightjs>
        <code class="javascript">
         {{ props.script }}
        </code>
      </pre>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'example-code',

  props: {
    title: String,
    description: String,
    code: String,
    script: String,
  },

}
</script>

<style lang="scss">
.example-code {
  
  &__container {
    background-color: colors.$color-code-bg;
  }

  &__result {
    padding: fn.rem(25) 0;
  }
}
</style>
