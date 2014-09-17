// CUT HERE
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //tasks configuration
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/app/app.js', 'src/app/*.js'],
        dest: 'js/build.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
        // singleRun: true
        // browsers: ['PhantomJS'],
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['concat']
    }
  });


  //taks loading
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //tasks registration
  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('default', ['jshint', 'karma', 'concat']);

};
