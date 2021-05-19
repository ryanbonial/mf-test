# Microfrontend test project

## Project structure
* It is a monorepo
* The app consists of 3 microfrontends (mf) (`auth`, `dashboard`, and `marketing`) and a `container` that pulls them all together
* Each mf has a `config` folder that contains the webpack config in order to develop and build using [module federation](https://webpack.js.org/concepts/module-federation/)

## Interesting Areas
* MF app looks like a regular app
* app, index, bootstrap files
* Can develop locally
* ModuleFederationPlugin
* Shared dependencies
* Container Pulls it all together at build time
* Connected through render/mount
* Sharing state through callbacks
* Building on Netlify
