const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: {
    'js/index': './src/js/index.ts',
    'js/common': './src/js/commom.js'
  },
  devtool: 'inline-source-map', //追踪错误文件
  // 热更新
  devServer: {
    static: './dist',
    port: 9999
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack plugin aaa",
      template: "./src/html/index.html",
      inject: "body",
      filename: "index.html",
      chunks: ["js/index"]
    }),
    new HtmlWebpackPlugin({
      title: "webpack ahaha",
      template: "./src/html/b.html",
      inject: "body",
      filename: "b.html",
      chunks: []

    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'js/index',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true 
  },
  // 避免共享文件重复引用
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        // use: ['style-loader',],
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
}