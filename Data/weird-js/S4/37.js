// 37. Conceptual Aside: By Value vs By Reference

var a = "hello"; // an address is created for the variable
var b = a; // a new address is created and copied the value of the a variable

console.log(a); // 'hello'
console.log(b); // 'hello'

a = "world";

console.log(a); // 'world'
console.log(b); // 'hello'
