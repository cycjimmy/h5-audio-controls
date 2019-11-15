import {eslint} from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import smartAsset from 'postcss-smart-asset';
import {terser} from 'rollup-plugin-terser/index';
import pkg from '../package.json';
import myBanner from '@cycjimmy/config-lib/chore/myBanner';
import midlineToCamel from '@cycjimmy/awesome-js-funcs/string/midlineToCamel';
// config
import terserOption from '@cycjimmy/config-lib/terser/4.x/production';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEPLOYMENT = process.env.NODE_ENV === 'deployment';

export const input = './src/index.js';
export const name = midlineToCamel(pkg.name.replace(/.+\//g,''));
export const banner = myBanner(pkg);

export const plugins = [
  json(),
  postcss({
    modules: {
      generateScopedName: IS_PRODUCTION
        ? '[hash:base64:10]'
        : '[name]__[local]',
    },
    minimize: true,
    plugins: [
      autoprefixer,
      smartAsset({
        url: 'inline'
      }),
    ],
  }),
  eslint({
    fix: true,
    exclude: [
      '**/*.(css|scss)',
    ]
  }),
  resolve(),
  babel(),
  commonjs(),
];

export const terserPlugins = (IS_PRODUCTION && terser(terserOption));

