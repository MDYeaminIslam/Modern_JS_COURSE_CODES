//SetTimeout(changeText, 3000)

function changeText() {
    document.querySelector('h1').textContent = "Hello JavaScript!";
}
const timerId = setTimeout(changeText, 1000);

document.querySelector('#cancel').addEventListener("click", () =>{
  clearTimeout(timerId);
  console.log("Timer stopped");
});
