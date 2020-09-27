module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Use the recommended rules from eslint-plugin-react-hooks
    'prettier/react', // Use eslint-config-prettier to disable ESLint formatting rules from eslint-plugin-react that would conflict with with Prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier
      ],
    },
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'react', // Allows for manually setting react/* rules
    'react-hooks', // Allows for manually setting react-hooks/* rules
    'prettier', // Allows for manually setting prettier/* rules
  ],
};
