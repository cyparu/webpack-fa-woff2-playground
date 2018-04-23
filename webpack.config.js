const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// Webpack config
module.exports = {
	output: {
		path: `${__dirname}/build`,
	},
	resolve: {
		modules: [`${__dirname}/node_modules`]
	},
	module: {
		rules: [
			// config scss
			{ test: /\.scss$/, loader: [ MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader?sourceMap"] },
			// select just woff2 font files
			{ test: /.woff2$/, loader: "file-loader?name=fonts/[name].[ext]" },
			// skip all other font files
			{ test: /.(woff|eot|ttf|otf|svg)$/, loader: "null-loader" }
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css"
		})
	]
}
