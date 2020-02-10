module.exports = {
  siteMetaData: {
    title: 'Lima Móveis Planejados'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-purgecss',
    options: {
      printRejected: true,
      tailwind: true
    }
  }
]
}