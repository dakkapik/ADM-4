module.exports = (port) => {
    const express = require('express');
    const app = express();
    const http = require('http');
    const server = http.createServer(app);
    const { Server } = require("socket.io");
    const io = new Server(server);

    const ip = require("../util/BuildAddress")(port)
    // middleware
    app.use(express.static(__dirname + '/public'));

    app.get("/", (req, res) => {
        buildIndex()
            .then((data)=>res.send(data))
            .catch(err => console.err(new Error( err )))
    })

    server.listen(port, function() {
        console.log('HTTP server listening on: ' + ip);
    });
    return {front: app, server, io}
}

