 class Person {
    firstName = "";
    lastName = "";
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}