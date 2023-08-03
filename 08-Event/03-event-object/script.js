const logo = document.querySelector('img');

function onClick(e){
    // console.log(e); //Note: If we click on the image, it will show the event object in the console.
    // console.log(e.currentTarget); 
    // console.log(e.type);
    //console.log(e.timeStamp);
    // console.log(e.clientX, e.clientY); //Note: It will show the position of the mouse pointer relative to the window.
    // console.log(e.offsetX, e.offsetY); //Note: It will show the position of the mouse pointer relative to the element.
    //console.log(e.pageX, e.pageY); //Note: It will show the position of the mouse pointer relative to the document / page.
    // console.log(e.screenX, e.screenY); //Note: It will show the position of the mouse pointer relative to the screen.


}
function onDrag(e){
    document.querySelector('h1').textContent = `X : ${e.clientX} Y : ${e.clientY}`;
}
logo.addEventListener('click', onClick); 
logo.addEventListener('drag', onDrag);

document.querySelector('a').addEventListener('click', function(e){ e.preventDefault(); console.log('You clicked the link'); }); //Note: It will prevent the default behaviour of the link.
/*
 - `target` -> The element that triggered the event
- `currentTarget` -> The element that the event listener is attached to(These are the same in this case)
- `type` -> The type of event that was triggered
- `timeStamp` -> The time that the event was triggered 
- `clientX` -> The x position of the mouse pointer relative to the window
- `clientY` -> The y position of the mouse clicked relative to the window
- `offsetX` -> The x position of the mouse clicked relative to the element
- `offsetY` -> The y position of the mouse clicked relative to the element
- `pageX` -> The x position of the mouse clicked relative to the document / page
- `pageY` -> The y position of the mouse clicked relative to the document / page
- `screenX` -> The x position of the mouse clicked relative to the screen
- `screenY` -> The y position of the mouse clicked relative to the screen
*/