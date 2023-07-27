console.log( 10 > 5 && 5 > 3 ); // true
console.log( 10 > 20 || 30 < 15); // false

// && - Will return first falsy value or the last value
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;
console.log(a); // 20

const posts = ['Post 1', 'Post 2', 'Post 3']; //we do this because we don't know if the array is empty or not
posts.length > 0 && console.log(posts[0]);

// || - Will return first truthy value or the last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || " " || undefined;
console.log(b); // 10

// ?? - Returns the right side operand when the left side operand is null or undefined

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);
