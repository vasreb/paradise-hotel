var gulp = require ("gulp"); //taskrunner
var sass = require("gulp-sass"); //SASS compilator
var plumber = require("gulp-plumber"); //error detector
var browserSync = require("browser-sync").create(); //server
var uglify = require("gulp-uglify"); // js compresser
var del = require("del"); //deleter
var autoprefixier = require("gulp-autoprefixer"); //autoprefixer
var cleanCss = require("gulp-clean-css"); // css compresser
var imageMin = require("gulp-imagemin"); // image compresser
var webp = require("gulp-webp"); // нужен дебильный win10
var svg = require("gulp-svgstore"); // svg compilator
var rename = require("gulp-rename"); // renamer

//style compilation SCSS

function compilStyles() {
return gulp.src("./src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass())

		.pipe(autoprefixier({
			browsers: ['> 0.1%'],
			cascade: false
		}))

		.pipe(cleanCss({
			level: 2
		}))


		.pipe(gulp.dest("./build/css"))
		.pipe(browserSync.stream());
}

//JS compil

function compilScript() {
return gulp.src("./src/js/*.js")
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

//if sass changed -> compilation + reload page (browsersync)

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

//img compresser

function compilImages() {
	return gulp.src('./src/images/*')
        	.pipe(imageMin({
        			optimizationLevel: 3,
        			progressive: true
        		}
        		))
      //  	.pipe(webp())
        	.pipe(gulp.dest('build/images'))
}

//compil svg sprite

function svgSprite() { 
	return gulp.src('./src/images/icon-*.svg')
			.pipe(svg({
				inlineSvg: true
			}))
			.pipe(rename("sprite.svg"))
			.pipe(gulp.dest("build/images/"))
}

//epifan

function clean() {
	return del(['build/*']);
}

//tasks

gulp.task("compilStyles", compilStyles);
gulp.task("compilScript", compilScript);
gulp.task("watch", watch);
gulp.task("clean", clean);
gulp.task("compilImages", compilImages);
gulp.task("svgSprite", svgSprite)

//build

gulp.task('build', gulp.series('clean', 
			  gulp.parallel('compilStyles', 
							'compilScript', 
							'compilImages', 
							'svgSprite')));


//devmode: build, after watch

gulp.task('dev', gulp.series('build', 'watch'));