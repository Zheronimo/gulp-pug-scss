module.exports = function () {
    $.gulp.task('otf2ttf', () => {
        return $.gulp.src('src/static/fonts/**/*.otf')
            .pipe($.gp.fonter({
                formats: ['ttf']
            }))
            .pipe($.gulp.dest('src/static/fonts/'))
    });
};