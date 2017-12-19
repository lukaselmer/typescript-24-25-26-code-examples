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

class Greyhound extends Dog {
  race() {
    console.log('racing');
  }
}

let animal = new Animal();
let dog = new Dog();
const greyhound = new Greyhound();

animal = dog;
dog = animal;

export function makeSound(aDog: Dog) {
  aDog.bark();
}

makeSound(greyhound);
makeSound(dog);
makeSound(animal);

function giveBirth(): Animal {
  if (Math.random() > 0.33) return new Greyhound();
  if (Math.random() > 0.5) return new Dog();
  return new Animal();
}

let dogToDog: ((_d: Dog) => Dog);
dogToDog = (_d: Dog) => new Dog();

dogToDog = (_d: Greyhound) => new Greyhound();
dogToDog = (_d: Greyhound) => new Animal();
dogToDog = (_d: Animal) => new Animal();
dogToDog = (_d: Animal) => new Greyhound();

dogToDog = (g: Greyhound) => {
  g.race();
  return new Greyhound();
};

dogToDog = (g: Greyhound) => {
  g.race();
  return new Animal();
};

dogToDog = (a: Animal) => {
  a.eat();
  return new Animal();
};

dogToDog = (_d: Animal) => {
  _d.eat();
  return new Greyhound();
};
const newDog: Dog = dogToDog(dog);

// let greyhoundArray: Greyhound[] = [new Greyhound(), new Greyhound()];

let animalArray: Animal[] = [new Animal(), new Animal()];
const dogArray: Dog[] = [new Dog(), new Dog()];

animalArray = dogArray;
animalArray[0] = new Animal();
dogArray[0].bark();
