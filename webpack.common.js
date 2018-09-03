const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BabelPolyfill = require('babel-polyfill');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { ImageminWebpackPlugin } = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');


const plugins = [imageminOptipng({
          optimizationLevel: '2'
        })];


module.exports = {
  entry: {

     app: path.join(__dirname, 'src', 'components', 'App.js'),
     print: path.join(__dirname, 'src', 'components', 'print.js'),
     vendor: ['babel-polyfill','react', 'react-dom'],
   },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js'
  },

  module: {
   rules: [
     {test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      },
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: 'babel-loader'
     },
     {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]

        })
        // use: ["style-loader","css-loader", "sass-loader"]
      },

      {
        test: /\.(eot|svg|ttf|woff2?|otf|jpg|png|jpeg)$/,
        use: 'file-loader'
      }
   ]
 },
 devtool: 'inline-source-map',
 devServer: {
     contentBase: './build'
   },

 plugins: [
   new ExtractTextPlugin('style.css'),
  //  new CleanWebpackPlugin(['build/*.*'],{verbose: true,
  //     dry: false}),
   new HtmlWebpackPlugin({
     hash: false,
     template: path.join(__dirname, 'public', 'index.html')
   }),
   new CopyWebpackPlugin([{
		from: path.join(__dirname, 'public', '../public/favicons'),
		to: path.join(__dirname, 'public', '../build'),
	},]),
  new WorkboxPlugin({
   // these options encourage the ServiceWorkers to get in there fast
   // and not allow any straggling "old" SWs to hang around
   clientsClaim: true,
   skipWaiting: true
 })
 ,
 // new WebpackPwaManifest({
 //      name: 'Jess Portfolio',
 //      short_name: 'Jess11',
 //      description: 'Jess11 Portfolio PWA',
 //      background_color: '#01579b',
 //      theme_color: '#01579b',
 //      'theme-color': '#01579b',
 //      start_url: '/',
 //      icons: [
 //        {
 //          src: path.join(__dirname, 'src', '/assets/images/icon.png'),
 //          sizes: [96, 128, 192, 256, 384, 512],
 //          destination: path.join('assets', 'icons')
 //        }
 //      ]
 //    }),
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins
      }
    })



  ]


}
