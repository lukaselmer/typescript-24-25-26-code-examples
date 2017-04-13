"use strict";

function *generate() {
  yield 10;
  yield 20;
  yield 30;
}

for (const el of generate()) {
  console.log(`{el: ${el}}`);
}

const iterator: Iterator<number> = generate();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


console.log();

const values = [...generate()];
console.log(values[1]);
