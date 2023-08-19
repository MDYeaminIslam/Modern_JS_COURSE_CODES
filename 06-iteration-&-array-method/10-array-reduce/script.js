const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => acc + cur, 0); //0 is the initial value of the accumulatora and cur is the current value and acc is the accumulator which means the value that is returned from the previous iteration
console.log(sum);

//Using a for loop

const sum2 = () => {
    let acc = 0;
    for (const cur of numbers){
        acc += cur;
    }
    return acc;
};
console.log(sum2());


//Using forEach

const cart = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

const total = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);