module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "webpack-bundle.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
