// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/* --- NEW: Prettier bridge packages --- */
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config([
  /* Ignore build output */
  globalIgnores(['dist']),

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  /* Base config for TypeScript + React */
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    /* --- Enable Prettier as an ESLint rule --- */
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error', // red-line any formatting issues
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
        },
      ],
      semi: ['warn', 'always'],
      'arrow-spacing': 2,
      'arrow-body-style': ['error', 'as-needed'],
      'comma-spacing': ['error', { before: false, after: true }],
      'block-spacing': ['error', 'always'],
      quotes: [
        'error',
        'double',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'comma-dangle': ['warn', 'always-multiline'],
      'array-bracket-spacing': 2,
      'object-curly-spacing': 2,
    },
  },

  /* --- Turn off formatting rules that conflict with Prettier (MUST be last) --- */
  prettierConfig,
], storybook.configs["flat/recommended"]);
