//Immediately Invoked Function Expression means that the function is executed right after it is created.
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
//The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
//This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.
//The function executes immediately after it’s created, and it will not be stored in memory.
//This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.
//This is why, maybe, you have seen this pattern being used in jQuery plugins.
//The syntax for an IIFE is the following:
// (function () {
//     // Do something
// })();
//The first part is a function expression that is wrapped within parentheses.
//This is required because the parser assumes that by default, any line that starts with function keyword is a function declaration.
//The second part () at the end executes the function expression immediately.
//This pattern is useful when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

 

