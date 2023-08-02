let output;

const parent = document.querySelector('.parent');

output = parent.childNodes; // NodeList(5) [text, h1, text, p, text]
output = parent.childNodes[0]; 
output = parent.childNodes[0].textContent; 
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].textContent; 
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = 'CHILD TWO';
output = parent.childNodes[3].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'CHILD FIVE'; // CHILD FIVE
//Parent Node
const child = document.querySelector('.child');
output = child.parentNode;
child.parentNode.style.backgroundColor = 'red';
child.parentNode.style.padding = '10px';
child.parentNode.border = '1px solid #ccc';

//Siblings 
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);