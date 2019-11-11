const myButton = document.querySelector("#button1")
// add an eventListener, a js event + yr call back
myButton.addEventListener('click', clickButton)
// this is callback function
function clickButton() {
  console.log("clicked!");
}
const myBody = document.querySelector('body');
// check out the style properties of that element!
console.log(myBody.style)
const myOtherButton = document.querySelector("#button2")
myOtherButton.addEventListener('click', changeColors)
// call backfunction to respond when users clicks
function changeColors() {
  console.log("colors changed");
  // change the font color
  myBody.style.color = "yellow";
  // change the background color
  myBody.style.backgroundColor = "rebeccapurple"
}
