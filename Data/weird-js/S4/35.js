// 35. Functions are Object

function hello(name) {
  console.log("hello " + name);
}

// invoke the code of the function object
hello("John");

// get the code, not invoking
console.log(hello);

// get detailed with the object
console.dir(hello);

// let's add a property to the function object
hello.language = "english";
