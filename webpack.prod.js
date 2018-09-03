const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
   plugins: [
     new UglifyJSPlugin({
       sourceMap: true
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     }),
     new webpack.HashedModuleIdsPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor'
      }),
     new webpack.optimize.CommonsChunkPlugin({
         name: 'common' // Specify the common bundle's name.
      })

   ]
 });
