// 47. Closures

// let's c that returns a function
function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

greet("Hi")("Gabe"); // Hi Gabe

// weird?!
// let's store the first function in a var
var sayHi = greet("Hi");
sayHi("Dav"); // Hi Dav

/* 
Let's analize what happened under the hood 

1. Global Execution context is created 

2. When we go to the line 14, it creates a new execution context

3. greet() execution context is started 

4. The passed variables `whattosay = 'hi'` is sitting in the variable environment

5. After the `return`, the `greet()` execution context is popped off from the execution stack

6. Usually when an execution context is popped off, it goes away with it's variables. It's called garbage-collection

7. But here or in this situation the memory space is still there even though it's execution context is no more. It happens because the garbage collector works periodically. Al long as a variable has been referenced by something, it will be there. 

8. Then we go back to the Global Execution Context 

9. sayHi() annonymous function execution context is started 

10. It gets it's variable `name = 'Dav'`

11. When it hit the line 6, it searches for the `whattosay` variable 

12. It didn't get that in it's execution context

13. It looked one scope up for the variable 

14. Found the `whattosay` variable sitting there

15. Took the value 

16. Logged in the console


*/
