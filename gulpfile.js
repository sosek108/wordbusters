var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var atImport = require("postcss-import")

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
    ];
    return gulp.src('./assets/postcss/main.css')
        .pipe(postcss([
            require('postcss-partial-import'),
            require('autoprefixer'),
            require('precss')
        ]))
        .pipe(gulp.dest('./wwwroot/css/'));
});
