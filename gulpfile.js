var gulp = require('gulp');

gulp.task('compile', function () {
	'use strict';
	var twig = require('gulp-twig');
	return gulp.src('src/views/index.twig')
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

gulp.task('default', ['compile'], function() {
	gulp.watch("src/views/index.twig", ['compile']);
});
