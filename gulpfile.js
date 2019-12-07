const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    terser = require('gulp-terser'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');
    browserSync = require('browser-sync');

    var plumberErrorHandler = {
   errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
   })
};

gulp.task('sass', function() {
   gulp.src('./sass/*.scss')
      .pipe(plumber(plumberErrorHandler))
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(cssnano())
      .pipe(gulp.dest('./build/css'))
});

gulp.task('scripts', function(){
    gulp.src('./js/*/*.js', './js/vendor/*.js')
      .pipe(terser())
      .pipe(gulp.dest('./build/js'))
});

gulp.task('img-op', function(){
   gulp.src('./images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/images'))
})

gulp.task('browser-sync', function(){
   browserSync.init({
      server: {
         baseDir: "./"
      }
   });
   gulp.watch(['build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
});

gulp.task('watch', function(){
   gulp.watch('sass/*.scss', gulp.series('sass'));
   gulp.watch('js/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('img-op', 'sass','scripts','watch', 'browser-sync'));
