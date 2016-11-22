//这里就是一段拷贝的基本思路

// 数据流的读写
var fs = require('fs');

var readStream = fs.createReadStream('stream_copy_logo.js');
var writeStream = fs.createWriteStream('11-stream_copy_logo.js');


readStream.on('data', function(chunk) {
    writeStream.write(chunk);
    if (writeStream.write(chunk) === false) {
        console.log('still cached');
        readStream.pause();
    }
});

readStream.on('end', function() {
    writeStream.end();
});


writeStream.on('drain', function() {
    console.log('data drains');

    readStream.resume();
});
