// With ES5 and ES6 we can specify a string with either the ' or " characters.
let single ="Hello World";
// But in ES5 if we wanted to make that string span multiple lines it quickly becomes a pain.
let double = 'hello ' +
'world ' +
'my ' +
'name ' +
'is ' +
'patrick';
// If we wanted each line in the string to contain new line characters, matching how it was written,
// we had to remember to add \n to the end of each string.
let triple = 'hello\n' +
'world\n' +
'my\n' +
'name\n' +
'is\n' +
'patrick\n';
// In ES6 we have another way of defining strings, using the back-tick character
let multi = `
hello
world
my
name
is
patrick`;
console.log(multi);
/* 
Variable Substitution
Another really interesting feature of declaring strings with ` is that they can now expand variables
using the ${variable_name} syntax, like so:
*/
let name = "patrick";
let multi2 = `
hello
world
my
name
is
${name}
`;
console.log(multi2);
