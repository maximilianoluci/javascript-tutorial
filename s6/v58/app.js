function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
