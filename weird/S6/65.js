// 65. ES6 and Classes

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  greet() {
    return "Hi " + this.fname;
  }
}

var john = new Person("John", "Doe");

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.greet()); // Hi John

// class can extends other class
class InformalPerson extends Person {
  constructor(fname, lname) {
    // super will call the object from the prototype
    super(fname, lname);
  }

  greet() {
    return "Wassup, " + this.fname + "!";
  }
}

var jack = new InformalPerson("Jack", "Rottenberg");

console.log(jack); // InformalPerson { fname: 'Jack', lname: 'Rottenberg' }
console.log(jack.greet()); // Wassup, Jack!
