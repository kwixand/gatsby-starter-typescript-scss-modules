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
    { resolve: `gatsby-plugin-sass` },
    { resolve: `gatsby-plugin-typescript` },
  ],
}
