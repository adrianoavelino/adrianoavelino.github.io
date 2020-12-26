const gulp  = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

function server() {
  browserSync.init({
      server: "./"
  });

  gulp.watch("*.css").on('change', reload);
  gulp.watch("*.html").on('change', reload);
}

exports.server = gulp.series(server);
exports.default = gulp.series(server);
