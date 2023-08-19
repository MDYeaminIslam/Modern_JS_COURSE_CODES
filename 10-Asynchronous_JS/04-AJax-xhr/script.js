const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

//readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
//this.readyState ths is the state of the request
//this.status this is the status of the request

xhr.onreadystatechange = function (){
  if(this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText);
    data.forEach((movie) =>{
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movie.title} - ${movie.year}</strong>`;
      document.querySelector('#result').appendChild(li);
    })
  }
};

xhr.send();