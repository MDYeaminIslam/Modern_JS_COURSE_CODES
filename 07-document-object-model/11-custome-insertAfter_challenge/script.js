function insertAfter(newEl, existing){
   console.log(existing.parentElement.insertBefore(newEl, existing.nextSibling));
}

//New element to insert
const li = document.createElement('li');
li.textContent = "Insert Me After";

//Existing element to insert After
const firstItem = document.querySelector('li:first-child');

//Our custom function
insertAfter(li, firstItem);