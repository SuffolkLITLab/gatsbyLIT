/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      //When we use queries, we will have access to ALL these files. Now we only have access in the image directory
      resolve: `gatsby-source-filesystem`, //this is the plugin
      options: {
        //we have the options object for this specific plugin
        name: `images`, //the name which is MY NAME for the resource we are providing
        path: `${__dirname}/src/assets/images`, //this is the directory that contains our resource. __dirname sets up an absolute path to
        //the directory where our files are. We are currently in the root
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s77z1bunm1w2`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
        enableTags: true,
      },
    },
  ],
}
