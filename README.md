### Some Cheat Sheet:
* Install: `npm install -g webpack` or `npm install --save-dev webpack`
* Check version: `npm view webpack verion`
* Bundle: `webpack ./destinationSource ./bundleName`
* Use `-p` for production and `-d` for development

* User `--watch` to watch file changes
* Link global Webpack to project `npm link webpack --save-dev`

### Useful
* [HTML-webpack-Plugin](https://github.com/jantimon/html-webpack-plugin)
* [style-loader](https://github.com/webpack-contrib/style-loader): Creates style nodes from JS strings
* [css-loader](https://github.com/webpack-contrib/css-loader): Translates CSS into CommonJS
* [sass-loader](https://github.com/webpack-contrib/sass-loader): Compiles Sass to CSS
* [webpack-dev-server](https://webpack.js.org/configuration/dev-server/): Running on server and auto reload
* [babel-loader](https://github.com/babel/babel-loader), [babel-core](https://www.npmjs.com/package/babel-core) with [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) and [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)
* [rimraf](https://github.com/isaacs/rimraf): Clean Folder