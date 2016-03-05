'use strict';
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("babel", function() {
  return gulp.src('src/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('build', ['babel']);
gulp.task('default', ['babel']);