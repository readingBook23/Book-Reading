import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxNUoyWLm_ufJvO0G2dFvmzk2nGsubR1o",
  authDomain: "read-859c2.firebaseapp.com",
  projectId: "read-859c2",
  storageBucket: "read-859c2.appspot.com",
  messagingSenderId: "413272972282",
  appId: "1:413272972282:web:c218a2ce0a8d38a6ed6243",
  measurementId: "G-ZQHHLE43LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var password = document.getElementById("password");
var email = document.getElementById("email");

window.signup = function (e) {
    e.preventDefault();

    if (username.value.includes(' ')) {
        alert('Username cannot contain spaces.');
        return;
    }

    // You should add your own validation for the password, e.g., password length and complexity.

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Invalid email format.');
        return;
    }

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(function (userCredential) {
            alert('User logged in successfully.');
            // You can redirect the user to another page here.
        })
        .catch(function (error) {
            // If the user doesn't exist, you can try to create an account.
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(function (userCredential) {
                    alert("Account created successfully.");
                    // You can redirect the user to another page here.
                })
                .catch(function (error) {
                    alert("Error: " + error.message);
                });
        });
        window.signin = function (e) {
          e.preventDefault();
      
          const emailSignIn = document.getElementById("emailSignIn");
          const passwordSignIn = document.getElementById("passwordSignIn");
      
          signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
              .then(function (userCredential) {
                  alert('Login successful');
                  // You can redirect the user or perform additional actions after successful login
              })
              .catch(function (error) {
                  alert("Error: " + error.message);
              });
      };
      signInWithEmailAndPassword(auth, email.value, password.value)
              .then(function (userCredential) {
                alert('User already exists. Please log in.');
              })
};



