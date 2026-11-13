import antfu from '@antfu/eslint-config'
import globals from 'globals'

export default antfu(
  {
    type: 'lib',
    ignores: [
      'dist/**',
      '.release/**',
      '.publish/**',
      'coverage/**',
      'docs/**',
    ],
  },
  {
    files: ['__test__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: ['tasks/**/*.js'],
    rules: {
      // These are CLI helpers: their progress output is the program's output.
      'no-console': 'off',
    },
  },
  {
    files: ['src/**/*.js'],
    rules: {
      // The JSDoc of this package is deliberately terse (no per-property @param
      // entries and no @returns prose), so keep these two rules from nagging.
      'jsdoc/check-param-names': 'off',
      'jsdoc/require-returns-description': 'off',
    },
  },
)
