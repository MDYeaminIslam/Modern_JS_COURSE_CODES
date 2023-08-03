const itemInput = document.querySelector('#item-input');

const onKeyPress = e => {
    console.log('Key Pressed');
}
const onKeyUp = e => {
    console.log('Key Up'); 
}
const onKeyDown = e => {
    //Key
    // if (e.key === 'Enter'){
    //     alert('Enter Pressed');
    // }
    //KeyCode
    if (e.keyCode === 13){
        alert('Enter Pressed');
    }
    //Code
    if(e.code === 'Digit1'){
        alert('Enter Pressed');
    }
    if(e.repeat){
        console.log('Key are holding down' + e.key);
    }
    console.log('Shift: ',e.shiftKey);
    console.log('Control: ',e.ctrlKey);
    console.log('Alt: ',e.altKey);
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);