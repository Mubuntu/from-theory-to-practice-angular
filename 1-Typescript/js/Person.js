"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = "";
        this.lastName = "";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi i'm " + this.name();
    };
    return Person;
}());
