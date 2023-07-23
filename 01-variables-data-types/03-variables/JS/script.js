//Ways to declare variables
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

//Naming conventions for variables
// - Only letters, numbers, _ and $
// - Cannot start with a number
// - Multi word variables
// firstName = CamalCase
// FirstName = PascalCase
// first_name = snake_case/underscore_case
// firstname = lowercase

age = 31;
// We can reassign variables but we cannot redeclare them
// we can't reassign const variables

const arr = [1,2,3,4,5];
arr.push(6); // we can change the value of const variables using methods
console.log(arr);

//Declare multiple variables
let a,b,c;
const d = 10, e = 20, f = 30;
console.log(d);
