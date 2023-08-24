// declaracion de arrays
let nombres = ["Pedro", "Juan", "Maria"];

// for (let index = 0; index < nombres.length; index++) {
//   const element = nombres[index];
//   console.log(element);
// }

// nombres.forEach((nombre) => {
//   console.log(nombre);
// });

// nombres.forEach((nombre) => console.log(nombre));

// larga
const mifuncioncallback = function (nombre) {
  console.log(nombre);
};
nombres.forEach(mifuncioncallback);

// Funciones son las que modifican al array
// inserta un elemento al final
nombres.push("Anna");
// inserta un elemento al principio
nombres.unshift("Pablo");
// sacar un elemento del principio
let primerNombre = nombres.shift();
// sacar un elemento del final
let finalNombre = nombres.pop();

let index = nombres.indexOf("Juan");

// split, genera un array
let stringNombres = "Juan,Maria,Pedro";
let arrayNombres = stringNombres.split(",");
console.table(arrayNombres);
// join, genera una cadena concatenada con un caracter separador
console.log(arrayNombres.join(";"));
