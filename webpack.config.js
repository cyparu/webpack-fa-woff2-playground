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
			// config scss, with postcss-loader config externalized in postcss.config.js 
			{ test: /\.scss$/, loader: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "resolve-url-loader", "sass-loader?sourceMap"] },
			// select all supported font formats with "woff2" explicit selection being performed by postcss-loader & postcss-discard-font-face
			{ test: /.(woff|woff2|eot|ttf|otf|svg)$/, loader: "file-loader?name=fonts/[name].[ext]" },
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css"
		})
	]
}
