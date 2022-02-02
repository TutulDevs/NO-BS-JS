## Number

_Number_ type contains numeric values. **JS** uses a fixed number of bits, 64 only, to store a single number. It means that how different peices of number can be represented is limited. With these much bits, you can create about 18 quintillion (an 18 with 18 zeros after it) different numbers.

A _number_ can be stored as a negative number.

It can be both integer and floating point numbers.
| Integer | Floating Point |
| ----------- | ----------- |
| An integer is a positive or negative whole number, including 0| A floating point number, is a positive or negative whole number with a decimal point |
| 4, -4, 0 | 0.23, 4.5, -9.87 |
| Number.isInteger(n) | parseInt(n) === n |

_Number_ is also called floating point numbers, because they have decimal even on the integers. So `23` is equal to `23.0`.

The main purpose of _Number_ is to calculate. The common operations are multiplication
`✖`, division `➗`, addition `➕`, subtraction `➖`.

Some arithmatic operations 👇

```js
100 + 4;
// this will create a new value by adding 100 with 4 which is 104
```

```js
100 + 4 * 11;
```

Now we've two different operations. Will it add 100 with 4 and multiply with 11 ?! Or multiply 11 with 4 and add 100. Confusing, right?

We can wrap certain parts of the numbers in parentheses to seperate, just like general arithmetic.

```js
(100 + 4) * 11;
```

**The `%` operator**

It's called _remainder_. It simply returns the remainder of the division.

```js
30 % 4;
// 2
```

**JS** operators have precedence over other operators. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) has a table of operators with their precedence.

### Special Numbers

Beside regular numeric values, **JS** have three special values.

1. Infinity
2. -Infinity
3. NaN

The first two represent positive and negative infinities. It's the same as the mathematical _Infinity ∞_. It's bigger than any finite number or smaller than any negative finite number. Any calculation with `Infinity` will return `Infinity`. `Number.isFinite()` is a function to check if a number is finite or not.

```js
Number.isFinite(-490); // true
Number.isFinite(567); // true
Number.isFinite(Infinity); // false
```

The usages of `Infinity` is less than others. One of the real use cases is while parsing numbers from inputs.

👉 Check Dmitri's [blog post](https://dmitripavlutin.com/infinity-in-javascript/) to know more about `Infinity`.

**NaN** stands for _Not a Number_. Ironic, isn't it? You'll get it when you try to devide zero by zero(0 / 0), `Infinity - Infinity` or any operation that is not meaningful. It is the result of a wrong mathematical operation. Once a variable gets NaN, there's no going back. Whatever you do with NaN, will returns NaN.

```js
0 / 0; // NaN
"a string" * 5; // NaN
Infinity / Infinity; // NaN

// NaN returns NaN
NaN * 54;
"a string" / NaN;

"ban" + NaN + "a"; // try this on your console 😉
```

We can affirm that, if **JS** can't handle an operation, it doesn't stop or gives you an error, rather it gives you NaN.

### Too Lengthy of a Number to Count

Numbers can get lengthy and hard to count. But don't worry, **JavaScript** got your back. We can use underscore `_` to seperate numbers.

```js
const hardToCount = 123456789;
const easyToCount = 12_34_56_789;
```

It makes number more readable and doesn't change the value. **JS** engine ignores the `_` between numbers while compiling.

### Common Number Methods

**JavaScript** has lots of common methods for _Number_.

👉 **Number()**

It's useful to convert a string into a valid number. But make sure the string has only digits and no text. Otherwise it'll return `NaN`.

```js
Number("876"); // 876
Number("34.578"); // 34.578
Number("23_A"); // NaN
```

👉 **parseInt()**

It returns an integer from the given string. Any digit after a dot or a string will be removed. If the first character is a string, you'll get `NaN`.

`Number.parseInt()` does the same thing as well.

```js
parseInt("234.56"); // 234
parseInt("s234"); // NaN
parseInt("23s4"); // 23
Number.parseInt(""); // NaN
```

ℹ If you know why it returns `NaN` or removes digits after the character, please let me know. 🙏

👉 **parseFloat()**

Similar to the `parseInt()`, it returns the floating point number from a valid string of digits.

It's similar to `Number.parseFloat()`.

```js
parseFloat("234.56"); // 234.56
parseFloat("s234.56"); // NaN
parseFloat("23s4.34"); // 23
Number.parseFloat(""); // NaN
```

---

To add: toString(), tofixed(), toPrecision(), toLocaleString(), isInteger() , isFinite(), isNaN(), valueOf()

## Resources

- https://eloquentjavascript.net/01_values.html#p_sgNSYKwqbo
- https://javascript.info/types
- https://www.freecodecamp.org/news/floating-point-definition/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
- https://www.makeuseof.com/javascript-number-methods/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
