const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./client/index.tsx"],
  output: {
    path: path.join(__dirname, ".build"),
    publicPath: "http://localhost:3001/",
    filename: "client.js"
  },
  devServer: {
    hot: true,
    contentBase: "./.build",
    port: 3001,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: ["react-hot-loader/babel"]
            }
          },
          "awesome-typescript-loader"
        ],
        include: [
          path.join(__dirname, "client"),
          path.join(__dirname, "common")
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};

// const webpack = require("webpack");
// const path = require("path");

// module.exports = {
//   mode: "development",
//   devtool: "inline-source-map",
//   entry: [
//     "react-hot-loader/patch",
//     "webpack-dev-server/client?http://localhost:3001",
//     "webpack/hot/only-dev-server",
//     "./client/index.tsx"
//   ],
//   target: "web",
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         use: "babel-loader",
//         include: [
//           path.join(__dirname, "client"),
//           path.join(__dirname, "common")
//         ]
//       },
//       {
//         test: /\.ts|\.tsx$/,
//         use: [
//           { loader: "babel-loader" },
//           { loader: "awesome-typescript-loader" }
//         ],
//         include: [
//           path.join(__dirname, "client"),
//           path.join(__dirname, "common")
//         ],
//         exclude: /node_modules/
//       }
//     ]
//   },
//   resolve: {
//     extensions: [".ts", ".js", ".tsx", ".jsx"]
//   },
//   plugins: [
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.DefinePlugin({
//       "process.env": { BUILD_TARGET: JSON.stringify("client") }
//     })
//   ],
//   devServer: {
//     host: "localhost",
//     port: 3001,
//     historyApiFallback: true,
//     hot: true
//   },
//   output: {
//     path: path.join(__dirname, ".build"),
//     publicPath: "http://localhost:3001/",
//     filename: "client.js"
//   }
// };
