// 67. 'typeof' , 'instanceof', and Figuring Out What Something Is

var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));
console.log(Array.isArray(d));

function Person(name) {
  this.name = name;
}

var e = new Person("Mark");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null);

var f = function () {};
console.log(typeof f);
