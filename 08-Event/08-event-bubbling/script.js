
const button = document.querySelector('form button');

const div = document.querySelector('form div:nth-child(4)'); //select the 2nd div of the form
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button clicked!');
  e.stopPropagation(); //stop the event from bubbling up
});

div.addEventListener('click', () => {
  alert('Div clicked!');
});

form.addEventListener('click', () => {
  alert('Form clicked!');
});

//With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.