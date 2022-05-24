// 61. Conceptual Aside: Built-In Function Constructors

// try these examples on the dev tool rather than in an ide

var num = new Number(3);

console.log(num); // an object, [[PrimitiveValue]]: 5
console.log(num.toFixed(2)); // '3.00'

var str = new String("a string");

console.log(str); // an object, [[PrimitiveValue]]: 'a string'
console.log(str.length); // 8

// let's add to method to the String constructor function
String.prototype.toCapitalize = function () {
  return this.toUpperCase();
};

console.log("jenny".toCapitalize()); // JENNY

// so what happened here is that
// the string 'jenny' coerced into an String object
// then the method is applied & returned

// let's try to add method on Number object
Number.prototype.isOdd = function () {
  return this % 2 !== 0;
};

// console.log(5.isOdd()) // error
// this log throws error because
// the JS engine didn't convert the number 5 into an object

// let's try with object
var numOdd = new Number(5);
var numEven = new Number(50);
console.log(numOdd.isOdd()); // true
console.log(numEven.isOdd()); // false

// so be careful what you're doing
// learn more about the danger of adding methods
// like this in the next lesson
