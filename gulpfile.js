var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('twig', function () {
	var twig = require('gulp-twig');
	return gulp.src('src/views/*.twig')
			.pipe(twig({
					data: {
							title: 'Gulp and Twig',
							benefits: [
									'Fast',
									'Flexible',
									'Secure'
							]
					}
			}))
			.pipe(gulp.dest('./dist'));
});


gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
	browserSync.init({
			 server: {
					 baseDir: "dist/"
			 }
	 });
});

gulp.task('default', ['twig', 'sass', 'browser-sync'], function() {
	gulp.watch("src/views/*.twig", ['twig']);
	gulp.watch('src/scss/*.scss', ['sass']);

	// เมื่อไฟล์ html มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
	gulp.watch(['dist/*.html'], browserSync.reload);

});
