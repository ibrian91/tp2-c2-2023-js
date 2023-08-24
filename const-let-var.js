// let vs var
// let es la forma mas recomendada de declarar variables desde ES6
// var sigue siendo soportado solo por los legacy
// el alcance de var es global siempre, mientras let es a nivel bloque

let x = 1;
if (x == 1) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 2
// var permite declarar variables mas de una vez, con el mismo alcance. Mientras que let no

// CONSTANTES
const a = 10;
// Siempre que se pueda, declarar como constante

// los objetos declarados como constantes no incluyen a las propiedades. Es decir pueden variar
const persona = { name: "wes", age: 45 };
persona.name = "Pablo";

// Nota: Object.freeze(persona)
// pero no me genera error.
