// Operators

// 23. precedence
let a = 2,
  b = 3,
  c = 4;

a = b = c;

console.log(a); //4
console.log(b); //4
console.log(c); //4

let nonGroup = 2 + 3 * 5;
console.log(nonGroup); // 17

let grouped = (2 + 3) * 5;
console.log(grouped); // 25

// coercion
/* let a = 2 + "3";
      console.log(a); */

// comparison operators
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true
