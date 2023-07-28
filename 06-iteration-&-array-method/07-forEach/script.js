//High Order array methods -> forEach

const socials = ['Twitter', 'Facebook', 'Instagram', 'Youtube'];

// console.log(typeof socials.__proto__);
//Using function declaration
// socials.forEach(function(item){
//     console.log(item);
// });

//Using arrow function
// socials.forEach((item,index,arr) => console.log(`${index} - ${item}`,arr));

//Aonther way to do the same thing 

// function logSocials(item,index,arr){
//     console.log(`${index} - ${item}`,arr);
// }
// socials.forEach(logSocials); //Do not use () after the function name

const socialObjs =[
    { name : 'Twitter', link : 'https://twitter.com'},
    { name : 'Facebook', link : 'https://facebook.com'},
    { name : 'Instagram', link : 'https://instagram.com'},
    { name : 'Youtube', link : 'https://youtube.com'},
];

socialObjs.forEach(item => console.log(item.name)); //return the name of the socials
