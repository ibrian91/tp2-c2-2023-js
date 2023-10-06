// Esperar o freezar la ejecución por 2 segundos
// Event Loop
setTimeout(() => {
    console.log('Hola Despues de 4 segundos');
    setInterval(() => {
        console.log('Hola cada 2 segundos');
    }, 2000);
    console.log("Que se ejecuta al final de todo....");
}, 4000);

// Hola mundo cada segundo solo 5 veces
// let i=0;
// const timerId = setInterval(() => {
//     console.log("Hola mundo ", i);
//     i ++;
//     if(i===5){
//         clearInterval(timerId);
//     }
// }, 1000);




