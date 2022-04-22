//Global Environment & the Global Execution Contexts

/*
      // 10 
      var a = "Hello world";

      function b() {}

      const x = "X men";

      let y = "yolo";
      */

// 11

b();
console.log(a);
// guess? b is called but a is undefined

var a = "Hello world";

function b() {
  console.log("Called b!");
}

// b();
// console.log(a);
// guess? first b() then a
