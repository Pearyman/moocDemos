var http = require('http');
var fs = require('fs');
var request = require('request');

// 正常创建server的方法

// http
//     .createServer(function(req, res) {
//         fs.readFile('logo.png', function(err, data) {
//             if (err) {
//                 res.end('file not found');
//             } else {
//                 res.writeHeader(200, {
//                     'context-Type': 'text/html'
//                 });
//                 res.end(data);
//             }
//         });
//     }).listen(8090);



//  pipe

http
    .createServer(function(req, res) {
        // fs.createReadStream('logo.png').pipe(res);
        request('http://files-test.cim120.cn/hmp/p/f/500023/53ce0c686243cf623170eb34cc99462765da14e9_small.jpg').pipe(res);
    }).listen(8090);
