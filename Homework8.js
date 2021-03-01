// Task 1
function upperCase(str) {
  let regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    return console.log("String starts with uppercase character");
  }
  return console.log("String starts NOT with uppercase character");
}
upperCase("regexp");
upperCase("RegExp");

// Task 2
function checkEmail(someText) {
  let regexp = /^[^@]+@\w+(\.\w+)+\w$/;
  if (regexp.test(someText)) {
    return console.log(true);
  }
  console.log(false);
}
checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2@.gmail.com");

// Task 3
let paragraph = "cdbBdbsbz";
let regex = /d/i;
let regex1 = /db+bd/i;
let regex2 = /(b)+/gi;

let found = paragraph.match(regex);
let found1 = paragraph.match(regex1);
let found2 = paragraph.match(regex2);

console.log([found1[0] + ", " + found2[0] + ", " + found[0]]);

// Task 4
let p = "Java Script";

let replacedStr = p.replace(/Script|Java/g, function (word) {
  return word === 'Java' ? 'Script,' : 'Java';
});
console.log(replacedStr);

//other solution (advanced level):
// const options = {
//   Java: 'Script,',
//   Script: 'Java'
// };
// let replacedStr = p.replace(/Script|Java/g, function(word) {
//   return options[word];
// }
// console.log(replacedStr);

//Task 5
// function isCardNumber(str) {
//   regexp = /\b(?: \d[-] *?){ 13, 16 } \b/;

//   if (regexp.test(str)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isCardNumber("9999-9999-9999-9999"));
