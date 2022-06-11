// var john = G$("John", "Doe", "es");

// console.log(john);
// console.log(john.fullName());
// // console.log(john.validate()); // throws error
// console.log(john.greeting());
// console.log(john.formalGreeting());

// console.log("---");
// john.greet().greet(true);
// john.greet().setLang("en").greet(true);

// console.log("--- $ ---");
// john.setLang("es").HTMLGreeting("#greeting", true);

// let use it in the page
$("#login").click(function () {
  var loginGreetr = G$("Mark", "Smith");

  $("#logindiv").hide();

  loginGreetr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
