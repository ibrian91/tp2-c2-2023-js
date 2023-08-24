// Operadores de igualdad
// (==) y (===)

console.log(1 == 1);    // true
console.log("1" == 1);  // true
console.log(0 == false); // true
console.log("1" == true); 
console.log(0 == undefined);
console.log(null == undefined ); // if(error) 

// (===) igualdad verificando tipo
console.log("triple igual");
console.log(1 === 1);    // true
console.log("1" === 1);  // false
console.log(0 === false); // false
console.log("1" === true); // false
console.log(0 === undefined); // false
console.log(null === undefined ); // if(error) 

// Valores falsos
// false, undefined, null, 0, NaN, '' (cadena vacia)
// es importante porque el valor que estamos evaluando puede venir de una api

// if(error){
//     // cuando haya algun error
// } else {
//     // cuando no haya error
// }

// operador ternario de if (?:)
let d = 2;
d % 2 == 0 ? console.log("Es par"): console.log("Es impar");
