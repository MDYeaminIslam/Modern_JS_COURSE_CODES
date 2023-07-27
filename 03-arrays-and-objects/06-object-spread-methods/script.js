let x;
const todo = new Object(); //same as const todo = {};

todo.id = 2;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.93823,
            lng:-7180938,
        }
    }
};

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1,...obj2}; //using spread operator
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'PickUp kids from Madrasa'},
    { id: 3, name: 'Take out trash'},

];

x = todos[0].name;

x = Object.keys(todo); //Extracting key from the objects

x = Object.keys(todo).length; //Find out the lenght of the object

x = Object.values(todo); //Extracting values from the objects

x = Object.entries(todo);

x = todo.hasOwnProperty('age'); //check the attribute present or not

console.log(x);