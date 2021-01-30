// Task 1
let x = 1;
let y = 2;
let res1 = x + "" + y;
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
let isAdult = Number(prompt("Enter your age", "Your age is"));
if (Number.isNaN(isAdult) || isAdult == "") {
  alert("Only numbers required. Refresh the page and try again");
  Number(prompt("Enter your age", "Your age is"));
} else if (isAdult >= 18) {
  console.log("You are adult.");
} else if (isAdult <= 10) {
  console.log("You are too young!");
} else {
  console.log("Your age is out of permitted range.");
}

// Task 6
let a, b, c;
function askSides() {
  a = Number(prompt("Enter a number for side (a):"));
  b = Number(prompt("Enter a number for side (b):"));
  c = Number(prompt("Enter a number for side (c):"));
}
askSides();
let sp = (a + b + c) / 2; // semiperimeter
let calc = sp * ((sp - a) * (sp - b) * (sp - c));
if (calc < 0) {
  alert("Couldn't create a trianle with these values.");
  askSides();
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Incorrect data");
  askSides();
}
let area = Math.sqrt(calc);
console.log(area.toFixed(3));

((a * b) / 2) === area ? console.log("This triangle is right-angled.") : console.log("This triangle is NOT right-angled.");

//Task 7
let currHours = new Date().getHours();
let greeting = "Good night!";

if (currHours > 17 && currHours <= 23) greeting = "Good evening!";
else if (currHours > 5 && currHours <= 11) greeting = "Good morning!";
else if (currHours > 11 && currHours <= 17) greeting = "Good afternoon!";

console.log(greeting);

greeting = currHours > 17 && currHours <= 23 ? "Good evening!"
  : currHours > 5 && currHours <= 11 ? "Good morning!"
    : currHours > 11 && currHours <= 17 ? "Good afternoon!"
      : "Good night!";

console.log(greeting);

