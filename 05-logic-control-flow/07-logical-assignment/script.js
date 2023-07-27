// || -> assigns the right side value if the left side is falsy value

let a = false;

if (!a){
    a = 10;
}

a ||= 10;
console.log(a);

// && -> assigns the right side value only if the left side is truthy value
let b = 10;

if(b){
    b = 20;
}
b &&= 20;
console.log(b);

// ?? -> assigns the right side value only if the left side is null or undefined

let c = null;

if(c === null || c === undefined){
    c = 10;
}
c ??= 10;
console.log(c);