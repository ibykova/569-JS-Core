// Task 1
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};

function propsCount(currentObject) {
  let count = Object.keys(currentObject).length;
  return ("This is the number of object elements: " + count);
}
console.log(propsCount(mentor));
console.log(mentor);


// Task 2
let newObj = {
  name: "Yaroslava",
  group: 569,
  course: "JS Core",
  school: "SoftServe Academy",
  level: 1
};

let showProps = (obj) => Object.keys(obj);
console.log(showProps(newObj));

console.log(Object.values(newObj));
console.table(Object.entries(newObj));


// Task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

let std = new Person('Peter', 'Jackson')
std.showFullName();

class Student extends Person {
  constructor(name, surname, midleName, year, course) {
    super(name, surname);
    this.year = year;
    this.midleName = midleName;
    this.course = course;
  }
  showFullName(midleName) {
    return midleName ? `${this.name} ${midleName} ${this.surname}` :
    `${this.name} ${this.surname}`;
  }
  showCourse(course) {
    let joinYear = new Date();
    course = joinYear.getFullYear() - this.year;
    if (course > 6) {
      return "Graduate";
    } else {
      return course;
    }
  }
}
let std1 = new Student('John', 'Doe', 'Peter', 2015);

console.log("Student: " + std1.showFullName());
console.log("Current course: " + std1.showCourse());


//Task 4
class Worker {
  #experience = 1.2;

  constructor (fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
   let result = this.dayRate * this.workingDays;
   console.log(result);
   return result;
  }
  showSalaryWithExperience() {
    let result = this.showSalary() * this.#experience;
    console.log(result);
    return result;
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
    // Worker.#experience = 1.5;
    console.log(value);
  }
}

let worker1 = new Worker ('Peter Peterson', 48, 22);
console.log(worker1.fullName)
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker ('John Johnson', 20, 23);
console.log(worker2.fullName)
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker ('Andy Anderson', 29, 23);
console.log(worker3.fullName)
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

// let workerSalary = [worker1, worker2, worker3];
// let sortedSalary = [];
// workerSalary.forEach(w => {
//   console.log("Sorted salary " + w.showSalaryWithExperience())
// })
// workerSalary.sort(function(a, b){return a - b});

