// DESTRUCTURING
// Destructuring is a way of extracting values into variables from data stored in objects and arrays.

// OBJECT DESTRUCTURING
const obj = { first: 'patrick', last: 'frison', age: 23 };
// We want to extract the first and last properties into local variables, prior to ES6 we would have to
// write something like this:
const f1 = obj.first;
const l1 = obj.last;
console.log(f1); // Patrick  
console.log(l1); // Frison
// With destructing we can do so in one line, like so:
const { first: f2, last: l2 } = obj;
console.log(f2);
console.log(l2);
/*
{first: f, last: l} describes a pattern, a set of rules for how we want to destructure an object.
 const {first: f} = obj; constant called f. translates to extract the property first and store in a
 constant called f.
 If we wanted to extract the properties into variables with the same name we would write it like so:
const {first: first, last: last} = obj;
console.log(first); // Patrick
console.log(last); // Frison
The above is quite a common use case for destructuring so it has a shortcut, like so
*/
// {prop} is short for {prop: prop}
const {first, last} = obj;
console.log('propper: ')
console.log(first); // Patrick
console.log(last); // Frison
// ARRAY DESTRUCTURING
// Array destructuring works in a similar way except it extracts based of the index in the array, like so:
const arr = ['a', 'b'];
const [x,y] = arr;
console.log(x);
console.log(y);
// FUNCTION PARAMETER DESTRUCTURING
// One really useful use case for destructuring is in function parameters.
// Typically if we want to pass multiple params to a function, with maybe some optional parameters,
// we would pass it in as an object like so:
function f(options) {
console.log(options.x);
}
f({x:1}); // 1
// Now we can define the function parameter list as an object destructure pattern, like so:
function f({x}){
    console.log(x);// Refer to x directly
}
f({x:3});
// Notice that in the function body above we can refer to x directly, we don’t have to refer to it through
// an object property like options.x.
// In addition to that when using destructured function parameters we can also provide default
// values, like so:
function f({x=0}) {
console.log(x);
}
f({}); // 0