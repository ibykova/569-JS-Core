// Task 2
console.log("Yaroslava Bykova");

// Task 3 
let variable = 5;
let variable2 = "text";
console.log(variable, variable2);

variable2 = variable;
console.log(variable, variable2);

// Task 4
let Obj = {
  string: "This is a string",
  number: 5,
  boolean: true,
  undefined: undefined,
  null: null
}
console.log(Obj);

// Task 5
let isAdult = confirm("Are you adult?");
console.log(isAdult);

// Task 6
let firstName = "Yaroslava";
let lastName = "Bykova";
let studyGroup = 569;
let birthYear = 1992;
let isMarried = false;
console.log(typeof(studyGroup),typeof(birthYear));
console.log(typeof(isMarried));
console.log(typeof(firstName),typeof(lastName));

let nullVar = null;
let undefVar = undefined;
console.log(typeof(nullVar), typeof(undefVar));

// Task 7
let userName = prompt("Enter your name", "Name");
let userEmail = prompt("Enter you email", "example@server.com");
let userPassword = prompt("Provide a password", "exAmple123");
document.write(`Dear ${userName}, your email is ${userEmail} and your password is ${userPassword}.`);

// Task 8
let sec = 1;
let min = sec * 60;
let h = min * 60;
let day = h * 24;

let mon30 = [3,5,8,10];
let mon31 = [0,2,4,6,7,9,11];
let mon28 = [1];
let currMonthNum = new Date().getMonth();
let monthDays;
if (mon30.includes(currMonthNum)) {
  monthDays = 30;
} else if (mon31.includes(currMonthNum)) {
  monthDays = 31;
} else if (mon28.includes(currMonthNum)) {
  monthDays = 28;
} else {
  monthDays = 29;
}

let month = day * monthDays;

document.write(" Seconds in an hour: " + h);
document.write(" Seconds in a day: " + day);
document.write(" Seconds in a month: " + month);