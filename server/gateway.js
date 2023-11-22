var Transform = require('stream').Transform;

var defaultOptions = {    
  highWaterMark: 10,  
  objectMode: true  
};

class Gateway extends Transform {    
    constructor(options) {
        super()
        if (! (this instanceof Gateway)) {  
          return new Gateway(options);  
        }
        options = Object.assign({}, options || {});  
        options = Object.assign(options, defaultOptions);
        Transform.call(this, options);  
    }

    _transform(event, encoding, callback) {    
        if (! event.id) return handleError(new Error(`event doesn't have an id field`));
        pushToQueue(event, pushed);

        function pushed(err) {  
          if (err) {  
            handleError(err);  
          }  
          else {
            const reply = {  
              id: event.id,  
              success: true  
            };
            callback(null, reply);  
          }  
        }
      
        function handleError(err) {  
          var reply = {  
            id: event.id,  
            success: false,  
            error: err.message  
          };
          callback(null, reply);  
        }  
      }; 
} 

/// Fake push to queue
function pushToQueue(object, callback) {

    console.log(object)
    // add objects to queue to be processed

    setTimeout(callback, Math.floor(Math.random() * 1000));  
}

module.exports = Gateway;