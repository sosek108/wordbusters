var postcss = require('gulp-postcss');
var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('css', function () {
    return gulp.src('./assets/postcss/main.css')
        .pipe(postcss([
            require('postcss-partial-import'),
            require('autoprefixer'),
            require('precss')
        ]))
        .pipe(gulp.dest('./wwwroot/css/'));
});

gulp.task('js', function() {
    gulp.src('assets/js/*.js')
    .pipe(minify({
        ext:{
          min: '.js'
        }
    }))
    .pipe(gulp.dest('./wwwroot/js/'))
})

gulp.task('watch', function() {
    gulp.watch('assets/postcss/*', ['css'])
    gulp.watch('assets/js/*', ['js'])
});
