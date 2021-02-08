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
class MonthException {
	constructor(message) { 
    this.name = "MonthException";
    this.message = message;
   }
 }

function showMonthName(month) {
  try {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

      default: throw new MonthException("Incorrect month number");
    }
  }
  catch (error) {
    console.log("Error name: " + error.name);
    console.log("Error message: " + error.message);
    return ("There is no month as this: " + month);
  }
}
console.log(showMonthName(11));


//Task 4 
function showUser(id) {
  try {
    if (Math.sign(id) === -1) {
      throw new Error("ID must not be negative: " + id);
    } else {
      return { id };
    }
  }
  catch (error) {
    throw error;
  }
}
console.log(showUser(56));

function showUsers(ids) {
  let validIds = [];
  ids.forEach(id => {
    try {
      validIds.push(showUser(id))

    } catch (error) {
      console.log("Error name: " + error.name);
      console.log("Error message: " + error.message);
    }
    // 
  })
  return validIds;
}
console.log(showUsers([7, -12, 44, 22]));
