module.exports = {
    env: {
        node: true,
        mocha: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/standard',
    ],
    globals: {
        // CHAI
        expect: false,
        mock: false,

        // IFP
        system: false,
        DataTable: false,
        DataTableBuilder: false,
    },
    parserOptions: {
        ecmaVersion: 2015,
    },
    plugins: ['prettier'],
    rules: {
        'no-var': ['error'],
        'no-unused-vars': ['error', { args: 'none' }],
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-prototype-builtins': 'off',
        'max-len': ['error', { code: 80, ignoreComments: true }],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                quoteProps: 'consistent',
                printWidth: 80,
            },
        ],
    },
};
