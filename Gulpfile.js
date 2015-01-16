var gulp=require("gulp"),
uglify = require("gulp-uglify");


gulp.task("compress", function(){
	gulp.src("Cquence.js").pipe( uglify() ).pipe( gulp.dest("minified") )
});