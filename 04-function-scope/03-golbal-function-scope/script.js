const x = 100;

console.log(x, 'In global scope');
// function run(){
//     console.log(window.innerHeight);
//     console.log(x, 'in function);
// }
// run();

if (true){
    console.log(x, 'In block scope');
}

//We can't access block scope variable from outside
//But can access global scope variable from anywhere
function add(){
    const x = 200;
    console.log(x, 'In function scope');
}
add();