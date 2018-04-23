# Webpack & WOFF2 fonts playground

Playing with [Webpack v4+](http://webpack.js.org/), [Font-Awesome v4+](https://fontawesome.com/) & [WOFF2](https://dev.w3.org/webfonts/WOFF2/spec/) fonts:
- use [postcss-loader](https://github.com/postcss/postcss-loader) & [postcss-discard-font-face](https://github.com/ben-eb/postcss-discard-font-face) to select & bundle just **WOFF2** file format thus removing all other older font formats loaded from Font-Awesome official npm package [v4.7.0](https://github.com/FortAwesome/Font-Awesome/releases/tag/v4.7.0)

**NOTE:** The Initial commit into the originally named [null_loader_css_url_bug](https://github.com/cyparu/null_loader_css_url_bug/commit/d02fa4bf62d6944cf0fccf678437b71781334625) repository was linked to this reported bug  [null-loader #17 bug](https://github.com/webpack-contrib/null-loader/issues/17).



