


const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Es la opcion de listar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el multiplicador de la tabla'

    })
    .check((argv, options) => {
        //console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports={
    argv
}