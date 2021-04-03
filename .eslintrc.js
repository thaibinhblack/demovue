module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  env: {
    "es6": true,
    "browser": false,
    "node": true,
    "jquery": false,
    "jest": true,
  },
  rules: {
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debuger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-var": process.env.NODE_ENV === 'production' ? 1: 0,
    "no-trailing-spaces": process.env.NODE_ENV === 'production' ? 1 : 0,
    "no-underscore-dangle": 0,
    "no-alert": process.env.NODE_ENV === 'production' ? 1 : 0,
    "no-lone-blocks": process.env.NODE_ENV === 'production' ? 1 : 0,
    "quotes": 0,
    "eol-last": 0,
    "import/extensions": 1,
    "import/no-named-as-default": 0,
  },
}
