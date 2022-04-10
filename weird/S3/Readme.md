# Section - 3 | Types and Operators

## 21. Primitive Types

👉 A type of data that represents a single value is called **Primitive Type**. (That is, not an object.)

- `undefined` represents lack of existence
- `null` also represents absence of existence, should be use to set as variable
- `Boolean`
- `Number`, there's only one type of number, _Floating point_ number. (there's always some decimals)
- `string`
- `symbol`

## 22. Operators

👉 **Operator**: A special function that is syntactically (written) differently. Generally, operators take two parameters and return one result.

👉 **Infix notation**: the function name/ operator sits between the two parameters. There are also prefix & postfix notation.

## 23. Operator Precedence and Associativity

👉 **Precedence**: which operator function gets called first. They are called in order of precedence.

👉 **Associativity**: what order operator functions get called in: LTR or RTL. When functions have the same precedence.

```js
let a = 2,
  b = 3,
  c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// 4
// 4
// 4
```

What happened in the code?

If we look at the precedence table, we'll find that `=` operator has precedence value of 3 and has the associativity from `right-to-left`. So what is happening here is that `b` is getting the value of `c`, then `a` is getting the value of `b`.

### Let's have some fun

```js
[] + []; // ''

Number([]); // 0
Boolean([]); // true

[] + {}; // [object Object]
{
}
+[]; // 0

{
}
+{}; // '[object Object][object Object]'
```

## 28. Existence and Boolean

👉 check the Q&A section of the lesson.
