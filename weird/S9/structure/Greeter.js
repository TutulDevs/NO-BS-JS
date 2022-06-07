(function (global, $) {
  var Greetr = function (fname, lname, lang) {
    return Greetr.init(fname, lname, lang);
  };

  Greetr.init = function (fname, lname, lang) {
    var self = this;
    self.fname = fname || "";
    self.lname = lname || "";
    self.lang = lang || "en";
  };
})(window, jQuery);
