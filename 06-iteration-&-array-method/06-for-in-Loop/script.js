

const colorobj = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'yellow',
    color5: 'pink',
}

for (const key in colorobj) {
    console.log(key, colorobj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow', 'pink'];

for (const key in colorArr){
    console.log(colorArr[key]);
}