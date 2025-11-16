// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'

// Plugins
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.git',
      '**/*.config.js',
      '**/*.config.ts',
      '**/__mocks__/**',
      'jest.config.ts',
      'jest.setup.ts',
      'jest.polyfills.ts',
      'webpack.config.js',
    ],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Prettier como error
      'prettier/prettier': 'error',

      // Reglas extra opcionales
      'react/react-in-jsx-scope': 'off',
    },
  },
]
