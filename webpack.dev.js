require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/index.js",
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    publicPath: "./src",
    open: true,
    openPage: "src/index.html",
    inline: true,
    hot: true,
  },

  output: {
    publicPath: "./src",
    path: path.resolve(__dirname, "./src"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
  ],
};
