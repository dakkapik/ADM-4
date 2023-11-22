const express = require('express');
const server = express();
const buildIndex = require("./BuildIndex");

module.exports = (port) => {
    const ip = require("../util/BuildAddress")(port)
// middleware
server.use(express.static(__dirname + '/public'));

server.get("/", (req, res) => {
    buildIndex()
        .then((data)=>res.send(data))
        .catch(err => console.err(new Error( err )))
})

server.listen(port, function() {
    console.log('HTTP server listening on: ' + ip);
});

}

