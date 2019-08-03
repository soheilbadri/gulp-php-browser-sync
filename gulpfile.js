var gulp = require('gulp');
var php = require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// to select from multiple ip in your system
var devip = require('dev-ip');
var ip = devip();
// which is third one in my system
ip = ip[2];


// Watch everything
gulp.task('default', function () {
    
    php.server({
        // a standalone PHP server that browsersync connects to via proxy
        port: 8000,
        keepalive: true,
        base: "./"
    });

    browserSync.init({
        proxy: 'localhost:8000',
        port: 8000,
        host: ip
    });


    gulp.watch('**/*').on('change', reload);
});

// Default task (runs at initiation: gulp --verbose)
// gulp.task('default', gulp.series('watch'));
