# Building Objects

## 58. Function Constructors, `new`, and the History of Javascript

Let's discuss more about how to create an object. We learnt how to create an object by object literal. There are few other ways to create an object. Now its time to learn more deeply how to create an object, with something called `constructor`.

👉 `new` is an operator with a precedence of 18 and without any associativity. So when we write `new`, something special happens. It initially creates an empty object. Then it invokes the function.

👉 **Function Constructors**: A normal function that is used to construct objects. The `this` variable points a new empty object, and that object is returned from the function automatically.

```js
function Animal() {
  this.name = "Zebra";
}

var zebra = new Animal();

// how it executes?
// 1. zebra = {}
// 2. Animal() executes
// 3. set the key `name`
// 4. set the value to the key
```

As long as the constructor function is not returning something, it'll always return the new object. The `this` in the constructor function is an empty object.

```js
function Animal() {
  console.log(this); // empty obj & proof that this function executes

  this.name = "Zebra";
}

var zebra = new Animal();
```

Let's return and see.

```js
function Animal() {
  this.name = "Zebra";

  return { txt: "it returned" };
}

var zebra = new Animal();

console.log(zebra); // {txt: 'it returned'}
```

So in short we can say that, we are still executing a function by passing parentheses after its name. When it sees the `new` keyword before its name, during the execution context, the `this` becomes an empty object. Then if the function doesn't return anything, it returns the object.

You may say what if the constructor function is not invoked, but the `new` operator will cause the function to be executed.

[Example](./58.js)

## 59. Function Constructors and '.prototype'

Let's discuss how can we set the `.prototype` in JavaScript object.

When you use the function constructor, it automatically sets the `.prototype` for you. In fact every functions has a hidden property called `prototype`, just like `name` and `code`. It starts its life as an empty object. It never gets used unless you're using it as a function constructor, by the `new` operator. This `prototype` is not the prototype of the function. It is the prototype of any object that has been created with function constructor.

Since, the `.prototype` property is always there, let's use it by adding properties to the constructor function.

😵 **The Confusion**

Now my head is spinning. It seems like a function have two prototypes. The `.__proto__` and `.prototype`. Let's try to clear it out.

**Prototype** is a property which is available in every function but only utilized when it's a constructor function. You can add properties and methods to the function's **prototype** which can be inherited by it's instances. It's helpful for saving memory. The `.prototype` is a method of a function constructor.

The `.__proto__` property is available to all objects. We know functions are object. This property is used by JavaScript engine to inherit properties and methods. This property should not be used in real-life because it takes much more time to compile. The `__proto__` is one way to access the prototype of objects themselves.

```js
function FC() {
  //...
}

var obj = new FC();

let a = obj.__proto__ === FC.prototype;

console.log(a); // true
```

[Example](./59.js)

- [FunFunFunction](https://www.youtube.com/watch?v=DqGwxR_0d1M)
- [JavaScript difference between `__proto__` and `prototype`](https://coderwall.com/p/j1khtg/javascript-difference-between-__proto__-and-prototype)

## 60. Dangerous Aside: 'new' and functions

As it is seen thoroughly in this section's examples, that we are capitalizing the constructor function name. It's not a requirement. If we use small letter we'll still get the same result. But this is the convention. Because we may forget to put the `new` operator before the constructor function's name. JavaScript engine will not throw any error. The function will be executed and since it doesn't return anything, it'll returns `undefined`. And all the added methods via prototype will get a run-time error, because the function returns `undefined` and `undefined` can't have any properties or methods on it. That's why people use this convention to capitalize. You should always follow this convention.

## 61. Conceptual Aside: Built-In Function Constructors

Let's discuss about the built-in function constructor which means these constructors are already there for us to use.

[Example](./61.js)

## 62. Dangerous Aside: Built-In Function Constructors

Although adding methods to the built-in function constructor seems cool, it may lead to some unexpected behaviour, mainly with type coercion. Let's see an example.

```js
var a = 3;

var b = new Number(3);

a == b; // true

a === b; // false
```

In the first comparison, the JavaScript engine coerced two values and found they are equal.

In the second comparison, the JavaScript engine couldn't coerce the two values. If found _a_ is a primitive and _b_ is an object. So it returned false.

## 63. Dangerous Aside: Arrays and for..in

Remember **Reflection** and **Extend**? We can see the properties of an object via reflection.

We know arrays are objects. We can add prototypes for them too in the `Array` constructor function.

We can view the array by iterating through `for..in`. It has some problems. Don't use this to iterate an array. Try other iterators.

[Example](./63.js)

- [Reflection and Extend](../S5/Readme.md#57-reflection-and-extend)
