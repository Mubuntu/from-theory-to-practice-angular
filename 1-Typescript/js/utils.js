"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(x) {
    return Math.pow(x, 2);
}
exports.square = square;
function patman() {
    console.log('ik ben ptrick frison');
}
exports.patman = patman;
function cow() {
    console.log("Moooooooh!");
}
exports.cow = cow;
function age() {
    console.log("as of " + Date() + " I am 23 years old.");
}
exports.default = age;
// zelfde als export {square: square, cow: cow} 
// destructuring made easy
