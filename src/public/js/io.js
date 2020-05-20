// Set up socket.io
const socket = io('http://localhost:3030'); //local host
// const socket = io('https://test.eauqtion-api.innovexsolutions.co.ke/'); //production host


function trySocket() {
    socket.emit('find', 'clients', { $limit: 2 }, (error, data) => {
        console.log(error || data);
    });

}
trySocket();

function getProducts() {                     //query
    socket.emit('find', 'auction-products', { $limit: 2, id: 2 }, (error, data) => {
        console.log(error || data);
    });

}

getProducts();

function listenProducts() {
    socket.on('created', 'auction-products', (error, message) => {
        console.log(message || error);
    });
}
listenProducts();

function categoryCreated() {
    socket.on('created', 'categories', (error, message) => {
        console.log(message || error);
    });
}

categoryCreated();