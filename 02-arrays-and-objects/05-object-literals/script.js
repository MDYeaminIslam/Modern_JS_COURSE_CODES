let x;
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['Sports','Cooking'],
};

x = person.name;
x = person['age'];
x = person.address.street;

person.name = 'Yeamin';
person['isAdmin'] = false;
delete person.age;

person.hasChildren = true;

person.greet = function() {
    console.log(`Hello, My name is ${this.name}`);
};
person.greet();
x = person;
console.log(x);