var path = require('path')
var webpack = require('webpack')

module.exports = {
	context: path.resolve(__dirname,'./src'),
	entry: {
		app: './app.js'    //入口
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'bundle.js'   //生成位置
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()  //代码压缩
	]
}