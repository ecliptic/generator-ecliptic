# <%= name %>

<%= description %>

## Overview

This is a [React](https://facebook.github.io/react/) project built with [Webpack 2](https://webpack.js.org/). The Webpack config is generated with [webpack-blocks](https://github.com/andywer/webpack-blocks) in the [webpack.config.js](webpack.config.js) file.

State management is handled with [Redux](http://redux.js.org/). The [Actor pattern](http://jamesknelson.com/join-the-dark-side-of-the-flux-responding-to-actions-with-actors/) is used to watch the store and react to actions. The reducers are collected in [State/Store](src/State/Store.js). Middleware and actors are gathered in [State/Middleware](src/State/Middleware.js). Individual reducer/action bundles are kept in their own modules, like [State/User](src/State/User.js).

Routing is handled with [React Router](https://reacttraining.com/react-router/). The routes are collected in [Containers/Index](src/Containers/Index.js).

[Flow](https://flow.org/) is used for type checking, and interfaces for existing libraries are kept in [flow-typed](flow-typed).

## Installation

Use [Yarn](https://yarnpkg.com/en/) to install dependencies:

```sh
$ yarn
```

## Local Development

Several Yarn scripts are included to manage the local development environment. Run them by using the `yarn run` command, like this:

```sh
$ yarn run dev
```

* `dev` - Run the local development server with hot reloading.
* `build` - Run a production build, saving the results to `public/`.
* `test` - Run the tests with Jest.
* `test-watch` - Run the tests with Jest in watch mode.

## Functional Testing

Functional testing is handled via [Nightwatch.js](http://nightwatchjs.org/).
First install some prerequisites:

```sh
$ brew install selenium-server-standalone geckodriver chromedriver
```

Next, you'll need to have your local server running in a terminal tab:

```sh
$ yarn run dev
```

Now start up Selenium in another tab:

```sh
$ yarn run test-run-selenium
```

Then run the tests!

```sh
$ yarn run test-integration
```

## Copyright

Copyright 2017 Ecliptic, LLC
