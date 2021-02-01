//Task 1
let arr = [2, 3, 4, 5];
let mult = 1;
for (let i = 0; i < arr.length; i++) {
  mult = mult * arr[i];
}
console.log(mult);


//Task 2
let count = 0;
for (let count = 1; count <= 15; count++) {
  count % 2 === 0 ? console.log(count + " is even")
    : console.log(count + " is odd");
}
console.log(count);


//Task 3
// first solution
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
  let b = Number(prompt("Enter a degree", "2"));
  return Math.round(Math.pow(a, b));
};
console.log(raiseToDegree());


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
console.log(findMin(12, 14, 4, -4, 0.2)); // arguments are taken from the task sample


//Task 6 
function findUnique(arr) {
  return (new Set(arr)).size === arr.length;
}
console.log(findUnique([1, 2, 3]));
