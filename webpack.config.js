const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        contact: './src/contact.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "dist",
        compress: true,
        // port: 9000,
        stats: 'errors-only',
        // open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index Page',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            excludeChunks: ['contact'],
            // filename: './../index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            hash: true,
            filename: 'contact.html',
            chucks: ['contact'],
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/main.css').replace('css/js', 'css');
            },
            allChunks: true
        })
    ]
};