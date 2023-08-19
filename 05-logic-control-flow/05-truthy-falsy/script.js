// Falsy values:
// - False
// - 0
// - "" or '' (Empty String)
// - Null
// - undefine
// - Nan


//Truthy values
// - Everything else that is not falsy
// - true
// - '0' (0 is a string)
// - ' ' (space is string)
// - 'false' (false in a string)
// - [] empty array
// - {} empty obj
// - function () {} Empty function




const x = 0;

if (x){
    console.log('This is truthy');
}
else{
    console.log('This is falsy');

}


console.log(Boolean(x));


//Truthy ans falsy caveats
const children = 0;

if (!isNaN(children)){
    console.log(`You have ${children} children`);
}
else{
    console.log('Please enter number of children');
}

//Checking for empty arrays
const posts = ['Post One','Post Two'];

if(posts.length > 0){
    console.log('List Posts');
}
else {
    console.log('No Posts');
}

//Checking for empty objects

const user = {};

if(Object.keys(user).length > 0){
    console.log('List user');
}
else {
    console.log('No user');
}

//Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);