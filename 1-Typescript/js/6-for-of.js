"use strict";
// FOR OF
// FOR & FOREACH
// We have a couple of ways of looping through Arrays in ES5 javascript.
// For one we have the classic for loop, like so:
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// With ES5 JavaScript we can also use the forEach method on the Array class, like so:
array.forEach(function (value) {
    console.log(value);
});
// 1
// 2
// 3
// It’s slightly shorter but has a few downsides:
// 1. You can’t break out of this loop using a break statement or move to the next iteration with
// continue.
// 2. You can’t return from the enclosing function using a return statement.
// FOR IN
// The for-in loop is designed for iterating over an objects properties, like so:
var obj = { a: 1, b: 2 };
for (var prop in obj) {
    console.log(prop);
}
// a
// b
// If we tried to use it with an array, it might initially look like it’s working:
var array = [10, 20, 30];
for (var index in array) {
    console.log(index);
}
;
// 0
// 1
// 2
// But if we tried to print out the type of index like so:
var array = [10, 20, 30];
for (var index in array) {
    console.log(typeof (index));
}
;
// string
// string
// string
/*
The index variable is a string and not a number, using for-in with arrays converts the index to a
string.
If you are expecting a number but in fact have a string this can cause problems, for example "1" + "2" is the string "12" and not the number 3.
*/
// FOR-OF LOOP
// Rather than change the way the for-in loops work in ES6 and in the process create a breaking
// change, instead in ES6 we have a new syntax called for-of.
var array = [10, 20, 30];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
// 10
// 20
// 30
// • This is the most concise way of looping through array elements.
// • It avoids all the pitfalls of for–in.
// • It works with break, continue, and return
// The for–of loop is for looping over the values in an array.
// for–of is not just for arrays. It also works on most array-like objects including the new Set and Map types. 
