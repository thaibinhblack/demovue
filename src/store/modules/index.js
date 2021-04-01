import global from '@/store/modules/Global';

const modules = [
  global,
]

Object.keys(modules).forEach((module) => {
  modules[module].namespaced = true
});

export default modules;
