//Task 1
let arr = [2, 3, 4, 5];
let mult = 1;
// approach with "for"
for (let i = 0; i < arr.length; i++) {
  mult = mult * arr[i];
}
console.log("Result of multiplying is: " + mult);

// approach with "do...while"
let i = 0;
do {
  mult * arr[i];
  i++;
} while (i < arr.length);
console.log("Result of multiplying is: " + mult);




//Task 2
let count;
console.log("These are specified numbers: ");
for (let count = 1; count <= 15; count++) {
  count % 2 === 0 ? console.log(count + " is even")
    : console.log(count + " is odd");
}


//Task 3

// first solution
console.log("Result of simple approach:");
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    let random = Math.round(Math.random() * 500);
    arr.push(random);
  }
  return arr;
}
console.log(randArray(5));

// other solution
console.log("Result of .map method:");
function randomArray(k) {
  return [...new Array(k)].map(function () {
    return Math.round(Math.random() * 500);
  });
}
let res = randomArray(5);
console.log(res);


// Task 4
function raiseToDegree() {
  let a = Number(prompt("Enter a number", "1"));
  console.log("This is the number: " + a);
  let b = Number(prompt("Enter a degree", "2"));
  console.log("This is the degree: " + b);
  return Math.round(Math.pow(a, b));
};
console.log("Result of a powered number is: " + raiseToDegree());

// function askNumbers() {
//   let num = +prompt("Enter a number", "Number");
//   let power = +prompt("Enter a degree for number", "Power");
//   console.log('num', num, 'power', power);
//   if (isNaN(num) || isNaN(power)) {
//     alert("Incorrect data");
//     // console.log('IF');
//     askNumbers();
//     // raiseToDegree(...askNumbers())
//   }
//   return [num, power];
// }
// // askNumbers();

// function raiseToDegree(a, b) {
//   // askNumbers();
//   console.log('a', a, 'b', b);
//   return Math.round(Math.pow(a, b));
// }

// let result = raiseToDegree(...askNumbers())
// console.log('res', result);


// Task 5
let findMin = (...args) => Math.min(...args);
console.log("This is the minimal value of arguments:");
console.log(findMin(12, 14, 4, -4, 0.2)); // arguments are taken from the task sample


//Task 6 
function findUnique(arr) {
  return (new Set(arr)).size === arr.length;
}
console.log("There is a unique value: ");
console.log(findUnique([1, 2, 3]));

// recursion solution
function allUnique(array) {
  let first = array[0];
  for (let i = 1; i < array.length; i++) {
    if (first === array[i])
      return false;
  }
  if (array.length === 0)
    return true;
  return allUnique(array.slice(1));
}
console.log("There is a unique value: ");
console.log(allUnique([1, 2, 3, 3, 2]));


// Task 7
let lastElem = (a, b) => b ? a.slice(-b) : a[a.length - 1];
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

// function lastElem3(a, b) {
//   return b ? a.slice(-b) : a[a.length - 1];
// }

// function lastElem2(a, b) {
//   if (b === undefined) {
//     return a[a.length - 1];
//   }
//   console.log(b);
//   return a.slice(-b);
// }


// Task 8
function wordsToTitleCase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

console.log(wordsToTitleCase("i love java script!"));