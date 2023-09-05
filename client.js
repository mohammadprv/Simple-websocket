
const socket = new WebSocket("ws://localhost:3000");


socket.onopen = () => {
    console.log("Websocket connection is opened!");
}

socket.onmessage = (event) => {
    const output = document.getElementById('output');
    output.innerText = event.data
}



const sendMessage = () => {
    const value = document.getElementById("messageInput").value;
    socket.send(value) 
}