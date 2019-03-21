const var_sucks = () => {
    var var_scope = 10;
    let let_scope = 20;

    console.log(`>>> var_sucks before if: var=${var_scope}, let=${let_scope}`);

    if(true) {
        var var_scope = 100;
        let let_scope = 100;
        console.log(`>>> var_sucks inside if: var=${var_scope}, let=${let_scope}`);
    }

    console.log(`>>> var_sucks after if: $ var=${var_scope}, let=${let_scope}`);
}

// var_sucks();


/* ---------------- */


// puzzle: how small can you make this?

const build_adder = (left) => {
    // do I really need this variable?
    // let left_hand = left;
    return adder = (right) => {
        // do I really need the return?
        let result = left + right;
        return result;
    }
}

let add10 = build_adder(10);
let add20 = build_adder(20);

console.log(`test builder 3 + 10 == ${add10(3)}`);
console.log(`test builder 3 + 20 == ${add20(3)}`);
console.log(`test builder 13 + 10 == ${add10(13)}`);
console.log(`test builder 3 + 10 + 20 == ${add10(add20(3))}`);
