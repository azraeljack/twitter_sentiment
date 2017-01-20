var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var optimizejs = require('gulp-optimize-js');

gulp.task('default', ['buildJS'], function () {
});

gulp.task('buildJS', function () {
    return gulp.src('static/javascripts/**/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(optimizejs())
        .pipe(gulp.dest('static/dist/javascripts/'));
});

gulp.task('buildCSS', function () {
    return gulp.src('static/css/**/*.css')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(optimizejs())
        .pipe(gulp.dest('static/dist/css/'));
});
