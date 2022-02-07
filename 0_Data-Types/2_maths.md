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

---

## References

- https://flexiple.com/javascript-absolute-value/
