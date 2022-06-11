// 36. Function Statements and Function Expressions

var a;

//anonymousGreet(); // will throw an error

var anonymousGreet = function () {
  console.log("Hello");
};

var b = function ab() {
  console.log("logging b fn");
};

// you call the b function by b(). the 'ab' is not being used, so don't name them

// let's pass a function to a function as a parameter
function log(val) {
  console.log(val);
}

log(3); // 3
log(function () {
  console.log("say hello");
}); // function() {console.log("say hello");}
// we can use the passed function just by invoking it in the log function
