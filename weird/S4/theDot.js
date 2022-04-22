// 31. Object and the Dot

// create an object in the most basic way
var person = new Object();

person["firstname"] = "John";
person["lastname"] = "Doe";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
// the [ ... ] is an operator, called "Computed Member Access', it has a precedence of 18

// displaying the object in an easier way
console.log(person.lastname);
// the . is an operator, called 'Member Access', it has a precedence of 18

// let add an object property with the help of 'Member Access'
// it has 'left-to-right' associativity, so person finds in address, address find in street & so on
person.address = new Object();
person.address.street = "John Street";
person.address.city = "NY";

console.log(person.address.street);
console.log(person["address"]["street"]);
