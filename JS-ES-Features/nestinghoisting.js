"use strict";

console.log("===== Q10 Nested Hoisting =====");

function outer() {
    console.log(count); // undefined due to hoisting
    var count = 5;

    function inner() {
        console.log(count); // undefined due to new hoisted variable
        var count = 10;
        console.log(count);
    }

    inner();
}
outer();

/* Arrow version uses lexical scope, so no shadowing */

function outerArrow() {
    var count = 5;
    const inner = () => console.log(count);
    inner();
}

outerArrow();
