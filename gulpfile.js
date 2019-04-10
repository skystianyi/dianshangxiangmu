//gulp的配置文件
var gulp = require("gulp");//加载gulp模块
var connect = require("gulp-connect");//服务器模块
var sass = require("gulp-sass");//将sass文件转换成css文件的模块
var sourcemaps = require('gulp-sourcemaps');//让编译后的文件和源文件的关联的模块
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
//调用gulp的task方法创建任务
gulp.task("html",function(){
	gulp.src("*.html").pipe(gulp.dest("dist"));
})
//拷贝html
gulp.task("Test_copy",function(){
	gulp.src('*.html').pipe(gulp.dest("dist")).pipe(connect.reload());
});
gulp.task("html_copy",function(){
	gulp.src('html/*.html').pipe(gulp.dest("dist/html")).pipe(connect.reload());
});
//拷贝图片
 gulp.task("img_copy",function(){
	 gulp.src("img/**").pipe(gulp.dest("dist/img")).pipe(connect.reload());
 })
//拷贝js
 gulp.task("jsCopy",function(){
 	 gulp.src(["js/*.js"]).pipe(gulp.dest("dist/js")).pipe(connect.reload());
 });
 //拷贝sass
 gulp.task("css",function(){
 	gulp.src("css/*.css")
 	.pipe(sourcemaps.init())
 	.pipe(sass({outputStyle: 'compressed'}))
 	.pipe(sourcemaps.write())
 	.pipe(gulp.dest("dist/css")).pipe(connect.reload());
 }); 
 //实时监听
 gulp.task("default",["server","watch"]);
  /* //文件合并
 gulp.task("concat",function(){
	 gulp.src(["a.js","b.js"])
	 .pipe(concat("c.js"))
	 .pipe(gulp.dest("dist/js"));
 });*/


 //监听
 gulp.task("watch",function(){
 	 gulp.watch("*.html",["Test_copy"]);
 	  gulp.watch("sass/*.scss",["sass"]);
 	 gulp.watch("html/*.html",["html_copy"]);
 	 gulp.watch("img/**",["img_copy"]);
	  gulp.watch("js/*.js",["jsCopy"]);
	  gulp.watch("font/**",["fontCopy"]);
 });
 //开启本地服务
 gulp.task("server",function(){
	 connect.server({
		 root:"dist",
		 livereload:true
		 }
	 );
 });
