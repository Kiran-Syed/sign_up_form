// function submitForm(event) {
//   event.preventDefault(); // Prevent the form from submitting and reloading the page

//   const myName = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Display alert
//   alert("Submit successfully!");
//   console.log(`My name is: ${myName}, Email: ${email}, Password: ${password}`);
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFFCHPX5pS_jQN6mIG969MyribFH0yZAg",
  authDomain: "authentication-67cb7.firebaseapp.com",
  projectId: "authentication-67cb7",
  storageBucket: "authentication-67cb7.firebasestorage.app",
  messagingSenderId: "295396449490",
  appId: "1:295396449490:web:d4a680a147035a36eb610b",
  measurementId: "G-Q2SFT9SK0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
const button = document.getElementById("submit");
// button.addEventListener(('click'), function(event){
// alert("hellow kiran");
// })
button.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("successful");
      window.location.href="myweb.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
