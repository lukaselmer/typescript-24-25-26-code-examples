"use strict";

interface LinkedListElement<T> {
  left?: LinkedListElement<T>;
  right?: LinkedListElement<T>;
  value: T;
}

export class DoublyLinkedList<T> implements Iterable<T> {
  head?: LinkedListElement<T>;
  tail?: LinkedListElement<T>;

  append(value: T) {
    const newElement = {value: value, left: this.tail};
    if (this.tail) {
      this.tail.right = newElement;
    } else {
      this.head = newElement;
    }
    this.tail = newElement;
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.right;
    }
  }

  *customIterator(): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.right;
    }
  }
}

// output

const list = new DoublyLinkedList<string>();
list.append("a");
list.append("b");
list.append("c");
list.append("TS 2017");

for (const a of list) {
  for (const b of list) {
    console.log(`iterator {a: ${a}, b: ${b}}`);
  }
}

console.log('--');
console.log('--');

// for (const a of list.customIterator()) {
//   for (const b of list.customIterator()) {
//     console.log(`generator {a: ${a}, b: ${b}}`);
//   }
// }
