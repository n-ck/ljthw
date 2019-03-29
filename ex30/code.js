const fs = require('fs');

    const read_file = (fname, cb) => {
        fs.stat(fname, (err, stats) => {
            fs.open(fname, 'r', (err, fd) => {
                let inbuf = Buffer.alloc(stats.size);
                fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer) => {
                    cb(buffer);
                });
            });
        });
    }

    read_file('test.txt', (result) => {
        console.log(`Results is ${result.toString()}`);
    });