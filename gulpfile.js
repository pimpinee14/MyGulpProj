var gulp = require('gulp');

gulp.task('compile', function () {
	'use strict';
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

/* ส่วนของ browserSync */
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	 browserSync({
			 server: {
					 baseDir: "dist/"
			 }
	 });
});

gulp.task('default', ['compile', 'browser-sync'], function() {
	gulp.watch("src/views/*.twig", ['compile']);

	// เมื่อไฟล์ html มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
	gulp.watch(['dist/*.html'], browserSync.reload);

});
