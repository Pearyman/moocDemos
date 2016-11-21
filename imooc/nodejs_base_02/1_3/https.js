var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem')
};

https
    .createServer(options, function(req, res) {
        res.head(200);
        res.end('hello world');
    })
    .listen(9999);
