# Objects and Functions

## 31. Object and the Dot

Object has _name-value_ pairs. Those values can be a) Primitive 'Property', b) Object 'Property' and c) Function 'method'.

Objects themselves, their properties, and their methods are all just sitting in the memory. The `.` notation and `[ ... ]` notation are just functions/ operators, a key to access that information.

[Example](./theDot.js)

## 32. Object and Object Literals

Object Literal is just the `{ ... }`. They are the shorthand for `new Object()`. The `{}` is a shorthand but not an operator. So how does it create an object? Well, our JavaScript engine, while parsing if it sees any `{}` that is not in a loop or in any `if` statement, assumes you're creating an object.

[Example](./objectLiteral.js)

## 34. JSON and JS Literal

Anything that is valid in JSON is valid in JavaScript object literal but all valid object literals are not valid JSON. JSON has strict rule about what it can be.

JSON is not a part of JavaScript but it is so popular that JavaScript in the browser has two methods for JSON.

- `JSON.stringify(obj)` to convert an object to a JSON string
- `JSON.parse(jsonString)` to convert a JSON string to an object

## 35. Functions are Object

**First Class Functions** 😎😎😎

Everything you can do with other types of objects, you can do with Functions. Assign them to variables, pass them around, create them on the fly. They open up the horizons. A completely different approaches to solve problems.

It is a special type of object. It has all the facilities of an object and has some more things. Like any object, it resides in the memory, can take any type of property, including functions.

The Function object has some hidden properties. Two important ones are:

- Name: optional, doesn't have to have a name, can be anonymous
- Code: the actual lines of code you have written

So the code you write in a function is placed into a special property of the function object. So the code you write is the function, the function is an object of other properties. And the code you write is one of the properties you add on to it. What special of this property is that you can invoke the property.

To make it more clear, when you create a Function, an object is created. That object has some properties, `code` is one of them. The written code is stored inside the code property. When you invoke the Function, you actually invoke the `code` property.

[Example](./35.js)

[Additional Resource](https://www.youtube.com/watch?v=zCO3nv7idJw)

## 36. Function Statements and Function Expressions

👉 **Expression**: A unit of code that results in a value. It doesn't have to save to a variable.

**Statement**, on the other hand just does the work.

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

👆 This is a statement because it doesn't return any value until the function is executed.

```js
var anonymousGreet = function () {
  console.log("Hello");
};
```

👆 This is an expression bound to a variable. Since functions are objects, we bound an object to the `anonymousGreet` variable.

When we create a function expression and point it to a variable, an object is created on the fly. When a function is written as a statement, it does nothing. It means the JS engine does nothing.

We can't declare the `anonymousGreet` before assigning the function expression. Because it's a variable, it's `undefined` initially and we cannot expect a function expression from `undefined`.

[Example](./36.js)

## 37. Conceptual Aside: By Value VS By Reference

For primitives, when you declare a new variable to an old variable, the new variable creates a new place in the memory and copies the value of the old variable.

```js
var a = "hello"; // an address is created for the variable
var b = a; // a new address is created and copied the value of the a variable

console.log(a); // 'hello'
console.log(b); // 'hello'

a = "world";

console.log(a); // 'world' a is changed but didn't change b
console.log(b); // 'hello' b remains intact in the same place in memory
```

When you create an object, it's value gets a location in the memory. When you create another variable and assign a previously created object, the new variable doesn't get a new location in the memory, rather it gets the exact location as the assigned object.

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

If you create a function inside of a method and try to use the `this`, you'll notice that the `this` in the function refers to the Global object. Weird!

A common way to fix this by assigning the `this` to a new variable. So the new variable will always refers to the `this` and you can use it thoroughly.

👉 The arrow functions don't have `this` variable. It will always point to the global object.

[Example](./38.js)

## 39. Conceptual Aside: Arrays - Collections of Anything

If you create a function as an element of an array and try to log the `this`, you'll get the whole array.

```js
var arr = [
  1,
  false,
  { name: "John" },
  function () {
    console.log(this);
  },
];

arr[3](); // the whole arr
```

## 40. 'arguments' and spread

We know that we can create a function statement with parameters and invoke it with no arguments. JavaScript engine will not stop working. It will set the value of the parameters during the creation phase. It will be set as `undefined`. Previously we could've set an alternative value if the argument is not passed by an `||` operator.

In modern JavaScript, we have `default parameter`. It means we can assign a default value for a parameter.

```js
function a(name) {
  console.log(name);
}
a(); // undefined

function b(name) {
  b = b || "John";
  console.log(name);
}
b(); // John

function c(name = "Jane") {
  console.log(name);
}
c(); // Jane
```

A function statement also gives us a hidden variable, `arguments`. It is an array look-like collection of data where all our passed arguments are listed. It looks like an array and has many methods of an array but it's not an array. This can be useful in some cases. BTW, you don't get the `arguments` in an arrow function.

```js
function a(name) {
  console.log(arguments);
}
a("John"); // ['John']

function b(name) {
  console.log(arguments);
}
b(); // []
```

In some cases `arguments` are good but it has been deprecated. We can use it but there is a better alternative. It's called the **spread/ rest parameter**. It lists all the parameters that have not been set but pass as arguments.

```js
function a(fname, lname, ...others) {
  console.log(others);
}

a("John", "Doe", 37, "NY"); // [37, 'NY']

function nums(...n) {
  console.log(n);
}

nums(3, 5, 7, 9); // [3, 5, 7, 9]
```

## 41. Framework Aside: Function Overloading

In many other programming languages, we can use the same named function which receives different parameters and return accordingly.

In JavaScript, we don't have that facility. Because, functions work here differently. So we need to bypass the method of function overloading. We can create different functions and invoke another main function inside it.

[Example](./41.js)

## 42. Conceptual Aside: Syntax Parsers

The JavaScript engine reads your code character by character and checks the validity of the written code. It always expects another character right to its place. If it found anything invalid, it throws an error. It may even **make changes** to the written code. It all happens before the code execution.

## 43. Dangerous Aside: Automatic Semicolon Insertion

No programming language is perfect. So is JavaScript. When the syntax parser reads your code character by character, it makes some decisions based on your written code.

```js
function a() {
  return
  {
    name: 'John',
  }
}

a(); // undefined

```

The reason the result is undefined is that, when we press the `enter` key from the keyboard after the `return` statement, the syntax parser added a `;` for us. It thinks that maybe that was the end of the statement.

We know that semicolon is optional in JavaScript but it is for a reason. The syntax parser automatically adds a semicolon for you when it expects a semicolon in your code. Remember '**make changes**'.

So you should always put your semicolons otherwise the syntax parser will add for you and you may not like it sometimes. Formatter like, [Prettier](https://prettier.io/) makes you code formatted but check the semicolons when you see a problem.

## 45. Immediately Invoked Functions Expressions (IIFEs)

We know that there are two ways to create a functions in JavaScript.

- Function Statement
- Function Expression

They do their work as usual. But other things make functions the first-class object.

We know the `code` property, the hidden property in a function object. It holds the written code. We can invoke that code on the fly, meaning we can invoke a function expression just after creating it. We can just add `()` after the function object to invoke it. We know `()` invokes a function. Here it invokes immediately after the creation.

We can write any expression in our code and it will not throw any error if the expression is valid.

```js
console.log("hello");

3;

("I am an expression");

{
  name: "Jenny";
}
```

None of the above examples will throw an error because they are valid. However, if we try to execute a function expression on the fly, we'll get an error.

```js
function(name) {
  return 'Hello ' + name;
}
```

When the syntax parser reads the code, it'll find that after the `function` keyword, there is no name. It expects a function statement and throws the error. If we just put `function`, it's not a function.

There are a few ways to trick the parser to write a function expression on the fly. We need to make sure that the word `function` is not the thing it sees first. The most common way to do it is by wrapping the function expression in parentheses.

```js
(function (name) {
  return "Hello " + name;
});
```

Parentheses in JavaScript are operators and we only use parentheses with expressions. Like, `(3 +4)*2`.

👉 Parentheses are grouping operators and only excepts expressions. No statement is allowed.

**Why IIFE?**

IIFE creates a local scope and avoids the global scope. The function expression is not assigned in the global object.

It doesn't create a global scope so during the execution phase it won't need to look for its upper scopes.

[Example](./45.js)

- [https://flaviocopes.com/javascript-iife](https://flaviocopes.com/javascript-iife)
- [http://gregfranko.com/blog/i-love-my-iife](http://gregfranko.com/blog/i-love-my-iife)

## 46. Framework Aside: IIFEs and Safe Code

In **IIFE** the variables don't get mixed up with the global variables. It remains in its scope. However, if we want to use any global variable inside of an **IIFE**, just pass it by parameter, since functions are just objects.

[Example](./46.js)

## 47. Understanding Closures - 1

The **Closure** is a JavaScript feature that is among the most important features. Briefly, the closure means that a function has access to the variables lexically outside of it.

Technically in Javascript all functions are closures. A function sitting on the global scope has access lexically along the scope chain to the values on the global object, which forms a closure.

The `v8` creates an object for closure variables called `context` and puts it on the heap. Not the stack.

More on the examples.

[Example](./47.js)

- [Javascript Closure tutorial ( Closures Explained )](https://www.youtube.com/watch?v=71AtaJpJHw0&ab_channel=techsith)

## 48. Understanding Closures - 2

Modern JavaScript engine like `v8` uses **Mark-and-Sweep: Garbage Collection Algorithm**. It means the garbage collector will not sweep any variable until it is referenced by something.

[Example](./48.js)

## 49. Framework Aside: Function Factories

Let's take a look at how can we use the benefit of closure functions.

Some advantages of Closure:

1. Fewer parameters being passed to function calls yield fewer bugs. Long parameter lists make for easier syntax errors or accidentally pass the wrong value in the wrong spot.
2. More readable code, as you can create functions with more explicit names without rewriting logic or nesting functions.
3. Code is more easily debugged as you have a central point of logic, rather than many nested function calls where logic is encapsulated somewhere in the hierarchy.
4. Shrinks the download size of your final Javascript files if calling the functions often (fewer parameters, fewer characters typed in the final Javascript file).

[Example](./49.js)

## 50. Closures and Callbacks

**Callback Function**: A function you give to another function, to be run/ invoke when the other function is finished.

Simply put, the callback is passing a function (_a_) as an argument to a function(_b_). When _b_ finishes its work, it'll call _a_.

[Example](./50.js)

## 51. call(), apply(), and bind()

We know that the function is a special kind of object. It has several properties, like, `name`, which is optional and `code` which is invokable.

Like `Objects` functions get methods. It gets three methods which are all related to the `this` variable.

- `.call()`
- `.apply()`
- `.bind()`

### `.bind()`

The `.bind()` function creates a new **bound function** that wraps the original function object. The simplest use of this function is to make a function that, no matter how it is called, is called with a particular `this` value.

### `.call()`

While `bind()` binds the object to the function, `.call()` calls/ executes the function.

### `.apply()`

It is similar to `.call()` except that it takes arguments as an `Array`.

👉 **Function Currying**: creating a copy of a function but with some preset parameters. Useful in mathematical situations.

[Example](./51.js)

- [bound mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

## 52. Functional Programming

One of the best features of JS is the use of first-class functions. Many popular programming languages do not have this. It gives some flexibility to our code. It is also called the future of JavaScript programming.

[Example](./52.js)

- [Learning Functional Programming with JavaScript - Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY&ab_channel=JSConf)
- [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS)

## 53. Functional Programming - Part 2

Check the [Annotated Source](https://underscorejs.org/docs/underscore-esm.html) from [underscorejs](https://underscorejs.org/). It uses many utility functions around JavaScript Functional Programming and has the code with comments for developers to read.

You can also check [Lodash](https://lodash.com/).

[Example](./53.html)
