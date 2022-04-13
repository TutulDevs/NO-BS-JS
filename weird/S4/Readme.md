# Objects and Functions

## 31. Object and the Dot

Object has _name-value_ pairs. Those values can be a) Primitive 'Property', b) Object 'Property' and c) Function 'method'.

Object themselves, their properties, their methods are all just sitting in the memory. The `Dot .` and `[ ... ]` are just functions/ operators, a to access that information.

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
