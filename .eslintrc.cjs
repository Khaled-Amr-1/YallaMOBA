module.exports = {
  root: true,                        // This is the root ESLint config
  parser: '@typescript-eslint/parser', // Parse TypeScript files
  parserOptions: {
    ecmaVersion: 2022,               // Modern JS syntax (Node 22)
    sourceType: 'module',            // Use ES modules (import/export)
    project: './tsconfig.json',      // Needed for some TypeScript rules
  },
  env: {
    node: true,                      // Node.js global variables
    es2022: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'], // Plugins we use
  extends: [
    'eslint:recommended',            // Basic ESLint recommended rules
    'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    'plugin:import/errors',           // Import plugin: catch errors
    'plugin:import/warnings',         // Import plugin: warnings
    'plugin:import/typescript',       // Import plugin: TS support
    'plugin:prettier/recommended'     // Enable Prettier rules as ESLint rules
  ],
  rules: {
    'no-console': 'warn',            // Warn on console.log
    'import/order': ['error', {      // Enforce import order
      groups: [['builtin', 'external', 'internal']],
      'newlines-between': 'always'
    }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused _args
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional
    'prettier/prettier': 'error'     // Prettier formatting issues = errors
  },
  settings: {
    'import/resolver': {
      typescript: {}                  // Makes import plugin work with TS paths
    }
  }
};
