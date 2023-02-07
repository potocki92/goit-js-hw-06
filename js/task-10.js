const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
let inputValue = 0;
// initial size for the first box
let dimension = 30;
/*
  'inputValue' gets value from input
  user has the option to click two buttons
  if user click 'Create' button ('data-create') createBoxes() will be enabled
  if user click 'Destroy' button ('data-destroy') destroyBoxes() will be enabled
*/
controls.addEventListener("click", (event) => {
  const target = event.target;
  inputValue = controls.querySelector("input").value;

  target.hasAttribute("data-create") ? createBoxes(inputValue) : destroyBoxes();
});
/*
  random color 
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/* 
  function create 'new boxes' until the loop ends
  first box start from 30px 'width' and 'height' and every loop add 10px to them
  every boxes has random color (getRandomHexColor)
  at the end of the loop, function adds an 'element' to the 'boxes'
*/
function createBoxes(inputValue) {
  for (let i = 0; i < inputValue; i++) {
    let element = document.createElement("div");
    element.style.width = `${dimension}px`;
    element.style.height = `${dimension}px`;

    element.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(element);
    dimension += 10;
  }
}
/*
  remove all 'div' from #boxes
*/
function destroyBoxes() {
  const boxes = document.querySelectorAll("#boxes div");
  boxes.forEach((box, index) => {
    boxes[index].parentNode.removeChild(box);
  });
  dimension = 30;
}
