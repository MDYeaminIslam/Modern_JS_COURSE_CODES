function createPost({title, body}){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body
    }),
    headers:{
      'Content-Type': 'application/json',
      token: 'myToken'
    },
  })
  .then(res => res.json())
  .then(data => console.log(data));

}
createPost({ title: 'Post One', body: 'This is post one'}); //This way send the data to the server