// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8000");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send(`{ "when": "2014-08-06T13:36:31.735Z", "type": "temperature", "reading": 23.4, "units": "C", "id": "5f18453d-1907-48bc-abd2-ab6c24bc197d" }`);
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});