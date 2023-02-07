const value = document.getElementById("value");
const counter = document.getElementById("counter");
let counterValue = 0;

counter.addEventListener("click", (event) => {
  const target = event.target;
  const action = target.dataset.action;

  counterValue =
    action === "increment" ? (counterValue += 1) : (counterValue -= 1);
  console.log(counterValue);

  value.textContent = counterValue;
});
