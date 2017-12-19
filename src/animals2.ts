class Animal {
  eat() {
    console.log('eating');
  }
}

class Dog extends Animal {
  bark() {
    console.log('barking');
  }
}

class Cat extends Animal {
  meow() {
    console.log('meowing');
  }
}

interface Producer<T> {
  // in C#, we would declare Comparer<out T>
  produce: (a: string) => T;
}
declare let animalProducer: Producer<Animal>;
declare let dogProducer: Producer<Dog>;
animalProducer = dogProducer; // Ok
dogProducer = animalProducer; // Error

interface ProducerAndComparer<T> {
  produce: (a: string) => T;
  compare: (a: T, b: T) => number;
}
declare let animalPC: ProducerAndComparer<Animal>;
declare let dogPC: ProducerAndComparer<Dog>;
animalPC = dogPC; // Error
dogPC = animalPC; // Error

interface Comparer<T> {
  // in C#, we would declare Comparer<in T>
  compare: (a: T, b: T) => number;
}
declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;
animalComparer = dogComparer; // Error
dogComparer = animalComparer; // Ok

interface Comparer<T> {
  compare: (a: T, b: T) => number;
}
interface Comparer2<T> {
  compare(a: T, b: T): number;
}
declare let animalComparer2: Comparer2<Animal>;
declare let dogComparer2: Comparer2<Dog>;
animalComparer2 = dogComparer2; // Ok because of bivariance
dogComparer2 = animalComparer2; // Ok

class Comparer3<T> {
  compare(a: T, b: T): number {
    if (a && b) return 0;
    return 42;
  }
}
declare let animalComparer3: Comparer3<Animal>;
declare let dogComparer3: Comparer3<Dog>;
animalComparer3 = dogComparer3; // Ok because of bivariance
dogComparer3 = animalComparer3; // Ok
