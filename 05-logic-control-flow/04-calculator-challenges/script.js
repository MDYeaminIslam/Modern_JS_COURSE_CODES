const prompt = require("prompt-sync")();

const calculator = (num1,num2,operator) =>{
    let result;
    switch (operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 -num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator'
    }
    console.log(result);
    return result;
};

//Calling the function
calculator(10,2,'/');
