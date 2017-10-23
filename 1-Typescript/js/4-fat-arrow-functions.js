"use strict";
/*
JavaScript has first class functions.
This means that in JavaScript functions can be themselves be passed around like any other value,
even as arguments to other functions.
E.g. we can pass to the setTimeout function, a function, like so:
*/
setTimeout(function () {
    console.log("setTimeout called!");
}, 1000);
console.log('this was typed second');
/*
The function we pass as an argument to setTimeout is called an anonymous function because it
doesn’t have a name.
ES6 has introduced a slightly different syntax to define anonymous functions called the fat arrow
syntax, with it we can re-write the above as:
*/
setTimeout(function () {
    console.log('setTimeout called anonymously with a fat arrow syntax');
}, 2000);
console.log('after the fat arrow');
// If the function only contains one expression we can drop the braces and shorten even further to:
setTimeout(function () { return console.log('setTimeout called anonymously with a fat arrow syntax'); }, 2000);
/*
What if we wanted to pass an argument to the function?
We can re-write the below normal function to one that uses the fat arrow syntax:

let add = function(a,b) {
return a + b;
};
*/
// Can now be written as:
var add = function (a, b) { return a + b; };
console.log(add(7, 3));
// THIS
// Lets imagine we have an object with a function called sayLater, like so:
var obj = {
    name: "PATRICK",
    sayLater: function () {
        var self = this; // ES5 solution
        setTimeout(function () {
            console.log("" + self.name); //calling instance of this is not the obj but the function passsed to setTimeout
        });
    }
};
obj.sayLater();
/*
But in ES6 we can do better, if we use fat arrow functions the value of this inside a fat arrow
function will be the same as the value of this outside the fat arrow function.
It uses the value of this from the surrounding code for its context. i.e. whatever this points to in the
surrounding code, this will point to in the function body of the fat arrow function.
We can re-write our obj to use fat arrow syntax like so:
*/
var obj2 = {
    name: "mubuntu",
    sayLater: function () {
        var _this = this;
        console.log(this);
        setTimeout(function () {
            console.log(_this);
            console.log("" + _this.name);
        }, 4000);
    }
};
obj2.sayLater();
