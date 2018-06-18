const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
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
  devtool:'eval-source-map',
  module: {
    rules: [
      // Loaders here.
      {
        test: /\.js$/,
        use : {
          loader: 'babel-loader'
        },
      },
      {
        //Type file
        test: /\.css$/,
        //Loader to use
        use: ExtractTextPlugin.extract({
          //['style-loader', 'css-loader' ]
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins: [
    //Call plugins here
    new ExtractTextPlugin("css/[name].css")
  ]
}