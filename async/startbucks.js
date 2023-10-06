// simular la línea de pedidos de startbuck, se realiza en forma asincrona
function pedidoStarbucks(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Cafe Vanilla':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
        default:
            break;
    }
}
// linea de pedidos
const pedido1 = {tipo: "Cafe Vanilla", cliente: "Juan"};
const pedido2 = {tipo: "Te helado", cliente: "Maria"};

pedidoStarbucks(pedido1, (cliente) => {
    console.log("Pedido completo llamar a:", cliente);
});
pedidoStarbucks(pedido2, (cliente) => {
    console.log("Pedido completo llamar a:", cliente);
})

// Quien va recibir primero su pedido Juan o Maria?