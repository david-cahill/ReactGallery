'use strict'
var gulp = require('gulp')
var babel = require('gulp-babel')
var webpack = require('webpack')
var webpackDistConfig = require('./webpack.dist.config.js')
gulp.task('babel', function() {
  return webpack(webpackDistConfig, function (err) {
    if (err) return console.error(err)
    return console.log('success')
  })
});

gulp.task('build', ['babel']);
gulp.task('default', ['babel']);