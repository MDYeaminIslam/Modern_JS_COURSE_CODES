
let x;
const arr = [34,55,95,20,15];
arr.push(100); // add to the end
arr.pop(); // remove from the end
arr.unshift(1); // add to the beginning
arr.shift(); // remove from the beginning
arr.reverse(); // reverse the array

x = arr.includes(20); // check if the array includes the value and return true or false

x = arr.indexOf(20); // check the index of the value

//x = arr.slice(0,2); // slice the array from index 0 to 2

//x = arr.splice(0,2); // remove the elements from index 0 to 2
x = arr.splice(2,1); //

console.log(x,arr);