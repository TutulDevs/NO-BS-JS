// 58. Function Constructors, `new`, and the History of Javascript

// let's build a function constructor
function Person() {
  this.fname = "John";
  this.lname = "Doe";
}

// create a new object with the new keyword
var john = new Person();
console.log(john);

var jane = new Person();
console.log(jane);

// we've a problem here
// both `john` & `jane` are logging the same output

// we know that Person is primarily is a function statement
// so we can pass params, let's do it
function Person2(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

// create a new object with the new keyword
var mark = new Person2("Mark", "Smith");
console.log(mark);

var miarah = new Person2("Miarah", "Carey");
console.log(miarah);


// we can write the constructor function name like any other valid way
// but its a common practice to capitalize it