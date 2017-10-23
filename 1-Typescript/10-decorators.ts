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
    Object.defineProperty(target.prototype, 'course', { value: () => "Angular 2" })
    // The details of the Object.defineProperty function are beyond the scope of this chapter. We use it to
    // add a function called course onto the class it decorates and for now this function just returns the
    // string "Angular 2".
}
@course
class Person1 {

    constructor(private firstName, private lastName) {
    }
}
//endregion
let patler = new Person1('Patrick', 'Frison');
console.log(patler.course());
// region Decorators with arguments
// But how do we pass arguments to our decorator, like the way the @Component decorator works?
// We create a function that returns a decorator, like so:
function Student(config) { // 1
    return function (target) {
        Object.defineProperty(
            target.prototype,
            'course',
            { value: () => config.course } // 2
        )
    }
}
@Student({
    course: "angular4"
})
class Person2 {
    constructor(private firstName, private lastName) {
    }

    public name() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}
//endregion 
let patman = new Person2('Patrick', 'Frison');
//noinspection TypeScriptUnresolvedFunction
console.log(patman.course());