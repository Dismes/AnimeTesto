var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('assets/scss/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('assets/css'));
  });

gulp.task('js', function(){
    return gulp.src('../AnimeTesto/assets/js/*.js')
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('../AnimeTesto/assets/js/Final/'))
})

gulp.task('watch', function () {
    gulp.watch('../AnimeTesto/assets/scss/*.scss', ['sass']);
    gulp.watch('../AnimeTesto/assets/js/*.js', ['js']);
})

gulp.task('This', function () {
    console.log("Gulp.js");
});  