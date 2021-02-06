const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const webpack = require('webpack')

// MiniCssExtractPlugin.loader
module.exports = {
  entry: './src/main.ts',
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: '/dist',
    // host: 'localhost',
    // port: '8088',
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: [path.resolve(__dirname, 'src/component')],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        include: [path.resolve(__dirname, 'src/component')],
      },
      {
        test: /\.(eot|woff2|woff|ttf|truetype|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'iconfont',
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'production',
}
