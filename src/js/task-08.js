const form = document.querySelector(".login-form");

/*
  If user click 'Login', methods save email and password to variables.
  Variables are checked and if one has not value send alert and user need to must fill in the required fields.
  If email and password have value, variables save to 'data', and send to console.
  At the end form is reset.
*/
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Please fill all inputs!");
    return;
  }

  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  form.reset();
});
