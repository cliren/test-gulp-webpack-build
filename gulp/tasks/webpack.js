var path = require('path'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  gulpWebpack = require('gulp-webpack-build'),
  CONFIG_FILENAME = gulpWebpack.config.CONFIG_FILENAME,
  config = require('../config'),
  webpackOptions = {
    debug: true,
    devtool: '#source-map',
    watchDelay: 200
  },
  webpackConfig = {
    useMemoryFs: true,
    progress: true
  };

gulp.task('webpack', [], function() {
  return gulp.src(CONFIG_FILENAME, {base: path.resolve(config.src)})
    .pipe(gulpWebpack.configure(webpackConfig))
    .pipe(gulpWebpack.overrides(webpackOptions))
    .pipe(gulpWebpack.compile())
    .pipe(gulpWebpack.format({
      version: false,
      timings: true
    }))
    .pipe(gulpWebpack.failAfter({
      errors: true,
      warnings: true
    }))
    .pipe(gulp.dest(config.dest));
});