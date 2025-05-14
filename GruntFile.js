module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.registerTask('olaGrunt', function () {
    const done = this.async(); // Mark the task as asynchronous
    setTimeout(function () {  // Simulate an asynchronous operation
      console.log('Hello Grunt!');  // Log a message to the console
      done(); // Indicate that the task is complete
    }, 3000); // Wait for 3 seconds before logging the message
  });  

  grunt.registerTask('default', ['olaGrunt']);   // Register the default task
}