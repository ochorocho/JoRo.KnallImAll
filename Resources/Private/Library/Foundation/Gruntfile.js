module.exports = function(grunt) {
	// INCLUDE TASKS PREDEFINED TASKS / MODULES
	require('load-grunt-tasks')(grunt);
	
	// SHOW TIME FOR EACH TASK TO FINISH - MAKE COMPILING LOOK FANCY
	require('time-grunt')(grunt);

	// ARRAY FOR ALL YOUR JS FILES IN PAGE HEADER
	var jsLibs = ['bower_components/foundation/js/vendor/modernizr.js',
		'bower_components/foundation/js/vendor/fastclick.js',
		'js/header.js'];
	
	// ARRAY FOR ALL YOUR JS FILES JUST BEFORE CLOSING </BODY>-TAG
	var jsFoundation = [
		'bower_components/foundation/js/vendor/jquery.js',
		'bower_components/foundation/js/vendor/jquery.cookie.js',
		'bower_components/foundation/js/foundation/foundation.js',
		'bower_components/foundation/js/foundation/foundation.abide.js',
		'bower_components/foundation/js/foundation/foundation.accordion.js',
		'bower_components/foundation/js/foundation/foundation.alert.js',
		'bower_components/foundation/js/foundation/foundation.clearing.js',
		'bower_components/foundation/js/foundation/foundation.dropdown.js',
		'bower_components/foundation/js/foundation/foundation.equalizer.js',
		'bower_components/foundation/js/foundation/foundation.interchange.js',
		'bower_components/foundation/js/foundation/foundation.joyride.js',
		'bower_components/foundation/js/foundation/foundation.magellan.js',
		'bower_components/foundation/js/foundation/foundation.offcanvas.js',
		'bower_components/foundation/js/foundation/foundation.orbit.js',
		'bower_components/foundation/js/foundation/foundation.reveal.js',
		'bower_components/foundation/js/foundation/foundation.slider.js',
		'bower_components/foundation/js/foundation/foundation.tab.js',
		'bower_components/foundation/js/foundation/foundation.tooltip.js',
		'bower_components/foundation/js/foundation/foundation.topbar.js',
		'bower_components/gmap3/dist/gmap3.js',
		'bower_components/slick-carousel/slick/slick.js',
		'bower_components/dygraphs/dygraph-combined.js',
		'bower_components/motion-ui/motion-ui.js',
		'bower_components/jQuery-viewport-checker/src/jquery.viewportchecker.js',
		'bower_components/jquery-fullscreen/jquery.fullscreen.js'
		];
		

	// ARRAY FOR ALL YOUR CUSTOM JS FILES
	var jsApp = [
				'js/app.js',
				'js/_*.js'];

	// BASIC FILE TEMPLATES
	var appScss = '@import "settings";\n// @import "sprites";\n@import "foundation";';
	var settingsScss = '// GET SETTINGS FILE FROM HERE:\n// https://github.com/zurb/foundation/blob/master/scss/foundation/_settings.scss';
	
	// CONFIGURE YOUR TASKS HERE
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    	webfont: {
		    icons: {
		        src: ['bower_components/foundation-icon-fonts/svgs/*.svg','svg/*.svg'],
		        dest: '../../../Public/Fonts/',
		        destCss: '../../../Public/Styles',
		        options: {
				    templateOptions: {
				        baseClass: 'icon',
				        classPrefix: ''
				    }
		        }
		    }
		},
			
		// SASS COMPILER
		sass: {
			options: {
				includePaths: ['bower_components/foundation/scss','bower_components/motion-ui','bower_components/fotorama'],
// 				require: 'sass-css-importer'
			},
			dist: {
				options: {
					// CAN BE: nested, expanded, compact, compressed.
					outputStyle: 'expanded',
					sourceMap: false,
				},
				files: {
					'../../../Public/Styles/foundation.css': 'scss/app.scss'
				}
			}
		},

        autoprefixer:{
          dist:{
            files:{
              '../../../Public/Styles/foundation.css':'../../../Public/Styles/foundation.css'
            }
          }
        },
		// JAVASCRIPT VALIDATION
		jshint: {
			options: {
				//  CHANGE JSHINT SETTINGS IN FILE
				jshintrc: '.jshintrc'
			},
			all: ['Gruntfile.js', jsApp, 'js/header.js']
		},
		uglify: {
			dist: {
				options: {
					sourceMap: false,
					beautify: {
						width: 80,
						// MAKE JS FILES READABLE true/false
						beautify: false
					},
				},
				files: {
					// THE NAME AND LOCATION OF JS FILES TO BE WRITTEN to : from Array
					'../../../Public/JavaScript/header.js': [jsLibs],
					'../../../Public/JavaScript/foundation.js': [jsFoundation],
					'../../../Public/JavaScript/app.js': [jsApp]
				}
			},
			dev: {
				options: {
					sourceMap: true,
					beautify: {
						width: 80,
						// MAKE JS FILES READABLE true/false
						beautify: true
					},
				},
				files: {
					// THE NAME AND LOCATION OF JS FILES TO BE WRITTEN to : from Array
					'../../../Public/JavaScript/header.js': [jsLibs],
					'../../../Public/JavaScript/foundation.js': [jsFoundation],
					'../../../Public/JavaScript/app.js': [jsApp]
				}
			},
			my_target: {
				options: {
					beautify: true
				},
				files: {
					'dest/output.min.js': ['src/input.js']
				}
			},
			my_advanced_target: {
				options: {
					beautify: {
						width: 80,
						beautify: true
					}
				},
				files: {
					'dest/output.min.js': ['src/input.js']
				}
			}
		},

		// TRIGGER TASK TO RUN ON "grunt watch"
		watch: {
			sass: {
				files: 'scss/*.scss',
				tasks: ['sass','autoprefixer']
			},
			js: {
				files: [
				jsLibs, jsFoundation, '<%= jshint.all %>'],
				tasks: ['jshint', 'uglify:dev']
			}
		}
	});

	// SETUP TASK - CUSTOM TASK TO CREATE STRUCTURE
	grunt.registerTask('setup', 'Create files and folders.', function() {

		// CREATE FILES
		var appScssFile = 'scss/app.scss';
		if(!grunt.file.isFile(appScssFile)) {
			grunt.file.write(appScssFile, appScss);
			grunt.log.ok([appScssFile + ' created ...']);
		}
		var settingsScssFile = 'scss/_settings.scss';
		if(!grunt.file.isFile(settingsScssFile)) {
			grunt.file.write(settingsScssFile, settingsScss);
			grunt.log.ok([appScssFile + ' created ...']);
		}
		var headerJsFile = 'js/header.js';
		if(!grunt.file.isFile(headerJsFile)) {
			grunt.file.write(headerJsFile, '');
			grunt.log.ok([headerJsFile + ' created ...']);
		}
		var appJsFile = 'js/app.js';
		if(!grunt.file.isFile(appJsFile)) {
			grunt.file.write(appJsFile, '');
			grunt.log.ok([appJsFile + ' created ...']);
		}
	});

	// TASK SUMMARY
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['webfont','jshint', 'uglify:dist', 'sass','autoprefixer']);

};
