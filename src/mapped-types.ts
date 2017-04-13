interface Person {
  name: string;
  age: number;
  location: string;
}

interface PartialPerson {
  name?: string;
  age?: number;
  location?: string;
}

let a: Partial<Person>;
let b: Readonly<Person>;
let c: Pick<Person, "age" | "location">;
let d: Record<"seller" | "merchant" | "buyer", Person>;

interface FrozenPerson {
  readonly name: string;
  readonly age: number;
  readonly location: string;
}

interface PersonFieldValidation {
  name: boolean;
  age: boolean;
  location: boolean;
}

type PersonFieldValidation2 = {
  [P in keyof Person]: boolean;
  };

type FieldValidation<T> = {
  [P in keyof T]: boolean
  };

type PersonFieldValidation3 = FieldValidation<Person>;


const z: PartialPerson | FrozenPerson | PersonFieldValidation | PersonFieldValidation2 | PersonFieldValidation3
  | FieldValidation<Person>;

export function constructPerson(): Person {
  return {name: "John", age: 42, location: "Zürich"};
}

const john: Person = constructPerson();

a = john;
b = john;
c = john;
d = null;

type Frozen<T> = {
  readonly [P in keyof T]: T[P]
  };


function canDrinkNaive(person: Person): boolean {
  // does some things to person, should use all fields as readonly
  person.age = 42;
  return true;
}

canDrinkNaive(john);

function canDrink(person: Frozen<Person>): boolean {
  // does some things to person, should use all fields as readonly
  person.age = 42; // cannot assign to age because it is a readonly property
  return true;
}

canDrink(john);

// --------

const anonymousJohn: Pick<Person, "age" | "location"> = john;
console.log(anonymousJohn.location);
console.log(anonymousJohn.age);
console.log(anonymousJohn.name);
// property "name" does not exist on type Pick<Person, "age" | "location">

// --------

let sale: Record<"seller" | "merchant" | "buyer", Person>;
// let sale: { 'seller': Person, 'merchant': Person, 'buyer': Person };

sale = {
  seller: john,
  merchant: john,
  buyer: john
};

console.log(sale.seller.location);
console.log(sale.merchant.name);
console.log(sale.buyer.city);
// property "city" does not exist on type Person

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


