const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
      main: path.resolve(__dirname,'./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
        
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/form.html'
   } ),
   new MiniCssExtractPlugin({filename: 'style.css'})],
};