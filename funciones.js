// Tipos de declaracion de funciones

// la forma tradicional
function add(a, b) {
  return a + b;
}

// valores por defecto en los parametros
function calcularImpuestos(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

calcularImpuestos(100);
calcularImpuestos(100, 0.25);
// funciones en variables
const square = function (x) {
  return x * x;
};

square(4);
// funciones callback
function micallback(a) {
  return a(4);
}

console.log(micallback(square));

// Arrow function
const getSum = (a, b) => a + b;
const square2 = (x) => x * x;

getSum(3, 6);
