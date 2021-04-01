module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential', 
    'eslint-plugin-import',
  ],
  rules: {
   'max-len': 'off',
   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
   'no-debuger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
