// simple recursive counting function
const counter  = (i, upto) => {
    if(i < upto) {
        console.log("counter", i, upto);
        counter(i+1, upto);
    }
}

// use counter to just print out 1-5
counter(1, 5);

// a more complex counter that can call a callback
const cb_counter = (i, upto, cb) => {
    if(i < upto) {
        cb(i, upto);
        cb_counter(i+1, upto, cb);
    }
}

// do the same thing but with a callback
cb_counter(1, 6, (i, j) => {
    console.log(i, j);
});

cb_counter(5, 10, (i, j) => {
    console.log(i, j);
});