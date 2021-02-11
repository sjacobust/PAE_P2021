let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');
const buildDir = 'dist/';

gulp.task('styles', function() {
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(`${buildDir}assets/`));
});

gulp.task('html', function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest(buildDir));
});

gulp.task('scripts', function() {
    let tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest(`${buildDir}assets/scripts`));
});

gulp.task('default', gulp.series(['styles', 'scripts', 'html']));
