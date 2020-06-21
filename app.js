class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels = 4;
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels = 2;
  revEngine() {
    return "VROOM!!!";
  }
}

// Part Four
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
  }
  vehicles = [];
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      throw new Error("Only vehicles are allowed in here!");
    } else if (this.vehicles.length >= this.capacity) {
      throw new Error("Sorry, we're full.");
    } else {
      console.log("Vehicle added!");
      return this.vehicles.push(vehicle);
    }
  }
}

let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
// "Sorry, we're full."
