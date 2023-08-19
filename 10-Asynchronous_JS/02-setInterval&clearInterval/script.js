let interValId;

function startChangeColor(){
  if(!interValId){
    interValId = setInterval(changeColor, 1000);
  }
    
}

// function changeColor(){
//   if(document.body.style.color !== 'black'){
//     document.body.style.backgroundColor = 'White';
//     document.body.style.color = 'black';
//   }
//   else{
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   }
// } this one is old school

//Creating new function to change color and that will be hexadecimal color

function changeColor(){
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
};

function stopChangeColor(){
  clearInterval(interValId);
}

document.getElementById('start').addEventListener('click', startChangeColor);
document.getElementById('stop').addEventListener('click', stopChangeColor );