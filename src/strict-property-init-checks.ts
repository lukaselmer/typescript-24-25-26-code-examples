export function f() {
  return 42;
}

// @ts-ignore
// Compile with --strict
class Test1 {
  a: number; // Error, property not initialized
  b?: string; // Ok, type includes undefined
}

// @ts-ignore
// Compile with --strict
class Test2 {
  a: number = 0; // Ok
  b?: string;
}

// @ts-ignore
// tslint:disable:prefer-conditional-expression
// Compile with --strict
class Test3 {
  a: number;
  constructor(startAtZero: boolean) {
    if (startAtZero) {
      this.a = 0;
    } else {
      this.a = 1;
    }
  }
}

// @ts-ignore
// Compile with --strict
class Test4 {
  a: number;
  constructor() {
    const z = this.a; // Error
    console.log(z);
    this.a = 0;
  }
}

// @ts-ignore
// Compile with --strict
class Test5 {
  a: number;
  constructor() {
    this.foo();
    this.a = 0;
  }
  foo() {
    // Uninitialized value of 'a' observable here
  }
}

// @ts-ignore
// Compile with --strict
class Test6 {
  a: number; // Error, not initialized
  'hello world': number; // No check
}

// @ts-ignore
// tslint:disable:typedef-whitespace
// Compile with --strict
class C {
  a: number; // Use ! to suppress error
  b: string; // Use ! to suppress error
  initialize() {
    this.a = 0;
    this.b = 'hello';
  }
}

const x = !3;
