function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = "Replace First";

    firstItem.replaceWith(li); //replaceWith() is a method of the Element interface

}
function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = '<li>Replaced Second</li>'; //outerHTML is a property of the Element interface which represents the HTML markup of the element's content
}

function replaceAllItems(){
    const list = document.querySelectorAll('li');

    list.forEach((item,index) => {
        item.innerHTML = 'Replace ALL';
    });

}

function replaceChildheading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'New Shopping List';
    header.replaceChild(h2,h1); //replaceChild() is a method of the Node interface which replaces a child node with a new node

}



replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildheading();