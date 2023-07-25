const post = {
    id: 1,
    titile: 'Post One',
    body: 'This is the body',

};

//Convert to Json string
const str = JSON.stringify(post);

//Convert JSON to 
const obj = JSON.parse(str); //JSON.parse() takes a JSON string and transforms it into a JavaScript object.

const posts = [
    {
        id: 1,
        titile: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        titile: 'Post Two',
        body: 'This is the body',
    }

];

const str2 = JSON.stringify(posts);

console.log(str2);
