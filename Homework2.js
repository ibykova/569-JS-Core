// Task 1

let x = 1;
let y = 2;
let res1 = x + "" + y ;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x < y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (parseInt("xy"));
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Task 2

let numToCheck = prompt("Enter a number", "Number");
if (0 === numToCheck % 2) console.log(numToCheck, "is Even.");
 else console.log(numToCheck, "is Odd.");


if (numToCheck % 7 === 0) console.log(numToCheck, "is multiple of 7.");
else console.log(numToCheck, "is NOT multiple of 7.");

// Task 3

let newArr = [];
let newArrData = [5, "string", true, null];
document.write(newArr.length);

newArrData[4] = prompt("Type something for the fifth array element", "Example");
console.log(newArrData[4]);

newArrData.shift();
console.log(newArrData);

//Task 4

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));

// Task 5

let isAdult = prompt("Enter your age", "Your age is");
if (isAdult >= 18) {
  console.log("You are adult.");
} else if (isAdult <= 10) {
  console.log("You are too young!");
} else if (isAdult >= 10 && isAdult <= 18){
  console.log("Your age is out of permitted range.");
}

// Task 6

let a = prompt("Enter a number for side 'a':", "Your value is:");
let b = prompt("Enter a number for side 'a':", "Your value is:");
let c = prompt("Enter a number for side 'a':", "Your value is:");
let sp = (a + b + c) / 2;
let area = Math.sqrt(sp * ((sp - a) * (sp - b) * (sp - c)));
console.log(area.toFixed(3));

