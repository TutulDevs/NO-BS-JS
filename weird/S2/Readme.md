# Execution Contexts & Lexical Environments

## 7. Conceptual Aside

- Syntax Parsers (A program that reads/ translates your code & checks the grammar.)
- Execution Contexts (Which pieces of code are currently running are managed via execution contexts.)
- Lexical Environments (Where something sits physically in your written code.)

## 10. Global Environment & the Global Execution Contexts

Whenever your code runs, it creates an execution context for you. The base execution context is called the global execution context. It creates two things, Global Object & `this` variable. These are created for you by the JS engine.

If we run an empty JS file, go to the Dev Tools and write `this` in it, we'll see an object.

- Global Object(window) === `this`
- In JS, Global means not inside a Function.
- `let` & `const` don't propagate global object.

| global object | `this` | outer environment |
| ------------- | ------ | ----------------- |
| your code     |

## 11. The Execution Context - Creation and Hoisting

The execution context has two phases.

### Creation Phase

global object, `this`, outer environment.

In the creation phase, the parser recognizes where you created variables & where you created functions. It setup **Memory Space** for these two.

All variables are initially set to `undefined` in the creation phase. But `Functions` sits on the memory with it's entirety meaning with the name and the code inside it.

```javascript

    <script>
        console.log(myVar);
    </script>

    <script>
        var myVar = 1;
    </script>

```

The upper code will throw an error because each `script` tag creates it's own global execution context.

`let`, `const` and `class` get hoisted too but their values are not initialized like `var`, and `function`. So calling the former will create the `temporal dead zone` and will throw a `ReferenceError`.

### Execution Phase

In this phase, the code runs line by line, sets up the value and executes.

## 12. Conceptual Aside: Javascript and 'undefined'

Never set any variable to the value of `undefined`. This will hint you that you never created that variable but the JS engine gave you.

## 15. Function Invocation and the Execution Stack

When you invoke a function, an execution context is created on top of the global execution context. All the contexts are stacked and it's called the execution stack. It is also known as the call stack. Basically, it's a to-do list where a context is last in first out.

## 16. Functions, Context, and Variable Environments

👉 **Variable Environments:** where the variables lived when they are created and how they relate to each other in memory. When you think about this, just think about where is the variable.

## 17. Scope Chain

When a function sits lexically/ physically in the same level, can't find a declared variable in it's execution context, it goes out to the outer reference and put it's value there. The outer reference is determined by where the function sits lexically.

**Scope** means where can I access my variables.

Scope Chain is the chain of execution contexts to find it's reference to Outer Environment.

## 18. Scope, ES6, and let

`let` will be `undefined` in the memory during the creation phase but won't be accessible until it's declared. It'll throw a `ReferenceError`. It is also **block scoped**, means, it can't be accessed outside of it's lexical block. A block is the code inside two curly braces.

If you use `let` in a loop, it'll create a new variable in the memory everytime the loop runs.
