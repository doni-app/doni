module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:turbo/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'turbo'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'turbo/no-undeclared-env-vars': 'error'
  }
};
