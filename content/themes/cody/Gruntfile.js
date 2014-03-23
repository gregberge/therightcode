module.exports = function (grunt) {

  /**
   * Configuration.
   */

  grunt.initConfig({

    sass: {
      build: {
        options: {
          loadPath: [
            'bower_components/normalize.scss'
          ],
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'assets/sass',
          src: ['**/*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

    uglify: {
      build: {
        options: {
          preserveComments: 'some'
        },
        files: {
          'assets/js/main.js': 'assets/js/prism.js'
        }
      }
    }

  });

  /**
   * Npm Tasks.
   */

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /**
   * Custom tasks.
   */

  grunt.registerTask('build', 'Build assets.', ['sass:build', 'uglify:build']);
};