var $fs = require('fs');
var $path = require('path');

var $gulp = require('gulp');
var $gulpBrowserify = require('gulp-browserify');

$gulp.task('build', function() {
	$gulp.src([
		'./jquery-lib.js'
	]).pipe(
		$gulpBrowserify({
			debug: false
		})
	).pipe(
		$gulp.dest('./dist')
	);
});


$gulp.task('default', [
	'build'
]);