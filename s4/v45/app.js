// function statement
function greet(name) {
  console.log("Hello %s", name);
}

greet("John");

// using a function expression
var greetFunc = function (name) {
  console.log("Hello %s", name);
};

greetFunc("John");

var greeting = (function (name) {
  return "Hello " + name;
})("John");

console.log(greeting);

//IIFE
(function (name) {
  var greeting = "IIFE: Hello ";
  console.log(greeting + name);
})("John");
