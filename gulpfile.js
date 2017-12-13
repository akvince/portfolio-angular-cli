'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');

gulp.task('concatCss', function () {
  return gulp.src('./src/assets/**/*.css')
    .pipe(concatCss("./styles.css"))
    .pipe(gulp.dest('./src'));
});

gulp.task('sass', function () {
  return gulp.src('./src/app/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
