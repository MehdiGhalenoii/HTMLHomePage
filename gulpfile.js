const { series , watch , parallel , src , dest } = require('gulp');
const bs = require('browser-sync');
/*const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const image = require('gulp-image')*/

watch(['index.html','style/*','js/main.js'],reloadPage);

function reloadPage(cb){
    
    bs.reload();
    cb();

}

function browser(cb){

    return bs.init({

      server: "."

    });

}
/*
function autoprefixerFunc(cb){

	return src('dev/*.css')
	.pipe(sourcemaps.init())
	.pipe(uglifycss({
		'uglyComments' : true
	}))
	.pipe(concat('MedicalPlanet.css'))
	.pipe(sourcemaps.write('cssMap/'))
	.pipe(rename({ extname: '.min.css'}))
	.pipe(dest('assets/css'));

	cb();

}

function imageOptimazer(cb){

	return src(['dev/*.svg','dev/plants.png','dev/SocialMedia.png'])
	.pipe(image())
	.pipe(dest('dev/optImg/'));
	

}
*/
//exports.optImg = imageOptimazer;
//exports.autoprefixer = autoprefixerFunc;
exports.browser = browser;
//exports.clean = clean;