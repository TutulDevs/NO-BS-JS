// 55. Understanding the Prototype

var person = {
  fname: "f_name",
  lname: "l_name",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};

// take a look the __proto__ in the dev tools
console.log(person);

var john = {
  fname: "John",
  lname: "Doe",
};

// let's try to access the getFullName method
// console.log(john.getFullName()); // john.getFullName is not a function

// FOR DEMONSTRATION PURPOSE ONLY
// DON'T USE IT ON REAL LIFE
john.__proto__ = person;
console.log(john.getFullName()); // John Doe

// let's try with jane
var jane = {
  fname: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName()); // Jane l_name

// here's a note
// during the execution context, the getFullName() function
// the this doesn't refer to the person obj,
// it refers to the object from where it's being called
