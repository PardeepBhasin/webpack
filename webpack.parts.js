exports.loadFonts = ({outPath, publicPath, exclude}) => ({
  module : {
    rules : [
      {
        test: /\.(woff|woff2)$/,
        exclude,
        use : [
          {
            loader: 'url-loader',
            options: {
              name: `${outPath}[name].[ext]`,
              publicPath,
            }
          }
        ]
      }
    ]
  }
})
