//Arrow functions
const add = (a,b) =>{
    return a + b;
};

//Shorter arrow function | implicit return

const subtract = (a,b) => a - b;

//Arrow function with one argument | no parenthesis needed

const double = a => a*2;

//Returning an object
const createObj = () =>{
    name: 'John';
};

const numbers = [1,2,3,4,5,6];

numbers.forEach(function (n){
    console.log(n);
});


//Arrow function in a callback. Here callback means a function that is passed as an argument to another function.
numbers.forEach(n => console.log(n));



console.log(add(2,3));
console.log(subtract(9,3));
console.log(double(10));
console.log(createObj()); //undefined