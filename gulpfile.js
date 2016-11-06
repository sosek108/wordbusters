var postcss = require('gulp-postcss');
var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('css', function () {
    return gulp.src('./assets/postcss/app.css')
        .pipe(postcss([
            require('postcss-partial-import'),
            require('autoprefixer'),
            require('precss'),
            require('postcss-nested'),
            require('postcss-css-variables')
        ]))
        .pipe(gulp.dest('./wwwroot/css/'));
});

gulp.task('js', function() {
    gulp.src('assets/js/*.js')
    .pipe(minify({
        ext:{
          min: '.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('./wwwroot/js/'))
})

gulp.task('vendor', function() {
    //Font Awesome
    gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('wwwroot/fonts/'));
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest('wwwroot/css/'));

    //JQuery
    gulp.src('node_modules/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('wwwroot/js/'));
});

gulp.task('watch', function() {
    gulp.watch('assets/postcss/*', ['css'])
    gulp.watch('assets/js/*', ['js'])
});

gulp.task('init', ['vendor', 'css', 'js']);
