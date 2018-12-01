const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
  node: {
    __dirname: false
  },
  target: 'node',
  mode: process.env.NODE_ENV || "development",
  context: path.resolve(__dirname, 'a'),
  entry: ["./index.js"],
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/a"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '',
        to: 'c/',
      },
    ],
    { context: 'c' })
  ]
}