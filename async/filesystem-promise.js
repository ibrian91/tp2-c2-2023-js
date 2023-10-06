import fs from 'fs/promises';
const PATH_INVENTORJSON = '../data/inventors.json';

// 1.- Leer el archivo
fs.readFile(PATH_INVENTORJSON, 'utf-8')
    .then(data => {
        let inventors = JSON.parse(data);
        // 2.- Insertar un nuevo inventor
        inventors.push(
            {
                "_id": 110,
                "first": "Juan",
                "last": "Peres",
                "year": 1879
            });
        // 3.- Escribiendo el archivo
        return fs.writeFile(PATH_INVENTORJSON, JSON.stringify(inventors, null, ' '));
    })
    .then( () =>{
        console.log('Ya se escribio el archivo');
        return fs.readFile(PATH_INVENTORJSON, 'utf-8');
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

