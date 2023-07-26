//Challenge 1

function getCelsius(f){
    const celcius = ((f-32) * 5/9);
    return celcius;
}
console.log(getCelsius(60));

//Solving same challenge with arrow function

const getCelsius2 = f => ((f-32)* 5/9);
console.log(getCelsius2(60));

//Challenge 2
function minMax(arr){
    const min = Math.min(...arr); //spread operator
    const max = Math.max(...arr); //spread operator
    return {
        min,
        max,
    } //returning an object 
}

console.log(minMax([6,3,3,4,6,8,5,4,2,1,654,7,5]));

//Challenge 3

((length, width) =>{
    const area = length * width;
    
    const output = `The area of the rectangle with a length of ${length} and a width of ${width} is ${area}`;

    console.log(output);
})(20,10); //IIFE
