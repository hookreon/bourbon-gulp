var gulp = require('gulp'),
  sass = require('gulp-sass'),
  neat = require('node-neat').includePaths;
  autoprefixer = require('gulp-autoprefixer');
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename');
  gp_concat = require('gulp-concat');
  uglify = require('gulp-uglify');

var paths = {
  scss: './dev/sass/app.scss'
};

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + '/public' ));
  app.listen(8000, '0.0.0.0');
});

gulp.task('styles', function () {
  return gulp.src(paths.scss)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass({
        includePaths: ['styles'].concat(neat)
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function(){
  return gulp.src(['./dev/js/menu.js', './dev/js/slider.js', './dev/js/tweet.js'])
    .pipe(gp_concat('concat.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});


gulp.task('watch', function() {
  gulp.watch('./dev/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['express', 'watch', 'styles', 'scripts'], function(){});
