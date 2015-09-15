var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('browserify', function() {
 var b = browserify({
    entries: './src/js/main.js',
    debug: true,
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/public/*.*')
      .pipe(gulp.dest('dist/public'));
});

gulp.task('clean', function(callback){
  del.sync(['dist']);
});

gulp.task('default',['clean', 'browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
