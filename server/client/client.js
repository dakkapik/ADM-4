const net = require('net');
const client = new net.Socket();
const port = 8000;
const host = "localhost";

client.connect(port, host, function() {
    console.log('Connected');
    // client.write("Hello From Client " + client.ad.dress().address);
    client.write(`{ "when": "2014-08-06T13:36:31.735Z", "type": "temperature", "reading": 23.4, "units": "C", "id": "5f18453d-1907-48bc-abd2-ab6c24bc197d" }`)
    client.write("\n")

});

client.on('data', function(data) {
    console.log('Server Says : ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});

client.on("error", function(err) {
    // if connection error, try to reconnect
    console.log("ERROR: ", err)
})