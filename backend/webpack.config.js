const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../frontend/src/cliant.tsx"),
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
