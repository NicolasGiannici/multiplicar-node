const fs = require("fs");

let listarTabla = (base, limite) => {
    /* for (let x = 1; x <= limite; x++) {
         console.log(`${base} * ${x} = ${base*x}`);
     }*/
    console.log(crearTabla(base, limite));
}
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base) || Number(limite) == false) {
            reject(`El parametro ingresado no es un Numero.`);
            return;
        }
        tabla = crearTabla(base, limite);
        fs.writeFile(`tablas/tablaDe${base}.txt`, tabla, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Archivo guardado exitosamente. tablaDe${base}.txt `);
            }
        });
    });

}

function crearTabla(base, limite) {
    let data = "";
    for (let x = 1; x <= limite; x++) {
        data = data + `${base} * ${x} = ${base*x}\n`;
    }
    return data;
}


module.exports = {
    crearArchivo,
    listarTabla
}