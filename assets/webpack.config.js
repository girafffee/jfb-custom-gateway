const path = require( 'path' );

module.exports = {
	name: 'js_bundle',
	context: path.resolve( __dirname, 'src' ),
	entry: {
		/**
		 * As a key you specify the name of the file that
		 * will be generated in the `js` folder.
		 *
		 * As a value - the path to the main file,
		 * relative to the `src` folder
		 */
		'editor.js': './Editor/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'js' ),
		filename: '[name]',
	},
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: [
			path.resolve( __dirname, 'src' ),
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@': path.resolve( __dirname, 'src' ),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};