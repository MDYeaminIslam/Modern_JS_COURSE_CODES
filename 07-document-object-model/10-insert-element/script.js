//InsertAdjacentElement example
function insertElement(){
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');

    h1.textContent = 'InsertAdjacentElement example';
    filter.insertAdjacentElement('beforebegin',h1); //add element beforebegin
}

//InsertAdjacentText example
function insertText(){
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('beforebegin','InsertAdjacentText example'); // this will add text beforebegin

}
//InsertAdjacentHTML example
function insertHTML(){
    const clearBTN = document.querySelector('#clear');

    clearBTN.insertAdjacentHTML('afterend','<h3>InsertAdjacentHTML</h3>');
}

//InsertBefore example
function insertBeforeItem(){
    const ul = document.querySelector('ul'); //Parent element

    const li = document.createElement('li');
    li.textContent = 'InsertBefore example';

    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li,thirdItem); //insert li before thirdItem
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();
// "BeforeBegin" - Before the element itself.
// <p>
//     "AfterBegin" - Just inside the element, before its first child.
//     foo
//     "BeforeEnd" - Just inside the element, after its last child.
// </p>
// "AfterEnd"- After the element itself.