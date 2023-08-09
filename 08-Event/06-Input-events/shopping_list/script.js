const form = document.getElementById('item-form');

let onSubmit = (e) => {
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if(item === '' || priority === '0') {
    alert('Please enter an item and select a priority');
    return;
  }



  console.log(item, priority);
};


let onSubmit2 = (e) => {
  e.preventDefault();


  const formData = new FormData(form); // form is the form element
  // const item = formData.get('item');
  // const priority = formData.get('priority');
  // console.log(item, priority);

  const entries = formData.entries();
  console.log(entries);
};

form.addEventListener('submit', onSubmit);