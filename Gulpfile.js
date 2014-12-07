'use strict';

var gulp      = require('gulp'),
    watch     = require('gulp-watch'),
    nodemon   = require('gulp-nodemon'),
    bs        = require('browser-sync'),
    reload    = bs.reload,
    karma     = require('karma').server,
    shell     = require('gulp-shell');

var paths = {
  scripts: ['client/app/**/*.js'],
  html: ['client/app/**/*.html', 'client/index.html'],
  styles: ['client/styles/style.css'],
  test: ['specs/**/*.js']
};

gulp.task('start', ['serve'], function() {
  bs({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000'
  });
});

gulp.task('jsx', shell.task([
  'jsx ' + __dirname + '/client/react ' + __dirname + '/client/app/react',
  'rm -r ' + __dirname + '/client/app/react/.module-cache'
]));

gulp.task('jsx-auto', ['jsx'], function(){
  watch(['client/react/**/*.js'], function(){
    gulp.start('jsx');
  });
});

gulp.task('karma', shell.task([
  'karma start'
]));

gulp.task('karma-auto', function(done){
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true,
    singleRun: false
  },done);
});

gulp.task('selenium', shell.task([
  'webdriver-manager start'
]));

gulp.task('e2e', shell.task([
  'protractor e2e/conf.js'
]));

gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});

gulp.task('default', ['start']);
