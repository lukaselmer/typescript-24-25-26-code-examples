let obj: object;
obj = 10; // not assignable to type object
obj = "Hello"; // not assignable to type object
obj = true; // not assignable to type object
obj = Symbol("key"); // not assignable to type object
obj = null; // would be OK without strictNullChecks
obj = undefined; // would be OK without strictNullChecks
obj = {}; // fine
obj = {hello: "world"}; // fine

console.log(obj);
