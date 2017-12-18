package com.company;

import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    Cat[] cats = new Cat[]{new Cat(), new Cat(), new Cat()};
    // compile time error: cats[1] = new Dog();

    System.out.println("I was here");
    Object[] catObjects = cats;
    doSomething(catObjects);
    System.out.println("Still works");
    catObjects[1] = new Dog();
    // Runtime error: we cannot assign a dog to a cats array!
    System.out.println("They will never reach me down here");
  }

  private static void doSomething(Object[] objects){

  }
}

class Cat {
  public void stroll() {
    System.out.println("Strolling...");
  }
}

class Dog {
  public void bark() {
    System.out.println("bark bark!");
  }
}
