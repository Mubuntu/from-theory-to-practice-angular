"use strict";
// Promises
//#region callbacks
// When you execute a task synchronously, you wait for it to finish before moving on to the next line
// of code.
// When you execute a task asynchronously, the program moves to the next line of code before the
// task finishes.
// Think of synchronous programming like waiting in line and asynchronous programming like
// taking a ticket. When you take a ticket you can go do other things and then be notified when ready.
// Callbacks
// One way to program asynchronously is to use callbacks. We pass to an asynchronous function a
// function which it will call when the task is completed.
function doAsyncTask(cb) {
    setTimeout(function () {
        console.log("Async Task Calling Callback");
        cb();
    }, 1000);
}
doAsyncTask(function () { return console.log("Callback Called"); });
//#endregion 
//region Promise API creating a promise
/*
In ES6 we have an alternative mechanism built into the language called a promise.
A promise is a placeholder for a future value.
It serves the same function as callbacks but has a nicer syntax and makes it easier to handle errors.
*/
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async werk  volbracht!!!");
    }, 1000);
});
// We usually return this promise from a function, like so:
function doAsyncTask1() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async Work Complete");
            resolve();
        }, 1000);
    });
    return promise;
}
// If there was an error in the async task then we call the reject() function like so:
function doAsyncTask2() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async Work Complete");
            if (error) {
                reject();
            }
            else {
                resolve();
            }
        }, 1000);
    });
    return promise;
}
//endregion
//region Promise Notifications
// We can get notified when a promise resolves by attaching a success handler to its then function, like
// so:
var error = true;
function doAsyncTask3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (error) {
                reject('error'); // pass values
            }
            else {
                resolve('done'); // pass values
            }
        }, 1000);
    });
}
doAsyncTask3().then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
//endregion
//region Immediate Resolution or Rejection
// We can create an immediately resolved Promise by using the Promise.resolve() method, like so:
var promise2 = Promise.resolve('completed');
// In the above example, even though the Promise has resolved before we added the success handler,
// the promise framework still calls the success handler.
var promise3 = Promise.reject('fail');
promise2.then(function (val) { return console.log(val); });
//Chaining
// We can also connect a series of then handlers together in a chain, like so:
Promise.resolve("done")
    .then(function (val) {
    console.log(val);
    return 'done2';
}, function (err) { return console.error(err); })
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
// If we throw an exception from our promise function or one of the success handlers, the promise
// gets rejected and the error handler is called, like so:
Promise.resolve('done')
    .then(function (val) {
    throw new Error("fail");
})
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
// [Error: fail]
// 'done'
// 'done2
//endregion
//region Catch
// The catch function works exactly the same way as the then error handler, it’s just clearer and more
// explicitly describes our intent to handle errors.
Promise.resolve('volbracht')
    .then(function (val) { throw new Error("gefaald"); })
    .then(function (val) { return console.log(val); })
    .catch(function (err) { return console.error(err); });
//endregion
