'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'js/ionicsight.js',

            ]
        },
        copy: {
            main: {
                expand: true,
                cwd: 'js/src/',
                src: ['**'],
                dest: 'js/dist/',
                filter: 'isFile'
            }
        },
        removelogging: {
            dist: {
                src: "js/dist/*.js" // Each file will be overwritten with the output!
            }
        },
        csslint: {
            lax: {
                /*options: {
                 csslintrc: '.csslintrc'
                 },*/
                src: ['css/style.css', 'css/media_query.css']
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: ['css/mobile.css','css/tablet.css','css/tablet-potrate.css','css/desktop.css'],
                dest: 'css/media_query.css'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["<%= pkg.devCSS %>"]
                },
                files: {
                    "css/style.css": "less/style.less",					
                    "css/media_query.css": "less/media_query.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/src/*'],
                tasks: ['copy'],  // ,'removelogging'
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['less/*'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
        },
        autoprefixer: {
            single_file: {
                options: {
                    browsers: ['> 0%']
                },
                src: 'css/style.css',
                dest: 'css/style.css'

            }
        },
        jsbeautifier: {
            files: [
                'js/ionicsight.js'
            ],
            options: {
                css: {
                    fileTypes: ['.less']
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    // Default task.
    grunt.registerTask('default', ['watch']);
};