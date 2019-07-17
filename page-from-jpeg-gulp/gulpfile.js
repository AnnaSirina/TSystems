const {
    src,
    dest,
    task,
    series
} = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

sass.compiler = require('node-sass');

task("clean", () => {
    return src("dist/**/*", {
        read: false
    }).pipe(rm())
})

task("copy:html", () => {
    return src('src/*.html').pipe(dest('dist'))
});


task("styles", () => {
    return src("src/styles/main.scss")
        .pipe(sassGlob())
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("dist"));
});

task("default", series("clean", "copy:html", "styles"))