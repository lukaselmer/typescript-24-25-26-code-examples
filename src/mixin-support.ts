type Constructable = new(...args: any[]) => object;

function Timestamped<BC extends Constructable>(Base: BC) {
  return class extends Base {
    private _created_at = new Date();

    get createdAt() {
      return this._created_at;
    }
  };
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const TimestampedPoint = Timestamped(Point);
const point = new TimestampedPoint(10, 20);
point.x;
point.y;
point.createdAt;
point.destroyedAt;
// Property 'destroyedAt' does not exist on type 'Timestamped<typeof Point>.(Anonymous class) & Point'.


