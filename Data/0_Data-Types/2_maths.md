# JavaScript in Mathematics

To do mathematics, we need operators. You can learn a great deal about them in [javascript.info](https://javascript.info/operators).

Maths are important. Everything in science and technology is based on mathematics. Let's dig into **JavaScript** mathematics.

## Absolute Value

The `Math.abs()` function is used to get the absolute value in **JS**. It annuls or negates the given sign of a number and returns the positive value.

```js
Math.abs(-2); // 2
```

But what is an absolute value?

Absolute value is the distance between any number and 0 on the number line. In the distance, there are no negative values. When 0 is passed, **JS** returns 0 as the distance would be 0.

Some more examples are listed below:

```js
Math.abs(-10); // 10
Math.abs(10); // 10
Math.abs("-10"); // 10
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs(null); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("Ten"); // NaN
Math.abs(); // NaN
```

It can be used to check the number before printing.

## Math.ceil()

This function always rounds a number up to the next largest integer. If you give it 3.1, it'll return 4. It takes only one argument.

```js
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0
Math.ceil(-4); // -4
Math.ceil(-7.004); // -7
Math.ceil(null); // 0
```

## Math.floor()

Opposite to the `Math.ceil()` method, `Math.floor()` returns the largest integer less than or equal to a given number. It also accepts one argument.

```js
Math.floor(45.95); //  45
Math.floor(45.05); //  45
Math.floor(4); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
Math.floor(null); // 0
```

## Math.round()

This method rounds off a number depending on the fractional part of the number. If the fractional part is more than or equal to 0.5, it'll return the next largest integer. If it's less than 0.5, it'll return the same number without the fractional part.

```js
Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(42); //  42
Math.round(-20.5); // -20
Math.round(-20.51); // -21
```

## Math.trunc()

This method returns the integer part of the number by removing any fractional part.

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## Math.random()

This function returns a floating-point number ranging from 0 to less than 1. It can be scaled with a desired range.

```js
Math.random(); // 0.6563213011390763
```

You can round the with the help of `Math.floor()` and scale it by multiplying with desired range.

```js
const getRandomInteger = (range) => Math.floor(Math.random() * range);

getRandomInteger(3); // 0, 1, 2
getRandomInteger(101); // 0-100
```

## Math.max()

This function returns the largest number from the given number parameters. You can pass as many parameters as you want but make sure the parameters are numbers. If any parameter is not a number, it'll return our old friend `NaN`. You can also provide an array of numbers by spreading it with `...` or you can use `Array.reduce()`.

```js
Math.max(1, 3, 2); // 3
Math.max(-1, -3, -2); // -1
Math.max(1, 3, "x"); // NaN

const myArray = [0, 23, 56];

Math.max(...myArray); // 56
```

## Math.min()

You guessed it right. This method is the opposite of the `Math.max()`. It returns the lowest valued number.

```js
Math.min(1, 3, 2); // 1
Math.min(-1, -3, -2); // -3
Math.min(1, 3, "x"); // NaN

const myArray = [0, 23, 56];

Math.min(...myArray); // 0
```

This is all for now. There are lots of methods of the `Math` object. For a long time I didn't do any mathematics and forgot the terms. So couldn't move further.

---

## References

- https://flexiple.com/javascript-absolute-value
- https://www.educative.io/edpresso/mathceil-mathfloor-and-mathround-in-javascript
- https://www.makeuseof.com/javascript-math-methods/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
