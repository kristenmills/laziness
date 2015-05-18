var gulp = require('gulp');

var del = require('del');
var source = require('vinyl-source-stream');
var deploy = require('gulp-gh-pages');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var reactify = require('reactify');
var stylus = require('gulp-stylus');

var paths = {
  scripts: './src/js/**/*.@(js|jsx)',
  js_main: './src/js/app.jsx',
  stylesheets: './src/stylesheets/main.styl',
  html: './src/**/*.html',
  build: './build/**/*'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build:stylesheets', function(){
  gulp.src(paths.stylesheets)
    .pipe(stylus())
    .pipe(gulp.dest('build/css'));
});

gulp.task('build:scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    debug: true
  });
  b.transform(function(f){ return reactify(f, {es6: true})}); // use the reactify transform
  b.add(paths.js_main);
  return b.bundle()
    .pipe(source('js/main.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build:html', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['build:scripts']);
  gulp.watch(paths.stylesheets, ['build:stylesheets']);
  gulp.watch(paths.html, ['build:html']);
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true
    }));
});

var deploy = require('gulp-gh-pages');

gulp.task('ghPages', function () {
  return gulp.src(paths.build)
    .pipe(deploy());
});

gulp.task('build', ['build:scripts', 'build:stylesheets', 'build:html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);