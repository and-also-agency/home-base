//==========================================//
// This file manages the CLI portion of
// Grunt task runner. This is the next step
// after the Generator has been completed.
//
// Created By: Dani & Sam
// Modified On: November 16, 2016 | Dani & Sam
// Version: 1.0.0
//==========================================//

module.exports = function( grunt ) {

  grunt.initConfig({

    //===================//
    // read dependencies //
    //===================//
    pkg : grunt.file.readJSON('package.json'),

    //========//
    // config //
    //========//
    project: {
      app   : 'app',
      prod  : 'dist',
      css   : 'app/css',
      scss  : 'app/scss',
      js    : 'app/js',
      img   : 'app/img'
    },

    // config : {
    //   ftp: {
    //     host: 'ip here',
    //     port: 'port here',
    //     dir : 'server directory here'
    //   }
    // },

    //======================================//
    // Copy files from one cycle to another //
    //======================================//
    copy: {
      //== Active Dev ==//
      deploy: {
        expand  : true,
        cwd     : '<%= project.app %>/',
        src     : [ 'css/**',
                    'js/**/*',
                    'img/**/*',
                    'fonts/**/*',
                    '**/*.html'
                  ],
        flatten : false,
        filter  : 'isFile',
        dest    : '<%= project.prod %>/'
      }
    },

    //================//
    // FTP to Staging //
    //================//
    'ftp-deploy': {
      build: {
        auth: {
          host    : '<%= config.ftp.host %>',
          port    : '<%= config.ftp.port %>',
          authkey : '<%= config.ftp.key %>'
        },
        src : '<%= project.prod %>',
        dest: '<%= config.ftp.dir %>'
      }
    },

    //=========================================//
    // Set up local web server, and livereload //
    //=========================================//
    connect: {
      dev: {
        options: {
          port:9001,
          hostname: '*',
          base:'<%= project.app %>/',
          open:true,
          livereload:35729
        }
      }
    },

    //===============//
    // SCSS compiler //
    //===============//
    //== The watch only needs to be on Dev as this folder ==//
    //== Is the only one where active Dev occurs.         ==//
    sass: {
      app: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= project.css %>/main.css' : '<%= project.scss %>/main.scss'
        }
      }
    },

    //==================//
    // PostCSS compiler //
    //==================//   

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: '<%= project.css %>/*.css'
      }
    },

    //==========================================//
    // File watch to trigger livereload on save //
    //==========================================//
    watch: {
      sass: {
        files: '<%= project.scss %>/**/*.scss',
        tasks: ['sass:app', 'postcss:dist']
      },
      // postcss {
      //   files: '<%= project.css %>/*.css',
      //   tasks: ['postcss:dist']
      // },
      livereload: {
        files: [
            '<%= project.app %>/**/*.html',
            '<%= project.css %>/*.css',
            '<%= project.scss %>/**/*.scss',
            '<%= project.js %>/**/*.js'
        ],
        options: {
          livereload: true
        },
      }
    }
  });

  //====================//
  // load grunt modules //
  //====================//
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  
  // grunt.loadNpmTasks('grunt-assemble');

  //=======================//
  // register task for CLI //
  //=======================//
  //== Active Development ==//
  grunt.registerTask('dev', [
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'copy:deploy'
  ]);

  //== FTP entire staging DIR to staging ==//
  grunt.registerTask('dev-ftp', [
    'ftp-deploy'
  ]);
};