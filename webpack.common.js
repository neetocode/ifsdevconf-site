const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")


module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    module: {
        rules: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.ico|.jpg|.jpeg|.svg|.png*.*$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.json|.xml*.*$/,
                include: [
                    path.resolve(__dirname, "src/assets/doc")
                ],
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('app.[hash].css'),
        new CopyWebpackPlugin([
            'src/assets/browserconfig.xml',
            'src/assets/manifest.json',
            'src/assets/favicon.ico',
            'src/assets/palestrantes/sergio.jpeg',
            'src/assets/palestrantes/avatar.png',
            'src/assets/palestrantes/mayara-machado.jpeg',
            'src/assets/palestrantes/andrey-wallace.jpeg',
            'src/assets/palestrantes/breno-moura.jpg',
            'src/assets/palestrantes/gilton-mal.png',

            // new ServiceWorkerWebpackPlugin({
            //     entry: path.join(__dirname, 'src/assets/sw/OneSignalSDKWorker.js'),
            //     filename: "OneSignalSDKWorker.js",
            //     excludes: ['*.*']
            // }),
            // new ServiceWorkerWebpackPlugin({
            //     entry: path.join(__dirname, 'src/assets/sw/OneSignalSDKUpdaterWorker.js'),
            //     filename: "OneSignalSDKUpdaterWorker.js",
            //     excludes: ['*.*']
            // }),
        ])
    ]
};