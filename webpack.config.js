module.exports = {
  entry: './client/index.js',
  output: {
     path: ' __dirname + '/public',',
    filename:'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader',
      exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    compress: true,
    hot: true,
  },
  devtool: 'source-map'
}
