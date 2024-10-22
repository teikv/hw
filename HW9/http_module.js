var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('./HW9/index.html', 'utf8', function(err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
    });
}).listen(8080, function() {
    console.log('Server is listening on port 8080');
});