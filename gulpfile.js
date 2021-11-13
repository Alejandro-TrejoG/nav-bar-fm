const gulp = require('gulp'); //Cargamos nuestro modulo gulp
const sass = require('gulp-sass')(require('sass')); //Cargamos el modulo gulp sass

function css() {
    return gulp.src('scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css/'));
}

function watchArchivos() {
    return gulp.watch("scss/**/*.scss", css);
}

exports.css = css;
exports.watchArchivos = watchArchivos;

