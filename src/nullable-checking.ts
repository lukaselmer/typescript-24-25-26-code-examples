class Person {
  age?: number = 10;
}

const a = new Person();
const b = new Person();

console.log(a.age * b.age);
// errors for a.age and b.age (possibly undefined)

b.age = 20;
console.log(a.age * b.age);
// errors for a.age (possibly undefined)

if (a.age) {
  console.log(a.age * b.age); // fine
}

