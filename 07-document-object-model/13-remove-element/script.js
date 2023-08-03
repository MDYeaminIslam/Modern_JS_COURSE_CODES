function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove(); // remove the element
}
function removeFirstItem(){
    const ul = document.querySelector('ul'); // select the ul element parent
    const li = document.querySelector('li:first-child'); // select the first li element
    ul.removeChild(li); // remove the li element
}

//Removing Elements

function removeItem(itemNumber)
{
    const ul = document.querySelector('ul'); // select the ul element parent
    const li = document.querySelector(`li:nth-child(${itemNumber})`); //we can use this method also: const li = document.querySelectorAll('li)[itemNumber-1]; // select the first li element
    ul.removeChild(li); // remove the li element
}

function removeItem3(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber-1].remove();
}

removeClearButton(); // call the function
// removeFirstItem();
removeItem(1);
removeItem3(3);