// para tipar estructuras de datos, se puede usar typescript
// typescript --> traspila a javascript

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

// Ejercicios
// combinar estas funciones, es decir quiero los inventores nacidos antes de 1800 con el apellido en mayusculas

// 1. Imprimir en consola la coleccion de inventores en formato tabular
function print(inventors){
  console.log("Nombre      Apellido    Año");
  console.log("============================");
  inventors.forEach(
    inventor => console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`)
  );
}

// 2. Filtrar los inventores nacidos antes del 1800
// Por lo general se busca no cambiar los datos originales
//print(inventors.filter(inventor => inventor.year < 1800));

// 3. Convertir a mayusculas los apellidos
// print(
//   inventors.map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year}))
// );

// 4. Buscar el inventor Kepler y retornar el objeto
//console.log(inventors.find(inventor => inventor.last === "Kepler"));

// 5. ¿ Alguna de los inventores nacio en 1858?  <- IsNacidoEn()
//console.log(inventors.some(inventor => inventor.year === 1858));

// 6. ¿ Todos los inventores nacieron despues de 1500 ? 
//console.log(inventors.every(inventor => inventor.year > 1500));

// 7. Ordenar los inventores por fecha nacimiento
print(inventors.sort((a,b) => a.year - b.year));

print(inventors.sort((a,b)=> {
  if(a.last > b.last){
    return 1;
  }
  else {
    return -1;
  }
}));







