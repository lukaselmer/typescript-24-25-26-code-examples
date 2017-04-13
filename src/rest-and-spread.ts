const person: object = {first_name: "John", last_name: "Doe", id: 10};
const address = {street: "Richtistrasse 3", id: 20};
const merged = {...person, ...address};

console.log(merged);

const merged2 = {
  city: "Zürich",
  ...person,
  ...address,
  question: "?",
  answer: 42
};

console.log(merged2);
