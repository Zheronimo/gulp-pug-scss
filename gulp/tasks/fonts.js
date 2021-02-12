module.exports = function () {
    $.gulp.task('fonts', () => {
        $.gulp.src('src/static/fonts/**/*.ttf')
            .pipe($.gp.ttf2woff())
            .pipe($.gulp.dest('build/static/fonts/'));
        return $.gulp.src('src/static/fonts/**/*.ttf')
            .pipe($.gp.ttf2woff2())
            .pipe($.gulp.dest('build/static/fonts/'))
    });
};