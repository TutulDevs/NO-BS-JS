# Object-Oriented Javascript and Prototypal Inheritance

## 54. Conceptual Aside: Classical vs Prototypal Inheritance

👉 **Inheritance**: One object gets access to the properties and methods of another object.

Simply, you've two objects, _a_ and _b_. _a_ gets the access to the properties and methods of _b_. This is inheritance.

👉 **Classical Inheritance**: It means the other more popular inheritance types that are in use currently. It's in `C#`, `Java` and in many others to share properties and methods of objects.

It classical which doesn't mean bad or old. It is still great and being used in many large scale applications. However, it also has some downsides. One of the downsides is that it make code way verbose to maintain and know what different variable or method means to work on it.

👉 **Prototypal Inheritance**: It is another way of share objects. It is also not flawless but it makes code more simple, flexible, extensible and easy to understand.

## 55. Understanding the Prototype

In JavaScript, all objects including functions, has a prototype property. This property is a reference to another object, called `__proto__`. The property is called prototype but to access it, we've to use `__proto__`. It's an object that stands on its own. But the object property that we'll call proto, that's it's prototype. That's the object that it's going to grab and be able to get its properties and methods.

Let's say we have an object `obj` which has a property, `prop1`. We can get the value of `prop1` by `obj.prop1`.

The `obj` object has a prototype object, which has a property, `prop2`. We can get the value of `prop2` by `obj.prop2`. The `obj` finds the `prop2` in its reference and couldn't find it. So it takes a look at its prototype and serve the value.

This prototype can also have it's prototype, which has a property, `prop3`. We can get the value of `prop3` by `obj.prop3`. The `obj` finds the `prop2` in its reference and couldn't find it. It takes a look at its prototype and fail to find. So it takes a look at its prototype and serve the value.

This chain of prototype after prototype goes on for forever until it hits the `base` object. It's called the **Prototype Chain**.

This is not to confuse with **Scope Chain**. **Scope Chain** is about where to look for a variable. It often looks up in the chain.

**Prototype Chain** on the other hand, is about where to look for an object or property or method among a sequence of objects that are connected via the prototype chain. These prototypes are hidden from us. We don't have to go and look for them, the JavaScript engine will serve us the data if it's in any prototype.

One of the interesting thing is that if we have another object, `obj2`, it can access the prototypes of the `obj`. Or at least if you want them to share the same prototypes. So we can access the `prop2` by `obj2.prop2`.

Also remember that `.prototype` and `.__proto__` are different. There is a distinction between `.__proto__` and `.prototype`. The former (`.__proto__`) is used by all objects in JS (including function objects, function constructors, and any other normal object). This is the property that is used by JS engines for prototypal inheritance. The other one (`.prototype`) is a property belonging to functions that are ONLY used as function constructors. So an instance of this function constructor will have it's `.__proto__` (since it's an object it only has the `.__proto__` property for inheritance as mentioned above) set to the `.prototype` of the function constructor. So a normal function doesn't have the `.prototype`, but it does have the `.__proto__`.

**There are 3 things**:

1. The idea of an object's prototype. This is how prototypal inheritance works.

2. The `.__proto__` property of objects. That's one way to look at what the prototype of an object is.

3. The `.prototype` property. This exists on a function constructor, and is where new objects created from that function constructor will point their prototype to.

[Example](./55.js)

- [JavaScript Prototype Chains, Scope Chains, and Performance: What You Need to Know](https://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know)
- [`Object.prototype.__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

## 56. Everything is an Object (or a primitive)

We know that everything in JavaScript is `Object`, excepts the primitives.

Let's see in the code.

[Example](./56.js)

## 57. Reflection and Extend

👉 **Reflection**: An object can look at itself, listing and changing its properties and methods. It means JavaScript Object has the ability to look at its own properties and methods. We can use it to implement a very useful pattern called **Extend**.


[Example](./57.js)
