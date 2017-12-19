interface Mappable<T> {
  map<U>(f: (x: T) => U): Mappable<U>;
}

declare let a: Mappable<number>;
declare let b: Mappable<string | number>;

a = b;
b = a;
