// 50. Closures and Callbacks

function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(() => {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

// let's disect the function

/*

  1. `sayHiLater` is invoked and an execution context is created 

  2. saved a value for the variable greeting

  3. sees a setTimeout

  4. put the setTimeout in the event loop

  5. finishes the execution context

  6. after 3000 ms, setTimeout runs

  7. sees it returns a function

  8. create an execution context

  9. look for greeting in one scope up 

  10. logs it 

  11. finishes the execution context

*/

// Example of callback function

function tellMeWhenDone(cb) {
  var a = 1,
    b = 2;

  cb();
}

tellMeWhenDone(() => {
  console.log("I am done!");
});

tellMeWhenDone(() => {
  alert("All done!");
});
