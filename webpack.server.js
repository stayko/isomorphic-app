const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/Server/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  externals: [webpackNodeExternals()],
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
    filename: "bundle.js"
  }
};
