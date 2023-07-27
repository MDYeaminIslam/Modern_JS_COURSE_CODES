//Function Declaration

function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(5)); //we can call the function before it is declared

//Function Expression
const addPlusSign = function(value){
    return '+' + value;
};

console.log(addPlusSign(5)); //we can't call the function before it is declared