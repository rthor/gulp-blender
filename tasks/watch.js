
module.exports = function(gulp) {

  gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['scripts']);
    gulp.watch('src/views/**/*.jade',['templates']);
    gulp.watch('src/img/**/*.{png,gif,jpg,jpeg,svg}',['images']);
  });

};
