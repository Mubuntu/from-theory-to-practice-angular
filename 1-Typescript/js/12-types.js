"use strict";
// Core
var decimal = 6;
var done = false;
var color = "blue";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Function
var fun = function () { return console.log("Hello"); };
function returnNumber() {
    return 1;
}
// Void
function returnNothing() {
    console.log("Moo");
}
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var go;
go = Direction.Up;
// Class
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person;
var people;
// Any
var notsure = 1;
notsure = "hello"; // This is fine since we don't do type checking with any
// Type Assertion
var value = "Patrick Frison";
var length = value.length;
// Generics
var Audio = /** @class */ (function () {
    function Audio() {
    }
    return Audio;
}());
var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
var audioPost;
var videoPost;
