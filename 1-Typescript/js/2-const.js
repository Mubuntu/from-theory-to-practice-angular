'use strict';
/*
We can use const to declare a variable but unlike let and var it must be immediately initialised, with
a value that can’t be changed afterwards.
If we try to declare it without initialising it we get a SyntaxError, like so:
*/
// const foo=1; // SyntaxError: Missing initializer in const declaration
// foo = 2;// TypeError: Assignment to constant variable
// const foo = {};
// foo = {}; // TypeError: Assignment to constant variable.
// But we can however mutate, make changes to, the object foo points to, like so:
/*
const foo = {};
foo['prop'] = "Moo"; // This works!
console.log(foo);
*/
/* If we want the value of foo to be immutable we have to freeze it using Object.freeze(…).
When we freeze an object we can’t change it, we can’t add properties or change the values of
properties, like so:
*/
var foo = Object.freeze({});
foo.prop = 123;
console.log(foo.prop); // undefined TypeError: Can't add property prop, object is not extensible
