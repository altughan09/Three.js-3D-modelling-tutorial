const path = require('path');
module.exports = {
   entry: ['./js/index.js'],
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
             }
         }
      ]
   }
};
