const path = require("path")
const outputDir = path.resolve(__dirname, "dist")
const entryJs = path.resolve(__dirname, "src", "index.js")

const webpack = require("webpack")

 const HtmlWebPackPlugin = require("html-webpack-plugin");

 const htmlWebpackPlugin = new HtmlWebPackPlugin({
   template: "./dist/index.html",
   filename: "./index.html"
 });

 module.exports = {
   entry: entryJs,
   output: {
	path: outputDir,
	publicPath: "/",
	filename: "bundle.js",
   },
   devtool: "inline-source-map",
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
	 loader: "babel-loader",
         exclude: /node_modules/,
       },
       {
         test: /\.css$/,
         use: [
           {
             loader: "style-loader"
           },
           {
             loader: "css-loader",
             }
         ]
       }
     ]
   },
   resolve: {
	extensions: ["*", ".js", ".jsx"],
   },
   plugins: [htmlWebpackPlugin],
   devServer: {
      historyApiFallback: true,
      contentBase: "./dist",
      hot: true,
   }
 };
