let x;

const fruits = ['apple','grape','orange'];
const berries = ['strawberry','blueberry','blackberry'];

// fruits.push(berries);

// x = fruits[3][0]; // strawberry
const allFruits = [fruits,berries]; // nested array
x = allFruits;

x = fruits.concat(berries); // combine two arrays entirely

//Spread operator

x = [...fruits,...berries]; // combine two arrays entirely and act as a single array

//Flatten Array

const arr =[1,2,3,[4,5,6],[7,8,9]];
x = arr.flat(); // flatten the array that means remove the nested array and make it a single array

//Statice Methods on Array Onbject
x = Array.isArray(arr); // check if the object is an array or not. return true or false

x = Array.from('12345'); // convert string to array

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a,b,c); // convert string to array
console.log(x);