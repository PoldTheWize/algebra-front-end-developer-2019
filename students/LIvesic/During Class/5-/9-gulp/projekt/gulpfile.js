const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');


gulp.task('scripts', function(){
    return gulp.src('./main.js')
        .pipe(babel({presents: ['@babel/present-evn']}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('styles', function(){
    return gulp.src('./styles.scss')
    .pipe(sass())
    .pipe(cssnano())    
    .pipe(gulp.dest('dist'));
})

gulp.task('watch', function(){
    gulp.watch('./main.js', gulp.series('scripts'));
    gulp.watch('./styles.scss', gulp.series('styles'));
})

gulp.task('default', gulp.series('scripts', 'styles', 'watch'));