(function (global, $) {
  var Greetr = function (fname, lname, lang) {
    return new Greetr.init(fname, lname, lang);
  };

  Greetr.prototype = {};

  Greetr.init = function (fname, lname, lang) {
    var self = this;
    self.fname = fname || "";
    self.lname = lname || "";
    self.lang = lang || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  // expose to the outside world
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
