module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
  },
  extends: [
    "eslint:recommended", // Use the recommened rules from eslint
    "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:react/recommended", // Use the recommended rules from eslint-plugin-react
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    sourceType: "module", // Allows for the use of imports
  },
  plugins: [
    "@typescript-eslint", // Allows for manually setting @typescript-eslint/* rules 
    "react", // Allows for manually setting react/* rules
  ],
};
