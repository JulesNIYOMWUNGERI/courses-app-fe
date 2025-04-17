
import eslintPluginImport from 'eslint-plugin-import';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier'; // Disable conflicting formatting rules
import prettierPlugin from 'eslint-plugin-prettier'; // Run Prettier as an ESLint rule
import unusedImports from "eslint-plugin-unused-imports";
import reactHooks from 'eslint-plugin-react-hooks'

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: eslintParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': eslintPlugin,
            import: eslintPluginImport,
            'react-hooks': reactHooks,
            prettier: prettierPlugin,
            "unused-imports": unusedImports,
        },
        rules: {
            // Core Rules
            'no-console': 'warn',
            'no-debugger': 'error',

            // TypeScript Rules
            '@typescript-eslint/no-unused-vars': 'off', // Disabled in favor of unused-imports plugin
            '@typescript-eslint/no-explicit-any': 'off',

            // Import Rules
            'import/order': [
                'warn',
                {
                    groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],


            'unused-imports/no-unused-imports': 'warn',
            'no-unused-vars': [
                'warn',
                { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
            ],
            'unused-imports/no-unused-vars': 'off',

            'import/no-unresolved': 'error',

            // Prettier Rules
            'prettier/prettier': 'error', // Report Prettier issues as ESLint errors
        },
        settings: {
            // Optional settings for eslint-plugin-import to resolve paths
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    },
    {
        // Add Prettier Config at the Global Level
        files: ['**/*.{ts,tsx}'],
        rules: {
            ...prettierConfig.rules, // Disables rules that conflict with Prettier
        },
    },
];
