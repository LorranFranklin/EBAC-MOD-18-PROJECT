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
## Criando as pastas ```SRC``` que irá conter ```styles``` e ```scripts```

## Iniciando o git

