import { parallel, series, watch } from 'gulp';
import { clean } from './tasks/clean';
import {
  fonts as fontsConfig,
  images as imagesConfig,
  sass as sassConfig,
  scripts as jsConfig,
  templates as templatesConfig,
} from './tasks/config';
import { fonts } from './tasks/fonts';
import { images } from './tasks/images';
import { scripts } from './tasks/scripts';
import { reload, serve } from './tasks/server';
import { styles } from './tasks/styles';
import { templates } from './tasks/templates';

/**
 * Monitor file changes
 */
function watchFiles() {
  // Sass
  watch(sassConfig.src, series(styles, reload));
  // Templates
  watch(templatesConfig.src, series(templates, reload));
  // JavaScript
  watch(jsConfig.src, series(scripts, reload));
  // Images
  watch(imagesConfig.src, series(images, reload));
  // Fonts
  watch(fontsConfig.src, series(fonts, reload));
}

/**
 * Build for development
 */
export const dev = series(
  clean,
  parallel(styles, templates, scripts, images, fonts),
  serve,
  watchFiles
);

/**
 * Build for production
 */
export const build = series(
  clean,
  parallel(styles, templates, scripts, images, fonts)
);
