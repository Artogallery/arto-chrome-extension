const path = require('path');
const webpack = require('webpack');
const postCSSConfig = require('./postcss.config');

const host = 'localhost';
const port = 3000;
const customPath = path.join(__dirname, './customPublicPath');
const hotScript = 'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true';

const baseDevConfig = () => ({
  devtool: 'cheap-module-source-map',
  entry: {
    // background: [customPath, hotScript, path.join(__dirname, '../chrome/extension/background')],
    newtab: [customPath, hotScript, path.join(__dirname, '../chrome/extension/newtab')],
  },
  devMiddleware: {
    publicPath: `http://${host}:${port}/js`,
    stats: {
      colors: true
    },
    noInfo: true
  },
  hotMiddleware: {
    path: '/js/__webpack_hmr'
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  postcss() {
    return postCSSConfig;
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      __HOST__: `'${host}'`,
      __PORT__: port,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: 'file-loader',
      },
      {
        test: [
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre']
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      }
    ]
  }
});

const appConfig = baseDevConfig();

module.exports = [
  appConfig
];
