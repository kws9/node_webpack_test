const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || "development",
  entry: ["./index.js"],
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/lambda"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '',
        to: 'image/',
      },
    ],
    { context: 'image' })
  ]
}