var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	less = require('gulp-less');

//watchers
gulp.task('watch', function() {
	gulp.watch('client/source/**/*.js', ['jshint']);
	gulp.watch('client/source/*.less', ['less']);
});

//gulp tasks
gulp.task('less', function() {
	return gulp.src('client/source/*.less')
		.pipe(less())
		.pipe(gulp.dest('client/public/stylesheets'));
});

gulp.task('jshint', function() {
	return gulp.src('client/source/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
});


//gulp commands
gulp.task('default', ['watch']);