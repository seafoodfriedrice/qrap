var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
   pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
   replaceString: /\bgulp[\-.]/
 });

gulp.task('server', function() {
  plugins.connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('livereload', function() {
  return gulp.src('*.html')
    .pipe(plugins.watch(['*.html', 'css/*.css', 'js/*.js']))
    .pipe(plugins.connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['livereload']);
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.start('server', 'livereload', 'watch');
});
