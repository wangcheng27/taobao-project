const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin')
const clean = require('gulp-clean')
const webserver = require('gulp-webserver')

// css任务
gulp.task('css', () => {
    return gulp
        .src('./src/css/**')
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 version", "iOS > 3", "Firefox > 2"]
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
});

//sass任务
gulp.task('sass', () => {
    return gulp
        .src('./src/sass/**')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 version", "iOS > 3", "Firefox > 2"]
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
})

// js任务
gulp.task('js', () => {
    return gulp
        .src('./src/js/**')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})


// html 任务
gulp.task('html', () => {
    return gulp
        .src('./src/pages/**')
        .pipe(htmlmin({
            removeEmptyAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        }))
        .pipe(gulp.dest('./dist/pages'))
})

// lib任务
gulp.task('lib', () => {
    return gulp
        .src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'))
})

// static任务
gulp.task('static', () => {
    return gulp
        .src('./src/static/**')
        .pipe(gulp.dest('./dist/static'))
})

// 创建一个clean任务
gulp.task('clean', () => {
    return gulp
        .src('./dist')
        .pipe(clean())
})

// 创建一个webserver
gulp.task('webserver', () => {
    return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'localhost',
            port: 8093,
            livereload: true,
            open: './pages/index.html',
            proxies:[
                {
                    source:'/login',
                    target:'http://127.0.0.1/taobao/login.php'
                },
                {
                    source:'/signin',
                    target:'http://127.0.0.1/taobao/signin.php'
                },
                {
                    source:'/list',
                    target:'http://127.0.0.1/taobao/list.php'

                },
                {
                    source:'/detial',
                    target:'http://127.0.0.1/taobao/detial.php'

                },
                {
                    source:'/cart',
                    target:'http://127.0.0.1/taobao/cart.php'

                },
            ]
        }))

})

// 创建一个watch任务
gulp.task('watch', () => {
    gulp.watch('./src/css/**', gulp.series('css'))
    gulp.watch('./src/sass/**', gulp.series('sass'))
    gulp.watch('./src/js/**', gulp.series('js'))
    gulp.watch('./src/pages/**', gulp.series('html'))
    gulp.watch('./src/lib/**', gulp.series('lib'))
    gulp.watch('./src/static/**', gulp.series('static'))
})

// 配置一个默认任务
gulp.task('default', gulp.series('clean', 'css', 'sass', 'js', 'html', 'lib', 'static', 'webserver', 'watch'))