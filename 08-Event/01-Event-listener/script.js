const clearBtn = document.querySelector("#clear");
function onClear(){
    //clearing all the elements from the list
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    //itemList.innerHTML = ''; //Note: this will clear all the elements from the list.

    // items.forEach(item => item.remove());

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild); //Note: this will remove all the elements from the list.because firstChild will always return the first element of the list.
    }
} //Note: this function is not called anywhere in the code.

//JS Event Listener

// clearBtn.onclick = function(){
//     alert("Clear BTN clicked");
// }

//Add Event Listener
// clearBtn.addEventListener("click", () => alert("Clear BTN clicked")); //we can add multiple event listener to a single element.
clearBtn.addEventListener('click', onClear); //Note: we can pass the function name as well as the function itself.

// setTimeout(() => clearBtn.removeEventListener('click',onClear),5000); //Note: this function will be called after 5 seconds.