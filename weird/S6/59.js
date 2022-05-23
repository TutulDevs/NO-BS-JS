// 59. Function Constructors and '.prototype'

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

// let's add something to the Person via the prototype
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

var mark = new Person("Mark", "Smith");
console.log(mark);
console.log(mark.getFullName());

// let's check the `prototype`
console.log(mark.__proto__); // Person {}

// let add another property here
// this can be invoked after its creation
Person.prototype.getFormalName = function () {
  return this.lname + ", " + this.fname;
};

console.log(mark.getFormalName());

// Now take a look at the code
// we could add the methods all inside the constructor function
// but it's not conventional for efficiency
// if we add the methods in the constructor function
// then all the created object will get all the properties
// it'll take a lot of space in the memory
// so it's common to keep the properties in the constructor
// and the methods in the prototype
// because they only need one copy to be used
// the properties may be different than each other
// but the methods are all the same
