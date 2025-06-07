const { task } = require('grunt');

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
    watch: {
      less: {
        files: ['src/styles/**/*.less'], // Watch all .less files in the src/styles directory
        tasks: ['less:development'], // Run the development task when a .less file changes
      },
      html: {
        files: ['src/index.html'], // Watch index.html for changes
        tasks: ['replace:dev'], // Run the replace task when index.html changes
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS', // Replace this with the actual pattern you want to match
              replacement: './styles/main.css', // Replace with the path to the CSS file
            },
            {
              match: 'ENDERECO_DO_JS', // Replace this with the actual pattern you want to match
              replacement: '../src/scripts/main.js', // Replace with the path to the JS file
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dev/',
          }, // Replace in index.html
        ],
      },
      dist: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS', // Replace this with the actual pattern you want to match
              replacement: './styles/main.min.css', // Replace with the path to the CSS file
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['prebuild/index.html'],
            dest: 'dist/',
          }, // Replace in index.html
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true, // Remove HTML comments
          collapseWhitespace: true, // Collapse whitespace
        },
        files: [
          {
            'prebuild/index.html': 'src/index.html', // Minify index.html
          },
        ],
      },
    },
    clean: ['prebuild'],
  });

  grunt.loadNpmTasks('grunt-contrib-less');   // Load the less task
  grunt.loadNpmTasks('grunt-contrib-watch'); // Load the watch task
  grunt.loadNpmTasks('grunt-replace'); // Load the replace task
  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Load the htmlmin task
  grunt.loadNpmTasks('grunt-contrib-clean');  // Load the clean task

  grunt.registerTask('default', ['less:development']); // Register the default task
  grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']); // Register the build task
};
