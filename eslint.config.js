export default [
    {
        extends: 'standard-with-typescript',
        parserOptions: {
            "project": "./tsconfig.eslint.json"
        },
        "rules": {
            "@typescript-eslint/strict-boolean-expressions": "off",
        },
        ignores: ['node_modules/**', 'dist/**', 'coverage/**', 'data/**', '.vscode/**'],
    },
];

