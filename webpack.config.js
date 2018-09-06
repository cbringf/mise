const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	devtool: false,
	externals: [
		nodeExternals()
	],
	target: 'node',
	entry: './src/index.ts',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
	},
	optimization: {
		minimize: true
	}
};