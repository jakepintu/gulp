import gulp from 'gulp';
import changed from 'gulp-changed-in-place';
import gulpEslint from 'gulp-eslint';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import { isProd, scripts as config } from './config';

export function esTranspile() {
  return (
    gulp
      .src(config.src)
      .pipe(plumber())
      // If you use it with gulp.watch, the second argument seems to be necessary.
      // https://www.npmjs.com/package/webpack-stream#usage-with-gulp-watch
      // eslint-disable-next-line global-require
      .pipe(gulpWebpack(require('../webpack.config.js'), webpack))
      .pipe(gulp.dest(config.dest))
  );
}

export function esLint() {
  return gulp
    .src(config.src)
    .pipe(changed({ firstPass: true }))
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpIf(isProd, gulpEslint.failAfterError()));
}

export const scripts = gulp.series(esLint, esTranspile);
