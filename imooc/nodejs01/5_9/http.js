// 这里推荐使用webbench来测试网站性能

var http = require('http');
http
    .createServer(function(req, res) {
        res.writeHead(200, {
            'Content-type': 'text/plain'
        });
        res.write('hello world');
        res.end();
    }).listen(2016);
