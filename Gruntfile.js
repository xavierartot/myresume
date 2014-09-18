module.exports = function(grunt) {
  grunt.initConfig({
   // less: {
   //   development: {
   //     options: {
   //       compress: true,
   //       yuicompress: true,
   //       optimization: 2
   //     },
   //     files: {
   //       // target.css file: source.less file
   //       "css/index.css": "less/main.less"
   //     }
   //   }
   // },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js']
    },
    //concat: {
    //  dist: {
    //    src: ['js/app.js'],
    //    dest: 'js/app.min.js'
    //  }
    //},
    //uglify: {
    //    my_target: {
    //      files: {
    //        'js/app.min.js': ['js/app.js']
    //      }
    //    }
    //},
    watch: {
      styles: {
        files: ['*.html', '<%= jshint.files %>'], // which files to watch
        tasks: ['jshint'],
        options: {
          //spawn: false,
          livereload: true
        }
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch', 'jshint']);
};
