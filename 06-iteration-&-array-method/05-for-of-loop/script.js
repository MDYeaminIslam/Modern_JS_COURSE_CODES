//For of Loop
//Loop arrays
// const items = ['book','table','chair','kite'];
// for (const item of items) {
//     console.log(item);
// }//Here we are using the for of loop to iterate through the array

// const users =[
//     {
//         name: 'Brad'
//     },
//     {
//         name: 'Kate'
//     },
//     {
//         name: 'Steve'
//     }
// ];

// for (const user of users){
//     console.log(user.name);
// }


//Loop over a
const str = 'Hello World';

for (const letter of str){
    console.log(letter);
}

//Loop over Maps
const map = new Map(); //Map is a key value pair
map.set('name','Yeamin');
map.set('age', 24);

for (const [key,value] of map){
    console.log(key,value);
}
