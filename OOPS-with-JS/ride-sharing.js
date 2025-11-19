
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.from = fromLocation;
    this.to = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance <= 0 || isNaN(this.distance)) {
      throw new Error("Invalid distance");
    }
    return this.distance * 12; // ₹12 per km
  }
}

// Test
try {
  const trip1 = new Trip("A", "B", 10);
  console.log("Fare:", trip1.calculateFare());
} catch (err) {
  console.error("Trip Error:", err.message);
}

try {
  const trip2 = new Trip("X", "Y", -5);
  console.log("Fare:", trip2.calculateFare());
} catch (err) {
  console.error("Trip Error:", err.message);
}
