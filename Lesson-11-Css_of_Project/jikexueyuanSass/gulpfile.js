var gulp = require('gulp');

var imagemin = require('gulp-imagemin'), //压缩图片
    cssmin = require('gulp-minify-css'), //压缩css
    uglify = require('gulp-uglify'), //压缩js
    htmlmin = require('gulp-htmlmin'), //压缩html
    sass = require('gulp-sass'), //编译sass
    autoprefixer = require('gulp-autoprefixer'), //自动补全css样式前缀
    browserify = require('gulp-browserify'), //管理js依赖
    concat = require('gulp-concat'), //合并文件
    rename = require('gulp-rename'), //重命名
    rev = require('gulp-rev'), //对文件名加md5后缀
    revCollector = require('gulp-rev-collector'), //路径替换
    browserSync = require('browser-sync').create(); //浏览器同步
var reload = browserSync.reload; //自动刷新
var clean = require('gulp-clean'); //清除文件
var runSequence = require('run-sequence'); //用于按顺序执行gulp任务的插件

/******************开发环境 gulp dev*************************/

//sass编译
gulp.task('sass', function() {
    return gulp.src('./app/stylesheets/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 30 versions'],
            cascade: true, //是否美化属性值 默认：true
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./app/stylesheets/css'))
        .pipe(reload({
            stream: true
        })); //在需要自动刷新任务处添加词语会自动刷新浏览器
});

//合并压缩css
gulp.task('css', function() {
    return gulp.src('./app/stylesheets/css/*.css')
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./app/stylesheets/css'))
        .pipe(reload({
            stream: true
        })); //在需要自动刷新任务处添加词语会自动刷新浏览器
})

//合并压缩js
gulp.task('scripts', ['libs'], function() {
    gulp.src('./app/script/jike.js')
        .pipe(browserify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./app/script/'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('./app/script/'))
        .pipe(reload({ stream: true }));
})

//lisb任务

gulp.task('libs', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'])
        .pipe(gulp.dest('./app/script/'))
})

//监听任务
gulp.task('watch', function() {
    gulp.watch('./app/stylesheets/sass/*.scss', ['sass']);
    gulp.watch('./app/stylesheets/css/*.css', ['css']);
    gulp.watch('./app/script/*.js', ['scripts']);
})

gulp.task('dev', function() {

    //按顺序执行gulp任务
    runSequence('sass', ['css', 'scripts'], 'watch');
    browserSync.init({
        server: './app'
    });
    gulp.watch([
        './app/**/*.*'
    ]).on('change', reload);
});


/**************产品上线，文件合并，压缩，加MD5后缀，更改路径,gulp release***********************/

//图片压缩加上MD5戳
gulp.task('imagemin', function() {
    return gulp.src('./app/images/*.{png,jpg,gif,jpeg,ico}')
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./dist/images'))
        .pipe(rev.manifest('images.json'))
        .pipe(gulp.dest('./rev'))
})


//css加MD5戳
gulp.task('cssMD5', function() {
    return gulp.src('./app/stylesheets/css/all.min.css')
        .pipe(rev()) //加md5
        .pipe(gulp.dest('./dist/stylesheets/css'))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest('./rev'))
});

//js加MD5戳
gulp.task('jsMD5', function() {
    gulp.src('./app/script/all.min.js')
        .pipe(rev())
        .pipe(gulp.dest('./dist/script'))
        .pipe(rev.manifest('script.json'))
        .pipe(gulp.dest('./rev'))
});

//更改css，js文件中的图片名称
gulp.task('imagesrev', function() {
    return gulp.src(['./rev/images.json', './dist/stylesheets/css/*'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist/stylesheets/css'));
});
gulp.task('jsimagerev', function() {
    return gulp.src(['./rev/images.json', './dist/script/*'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist/script'));
});

//压缩html
gulp.task('htmlminfy', function() {
    return gulp.src('./app/index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
});

//更改html中的图片名称、js、css路径
gulp.task('htmlrev', function() {
    return gulp.src(['./rev/*.json', './dist/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist'));
});

//清空发布根目录文件
gulp.task('clean', function() {
    return gulp.src(['dist', 'rev'], { read: false })
        .pipe(clean());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./dist"
    });
})
gulp.task('default', ['clean'], function() {
    runSequence('clean', ['css', 'scripts', 'imagemin'], ['cssMD5', 'jsMD5', 'htmlminfy'], ['imagesrev'], ['htmlrev'], ['serve']);
});
