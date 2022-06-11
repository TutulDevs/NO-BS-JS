// 64. Object.create and Pure Prototypal Inheritance

var person = {
  fname: "f_name",
  lname: "l_name",
  greet: function () {
    return "Hi " + this.fname;
  },
};

// let's create a new object
var john = Object.create(person); // we just used the base Object
console.log(john);

// we get an empty object
// it's prototype is the person object
console.log(john.greet()); // Hi f_name

john.fname = "John";
john.lname = "Doe";
console.log(john.greet()); // Hi John
console.log(john); // the john object w/ prototype from person

// IF YOU WANT TO DEFINE A NEW OBJECT
// CREATE A NEW OBJECT

// I can just add methods to the person and use it as much as I want

// Object.create is supported from Chrome version 5
// so to have support in older run-time, use POLYFILL

// if the run-time supports Object.create, skip this
if (!Object.create) {
  // creating method on Object & passing the object
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implementation" + " only accepts the first parameter"
      );
    }

    // empty function
    function F() {}
    // pass the object to the prototype
    F.prototype = o;

    // return it as an object
    return new F();
  };
}
