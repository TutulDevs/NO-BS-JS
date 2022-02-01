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

The main purpose of _Number_ is to calculate. The common operations are `✖`, division `➗`, addition `➕`, subtraction `➖`.

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

## Resources

- https://eloquentjavascript.net/01_values.html#p_sgNSYKwqbo
- https://javascript.info/types
- https://www.freecodecamp.org/news/floating-point-definition/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
