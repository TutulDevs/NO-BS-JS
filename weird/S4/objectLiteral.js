// 32. Object and Object Literals

var person = {
  firstname: "John",
  lastname: "Doe",
  address: {
    street: "John Street",
    city: "NY",
  },
};

// this type of on the fly object creation can be way faster to work

function greet(obj) {
  console.log("Hi " + obj.firstname);
}

greet(person);

greet({ firstname: "Jane", lastname: "Doe" });

// we can add property to the object by dot or brackets
person.age = 25;
person["surname"] = "Johnny";

console.log(person);
