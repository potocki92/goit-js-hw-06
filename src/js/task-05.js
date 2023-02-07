let span = document.getElementById("name-output");
// default text from span: "Anonymous"
const defaultSpanValue = span.innerHTML;
let inputTextValue;

/*
   Send the value to "inputTextValue" if the user is typing and show it in the scope.
   If 'inputTextValue' is empty then show default value ("Anonymous")
*/
window.onkeyup = (e) => {
  inputTextValue = e.target.value;
  span.innerHTML = inputTextValue === "" ? defaultSpanValue : inputTextValue;
};
