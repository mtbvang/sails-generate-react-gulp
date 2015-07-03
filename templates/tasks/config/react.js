/**
 * Compile JSX files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles jsx files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 */

module.exports = function(gulp, plugins, growl) {

	gulp.task('react:dev', function () {
    return gulp.src('assets/js/**/*.jsx')
        .pipe(plugins.react())
        .pipe(gulp.dest('.tmp/public/js'))
        .pipe(plugins.if(growl, plugins.notify({ message: 'react dev task complete' })));
	});
	
};