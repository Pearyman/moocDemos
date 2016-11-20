var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '测试一次',
    'cid': 348
});

var options = {
    // your request headers
};


var req = http.request(options, function(res) {
    console.log(res.statusCode);
    console.log('headers :' + JSON.stringify(res.headers));

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function() {
        console.log('finish');
    });

    res.on('error', function(e) {
        console.log(e.message);
    });


});

req.write(postData);

req.end();
