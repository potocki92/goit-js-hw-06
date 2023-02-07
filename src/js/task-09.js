const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
/* 
  Click button to change 'background-color'. Color is get from 'getRandomHexColor' function.
  Each click changes to a different color. 
*/
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.innerHTML = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
