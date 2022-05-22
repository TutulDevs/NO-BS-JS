# Building Objects

## 58. Function Constructors, `new`, and the History of Javascript

Let's discuss more about how to create an object. We learnt how to create an object by object literal. There are few other ways to create an object. Now its time to learn more deeply how to create an object, with something called `constructor`.

👉 `new` is an operator with a precedence of 18 and without any associativity. So when we write `new`, something special happens. It initially creates an empty object. Then it invokes the function.

```js

function Animal() {
  this.name = 'Zebra';
}

var zebra = new Animal();

// how it executes?
// 1. zebra = {}
// 2. Animal() executes
// 3. set the key `name`
// 4. set the value to the key  


```

[Example](./58.js)
