const gulp = require ("gulp"); //taskrunner
const sass = require("gulp-sass"); //SASS compilator
const plumber = require("gulp-plumber"); //error detector
const browserSync = require("browser-sync").create(); //server
const del = require("del"); //deleter
const autoprefixier = require("gulp-autoprefixer"); //autoprefixer
const cleanCss = require("gulp-clean-css"); // css compresser
const imageMin = require("gulp-imagemin"); // image compresser
const svg = require("gulp-svgstore"); // svg compilator
const svgMin = require("gulp-svgmin"); // svg minimizer
const rename = require("gulp-rename"); // renamer
const htmlmin = require("gulp-html-minifier");
const csso = require("gulp-csso");
const terser = require("gulp-terser");

function copy() {
return gulp.src([
          "fonts/**/*.{woff,woff2,ttf,otf}",
     ], {
       base: "."
     })
     .pipe(gulp.dest("build"));
}

function minifyHtml() {
  return gulp
  	.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
};

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
		.pipe(gulp.dest("./build/css/"))
		.pipe(browserSync.stream());
}

function cssMin() {
	return gulp
    	.src('./build/css/style.css')
        .pipe(csso({
            restructure: true,
            debug: true
        }))
        .pipe(gulp.dest('./build/css/'));
}

function compilScript() {
	return gulp.src("./src/js/*.js")
		.pipe(terser())
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        },
    });

    gulp.watch("./fonts/*.{ttf, otf, woff, woff2}", copy);
	gulp.watch("./src/sass/**/*.{scss, sass}", compilStyles);
	gulp.watch("./src/*.html").on('change', minifyHtml);
	gulp.watch("./src/js/*.js").on('change', compilScript);
	gulp.watch("./src/*.html").on('change', browserSync.reload);
}

function compilImages() {
	return gulp.src('./src/images/**/*.*')
        	.pipe(imageMin({
        			optimizationLevel: 3,
        			progressive: true
        		}
        		))
        	.pipe(gulp.dest('build/images'))
}

function svgSprite() { 
	return gulp
			.src('./src/images/icon-*.svg')
			.pipe(svgMin())
			.pipe(svg())
			.pipe(rename("sprite.svg"))
			.pipe(gulp.dest("build/images"))
}

function clean() {
	return del(['build/*']);
}

gulp.task("compilStyles", compilStyles);
gulp.task("compilScript", compilScript);
gulp.task("watch", watch);
gulp.task("clean", clean);
gulp.task("compilImages", compilImages);
gulp.task("svgSprite", svgSprite);
gulp.task("copy", copy);
gulp.task("minifyHtml", minifyHtml);
gulp.task("cssMin", cssMin);

gulp.task('build', gulp.series('clean', 
			  gulp.parallel('compilStyles', 
							'compilScript', 
							'compilImages', 
							'svgSprite',
							'copy',
							'minifyHtml',
							), 'cssMin'));

gulp.task('dev', gulp.series('build', 'watch'));