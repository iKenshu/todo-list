const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {    
    const plugins = [
        new ExtractTextPlugin("css/[name].css")
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin(['dist'], {root: __dirname})
        )
    }

    return {
        entry: {
            "home": path.resolve(__dirname, 'react/src/entries/home.js'),
        },
        output: {
            path: path.resolve(__dirname, 'items/static/dist'),
            //path: 'dist',
            filename: 'js/[name].js',
            //filename: 'js/[name].js',
            //publicPath: path.resolve(__dirname, 'dist')+"/",
            publicPath: 'dist/',
            chunkFilename: 'js/[id].[chunkhash].js',
        },
        devServer: {
            port: 9000,
        },
        module: {
            rules: [
                {
                    // test: que tipo de archivo quiero reconocer,
                    // use: que loader se va a encargar del archivo
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                        use: {
                    loader: 'babel-loader'
                        },
                    },
                {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            }
                        }
                    ]
                })
                },
                {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'images/[name].[ext]',
                    }
                }
                },
            ]
        },
        plugins
    }
}
