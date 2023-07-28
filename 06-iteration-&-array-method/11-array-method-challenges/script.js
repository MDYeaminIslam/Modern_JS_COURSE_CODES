
//Challenge 1
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        age: 20,
    },
    {
        firstName: 'Robin',
        lastName: 'Islam',
        email: 'robin@gmail.com',
        age: 25,
    },
    {
        firstName: 'Sharafat',
        lastName: 'Hussain',
        email: 'sharafat@gmail.com',
        age: 21,
    },
    {
        firstName: 'Amena',
        lastName: 'Islam',
        email: 'amena@gmail.com',
        age: 43,
    },
    {
        firstName: 'Isfak',
        lastName: 'Rois',
        email: 'isfak@gmail.com',
        age: 39,
    },
];

const youngPeople = people.filter(person => person.age <= 25).map(person => {
    return {
        fullName: `${person.firstName} ${person.lastName}`,
        email: person.email,
    }
}); //here we can run multiple conditions.

console.log(youngPeople);


//Challege 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers.filter((number) => number > 0).reduce((acc, cur) => acc + cur, 0);
console.log(positiveNumbers); // here we add all the positive numbers together.

//Challenge 3
const words = ['coder', 'programmer', 'software', 'developer'];

const capitalWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1 , word.length)
});
console.log(capitalWords); // here we capitalize the first letter of each word.
