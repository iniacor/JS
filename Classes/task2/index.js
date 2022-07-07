// input - obj;
// output - array;
export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels, maxSpeed);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

const ship1 = new Ship('Aurora', 0, 17);
ship1.move();
ship1.stop();
console.log(ship1.maxSpeed);
console.log(ship1.name);
console.log(ship1.numberOfWheels);
