var gulp = require ("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("sass", function () {
	gulp.src("sass/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("css"));
});