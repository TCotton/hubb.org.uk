const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

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

  externals : {
    HTMLElement: 'HTMLElement',
  },

  entry: "./src/scripts/index.js",
  output: {
    publicPath: "./src",
    path: __dirname + "/public_html",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|pdf|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
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
    new CopyPlugin({
      patterns: [{ from: "src/pdf", to: "public_html/pdf" }],
    }),
  ],
};
