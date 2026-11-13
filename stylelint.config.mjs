export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  ignoreFiles: [
    'dist/**',
    '.release/**',
    '.publish/**',
    'coverage/**',
  ],
  rules: {
    // CSS Modules scoping helpers resolved by Vite's postcss-modules integration.
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
}
