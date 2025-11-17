"use strict";

function pyramid(limit = 5) {
    console.log("===== Q6 Pyramid Generator =====");
    for (let i = 1; i <= limit; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

pyramid(5);
