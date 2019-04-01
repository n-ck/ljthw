/* Callback hell */

const fs = require('fs');
   
   const read_file = (fname, cb) => {
     fs.stat(fname, (err, stats) => {
       if(err) {
         cb(null);
       } else {
         fs.open(fname, 'r', (err, fd) => {
           if(err) {
             cb(null);
           } else {
             let inbuf = Buffer.alloc(stats.size);
             fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer) => {
               if(err) {
                 cb(null);
               } else {
                 cb(buffer);
               }
             });
           }
         });
       }
     });
   }
   
   read_file('test.txt', (result) => {
     console.log(`Result is ${result.toString()}`);
   });