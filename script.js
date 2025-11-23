let userInputString = prompt("Kelvin:");
let userInteger = parseInt(userInputString,10);

if (isNaN(userInteger)) {
  console.log("Invalid Number.");
} else {
  userInteger = userInteger -= 273.15
  console.log("Celcius: " + userInteger)
  userInteger = userInteger *= 1.8
  userInteger = userInteger += 32
  console.log("Kelvin To Farenheit: " + userInteger)
}