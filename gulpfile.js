var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var optimizejs = require('gulp-optimize-js');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');

gulp.task('default', ['buildJS', 'buildCSS'], function () {
});

gulp.task('buildJS', function () {
    return gulp.src('static/javascripts/**/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(optimizejs())
        .pipe(gulp.dest('dist/javascripts/'));
});

gulp.task('buildCSS', function () {
    return gulp.src('static/css/**/*.css')
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/stylesheet'));
});

