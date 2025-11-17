"use strict";

console.log("===== Q5 Hoisting Lab =====");

var score = 50;
function announce() { console.log("Game Started"); }
let status = "ready";
function startGame() { console.log(status); }

console.log(score);
announce();
startGame();

// Arrow version (NOT HOISTED)
const announce2 = () => console.log("Game Started (arrow)");
const startGame2 = () => console.log(status);

announce2();
startGame2();
