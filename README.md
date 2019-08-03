# gulp-php-browser-sync

# 1. Installing node.js
Install node.js on Windows and test it in command prompt using code below.
```
npm --version
```
# 2. Initialation of Package
In **cmd** goto to your project folder using *cd* command and run code below:
```
npm init
```
# 3. Package Details
Fill in package name, version, description author and so on and hit enter.

# 4. Installing Gulp globaly
Run this code:
```
npm install -g gulp
```
And check the version:
```
gulp --version
```
# 5. Installing Gulp on project
```
npm install -save-dev gulp
```
# 6. Installing browser-sync
```
npm install -save-dev browser-sync
```
# 7. Installing gulp-connect-php
```
npm install -save-dev gulp-connect-php
```
# 8. Create gulpfile.js
In your project folder, create gulpfile.js and write below code in it.
```javascript
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

```
# 9. Run gulp
In **cmd** run code:
```
gulp
```
