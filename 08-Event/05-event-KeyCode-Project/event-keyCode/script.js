//Method 1

// window.addEventListener('keydown', (e) =>{
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key }
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>`;
// });

//${e.key} = show the key that you press
//${e.keyCode} = show the keyCode of the key that you press
//${e.code} = show the code of the key that you press



//Method 2
function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key ,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    for(let key in keyCodes){
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]); //Note: 
        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }

}

window.addEventListener('keydown', showKeyCodes);