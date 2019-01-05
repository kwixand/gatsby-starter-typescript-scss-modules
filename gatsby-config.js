const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-scss-modules',
    description: '',
    copyright: {
      year: new Date().getFullYear(),
      text: '',
    },
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[hash:base64:5]',
        },
        postCssPlugins: [autoprefixer({ browsers: browserslist() })],
      },
    },
    { resolve: `gatsby-plugin-typescript` },
  ],
}
