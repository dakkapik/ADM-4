const cheerio = require('cheerio');
const fs = require("fs");
const path = require("path");

module.exports = () => {
    return new Promise((resolve, reject) => {
        getPages().then(p=> {
            appendPages(p).then(html => {
                resolve(html);
            }).catch(err=> reject(err))
        }).catch(err=> reject(err))
    })
}

function getPages() { 
    return new Promise ((resolve, reject) => {
        fs.readdir(path.join(__dirname, "public/pages"), function(err, pn){
            //show error in the index page
            if (err) reject(err)
            resolve(pn)
        })
    })
}

function appendPages(htmlNames) {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/index.html", function (error, html) {
            if (error) {
              reject(error);
            }
            const $ = cheerio.load(html);
        
            htmlNames.forEach(name => {
                $('.list').append(`<li><a href="/pages/${name}">${name}</a></li>`)
            })
            resolve($.html())
        })
    }) 
}
