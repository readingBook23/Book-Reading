import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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
const db = getDatabase(app);

var password = document.getElementById("password");
var email = document.getElementById("email");

// Function for user sign-up
window.signup = function (e) {
    e.preventDefault();

    // Add your username validation here (if you have an element with the id "username")
    var username = document.getElementById("username");
    if (username.value.includes(' ')) {
        alert('Username cannot contain spaces.');
        return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Invalid email format.');
        return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(function (userCredential) {
            const user = userCredential.user;

            // Store user information in the database
            const usersRef = ref(db, 'users/' + user.uid);
            const userData = {
                email: user.email,
                username: username.value, 
            };
            
            set(usersRef, userData)
                .then(() => {
                    alert("Account created successfully.");
                })
                .catch(function (error) {
                    alert("Error storing user data: " + error.message);
                });
        })
        .catch(function (error) {
            alert("Error: " + error.message);
        });
};

window.signin = function (e) {
    e.preventDefault();

    const emailSignIn = document.getElementById("emailSignIn");
    const passwordSignIn = document.getElementById("passwordSignIn");

    signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
        .then(function (userCredential) {
            alert('Login successful');
        })
        .catch(function (error) {
            alert("Error: " + error.message);
        });
};




