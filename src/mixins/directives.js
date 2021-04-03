
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

export default  {
  install(VueInstance) {
    VueInstance.directive('click-outside', clickOutside);
  }
}