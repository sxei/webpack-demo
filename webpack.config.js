var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
 
module.exports = {
	//页面入口文件配置
	entry: {
		index: 'page/index',
		second: 'page/second'
	},
	//入口文件输出配置
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		//加载器配置
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'jsx-loader?harmony'},
			// {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			// 小于8kb的图片直接采用base64方式引入
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			// html采用ejs模板，所以用ejs加载器
			{test: /\.html$/, loader: 'ejs-loader'}
		]
	},
	//其它解决方案配置
	resolve: {
		// root: 'E:/github/flux-example/src', //绝对路径
		// 自动扩展文件后缀名查找优先级，如果我们不写扩展名则按照这个优先级查找文件
		extensions: ['.js', '.json', '.scss'],
		// 别名
		alias: {
			css: getAbsolutePath('./src/css'),
			img: getAbsolutePath('./src/img'),
			view: getAbsolutePath('./src/view'),
			page: getAbsolutePath('./src/js/page'),
			plugin: getAbsolutePath('./src/js/plugin'),
			jquery: getAbsolutePath('./src/js/plugin/jquery/jquery.js')
		}
	},
		//插件项
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common'),
		new htmlWebpackPlugin(
		{
			title: 'this is mytitle a',
			template: getAbsolutePath('./src/view/index.html'),　
			filename: getAbsolutePath('./dist/index.html'),
			inject: true,
			chunks: ['index', 'common']
		}),
		new htmlWebpackPlugin(
		{
			title: 'this is mytitle a',
			template: getAbsolutePath('./src/view/second.html'),　
			filename: getAbsolutePath('./dist/second.html'),
			inject: true,
			chunks: ['second', 'common']
		})
	]
};

function getAbsolutePath(tempPath)
{
	return path.resolve(__dirname, tempPath);
}