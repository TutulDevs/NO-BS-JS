// 49. Framework Aside: Function Factories

function makeGreet(lang) {
  return function (fname, lname) {
    if (lang === "en") console.log(`Hello ${fname} ${lname}`);

    if (lang === "es") console.log(`Hola ${fname} ${lname}`);
  };
}

var greetEnglish = makeGreet("en"); // gets its own execution context
var greetSpanish = makeGreet("es"); // gets its own execution context

// see this in the browser and open `[[Scopes]]: Scopes[2]`
console.dir(greetEnglish); 
console.dir(greetSpanish); 

greetEnglish("John", "Doe"); // Hello John Doe
greetSpanish("Sergio", "Ramos"); // Hello Sergio Ramos

// the `makeGreet` function is working as a factory function
// it is getting benefitted by closures to preserve the value 