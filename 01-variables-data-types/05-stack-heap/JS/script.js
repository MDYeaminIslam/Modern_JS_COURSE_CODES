//Values are stored on the stack when they are assigned to a variable.

const name = 'Yeamin';
const age = 25;

//Reference values are stored on the heap like objects and arrays.

const person = {
    name: 'Yeamin',
    age: 25
}

let newname = name;
newName = 'Yeamin';

let newPerson = person;
newPerson.name = 'Rabiul';


console.log(name,newname);
console.log(person,newPerson);