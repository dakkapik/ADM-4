const fs = require("fs")

let i = 0;

fs.appendFile('m.json', "[", {encoding:'utf-8'}, c)

function c(err, data) {
    i++; 
    let d = `{ "id": ${i}, "timestamp":  "${Date.now()}", "value":  ${Math.random()} },`
    if(i < 10000) fs.appendFile('m.json',d,{encoding:'utf-8'}, c)
    else fs.appendFile('m.json', `{ "id": ${i}, "timestamp":  "${Date.now()}", "value":  ${Math.random()} }]` , {encoding:'utf-8'}, (err, data)=> {})
}

