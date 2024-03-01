module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'promise'],
  // overrides: [
  //     {
  //         'files': ['**/*.test.ts'],
  //         'plugins': ['jest'],
  //         'extends': ['plugin:jest/recommended', 'plugin:jest/style'],
  //         'rules': { 'jest/prefer-expect-assertions': 'off' },
  //     },
  // ],
}
