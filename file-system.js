const fs = require('fs'); //TODO: ver la otra forma con imports

const path = './data/inventors.json';

// cadena de texto
let inventorsStr = fs.readFileSync(path, 'utf-8');

// array de objetos
let inventors = JSON.parse(inventorsStr);

// TODO: escribir archivos
inventors.push({first: 'Juan', last: 'Peres', year: 1956});

// Create
fs.writeFileSync(path, JSON.stringify(inventors, null, " "));

// Ejercicio
// TODO: CRUD Inventors Create Read Update Delete (o el ABM)

//console.log(inventors.filter(inventor => inventor.first == 'Albert'));
