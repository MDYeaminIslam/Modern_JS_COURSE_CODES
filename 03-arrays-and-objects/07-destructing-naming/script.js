const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,

};

//Destructing

const todo ={
    id: 1,
    title: 'Take out trash',
    user: {
        name : 'Yeamin',
    }
};

const {id, title, user} = todo;

//Destructure arrays
const numbers = [23, 67, 33, 49];

const [ first, second, ...rest] = numbers; //first two number and rest will take rest of the members of the array


console.log(first, second, rest);