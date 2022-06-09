// 46. Framework Aside: IIFEs and Safe Code

var lastName = "Doe";

(function (global, firstname) {
  var greetings = "Hello";

  console.log(greetings + " " + firstname + " " + global.lastName);
})(window, "John"); // Hello John Doe
