// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const process = require("process");

const config = {
  entry: "./server/index.js",
  target: "node",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
module.exports = config;
