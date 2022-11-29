module.exports = {
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          [
            '^\\w'
          ],
          // aliases
          [
            '^@'
          ],
          // Side effect imports.
          [
            '^\\u0000'
          ],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          [
            '^'
          ],
          // Relative imports.
          // Anything that starts with a dot.
          [
            '^\\.'
          ]
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'no-console': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { 'selector': ['variable', 'function'], 'format': ['camelCase'] },
      { 'selector': ['variable'], 'modifiers': ['const'] ,  'format': ['PascalCase', 'camelCase', 'UPPER_CASE'] },
      { 'selector': ['typeAlias','enumMember'], 'format': ['PascalCase'] },
      {
        'selector': ['interface'],
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],
    'import/first': 'error',
    'no-duplicate-imports': 'error',
    // 'func-names': ['error', 'as-needed'],
    'import/no-unused-modules': [2, { 'unusedExports': true }],
    // 'no-restricted-imports': ['warn', {
    //   'patterns': [ '.*' , './*/' , '!./' ]
    // }]
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  plugins: [
    'simple-import-sort',
    'import',
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true
    },
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
};