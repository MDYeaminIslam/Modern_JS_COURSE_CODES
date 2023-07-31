let output;
output = document.all; //this will return an HTML collection
output = document.all[2]; //this will return the head element
output = document.all.length; //this will return the number of elements in the DOM
output = document.documentElement; //this will return the html element

output = document.head; //this will return the head element
output = document.body; //this will return the body element

output = document.head.children; //this will return the children of the head element
output = document.head.children[0]; //this will return the meta element
output = document.body.children; //this will return the children of the body element

output = document.doctype; //this will return the doctypes
output = document.domain; //this will return the domain
output = document.URL; //this will return the URL
output = document.characterSet; //this will return the character set
output = document.contentType; //this will return the content type


output = document.forms; //this will return the forms
output = document.forms[0]; //this will return the first form
output = document.forms[0].id; //this will return the id of the first form
output = document.forms[0].method; //this will return the method of the first form
output = document.forms[0].action; //this will return the action of the first form

document.forms[0].id = 'new-id'; //this will change the id of the first form

// output = document.links; //this will return the links
// output = document.links[0]; //this will return the first link
// output = document.links[0].id; //this will return the id of the first link
// output = document.links[0].className = 'google-class'; //this will set new class name to the first link 
// output = document.links[0].classList; //this will return the class list of the first link


// output = document.images; //this will return the images
// output = document.scripts; //this will return the scripts

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));
console.log(output);