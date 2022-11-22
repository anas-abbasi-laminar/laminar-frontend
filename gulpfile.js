const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const removeemptylines = require('gulp-remove-empty-lines');
const htmlmin = require('gulp-htmlmin');
const merge = require('merge-stream');
const sitemap = require('gulp-sitemap');
const replace = require('gulp-replace');

// HTML processing
gulp.task('html', function () {
    return gulp.src(['./src/*.html', './src/**/*.html', '!./src/**/_*.html'])
        .pipe(fileinclude())
        .pipe(removeemptylines())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));
});

// move files
gulp.task('move', function () {
    var assets = gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest('./dist/assets/'));
    var settings = gulp.src(['./src/.htaccess', './src/favicon.ico', './src/icon.svg', './src/robot.txt', './src/site.webmanifest', './src/browserconfig.xml'])
        .pipe(gulp.dest('./dist/'));
    return merge(assets, settings);
});

// generating sitemap
gulp.task('sitemap', function () {
    return gulp.src('./dist/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://lamin.ar'
        }))
        .pipe(replace('.html</loc>', '</loc>'))
        .pipe(gulp.dest('./dist/'));
});

// build package
gulp.task('build', gulp.series('html', 'move', 'sitemap'));

// watch for changes
gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', gulp.series(['html', 'sitemap', 'move']));
    gulp.watch('./src/assets/css/**/*.css', gulp.series(['html', 'sitemap', 'move']));
    gulp.watch('./src/assets/js/**/*.js', gulp.series(['html', 'sitemap', 'move']));
});

// default task
gulp.task('default', gulp.series('build', 'move', 'watch'));