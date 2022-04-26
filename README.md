<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## Purpose

The purpose of this repository is to recreate as accurately as possible the original [courtformsonline.org](https://courtformsonline.org/) website with the use of Gatsby. The content is fetched almost entirely from Contentful, a headless CMS platform that allows you to update and edit your website through a user-friendly API.  

## Things to note

1)	This repository alone will **NOT** allow you to run the website on your local machine. Together with the source code (provided here) you will need to download the Gatsby CLI (instructions provided in the **Quick Start** section above) as well as the necessary plugins used (mentioned in **`gatsby-config.js`**). 
2)	Do **NOT** clone the repository in a OneDrive folder. An attempt to run **`gatsby develop`** inside a folder managed by OneDrive will result into an error.
3)	The API keys required to access the website content through Contentful are not included for privacy reasons.
4)	As mentioned above, this repository makes use of a headless CMS named ***Contentful***. In order for Gatsby to fetch and display the data from Contentful, GraphQL needs to be used. GraphQL is a place where you create queries using your data from Contentful. **It is strongly adviced to spend some time understanding how to create and manipulate these queries, they are an intergral part of this project** . After using the **`gatsby develop`** command, along with the prompt that says the port number of the localhost in which the website resides, you will see a URL for GraphQL. Use that to create/edit your queries. 
5)	Since Gatsby is a react-based framework, you will be able to see changes after saving the modified files. If no changes are discerned, refresh the page. 
6)	When you make a modification while the server runs, you might see an error in your browswer. If the error does not disappear after rehreshing, your code must be checked for errors.
7)	Before using **`gatsby develop`** in your terminal to start your server, it is recommended to clear the cache with the **`gatsby clean`** command.

## Structure of project

- The **src** folder contains the code that builds the website. Inside you will find: 
  - The **components** folder that contains the components which build the skeleton of the website like the navigation bar at the top, the dropdown menu of categories, the footer etc. 
  - The **context** folder that contains the global variables shared among all pages (i.e. the context the website is currently in). These variables include the english and spanish translations. 
  - The **pages** folder that contains all the pages of the website. Their content is fetched entirely from **contentful**. 
  - The **assets** folder that contains the CSS and images used. 
- The rest of the folders are obtained when creating a gatsby project (**after** downloading the Gatsby CLI). 
- ***DON'T*** forget to download the necessary plugins mentioned in the **`gatsby-config.js`** file. 

## To get started with Gatsby: 
- Make sure you have Node.js installed (https://nodejs.org/en/download/)
- Make sure you have Git installed (https://github.com/git-guides/install-git)
- Then proceed with downloading the Gatsby Command Line Interface (CLI) (https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
- Make sure you have you favorite code editor installed. Visual Studio Code is recommended. 
    - It doesn’t matter what code editor you choose to use. Your site will end up looking the same, no matter what tool you use to write it. But the      Gatsby documentation sometimes includes screenshots that were taken in VS Code, so using VS Code will make sure that your screen looks like the screenshots in the tutorial and docs.
  
## To employ the courtformsonline site: 

- Before running the code source above, make sure you have the necessary plugins installed. In the following examples, npm is the package manager being used. However, yarn will achieve the same outcome. 
  1. **`npm i react-bootstrap`** (for styles and bootstrap components)
  2. **`npm install gatsby-source-contentful`** (contentful plugin, don't forget to include it in **`gatsby-config.js`** by following https://www.gatsbyjs.com/plugins/gatsby-source-contentful/). **PLEASE NOTE** that the project makes use of contentful tags. You need to add an additional line (that is, **`enableTags: true`**) in the options object of your **`gatsby-source-contentful`** plugin in in the  **`gatsby-config.js`** file. Not including this, will result into an error when compiling. It is also recommended to create a separate file (.env.development) to save your contentful API key. An easy way to do it is the following: 
    - Create a new file with the name .env.development in the your project folder and include the following line **`CONTENTFUL_API_KEY = ...`** where ... is your API key.
    - Go to **`gatsby-config.js`** and include:
      **`require("dotenv").config({
          path: `.env.${process.env.NODE_ENV}`,
        })`**
      at the very top.
    - Include **`accessToken: process.env.CONTENTFUL_API_KEY`** in the options object of your **`gatsby-source-contentful`**          plugin. 
  4. **`npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components`** (for global styles and style wrappers, don't forget to include it in **`gatsby-config.js`** by following https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)
  5. **`npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`** (to make use of gatsby images, don't forget to include it in **`gatsby-config.js`** by following https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
  6. **`npm install gatsby-source-filesystem`** (this will allow you to query your files if needed, don't forget to include it in **`gatsby-config.js`** by following https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
  7. See https://www.gatsbyjs.com/docs/gatsby-config/ for further documentation on gatsby plugins. 


Below you will find documentation created by Gatsby developers. **Please read carefuly**.

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.


<!-- AUTO-GENERATED-CONTENT:END -->
