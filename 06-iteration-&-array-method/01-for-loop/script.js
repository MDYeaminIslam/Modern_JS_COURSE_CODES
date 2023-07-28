// for ([initialExpression]; [condition]; [incrementExpression]){
//     statement;
// }

//Initial Expression - Initialize a variable/Counter
//condition Expression - Condition that the loop will continue to run as long as it is met or until the condition is false
//Increment Expression - Increment the counter
//Statement - Code that will run as long as the condition is true

for (let i = 0; i <= 10; i++){
    console.log('Number ' + i);
} //we can't use const because we are changing the value of i

//Nest loops
for (let i = 0; i <= 10; i++){
    console.log('Number ' + i);
    for (let j = 0; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//Loop through an array
const names = ['John', 'Peter', 'Bob', 'Mary', 'Jane'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}