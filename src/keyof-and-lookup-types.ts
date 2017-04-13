interface Person {
  name: string;
  age: number;
  location: string;
}

export function constructPerson(): Person {
  return {name: "John", age: 42, location: "Zürich"};
}

const john: Person = constructPerson();

// --------

let age: Person["age"];
// let age: number;
age = "23"; // "23" is not assignable to type "number"

// --------

let property: keyof Person;
// let property: "age" | "name" | "location";
property = "age";
property = "name";
property = "city"; // "city" is not assignable to type "age" | "name" | "location"

// --------

function set<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

set(john, "age", 20);
set(john, "name", "Doe");
set(john, "city", "Hello"); // "city" is not assignable to type "age" | "name" | "location"
set(john, "age", "23"); // "23" is not assignable to type "number"

// --------

let nameOrAge: Person["name" | "age"];
// let nameOrAge: Person["name"] | ["age"];
// let nameOrAge: number | string;


