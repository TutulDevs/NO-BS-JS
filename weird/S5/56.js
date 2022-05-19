// 56. Everything is an Object (or a primitive)

var a = {};

var b = function () {};

var c = [];

// let's log the variables in the browser's dev console

console.log(a); // point to the base obj
console.log(a.__proto__);

console.log(b); // shows the empty function
console.log(b.__proto__.apply); // see, we get the apply from there

console.log(c); // shows the empty array
console.log(c.__proto__); // check all the array methods there
