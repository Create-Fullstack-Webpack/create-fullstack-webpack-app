{"entry":["/Users/stella/Codesmith/Week6/create-fullstack-webpack-app/client/src/index.js"],"output":{"path":"/Users/stella/Codesmith/Week6/create-fullstack-webpack-app/dist","filename":"bundle.js","publicPath":"/"},"module":{"rules":[{"test":{},"exclude":{},"use":{"loader":"babel-loader","options":{"presets":["@babel/preset-react","@babel/preset-env"]}}},{"test":{},"exclude":{},"use":{"loader":"babel-loader","options":{"presets":["@babel/preset-env"],"plugins":["@babel/plugin-proposal-object-rest-spread"]}}},{"test":{},"use":"mocha-loader","exclude":{}},{"test":{},"use":["style-loader","css-loader"]},{"test":{},"use":["style-loader","css-loader","sass-loader"]},{"test":{},"use":["file-loader"]}]},"resolve":{"extensions":[".js",".jsx"],"alias":{"react-dom":"@hot-loader/react-dom"}},"devServer":{"publicPath":"/dist","proxy":{"/":"http://localhost:3000"},"hot":true},"plugins":["new HtmlWebpackPlugin({appMountId: 'app',filename: 'index.html'})","new CleanWebpackPlugin()","new MiniCssExtractPlugin()"]}