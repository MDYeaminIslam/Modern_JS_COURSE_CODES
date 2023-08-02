//Creating a new element and add it to the DOM

const div = document.createElement('div'); // creating a new div element
div.className = 'my-element'; // adding a class name to the div element
div.id = 'my-element'; // adding an id to the div element
div.setAttribute('title', 'My-element'); // adding a title to the div element

div.innerText = 'Hello World'; // adding text to the div element

const text = document.createTextNode('Hola Mundo'); // creating a text node using the createTextNode method
div.appendChild(text); // adding the text node to the div element


console.log(div);