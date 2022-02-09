# JavaScript in Mathematics

To do mathematics, we need operators. You can learn a great deal about them in [javascript.info](https://javascript.info/operators).

Maths are important. Everything in modern science and technology. Let's dig into **JavaScript** mathematics.

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

It can be used to check the number before displaying.

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

---

## References

- https://flexiple.com/javascript-absolute-value
- https://www.educative.io/edpresso/mathceil-mathfloor-and-mathround-in-javascript
