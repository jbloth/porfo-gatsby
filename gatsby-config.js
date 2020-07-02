/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Julia`,
    description: `a web developer`,
  },
  plugins: [
    `gatsby-plugin-styled-jsx`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Orbitron"],
        },
      },
    },
  ],
}
