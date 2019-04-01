/* Event Style */

const fs = require('fs');

const read_file = (fname, events) => {
    let noop = () => {};
    let onStat = events.onStat || noop;
    let onOpen = events.onOpen || noop;
    let onRead = events.onRead || noop;

    fs.stat(fname, (err, stats) => {
        onStat(stats);

        fs.open(fname, 'r', (err, fd) => {
            onOpen(fd);
            let inbuf = Buffer.alloc(stats.size);

            fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer) => {
                onRead(bytesRead, buffer);
            });
        });
    });
}

read_file('test.txt', {
    onRead: (bytesRead, buffer) => {
        console.log(`Read ${bytesRead} bytes: ${buffer.toString()}`);
    },
    onStat: (stat) => {
        console.log(`Go stats, file is ${stat.size} size.`);
    },
    onOpen: (fd) => {
        console.log(`Open worked, fd is ${fd}`);
    },
    onError: (err) => {
        console.log(`Error opening file: ${err}`);
    }
});