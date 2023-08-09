const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox-input');
const heading = document.querySelector('h1');

let onInput = (e) => {
  heading.textContent = e.target.value;
};

let onChecked = (e) => {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not checked';
};

let onFocus = () => {
  console.log('focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineColor = 'green';
  itemInput.style.outlineWidth = '1px';

};
let onBlur = () => {
  console.log('Input is not focused');
  itemInput.style.outlineColor = 'tomato';


};


itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);