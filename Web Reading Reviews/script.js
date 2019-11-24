let sur = document.getElementById("surprise")
alert("sup")
console.log("help")

function wut(){
  document.querySelector("body").style.background = (100, 100, 100);
  alert("I tried to get the background color to change when you click the button but failed. Here's an alert instead.")
}

sur.addEventListener('click', wut)
