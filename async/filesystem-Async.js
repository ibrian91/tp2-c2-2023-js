const fs = require("fs");
const PATH_USERJSON = "../data/users.json";

fs.readFile(PATH_USERJSON, "utf-8", (err, data)=>{
    if(!err){
        console.log(data);
    } else {
        console.log("Error en la lectura");
    }
});

console.log('Termino de leer el archivo???');


// TODO: Utilizando el modelo asyn de lectura de archivos:
// Leer el json users.json
// Insertar un user
// Actualizar ese user
// Borrar ese user
