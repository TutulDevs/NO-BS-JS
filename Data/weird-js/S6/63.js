// 63. Dangerous Aside: Arrays and for..in

var arr = ["John", "Mark", "Steve"];

for (var key in arr) {
  console.log(key + ": " + arr[key]);
}

// logs
// 0: John
// 1: Mark
// 2:Steve

// let's add a method and iterate
Array.prototype.justToTest = "testing";

for (var key in arr) {
  console.log(key + ": " + arr[key]);
}

// logs
// 0: John
// 1: Mark
// 2:Steve
// justToTest: testing

// prevent printing the custom method
for (var key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(key + ": " + arr[key]);
  }
}
// 0: John
// 1: Mark
// 2:Steve

// why it doesn't printing the built-in methods?
/*

Built-in properties are not enumerable - they do not appear in for-in loop.
We can define custom property to be non enumerable

Example:

*/

Array.prototype.test = "Some test value";
Object.defineProperty(Array.prototype, "test", {
  enumerable: false,
});
// Here we are defining test property of Array.prototype object
// to be non-enumerable

var x = [34, 56, 78];

for (var prop in x) {
  console.log(prop + ": " + x[prop]);
}

// 0: 34
// 1: 56
// 2: 78
