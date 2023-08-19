// function toggle(e){
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click',toggle);

const posts = [
  { title: 'Post One', body: "This is post One" },
  { title: 'post Two', body: 'This is post Two' },
];

function createPost(post, cb){
  setTimeout(() =>{
    posts.push(post);
    cb();
  }, 2000);
}


function getPosts(){
  setTimeout(() => {
    posts.forEach((post) =>{
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('.posts').appendChild(div);
    });
  }, 1000 );
};

createPost({ title: 'Post Three', body: 'This is post Three'},getPosts);