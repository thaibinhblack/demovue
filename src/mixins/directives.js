
const clickOutside =  {
    bind: function(el, binding, vNode) {
      if (typeof binding.value !== 'function') {
        const compName = vNode.context.name
        let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
        if (compName) { warn += `Found in component '${compName}'` }s
        console.warn(warn)
      }
      // Define Handler and cache it on the element
      const bubble = binding.modifiers.bubble
      const handler = (e) => {
        if ((!el.contains(e.target) && el !== e.target)) {
          binding.value(e);
        }
      }
      el.clickOutside = handler
      document.addEventListener('click', handler, true);
    },
    
    unbind: function(el, binding) {
      document.removeEventListener('click', el.__vueClickOutside__)
      el.addEventListener(clickOutside, null)
    }
};

const highlightDirective = {
  deep: true,
  bind: function(el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
    })
  },
  componentUpdated: function(el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
      }
    })
  }
};

export default  {
  install(VueInstance) {
    VueInstance.directive('click-outside', clickOutside);

    VueInstance.directive('highlightjs', highlightDirective);
  }
}
