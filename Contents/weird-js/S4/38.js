// 38. Objects, Functions, and 'this'

function a() {
  console.log(this);
  this.newVariable = "new variable";
}

var b = function () {
  console.log(this);
};

var c = () => console.log(this); // arrow functions 'this' always refers to the global. They don't have 'this'

a();
b();
c();

console.log(newVariable);

var d = {
  name: "The d object",
  log: function () {
    this.name = "updated d object";
    console.log(this); // refers to the d object

    // maybe a bug
    var setname = function (newname) {
      this.name = newname;
    };

    setname("updated again d object");

    console.log(this);
  },
};

d.log();

// get the setname's newname
console.log(window.name);

// fix the bug
var e = {
  name: "The e object",
  log: function () {
    let self = this; // self will always point to 'this'

    self.name = "updated e object";
    console.log(self); // refers to the e object

    // maybe a bug
    var setname = function (newname) {
      self.name = newname;
    };

    setname("updated again e object");

    console.log(self);
  },
};

e.log();
