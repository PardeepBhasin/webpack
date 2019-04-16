const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const parts = require('./webpack.parts');

const htmlPlugin  = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const config = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  devtool: "source-map",
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
    mainFields: ['browser', 'module', 'main', 'jsnext:main'],
  },
  optimization : {
    splitChunks: {
        cacheGroups: {
            commons: { test: /[\\/]node_modules[\\/]/, name: "vendor", chunks: "all" }
        }
    }
  },
  module: {
    rules : [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
     {
      test:/\.css$/,
      use:[
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
      ],
     }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}

module.exports = merge([
  baseConfig,
  config,
  parts.loadFonts({
    outPath: 'assets/fonts/',
    publicPath: 'public',
  })
]);
