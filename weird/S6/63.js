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
