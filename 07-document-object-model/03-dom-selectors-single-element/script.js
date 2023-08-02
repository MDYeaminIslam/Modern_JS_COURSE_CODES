//document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className); // class is a reserved word in JS, so we use className
console.log(document.getElementById('app-title').getAttribute('id')); // getAttribute() is a method that can be used to get any attribute of an element

//Set Attributes
document.getElementById('app-title').title = 'Shopping App';

document.getElementById('app-title').setAttribute('class', 'new-class'); // setAttribute() is a method that can be used to set any attribute of an element
document.getElementById('app-title').getAttribute('class');


const title = document.getElementById('app-title');
console.log(title);


//  Get/Change content
console.log(title.textContent); // get the text content of the element
title.textContent = 'Hello Shoppping List'; // change the text content of the element
title.innerText = 'Hello Shoppping List'; // change the text content of the element
title.innerHTML = '<strong>Hello Shoppping List</strong>'; // change the text content of the element

//Change styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));

console.log(document.querySelector('li:nth-child(2)').innerHTML); // get the innerHTML of the second li element

//Use these methods on other elements

const List = document.querySelector('ul'); // get the ul element
console.log(List);

const firstItem = List.querySelector('li');
firstItem.style.color = 'red';