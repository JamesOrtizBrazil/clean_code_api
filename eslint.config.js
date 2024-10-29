import loveConfig from 'eslint-config-love';

export default [
    {
        ...loveConfig,
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
        rules: {
            '@typescript-eslint/strict-boolean-expressions': 'off',
        },
        ignores: ['node_modules/**', 'dist/**', 'coverage/**', './data/**', '.vscode/**'],
    },
];
