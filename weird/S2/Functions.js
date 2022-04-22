// 15. Function Invocation and the Execution Stack
// 16. Functions, Context, and Variable Environments
// 17. Scope Chain

// execution stack
//   function b() {
//     console.log("b init");
//     console.log("b is here");
//     console.log("b finish");
//   }

//   function a() {
//     console.log("a init");
//     b();
//     console.log("a finish");
//   }

//   a();
//   console.log("finished everything");

// variables environment
//   function bb() {
//     //var myVar;

//     // now myVar is taking value from the Global Execution Context
//     // because aa() has it's own variable, which only works in aa()'s execution context
//     console.log("bb: ", myVar);
//   }

//   function aa() {
//     var myVar = 2;
//     console.log("aa: ", myVar);
//     bb();
//     console.log("aa: ", myVar);
//   }

//   var myVar = 1;
//   aa();
//   console.log("end: ", myVar);

// Scope Chain
function c() {
  function d() {
    console.log(myVar);
  }

  var myVar = 2;
  d();
}

var myVar = 1;
c();
