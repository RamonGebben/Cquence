var gulp = require("gulp"),
uglify = require("gulp-uglify"),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src('./Cquence.js')
    .pipe(jshint())
    .pipe(jshint.reporter( stylish ));
});

gulp.task("compress", function(){
	gulp.src("./Cquence.js").pipe( uglify() ).pipe( gulp.dest("minified") );
});


gulp.task('ci', ['lint', 'compress']);
