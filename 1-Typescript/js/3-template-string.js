"use strict";
// With ES5 and ES6 we can specify a string with either the ' or " characters.
var single = "Hello World";
// But in ES5 if we wanted to make that string span multiple lines it quickly becomes a pain.
var double = 'hello ' +
    'world ' +
    'my ' +
    'name ' +
    'is ' +
    'patrick';
// If we wanted each line in the string to contain new line characters, matching how it was written,
// we had to remember to add \n to the end of each string.
var triple = 'hello\n' +
    'world\n' +
    'my\n' +
    'name\n' +
    'is\n' +
    'patrick\n';
// In ES6 we have another way of defining strings, using the back-tick character
var multi = "\nhello\nworld\nmy\nname\nis\npatrick";
console.log(multi);
/*
Variable Substitution
Another really interesting feature of declaring strings with ` is that they can now expand variables
using the ${variable_name} syntax, like so:
*/
var name = "patrick";
var multi2 = "\nhello\nworld\nmy\nname\nis\n" + name + "\n";
console.log(multi2);
