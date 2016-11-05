var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function () {

    return gulp.src('./assets/postcss/main.css')
        .pipe(postcss([
            require('postcss-partial-import'),
            require('autoprefixer'),
            require('precss')
        ]))
        .pipe(gulp.dest('./wwwroot/css/'));
});
gulp.task('watch', function() {
    gulp.watch('assets/postcss/*', ['css'])
})
