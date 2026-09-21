<p align="center">
  <a href="https://badgermaps.github.io/mui-theme-creator/">
    <img alt="Material-Ui Theme Creator" src="/src/images/mui_theme_creator_logo.webp?raw=true" width="120" />
  </a>
</p>
<h1 align="center">
  Material-UI Theme Creator
  
</h1>
<h3 align="center">Supported Material-UI Version: ^4.11.0</h3>

This repository is a fork of [bareynol/mui-theme-creator](https://github.com/bareynol/mui-theme-creator).

The original project helps you create a [Material-UI](https://material-ui.com/) `ThemeOptions` object. That object styles components in the library.

The goal of this fork is to add per-component customization in the theme. You can open a Customize panel for each sample and write CSS into `ThemeOptions.overrides`. The preview and the Monaco editor show the change at once. You do not need to save.

[Use this fork here](https://badgermaps.github.io/mui-theme-creator/)

The original app is available at [bareynol.github.io/mui-theme-creator](https://bareynol.github.io/mui-theme-creator/).

## Features

The app has a few developer-friendly features:

- Site templates to preview the theme on
- A code editor with code completion and suggestions based off `ThemeOptions` type data
- Dynamic loading of Google Fonts
- Detailed snippets that take advantage of the `ThemeOptions.props` and `ThemeOptions.overrides` options
- A Customize panel that writes CSS overrides for each component in the theme

## Motivations

The purpose of this project is to help expose the power of the Material-UI Theme styling solution, specifically relating to setting default `props` for components and default styles through `overrides`.

By customizing default props and styles of components at the theme level, developers can easily tweak the look and feel of the app, and cut out the need for specifying common styling patterns within component code.

This fork focuses on the `overrides` path. It gives a visual editor for each component CSS API.

_Have feature ideas, useful snippets, or bugs? Fantastic! Any help is appreciated, open an issue or submit a pull request!_

## Quick start

Use Node 16. The `.nvmrc` file sets this version.

```shell
nvm use
yarn install
yarn start # or use gatsby develop
```

The app runs at `http://localhost:8000/`.

## Deploy to GitHub Pages

`yarn deploy` builds the static site and publishes the `gh-pages` branch.

1. Use Node 16.
2. Run `yarn install`.
3. Run `yarn deploy`.
4. Open the GitHub repository. Go to **Settings → Pages**.
5. Set **Source** to **Deploy from a branch**.
6. Set **Branch** to `gh-pages` and the folder to `/ (root)`.

The site URL is https://badgermaps.github.io/mui-theme-creator/.

A merge to `master` does not publish the site. Run `yarn deploy` after each change that you want on GitHub Pages.

If the repository name is not `mui-theme-creator`, change `pathPrefix` in `gatsby-config.js` so that it matches the repository name.

<!--
1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## What's inside?

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

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default) -->
