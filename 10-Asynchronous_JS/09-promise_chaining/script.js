const promise = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    let error = false;
    
    if(!error){
      resolve({ name: 'Samantha', age: 26 });
    }
    else{
      reject('Error: Something went wrong!');
    }
  }, 1000);
});

promise.then((user) =>{
  console.log(user);
  return user.name;
}).then((name) => {
  console.log(name);
  return name.length;
}).then((nameLength) => {
  console.log(nameLength);
}).catch(() => {
  console.log('Error: Something went wrong!')
});