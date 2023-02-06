function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hello %s %s", firstname, lastname);
    }

    if (language === "es") {
      console.log("Hola %s %s", firstname, lastname);
    }
  };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");
