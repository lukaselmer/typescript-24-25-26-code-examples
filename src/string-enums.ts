enum OldColors {
  Red,
  Green,
  Blue
}

console.log(OldColors.Blue);

enum Colors {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

console.log(Colors.Blue);

// @ts-ignore
console.log(Colors.Black);

function f(n: number) {
  n = 0;
}

class C {
  private m: number;
  constructor() {
    this.m = 0;
  }
}
