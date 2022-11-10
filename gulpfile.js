const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const removeemptylines = require('gulp-remove-empty-lines');
const htmlmin = require('gulp-htmlmin');
const merge = require('merge-stream');
const sitemap = require('gulp-sitemap');

// HTML processing
gulp.task('html', function () {
    return gulp.src(['./src/*.html', './src/**/*.html', '!./src/**/_*.html'])
        .pipe(fileinclude())
        .pipe(sitemap({
            siteUrl: 'https://lamin.ar'
        }))
        .pipe(removeemptylines())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));
});

// move files
gulp.task('move', function () {
    var assets = gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest('./dist/assets/'));
    var settings = gulp.src(['./src/.htaccess', './src/favicon.ico', './src/icon.svg', './src/robot.txt', './src/site.webmanifest'])
        .pipe(gulp.dest('./dist/'));
    return merge(assets, settings);
});

// build package
gulp.task('build', gulp.parallel('html', 'move'));

// watch for changes
gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', gulp.series(['html', 'move']));
    gulp.watch('./src/assets/css/**/*.css', gulp.series(['html', 'move']));
    gulp.watch('./src/assets/js/**/*.js', gulp.series(['html', 'move']));
});

// default task
gulp.task('default', gulp.series('build', 'move', 'watch'));