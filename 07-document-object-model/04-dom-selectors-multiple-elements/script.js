//querySelectorAll returns a NodeList

const listItems = document.querySelectorAll('.item');
console.log(listItems[0].innerHTML);

// listItems[1].style.color = 'red';

// Iterate over the listItems
// listItems.forEach((item,index) => {
//     if(index%2 ===0){
//         item.style.backgroundColor = 'lightgray';
//         item.style.color = 'blue';
//     }
//     else{
//         item.style.backgroundColor = 'darkgray';
//         item.style.color = 'darkgreen';
//     }
// })


// getElementsByClassName returns HTMLCollection
const listItem2 = document.getElementsByClassName('item'); //returns HTMLCollection not NodeList

console.log(listItem2[0].innerHTML); 

const listItemArray = Array.from(listItem2); //convert HTMLCollection to Array
listItemArray.forEach((item,index) => {
    console.log(item.innerText);
});

// getElementsByTagName returns HTMLCollection

const ListItem3 = document.getElementsByTagName('li');
console.log(ListItem3[0].innerText);
