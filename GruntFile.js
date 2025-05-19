module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less', // Compile main.less to main.css
        },
      },
      production: {
        options: {
          compress: true, // Compress the CSS output
        },
        files: {
          'dist/styles/main.min.css': 'src/styles/main.less', // Compile and minify main.less to main.min.css
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('olaGrunt', function () {
    const done = this.async(); // Mark the task as asynchronous
    setTimeout(function () {  // Simulate an asynchronous operation
      console.log('Hello Grunt!');  // Log a message to the console
      done(); // Indicate that the task is complete
    }, 3000); // Wait for 3 seconds before logging the message
  });  

  grunt.registerTask('default', ['less:development']);   // Register the default task
  grunt.registerTask('build', ['less:production']);
}