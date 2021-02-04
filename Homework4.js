// Task 1
// try...catch approach

function calcRectangleArea2() {
  let height = Number(prompt("Set a height", "5"));
  let width = Number(prompt("Set a width", "5"));
  try {
    if (isNaN(width) || isNaN(height)) {
      throw new Error("Wrong data");
    }
    return height * width;
  }
  catch (error) {
    return error;
  }
}
console.log(calcRectangleArea2());

//ternary approach
function calcRectangleArea() {
  let height = Number(prompt("Set a height", "5"));
  let width = Number(prompt("Set a width", "5"));
  let area = height * width;
  return area ? area : new Error("Wrong data");
}
console.log(calcRectangleArea());


// Task 2 
function checkAge() {
    let age = Number(prompt("Enter your age", "   "));
    try {
      if (isNaN(age)) {
        alert("Only numbers required");
        console.log(age);
        throw new Error("Wrong data");
      } else if (age === 0) {
        alert("No data was set");
        console.log(age);
        throw new Error("Empty data");
      } else if (age < 14) {
        alert("Too young");
        console.log(age);
        throw new Error("Not adult");
      } else {
      console.log("Access granted");
      }
    }
    catch (error) {
      console.log("Error name: " + error.name);
      console.log("Error message: " + error.message);
      return age;
    }
  }
  console.log(checkAge());

  // Task 3


