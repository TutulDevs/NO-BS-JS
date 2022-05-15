// 51. call(), apply(), and bind()

// simple example of `this`
var person = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    var fname = this.fname + " " + this.lname;

    return fname;
  },
};

console.log(person.getFullName()); // John Doe

// let's try to use the getFullName in another function
var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
};

//logName();
// throws an error
// didn't get the getFullName function so that is undefined and that is not a function

/////////////////////////////////////////////////////////////////////////
// bind()
// let's control how the this points to the person object
var logPersonName = logName.bind(person);

logPersonName(); // Logged: John Doe

var logName2 = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Langs: ", lang1, lang2);
  console.log("--------------------");
}.bind(person);

logName2("en");
// Logged: John Doe
// Langs: en undefined
// --------------------

/////////////////////////////////////////////////////////////////////////
// call()
// while bind() binds the object to the function
// call() executes the function

var logName3 = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Langs: ", lang1, lang2);
  console.log("--------------------");
};

logName3.call(person, "en");
// Logged: John Doe
// Langs: en undefined
// --------------------

/////////////////////////////////////////////////////////////////////////
// apply()
// it is almost the same as call()
// except one difference
// while the call() take just parameters
// apply() takes the function parameters as an array

var logName4 = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Langs: ", lang1, lang2);
  console.log("--------------------");
};

logName4.apply(person, ["en"]);
// Logged: John Doe
// Langs: en undefined
// --------------------

// cool! but how can we use it?
// with apply(), we can borrow a function from an object
var person2 = {
  fname: "Jane",
  lname: "Doe",
};

var borrowed = person.getFullName.apply(person2);
console.log(borrowed); // Jane Doe
// we borrowed the getFullName fn from person obj to use in person2

// a use of bind() is function currying
// we know bind() creates a new copy of a function
// but while creating a new copy from a function we can pass default value
// it will work kind of like default parameter but it is permanent
function multiply(a, b) {
  return a * b;
}

var mutlipleByTwo = multiply.bind(this, 2);
// here the 2 is the value of a from multiply

console.log(mutlipleByTwo(4));
// 2 * 4 = 8

var multipleByTwoParams = multiply.bind(this, 4, 5);
// here  4 = a, 5 = b

console.log(multipleByTwoParams(4));
// 4 * 5 = 20

// Partial Application
// an application or function which has preset values
// also check how bind() works with arrow functions

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200)); // 220

// let's make a function which will has the same rate always
// arrow doesn't have this variable, so just pass a null
const addVAT = addTax.bind(null, 0.25);

console.log(addVAT(100)); // 125
console.log(addVAT(3456)); // 4320

// let's do the above example by returning a function from a function
const addVAT2 = (rate) => {
  return (value) => value + value * rate;
};

const fixedVAT = addVAT2(0.25);
console.log(fixedVAT(100)); // 125
