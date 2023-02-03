function greet(whattosay) {
  return function (name) {
    console.log("%s %s", whattosay, name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony");
