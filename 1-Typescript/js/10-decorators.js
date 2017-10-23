"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//region simple no-argument decorators
/*
This is a new feature that will probably make it into the ES7 version of JavaScript, it’s not available
right now however even in the ES6 version.
However the functionality is available in TypeScript, so we can already make use it.
It allows us to decorate classes and functions, similar to annotations in java and decorators in
python.
*/
// @course is just a function: 
function course(target) {
    // first argument is the target
    // This is the thing the decorator is attached to, so for a class it’s going to be the function constructor
    // for that class, the under-the-hood implementation of a class
    Object.defineProperty(target.prototype, 'course', { value: function () { return "Angular 2"; } });
    // The details of the Object.defineProperty function are beyond the scope of this chapter. We use it to
    // add a function called course onto the class it decorates and for now this function just returns the
    // string "Angular 2".
}
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1 = __decorate([
        course
    ], Person1);
    return Person1;
}());
//endregion
var patler = new Person1('Patrick', 'Frison');
console.log(patler.course());
// region Decorators with arguments
// But how do we pass arguments to our decorator, like the way the @Component decorator works?
// We create a function that returns a decorator, like so:
function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: function () { return config.course; } } // 2
        );
    };
}
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    Person2.prototype.whoAreYou = function () {
        return "Hi i'm " + this.name();
    };
    Person2 = __decorate([
        Student({
            course: "angular4"
        })
    ], Person2);
    return Person2;
}());
//endregion 
var patman = new Person2('Patrick', 'Frison');
//noinspection TypeScriptUnresolvedFunction
console.log(patman.course());
