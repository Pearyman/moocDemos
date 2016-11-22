var fs = require('fs');

fs.createReadStream('logo.png').pipe(fs.createWriteStream('1-logo.png'));
