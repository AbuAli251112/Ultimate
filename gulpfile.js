const gulp = require("gulp"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify"),
  notify = require("gulp-notify");

function html() {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
}

function css() {
  return gulp
    .src(["stage/css/**/*.scss", "stage/css/**/*.css"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
}

function js() {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
}

function watch() {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/js/*.js", gulp.series("js"));
  gulp.watch(["stage/css/**/*.scss", "stage/css/**/*.css"], gulp.series("css"));
  gulp.watch("stage/html/**/*.pug", gulp.series("html"));
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watch;
