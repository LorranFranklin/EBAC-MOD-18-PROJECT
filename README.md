## Instalando `Grunt no projeto` na pasta do projeto digite:

```
npm install –-save-dev grunt
```

## Criando projeto de `npm` na pasta.

```
npm init
```

## Vamos ao `package.json` criar um novo `script`.

```
  "scripts": {
    "grunt": "grunt",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## O arquivo de configuração do `Grunt` é o `Gruntfile.js`.

## Criando arquivo `Gruntfile.js`

```
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.registerTask('olaGrunt', function () {
    const done = this.async(); // Marca a tarefa como assíncrona
    setTimeout(function () {
      console.log('Olá, Grunt!'); // Exibe uma mensagem no console
      done(); // Indica que a tarefa foi concluída
    }, 3000); // Aguarda 3 segundos antes de executar a função
  });

  grunt.registerTask('default', ['olaGrunt']); // Define a tarefa padrão como 'olaGrunt'

}
```

## iNSTALANDO O `LESS` NO `GRUNT`

```
npm install --save-dev grunt-contrib-less
```

## Criando as pastas `SRC` que irá conter `styles` e `scripts`

## Iniciando o git

## Instalando puglin com grunt para observar mudanças no project

```
npm install --save-dev grunt-contrib-watch
```

Vamos ao terminal:

```
npx grunt watch
```

## Instalando puglin replace com grunt

```
npm install --save-dev grunt-replace
```

Vamos ao terminal `npm run grunt replace:dev`

## instalando puglin para minificar HTML

```
npm install --save-dev grunt-contrib-htmlmin
```

Após isso feito precisaremos criar uma pasta temporaria chamaremos de `prebuild`

```
htmlmin: {
      dist: {
        options: {
          removeComments: true, // Remove HTML comments
          collapseWhitespace: true, // Collapse whitespace
        },
        files: [
          {
            "prebuild/index.html": 'src/index.html', // Minify index.html
          },
        ],
      },
    },
```

Vamos ao terminal:

```
npm run grunt htmlmin:dist
```
deve ficar assim:
```
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
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS', // Replace this with the actual pattern you want to match
              replacement: './styles/main.css', // Replace with the path to the CSS file
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
  });

  grunt.loadNpmTasks('grunt-contrib-less');   // Load the less task
  grunt.loadNpmTasks('grunt-contrib-watch'); // Load the watch task
  grunt.loadNpmTasks('grunt-replace'); // Load the replace task
  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Load the htmlmin task

  grunt.registerTask('default', ['less:development']); // Register the default task
  grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist']); // Register the build task
};
```

Após isso, vamos apagar a pasta temporaria.
## Instalando puglin para apagar pasta temporaria
```
npm install --save-dev grunt-contrib-clean
```