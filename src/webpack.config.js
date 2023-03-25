{
  module.exports = {
    resolve: {
    alias: {
    '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'file'
        }
      ]
    }
  };
  
}