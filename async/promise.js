const miPromesa = new Promise((resolve, reject) =>{
    // Simular una tarea asincrona
    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve("Éxito");
        } else {
            reject("Error");
        }
    }, 2000);
});

// Consumir la promesa
miPromesa.then((resultado) => {
    console.log("Resultado: ", resultado); // Resultado
})
.catch((error) => {
    console.log("Error:", error);
});
