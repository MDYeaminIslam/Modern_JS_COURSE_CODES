// console.log(window);
// console.dir(window.document);//document object
// console.log(document.body.innerHTML);
console.log(document.links[0]);

// document.body.innerHTML = "<h1>DOM</h1>";
// document.write('Hello From DOM'); //not recommended

console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = "<h1>Hello from main JS</h1>"; //overwrites the content

document.querySelector('#main h1').innerHTML = "HELLO"; //selects the first element and overwrites the content with HELLO