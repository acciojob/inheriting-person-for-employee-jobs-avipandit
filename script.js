// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the greet() method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Create the Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add the jobGreet() method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create a new Employee object and call the greet() and jobGreet() methods
const employee = new Employee("John Doe", 30, "Software Developer");
employee.greet(); // Output: "Hello, my name is John Doe, I am 30 years old."
employee.jobGreet(); // Output: "Hello, my name is John Doe, I am 30 years old, and my job title is Software Developer."

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
