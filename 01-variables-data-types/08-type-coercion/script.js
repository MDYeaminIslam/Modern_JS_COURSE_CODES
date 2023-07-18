let x;

// Type Coercion
x = 5 + '5'; //this will return 55 as a string

x = 5 + Number('5'); //this will return 10 as a number

x = 5 * '5'; //this will return 25 as a number

x = 5 + null; //this will return 5 as a number

x = Number(null); //this will return 0 as a number

x = Number(true); //this will return 1 as a number

x = 5 + true; //this will return 6 as a number

x = 5 + false; //this will return 0 as a number

x = 5 + undefined; //this will return NaN as a number

console.log(x, typeof x);
