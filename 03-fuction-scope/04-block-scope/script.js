const x = 100;
const foo = 1;
var bar = 2;
if (true){
    const y = 200;
    console.log(x + y);
}
//console.log(x + y); // y is not defined and this line will throw an error

if (true){
    const a = 500; // This variable is only accessible inside this block
    let b = 600; // This variable is only accessible inside this block
    var c = 700;// This variable is accessible outside this block
}
console.log(c); //this will work

function run(){
    var d = 100;
    console.log(d);
}
run();
console.log(d); //this will throw an error because d is function scope variable and can't access from outside