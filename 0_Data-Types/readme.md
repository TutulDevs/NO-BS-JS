# Data Types

Everything is data in the computer. The data is readable, editable and creatable. The data is stored as a long sequence of bits.

_Bits_ are usually zeros and ones. Any data can be reduced to zeros and ones to form bits.

### Values

Modern computer systems have billions of bits. To work with these bits, we need to seperate them into pieces that contains a piece of information. In **JS**, those pieces are called _Values_. Although, all values are made of bits, they play different role based on their types. Types like, text, number, symbol, functions, etc.

**JS** has two types of data. Objects and Primitive type. Primitive types has 7 variations.

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES2015)
7. BigInt (ES2020)

You might have heard the term 'dynamic typing' in JavaScript. JavaScript is dynamic typed, which means that you do not declare data type while storing a data. In many other languages, you've to write data type along with the variable declaration. Not in **JS**.

It's important to remember that the value of a variable has the type, not the variable. Data type of a value can be changed of a variable.

```js
let x = "abc"; // type of x's value is String
x = 23; // changed the value to a Number, so the type
```

### The `typeof` Operator

We can use `typeof` operator to get the type of a value.

```js
typeof "abc"; // String
typeof 34; // Number
typeof true; // Boolean
```

### Number

_Number_ type contains numeric values. **JS** uses a fixed number of bits, 64 only, to store a single number. It means that how different peices of number can be represented is limited. With these much bits, you can create about 18 quintillion (an 18 with 18 zeros after it) different numbers.

👉 [Learn More about Number](./1_number.md)

## Resources

- https://eloquentjavascript.net/01_values.html#p_sgNSYKwqbo
- https://javascript.info/types
- https://www.udemy.com/course/the-complete-javascript-course/
