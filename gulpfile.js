var gulp = require ("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync").create();
var uglify = require("gulp-uglify");
var del = require("del");

//компиляция стилей SCSS

function compilStyles() {
return gulp.src("./src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("./build/css"))
		.pipe(browserSync.stream());

}

//компиляция скриптов 

function compilScript() {
return gulp.src("./src/js/*.js")
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

//отслеживание изменений -> компил + сервер бровзерсинк

function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: true
    });

	gulp.watch("./src/sass/**/*.{scss, sass}", compilStyles);
	gulp.watch("./*.html").on('change', browserSync.reload);
}

//чисти

function clean() {
	return del(['build/*']);
}

//непосредственно таски

gulp.task("compilStyles", compilStyles);
gulp.task("compilScript", compilScript);
gulp.task("watch", watch);
gulp.task("clean", clean);


//билд: чистит билд и собирает заново стили и жс

gulp.task('build', gulp.series('clean', 
								gulp.parallel('compilStyles', 'compilScript')));


//девелопмент запускает билд, потом вотч (с сервером)

gulp.task('dev', gulp.series('build', 'watch'));