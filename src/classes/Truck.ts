// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

//x TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
  // xTODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


  // xTODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // xTODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // xTODO: Create a constructor that accepts the properties of the Truck class
  constructor(vin: string,color: string,make: string,model: string,year: number,weight: number,topSpeed: number,wheels: Wheel[],towingCapacity: number

   ) {
    super()
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    
    this.towingCapacity = towingCapacity;
  }

  tow(vehicle: Truck | Motorbike | Car): void {

 
    //x TODO: Get the make an model of the vehicle if it exists
    const make  = vehicle.make;
    const model = vehicle.model;
    // xTODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity ) {
      // create a car
    //   this.createCar();
    //x TODO: xIf it is, log that the vehicle is being towed
    console.log('The vehicle is being towed!')
    
    }else {
      console.log('The vehicle is to heavy to be towed!')
    }
    // xTODO: If it is not, log that the vehicle is too heavy to be towed
  }

  // TODO: Override the printDetails method from the Vehicle class

  override printDetails(): void {
    // TODO: The method should call the printDetails method o
    super.printDetails();
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight,
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity ${this.towingCapacity}`);
    console.log(`Wheels ${this.wheels}`);

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  
    

  }
    // xTODO: The constructor should call the constructor of the parent class, Vehicle
}  
    
 //x TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    

  // TODO: Implement the tow method from the AbleToTow interface
  
  

// Export the Truck class as the default export
export default Truck;