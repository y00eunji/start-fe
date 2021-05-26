module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2,
  },
  parserOption: {
    sourceType: 'module',
  },
};
