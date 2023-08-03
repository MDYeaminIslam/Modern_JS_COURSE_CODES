const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');


function run(){
    //ClassName
    // console.log(itemList.className);
    // text.className = 'card dark'; // override the class name
    //console.log(itemList.classList);

    itemList.classList.forEach(c => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card');
    text.classList.toggle('hidden');

}
document.querySelector('button').onclick = run; // run is a function