const input = document.getElementById("validation-input");

/*
  The color changes as you type.
  If 'target' has the length given in 'data-length' then the class 'invalid' is removed 
  and 'valid' is added, otherwise 'invalid' is added and 'valid' removed (if exists) 
*/
window.onkeyup = (e) => {
  if (e.target.value.length === parseInt(input.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
