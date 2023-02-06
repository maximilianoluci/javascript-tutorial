var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function () {
    var fullName = this.firstname + " " + this.lastname;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged: %s", this.getFullName());
  console.log("Arguments: %s %s", lang1, lang2);
  console.log("------------------------------");
};

var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

(function (lang1, lang2) {
  console.log("Logged: %s", this.getFullName());
  console.log("Arguments: %s %s", lang1, lang2);
  console.log("------------------------------");
}.apply(person, ["es", "en"]));

//function borrowing
var person2 = {
  firstname: "Jane",
  lastname: "Doe",
};

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
