const
  path = require('path')
  , webpack = require('webpack')
  , packageJson = require('./package.json')

  // webpack plugin
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , TerserPlugin = require('terser-webpack-plugin')
  , {CleanWebpackPlugin} = require('clean-webpack-plugin')

  // config
  , terserConfig = require('@cycjimmy/config-lib/terserWebpackPlugin/2.x/production')
;

const
  IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
  , IS_PRODUCTION = process.env.NODE_ENV === 'production'
  , cssIdentifier = IS_PRODUCTION ? '[hash:base64:10]' : '[path][name]__[local]'
;

const OPTIMIZATION_OPTIONS = {
  minimize: true,
  minimizer: [new TerserPlugin(terserConfig)],
};

const config = {
  mode: 'none',
  entry: path.resolve('src', 'index.js'),

  output: {
    path: IS_DEVELOPMENT
      ? path.resolve('dist')
      : path.resolve('build'),
    filename: packageJson.name.replace(/^.+\//g, '') + (() => IS_PRODUCTION
      ? '.min.js'
      : '.js')(),
    library: 'H5AudioControls',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ],
    'extensions': ['.js']
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        type: 'javascript/auto',
        loader: 'babel-loader'
      },

      // Style
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: cssIdentifier,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve('postcss.config.js'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ]
      },

      // Pictures
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [
          path.resolve('node_modules')
        ],
        include: [
          path.resolve('src')
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'images/[hash:12].[ext]'
            }
          }
        ]
      },

      // Pug template
      {
        test: /\.pug$/,
        include: [
          path.resolve('src'),
          path.resolve('static')
        ],
        exclude: [
          path.resolve('node_modules')
        ],
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: packageJson.name + ' v' + packageJson.version +
        '\nHomepage: ' + packageJson.homepage +
        '\nReleased under the ' + packageJson.license + ' License.'
    })
  ]
};

// dev mode
if (IS_DEVELOPMENT) {
  // devtool
  config.mode = 'development';
  config.devtool = 'source-map';

  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve('./static', 'view', 'index.pug'),
    }),

    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),

    new BrowserSyncPlugin({
      server: {
        baseDir: 'dist',
      },
    }, {
      reload: true,
    })
  );
}

// production mode
if (IS_PRODUCTION) {
  config.mode = 'production';

  config.plugins.push(
    new webpack.HashedModuleIdsPlugin(),

    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
  );

  config.optimization = OPTIMIZATION_OPTIONS;
}

module.exports = config;
