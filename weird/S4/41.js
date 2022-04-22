// 41. Framework Aside: Function Overloading

// the problem
function greet(fname, lname, lang = "en") {
  if (lang == "en") console.log(`Hello ${fname} ${lname}`);

  if (lang == "es") console.log(`Hola ${fname} ${lname}`);
}

greet("John", "Doe", "en"); // Hello John Doe
greet("John", "Doe", "es"); // Hola John Doe

// solution
function greetNew(fname, lname, lang = "en") {
  if (lang == "en") console.log(`Hello ${fname} ${lname}`);

  if (lang == "es") console.log(`Hola ${fname} ${lname}`);
}

function greetEnglish(fname, lname) {
  greetNew(fname, lname, "en");
}

function greetSpanish(fname, lname) {
  greetNew(fname, lname, "es");
}

// no need to worry about the language
//just pass the right language functioon
greetEnglish("Mark", "Smith"); // Hello Mark Smith
greetSpanish("Mark", "Smith"); // Hola Mark Smith
