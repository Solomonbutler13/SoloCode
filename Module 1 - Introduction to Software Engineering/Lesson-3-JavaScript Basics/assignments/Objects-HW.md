```js
// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamVehicle = {
    make: "Volvo",
    model: "s60",
    year: 2023,
    electric: false,
    color: ["Silver", "Black", "brown"],
    features: {
      autopilot: true,
      speed: "fast",
      assistParking: true
    },
}

// 2.   Using dot-notation Log to the console 3 properties from the previous object
dreamVehicle. isfast= true
dreamVehicle. iselectric= false
dreamVehicle. isGerman= true

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
dreamVehicle ['language']='English'
dreamVehicle ['weight']= 'heavy'
dreamVehicle ['seats']= '5'
console.log (dreamVehicle)

// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(dreamVehicle.fuelType);

// 5.   Add a new key-value pair to the vehicle. 
dreamVehicle.topSpeed = 170;
console.log (dreamVehicle)
// 6.   Using bracket-notation update a property on the vehicle. 
dreamVehicle["color"][1] = "Blue";
console.log (dreamVehicle)
// 7.   Using dot-notation update a property on the vehicle. 
dreamVehicle.year = 2024;
console.log (dreamVehicle)
// 8.   Create a method for turning your vehicle on

function carOn (){}
console.log ("Volvo is on")

 
// 9.   Create a method for turning your vehicle off
function carOff (){}
console.log ("Volo is off")
//10.   
//      a. Check if your vehicle is on (it should be off)
if (dreamVehicle.carOn) {
  console.log("The Volvo is on.");
} else {
  console.log("The Volvo is off.");
}
//      b. Start your vehicle
function carOn(){}
console.log ("Volvo is on")
//      c. Check if your vehicle is on (it should be on)
if (dreamVehicle.carOn) {
  console.log("The Volvo is on.");
} else {
  console.log("The Volvo is off.");
}
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)
```

```output
{
  make: 'Volvo',
  model: 's60',
  year: 2023,
  electric: false,
  color: [ 'Silver', 'Black', 'brown' ],
  features: { autopilot: true, speed: 'fast', assistParking: true },
  isfast: true,
  iselectric: false,
  isGerman: true,
  language: 'English',
  weight: 'heavy',
  seats: '5'
}
undefined
{
  make: 'Volvo',
  model: 's60',
  year: 2023,
  electric: false,
  color: [ 'Silver', 'Black', 'brown' ],
  features: { autopilot: true, speed: 'fast', assistParking: true },
  isfast: true,
  iselectric: false,
  isGerman: true,
  language: 'English',
  weight: 'heavy',
  seats: '5',
  topSpeed: 170
}
{
  make: 'Volvo',
  model: 's60',
  year: 2023,
  electric: false,
  color: [ 'Silver', 'Blue', 'brown' ],
  features: { autopilot: true, speed: 'fast', assistParking: true },
  isfast: true,
  iselectric: false,
  isGerman: true,
  language: 'English',
  weight: 'heavy',
  seats: '5',
  topSpeed: 170
}
{
  make: 'Volvo',
  model: 's60',
  year: 2024,
  electric: false,
  color: [ 'Silver', 'Blue', 'brown' ],
  features: { autopilot: true, speed: 'fast', assistParking: true },
  isfast: true,
  iselectric: false,
  isGerman: true,
  language: 'English',
  weight: 'heavy',
  seats: '5',
  topSpeed: 170
}
Volvo is on
Volo is off
The Volvo is off.
Volvo is on
The Volvo is off.
```