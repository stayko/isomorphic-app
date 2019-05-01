const path = require("path");

module.exports = {
  entry: "./src/App/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/,
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
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
    filename: "client_bundle.js"
  }
};
