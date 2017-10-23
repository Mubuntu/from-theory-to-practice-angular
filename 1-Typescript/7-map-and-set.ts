// MAP & SET
// using Object as a Map
// In ES5 and below the only data structure we had to map keys to values was an Object, like so:
let obj = { key: "value", a: 1 }
console.log(obj.a); // 1
console.log(obj['key']); // "value"
// However it does have a few pitfalls.
// Inherited Objects
// Looping over objects with for-in also iterated over the inherited properties as well as the objects
// own properties, like so:
// let base = { a: 1, b: 2 };
// let obj = Object.create(base);
// obj[c] = 3;
// for (prop in obj) console.log(prop)
// a
// b
// c
/*
Object.create creates a new objects who’s prototype points to the passed in base
object. If it can’t find a requested property on obj, javascript then tries to search
the base object for the same property

Perhaps this is the behaviour you want? Or perhaps you only want to print out the keys that belong
to the current object?
With ES5 JavaScript to ensure you were looking at a property of the current object we need to use
the hasOwnProperty function, like so:

let base = { a: 1, b: 2 };
let obj = Object.create(base);
obj[c] = 3;
for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(prop)
    }
}
// c
*/
/*
Overriding Functions
If we are using Object as a dictionary then we could theoretically store a key of hasOwnProperty
which then leads to the code in the example above failing, like so:
*/
// let obj = {hasOwnProperty: 1};
// obj.hasOwnProperty("test");
// TypeError: Property 'hasOwnProperty' is not a function

// Map
// Map is a new data structure introduced in ES6 which lets you map keys to values without the
// drawbacks of using Objects.

// let map = new Map();
// map.set("A", 1);
// map.set("C", 2);
// map.set("B", 3);
// Or we could initialise the Map with a an array of key-value pairs, like so:
// let map = new Map([
// [ "A", 1 ],
// [ "B", 2 ],
// [ "C", 3 ]
// ]);
// The set method is also chainable, like so:
let map = new Map([
    ["APPLE", 1],
    ["ORANGE", 2],
    ["MANGO", 3]
]);
console.log(map.get('APPLE'));
console.log(map.has('A'));
for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}
// APPLE
// ORANGE
// MANGO
for (let entry of map.entries()) {
console.log(entry[0], entry[1]);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3