let x;
const name = 'Yeamin';
const age =24;

x = 'Hello,my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello, My name is ${name} and I am ${age} years old`;


// String  Properties and Methods
const s = new String('Hello World');

x = typeof s; //type of the variable
x = s.length; //length of the string

//Access value by key
x = s[0];

x = s.__proto__; //access the prototype of the string

x = s.toUpperCase(); //convert to uppercase
x = s.toLowerCase(); //convert to lowercase

x = s.charAt(3); //access the character at index 3

x = s.indexOf('W'); //access the index of the first occurence of the character 'W'

x = s.substring(0, 5); //access the substring from index 0 to 5

x = s.substring(6); //access the substring from index 7 to the end

x = s.slice(0,6); //access the substring from negative index 0 to 6
x = '     Hello World'; 
x = x.trim(); //remove the white spaces from the beginning and the end
x = s.replace('World', 'There'); //replace the first occurence of 'World' with 'There'

x = s.includes('World'); //check if the string includes 'World'

x = s.valueOf(); //return the primitive value of the string

x = s.split(''); //split the string into an array of substrings

console.log(x);    