/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint import/extensions: ["error", "ignorePackages", {"js": off}] */
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import smartAsset from 'postcss-smart-asset';

import myBanner from '@cycjimmy/config-lib/esm/chore/myBanner.js';
import midlineToCamel from '@cycjimmy/awesome-js-funcs/esm/string/midlineToCamel.js';
import terserOption from '@cycjimmy/config-lib/esm/terser/4.x/production.js';

import pkg from '../package.cjs';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEPLOYMENT = process.env.NODE_ENV === 'deployment';

export const input = './src/index.js';
export const name = midlineToCamel(pkg.name.replace(/.+\//g, ''));
export const banner = myBanner(pkg);

export const plugins = [
  json(),
  postcss({
    modules: {
      generateScopedName: IS_PRODUCTION ? '[hash:base64:10]' : '[name]__[local]',
    },
    autoModules: false,
    minimize: true,
    plugins: [
      autoprefixer,
      smartAsset.default({
        url: 'inline',
      }),
    ],
  }),
  eslint({
    fix: true,
    exclude: ['**/*.(css|scss)'],
  }),
  resolve(),
  babel({ babelHelpers: 'bundled' }),
];

export const terserPlugins = IS_PRODUCTION && terser(terserOption);
