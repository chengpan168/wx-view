/**
 * Created by chengpanwang on 2017/6/19.
 */
const gulp = require('gulp')
const gulpUtil = require('gulp-util')
const watch = require('gulp-watch')
const less = require('gulp-less')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const px2rpx = require('wx-px2rpx')
const debug = require('gulp-debug')
const del = require('del')

const logger = gulpUtil.log

const SRC = './src'
const SRC_LESS = './src/**/*.less'
const SRC_JS = './src/**/*.js'
const SRC_WXML = './src/**/*.wxml'
const SRC_JSON = './src/**/*.json'
const SRC_ASSETS = './src/assets/**'

const DEST = './dist'

gulp.task('less', function () {
  var processors = [px2rpx()]
  //编译src目录下的所有less文件
  gulp.src([SRC_LESS]).
    pipe(debug()).
    pipe(less()).
    pipe(postcss(processors)).
    pipe(rename({
      extname: '.wxss'
    })).
    pipe(gulp.dest(DEST))
})

function copy (from, to = DEST) {
  gulp.src(from).pipe(debug()).pipe(gulp.dest(to))
}

gulp.task('copy', function () {
  copy('./src/assets/**', './dist/assets')
  copy('./src/**/*.wxml')
  copy('./src/**/*.js')
  copy('./src/**/*.json')
})

gulp.task('clean', function (cb) {
  del([DEST], cb)
})

gulp.task('watch', function () {
  watch(SRC_JS).pipe(debug()).pipe(gulp.dest(DEST))
  watch(SRC_WXML).pipe(debug()).pipe(gulp.dest(DEST))
  watch(SRC_JSON).pipe(debug()).pipe(gulp.dest(DEST))
  watch(SRC_ASSETS).pipe(debug()).pipe(gulp.dest('./dist/assets'))
  
  gulp.watch(SRC_LESS, ['less'])
})

gulp.task('dev', ['copy', 'less', 'watch'])

gulp.task('build', ['copy', 'less'])
