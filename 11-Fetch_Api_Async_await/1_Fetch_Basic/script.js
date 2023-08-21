//Fetching from a local json file

fetch('./movies.json')
.then((response) => response.json())
.then((data) => console.log(data));

//Fetching from a text file

fetch('./test.txt')
.then((response) => response.text())
.then((data) => console.log(data));

//Fetching from a API

fetch('https://api.github.com/users/MDYeaminIslam/repos')
.then((response) => response.json())
.then((data) => console.log(data));
