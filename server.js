const http = require('http');
const websocket = require('ws');

const server = http.createServer();
const ws = new websocket.Server({ server })


ws.on('connection', (socket, req) => {

    console.log("Client connected!");

    socket.on('message', (data) => {
        socket.send(data.toString())
    })


})



server.listen(3000, () => {
    console.log("Server is up and online...");
})