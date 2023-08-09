//Event delegation: That means we put the event listener on one of the parent elements and then use logic inside of the event handler to target the element that we actually want that event listener to work on.

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     })
// });

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});
