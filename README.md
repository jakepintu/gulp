# Gulp 4 + Webpack 4 + Babel + BrowserSync + Font Awesome 5

## Setup

- Install [Node](https://nodejs.org/)
- Optionally, also install [Yarn](https://yarnpkg.com/) or use _Npm_ that comes with Node pre-installed
- Install Gulp globally through `npm install -g gulp`
- Install Webpack globally through `npm install -g webpack`
- Fork this project
- Clone the forked project (Yours!)
- `cd` to the cloned project
- Install all [packages](./package.json) with `npm install` or `yarn install`

## Usage

- **Build the Project and Serve locally (for Development)** - `npm run dev` or `yarn dev`.
- **Build the Project (for Production)** - `npm run prod` or `yarn prod`.
- **List all the Gulp Tasks** - `npm run tasks` or `yarn tasks`

## Appendix

- **Tooling** - Gulpfile Lives in `gulpfile.babel.js` and Webpack config lives in `webpack.config.js`.
- **Source Files** - Lives in `src` folder
- **Compiled Files** - Lives in `public` folder. When you clone, you won't get them but as soon as you run those any of above usage tasks (dev/prod), the `public` will be created.
- **Gulp Tasks** - You can see all the gulp tasks in `tasks` folder and you can also see all the tasks in terminal as soon as you run `npm run tasks` or `yarn tasks`

## Performance (Lighthouse)

This is the result of performance tests (100%) within [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for Production Mode.
![00% Performance](https://raw.githubusercontent.com/jakepintu/gulp/master/assets/prod.png)

For Development mode it's 100% respectively
![00% Performance](https://raw.githubusercontent.com/jakepintu/gulp/master/assets/dev.png)
