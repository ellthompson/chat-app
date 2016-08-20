var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'static/src/js/index.js'),
    output: {
        path: path.join(__dirname, 'static/dist/js/'),
        filename: 'index.js'
    },
    resolve: {
        root: path.join(__dirname, 'static/src/js/'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
