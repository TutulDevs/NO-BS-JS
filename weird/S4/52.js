// 52. Functional Programming

function mapForEach(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// make a new array with doubled values
var arr2 = mapForEach(arr1, (el) => el * 2);
console.log(arr2);

// make an array with true & false
var arr3 = mapForEach(arr1, (el) => el > 2);
console.log(arr3);

// find modulo
var arr4 = mapForEach(arr1, (el) => el % 2 === 0);
console.log(arr4);

// set a limiter and check the value
var checkPastLimit = (limiter, item) => item > limiter;

// the function we pass will take only one param
// so set it with a preset value
var arr5 = mapForEach(arr1, (el) => checkPastLimit.call(null, 1, el));
console.log(arr5);

var arr6 = mapForEach(arr1, checkPastLimit.bind(null, 1));
console.log(arr6);

// calling bind() or call() method again & again is tiresome
var checkPastLimitSimplified = function (limit) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limit);
};

var arr7 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr7);

// more simplified
var checkPastLimitSimplifiedMore = function (limit) {
  return function (item) {
    return item > limit;
  };
};

var arr8 = mapForEach(arr1, checkPastLimitSimplifiedMore(1));
console.log(arr8);
