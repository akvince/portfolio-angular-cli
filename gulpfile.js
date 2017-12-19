'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('concatJS', function() {
  return gulp.src('./src/assets/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src/assets/js/'));
});

gulp.task('compressJS', function (cb) {
  pump([
        gulp.src('./src/assets/js/main.js'),
        uglify(),
        gulp.dest('./src')
    ],
    cb
  );
});

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

gulp.task('generateCss', ['sass', 'concatCss']);
