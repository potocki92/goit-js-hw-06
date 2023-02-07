const input = document.getElementById("font-size-control");
const value = document.getElementById("text");
input.addEventListener("input", (event) => {
  value.style.fontSize = `${event.target.value}px`;
});
