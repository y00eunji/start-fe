module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: true,
    ReactDOM: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2,
  },
  parserOption: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
