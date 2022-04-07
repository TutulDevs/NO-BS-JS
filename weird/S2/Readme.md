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
