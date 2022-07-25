module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended', 'google'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    quotes: ['error', 'single'],
  },
};
