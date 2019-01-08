const argv = require("yargs")
    .command("listar", "Imprime las tablas de multiplicar en la consola.", {
        base: {
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10
        }
    })
    .help()
    .command("crear", "Crea un archivo en la subcarpeta tablas con la tabla deseada.", {
        base: {
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10
        }

    })
    .help()
    .argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let parametros = argv._;


for (let x = 0; x < parametros.length; x++) {
    switch (parametros[x]) {
        case "listar":
            listarTabla(argv.base, argv.limite);

            break;
        case "crear":
            crearArchivo(argv.base, argv.limite).then((estado) => {
                console.log(estado);
            }).catch(err => {
                console.log(err);
            });
            break;
    }
}

console.log(argv);