//Create a promise
// const promise = new Promise((resolve, reject) => {
//   //Do some async stuff
//   setTimeout(() => {
//     console.log("Async work complete");
//     resolve();
//   }, 1000);
// });
// promise.then(() => {
//   console.log("Task completed");
// });
console.log("Hello Form global scope");

const getUser = new Promise((resolve, reject) => {
  //Do some async stuff
  setTimeout(() => {
    let error = false;

    if(!error){
      resolve({ name: "John", age: 26 });
    }
    else{
      reject("Error: Something went wrong");
    }
  }, 1000);
});
getUser.then(() => console.log("Task completed"))
.catch((error) => console.log(error)).
finally(() => console.log("The promise has been resolved or rejected "));