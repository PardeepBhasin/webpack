const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin  = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})
module.exports = {
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
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
