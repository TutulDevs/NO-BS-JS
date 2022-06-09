// 45. Immediately Invoked Functions Expressions (IIFEs)

// Function statement example, doesn't do anything on creation phase
function greet(name) {
  console.log("Hello " + name);
}
// invoke it during execution phase
greet("John");

// Function expression example, the var is initially undefined
// gets the function during execution phase
var greetFunc = function (name) {
  console.log("Hello " + name);
};
// invoke it with the reference
greetFunc("Mark");

// IIFE Example
var greetings = (function (name) {
  return "Hello " + name;
})("James");

// the function expression after greetings is created & called immediately
// it returned a value
// that value get stored in the greetings variable
// if we try to invoke the greetings, it'll throw an error
console.log(greetings); // Hello James

//-----------------------------------------------------------------------------------
// IIFE for other functions expression

// throws an error
// function (name) {
//   return "Hello " + name;
// }

// valid IIFE
(function (name) {
  var greeting = "Hello";

  console.log(greeting + " " + name); // Hello Callum
})("Callum");

// IIFE in arrow function expression
((name) => {
  console.log("hello " + name); // hello Johan
})("Johan");

// async arrow IIFE
(async () => {
  var name = "Mia";

  console.log("hello " + name); // hello Mia
})();

// weird example
var f = (function d() {
  return "1";
},
function g() {
  return 2;
},
function h() {
  return "lol";
})();

console.log(f); // lol
// the comma operator evaluates each of it's operands from left-right
//and returns the value of the last operand
