let output;
//Get child elements

const parent = document.querySelector('.parent');

output = parent.children[1];
output = parent.children[1].textContent;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'CHILD 2';
parent.children[1].style.color = 'red';

parent.firstElementChild.textContent = 'CHILD FIRST';
parent.lastElementChild.textContent = 'CHILD LAST';


//GET parent element

const child = document.querySelector('.child');

output = child.parentElement; //parent element
child.parentElement.style.color = 'gray';
child.parentElement.style.border = '1px solid red';
child.parentElement.style.padding = '10px';

//Get siblings element
const secondItem = document.querySelector
('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'aqua';
secondItem.previousElementSibling.style.color = 'black';



console.log(output);
