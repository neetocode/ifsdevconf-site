const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    output: {
        publicPath: '/',
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html'

            // KEY: 'VALUE'

        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        })
    ]
});