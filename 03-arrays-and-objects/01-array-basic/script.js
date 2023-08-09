
let x;
//Array Literal
const numbers = [12, 23, 33, 44, 5, 6, 7, 82, 9];
const  mixed = [12,'Hello',true,30.9,null];
//Array Constructor
const fruits = new Array('apple','grape','orange'); //constructor


x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[1]}`;

x = numbers.length;

fruits[2] = 'korolla';

fruits[fruits.length] = 'banana'; //add new element at the end of the array because of length method.

console.log(fruits);