const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack')
//import * as path from './path'
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {app:path.join(__dirname, 'app'), build: path.join(__dirname, 'build') };
process.env.BABEL_ENV = TARGET;
const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['.', '.js', '.jsx']
  },
  output: {
    path:PATHS.build,
    filename: 'bundle.js',
    publicPath: '/kanban/'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {modules: true}}],
//        use: [ 'style-loader',  'css-loader?modules'],
      include: PATHS.app
      },
     { test: /\.jsx?$/,
 //      exclude: /node_modules/,
       //use: ['react-hot-loader', 'babel-loader?cacheDirectory' ],
       use: [ 'babel-loader?cacheDirectory' ],
       include: PATHS.app
      
     }, 
      {test: /\.scss$/,
        use: [ 'style-loader', {loader: 'css-loader', options: {modules: true}}, 'sass-loader'],
        include: PATHS.app
      }
    ]
  
},
 // optimization: {
 //   splitChunks: { chunks: 'all'}
 //   }
};

if (TARGET == 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || '3000'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}


if(TARGET=='build') {
  module.exports = merge(common, {})
}
