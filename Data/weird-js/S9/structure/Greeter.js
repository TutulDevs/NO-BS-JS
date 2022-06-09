(function (global, $) {
  // 'new' an object
  var Greetr = function (fname, lname, lang) {
    return new Greetr.init(fname, lname, lang);
  };

  // hidden within the scope of the IIFE & never directly accessible
  var supportedLangs = ["en", "es"];

  // informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  // formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  // logger messages
  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
  };

  Greetr.prototype = {
    fullName: function () {
      return `${this.fname} ${this.lname}`;
    },
    // validate langs
    validate: function () {
      if (supportedLangs.indexOf(this.lang) === -1) {
        throw "Invalid language!";
      }
    },
    greeting: function () {
      return `${greetings[this.lang]} ${this.fname}!`;
    },
    formalGreeting: function () {
      return `${formalGreetings[this.lang]}, ${this.fullName()}`;
    },
    greet: function (formal) {
      var msg;

      // if undefined or null, it'll be coered to false
      if (formal) msg = this.formalGreeting();
      else msg = this.greeting();

      if (console) console.log(msg);

      // `this` refers to the calling object at execution time
      // makes the method chainable, a.b().c()
      return this;
    },
    log: function () {
      if (console) {
        console.log(`${logMessages[this.lang]}: ${this.fullName()}`);
      }

      return this;
    },
    setLang: function (lang) {
      this.lang = lang;

      this.validate();

      return this;
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) throw "jQuery not found!";

      if (!selector) throw "jQuery selector not found!";

      var msg;
      if (formal) msg = this.formalGreeting();
      else msg = this.greeting();

      $(selector).html(msg);

      return this;
    },
  };

  Greetr.init = function (fname, lname, lang) {
    var self = this;
    self.fname = fname || "";
    self.lname = lname || "";
    self.lang = lang || "en";

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  // expose to the outside world
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
