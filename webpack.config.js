var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'static/src/index.js'),
    output: {
        path: path.join(__dirname, 'static/dist/'),
        filename: 'index.js'
    },
    resolve: {
        root: path.join(__dirname, 'static/src/'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chat App'
        })
    ]
};
