function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  const myName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Display alert
  alert("Submit successfully!");
  console.log(`My name is: ${myName}, Email: ${email}, Password: ${password}`);
}
