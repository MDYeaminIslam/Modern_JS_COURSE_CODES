const logo = document.querySelector('img');

const onClick = () => {
    console.log('Clicked!');
}
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'pink'){
        document.body.style.backgroundColor = 'pink';
        document.body.style.color = 'white';

    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'blue';
    }
}
const onRightClick = () => console.log('Right click event'); //Note: If we right click on the image, it will show 'Right click event' in the console.

const onMouseDown = () => console.log('Mouse down event'); //Note: If we click on the image, it will show 'Mouse down event' in the console.


const onMouseUp = () => console.log('Mouse Up event'); //
const onMouseWheel = () => console.log('Mouse Wheel event'); //
const onMouseOver = () => console.log('Mouse Over event'); 
const onMouseOut = () => console.log('Mouse Out event');
const onDragStart = () => console.log('Drag Start event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag End event');
//Event Listener
logo.addEventListener('click', onClick); //Note: If we click on the image, it will show 'Clicked!' in the console.
logo.addEventListener('dblclick', onDoubleClick); //Note: If we double click on the image, it will change the background color to pink and the text color to white. If we double click again, it will change the background color to white and the text color to blue.
logo.addEventListener('contextmenu', onRightClick); //Note: If we right click on the image, it will show 'Right click event' in the console.
logo.addEventListener('mousedown', onMouseDown); //Note: If we click on the image, it will show 'Mouse down event' in the console.
logo.addEventListener('mouseup', onMouseUp); //Note: If we click on the image, it will show 'Mouse Up event' in the console.
logo.addEventListener('wheel', onMouseWheel); //Note: If we click on the image, it will show 'Mouse Wheel event' in the console.
logo.addEventListener('mouseover', onMouseOver); //Note: If we click on the image, it will show 'Mouse Over event' in the console.
logo.addEventListener('mouseout', onMouseOut); //Note: If we click on the image, it will show 'Mouse Out event' in the console.
logo.addEventListener('dragstart', onDragStart); //Note: If we click on the image, it will show 'Drag Start event' in the console.

logo.addEventListener('drag', onDrag); //Note: If we click on the image, it will show 'Drag event' in the console.
logo.addEventListener('dragend', onDragEnd); //Note: If we click on the image, it will show 'Drag End event' in the console.