//Challenge 1

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);    //add 0 to the end of the array
arr.unshift(6); //add 6 to the beginning of the array

//Final output: [6,5,4,3,2,1,0]
//console.log(arr);

//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5,6,7,8,9,10];

//Solution 1
const arr3 = arr1.slice(0,4).concat(arr2);

//Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4,1);
console.log(arr4);