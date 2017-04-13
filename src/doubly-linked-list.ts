"use strict";

interface LinkedListElement<T> {
  left?: LinkedListElement<T>;
  right?: LinkedListElement<T>;
  value: T;
}

export class DoublyLinkedList<T> implements Iterable<T> {
  private head?: LinkedListElement<T>;
  private tail?: LinkedListElement<T>;

  append(value: T) {
    const nextElement = {left: this.tail, value: value};

    if(!this.tail){
      this.head = nextElement;
    } else {
      this.tail.right = nextElement;
    }

    this.tail = nextElement;
    // TODO: implement this
  }

  [Symbol.iterator](): Iterator<T> {
    let current = this.head;
    return {
      next: () => {
        if(current){
          const value = current.value;
          current = current.right;
          return {done: false, value: value};
        }
        return {done: true, value: <any> null};
      }
    }
    // TODO: implement this
  }

  *customIterator(): Iterable<T> {
    let current = this.head;
    while(current){
      yield current.value;
      current = current.right;
    }
    // TODO: implement this
  }
}

const list = new DoublyLinkedList<string>();
list.append("a");
list.append("b");
list.append("c");

for (const a of list) {
  for (const b of list) {
    console.log(`iterator {a: ${a}, b: ${b}}`);
  }
}

console.log('--');

for (const a of list.customIterator()) {
  for (const b of list.customIterator()) {
    console.log(`generator {a: ${a}, b: ${b}}`);
  }
}
