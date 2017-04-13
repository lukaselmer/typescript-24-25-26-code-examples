class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A { constructor() { super(); } }

new A(); // logs "A"
new B(); // logs "B"

