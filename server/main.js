require("../pages/PageServer")(3000)
const net = require('net');    
const server = net.createServer();    
const JSONDuplexStream = require('json-duplex-stream');

const Gateway = require('./gateway')

server.on('connection', handleConnection);
const port = 8000
const ip = require("../util/BuildAddress")(port)


server.listen(port, function() {    
  console.log('TCP/IP server listening on', ip);  
});

function handleConnection(conn) {    
    const s = JSONDuplexStream();  
    const gateway = new Gateway();  

    conn.  
      pipe(s.in).  
      pipe(gateway).  
      pipe(s.out).  
      pipe(conn);

    s.in.on('error', onProtocolError);  
    s.out.on('error', onProtocolError);  
    conn.on('error', onConnError);

    function onProtocolError(err) {  
      conn.end('protocol error:' + err.message);  
    }  

  }
  function onConnError(err) {    
    console.error('connection error:', err.stack);  
  }

  