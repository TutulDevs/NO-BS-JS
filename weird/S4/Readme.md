# Objects and Functions

## 31. Object and the Dot

Object has _name-value_ pairs. Those values can be a) Primitive 'Property', b) Object 'Property' and c) Function 'method'.

Objects themselves, their properties, their methods are all just sitting in the memory. The `Dot .` and `[ ... ]` are just functions/ operators, a to access that information.

[Example](./theDot.html)

## 32. Object and Object Literals

Object Literal is just the `{ ... }`. They are the shorthand for `new Object()`. The `{}` is a shorthand but not an operator. So how does it create an object? Well, out JavaScript engine, while parsing if sees any `{}` that is not in a loop or in any `if` statement, it assumes you're creating an object.

[Example](./objectLiteral.html)

## 34. JSON and JS Literal

Anything that is valid in JSON is valid in JavaScript object literal but all valid object literals are not valid JSON. JSON has strict rule about what it can be.

JSON is not a part of JavaScript but it is so popular that JavaScript in the browser has two methods for JSON.

- `JSON.stringify(obj)` to convert an object to a JSON string
- `JSON.parse(jsonString)` to convert a JSON string to an object

## 35. Functions are Object

**First Class Functions** 😎😎😎

Everything you can do with other types you can do with Functions. Assign them to variables, pass them around, create them on the fly. They open up the horizons. Completely different approaches to solve problems.

It is a special type of object. It has all the facilities of an object and has some more things. Just like any object, it resides in the memory, can take any type of property including functions.

The Function object has some hidden properties. Two important ones are:

- Name: optional, doesn't have to have a name, can be anonymous
- Code: the actual lines of code you written

So the code you write in a function is placed into a special property of the function object. So the code you write is the function, the function is an object of other properties. And the code you write is one of the properties you add on to it. What special of this property is that you can invoke the property.

[Example](./35.html)

[Additional Resource](https://www.youtube.com/watch?v=zCO3nv7idJw)

## 36. Function Statements and Function Expressions

👉 **Expression**: A unit of code that results in a value. It doesn't have to save to a variable.

**Statement** on the other hand just does the work.

```js
a = 3; // an expression

if (a === 3) {
  //...
} // if is a statement but 'a === 3' is an expression
```

As functions are objects, we have both Function Expression & Function Statement.

```js
function greet() {
    console.log('Hello);
}
```

This is a statement because it doesn't return any value untill the function is executed.

```js
var anonymousGreet = function () {
  console.log("Hello");
};
```

This is an expression binded to a variable. Since, functions are objects, we binded an object to the `anonymousGreet` variable.

When we create a function expression and pointed it to a variable then an object is created on the fly. When a function is written as a statement, it does nothing. It means the JS engine does nothing.

We can't declare the `anonymousGreet` before assigning the function expression. Because it's a variable, it's `undefined` initially and we cannot expect a function expression from `undefined`.

[Example](./36.html)

## 37. Conceptual Aside: By Value VS By Reference

For primitives, when you declare a new variable to an old variable, the new variable creates a new place in memory and copies the value of the old variable.

```js
var a = "hello"; // an address is created for the variable
var b = a; // a new address is created and copied the value of the a variable

console.log(a); // 'hello'
console.log(b); // 'hello'

a = "world";

console.log(a); // 'world' a is changed but didn't change b
console.log(b); // 'hello' b remains intact in the same place in memory
```

When you create an object, it's value gets a location in the memory. When you create another variable and assign a previously created object, the new variable doesn't get a new location in memory, rather it gets the exact location as the assigned object.

```js
const obj1 = { name: "John", age: 25 };

const obj2 = obj1;

obj1.name = "Mark";

console.log(obj2); // {name: 'Mark', age: 25}

obj2.age = 22;

console.log(obj1); // {name: 'Mark', age: 22}
```

## 38. Objects, Functions, and `this`

When a function is invoked, it gives us a special variable `this` without doing anything. The `this` behaves differently depends on the way it's function is invoked. If you call it in a function by function statement or function expression, it points to the Global object.

When a function is created as a method in an object, the `this` inside the method will point to the whole object it was created in.

🐞 A behaviour of the `this` in method that is a bug according to many engineers.

If you create a function inside of a method and try to use the `this`, you'll notice that the `this` in the function refers to the Global object.Weird!

A common way to fix this by assigning `this` to a new variable. So the new variable will always refers to the `this` and you can use it thoroughly.

👉 The arrow functions don't have `this` variable. It will always point to the global object.

[Example](./38.html)
