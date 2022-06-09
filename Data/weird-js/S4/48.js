// 47. Understanding Closures - 2

// create a classic function for understanding closures

function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// var is function scoped,
// after the iteration of the loop, the final value of i is 3
// so when the functions of the array are called, it looks one scope up
// finds that i = 3 and prints it

// check with let
function buildFunctions2() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2

// let is block-scoped
// everytime the loop iterates, i gets a new value
// when the function of the array is invoked, it looks one scope up
// finds i is equal to the new value which is preserved

// perserve data with ES5 way
function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        // if you don't return it will return `undefined` by default
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var fs3 = buildFunctions3();

fs3[0](); // 0
fs3[1](); // 1
fs3[2](); // 2
