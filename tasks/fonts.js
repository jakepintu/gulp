import gulp from 'gulp';

import { fonts as config } from './config';

export function fonts() {
  return gulp.src(config.src).pipe(gulp.dest(config.dest));
}
