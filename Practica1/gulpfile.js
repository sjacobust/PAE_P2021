let gulp = require('gulp');
let sass = require('gulp-sass');
let typescript = require('gulp-typescript');
let webserver = require('gulp-webserver');
const buildDir = 'dist/';

gulp.task('styles', function() {
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(`${buildDir}assets/`));
});


gulp.task('scripts', function() {
    let tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src()
    .pipe(tsConfig())
    .pipe(gulp.dest(`${buildDir}assets/scripts`));
});

gulp.task('html', function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest(buildDir));
});

gulp.task('serve', function() {
    return gulp.src(buildDir)
    .pipe(webserver({
        open: true,
        livereload: true
    }));
});

gulp.task('watch:html', gulp.series("html", function(done) {
    gulp.watch('src/**/*.html', gulp.series("html"));
    done();
}));

gulp.task('watch:styles', gulp.series("styles", function(done) {
    gulp.watch('src/**/*.scss', gulp.series("styles"));
    done();
}));

gulp.task('watch:scripts', gulp.series("scripts", function(done) {
    gulp.watch('src/**/*.ts', gulp.series("scripts"));
    done();
}));


gulp.task('build', gulp.parallel(['styles', 'scripts', 'html']));
gulp.task('default', gulp.parallel(['watch:styles', 'watch:scripts', 'watch:html', 'serve']));
