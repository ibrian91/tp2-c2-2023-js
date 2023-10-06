import fs from 'fs';

const PATH_INVENTORJSON = '../data/inventors.json';

// 1.- Leer el archivo inventors.json
fs.readFile(PATH_INVENTORJSON, 'utf-8', (error, data) => {
    if(!error){        
        // 2.- Insertar un nuevo inventor
        let inventors = JSON.parse(data);
        inventors.push(
            {
                "_id": 100,
                "first": "Juan",
                "last": "Peres",
                "year": 1879
            }
        );
        fs.writeFile(PATH_INVENTORJSON, JSON.stringify(inventors, null, ' '), (error) =>{
            if(!error){
                fs.readFile(PATH_INVENTORJSON, 'utf-8', (error, data) => {
                   if(!error) {
                        // 4.- Eliminar el inventor que inserté, escribir el archivo
                        let inventors = JSON.parse(data);
                        inventors.splice(inventors.findIndex(inventor => inventor._id == 100), 1);
                        fs.writeFile(PATH_INVENTORJSON, JSON.stringify(inventors, null, ' '), (error) =>{
                            if(!error){
                                // 5.- Leer nuevamente el archivo, sin el inventor
                                fs.readFile(PATH_INVENTORJSON, 'utf-8', (error, data) => {
                                    console.log(JSON.parse(data));
                                });
                            } 
                            else
                            {
                                console.log(error);
                            }
                        });
                   }
                   else{
                        console.log(error);
                   }
                });
            }
            else {
                console.log(error);
            }
        })
    }
    else
    {
        console.log(error);
    }
});


