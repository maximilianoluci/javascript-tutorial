var Tony = {
  firstname: "Tony",
  lastname: "Alicea",
  address: {
    street: "111 Main St.",
    city: "New York",
    state: "NY",
  },
};

function greet(person) {
  console.log("Hi %s", person.firstname);
}

greet(Tony);

greet({
  firstname: "Jane",
  lastname: "Doe",
});

Tony.address2 = {
  street: "333 Second St.",
};
