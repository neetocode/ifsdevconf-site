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
            {
              from: './src/assets/apoio',
              to: './apoio/'              
            }
        ]),
        new CopyWebpackPlugin([
            {
              from: './src/assets/palestrantes',
              to: '.'              
            }
        ]),
        new CopyWebpackPlugin([
            {
              from: './src/assets/patrocinadores',
              to: './patrocinadores/'              
            }
        ]),
        new CopyWebpackPlugin([
            'src/assets/browserconfig.xml',
            'src/assets/manifest.json',
            'src/assets/favicon.ico',            
        ])
    ]
};