let x;

const num = new Number(50900.70790); //this is an object

x = num.toString();

x = num.toString().length; //this will return the length of the string

x = num.toFixed(2); //this will return the number with 2 decimal places

x = num.toPrecision(2); //this will return the number with 4 significant digits

x = num.toExponential(2); //this will return the number in exponential notation with 2 decimal places

x = num.toLocaleString('en-US'); //this will return the number in a local string format

x = num.valueOf(); //this will return the primitive value of the number

x = Number.MAX_VALUE; //this will return the maximum value of a number
x = Number.MIN_VALUE; //this will return the minimum value of a number
console.log(x);