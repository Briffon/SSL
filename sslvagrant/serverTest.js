var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

http.createServer(function (req, res) {
    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);

    if (filename.name == "") {
        filen = 'index'
    } else {
        filen = filename.name;
    }

    fs.readFile(filen + ".html", function (err, data) {
        console.log(data)
        res.writeHead('200');
        res.write('<script> var name="' + filen + '";</script>')
        res.end(data);
    });

}).listen('8080');