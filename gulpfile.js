var elixir = require('laravel-elixir');
require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('./tasks/ngHtml2Js.task.js');
require('./tasks/tinymce.task.js');
require('./tasks/clean.task.js');
require('laravel-elixir-livereload');
require('laravel-elixir-karma');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    var assets = [
            'public/js/partials.js',
            'public/js/vendor.main.js',
            'public/js/vendor.cms.js',            
            'public/css/vendor.main.css',
            'public/css/vendor.cms.css',
            'public/js/main.bundle.js',
            'public/js/cms.bundle.js',
            'public/css/app.css',                        
            'public/css/tinymcs_custom.css'
        ],
        karmaJsDir = [
            'public/js/vendor.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/ng-describe/dist/ng-describe.js',
            'public/js/partials.js',
            'public/js/app.js',
            'tests/angular/**/*.spec.js'
        ];

    mix
	    .clean()
        .bower()
        .angular('./angular/')
        .ngHtml2Js('./angular/**/*.html')
        .tinymce()
        .less('./angular/**/*.less', 'public/css')        
        .version(assets)
        .livereload('public/build/rev-manifest.json', {
            liveCSS: true
        })
        .karma({
            jsDir: karmaJsDir
        });
});
